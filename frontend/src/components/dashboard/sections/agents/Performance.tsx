"use client";

import type { Agent } from "@/content/agents";
import { Button, Progress } from "../../kit";
import { BarList, LineChart, SplitBar, slots } from "../reports/charts";
import { KpiRow } from "../reports/parts";
import { Panel } from "./ui";

// An agent's Performance: its numbers over 12 weeks, how its work ended, what
// held it back, and the plan allowance it uses.

const weeks = Array.from({ length: 12 }, (_, i) => (i === 11 ? "This week" : `${11 - i}w ago`));

export function Performance({ agent, onOpen }: { agent: Agent; onOpen: (view: string) => void }) {
  const main = agent.stats[0];
  return (
    <div className="flex flex-col gap-4">
      <KpiRow compare vs="vs last week" items={agent.stats.map((x, i) => ({ id: String(i), label: x.label, value: x.value, delta: x.delta, better: x.better, trend: x.trend }))} />

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Panel title={main.label} description="Each week, last 12 weeks">
          <LineChart label={`${main.label} each week`} labels={weeks} data={[{ id: "main", label: main.label, color: slots[0], values: main.trend }]} height={240} />
        </Panel>
        <Panel title="How it ended" description="This week">
          <SplitBar parts={agent.outcomes.map((o, i) => ({ label: o.label, share: o.share, color: slots[i % slots.length] }))} />
          {agent.usage && (
            <div className="mt-auto flex flex-col gap-1.5 border-t border-line pt-4">
              <span className="flex justify-between gap-3 text-[13px]">
                <span className="text-ink-soft">{agent.usage.label} this month</span>
                <span className="text-subtle tabular-nums">
                  {agent.usage.used.toLocaleString("en-IN")} of {agent.usage.max.toLocaleString("en-IN")}
                </span>
              </span>
              <Progress value={agent.usage.used} max={agent.usage.max} label={agent.usage.label} />
              <span className="text-[12px] text-subtle">Shared by all agents on your plan.</span>
            </div>
          )}
        </Panel>
      </div>

      {agent.reasons && (
        <Panel title={agent.reasons.title} description="Share of this week’s handovers">
          <BarList rows={agent.reasons.rows.map((r) => ({ label: r.label, value: Math.round(r.share * 100) }))} format={(v) => `${v}%`} note={(r) => `${r.label}: ${r.value}%`} labelWidth={200} />
        </Panel>
      )}

      <div className="flex justify-end">
        <Button icon="chart" onClick={() => onOpen("reports")}>
          Open Reports
        </Button>
      </div>
    </div>
  );
}
