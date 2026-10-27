"use client";

import { useMemo, useState } from "react";
import { helpArticles, helpTopics, whatsNew, type HelpTopic } from "@/content/app";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Kbd, useToast } from "../../kit";
import { Group, Row, RowButton } from "./parts";

// Help and support inside the settings dialog: search, topics, articles
// that open in place, ways to reach a person, shortcuts and what's new.
// Demo: support contacts are placeholders until support is staffed.

const shortcuts = [
  { keys: ["⌘", "K"], label: "Search everything" },
  { keys: ["/"], label: "Saved replies in the inbox" },
  { keys: ["Shift", "Enter"], label: "New line in a reply" },
  { keys: ["Esc"], label: "Close a panel or dialog" },
];

const destination = (view: string) => (view.startsWith("settings") ? "Open setting" : `Go to ${view === "agents" ? "AI agents" : view.charAt(0).toUpperCase() + view.slice(1)}`);

export function HelpPanel({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<HelpTopic | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return helpArticles.filter((a) => (!topic || a.topic === topic) && (!q || `${a.title} ${a.body} ${a.topic} ${(a.steps ?? []).join(" ")}`.toLowerCase().includes(q)));
  }, [query, topic]);
  const filtering = !!query.trim() || !!topic;
  const shown = filtering ? results : results.slice(0, 6);

  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search help articles</span>
        <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search help, e.g. “forward calls”"
          className="h-11 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-10 text-[15px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-3 focus:ring-indigo/10"
        />
      </label>
      <div role="group" aria-label="Topics" className="mt-3 flex flex-wrap gap-1.5">
        {helpTopics.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={topic === t.id}
            onClick={() => setTopic(topic === t.id ? null : t.id)}
            className={`h-8 cursor-pointer rounded-full px-3 text-[13px] font-medium transition ${topic === t.id ? "bg-ink text-white" : "bg-panel text-ink-soft hover:text-ink"}`}
          >
            {t.id}
          </button>
        ))}
      </div>

      <div className="mt-9">
        <Group title={filtering ? `${results.length} article${results.length === 1 ? "" : "s"}` : "Popular articles"}>
          {shown.length === 0 && <Row label={<span className="text-subtle">No articles match. Try other words, or ask us on WhatsApp.</span>} />}
          {shown.map((a) => {
            const open = openId === a.id;
            return (
              <div key={a.id}>
                <button type="button" aria-expanded={open} onClick={() => setOpenId(open ? null : a.id)} className="flex w-full cursor-pointer items-center gap-3 py-3.5 text-left">
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14.5px] text-ink">{a.title}</span>
                    <span className="block text-[13px] text-subtle">
                      {a.topic} · {a.minutes} min read
                    </span>
                  </span>
                  <Icon name="chevron-down" size={16} className={`flex-none text-muted transition ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="flex flex-col gap-3 pb-4">
                    <p className="m-0 text-[14px] leading-relaxed text-ink-soft">{a.body}</p>
                    {a.steps && (
                      <ol className="m-0 flex list-none flex-col gap-2 p-0">
                        {a.steps.map((s, i) => (
                          <li key={s} className="flex gap-2.5 text-[14px] leading-snug text-ink">
                            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-panel text-[11.5px] font-semibold text-ink">{i + 1}</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    )}
                    {a.view && (
                      <span>
                        <RowButton onClick={() => onOpen(a.view!)}>{destination(a.view)}</RowButton>
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </Group>
      </div>

      <div className="mt-9">
        <Group title="Contact us">
          <Row
            label={
              <span className="flex items-center gap-3">
                <BrandLogo brand="whatsapp" size={28} />
                <span className="flex flex-col">
                  WhatsApp
                  <span className="text-[13px] text-subtle">Usually replies within an hour</span>
                </span>
              </span>
            }
          >
            <RowButton onClick={() => toast("Opening WhatsApp support (demo)", "info")}>Chat</RowButton>
          </Row>
          <Row label="Email" description="Replies within one working day">
            <RowButton onClick={() => toast("Opening your email app (demo)", "info")}>Email us</RowButton>
          </Row>
          <Row label="Setup call" description="30 minutes, free during your pilot">
            <RowButton onClick={() => toast("Booking page opens here (demo)", "info")}>Book</RowButton>
          </Row>
        </Group>
      </div>

      <div className="mt-9">
        <Group title="Keyboard shortcuts">
          {shortcuts.map((s) => (
            <Row key={s.label} label={s.label}>
              <span className="flex gap-1">
                {s.keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </span>
            </Row>
          ))}
        </Group>
      </div>

      <div className="mt-9">
        <Group title="What’s new">
          {whatsNew.map((n) => (
            <Row key={n.title} label={n.title} description={n.body}>
              <span className="text-[13px] text-subtle">{n.date}</span>
            </Row>
          ))}
        </Group>
      </div>
    </>
  );
}
