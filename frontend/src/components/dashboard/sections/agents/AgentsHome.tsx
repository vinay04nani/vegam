"use client";

import { useState } from "react";
import { agentGroups, agents, sampleUnanswered, type Agent } from "@/content/agents";
import { planRank } from "@/content/onboarding";
import type { PlanId } from "@/content/pricing";
import type { OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Tabs, useToast } from "../../kit";
import { Switch } from "../settings/parts";
import { Activity } from "./Activity";
import { KnowledgeHub } from "./Knowledge";
import { BusinessRules } from "./Setup";
import { agentStore, useAgents } from "./store";
import { AgentTile, StatusDot, statusOf } from "./ui";

// The AI agents home, in the quiet style of Claude's Projects and OpenAI's
// agent lists: a plain header with one line of numbers, a large search, a
// few filters and simple monochrome cards grouped by what each agent is for.
// Knowledge, business rules and the combined activity log sit in tabs.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;
type HomeTab = "agents" | "knowledge" | "rules" | "activity";
type Filter = "all" | "on" | "off" | "attention";

/** The one number each card shows, in words. */
const metric = (a: Agent) => (a.headline.label.startsWith("Next") ? `${a.headline.label} ${a.headline.value}` : `${a.headline.value} ${a.headline.label.charAt(0).toLowerCase()}${a.headline.label.slice(1)}`);

