"use client";

import { useMemo, useState } from "react";
import { helpArticles, helpTopics, whatsNew, type HelpArticle, type HelpTopic } from "@/content/app";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button, Drawer, Kbd, useToast } from "../kit";
import { PageTitle } from "../ui";

// Help centre inside the app: search, topics, articles that link to the
// right page, ways to reach a person, service status, shortcuts and what's new.
// Demo: support contact and status are placeholders until support is staffed.

const shortcuts = [
  { keys: ["⌘", "K"], label: "Search everything" },
  { keys: ["/"], label: "Saved replies in the inbox" },
  { keys: ["Enter"], label: "Send a reply" },
  { keys: ["Shift", "Enter"], label: "New line in a reply" },
  { keys: ["Esc"], label: "Close a panel or dialog" },
];

const status = [
  { name: "WhatsApp messaging", ok: true },
  { name: "Instagram and Messenger", ok: true },
  { name: "AI call answering", ok: true },
  { name: "Dashboard", ok: true },
];

/** `embedded`: shown inside the settings dialog, without the page title and in one column. */
export function Help({ onOpen, embedded = false }: { onOpen: (view: string) => void; embedded?: boolean }) {
  const toast = useToast();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<HelpTopic | null>(null);
  const [open, setOpen] = useState<HelpArticle | null>(null);
  const [voted, setVoted] = useState<Record<string, "yes" | "no">>({});

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return helpArticles.filter((a) => (!topic || a.topic === topic) && (!q || `${a.title} ${a.body} ${a.topic} ${(a.steps ?? []).join(" ")}`.toLowerCase().includes(q)));
  }, [query, topic]);
  const filtering = !!query.trim() || !!topic;

  return (
    <div className="flex flex-col gap-6">
      {!embedded && <PageTitle title="Help and support" body="Guides for every part of Vegam, and real people when you need them." />}

      {/* Search */}
      <section aria-label="Search help" className="flex flex-col gap-4 rounded-[22px] bg-ink p-6 text-white sm:p-8">
        <h2 className="m-0 text-[22px] font-semibold tracking-[-0.01em] sm:text-[26px]">How can we help?</h2>
        <label className="relative">
          <span className="sr-only">Search help articles</span>
          <Icon name="search" size={18} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search, e.g. “forward calls” or “GST invoice”"
            className="min-h-13 w-full rounded-[14px] border-0 bg-white pr-4 pl-12 text-[16px] text-ink outline-none placeholder:text-faint focus:ring-4 focus:ring-white/30"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2 text-[13.5px]">
          <span className="text-white/70">Popular:</span>
          {["WhatsApp", "Take over", "Forwarding", "Fees"].map((t) => (
            <button key={t} type="button" onClick={() => setQuery(t)} className="min-h-8 cursor-pointer rounded-full bg-white/12 px-3 font-semibold text-white hover:bg-white/20">
              {t}
            </button>
          ))}
        </div>
      </section>

      <div className={`grid grid-cols-[minmax(0,1fr)] items-start gap-6 ${embedded ? "" : "xl:grid-cols-[minmax(0,1fr)_320px]"}`}>
        <div className="flex min-w-0 flex-col gap-6">
          {/* Topics */}
          <section aria-label="Browse by topic" className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="m-0 text-[17px] font-semibold text-ink">Browse by topic</h2>
              {filtering && (
                <button
                  type="button"
                  onClick={() => {
                    setTopic(null);
                    setQuery("");
                  }}
                  className="cursor-pointer text-[13.5px] font-semibold text-indigo hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {helpTopics.map((t) => {
                const n = helpArticles.filter((a) => a.topic === t.id).length;
                const active = topic === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setTopic(active ? null : t.id)}
                    className={`flex cursor-pointer flex-col items-start gap-2 rounded-[16px] border bg-white p-4 text-left transition ${active ? "border-ink shadow-[0_0_0_1px_#23243A]" : "border-line hover:border-line-strong hover:shadow-[0_2px_8px_rgb(30_31_43/0.06)]"}`}
                  >
                    <span className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${active ? "bg-ink text-accent" : "bg-panel text-ink"}`}>
                      <Icon name={t.icon} size={17} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[14.5px] font-semibold text-ink">{t.id}</span>
                      <span className="text-[12.5px] text-subtle">
                        {t.body} · {n}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Articles */}
          <section aria-label="Articles" className="flex flex-col gap-3">
            <h2 className="m-0 text-[17px] font-semibold text-ink">{filtering ? `${results.length} article${results.length === 1 ? "" : "s"}${topic ? ` in ${topic}` : ""}` : "Popular articles"}</h2>
            {results.length === 0 ? (
              <div className="flex flex-col items-center gap-2 rounded-[18px] border border-line bg-white px-6 py-10 text-center">
                <Icon name="search" size={22} className="text-faint" />
                <p className="m-0 text-[15px] font-semibold text-ink">No articles match “{query}”</p>
                <p className="m-0 text-[13.5px] text-subtle">Try other words, or ask us on WhatsApp. We usually reply within an hour.</p>
              </div>
            ) : (
              <ul className="m-0 flex list-none flex-col divide-y divide-line overflow-hidden rounded-[18px] border border-line bg-white p-0">
                {(filtering ? results : results.slice(0, 7)).map((a) => (
                  <li key={a.id}>
                    <button type="button" onClick={() => setOpen(a)} className="flex w-full cursor-pointer items-center gap-3.5 px-4 py-3.5 text-left hover:bg-[#FAFAFC]">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-indigo">
                        <Icon name="note" size={16} />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-[14.5px] font-semibold text-ink">{a.title}</span>
                        <span className="truncate text-[13px] text-subtle">{a.body}</span>
                      </span>
                      <span className="hidden flex-none text-[12.5px] text-subtle sm:inline">
                        {a.topic} · {a.minutes} min
                      </span>
                      <Icon name="chevron-right" size={17} className="flex-none text-faint" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside className={`flex flex-col gap-5 ${embedded ? "md:grid md:grid-cols-2" : ""}`}>
          {/* Contact */}
          <section aria-label="Contact support" className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-5">
            <h2 className="m-0 text-[16px] font-semibold text-ink">Talk to a person</h2>
            <button type="button" onClick={() => toast("Opening WhatsApp support (demo)", "info")} className="flex cursor-pointer items-center gap-3 rounded-[14px] border border-line p-3 text-left hover:border-line-strong">
              <BrandLogo brand="whatsapp" size={36} />
              <span className="flex flex-1 flex-col">
                <span className="text-[14.5px] font-semibold text-ink">Chat on WhatsApp</span>
                <span className="text-[12.5px] text-subtle">Usually replies within an hour</span>
              </span>
              <Icon name="chevron-right" size={16} className="text-faint" />
            </button>
            <button type="button" onClick={() => toast("Opening your email app (demo)", "info")} className="flex cursor-pointer items-center gap-3 rounded-[14px] border border-line p-3 text-left hover:border-line-strong">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-panel text-ink">
                <Icon name="mail" size={17} />
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-[14.5px] font-semibold text-ink">Email support</span>
                <span className="text-[12.5px] text-subtle">Replies within one working day</span>
              </span>
              <Icon name="chevron-right" size={16} className="text-faint" />
            </button>
            <button type="button" onClick={() => toast("Booking page opens here (demo)", "info")} className="flex cursor-pointer items-center gap-3 rounded-[14px] border border-line p-3 text-left hover:border-line-strong">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-panel text-ink">
                <Icon name="calendar" size={17} />
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-[14.5px] font-semibold text-ink">Book a setup call</span>
                <span className="text-[12.5px] text-subtle">30 minutes, free during your pilot</span>
              </span>
              <Icon name="chevron-right" size={16} className="text-faint" />
            </button>
          </section>

          {/* Status */}
          <section aria-label="Service status" className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="m-0 text-[16px] font-semibold text-ink">Service status</h2>
              <span className="text-[11.5px] font-semibold tracking-[0.08em] text-subtle uppercase">Sample</span>
            </div>
            <p className="m-0 flex items-center gap-2 rounded-[12px] bg-[#E8F3EA] px-3 py-2 text-[13.5px] font-semibold text-success">
              <span className="h-2 w-2 rounded-full bg-current" />
              All systems working
            </p>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {status.map((s) => (
                <li key={s.name} className="flex items-center justify-between text-[13.5px]">
                  <span className="text-ink-soft">{s.name}</span>
                  <span className="flex items-center gap-1.5 font-medium text-success">
                    <Icon name="check" size={14} />
                    Working
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Shortcuts */}
          <section aria-label="Keyboard shortcuts" className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-5">
            <h2 className="m-0 text-[16px] font-semibold text-ink">Keyboard shortcuts</h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {shortcuts.map((s) => (
                <li key={s.label} className="flex items-center justify-between gap-3 text-[13.5px] text-ink-soft">
                  {s.label}
                  <span className="flex flex-none gap-1">
                    {s.keys.map((k) => (
                      <Kbd key={k}>{k}</Kbd>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* What's new */}
          <section aria-label="What’s new" className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-5">
            <h2 className="m-0 text-[16px] font-semibold text-ink">What’s new</h2>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {whatsNew.map((n) => (
                <li key={n.title} className="flex flex-col gap-0.5 border-l-2 border-indigo pl-3">
                  <span className="text-[12px] text-subtle">{n.date}</span>
                  <span className="text-[14px] font-semibold text-ink">{n.title}</span>
                  <span className="text-[13px] text-ink-soft">{n.body}</span>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>

      <Drawer
        open={open !== null}
        onClose={() => setOpen(null)}
        title={open?.topic ?? "Article"}
        footer={
          open?.view && (
            <div className="flex justify-end">
              <Button
                variant="primary"
                onClick={() => {
                  const v = open.view!;
                  setOpen(null);
                  onOpen(v);
                }}
              >
                {open.view.startsWith("settings") ? "Open settings" : `Go to ${open.view === "home" ? "Home" : open.view === "agents" ? "AI agents" : open.view.charAt(0).toUpperCase() + open.view.slice(1)}`}
                <Icon name="chevron-right" size={15} />
              </Button>
            </div>
          )
        }
      >
        {open && (
          <article className="flex flex-col gap-4">
            <h3 className="m-0 text-[22px] leading-tight font-semibold tracking-[-0.01em] text-ink">{open.title}</h3>
            <p className="m-0 text-[13px] text-subtle">{open.minutes} min read</p>
            <p className="m-0 text-[15.5px] leading-relaxed text-ink-soft">{open.body}</p>
            {open.steps && (
              <ol className="m-0 flex list-none flex-col gap-3 p-0">
                {open.steps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-[15px] leading-snug text-ink">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[12.5px] font-bold text-white">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            )}
            <div className="mt-2 flex flex-col gap-2 rounded-[14px] bg-panel p-4">
              {voted[open.id] ? (
                <p className="m-0 text-[14px] font-medium text-ink">{voted[open.id] === "yes" ? "Thanks! Glad it helped." : "Thanks. We’ll improve this article. Need a hand now? Chat with us on WhatsApp."}</p>
              ) : (
                <>
                  <p className="m-0 text-[14px] font-semibold text-ink">Was this helpful?</p>
                  <span className="flex gap-2">
                    <Button onClick={() => setVoted((v) => ({ ...v, [open.id]: "yes" }))}>Yes</Button>
                    <Button onClick={() => setVoted((v) => ({ ...v, [open.id]: "no" }))}>Not really</Button>
                  </span>
                </>
              )}
            </div>
          </article>
        )}
      </Drawer>
    </div>
  );
}
