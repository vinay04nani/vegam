"use client";

import { agentActivity, type Agent } from "@/content/agents";
import { agentSetup } from "@/content/agentSetup";
import { Icon } from "@/components/ui/Icon";
import { Button, useToast } from "../../kit";
import { KpiRow } from "../reports/parts";
import { agentStore, type AgentState } from "./store";
import { OutcomeDot, Panel } from "./ui";

// An agent's Overview: what's left to set up, this week's numbers, what it
// did lately, what needs you, its key settings and recent changes.

/** Readable value of a setting for the summary. */
function readable(agent: Agent, key: string, v: unknown) {
  const f = agentSetup[agent.id].flatMap((s) => s.fields).find((x) => x.key === key);
  if (!f) return "";
  if (typeof v === "boolean") return v ? "On" : "Off";
  if (f.type === "select") return f.options.find((o) => o.v === v)?.l ?? String(v);
  if (f.type === "voice") return String(v).charAt(0).toUpperCase() + String(v).slice(1);
  if (f.type === "sequence") return `${(v as unknown[]).length} step${(v as unknown[]).length === 1 ? "" : "s"}`;
  if (f.type === "permissions") return `${(v as unknown[]).length} numbers`;
  if (Array.isArray(v)) return (v as string[]).join(", ") || "None";
  return String(v);
}

export function Overview({ agent, s, go, onOpen }: { agent: Agent; s: AgentState; go: (tab: string) => void; onOpen: (view: string) => void }) {
  const toast = useToast();
  const recent = agentActivity.filter((x) => x.agent === agent.id).slice(0, 5);
  const todo = agent.steps.filter((x) => !x.done);
  const summary = agentSetup[agent.id]
    .flatMap((sec) => sec.fields)
    .filter((f) => f.type !== "textarea" && f.type !== "link" && f.type !== "perLocation" && !("locked" in f && f.locked))
    .slice(0, 6);
  const changes = s.history.slice(0, 3);
  const open = (view: string) => (view.startsWith(`agent:${agent.id}/`) ? go(view.split("/")[1]) : onOpen(view));

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="flex min-w-0 flex-col gap-4">
        {todo.length > 0 && (
          <Panel title="Finish setting up" description={`${agent.steps.length - todo.length} of ${agent.steps.length} done`}>
            <span className="block h-1.5 overflow-hidden rounded-full bg-panel">
              <span className="block h-full rounded-full bg-ink" style={{ width: `${((agent.steps.length - todo.length) / agent.steps.length) * 100}%` }} />
            </span>
            <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
              {agent.steps.map((st) => (
                <li key={st.label} className="flex items-center gap-3 py-2.5">
                  <span className={`flex h-6 w-6 flex-none items-center justify-center rounded-full ${st.done ? "bg-[#E8F3EA] text-success" : "border-2 border-line-strong"}`}>
                    {st.done && <Icon name="check" size={13} strokeWidth={2.6} className="[&_circle]:hidden" />}
                  </span>
                  <span className={`min-w-0 flex-1 text-[14px] ${st.done ? "text-subtle line-through decoration-line-strong" : "font-medium text-ink"}`}>{st.label}</span>
                  {!st.done && st.view && (
                    <Button onClick={() => open(st.view!)} className="min-h-8 px-3 text-[13px]">
                      Do it
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </Panel>
        )}

        <div>
          <h2 className="m-0 mb-3 text-[15.5px] font-semibold text-ink">This week</h2>
          <KpiRow compare vs="vs last week" items={agent.stats.map((x, i) => ({ id: String(i), label: x.label, value: s.on ? x.value : "—", delta: s.on ? x.delta : undefined, better: x.better, trend: x.trend }))} />
        </div>

        <Panel
          flush
          title="Recent activity"
          action={
            <button type="button" onClick={() => go("activity")} className="cursor-pointer text-[13.5px] font-semibold text-ink-soft hover:text-ink">
              See all
            </button>
          }
        >
          {recent.length === 0 ? (
            <p className="m-0 border-t border-line px-5 py-6 text-[14px] text-subtle">Nothing yet. Activity shows up here as soon as it starts working.</p>
          ) : (
            <ul className="m-0 list-none border-t border-line p-0">
              {recent.map((x) => (
                <li key={x.id}>
                  <button type="button" onClick={() => go(`activity:${x.id}`)} className="flex w-full cursor-pointer items-center gap-3 border-b border-line px-5 py-3 text-left last:border-b-0 hover:bg-[#FAFAFC]">
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-[14px] text-ink">{x.summary}</span>
                      <span className="text-[12.5px] text-subtle">
                        {x.who} · {x.channel} · {x.when}
                      </span>
                    </span>
                    <OutcomeDot outcome={x.outcome} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>

      <div className="flex min-w-0 flex-col divide-y divide-line rounded-[16px] border border-line bg-white [&>section]:p-5">
        <Panel plain title="Needs you">
          {agent.alerts.length === 0 ? (
            <p className="m-0 text-[14px] text-subtle">Nothing right now.</p>
          ) : (
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {agent.alerts.map((al) => (
                <li key={al.text} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#E08A00]" />
                  <span className="flex min-w-0 flex-1 flex-col gap-1 text-[14px] text-ink">
                    {al.text}
                    {al.action && (
                      <button type="button" onClick={() => open(al.action!.view)} className="w-fit cursor-pointer text-[13.5px] font-semibold text-ink underline decoration-line-strong underline-offset-2 hover:decoration-ink">
                        {al.action.label}
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          plain
          title="How it’s set up"
          action={
            <button type="button" onClick={() => go("setup")} className="cursor-pointer text-[13.5px] font-semibold text-ink-soft hover:text-ink">
              Edit
            </button>
          }
        >
          <dl className="m-0 flex flex-col divide-y divide-line">
            {summary.map((f) => (
              <div key={f.key} className="flex items-start justify-between gap-4 py-2 first:pt-0 last:pb-0">
                <dt className="text-[13px] text-subtle">{f.label}</dt>
                <dd className="m-0 max-w-[55%] text-right text-[13px] font-medium text-ink">{readable(agent, f.key, s.live[f.key])}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        <Panel plain title="Recent changes">
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {changes.map((c, i) => (
              <li key={c.id} className="flex flex-col gap-0.5">
                <span className="text-[13.5px] text-ink">{c.changes.join("; ")}</span>
                <span className="flex items-center gap-2 text-[12.5px] text-subtle">
                  {c.who} · {c.when}
                  {i === 0 && c.who === "You" && !c.changes[0].startsWith("Undid") && (
                    <button
                      type="button"
                      onClick={() => {
                        agentStore.undo(agent.id, c.id);
                        toast("Change undone");
                      }}
                      className="cursor-pointer font-semibold text-ink-soft underline underline-offset-2 hover:text-ink"
                    >
                      Undo
                    </button>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
