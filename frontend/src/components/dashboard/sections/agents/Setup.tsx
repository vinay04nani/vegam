"use client";

import type { Agent } from "@/content/agents";
import { agentSetup, businessRules } from "@/content/agentSetup";
import type { PlanId } from "@/content/pricing";
import { useToast } from "../../kit";
import { SetupForm } from "./fields";
import { agentStore, changedKeys, useAgents, type AgentState } from "./store";
import { Panel } from "./ui";

// An agent's Setup: identity, what it can do, its rules and the settings only
// it has. Edits stay as unsaved changes until you publish them (the bar at
// the bottom of the page). Below: every published change, with Undo.

export function Setup({ agent, s, plan, onOpen }: { agent: Agent; s: AgentState; plan: PlanId; onOpen: (view: string) => void }) {
  const toast = useToast();
  const sections = agentSetup[agent.id];
  const changed = changedKeys(s);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 xl:grid-cols-[200px_minmax(0,1fr)]">
      <nav aria-label="Setup sections" className="hidden flex-col gap-0.5 xl:sticky xl:top-6 xl:flex">
        {sections.map((sec) => {
          const n = sec.fields.filter((f) => changed.includes(f.key)).length;
          return (
            <a key={sec.id} href={`#setup-${sec.id}`} className="flex min-h-9 items-center justify-between gap-2 rounded-[9px] px-3 text-[14px] text-ink-soft hover:bg-white hover:text-ink">
              {sec.title}
              {n > 0 && <span className="h-1.5 w-1.5 rounded-full bg-indigo" aria-label={`${n} changed`} />}
            </a>
          );
        })}
        <a href="#setup-history" className="flex min-h-9 items-center rounded-[9px] px-3 text-[14px] text-ink-soft hover:bg-white hover:text-ink">
          Change history
        </a>
      </nav>

      <div className="flex min-w-0 max-w-[780px] flex-col gap-6">
        <section aria-label={`${agent.name} setup`} className="rounded-[18px] border border-line bg-white px-5 py-6 sm:px-7">
          <SetupForm sections={sections} values={s.draft} changed={changed} onChange={(k, v) => agentStore.edit(agent.id, k, v)} plan={plan} onOpen={onOpen} />
        </section>

        <div id="setup-history" className="scroll-mt-6">
          <Panel title="Change history" description="Every published change. Undo puts an earlier version back live.">
            <ol className="m-0 flex list-none flex-col p-0">
              {s.history.map((c, i) => (
                <li key={c.id} className="relative flex gap-3 pb-4 last:pb-0">
                  {i < s.history.length - 1 && <span aria-hidden="true" className="absolute top-4 left-[5px] h-full w-px bg-line" />}
                  <span className={`relative mt-1.5 h-[11px] w-[11px] flex-none rounded-full ${i === 0 ? "bg-ink" : "border-2 border-line-strong bg-white"}`} />
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-[14px] text-ink">{c.changes.join("; ")}</span>
                    <span className="flex flex-wrap items-center gap-2 text-[12.5px] text-subtle">
                      {c.who} · {c.when}
                      {c.who === "You" && !c.changes[0].startsWith("Undid") && (
                        <button
                          type="button"
                          onClick={() => {
                            agentStore.undo(agent.id, c.id);
                            toast("Restored the earlier version");
                          }}
                          className="cursor-pointer font-semibold text-ink-soft underline underline-offset-2 hover:text-ink"
                        >
                          Undo
                        </button>
                      )}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Panel>
        </div>
      </div>
    </div>
  );
}

/** Business rules: defaults every agent follows. Saved straight away. */
export function BusinessRules({ plan, onOpen }: { plan: PlanId; onOpen: (view: string) => void }) {
  const { rules } = useAgents();
  return (
    <div className="flex max-w-[780px] flex-col gap-4">
      <p className="m-0 text-[15px] text-subtle">These apply to every agent unless an agent’s own setup says otherwise. Changes are saved straight away.</p>
      <section aria-label="Business rules" className="rounded-[18px] border border-line bg-white px-5 py-6 sm:px-7">
        <SetupForm sections={businessRules} values={rules} onChange={(k, v) => agentStore.setRule(k, v)} plan={plan} onOpen={onOpen} />
      </section>
    </div>
  );
}
