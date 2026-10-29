"use client";

import { useEffect, useState } from "react";
import { agentActivity, setupReview, testSets, type Agent } from "@/content/agents";
import type { Config, Step } from "@/content/agentSetup";
import { TestChat, testSuggestions } from "@/components/setup/TestChat";
import type { OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, SegmentedControl, useToast } from "../../kit";
import { TextArea } from "../settings/parts";
import { changedKeys, type AgentState } from "./store";
import { Panel } from "./ui";

// Test: try the agent before customers do. A playground (chat), a test call
// (voice), or a preview of the messages it will send; a test set that runs
// against your unsaved changes or the live version; and, for the chat
// receptionist, the 50 setup replies checked with you before go-live.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;

const fill = (t: string) =>
  t
    .replace(/\{name\}/g, "Priya")
    .replace(/\{amount\}/g, "₹1,200")
    .replace(/\{item\}/g, "Standard appointment")
    .replace(/\{link\}/g, "pay.vegam.app/04k21x")
    .replace(/\{gap\}/g, "6 weeks");
const after = (h: string) => ({ "4": "4 hours later", "24": "1 day later", "72": "3 days later", "168": "7 days later" })[h] ?? "";

function Bubble({ text, note }: { text: string; note?: string }) {
  return (
    <div className="flex flex-col gap-1">
      {note && <span className="px-1 text-[11.5px] font-semibold text-[#54656F]">{note}</span>}
      <div className="max-w-[90%] rounded-[10px] rounded-tl-none bg-white px-3 py-2 text-[14px] leading-[1.45] text-[#111B21] shadow-[0_1px_1px_rgb(0_0_0/0.08)]">{fill(text)}</div>
    </div>
  );
}

function MessagePreview({ agent, cfg }: { agent: Agent; cfg: Config }) {
  const msgs: { note: string; text: string }[] =
    agent.id === "followup"
      ? (cfg.seq_price as Step[]).map((s, i) => ({ note: `Step ${i + 1} · ${after(s.after)}`, text: s.text }))
      : agent.id === "payments"
        ? (cfg.days as string[]).map((d) => ({ note: `${d} after the link`, text: cfg.text as string }))
        : agent.id === "reviews"
          ? [
              { note: "After the visit", text: cfg.ask_text as string },
              { note: "If they rate 1–3", text: cfg.sorry as string },
            ]
          : [
              { note: "Time to rebook", text: cfg.rebook_text as string },
              { note: "Win back", text: cfg.winback_text as string },
            ];
  return (
    <Panel title="Preview" description="What a customer called Priya would get, with your unsaved changes.">
      <div className="flex flex-col gap-3 rounded-[14px] bg-[#EFEAE2] p-4">
        {msgs.map((m, i) => (
          <Bubble key={i} note={m.note} text={m.text} />
        ))}
      </div>
    </Panel>
  );
}

function ReportPreview({ cfg }: { cfg: Config }) {
  const toast = useToast();
  const parts = cfg.parts as string[];
  return (
    <Panel
      title="Next morning report"
      description={`Tomorrow at ${cfg.time}, to ${(cfg.to as string[]).join(" and ")}`}
      action={
        <Button icon="send" onClick={() => toast("Test report sent to your WhatsApp (demo)")}>
          Send me a test
        </Button>
      }
    >
      <div className="rounded-[14px] bg-[#EFEAE2] p-4">
        <div className="max-w-[92%] rounded-[10px] rounded-tl-none bg-white px-3.5 py-3 text-[14px] leading-[1.55] text-[#111B21] shadow-[0_1px_1px_rgb(0_0_0/0.08)]">
          <strong className="font-semibold">Good morning! Here’s yesterday at Nila & Co:</strong>
          {parts.includes("Yesterday’s numbers") && <span className="block">14 enquiries, all replied · 6 new bookings · 2 missed calls, both followed up</span>}
          {parts.includes("What needs you") && <span className="mt-1.5 block">⚠️ Needs you: 1 customer asked about a refund</span>}
          {parts.includes("Today’s bookings") && <span className="mt-1.5 block">📅 Today: 6 bookings, first at 10:00 AM</span>}
          {parts.includes("Money collected") && <span className="mt-1.5 block">💰 Collected: ₹3,700 · ₹10,700 overdue</span>}
          {parts.includes("New reviews") && <span className="mt-1.5 block">⭐ 2 new Google reviews (5★, 4★)</span>}
        </div>
      </div>
    </Panel>
  );
}

