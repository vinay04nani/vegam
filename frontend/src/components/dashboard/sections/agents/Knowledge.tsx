"use client";

import { useState } from "react";
import { sampleUnanswered, type Agent, type AgentId } from "@/content/agents";
import { AssistantSetup } from "@/components/setup/AssistantSetup";
import type { OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, useToast } from "../../kit";
import { Switch, TextArea } from "../settings/parts";
import { Panel } from "./ui";

// Knowledge: what the agents answer from. The hub (on the AI agents home)
// edits services, prices and answers, lists the other sources and the
// questions nobody could answer, with a suggested answer drafted from how
// your team replied. An agent's Knowledge tab picks which sources it uses.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;

const sources = [
  { id: "services", name: "Services, prices and hours", detail: "From your setup", icon: "tag" as const },
  { id: "faqs", name: "Questions and answers", detail: "Written by you", icon: "note" as const },
  { id: "policies", name: "Policies", detail: "Cancellation, refunds, deposits", icon: "shield" as const },
  { id: "website", name: "Your website", detail: "14 pages · read 2 days ago", icon: "globe" as const },
  { id: "files", name: "Files", detail: "price-list.pdf · menu.pdf", icon: "upload" as const },
];

function Unanswered({ agentId, update }: { agentId?: AgentId; update: Update }) {
  const toast = useToast();
  const [items, setItems] = useState(sampleUnanswered.filter((u) => !agentId || u.agent === agentId));
  const [answers, setAnswers] = useState<Record<string, string>>(() => Object.fromEntries(items.map((u) => [u.id, u.suggestion ?? ""])));
  const save = (id: string) => {
    const q = items.find((u) => u.id === id);
    const a = answers[id]?.trim();
    if (!q || !a) return;
    update((s) => ({ ...s, assistant: { ...s.assistant, faqs: [...s.assistant.faqs, { q: q.question, a }] } }));
    setItems((x) => x.filter((y) => y.id !== id));
    toast("Saved. Every agent will use this answer");
  };
  return (
    <Panel
      title="Questions it couldn’t answer"
      description="It handed these to your team instead of guessing. Answer once and it knows next time."
      action={<Badge tone={items.length ? "warning" : "success"}>{items.length ? `${items.length} to answer` : "All caught up"}</Badge>}
    >
      {items.length === 0 ? (
        <p className="m-0 flex items-center gap-2 text-[14px] text-success">
          <Icon name="check" size={16} />
          Nothing waiting.
        </p>
      ) : (
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {items.map((u) => (
            <li key={u.id} className="flex flex-col gap-2.5 rounded-[14px] border border-line p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="m-0 text-[15px] font-semibold text-ink">“{u.question}”</p>
                <span className="text-[12.5px] text-subtle">
                  Asked {u.asked}× · {u.channel} · {u.last}
                </span>
              </div>
              {u.suggestion && (
                <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-indigo">
                  <Icon name="sparkle" size={13} />
                  Suggested from how your team replied
                </span>
              )}
              <TextArea aria-label={`Answer to: ${u.question}`} rows={2} value={answers[u.id] ?? ""} onChange={(e) => setAnswers((x) => ({ ...x, [u.id]: e.target.value }))} placeholder="Write the answer it should give…" />
              <div className="flex gap-2">
                <Button variant="primary" onClick={() => save(u.id)} disabled={!answers[u.id]?.trim()}>
                  {u.suggestion && answers[u.id] === u.suggestion ? "Use this answer" : "Save answer"}
                </Button>
                <Button variant="ghost" onClick={() => setItems((x) => x.filter((y) => y.id !== u.id))}>
                  Ignore
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}

function Sources({ picks, onPick }: { picks?: Record<string, boolean>; onPick?: (id: string, v: boolean) => void }) {
  const toast = useToast();
  return (
    <Panel title={picks ? "Sources it uses" : "Sources"} description={picks ? "Switch off anything this agent shouldn’t use." : "Everything your agents can answer from."}>
      <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
        {sources.map((src) => (
          <li key={src.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-panel text-muted">
              <Icon name={src.icon} size={17} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-[14px] font-medium text-ink">{src.name}</span>
              <span className="truncate text-[12.5px] text-subtle">{src.detail}</span>
            </span>
            {picks && onPick ? (
              <Switch checked={picks[src.id] ?? true} onChange={(v) => onPick(src.id, v)} label={`Use ${src.name}`} />
            ) : src.id === "website" ? (
              <button type="button" onClick={() => toast("Reading your website again (demo)", "info")} className="cursor-pointer text-[13px] font-semibold text-ink-soft hover:text-ink">
                Read again
              </button>
            ) : src.id === "files" ? (
              <button type="button" onClick={() => toast("Choose a PDF or document (demo)", "info")} className="cursor-pointer text-[13px] font-semibold text-ink-soft hover:text-ink">
                Add file
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/** The knowledge hub on the AI agents home. */
export function KnowledgeHub({ state, update }: { state: OnboardingState; update: Update }) {
  const toast = useToast();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-4 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex min-w-0 flex-col gap-4">
        <Unanswered update={update} />
        <Panel title="Services, prices and answers" description="What every agent answers from. Keep it short and true.">
          <AssistantSetup state={state} update={update} />
          <div className="flex justify-end border-t border-line pt-4">
            <Button variant="primary" onClick={() => toast("Knowledge saved")}>
              Save knowledge
            </Button>
          </div>
        </Panel>
      </div>
      <Sources />
    </div>
  );
}

/** An agent's Knowledge tab. */
export function AgentKnowledge({ agent, update, onOpen }: { agent: Agent; update: Update; onOpen: (view: string) => void }) {
  const [picks, setPicks] = useState<Record<string, boolean>>({ files: agent.group === "desk" });
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-4 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex min-w-0 flex-col gap-4">
        <Unanswered agentId={agent.id} update={update} />
        <Panel title="Edit what it knows" description="Services, prices and answers are shared by all agents.">
          <Button icon="pencil" onClick={() => onOpen("agents/knowledge")} className="self-start">
            Open the knowledge hub
          </Button>
        </Panel>
      </div>
      <Sources picks={picks} onPick={(id, v) => setPicks((p) => ({ ...p, [id]: v }))} />
    </div>
  );
}
