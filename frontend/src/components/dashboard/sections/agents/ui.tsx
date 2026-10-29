"use client";

import type { ReactNode } from "react";
import type { Agent } from "@/content/agents";
import { planRank } from "@/content/onboarding";
import { plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { Badge, type BadgeTone } from "../../kit";
import { changedKeys, type AgentState } from "./store";

// Small pieces shared by the AI agents pages: the agent's icon tile, its
// status, and a titled panel.

const tile: Record<Agent["group"], string> = {
  desk: "bg-[#EEF0FF] text-brand",
  grow: "bg-[#E9F5EC] text-success",
  you: "bg-[#FFF3E2] text-[#9A4A00]",
};

export function AgentTile({ agent, size = 44, off = false }: { agent: Agent; size?: number; off?: boolean }) {
  return (
    <span className={`flex flex-none items-center justify-center rounded-[12px] ${off ? "bg-panel text-muted" : tile[agent.group]}`} style={{ width: size, height: size }}>
      <Icon name={agent.icon} size={Math.round(size * 0.45)} />
    </span>
  );
}

export type Status = { label: string; tone: BadgeTone };

/** One status per agent, most important first. */
export function statusOf(agent: Agent, s: AgentState, paused: boolean, plan: PlanId): Status {
  if (planRank[plan] < planRank[agent.minPlan]) return { label: `${plans.find((p) => p.id === agent.minPlan)?.name} plan`, tone: "brand" };
  if (!s.on) return { label: "Off", tone: "neutral" };
  if (paused) return { label: "Paused", tone: "warning" };
  if (changedKeys(s).length) return { label: "Unsaved changes", tone: "brand" };
  if (agent.alerts.length) return { label: "Needs attention", tone: "warning" };
  if (agent.steps.some((x) => !x.done)) return { label: "Live · setup to finish", tone: "success" };
  return { label: "Live", tone: "success" };
}

export function StatusBadge({ status }: { status: Status }) {
  return (
    <Badge tone={status.tone} dot>
      {status.label}
    </Badge>
  );
}

/** A titled white panel, the building block of each tab. */
export function Panel({ title, description, action, children, className = "", flush = false }: { title?: string; description?: ReactNode; action?: ReactNode; children: ReactNode; className?: string; flush?: boolean }) {
  return (
    <section aria-label={title} className={`flex min-w-0 flex-col rounded-[18px] border border-line bg-white ${flush ? "" : "gap-4 p-5"} ${className}`}>
      {(title || action) && (
        <div className={`flex flex-wrap items-start justify-between gap-x-3 gap-y-2 ${flush ? "px-5 pt-5 pb-3" : ""}`}>
          <div className="min-w-0">
            {title && <h2 className="m-0 text-[15.5px] font-semibold text-ink">{title}</h2>}
            {description && <p className="m-0 mt-0.5 text-[13px] text-subtle">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

/** Outcome colours for activity badges. */
export const outcomeTone: Record<string, BadgeTone> = {
  Booked: "success",
  Paid: "success",
  Resolved: "neutral",
  Replied: "brand",
  Sent: "neutral",
  Done: "neutral",
  "Handed over": "warning",
  Transferred: "warning",
  "No answer": "neutral",
};
