"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { sampleQuickReplies, sampleTeam, sampleThreads, type InboxChannel, type Thread, type ThreadMessage, type ThreadOwner } from "@/content/dashboard";
import { sampleContacts, type Contact, type ContactChannel } from "@/content/contacts";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Avatar, Drawer, Menu, useToast } from "../kit";
import { SampleTag } from "../ui";
import { ChannelMark, ContactDetails } from "./ContactDetails";

// A full-height inbox in the style of Intercom and Front: folders, the
// conversation list, the open chat and the customer's details side by side.
// The AI status strip above the reply box says who is answering and lets the
// team take over or hand back. Every panel has its own space; nothing floats
// over the conversation.
// Demo: everything here lives in this component only.

type Status = "open" | "snoozed" | "resolved";
type InboxThread = Thread & { status: Status; assignee: string | null; snoozedUntil?: string };
type Folder = "open" | "needs" | "mine" | "unassigned" | "ai" | "snoozed" | "resolved" | InboxChannel;

const channelKey: Record<InboxChannel, ContactChannel> = { WhatsApp: "whatsapp", Instagram: "instagram", Messenger: "messenger", Website: "website", "Missed call": "phone" };
const channels: InboxChannel[] = ["WhatsApp", "Instagram", "Messenger", "Website", "Missed call"];

const folderMeta: Record<string, { label: string; icon: IconName }> = {
  open: { label: "All open", icon: "inbox" },
  needs: { label: "Needs you", icon: "bell" },
  mine: { label: "Assigned to me", icon: "users" },
  unassigned: { label: "Unassigned", icon: "users" },
  ai: { label: "Handled by AI", icon: "sparkle" },
  snoozed: { label: "Snoozed", icon: "clock" },
  resolved: { label: "Resolved", icon: "check" },
};
const folderLabel = (f: Folder) => folderMeta[f]?.label ?? f;

function matches(t: InboxThread, f: Folder) {
  if (f === "snoozed" || f === "resolved") return t.status === f;
  if (t.status !== "open") return false;
  if (f === "open") return true;
  if (f === "needs") return t.owner === "needs";
  if (f === "mine") return t.assignee === "You";
  if (f === "unassigned") return !t.assignee;
  if (f === "ai") return t.owner === "ai";
  return t.channel === f;
}

/** A static waveform for voice notes; bar heights come from the text so each note looks different. */
function Waveform({ seed }: { seed: string }) {
  const bars = Array.from({ length: 26 }, (_, i) => 6 + ((seed.charCodeAt(i % seed.length) * (i + 3)) % 16));
  return (
    <span aria-hidden="true" className="flex h-6 min-w-0 flex-1 items-center gap-[2px] overflow-hidden">
      {bars.map((h, i) => (
        <span key={i} className="w-[3px] flex-none rounded-full bg-current opacity-50" style={{ height: h }} />
      ))}
    </span>
  );
}