const commands: { q: string; a: string }[] = [
  { q: "Bookings today?", a: "6 bookings today: 10:00 R. Mehta, 11:30 A. Khan, 12:00 L. Fernandes, 3:00 S. Rao, 5:30 J. Thomas, 6:30 P. Sharma." },
  { q: "Block Friday afternoon", a: "Blocked Friday 2–6 PM. 2 people are already booked then; want me to move them?" },
  { q: "Who needs a call back?", a: "2 people: +91 90•• ••• 044 (group booking, after 5 PM) and +91 95•• ••• 044 (prices)." },
  { q: "Pause the AI", a: "Paused. Every new chat now goes to your team. Say “Resume the AI” to turn it back on." },
];

function OwnerSimulator() {
  const [log, setLog] = useState<{ q: string; a: string }[]>([]);
  return (
    <Panel title="Try a command" description="As if you messaged it from your own WhatsApp.">
      <div className="flex min-h-[220px] flex-col gap-2.5 rounded-[14px] bg-[#EFEAE2] p-4">
        {log.length === 0 && <p className="m-auto text-[13.5px] text-[#54656F]">Pick a command below.</p>}
        {log.map((m, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="max-w-[85%] self-end rounded-[10px] rounded-tr-none bg-[#D9FDD3] px-3 py-2 text-[14px] text-[#111B21]">{m.q}</span>
            <span className="max-w-[90%] self-start rounded-[10px] rounded-tl-none bg-white px-3 py-2 text-[14px] text-[#111B21] shadow-[0_1px_1px_rgb(0_0_0/0.08)]">{m.a}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {commands.map((c) => (
          <button key={c.q} type="button" onClick={() => setLog((l) => [...l, c])} className="min-h-9 cursor-pointer rounded-full border border-line-strong bg-white px-3.5 text-[13.5px] font-medium text-ink hover:border-ink">
            {c.q}
          </button>
        ))}
      </div>
    </Panel>
  );
}

function CallTest({ agent }: { agent: Agent }) {
  const toast = useToast();
  const sample = agentActivity.find((x) => x.agent === agent.id && x.lines.length);
  return (
    <Panel
      title={agent.id === "voice" ? "Test call" : "Test an outbound call"}
      description={agent.id === "voice" ? "Call your AI number from your mobile. Calls from your own number are marked as tests." : "It calls your own mobile as if you were a new lead."}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[14px] bg-panel p-4">
        <span className="flex flex-col">
          <span className="text-[12.5px] text-subtle">{agent.id === "voice" ? "Your AI number" : "It will call"}</span>
          <span className="text-[20px] font-semibold tracking-[0.01em] text-ink">{agent.id === "voice" ? "+91 80 0000 0000" : "+91 98765 43210 · You"}</span>
        </span>
        <Button variant="primary" icon="phone" onClick={() => toast(agent.id === "voice" ? "Calling you now so you can hear it (demo)" : "Calling your mobile now (demo)", "info")}>
          {agent.id === "voice" ? "Call me instead" : "Call me now"}
        </Button>
      </div>
      {sample && (
        <div className="flex flex-col gap-2">
          <span className="text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">A real call, for reference</span>
          {sample.lines.map((l, i) => (
            <div key={i} className={`flex max-w-[88%] flex-col gap-0.5 ${l.from === "ai" ? "self-end items-end" : "self-start"}`}>
              <span className={`rounded-[14px] px-3.5 py-2 text-[14px] leading-snug ${l.from === "ai" ? "rounded-tr-[4px] bg-periwinkle-soft text-ink" : "rounded-tl-[4px] border border-line bg-white text-ink"}`}>{l.text}</span>
            </div>
          ))}
        </div>
      )}
    </Panel>
  );
}

/** Tests fail when a setting would break them, so a change can be checked before it goes live. */
function failure(agent: Agent, id: string, cfg: Config): string | null {
  if (agent.id === "chat" && id === "t4" && !cfg.h_person) return "Kept answering instead of handing over. “Hand over when they ask for a person” is off.";
  if (agent.id === "chat" && id === "t5" && !(cfg.languages as string[]).includes("Hindi")) return "Replied in English. Hindi isn’t in its languages.";
  if (agent.id === "voice" && id === "t3" && !cfg.h_person) return "Didn’t transfer. “Transfer when they ask for a person” is off.";
  if (agent.id === "owner" && id === "t3" && !cfg.confirm) return "Cancelled without asking. Confirmation is off.";
  return null;
}

function TestSet({ agent, s }: { agent: Agent; s: AgentState }) {
  const hasChanges = changedKeys(s).length > 0;
  const [version, setVersion] = useState<"draft" | "live">(hasChanges ? "draft" : "live");
  const [run, setRun] = useState<"idle" | "running" | "done">("idle");
  useEffect(() => setRun("idle"), [version, s.draft]);
  const cfg = version === "draft" ? s.draft : s.live;
  const tests = testSets[agent.id];
  const results = tests.map((t) => ({ ...t, fail: failure(agent, t.id, cfg) }));
  const failed = results.filter((r) => r.fail).length;

  return (
    <Panel
      title="Test set"
      description="Situations it should always get right. Run them after every change."
      action={
        <Button
          variant="primary"
          icon="play"
          disabled={run === "running"}
          onClick={() => {
            setRun("running");
            window.setTimeout(() => setRun("done"), 900);
          }}
        >
          {run === "running" ? "Running…" : "Run all tests"}
        </Button>
      }
    >
      {hasChanges && (
        <SegmentedControl
          label="Test which version"
          size="sm"
          value={version}
          onChange={setVersion}
          options={[
            { id: "draft", label: "Your unsaved changes" },
            { id: "live", label: "Live version" },
          ]}
        />
      )}
      {run === "done" && (
        <p className={`m-0 flex items-center gap-2 rounded-[12px] px-3.5 py-2.5 text-[14px] font-medium ${failed ? "bg-[#FDECEC] text-danger" : "bg-[#E8F3EA] text-success"}`} role="status">
          <Icon name={failed ? "close" : "check"} size={16} />
          {failed ? `${failed} of ${tests.length} failed. Fix the setting, then run again.` : `All ${tests.length} passed.`}
        </p>
      )}
      <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
        {results.map((t) => (
          <li key={t.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <span
              className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${run !== "done" ? (run === "running" ? "animate-pulse bg-panel" : "border-2 border-line-strong") : t.fail ? "bg-[#FDECEC] text-danger" : "bg-[#E8F3EA] text-success"}`}
            >
              {run === "done" && <Icon name={t.fail ? "close" : "check"} size={13} strokeWidth={2.6} className="[&_circle]:hidden" />}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-[14px] font-medium text-ink">{t.scenario}</span>
              <span className="text-[13px] text-subtle">Should: {t.expect}</span>
              {run === "done" && t.fail && <span className="text-[13px] text-danger">{t.fail}</span>}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function SetupReview({ update, onOpen }: { update: Update; onOpen: (view: string) => void }) {
  const toast = useToast();
  const [review, setReview] = useState(setupReview);
  const [show, setShow] = useState<"todo" | "done">("todo");
  const [fixing, setFixing] = useState<{ id: string; text: string } | null>(null);
  const reviewed = review.filter((r) => r.status !== "todo").length;
  return (
    <Panel
      flush
      title="Setup review: 50 test replies"
      description="Before go-live we test 50 real questions and check every reply with you."
      action={
        <Button icon="headset" onClick={() => onOpen("settings:help")}>
          Review it with us
        </Button>
      }
    >
      <div className="flex flex-col gap-2 px-5 pb-4">
        <span className="flex justify-between text-[13.5px]">
          <span className="font-medium text-ink">
            {reviewed} of {review.length} checked
          </span>
          <span className="text-subtle">{review.filter((r) => r.status === "fixed").length} fixed</span>
        </span>
        <span className="block h-1.5 overflow-hidden rounded-full bg-panel">
          <span className="block h-full rounded-full bg-ink transition-[width]" style={{ width: `${(reviewed / review.length) * 100}%` }} />
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-line px-5 py-3">
        <SegmentedControl
          label="Show replies"
          size="sm"
          value={show}
          onChange={setShow}
          options={[
            { id: "todo", label: `To check ${review.length - reviewed}` },
            { id: "done", label: `Checked ${reviewed}` },
          ]}
        />
        {show === "todo" && review.length > reviewed && (
          <Button
            variant="ghost"
            icon="check"
            onClick={() => {
              setReview((all) => all.map((r) => (r.status === "todo" ? { ...r, status: "ok" } : r)));
              toast("All replies marked as right");
            }}
          >
            Mark all as right
          </Button>
        )}
      </div>
      <ul className="m-0 max-h-[560px] list-none overflow-y-auto p-0">
        {review
          .filter((r) => (show === "todo" ? r.status === "todo" : r.status !== "todo"))
          .map((r) => (
            <li key={r.id} className="flex flex-col gap-2 border-b border-line px-5 py-4 last:border-b-0">
              <span className="flex items-start justify-between gap-3">
                <span className="text-[14px] font-semibold text-ink">“{r.q}”</span>
                {r.status === "ok" && <Badge tone="success">Right</Badge>}
                {r.status === "fixed" && <Badge tone="brand">Fixed</Badge>}
              </span>
              {fixing?.id === r.id ? (
                <div className="flex flex-col gap-2">
                  <TextArea aria-label="Better answer" rows={2} value={fixing.text} onChange={(e) => setFixing({ id: r.id, text: e.target.value })} autoFocus />
                  <span className="flex gap-2">
                    <Button
                      variant="primary"
                      disabled={!fixing.text.trim()}
                      onClick={() => {
                        setReview((all) => all.map((x) => (x.id === r.id ? { ...x, a: fixing.text.trim(), status: "fixed" } : x)));
                        update((s) => ({ ...s, assistant: { ...s.assistant, faqs: [...s.assistant.faqs, { q: r.q, a: fixing.text.trim() }] } }));
                        setFixing(null);
                        toast("Saved. It will answer this way from now on");
                      }}
                    >
                      Save answer
                    </Button>
                    <Button variant="ghost" onClick={() => setFixing(null)}>
                      Cancel
                    </Button>
                  </span>
                </div>
              ) : (
                <p className="m-0 rounded-[12px] bg-periwinkle-soft/60 px-3.5 py-2.5 text-[14px] leading-snug text-ink">{r.a}</p>
              )}
              {r.status === "todo" && fixing?.id !== r.id && (
                <span className="flex gap-2">
                  <Button icon="check" onClick={() => setReview((all) => all.map((x) => (x.id === r.id ? { ...x, status: "ok" } : x)))}>
                    Right
                  </Button>
                  <Button variant="ghost" icon="pencil" onClick={() => setFixing({ id: r.id, text: r.a })}>
                    Fix the answer
                  </Button>
                </span>
              )}
            </li>
          ))}
        {show === "todo" && reviewed === review.length && <li className="px-5 py-8 text-center text-[14px] text-subtle">All 50 replies checked. Ready to go live.</li>}
      </ul>
    </Panel>
  );
}

export function Test({ agent, s, state, update, onOpen }: { agent: Agent; s: AgentState; state: OnboardingState; update: Update; onOpen: (view: string) => void }) {
  const left =
    agent.id === "chat" ? (
      <TestChat state={state} suggestions={testSuggestions(state)} />
    ) : agent.id === "voice" || agent.id === "outbound" ? (
      <CallTest agent={agent} />
    ) : agent.id === "report" ? (
      <ReportPreview cfg={s.draft} />
    ) : agent.id === "owner" ? (
      <OwnerSimulator />
    ) : (
      <MessagePreview agent={agent} cfg={s.draft} />
    );
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="min-w-0">{left}</div>
        <TestSet agent={agent} s={s} />
      </div>
      {agent.id === "chat" && <SetupReview update={update} onOpen={onOpen} />}
    </div>
  );
}
