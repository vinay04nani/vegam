"use client";

import { agentGroups, agents, sampleUnanswered } from "@/content/agents";
import { planRank } from "@/content/onboarding";
import { plans, type PlanId } from "@/content/pricing";
import type { OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Tabs, useToast } from "../../kit";
import { PageTitle, SampleTag } from "../../ui";
import { Sparkline } from "../reports/charts";
import { Switch } from "../settings/parts";
import { Activity } from "./Activity";
import { KnowledgeHub } from "./Knowledge";
import { BusinessRules } from "./Setup";
import { agentStore, useAgents } from "./store";
import { AgentTile, StatusBadge, statusOf } from "./ui";

// The AI agents home: an emergency "Pause all AI", today's totals, every agent
// grouped by what it's for (status, its main number, anything that needs
// you), and the things all agents share: knowledge, business rules and a
// combined activity log.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;
type HomeTab = "agents" | "knowledge" | "rules" | "activity";

export function AgentsHome({ tab, state, update, onOpen, plan }: { tab: string; state: OnboardingState; update: Update; onOpen: (view: string) => void; plan: PlanId }) {
  const toast = useToast();
  const store = useAgents();
  const current: HomeTab = (["agents", "knowledge", "rules", "activity"] as const).includes(tab as HomeTab) ? (tab as HomeTab) : "agents";
  const live = agents.filter((a) => store.agents[a.id].on && planRank[plan] >= planRank[a.minPlan]).length;
  const alerts = agents.filter((a) => store.agents[a.id].on).reduce((n, a) => n + a.alerts.length, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="AI agents" body="Your AI team. Set up what each one does, test it before customers see it, and check everything it did." />
        <div className="flex flex-wrap items-center gap-2">
          <SampleTag />
          <span className={`flex min-h-10 items-center gap-3 rounded-[12px] border px-3.5 text-[14px] font-semibold ${store.paused ? "border-[#F2C38B] bg-[#FFF4E5] text-[#8A4B00]" : "border-line-strong bg-white text-ink"}`}>
            <Icon name={store.paused ? "lock" : "sparkle"} size={16} />
            {store.paused ? "All AI paused" : "Pause all AI"}
            <Switch
              checked={store.paused}
              onChange={(v) => {
                agentStore.setPaused(v);
                toast(v ? "All AI paused. Your team gets every chat and call" : "AI is back on");
              }}
              label="Pause all AI"
            />
          </span>
        </div>
      </div>

      {store.paused && (
        <p role="status" className="m-0 flex flex-wrap items-center gap-3 rounded-[14px] border border-[#F2C38B] bg-[#FFF8EE] px-4 py-3 text-[14px] text-ink">
          <Icon name="bell" size={17} className="text-[#9A5B00]" />
          <span className="min-w-0 flex-1">
            <strong className="font-semibold">Every agent is paused.</strong> Customers get your away message and your team sees every chat and call.
          </span>
          <button type="button" onClick={() => agentStore.setPaused(false)} className="min-h-9 cursor-pointer rounded-[10px] bg-ink px-3.5 text-[14px] font-semibold text-white">
            Resume
          </button>
        </p>
      )}

      <div className="grid grid-cols-2 overflow-hidden rounded-[18px] border border-line bg-white lg:grid-cols-4">
        {[
          { label: "Handled today", value: store.paused ? "0" : "64", note: "52 chats · 12 calls" },
          { label: "Resolved without staff", value: "84%", note: "Last 7 days" },
          { label: "Booked by the AI today", value: store.paused ? "0" : "9", note: "₹10,800 at your prices" },
          { label: "Needs you", value: String(alerts), note: alerts ? "Across your agents" : "All clear", warn: alerts > 0 },
        ].map((x, i) => (
          <div key={x.label} className={`flex flex-col gap-1 p-4 sm:p-5 ${i % 2 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <span className="text-[13px] font-medium text-subtle">{x.label}</span>
            <span className="text-[26px] leading-tight font-semibold tracking-[-0.02em] text-ink">{x.value}</span>
            <span className={`text-[12.5px] ${x.warn ? "font-semibold text-warning" : "text-subtle"}`}>{x.note}</span>
          </div>
        ))}
      </div>

      <Tabs
        label="AI agents"
        value={current}
        onChange={(t) => onOpen(t === "agents" ? "agents" : `agents/${t}`)}
        tabs={[
          { id: "agents", label: "Agents", count: live },
          { id: "knowledge", label: "Knowledge", count: sampleUnanswered.length || undefined },
          { id: "rules", label: "Business rules" },
          { id: "activity", label: "Activity" },
        ]}
      />

      {current === "agents" && (
        <div className="flex flex-col gap-8">
          {agentGroups.map((g) => (
            <section key={g.id} aria-labelledby={`group-${g.id}`} className="flex flex-col gap-3">
              <div>
                <h2 id={`group-${g.id}`} className="m-0 text-[17px] font-semibold text-ink">
                  {g.title}
                </h2>
                <p className="m-0 text-[14px] text-subtle">{g.body}</p>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-2 xl:grid-cols-3">
                {agents
                  .filter((a) => a.group === g.id)
                  .map((a) => {
                    const s = store.agents[a.id];
                    const status = statusOf(a, s, store.paused, plan);
                    const dim = !s.on || store.paused;
                    return (
                      <article key={a.id} className="relative flex flex-col gap-4 rounded-[18px] border border-line bg-white p-5 transition hover:border-line-strong hover:shadow-[0_8px_24px_rgb(30_31_43/0.07)]">
                        <div className="flex items-start gap-3">
                          <AgentTile agent={a} size={44} off={!s.on} />
                          <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
                            <h3 className="m-0 text-[16px] leading-tight font-semibold text-ink">
                              <button
                                type="button"
                                onClick={() => onOpen(`agent:${a.id}`)}
                                className="cursor-pointer text-left after:absolute after:inset-0 after:rounded-[18px] after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-indigo"
                              >
                                {a.name}
                              </button>
                            </h3>
                            <StatusBadge status={status} />
                          </div>
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
                        <p className="m-0 text-[14px] leading-snug text-ink-soft">{a.short}</p>
                        <div className="mt-auto flex items-end justify-between gap-3 rounded-[12px] bg-panel px-3.5 py-3">
                          <span className="flex flex-col">
                            <span className="text-[12.5px] text-subtle">{a.headline.label}</span>
                            <span className={`text-[20px] leading-tight font-semibold tracking-[-0.01em] ${dim ? "text-muted" : "text-ink"}`}>{dim ? "—" : a.headline.value}</span>
                          </span>
                          {!dim && <Sparkline values={a.stats[0].trend} width={72} height={24} />}
                        </div>
                        <div className="flex min-h-5 items-center justify-between gap-2 text-[13px]">
                          {s.on && a.alerts[0] ? (
                            <span className="flex min-w-0 items-center gap-1.5 font-medium text-[#8A4B00]">
                              <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#E08A00]" />
                              <span className="truncate">{a.alerts[0].text}</span>
                            </span>
                          ) : (
                            <span className="truncate text-subtle">{a.works.join(" · ")}</span>
                          )}
                          <span className="flex flex-none items-center gap-0.5 font-semibold text-ink-soft">
                            Open
                            <Icon name="chevron-right" size={15} />
                          </span>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </section>
          ))}
          <p className="m-0 text-[13px] text-subtle">Agents above your plan ({plans.find((p) => p.id === plan)?.name}) can be explored with sample data and switched on after upgrading.</p>
        </div>
      )}
      {current === "knowledge" && <KnowledgeHub state={state} update={update} />}
      {current === "rules" && <BusinessRules plan={plan} onOpen={onOpen} />}
      {current === "activity" && <Activity update={update} />}
    </div>
  );
}