function Message({ m, who }: { m: ThreadMessage; who: string }) {
  const toast = useToast();
  if (m.kind === "event") {
    return (
      <p className="m-0 flex items-center gap-3 text-[12.5px] text-subtle">
        <span className="h-px flex-1 bg-line" />
        {m.text} · {m.time}
        <span className="h-px flex-1 bg-line" />
      </p>
    );
  }
  if (m.kind === "note") {
    return (
      <div className="flex max-w-[80%] flex-col items-end gap-1 self-end">
        <div className="rounded-[14px] rounded-tr-[4px] border border-[#F2DFA0] bg-[#FFF8E1] px-3.5 py-2.5 text-[14.5px] leading-snug text-ink">{m.text}</div>
        <span className="flex items-center gap-1 px-1 text-[12px] text-subtle">
          <Icon name="lock" size={11} />
          Internal note · {m.time}
        </span>
      </div>
    );
  }

  const customer = m.from === "customer";
  const bubble = customer ? "rounded-tl-[4px] border border-line bg-white text-ink" : m.from === "ai" ? "rounded-tr-[4px] bg-periwinkle-soft text-ink" : "rounded-tr-[4px] bg-ink text-white";
  const body =
    m.kind === "image" ? (
      <figure className={`m-0 overflow-hidden rounded-[16px] ${bubble}`}>
        {m.src ? (
          <img src={m.src} alt="Photo sent by your team" className="max-h-60 w-full max-w-[280px] object-cover" />
        ) : (
          <span role="img" aria-label="Photo sent by the customer" className="flex h-40 w-[240px] max-w-full items-center justify-center bg-gradient-to-br from-[#DDE2FB] to-[#F6E3D3] text-muted">
            <Icon name="image" size={28} />
          </span>
        )}
        {m.text && <figcaption className="px-3.5 py-2 text-[14.5px]">{m.text}</figcaption>}
      </figure>
    ) : m.kind === "voice" ? (
      <div className={`flex w-[300px] max-w-full flex-col gap-2 rounded-[16px] px-3 py-2.5 ${bubble}`}>
        <span className="flex items-center gap-2.5">
          <button type="button" aria-label={`Play voice note, ${m.duration}`} onClick={() => toast("Playing voice note (demo)", "info")} className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white">
            <Icon name="play" size={13} />
          </button>
          <Waveform seed={m.text} />
          <span className="flex-none text-[12.5px] font-semibold tabular-nums">{m.duration}</span>
        </span>
        <span className="flex gap-1.5 border-t border-line pt-2 text-[13.5px] leading-snug text-ink-soft">
          <Icon name="sparkle" size={13} className="mt-0.5 flex-none text-brand" />
          <span>
            <span className="sr-only">Transcript: </span>“{m.text}”
          </span>
        </span>
      </div>
    ) : (
      <div className={`rounded-[16px] px-3.5 py-2.5 text-[15px] leading-snug ${bubble}`}>{m.text}</div>
    );

  return (
    <div className={`flex max-w-[80%] gap-2.5 ${customer ? "self-start" : "flex-row-reverse self-end"}`}>
      {customer ? (
        <Avatar name={who} size={28} />
      ) : m.from === "ai" ? (
        <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink text-accent">
          <Icon name="sparkle" size={13} />
        </span>
      ) : (
        <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-indigo text-[11px] font-bold text-white">
          You
        </span>
      )}
      <div className={`flex min-w-0 flex-col gap-1 ${customer ? "items-start" : "items-end"}`}>
        {body}
        <span className="px-1 text-[12px] text-subtle">
          {customer ? "" : m.from === "ai" ? "AI assistant · " : "You · "}
          {m.time}
        </span>
      </div>
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
  const [folder, setFolder] = useState<Folder>("open");
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileThread, setMobileThread] = useState(false);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [mode, setMode] = useState<"reply" | "note">("reply");
  // Customer details stay hidden until the name or photo in the chat header is clicked.
  const [panel, setPanel] = useState(false);
  const [details, setDetails] = useState(false);
  /** Wide screens get a side panel beside the chat; smaller ones a slide-over. */
  const showDetails = () => (window.matchMedia("(min-width: 1280px)").matches ? setPanel((p) => !p) : setDetails(true));
  const [picker, setPicker] = useState(0);
  const [showReplies, setShowReplies] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);

  const visible = threads.filter((t) => matches(t, folder) && (!query.trim() || `${t.who} ${t.messages.map((m) => m.text).join(" ")}`.toLowerCase().includes(query.toLowerCase())));
  const open = threads.find((t) => t.id === openId) ?? visible[0] ?? null;
  const contact = open ? contactFor(open, contacts) : null;
  const count = (f: Folder) => threads.filter((t) => matches(t, f)).length;

  const now = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const change = (id: string, fn: (t: InboxThread) => InboxThread) => setThreads((ts) => ts.map((t) => (t.id === id ? fn(t) : t)));
  const event = (t: InboxThread, text: string): ThreadMessage[] => [...t.messages, { from: "team", text, time: now(), kind: "event" }];

  const select = (id: string) => {
    setOpenId(id);
    setMobileThread(true);
    change(id, (t) => ({ ...t, unread: false }));
  };
  const pickFolder = (f: Folder) => {
    setFolder(f);
    setOpenId(null);
  };

  // Saved replies: "/" at the start of the box, or the toolbar button.
  const slash = draft.startsWith("/") ? draft.slice(1).toLowerCase() : null;
  const replies = useMemo(() => (slash !== null ? sampleQuickReplies.filter((r) => `${r.title} ${r.text}`.toLowerCase().includes(slash)) : showReplies ? sampleQuickReplies : []), [slash, showReplies]);
  const pick = (text: string) => {
    setDraft(text);
    setPicker(0);
    setShowReplies(false);
    input.current?.focus();
  };

  const send = () => {
    const text = draft.trim();
    if (!open || !text || slash !== null) return;
    const time = now();
    if (mode === "note") change(open.id, (t) => ({ ...t, messages: [...t.messages, { from: "team", text, time, kind: "note" }] }));
    // Replying takes the chat over from the AI.
    else change(open.id, (t) => ({ ...t, owner: "team", assignee: t.assignee ?? "You", time, messages: [...t.messages, { from: "team", text, time }] }));
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
        setShowReplies(false);
        if (slash !== null) setDraft("");
        return;
      }
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const takeOver = () => open && change(open.id, (t) => ({ ...t, owner: "team", assignee: t.assignee ?? "You", messages: event(t, "You took over from the AI") }));
  const handBack = () => open && change(open.id, (t) => ({ ...t, owner: "ai", messages: event(t, "Handed back to the AI") }));
  const assign = (name: string | null) => {
    if (!open) return;
    change(open.id, (t) => ({ ...t, assignee: name, messages: event(t, name ? `Assigned to ${name === "You" ? "you" : name}` : "Unassigned") }));
    toast(name ? `Assigned to ${name === "You" ? "you" : name}` : "Unassigned");
  };
  const snooze = (label: string) => {
    if (!open) return;
    change(open.id, (t) => ({ ...t, status: "snoozed", snoozedUntil: label, messages: event(t, `Snoozed until ${label.toLowerCase()}`) }));
    setOpenId(null);
    setMobileThread(false);
    toast(`Snoozed until ${label.toLowerCase()}`);
  };
  const resolve = () => {
    if (!open) return;
    if (open.status === "resolved") {
      change(open.id, (t) => ({ ...t, status: "open", messages: event(t, "Reopened") }));
      return;
    }
    change(open.id, (t) => ({ ...t, status: "resolved", owner: t.owner === "needs" ? "team" : t.owner, messages: event(t, "Marked resolved") }));
    setOpenId(null);
    setMobileThread(false);
    toast("Marked resolved");
  };

  const folderButton = (f: Folder, icon?: React.ReactNode) => {
    const n = count(f);
    const active = folder === f;
    return (
      <button
        key={f}
        type="button"
        aria-current={active ? "true" : undefined}
        onClick={() => pickFolder(f)}
        className={`flex min-h-9 w-full cursor-pointer items-center gap-2.5 rounded-[9px] px-2.5 text-left text-[14px] transition ${active ? "bg-white font-semibold text-ink shadow-[0_1px_2px_rgb(30_31_43/0.08)]" : "text-ink-soft hover:bg-white/70"}`}
      >
        {icon ?? <Icon name={folderMeta[f].icon} size={16} className={f === "needs" && n ? "text-warning" : "text-muted"} />}
        <span className="flex-1 truncate">{folderLabel(f)}</span>
        {n > 0 && <span className={`text-[12px] font-semibold tabular-nums ${f === "needs" ? "rounded-full bg-warning px-1.5 text-white" : "text-subtle"}`}>{n}</span>}
      </button>
    );
  };

  const strip =
    !open || open.status === "resolved"
      ? null
      : open.owner === "ai"
        ? { tone: "bg-periwinkle-soft/60 text-brand", icon: "sparkle" as IconName, text: "The AI assistant is answering this chat.", action: "Take over", onAction: takeOver }
        : open.owner === "needs"
          ? { tone: "bg-[#FFF3E6] text-warning", icon: "bell" as IconName, text: "The AI handed this chat to your team.", action: "Take over", onAction: takeOver }
          : { tone: "bg-[#E8F3EA] text-success", icon: "users" as IconName, text: `${open.assignee && open.assignee !== "You" ? `${open.assignee} is` : "You’re"} handling this chat. The AI is paused.`, action: "Hand back to AI", onAction: handBack };

  return (
    <div className="flex h-[calc(100svh-56px-64px)] flex-col overflow-hidden bg-white lg:h-[calc(100svh-48px)] lg:rounded-[20px] lg:border lg:border-line lg:shadow-[0_1px_3px_rgb(30_31_43/0.04)]">
      <div className={`grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[210px_320px_minmax(0,1fr)] ${panel ? "xl:grid-cols-[320px_minmax(0,1fr)_300px] 2xl:grid-cols-[210px_320px_minmax(0,1fr)_300px]" : ""}`}>
        {/* Folders (wide screens) */}
        <nav aria-label="Inbox folders" className="hidden min-h-0 flex-col gap-0.5 overflow-y-auto border-r border-line bg-[#F7F7FA] p-3 2xl:flex">
          <p className="m-0 px-2.5 pt-1 pb-2 text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">Inbox</p>
          {(["open", "needs", "mine", "unassigned", "ai"] as Folder[]).map((f) => folderButton(f))}
          <p className="m-0 px-2.5 pt-4 pb-2 text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">Channels</p>
          {channels.map((c) => folderButton(c, <ChannelMark channel={channelKey[c]} size={18} />))}
          <p className="m-0 px-2.5 pt-4 pb-2 text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">Status</p>
          {(["snoozed", "resolved"] as Folder[]).map((f) => folderButton(f))}
        </nav>

        {/* Conversation list */}
        <section aria-label="Conversations" className={`min-h-0 flex-col border-r border-line ${mobileThread ? "hidden lg:flex" : "flex"}`}>
          <div className="flex flex-col gap-2.5 border-b border-line px-4 pt-4 pb-3">
            <div className="flex items-center justify-between gap-2">
              <h1 className="m-0 text-[20px] font-semibold tracking-[-0.01em] text-ink">Inbox</h1>
              <SampleTag />
            </div>
            <div className="flex items-center gap-2 2xl:hidden">
              <Menu
                label="Choose folder"
                align="left"
                trigger={
                  <span className="flex min-h-9 items-center gap-1.5 rounded-[9px] border border-line-strong bg-white px-3 text-[14px] font-semibold text-ink">
                    {folderLabel(folder)}
                    <span className="text-[12px] font-semibold text-subtle tabular-nums">{count(folder)}</span>
                    <Icon name="chevron-down" size={14} className="text-muted" />
                  </span>
                }
                items={[
                  { label: "Inbox", heading: true },
                  ...(["open", "needs", "mine", "unassigned", "ai"] as Folder[]).map((f) => ({ label: `${folderLabel(f)} (${count(f)})`, checked: folder === f, onSelect: () => pickFolder(f) })),
                  { label: "Channels", heading: true },
                  ...channels.map((c) => ({ label: `${c} (${count(c)})`, checked: folder === c, onSelect: () => pickFolder(c) })),
                  { label: "Status", heading: true },
                  ...(["snoozed", "resolved"] as Folder[]).map((f) => ({ label: `${folderLabel(f)} (${count(f)})`, checked: folder === f, onSelect: () => pickFolder(f) })),
                ]}
              />
              {count("needs") > 0 && folder !== "needs" && (
                <button type="button" onClick={() => pickFolder("needs")} className="min-h-9 cursor-pointer rounded-[9px] bg-[#FFF3E6] px-3 text-[13.5px] font-semibold text-warning">
                  {count("needs")} need you
                </button>
              )}
            </div>
            <label className="relative">
              <span className="sr-only">Search conversations</span>
              <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-subtle" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search conversations"
                className="min-h-9 w-full rounded-[9px] border border-line bg-[#F7F7FA] pr-3 pl-9 text-[14px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:bg-white focus:ring-4 focus:ring-indigo/10"
              />
            </label>
          </div>
          <ul className="m-0 min-h-0 flex-1 list-none overflow-y-auto p-0">
            {visible.length === 0 && (
              <li className="flex flex-col items-center gap-2 px-6 py-12 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-panel text-muted">
                  <Icon name={folder === "resolved" ? "check" : "inbox"} size={20} />
                </span>
                <span className="text-[14.5px] font-semibold text-ink">{query ? "No conversations match" : "Nothing here"}</span>
                <span className="text-[13px] text-subtle">{folder === "resolved" ? "Resolved chats show up here." : folder === "snoozed" ? "Snoozed chats come back on time." : "New chats will appear here."}</span>
              </li>
            )}
            {visible.map((t) => {
              const last = t.messages.filter((m) => m.kind !== "event").at(-1)!;
              const active = open?.id === t.id;
              return (
                <li key={t.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => select(t.id)}
                    aria-current={active ? "true" : undefined}
                    className={`relative flex w-full cursor-pointer items-start gap-3 px-4 py-3 text-left transition ${active ? "bg-periwinkle-soft/45" : "hover:bg-[#FAFAFC]"}`}
                  >
                    {active && <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-indigo" />}
                    <span className="relative flex-none">
                      <Avatar name={t.who} size={38} />
                      <span aria-hidden="true" className="absolute -right-2 -bottom-1 rounded-[6px] ring-2 ring-white">
                        <ChannelMark channel={channelKey[t.channel]} size={16} />
                      </span>
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="flex items-baseline justify-between gap-2">
                        <span className={`truncate text-[14.5px] text-ink ${t.unread ? "font-bold" : "font-semibold"}`}>{t.who}</span>
                        <span className={`flex-none text-[12px] ${t.unread ? "font-semibold text-indigo" : "text-subtle"}`}>{t.time}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className={`min-w-0 flex-1 truncate text-[13.5px] ${t.unread ? "text-ink" : "text-subtle"}`}>
                          {last.from === "ai" ? "AI: " : last.from === "team" ? (last.kind === "note" ? "Note: " : "You: ") : ""}
                          {last.kind === "voice" ? "Voice note" : last.kind === "image" ? "Photo" : last.text}
                        </span>
                        {t.unread && <span className="h-2 w-2 flex-none rounded-full bg-indigo" aria-label="Unread" />}
                      </span>
                      {(t.owner === "needs" || t.assignee || t.status === "snoozed") && (
                        <span className="mt-1 flex flex-wrap items-center gap-1.5">
                          {t.owner === "needs" && t.status === "open" && <span className="rounded-full bg-[#FFF3E6] px-2 py-0.5 text-[11.5px] font-semibold text-warning">Needs you</span>}
                          {t.status === "snoozed" && <span className="rounded-full bg-panel px-2 py-0.5 text-[11.5px] font-semibold text-muted">Until {t.snoozedUntil?.toLowerCase()}</span>}
                          {t.assignee && t.status === "open" && (
                            <span className="flex items-center gap-1 text-[12px] text-subtle">
                              <Avatar name={t.assignee} size={16} />
                              {t.assignee === "You" ? "You" : t.assignee}
                            </span>
                          )}
                        </span>
                      )}
                      <span className="sr-only">on {t.channel}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Conversation */}
        <section aria-label="Conversation" className={`min-h-0 flex-col bg-[#FAFAFC] ${mobileThread ? "flex" : "hidden lg:flex"}`}>
          {!open ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-muted shadow-[0_1px_3px_rgb(30_31_43/0.08)]">
                <Icon name="message" size={22} />
              </span>
              <p className="m-0 text-[15px] font-semibold text-ink">Pick a conversation</p>
              <p className="m-0 text-[13.5px] text-subtle">Chats from every channel land here.</p>
            </div>
          ) : (
            <>
              <header className="flex items-center gap-3 border-b border-line bg-white px-4 py-3">
                <button type="button" onClick={() => setMobileThread(false)} aria-label="Back to conversations" className="-ml-1 flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-full text-ink hover:bg-panel lg:hidden">
                  <Icon name="chevron-left" size={22} />
                </button>
                <button
                  type="button"
                  onClick={showDetails}
                  aria-expanded={panel || details}
                  title="View customer details"
                  className="-my-1 -ml-1 flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-[12px] py-1 pr-2 pl-1 text-left transition hover:bg-panel"
                >
                  <span className="relative hidden flex-none sm:block">
                    <Avatar name={contact?.name ?? open.who} size={36} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col leading-tight">
                    <span className="flex min-w-0 items-center gap-1">
                      <span className="truncate text-[15.5px] font-semibold text-ink">{contact?.name ?? open.who}</span>
                      <Icon name="chevron-right" size={15} className={`flex-none text-faint transition ${panel ? "rotate-180" : ""}`} />
                    </span>
                    <span className="flex items-center gap-1.5 truncate text-[12.5px] text-subtle">
                      <ChannelMark channel={channelKey[open.channel]} size={14} />
                      {open.channel}
                      {contact && contact.phone !== open.who && contact.phone !== "Not shared" && ` · ${contact.phone}`}
                    </span>
                  </span>
                </button>
                <Menu
                  label={open.assignee ? `Assigned to ${open.assignee}` : "Assign"}
                  trigger={
                    <span className="flex min-h-9 items-center gap-1.5 rounded-[9px] border border-line-strong bg-white px-2.5 text-[13.5px] font-semibold text-ink">
                      {open.assignee ? <Avatar name={open.assignee} size={20} /> : <Icon name="users" size={15} className="text-muted" />}
                      <span className="hidden sm:inline">{open.assignee ?? "Assign"}</span>
                      <Icon name="chevron-down" size={13} className="text-muted" />
                    </span>
                  }
                  items={[
                    { label: "Assign to", heading: true },
                    ...sampleTeam.map((m) => ({ label: m.name, checked: open.assignee === m.name, onSelect: () => assign(m.name) })),
                    { label: "Nobody", checked: !open.assignee, onSelect: () => assign(null) },
                  ]}
                />
                <Menu
                  label="Snooze"
                  icon="clock"
                  className="hidden 2xl:block"
                  trigger={
                    <span className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-line-strong bg-white text-ink">
                      <Icon name="clock" size={16} />
                    </span>
                  }
                  items={[
                    { label: "Snooze until", heading: true },
                    { label: "In 1 hour", onSelect: () => snooze("In 1 hour") },
                    { label: "Tomorrow morning", onSelect: () => snooze("Tomorrow morning") },
                    { label: "Next week", onSelect: () => snooze("Next week") },
                  ]}
                />
                <button
                  type="button"
                  onClick={resolve}
                  className={`inline-flex min-h-9 flex-none cursor-pointer items-center gap-1.5 rounded-[9px] px-3 text-[13.5px] font-semibold transition ${open.status === "resolved" ? "border border-line-strong bg-white text-ink hover:bg-panel" : "bg-ink text-white hover:bg-[#2c2d3d]"}`}
                >
                  <Icon name={open.status === "resolved" ? "refresh" : "check"} size={15} />
                  <span className="hidden sm:inline">{open.status === "resolved" ? "Reopen" : "Resolve"}</span>
                  <span className="sr-only sm:hidden">{open.status === "resolved" ? "Reopen" : "Resolve"}</span>
                </button>
                <Menu
                  label="More actions"
                  trigger={
                    <span className="flex h-9 w-9 items-center justify-center rounded-[9px] text-muted hover:bg-panel">
                      <Icon name="more" size={17} />
                    </span>
                  }
                  items={[
                    { label: "Mark as unread", onSelect: () => change(open.id, (t) => ({ ...t, unread: true })) },
                    { label: "Snooze until tomorrow", onSelect: () => snooze("Tomorrow morning") },
                    { label: "Customer details", onSelect: showDetails },
                    { label: "Open in Contacts", onSelect: () => onOpen("contacts") },
                  ]}
                />
              </header>

              <div aria-live="polite" className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-6">
                <p className="m-0 self-center rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-subtle shadow-[0_1px_2px_rgb(30_31_43/0.06)]">Today</p>
                {open.messages.map((m, i) => (
                  <Message key={i} m={m} who={open.who} />
                ))}
              </div>

              {strip && (
                <div className={`flex items-center gap-2.5 border-t border-line px-4 py-2 text-[13.5px] sm:px-6 ${strip.tone}`}>
                  <Icon name={strip.icon} size={15} className="flex-none" />
                  <span className="min-w-0 flex-1 font-medium">{strip.text}</span>
                  <button type="button" onClick={strip.onAction} className="min-h-8 flex-none cursor-pointer rounded-[8px] bg-white px-3 text-[13px] font-semibold text-ink shadow-[0_1px_2px_rgb(30_31_43/0.1)] hover:bg-panel">
                    {strip.action}
                  </button>
                </div>
              )}

              {/* Reply box */}
              <div className="border-t border-line bg-white p-3 sm:px-5">
                <div className={`relative rounded-[14px] border transition focus-within:border-indigo focus-within:ring-4 focus-within:ring-indigo/10 ${mode === "note" ? "border-[#F2DFA0] bg-[#FFFBEB]" : "border-line-strong bg-white"}`}>
                  {replies.length > 0 && (
                    <div role="listbox" aria-label="Saved replies" className="absolute inset-x-0 bottom-full z-20 mb-2 overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_16px_40px_rgb(30_31_43/0.16)]">
                      <p className="m-0 flex items-center justify-between border-b border-line px-3.5 py-2 text-[12px] font-semibold tracking-[0.04em] text-muted uppercase">
                        Saved replies
                        <span className="font-normal tracking-normal normal-case">↑↓ to choose, Enter to insert</span>
                      </p>
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
                  <div role="tablist" aria-label="Message type" className="flex gap-4 px-3.5 pt-2">
                    {(["reply", "note"] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        role="tab"
                        aria-selected={mode === m}
                        onClick={() => setMode(m)}
                        className={`-mb-px flex cursor-pointer items-center gap-1 border-b-2 pb-1.5 text-[13px] font-semibold ${mode === m ? (m === "note" ? "border-[#C99A00] text-[#7A5200]" : "border-ink text-ink") : "border-transparent text-subtle hover:text-ink"}`}
                      >
                        {m === "note" && <Icon name="lock" size={12} />}
                        {m === "reply" ? `Reply on ${open.channel === "Missed call" ? "WhatsApp" : open.channel}` : "Internal note"}
                      </button>
                    ))}
                  </div>
                  <label className="block">
                    <span className="sr-only">{mode === "note" ? `Note about ${open.who}` : `Reply to ${open.who}`}</span>
                    <textarea
                      ref={input}
                      rows={2}
                      value={draft}
                      onChange={(e) => {
                        setDraft(e.target.value);
                        setPicker(0);
                      }}
                      onKeyDown={onKeyDown}
                      placeholder={mode === "note" ? "Write a note only your team sees…" : open.owner === "team" ? "Write a reply… (type / for saved replies)" : "Reply to take over from the AI… (type / for saved replies)"}
                      className="block max-h-40 min-h-14 w-full resize-none bg-transparent px-3.5 py-2 text-[15px] text-ink outline-none placeholder:text-faint"
                    />
                  </label>
                  <div className="flex items-center gap-1 px-2 pb-2">
                    <button type="button" onClick={() => fileInput.current?.click()} aria-label="Attach a photo" title="Attach a photo" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-ink">
                      <Icon name="image" size={17} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowReplies((v) => !v);
                        input.current?.focus();
                      }}
                      aria-label="Saved replies"
                      aria-expanded={replies.length > 0}
                      title="Saved replies"
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-ink"
                    >
                      <Icon name="note" size={17} />
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
                    <span className="ml-auto hidden text-[12px] text-subtle sm:inline">Enter to send · Shift+Enter for a new line</span>
                    <button
                      type="button"
                      onClick={send}
                      disabled={!draft.trim() || slash !== null}
                      aria-label={mode === "note" ? "Add note" : "Send reply"}
                      className="ml-auto inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-[8px] bg-ink px-3 text-[13.5px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 sm:ml-2"
                    >
                      {mode === "note" ? "Add note" : "Send"}
                      <Icon name={mode === "note" ? "check" : "send"} size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Customer details */}
        {panel && open && contact && (
          <aside aria-label="Customer details" className="hidden min-h-0 overflow-y-auto border-l border-line p-5 xl:block">
            <div className="-mt-1 mb-3 flex items-center justify-between">
              <p className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">Customer</p>
              <button type="button" onClick={() => setPanel(false)} aria-label="Close customer details" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-ink">
                <Icon name="close" size={16} />
              </button>
            </div>
            <ContactDetails key={contact.id} contact={contact} actions={false} onOpen={onOpen} onChange={(c) => setContacts((cs) => (cs.some((x) => x.id === c.id) ? cs.map((x) => (x.id === c.id ? c : x)) : [c, ...cs]))} />
          </aside>
        )}
      </div>

      <Drawer open={details && !!contact} onClose={() => setDetails(false)} title="Customer details">
        {contact && <ContactDetails key={contact.id} contact={contact} actions={false} onOpen={onOpen} onChange={(c) => setContacts((cs) => (cs.some((x) => x.id === c.id) ? cs.map((x) => (x.id === c.id ? c : x)) : [c, ...cs]))} />}
      </Drawer>
    </div>
  );
}
