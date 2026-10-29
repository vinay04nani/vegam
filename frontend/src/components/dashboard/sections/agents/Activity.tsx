"use client";

import { useState } from "react";
import { agentActivity, agents, type ActivityItem, type AgentId } from "@/content/agents";
import type { OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, Drawer, EmptyState, SegmentedControl, useToast } from "../../kit";
import { TextArea } from "../settings/parts";
import { AgentTile, outcomeTone } from "./ui";

// Everything an agent did (or every agent, on the AI agents home), with the
// conversation behind it. Rate a reply, or "teach it" a better answer, which
// is saved to the knowledge every agent answers from.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;

export function Activity({ agentId, update, initialOpen }: { agentId?: AgentId; update: Update; initialOpen?: string }) {
  const toast = useToast();
  const items = agentActivity.filter((x) => !agentId || x.agent === agentId);
  const outcomes = [...new Set(items.map((x) => x.outcome))];
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(initialOpen ?? null);
  const [ratings, setRatings] = useState<Record<string, "good" | "bad">>({});
  const [teach, setTeach] = useState<string | null>(null);
  const q = query.trim().toLowerCase();
  const shown = items.filter((x) => (filter === "all" || x.outcome === filter) && (!q || `${x.who} ${x.summary} ${x.channel}`.toLowerCase().includes(q)));
  const open = items.find((x) => x.id === openId) ?? null;
  const agentOf = (x: ActivityItem) => agents.find((a) => a.id === x.agent)!;
  const lastAi = open ? [...open.lines].reverse().find((l) => l.from === "ai") : undefined;
  const firstAsk = open?.lines.find((l) => l.from === "customer");

  const rate = (id: string, r: "good" | "bad") => {
    setRatings((x) => ({ ...x, [id]: r }));
    if (r === "bad" && lastAi) setTeach(lastAi.text);
    else toast("Thanks. Marked as a good reply");
  };

  return (
    <>
      <section aria-label="Activity" className="min-w-0 rounded-[18px] border border-line bg-white">
        <div className="flex flex-col gap-3 border-b border-line p-3 lg:flex-row lg:items-center">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search activity</span>
            <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search customer or what happened"
              className="h-9 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-9 text-[14px] text-ink outline-none placeholder:text-subtle focus:border-ink"
            />
          </label>
          <div className="-mx-3 overflow-x-auto px-3">
            <SegmentedControl label="Filter by outcome" size="sm" value={filter} onChange={setFilter} options={[{ id: "all", label: `All ${items.length}` }, ...outcomes.map((o) => ({ id: o, label: o }))]} />
          </div>
        </div>
        {shown.length === 0 ? (
          <div className="p-8">
            <EmptyState icon="sparkle" title="Nothing here" body="Try another filter or search." />
          </div>
        ) : (
          <ul className="m-0 list-none p-0">
            {shown.map((x) => (
              <li key={x.id}>
                <button type="button" onClick={() => setOpenId(x.id)} className="flex w-full cursor-pointer items-center gap-3 border-b border-line px-5 py-3.5 text-left last:border-b-0 hover:bg-[#FAFAFC]">
                  {!agentId && <AgentTile agent={agentOf(x)} size={32} />}
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-[14px] text-ink">{x.summary}</span>
                    <span className="truncate text-[12.5px] text-subtle">
                      {!agentId && `${agentOf(x).name} · `}
                      {x.who} · {x.channel} · {x.when}
                    </span>
                  </span>
                  {ratings[x.id] && <span className="hidden text-[12px] text-subtle sm:inline">{ratings[x.id] === "good" ? "Rated good" : "Needs work"}</span>}
                  <Badge tone={outcomeTone[x.outcome] ?? "neutral"}>{x.outcome}</Badge>
                  <Icon name="chevron-right" size={16} className="flex-none text-faint" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Drawer
        open={!!open}
        onClose={() => {
          setOpenId(null);
          setTeach(null);
        }}
        title={open ? `${open.who} · ${open.channel}` : ""}
        footer={
          open &&
          (teach !== null ? (
            <>
              <Button variant="ghost" onClick={() => setTeach(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                disabled={!teach.trim()}
                onClick={() => {
                  update((s) => ({ ...s, assistant: { ...s.assistant, faqs: [...s.assistant.faqs, { q: firstAsk?.text ?? open.summary, a: teach.trim() }] } }));
                  setTeach(null);
                  toast("Saved to knowledge. Every agent will answer this way");
                }}
              >
                Save the better answer
              </Button>
            </>
          ) : (
            lastAi && (
              <>
                <Button variant="ghost" icon="pencil" onClick={() => setTeach(lastAi.text)}>
                  Teach it
                </Button>
                <Button variant={ratings[open.id] === "bad" ? "primary" : "secondary"} onClick={() => rate(open.id, "bad")}>
                  Needs work
                </Button>
                <Button variant={ratings[open.id] === "good" ? "primary" : "secondary"} icon="check" onClick={() => rate(open.id, "good")}>
                  Good reply
                </Button>
              </>
            )
          ))
        }
      >
        {open && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-2">
                <Badge tone={outcomeTone[open.outcome] ?? "neutral"}>{open.outcome}</Badge>
                <span className="text-[13px] text-subtle">
                  {agentOf(open).name} · {open.when}
                </span>
              </span>
              <p className="m-0 text-[15px] font-medium text-ink">{open.summary}</p>
            </div>
            {open.lines.length > 0 ? (
              <div className="flex flex-col gap-2.5 rounded-[14px] bg-panel p-3.5">
                {open.lines.map((l, i) => (
                  <div key={i} className={`flex max-w-[88%] flex-col gap-0.5 ${l.from === "ai" ? "self-end items-end" : "self-start"}`}>
                    <span className="px-1 text-[11.5px] font-semibold text-subtle">{l.from === "ai" ? agentOf(open).name : l.from === "team" ? "Your team" : open.who}</span>
                    <span className={`rounded-[14px] px-3.5 py-2 text-[14px] leading-snug ${l.from === "ai" ? "rounded-tr-[4px] bg-periwinkle-soft text-ink" : "rounded-tl-[4px] border border-line bg-white text-ink"}`}>{l.text}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="m-0 text-[14px] text-subtle">No conversation for this one.</p>
            )}
            {teach !== null && (
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-semibold text-ink">What should it have said?</span>
                <span className="text-[13px] text-subtle">Saved as an answer to “{firstAsk?.text ?? open.summary}”, for every agent.</span>
                <TextArea rows={3} value={teach} onChange={(e) => setTeach(e.target.value)} autoFocus />
              </label>
            )}
          </div>
        )}
      </Drawer>
    </>
  );
}