export function AgentsHome({ tab, state, update, onOpen, plan }: { tab: string; state: OnboardingState; update: Update; onOpen: (view: string) => void; plan: PlanId }) {
  const toast = useToast();
  const store = useAgents();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const current: HomeTab = (["agents", "knowledge", "rules", "activity"] as const).includes(tab as HomeTab) ? (tab as HomeTab) : "agents";

  // An agent above the plan isn't working yet, whatever its switch says.
  const isOn = (a: Agent) => store.agents[a.id].on && planRank[plan] >= planRank[a.minPlan];
  const needs = (a: Agent) => isOn(a) && a.alerts.length > 0;
  const onCount = agents.filter(isOn).length;
  const attention = agents.filter(needs).length;
  const q = query.trim().toLowerCase();
  const match = (a: Agent) => (filter === "all" || (filter === "on" ? isOn(a) : filter === "off" ? !isOn(a) : needs(a))) && (!q || `${a.name} ${a.short} ${a.description} ${a.works.join(" ")}`.toLowerCase().includes(q));
  const shown = agents.filter(match);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: agents.length },
    { id: "on", label: "On", count: onCount },
    { id: "off", label: "Off", count: agents.length - onCount },
    { id: "attention", label: "Needs attention", count: attention },
  ];

  return (
    <div className="flex flex-col gap-7">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-2">
          <h1 className="m-0 font-serif text-[clamp(30px,3vw,40px)] leading-tight font-normal tracking-[-0.02em] text-ink">AI agents</h1>
          <p className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14.5px] text-subtle">
            <span>
              <span className="font-medium text-ink">{onCount}</span> of {agents.length} on
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <span className="font-medium text-ink">{store.paused ? 0 : 64}</span> handled today
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <span className="font-medium text-ink">84%</span> resolved without staff
            </span>
            {attention > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <button type="button" onClick={() => setFilter("attention")} className="cursor-pointer font-medium text-[#8A4B00] underline decoration-[#E8C48C] underline-offset-2 hover:decoration-[#8A4B00]">
                  {attention} need{attention === 1 ? "s" : ""} attention
                </button>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span className="text-[12.5px] tracking-[0.04em] uppercase">Sample data</span>
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={store.paused}
          onClick={() => {
            agentStore.setPaused(!store.paused);
            toast(store.paused ? "AI is back on" : "All AI paused. Your team gets every chat and call");
          }}
          className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-[12px] px-4 text-[14px] font-semibold transition ${store.paused ? "bg-ink text-white hover:bg-[#2c2d3d]" : "border border-line-strong bg-white text-ink hover:bg-panel"}`}
        >
          <Icon name={store.paused ? "play" : "lock"} size={15} />
          {store.paused ? "Resume all AI" : "Pause all AI"}
        </button>
      </header>

      {store.paused && (
        <p role="status" className="m-0 -mt-2 flex items-center gap-2.5 rounded-[12px] bg-[#FFF6E8] px-4 py-3 text-[14px] text-ink">
          <span className="h-2 w-2 flex-none rounded-full bg-[#E08A00]" />
          Every agent is paused. Customers get your away message and your team sees every chat and call.
        </p>
      )}

      <Tabs
        label="AI agents"
        value={current}
        onChange={(t) => onOpen(t === "agents" ? "agents" : `agents/${t}`)}
        tabs={[
          { id: "agents", label: "Agents" },
          { id: "knowledge", label: "Knowledge", count: sampleUnanswered.length || undefined },
          { id: "rules", label: "Business rules" },
          { id: "activity", label: "Activity" },
        ]}
      />

      {current === "agents" && (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <label className="relative block">
              <span className="sr-only">Search agents</span>
              <Icon name="search" size={18} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-subtle" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search agents"
                className="h-12 w-full rounded-[14px] border border-line-strong bg-white pr-4 pl-11 text-[15px] text-ink shadow-[0_1px_2px_rgb(30_31_43/0.04)] outline-none placeholder:text-subtle focus:border-ink/40 focus:ring-4 focus:ring-ink/5"
              />
            </label>
            <div role="group" aria-label="Show" className="flex flex-wrap gap-1.5">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-full px-3 text-[13.5px] font-medium transition ${filter === f.id ? "bg-ink text-white" : "text-ink-soft hover:bg-white hover:text-ink"}`}
                >
                  {f.label}
                  <span className={filter === f.id ? "text-white/60" : "text-subtle"}>{f.count}</span>
                </button>
              ))}
            </div>
          </div>

          {shown.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-16 text-center">
              <p className="m-0 text-[15px] font-medium text-ink">No agents match</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
                className="cursor-pointer text-[14px] text-subtle underline underline-offset-2 hover:text-ink"
              >
                Clear search and filters
              </button>
            </div>
          )}

          {agentGroups.map((g) => {
            const list = shown.filter((a) => a.group === g.id);
            if (!list.length) return null;
            return (
              <section key={g.id} aria-labelledby={`group-${g.id}`} className="flex flex-col gap-3">
                <h2 id={`group-${g.id}`} className="m-0 flex items-baseline gap-2 text-[14px] font-medium text-subtle">
                  {g.title}
                  <span className="text-[13px] text-faint">{list.length}</span>
                </h2>
                <div className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {list.map((a) => {
                    const s = store.agents[a.id];
                    const status = statusOf(a, s, store.paused, plan);
                    const short = { ...status, label: status.label.replace(" · setup to finish", "") };
                    const above = planRank[plan] < planRank[a.minPlan];
                    return (
                      <article
                        key={a.id}
                        className="group relative flex min-h-[176px] flex-col gap-3 rounded-[16px] border border-line bg-white p-5 transition hover:border-line-strong hover:bg-[#FCFCFD] hover:shadow-[0_4px_16px_rgb(30_31_43/0.05)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <AgentTile agent={a} size={36} off={!s.on} />
                          <span className="relative z-10">
                            <Switch
                              checked={s.on}
                              onChange={(v) => {
                                agentStore.setOn(a.id, v);
                                toast(`${a.name} turned ${v ? "on" : "off"}`);
                              }}
                              label={`${a.name} on`}
                            />
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="m-0 text-[15.5px] leading-snug font-semibold text-ink">
                            <button
                              type="button"
                              onClick={() => onOpen(`agent:${a.id}`)}
                              className="cursor-pointer text-left after:absolute after:inset-0 after:rounded-[16px] after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-indigo"
                            >
                              {a.name}
                            </button>
                          </h3>
                          <p className="m-0 line-clamp-2 text-[14px] leading-snug text-subtle">{a.short}</p>
                        </div>
                        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-[13px] text-subtle">
                          <StatusDot status={short} />
                          {s.on && !above && !store.paused && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="truncate">{metric(a)}</span>
                            </>
                          )}
                        </div>
                        {needs(a) && !store.paused && <p className="m-0 -mt-1 truncate text-[13px] text-[#8A4B00]">{a.alerts[0].text}</p>}
                        <Icon name="chevron-right" size={16} className="absolute right-4 bottom-5 text-faint opacity-0 transition group-hover:opacity-100" />
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}
      {current === "knowledge" && <KnowledgeHub state={state} update={update} />}
      {current === "rules" && <BusinessRules plan={plan} onOpen={onOpen} />}
      {current === "activity" && <Activity update={update} />}
    </div>
  );
}
