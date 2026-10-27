"use client";

import { useState, type FormEvent } from "react";
import { sampleThreads, type InboxChannel, type Thread, type ThreadMessage, type ThreadOwner } from "@/content/dashboard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageTitle, SampleTag } from "../ui";

// Every chat in one list, with the open conversation beside it. The owner can
// take over a chat (the AI pauses) or hand it back.
// Demo: replies and take-overs live in this component only.

const channelIcon: Record<InboxChannel, IconName> = {
  WhatsApp: "message",
  Instagram: "instagram",
  Messenger: "message",
  Website: "globe",
  "Missed call": "missed",
};

const filters: { id: "all" | ThreadOwner; label: string }[] = [
  { id: "all", label: "All" },
  { id: "needs", label: "Needs you" },
  { id: "ai", label: "AI" },
  { id: "team", label: "Team" },
];

function OwnerPill({ owner }: { owner: ThreadOwner }) {
  const style = { ai: "bg-periwinkle-soft text-brand", team: "bg-[#E8F3EA] text-success", needs: "bg-[#FFF3E6] text-warning" }[owner];
  return <span className={`rounded-full px-2 py-0.5 text-[11.5px] font-semibold whitespace-nowrap ${style}`}>{{ ai: "AI", team: "Team", needs: "Needs you" }[owner]}</span>;
}

function Bubble({ m }: { m: ThreadMessage }) {
  const customer = m.from === "customer";
  const label = { customer: "Customer", ai: "AI assistant", team: "You" }[m.from];
  return (
    <div className={`flex max-w-[78%] flex-col gap-1 ${customer ? "self-start" : "items-end self-end"}`}>
      <span className="px-1 text-[12px] font-medium text-subtle">
        {label} · {m.time}
      </span>
      <div
        className={`rounded-[18px] px-4 py-2.5 text-[15px] leading-snug ${
          customer ? "rounded-tl-[6px] bg-panel text-ink" : m.from === "ai" ? "rounded-tr-[6px] bg-periwinkle-soft text-ink" : "rounded-tr-[6px] bg-ink text-white"
        }`}
      >
        {m.text}
      </div>
    </div>
  );
}

export function Inbox() {
  const [threads, setThreads] = useState<Thread[]>(sampleThreads);
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | ThreadOwner>("all");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  const visible = threads.filter(
    (t) => (filter === "all" || t.owner === filter) && (!query.trim() || `${t.who} ${t.messages.map((m) => m.text).join(" ")}`.toLowerCase().includes(query.toLowerCase())),
  );
  // Desktop always shows a conversation; phones show the list until one is opened.
  const open = threads.find((t) => t.id === openId) ?? visible[0] ?? threads[0];

  const change = (id: string, fn: (t: Thread) => Thread) => setThreads((ts) => ts.map((t) => (t.id === id ? fn(t) : t)));

  const select = (id: string) => {
    setOpenId(id);
    change(id, (t) => ({ ...t, unread: false }));
  };

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const time = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    // Replying takes the chat over from the AI.
    change(open.id, (t) => ({ ...t, owner: "team", time, messages: [...t.messages, { from: "team", text, time }] }));
    setDraft("");
  };

  const needsCount = threads.filter((t) => t.owner === "needs").length;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Inbox" body="Every chat in one place. Take over any conversation and the AI pauses for it." />
        <SampleTag />
      </div>

      <div className="grid h-[min(720px,calc(100svh-220px))] min-h-[520px] overflow-hidden rounded-[22px] border border-line bg-white lg:grid-cols-[340px_minmax(0,1fr)]">
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
            <div role="tablist" aria-label="Filter conversations" className="flex gap-1.5 overflow-x-auto">
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
                  {f.id === "needs" && needsCount > 0 && <span className="ml-1.5 rounded-full bg-warning px-1.5 text-[11.5px] text-white">{needsCount}</span>}
                </button>
              ))}
            </div>
          </div>
          <ul className="m-0 min-h-0 flex-1 list-none overflow-y-auto p-0">
            {visible.length === 0 && <li className="p-6 text-center text-[15px] text-subtle">No conversations match.</li>}
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
                    <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-brand">
                      <Icon name={channelIcon[t.channel]} size={18} />
                      {t.unread && <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-orange" aria-label="Unread" />}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="flex items-center justify-between gap-2">
                        <span className={`truncate text-[15px] text-ink ${t.unread ? "font-bold" : "font-semibold"}`}>{t.who}</span>
                        <span className="flex-none text-[12px] text-subtle">{t.time}</span>
                      </span>
                      <span className="truncate text-[14px] text-subtle">{last.text}</span>
                      <span className="mt-1 flex items-center gap-2">
                        <OwnerPill owner={t.owner} />
                        <span className="text-[12px] text-subtle">{t.channel}</span>
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
          <div className="flex items-center gap-3 border-b border-line px-4 py-3 sm:px-5">
            <button type="button" onClick={() => setOpenId(null)} aria-label="Back to conversations" className="-ml-1 cursor-pointer rounded-full p-1 text-ink lg:hidden">
              <Icon name="chevron-left" size={22} />
            </button>
            <span className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="truncate text-[16px] font-semibold text-ink">{open.who}</span>
              <span className="text-[13px] text-subtle">
                {open.channel} · {open.owner === "ai" ? "The AI is replying" : open.owner === "team" ? "You’re handling this chat" : "Waiting for a person"}
              </span>
            </span>
            {open.owner === "team" ? (
              <button
                type="button"
                onClick={() => change(open.id, (t) => ({ ...t, owner: "ai" }))}
                className="min-h-10 flex-none cursor-pointer rounded-full border border-line-strong bg-white px-4 text-[14px] font-semibold text-ink hover:border-subtle"
              >
                Hand back to AI
              </button>
            ) : (
              <button
                type="button"
                onClick={() => change(open.id, (t) => ({ ...t, owner: "team" }))}
                className="min-h-10 flex-none cursor-pointer rounded-full bg-ink px-4 text-[14px] font-semibold text-white"
              >
                Take over
              </button>
            )}
          </div>

          <div aria-live="polite" className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-5 sm:px-6">
            {open.messages.map((m, i) => (
              <Bubble key={i} m={m} />
            ))}
            {open.owner === "team" && <p className="m-0 self-center rounded-full bg-panel px-3 py-1 text-[12.5px] text-subtle">The AI is paused for this chat</p>}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-line p-3 sm:px-5">
            <label className="flex-1">
              <span className="sr-only">Reply to {open.who}</span>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={open.owner === "team" ? "Write a reply…" : "Reply to take over from the AI…"}
                className="min-h-12 w-full rounded-full border border-line-strong bg-white px-5 text-[15px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
              />
            </label>
            <button type="submit" aria-label="Send reply" className="flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white">
              <Icon name="send" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
