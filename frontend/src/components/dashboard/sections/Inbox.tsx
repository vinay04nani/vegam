"use client";

import { useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { sampleQuickReplies, sampleTeam, sampleThreads, type InboxChannel, type Thread, type ThreadMessage, type ThreadOwner } from "@/content/dashboard";
import { sampleContacts, type Contact, type ContactChannel } from "@/content/contacts";
import { Icon } from "@/components/ui/Icon";
import { Avatar, Button, Menu, SegmentedControl, useToast } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { ChannelMark, ContactDetails } from "./ContactDetails";

// Every chat in one list, with the open conversation beside it and, on wide
// screens, the customer's profile. The team can take over a chat (the AI
// pauses), hand it back, assign it, leave internal notes, snooze or resolve it.
// Demo: everything here lives in this component only.

type Status = "open" | "snoozed" | "resolved";
type InboxThread = Thread & { status: Status; assignee: string | null; snoozedUntil?: string };
type Filter = "all" | ThreadOwner | "snoozed" | "resolved";

const channelKey: Record<InboxChannel, ContactChannel> = { WhatsApp: "whatsapp", Instagram: "instagram", Messenger: "messenger", Website: "website", "Missed call": "phone" };

function OwnerPill({ owner }: { owner: ThreadOwner }) {
  const style = { ai: "bg-periwinkle-soft text-brand", team: "bg-[#E8F3EA] text-success", needs: "bg-[#FFF3E6] text-warning" }[owner];
  return <span className={`rounded-full px-2 py-0.5 text-[11.5px] font-semibold whitespace-nowrap ${style}`}>{{ ai: "AI", team: "Team", needs: "Needs you" }[owner]}</span>;
}

/** A static waveform for voice notes; bar heights come from the duration so each note looks different. */
function Waveform({ seed }: { seed: string }) {
  const bars = Array.from({ length: 28 }, (_, i) => 6 + ((seed.charCodeAt(i % seed.length) * (i + 3)) % 16));
  return (
    <span aria-hidden="true" className="flex h-6 items-center gap-[2px]">
      {bars.map((h, i) => (
        <span key={i} className="w-[3px] rounded-full bg-current opacity-60" style={{ height: h }} />
      ))}
    </span>
  );
}

function Bubble({ m }: { m: ThreadMessage }) {
  const toast = useToast();
  const customer = m.from === "customer";
  if (m.kind === "note") {
    return (
      <div className="flex max-w-[78%] flex-col gap-1 self-end">
        <span className="flex items-center justify-end gap-1 px-1 text-[12px] font-medium text-subtle">
          <Icon name="lock" size={11} />
          Internal note · {m.time}
        </span>
        <div className="rounded-[14px] border border-[#F2DFA0] bg-[#FFF8E1] px-4 py-2.5 text-[14.5px] leading-snug text-ink">{m.text}</div>
      </div>
    );
  }
  const label = { customer: "Customer", ai: "AI assistant", team: "You" }[m.from];
  const tone = customer ? "rounded-tl-[6px] bg-panel text-ink" : m.from === "ai" ? "rounded-tr-[6px] bg-periwinkle-soft text-ink" : "rounded-tr-[6px] bg-ink text-white";
  return (
    <div className={`flex max-w-[78%] flex-col gap-1 ${customer ? "self-start" : "items-end self-end"}`}>
      <span className="px-1 text-[12px] font-medium text-subtle">
        {label} · {m.time}
      </span>
      {m.kind === "image" ? (
        <figure className={`m-0 flex flex-col overflow-hidden rounded-[18px] ${tone}`}>
          {m.src ? (
            <img src={m.src} alt="Attached by your team" className="max-h-56 w-full object-cover" />
          ) : (
            <span role="img" aria-label="Photo sent by the customer" className="flex h-36 w-56 items-center justify-center bg-gradient-to-br from-[#DDE2FB] to-[#F6E3D3] text-muted">
              <Icon name="image" size={28} />
            </span>
          )}
          {m.text && <figcaption className="px-4 py-2 text-[14.5px]">{m.text}</figcaption>}
        </figure>
      ) : m.kind === "voice" ? (
        <div className={`flex flex-col gap-2 rounded-[18px] px-3.5 py-2.5 ${tone}`}>
          <span className="flex items-center gap-3">
            <button type="button" aria-label={`Play voice note, ${m.duration}`} onClick={() => toast("Playing voice note (demo)", "info")} className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white">
              <Icon name="play" size={13} />
            </button>
            <Waveform seed={m.text} />
            <span className="text-[12.5px] font-semibold tabular-nums">{m.duration}</span>
          </span>
          <span className="flex gap-1.5 border-t border-black/5 pt-2 text-[13.5px] leading-snug text-ink-soft">
            <Icon name="sparkle" size={13} className="mt-0.5 flex-none text-brand" />
            <span>
              <span className="sr-only">Transcript: </span>“{m.text}”
            </span>
          </span>
        </div>
      ) : (
        <div className={`rounded-[18px] px-4 py-2.5 text-[15px] leading-snug ${tone}`}>{m.text}</div>
      )}
    </div>
  );
}

function contactFor(t: Thread, contacts: Contact[]): Contact {
  const found = contacts.find((c) => c.name === t.who || c.phone === t.who);
  if (found) return found;
  return {
    id: `t-${t.id}`,
    name: t.who,
    phone: t.who.startsWith("+") ? t.who : "Not shared",
    channels: [channelKey[t.channel]],
    tags: ["New"],
    lastVisitDays: null,
    bookings: 0,
    noShows: 0,
    optIn: "not-asked",
    consent: `Messaged first on ${t.channel}. Not yet asked about WhatsApp messages.`,
    firstSeen: "Today",
    timeline: [{ at: t.time, kind: "chat", text: `First message on ${t.channel}` }],
  };
}

export function Inbox({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [threads, setThreads] = useState<InboxThread[]>(() => sampleThreads.map((t) => ({ ...t, status: "open", assignee: t.owner === "team" ? "You" : null })));
  const [contacts, setContacts] = useState<Contact[]>(sampleContacts);
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [mode, setMode] = useState<"reply" | "note">("reply");
  const [panel, setPanel] = useState(true);
  const [picker, setPicker] = useState(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);

  const inFilter = (t: InboxThread) => (filter === "snoozed" || filter === "resolved" ? t.status === filter : t.status === "open" && (filter === "all" || t.owner === filter));
  const visible = threads.filter((t) => inFilter(t) && (!query.trim() || `${t.who} ${t.messages.map((m) => m.text).join(" ")}`.toLowerCase().includes(query.toLowerCase())));
  // Desktop always shows a conversation; phones show the list until one is opened.
  const open = threads.find((t) => t.id === openId) ?? visible[0] ?? threads[0];
  const contact = contactFor(open, contacts);

  const change = (id: string, fn: (t: InboxThread) => InboxThread) => setThreads((ts) => ts.map((t) => (t.id === id ? fn(t) : t)));
  const now = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  const select = (id: string) => {
    setOpenId(id);
    change(id, (t) => ({ ...t, unread: false }));
  };

  // "/" at the start of the reply box opens saved replies.
  const slash = draft.startsWith("/") ? draft.slice(1).toLowerCase() : null;
  const replies = useMemo(() => (slash === null ? [] : sampleQuickReplies.filter((r) => `${r.title} ${r.text}`.toLowerCase().includes(slash))), [slash]);
  const pick = (text: string) => {
    setDraft(text);
    setPicker(0);
    input.current?.focus();
  };

  const send = (e?: FormEvent) => {
    e?.preventDefault();
    const text = draft.trim();
    if (!text || slash !== null) return;
    const time = now();
    if (mode === "note") {
      change(open.id, (t) => ({ ...t, messages: [...t.messages, { from: "team", text, time, kind: "note" }] }));
    } else {
      // Replying takes the chat over from the AI.
      change(open.id, (t) => ({ ...t, owner: "team", assignee: t.assignee ?? "You", time, messages: [...t.messages, { from: "team", text, time }] }));
    }
    setDraft("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (replies.length) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setPicker((i) => (i + (e.key === "ArrowDown" ? 1 : -1) + replies.length) % replies.length);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        pick(replies[Math.min(picker, replies.length - 1)].text);
        return;
      }
      if (e.key === "Escape") {
        e.stopPropagation();
        setDraft("");
        return;
      }
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const snooze = (label: string) => {
    change(open.id, (t) => ({ ...t, status: "snoozed", snoozedUntil: label }));
    setOpenId(null);
    toast(`Snoozed until ${label.toLowerCase()}`);
  };

  const counts = {
    needs: threads.filter((t) => t.status === "open" && t.owner === "needs").length,
    snoozed: threads.filter((t) => t.status === "snoozed").length,
    unread: threads.filter((t) => t.status === "open" && t.unread).length,
  };

  const filters: { id: Filter; label: string; count?: number }[] = [
    { id: "all", label: "Open" },
    { id: "needs", label: "Needs you", count: counts.needs },
    { id: "ai", label: "AI" },
    { id: "team", label: "Team" },
    { id: "snoozed", label: "Snoozed", count: counts.snoozed },
    { id: "resolved", label: "Resolved" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Inbox" body="Every chat in one place. Take over any conversation and the AI pauses for it." />
        <span className="flex items-center gap-3">
          {counts.unread > 0 && <span className="text-[14px] font-semibold text-ink-soft">{counts.unread} unread</span>}
          <SampleTag />
        </span>
      </div>

      <div
        className={`grid h-[min(760px,calc(100svh-200px))] min-h-[540px] grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[22px] border border-line bg-white lg:grid-cols-[320px_minmax(0,1fr)] ${panel ? "xl:grid-cols-[320px_minmax(0,1fr)_320px]" : ""}`}
      >
        {/* Conversation list */}
        <div className={`flex min-h-0 flex-col border-r border-line ${openId ? "max-lg:hidden" : ""}`}>
          <div className="flex flex-col gap-3 border-b border-line p-3">
            <label className="relative">
              <span className="sr-only">Search conversations</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="min-h-11 w-full rounded-full border border-line-strong bg-white pr-4 pl-10 text-[15px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
              />
              <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-subtle" />
            </label>
            <div role="tablist" aria-label="Filter conversations" className="-mx-3 flex gap-1.5 overflow-x-auto px-3 pb-0.5">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`min-h-9 flex-none cursor-pointer rounded-full px-3.5 text-[14px] font-semibold transition ${filter === f.id ? "bg-ink text-white" : "bg-panel text-ink-soft hover:text-ink"}`}
                >
                  {f.label}
                  {!!f.count && <span className={`ml-1.5 rounded-full px-1.5 text-[11.5px] ${f.id === "needs" ? "bg-warning text-white" : "bg-white text-ink"}`}>{f.count}</span>}
                </button>
              ))}
            </div>
          </div>
          <ul className="m-0 min-h-0 flex-1 list-none overflow-y-auto p-0">
            {visible.length === 0 && (
              <li className="flex flex-col items-center gap-2 p-8 text-center">
                <Icon name="inbox" size={24} className="text-faint" />
                <span className="text-[15px] text-subtle">{filter === "resolved" ? "Resolved chats show up here." : filter === "snoozed" ? "Nothing snoozed." : "No conversations match."}</span>
              </li>
            )}
            {visible.map((t) => {
              const last = t.messages[t.messages.length - 1];
              const active = t.id === open.id;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => select(t.id)}
                    aria-current={active ? "true" : undefined}
                    className={`flex w-full cursor-pointer items-start gap-3 border-b border-line px-4 py-3.5 text-left transition ${active ? "bg-page lg:bg-periwinkle-soft/60" : "hover:bg-page"}`}
                  >
                    <span className="relative flex-none">
                      <Avatar name={t.who} size={40} />
                      <span aria-hidden="true" className="absolute -right-1 -bottom-1">
                        <ChannelMark channel={channelKey[t.channel]} size={20} />
                      </span>
                      {t.unread && <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-orange" aria-label="Unread" />}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="flex items-center justify-between gap-2">
                        <span className={`truncate text-[15px] text-ink ${t.unread ? "font-bold" : "font-semibold"}`}>{t.who}</span>
                        <span className="flex-none text-[12px] text-subtle">{t.time}</span>
                      </span>
                      <span className="truncate text-[14px] text-subtle">
                        {last.kind === "note" ? "Note: " : last.kind === "voice" ? "Voice note: " : last.kind === "image" ? "Photo: " : ""}
                        {last.text}
                      </span>
                      <span className="mt-1 flex items-center gap-2">
                        <OwnerPill owner={t.owner} />
                        {t.status === "snoozed" && <span className="text-[12px] text-subtle">Until {t.snoozedUntil?.toLowerCase()}</span>}
                        {t.assignee && t.status === "open" && <span className="truncate text-[12px] text-subtle">{t.assignee === "You" ? "Assigned to you" : t.assignee}</span>}
                        <span className="sr-only">on {t.channel}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Open conversation */}
        <div className={`flex min-h-0 flex-col ${openId ? "" : "max-lg:hidden"}`}>
          <div className="flex items-center gap-2 border-b border-line px-3 py-3 sm:px-4">
            <button type="button" onClick={() => setOpenId(null)} aria-label="Back to conversations" className="-ml-1 cursor-pointer rounded-full p-1 text-ink lg:hidden">
              <Icon name="chevron-left" size={22} />
            </button>
            <span className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="truncate text-[16px] font-semibold text-ink">{open.who}</span>
              <span className="truncate text-[13px] text-subtle">
                {open.channel} · {open.status === "resolved" ? "Resolved" : open.owner === "ai" ? "The AI is replying" : open.owner === "team" ? `${open.assignee === "You" || !open.assignee ? "You’re" : `${open.assignee} is`} handling this chat` : "Waiting for a person"}
              </span>
            </span>
            {open.status !== "resolved" &&
              (open.owner === "team" ? (
                <Button onClick={() => change(open.id, (t) => ({ ...t, owner: "ai" }))}>Hand back to AI</Button>
              ) : (
                <Button variant="primary" onClick={() => change(open.id, (t) => ({ ...t, owner: "team", assignee: t.assignee ?? "You" }))}>
                  Take over
                </Button>
              ))}
            <Menu
              label="Assign"
              icon="users"
              items={[
                { label: "Assign to", heading: true },
                ...sampleTeam.map((m) => ({
                  label: m.name === "You" ? "You" : m.name,
                  checked: open.assignee === m.name,
                  onSelect: () => {
                    change(open.id, (t) => ({ ...t, assignee: m.name }));
                    toast(m.name === "You" ? "Assigned to you" : `Assigned to ${m.name}`);
                  },
                })),
                { label: "Nobody", checked: !open.assignee, onSelect: () => change(open.id, (t) => ({ ...t, assignee: null })) },
              ]}
            />
            <Menu
              label="More actions"
              items={[
                ...(open.status === "resolved"
                  ? [{ label: "Reopen", onSelect: () => change(open.id, (t) => ({ ...t, status: "open" as Status })) }]
                  : [
                      {
                        label: "Mark resolved",
                        onSelect: () => {
                          change(open.id, (t) => ({ ...t, status: "resolved", owner: t.owner === "needs" ? "team" : t.owner }));
                          setOpenId(null);
                          toast("Marked resolved");
                        },
                      },
                    ]),
                { label: "Snooze until", heading: true },
                { label: "In 1 hour", onSelect: () => snooze("In 1 hour") },
                { label: "Tomorrow morning", onSelect: () => snooze("Tomorrow morning") },
                { label: "Next week", onSelect: () => snooze("Next week") },
                { label: "Mark as unread", onSelect: () => change(open.id, (t) => ({ ...t, unread: true })) },
              ]}
            />
            <button
              type="button"
              onClick={() => setPanel((p) => !p)}
              aria-pressed={panel}
              aria-label="Customer details"
              title="Customer details"
              className={`hidden h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-[10px] border transition xl:inline-flex ${panel ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:bg-panel"}`}
            >
              <Icon name="users" size={17} />
            </button>
          </div>

          <div aria-live="polite" className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-5 sm:px-6">
            {open.messages.map((m, i) => (
              <Bubble key={i} m={m} />
            ))}
            {open.owner === "team" && open.status === "open" && <p className="m-0 self-center rounded-full bg-panel px-3 py-1 text-[12.5px] text-subtle">The AI is paused for this chat</p>}
            {open.status === "resolved" && <p className="m-0 self-center rounded-full bg-[#E8F3EA] px-3 py-1 text-[12.5px] font-semibold text-success">Resolved. A new message reopens it.</p>}
          </div>

          <form onSubmit={send} className={`relative flex flex-col gap-2 border-t border-line p-3 sm:px-4 ${mode === "note" ? "bg-[#FFFBEB]" : ""}`}>
            {replies.length > 0 && (
              <div role="listbox" aria-label="Saved replies" className="absolute inset-x-3 bottom-full mb-2 overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_16px_40px_rgb(30_31_43/0.16)] sm:inset-x-4">
                <p className="m-0 border-b border-line px-3.5 py-2 text-[12px] font-semibold tracking-[0.04em] text-muted uppercase">Saved replies</p>
                {replies.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    role="option"
                    aria-selected={i === picker}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => pick(r.text)}
                    className={`flex w-full cursor-pointer flex-col px-3.5 py-2 text-left ${i === picker ? "bg-periwinkle-soft/60" : "hover:bg-page"}`}
                  >
                    <span className="text-[14px] font-semibold text-ink">{r.title}</span>
                    <span className="truncate text-[13px] text-subtle">{r.text}</span>
                  </button>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between gap-2">
              <SegmentedControl
                label="Message type"
                size="sm"
                value={mode}
                onChange={setMode}
                options={[
                  { id: "reply", label: "Reply" },
                  { id: "note", label: "Note", icon: "lock" },
                ]}
              />
              <span className="hidden text-[12.5px] text-subtle sm:inline">{mode === "note" ? "Only your team sees notes" : "Type / for saved replies"}</span>
            </div>
            <div className="flex items-end gap-2">
              <button type="button" onClick={() => fileInput.current?.click()} aria-label="Attach a photo" className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full text-muted hover:bg-panel hover:text-ink">
                <Icon name="image" size={19} />
              </button>
              <input
                ref={fileInput}
                type="file"
                accept="image/*"
                className="sr-only"
                aria-label="Photo to attach"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const time = now();
                  change(open.id, (t) => ({ ...t, owner: "team", assignee: t.assignee ?? "You", messages: [...t.messages, { from: "team", text: "", time, kind: "image", src: URL.createObjectURL(f) }] }));
                  e.target.value = "";
                }}
              />
              <label className="flex-1">
                <span className="sr-only">{mode === "note" ? `Note about ${open.who}` : `Reply to ${open.who}`}</span>
                <textarea
                  ref={input}
                  rows={1}
                  value={draft}
                  onChange={(e) => {
                    setDraft(e.target.value);
                    setPicker(0);
                  }}
                  onKeyDown={onKeyDown}
                  placeholder={mode === "note" ? "Write a note for your team…" : open.owner === "team" ? "Write a reply…" : "Reply to take over from the AI…"}
                  className="block max-h-32 min-h-11 w-full resize-none rounded-[22px] border border-line-strong bg-white px-4 py-[10px] text-[15px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
                />
              </label>
              <button type="submit" aria-label={mode === "note" ? "Add note" : "Send reply"} className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white">
                <Icon name={mode === "note" ? "check" : "send"} size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Customer details */}
        {panel && (
          <aside aria-label="Customer details" className="hidden min-h-0 overflow-y-auto border-l border-line p-5 xl:block">
            <ContactDetails key={contact.id} contact={contact} actions={false} onOpen={onOpen} onChange={(c) => setContacts((cs) => (cs.some((x) => x.id === c.id) ? cs.map((x) => (x.id === c.id ? c : x)) : [c, ...cs]))} />
          </aside>
        )}
      </div>
    </div>
  );
}
