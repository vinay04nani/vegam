"use client";

import { agents, type AgentId } from "@/content/agents";
import { planRank } from "@/content/onboarding";
import { plans, type PlanId } from "@/content/pricing";
import type { OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Button, Menu, Tabs, useToast } from "../../kit";
import { PlanNotice } from "../../ui";
import { Switch } from "../settings/parts";
import { Activity } from "./Activity";
import { AgentKnowledge } from "./Knowledge";
import { Overview } from "./Overview";
import { Performance } from "./Performance";
import { Setup } from "./Setup";
import { Test } from "./Test";
import { agentStore, changedKeys, useAgents } from "./store";
import { AgentTile, StatusDot, statusOf } from "./ui";

// One agent's page: Overview, Setup, Knowledge, Test, Activity and
// Performance. Setup edits stay unsaved until published from the bar at the
// bottom, which shows on every tab while there are changes.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;
export type AgentTab = "overview" | "setup" | "knowledge" | "test" | "activity" | "performance";

export function AgentPage({ id, tab, state, update, onOpen, plan }: { id: AgentId; tab: string; state: OnboardingState; update: Update; onOpen: (view: string) => void; plan: PlanId }) {
  const toast = useToast();
  const store = useAgents();
  const agent = agents.find((a) => a.id === id)!;
  const s = store.agents[id];
  const changes = changedKeys(s).length;
  const [base, extra] = tab.split(":") as [AgentTab, string | undefined];
  const current: AgentTab = (["overview", "setup", "knowledge", "test", "activity", "performance"] as const).includes(base) ? base : "overview";
  const go = (t: string) => onOpen(`agent:${id}/${t}`);
  const above = planRank[plan] < planRank[agent.minPlan];
  const planName = plans.find((p) => p.id === agent.minPlan)?.name ?? "";

  return (
    <div className={`flex flex-col gap-6 ${changes ? "pb-20" : ""}`}>
      {above && <PlanNotice feature={agent.name} planName={planName} currentName={plans.find((p) => p.id === plan)!.name} onPlans={() => onOpen("settings:plans")} />}
      <header className="flex flex-col gap-4">
        <button type="button" onClick={() => onOpen("agents")} className="inline-flex w-fit cursor-pointer items-center gap-1 text-[14px] font-medium text-subtle hover:text-ink">
          <Icon name="chevron-left" size={16} />
          AI agents
        </button>
        <div className="flex flex-wrap items-start gap-x-4 gap-y-3">
          <AgentTile agent={agent} size={48} off={!s.on} />
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <h1 className="m-0 font-serif text-[clamp(28px,2.8vw,38px)] leading-tight font-normal tracking-[-0.02em] text-ink">{agent.name}</h1>
            <p className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-subtle">
              <StatusDot status={statusOf(agent, s, store.paused, plan)} />
              <span aria-hidden="true">·</span>
              <span>{agent.works.join(", ")}</span>
              {agent.minPlan !== "starter" && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{planName} plan</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span className="text-[12.5px] tracking-[0.04em] uppercase">Sample data</span>
            </p>
          </div>
          <span className="ml-auto flex items-center gap-3">
            <span className="flex items-center gap-2.5 text-[14px] font-medium text-ink">
              {s.on ? "On" : "Off"}
              <Switch
                checked={s.on}
                onChange={(v) => {
                  agentStore.setOn(id, v);
                  toast(`${agent.name} turned ${v ? "on" : "off"}`);
                }}
                label={`${agent.name} on`}
              />
            </span>
            <Menu
              label={`More for ${agent.name}`}
              items={[
                { label: "Run tests", icon: "play", onSelect: () => go("test") },
                { label: "Change history", icon: "clock", onSelect: () => go("setup") },
                { label: "See its activity", icon: "chart", onSelect: () => go("activity") },
                { label: "", divider: true },
                { label: "Reset to recommended settings", icon: "refresh", onSelect: () => toast("Reset to recommended settings is part of your account (demo)", "info") },
              ]}
            />
          </span>
        </div>
        <p className="m-0 max-w-[680px] text-[15.5px] leading-relaxed text-subtle">{agent.description}</p>
      </header>

      <Tabs
        label={`${agent.name} sections`}
        value={current}
        onChange={(t) => go(t)}
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "setup", label: "Setup", count: changes || undefined },
          { id: "knowledge", label: "Knowledge" },
          { id: "test", label: "Test" },
          { id: "activity", label: "Activity" },
          { id: "performance", label: "Performance" },
        ]}
      />

      <div key={current} className="animate-[fade-in_0.15s_ease-out] motion-reduce:animate-none">
        {current === "overview" && <Overview agent={agent} s={s} go={go} onOpen={onOpen} />}
        {current === "setup" && <Setup agent={agent} s={s} plan={plan} onOpen={onOpen} />}
        {current === "knowledge" && <AgentKnowledge agent={agent} update={update} onOpen={onOpen} />}
        {current === "test" && <Test agent={agent} s={s} state={state} update={update} onOpen={onOpen} />}
        {current === "activity" && <Activity agentId={id} update={update} initialOpen={extra} />}
        {current === "performance" && <Performance agent={agent} onOpen={onOpen} />}
      </div>

      {changes > 0 && (
        <div
          role="region"
          aria-label="Unsaved changes"
          className="fixed inset-x-3 bottom-20 z-30 mx-auto flex max-w-[720px] lg:right-auto lg:mx-0 lg:w-[min(720px,calc(100vw-660px))] lg:min-w-[520px] flex-wrap items-center gap-2 rounded-[16px] bg-ink px-4 py-3 text-white shadow-[0_18px_40px_rgb(30_31_43/0.3)] lg:bottom-6 lg:left-[280px]"
        >
          <span className="flex min-w-0 flex-1 items-center gap-2 text-[14px] font-medium">
            <span className="h-2 w-2 flex-none rounded-full bg-accent" />
            {changes} unsaved change{changes === 1 ? "" : "s"}
            <span className="hidden text-white/60 sm:inline">· customers still get the live version</span>
          </span>
          <button
            type="button"
            onClick={() => {
              agentStore.discard(id);
              toast("Changes discarded");
            }}
            className="min-h-9 cursor-pointer rounded-[10px] px-3 text-[14px] font-semibold text-white/80 hover:bg-white/10 hover:text-white"
          >
            Discard
          </button>
          {current !== "test" && (
            <button type="button" onClick={() => go("test")} className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-[10px] border border-white/25 px-3 text-[14px] font-semibold hover:bg-white/10">
              <Icon name="play" size={14} />
              Test changes
            </button>
          )}
          <Button
            onClick={() => {
              agentStore.publish(id);
              toast(`${agent.name} updated. Customers get the new version now`);
            }}
            className="border-0"
          >
            Publish
          </Button>
        </div>
      )}
    </div>
  );
}
