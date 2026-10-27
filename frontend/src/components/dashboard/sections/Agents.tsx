"use client";

import { useState } from "react";
import { agents, sampleAgentActivity, sampleUnanswered, sampleVoices, type Agent, type AgentId } from "@/content/agents";
import { languageNames, toneOptions } from "@/content/onboarding";
import { plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { AssistantSetup } from "@/components/setup/AssistantSetup";
import { Field, Select, TextInput, inputClass } from "@/components/setup/fields";
import { TestChat, testSuggestions } from "@/components/setup/TestChat";
import type { OnboardingState } from "@/lib/onboarding";
import { Badge, Button, Drawer, SegmentedControl, Tabs, Toggle, useToast } from "../kit";
import { Card, PageTitle, SampleTag } from "../ui";

// The AI agents: what each does, on/off, settings, the knowledge they answer
// from, questions they couldn't answer, a test playground and an activity log.
// Demo: settings and toggles live in this page only.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; onOpen: (view: string) => void };
type Tab = "agents" | "knowledge" | "unanswered" | "playground" | "activity";

function AgentSettings({ agent, state }: { agent: Agent; state: OnboardingState }) {
  const [tone, setTone] = useState(state.assistant.tone);
  const [langs, setLangs] = useState<string[]>(state.business.languages.length ? state.business.languages : ["English"]);
  const [voice, setVoice] = useState("asha");
  const [rules, setRules] = useState({ asks: true, upset: true, payment: true, unsure: true });
  const toast = useToast();

  switch (agent.id) {
    case "chat":
      return (
        <div className="flex flex-col gap-5">
          <Field label="Name customers see">
            <TextInput defaultValue={state.assistant.name || `${state.business.name || "Your business"} assistant`} />
          </Field>
          <div className="flex flex-col gap-2">
            <span className="text-[15px] font-semibold text-ink">Tone</span>
            <SegmentedControl label="Tone" value={tone} onChange={setTone} options={toneOptions.map((t) => ({ id: t.id, label: t.label }))} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[15px] font-semibold text-ink">Languages</span>
            <div className="flex flex-wrap gap-2">
              {languageNames.map((l) => {
                const on = langs.includes(l);
                return (
                  <button
                    key={l}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setLangs((x) => (on ? x.filter((y) => y !== l) : [...x, l]))}
                    className={`min-h-9 cursor-pointer rounded-full border px-3 text-[13.5px] font-medium ${on ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink"}`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
            <span className="text-[13px] text-subtle">It replies in the customer’s language when it’s one of these.</span>
          </div>
          <div className="flex flex-col gap-3 rounded-[14px] border border-line p-4">
            <span className="text-[15px] font-semibold text-ink">Hand over to your team when…</span>
            <Toggle checked={rules.asks} onChange={(v) => setRules((r) => ({ ...r, asks: v }))} label="The customer asks for a person" />
            <Toggle checked={rules.upset} onChange={(v) => setRules((r) => ({ ...r, upset: v }))} label="The customer seems upset" />
            <Toggle checked={rules.payment} onChange={(v) => setRules((r) => ({ ...r, payment: v }))} label="It’s about a refund or payment problem" />
            <Toggle checked={rules.unsure} onChange={(v) => setRules((r) => ({ ...r, unsure: v }))} label="It doesn’t know the answer" description="Recommended. It never guesses." />
          </div>
        </div>
      );
    case "voice":
      return (
        <div className="flex flex-col gap-5">
          <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
            <legend className="mb-2 p-0 text-[15px] font-semibold text-ink">Voice</legend>
            {sampleVoices.map((v) => (
              <label key={v.id} className="flex cursor-pointer items-center gap-3 rounded-[12px] border border-line px-3 py-2.5 has-[:checked]:border-ink">
                <input type="radio" name="voice" checked={voice === v.id} onChange={() => setVoice(v.id)} className="accent-[#23243A]" />
                <span className="flex flex-1 flex-col">
                  <span className="text-[14.5px] font-medium text-ink">{v.name}</span>
                  <span className="text-[13px] text-subtle">{v.note}</span>
                </span>
                <button type="button" onClick={() => toast(`Demo: ${v.name}’s voice sample isn’t available yet`, "info")} className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-panel text-ink hover:bg-line" aria-label={`Play ${v.name} sample`}>
                  <Icon name="play" size={13} />
                </button>
              </label>
            ))}
          </fieldset>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Answer after">
              <Select defaultValue="4">
                <option value="2">2 rings</option>
                <option value="4">4 rings</option>
                <option value="6">6 rings</option>
                <option value="0">Answer every call</option>
              </Select>
            </Field>
            <Field label="Transfer to">
              <TextInput defaultValue="Front desk · +91 80•• ••• 210" />
            </Field>
          </div>
          <Field label="Greeting">
            <textarea rows={2} defaultValue={`Thanks for calling ${state.business.name || "us"}. I’m the AI assistant. How can I help?`} className={`${inputClass} py-3`} />
          </Field>
          <Toggle checked onChange={() => undefined} disabled label="Say it’s an AI assistant at the start of every call" description="Always on." />
          <Toggle checked onChange={() => undefined} label="Record calls (with the caller’s consent)" description="Callers hear a short notice before recording." />
        </div>
      );
    case "outbound":
      return (
        <div className="flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Call new leads within">
              <Select defaultValue="5">
                <option value="1">1 minute</option>
                <option value="5">5 minutes</option>
                <option value="30">30 minutes</option>
              </Select>
            </Field>
            <Field label="Attempts">
              <Select defaultValue="2">
                <option value="1">1 call</option>
                <option value="2">2 calls</option>
                <option value="3">3 calls</option>
              </Select>
            </Field>
            <Field label="Calling hours from">
              <TextInput type="time" defaultValue="10:00" />
            </Field>
            <Field label="Until">
              <TextInput type="time" defaultValue="19:00" />
            </Field>
          </div>
          <Toggle checked onChange={() => undefined} disabled label="Only call people who enquired and agreed to a call" description="Required. Numbers on Do-Not-Disturb lists are skipped for promotional calls." />
          <p className="m-0 rounded-[12px] bg-[#FFF8F0] px-3.5 py-3 text-[13.5px] text-ink-soft">In India, business calling needs a registered number series (DLT). Set it up in Channels → AI phone number.</p>
        </div>
      );
    case "followup":
      return (
        <div className="flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Follow-ups">
              <Select defaultValue="3">
                <option value="1">1 follow-up</option>
                <option value="2">2 follow-ups</option>
                <option value="3">3 follow-ups</option>
              </Select>
            </Field>
            <Field label="First one after">
              <Select defaultValue="24">
                <option value="4">4 hours</option>
                <option value="24">1 day</option>
                <option value="72">3 days</option>
              </Select>
            </Field>
          </div>
          <Toggle checked onChange={() => undefined} disabled label="Stop when they reply, book or say STOP" description="Always on." />
          <Toggle checked onChange={() => undefined} label="Pause cold leads for 30 days, then check in once" />
        </div>
      );
    case "report":
      return (
        <div className="flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Morning report at">
              <TextInput type="time" defaultValue="08:00" />
            </Field>
            <Field label="Weekly summary on">
              <Select defaultValue="mon">
                <option value="mon">Monday</option>
                <option value="fri">Friday</option>
                <option value="sun">Sunday</option>
              </Select>
            </Field>
          </div>
          <Field label="Send to">
            <TextInput defaultValue={state.ownerPhone || "+91 98765 43210"} />
          </Field>
          <Toggle checked onChange={() => undefined} label="Include what needs you" />
          <Toggle checked onChange={() => undefined} label="Include today’s bookings" />
        </div>
      );
    case "owner":
      return (
        <div className="flex flex-col gap-5">
          <Field label="Numbers allowed to give commands" hint="Only these numbers can ask about bookings or change your calendar.">
            <TextInput defaultValue={`${state.ownerPhone || "+91 98765 43210"}, +91 90•• ••• 120`} />
          </Field>
          <div className="rounded-[14px] bg-panel p-4">
            <p className="m-0 mb-2 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">Try messaging</p>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[14.5px] text-ink">
              {["Bookings today?", "Block Friday afternoon", "Who needs a call back?", "Send me this week’s numbers"].map((c) => (
                <li key={c}>“{c}”</li>
              ))}
            </ul>
          </div>
        </div>
      );
  }
}

export function Agents({ state, update, onOpen }: Props) {
  const toast = useToast();
  const [tab, setTab] = useState<Tab>("agents");
  const [on, setOn] = useState<Record<AgentId, boolean>>(() => Object.fromEntries(agents.map((a) => [a.id, a.defaultOn])) as Record<AgentId, boolean>);
  const [configId, setConfigId] = useState<AgentId | null>(null);
  const [unanswered, setUnanswered] = useState(sampleUnanswered);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const config = agents.find((a) => a.id === configId) ?? null;

  const saveAnswer = (id: string) => {
    const q = unanswered.find((u) => u.id === id);
    const a = answers[id]?.trim();
    if (!q || !a) return;
    update((s) => ({ ...s, assistant: { ...s.assistant, faqs: [...s.assistant.faqs, { q: q.question, a }] } }));
    setUnanswered((u) => u.filter((x) => x.id !== id));
    toast("Saved. Your assistant will use this answer");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="AI agents" body="Your AI team. Each one only uses your information, says it’s an AI, and hands over to a person when it should." />
        <SampleTag />
      </div>

      <Tabs
        label="AI agents"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "agents", label: "Agents" },
          { id: "knowledge", label: "Knowledge" },
          { id: "unanswered", label: "Unanswered", count: unanswered.length },
          { id: "playground", label: "Playground" },
          { id: "activity", label: "Activity" },
        ]}
      />

      {tab === "agents" && (
        <div className="grid gap-4 lg:grid-cols-2">
          {agents.map((a) => {
            const active = on[a.id];
            return (
              <article key={a.id} className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-5">
                <div className="flex items-start gap-3.5">
                  <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-[14px] ${active ? "bg-ink text-accent" : "bg-panel text-muted"}`}>
                    <Icon name={a.icon} size={22} />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="m-0 text-[17px] font-semibold text-ink">{a.name}</h2>
                      {a.minPlan !== "starter" && <Badge tone="brand">{plans.find((p) => p.id === a.minPlan)?.name}</Badge>}
                    </div>
                    <span className="self-start">
                      <Badge tone={active ? "success" : "neutral"} dot>
                        {active ? "Active" : "Off"}
                      </Badge>
                    </span>
                  </div>
                </div>
                <p className="m-0 text-[14.5px] leading-snug text-ink-soft">{a.description}</p>
                <dl className="m-0 grid grid-cols-3 gap-2 rounded-[14px] bg-panel p-3">
                  {a.stats.map((st) => (
                    <div key={st.label} className="min-w-0">
                      <dt className="truncate text-[12px] text-subtle">{st.label}</dt>
                      <dd className="m-0 truncate text-[17px] font-bold text-ink">{active ? st.value : "—"}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
                  <div className="w-24">
                    <Toggle
                      checked={active}
                      onChange={(v) => {
                        setOn((o) => ({ ...o, [a.id]: v }));
                        toast(`${a.name} ${v ? "turned on" : "turned off"}`);
                      }}
                      label={active ? "On" : "Off"}
                    />
                  </div>
                  <Button icon="settings" onClick={() => setConfigId(a.id)} ariaLabel={`Configure ${a.name}`}>
                    Configure
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {tab === "knowledge" && (
        <div className="flex max-w-[780px] flex-col gap-6">
          <p className="m-0 text-[15px] text-subtle">Everything your agents answer from: services, prices, hours and common questions.</p>
          <AssistantSetup state={state} update={update} />
          <div className="flex justify-end border-t border-line pt-5">
            <Button variant="primary" onClick={() => toast("Knowledge saved")}>
              Save knowledge
            </Button>
          </div>
        </div>
      )}

      {tab === "unanswered" && (
        <Card title="Questions your assistant couldn’t answer" extra={<SampleTag />}>
          <p className="m-0 -mt-2 text-[14px] text-subtle">It handed these to your team instead of guessing. Answer once and it will know next time.</p>
          {unanswered.length === 0 && (
            <p className="m-0 flex items-center gap-2 rounded-[12px] bg-[#E8F3EA] px-4 py-3 text-[14.5px] text-success">
              <Icon name="check" size={18} />
              All caught up.
            </p>
          )}
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {unanswered.map((u) => (
              <li key={u.id} className="flex flex-col gap-2.5 rounded-[16px] border border-line p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="m-0 text-[15.5px] font-semibold text-ink">“{u.question}”</p>
                  <span className="text-[12.5px] text-subtle">
                    Asked {u.asked}× · {u.channel} · {u.last}
                  </span>
                </div>
                <label className="sr-only" htmlFor={`ans-${u.id}`}>
                  Answer
                </label>
                <textarea
                  id={`ans-${u.id}`}
                  rows={2}
                  value={answers[u.id] ?? ""}
                  onChange={(e) => setAnswers((x) => ({ ...x, [u.id]: e.target.value }))}
                  placeholder="Write the answer your assistant should give…"
                  className={`${inputClass} py-2.5 text-[14.5px]`}
                />
                <div className="flex gap-2">
                  <Button variant="primary" onClick={() => saveAnswer(u.id)} disabled={!answers[u.id]?.trim()}>
                    Save answer
                  </Button>
                  <Button variant="ghost" onClick={() => setUnanswered((x) => x.filter((y) => y.id !== u.id))}>
                    Ignore
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {tab === "playground" && (
        <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <TestChat state={state} suggestions={testSuggestions(state)} />
          <div className="flex flex-col gap-4">
            <Card title="Test a call">
              <p className="m-0 text-[14.5px] text-subtle">Call your AI phone number from your mobile to hear the voice receptionist. Calls from your own number are marked as tests.</p>
              <div className="rounded-[14px] bg-panel p-4 text-center">
                <p className="m-0 text-[13px] text-subtle">Test number</p>
                <p className="m-0 mt-1 text-[22px] font-bold tracking-[0.02em] text-ink">+91 80 0000 0000</p>
              </div>
              <Button onClick={() => onOpen("channels")} icon="phone">
                Set up the AI phone number
              </Button>
            </Card>
            <Card title="Tips">
              <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5 text-[14px] text-ink-soft">
                <li>Ask something it shouldn’t know. It should hand over, not guess.</li>
                <li>Try another language.</li>
                <li>Ask to book, then change your mind.</li>
              </ul>
            </Card>
          </div>
        </div>
      )}

      {tab === "activity" && (
        <div className="overflow-hidden rounded-[18px] border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <p className="m-0 text-[15px] font-semibold text-ink">Today</p>
            <SampleTag />
          </div>
          <ul className="m-0 list-none p-0">
            {sampleAgentActivity.map((x, i) => (
              <li key={i} className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line px-5 py-3 last:border-b-0">
                <span className="w-[72px] flex-none text-[13px] text-subtle tabular-nums">{x.time}</span>
                <span className="w-[150px] flex-none text-[13.5px] font-semibold text-ink">{x.agent}</span>
                <span className="min-w-0 flex-1 text-[14px] text-ink-soft">{x.action}</span>
                <Badge tone={x.outcome === "Booked" ? "success" : x.outcome === "Handed over" || x.outcome === "Callback" ? "warning" : "neutral"}>{x.outcome}</Badge>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Drawer
        open={!!config}
        onClose={() => setConfigId(null)}
        title={config?.name ?? ""}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfigId(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                toast(`${config?.name} settings saved`);
                setConfigId(null);
              }}
            >
              Save
            </Button>
          </div>
        }
      >
        {config && (
          <div className="flex flex-col gap-5">
            <p className="m-0 text-[14.5px] text-subtle">{config.description}</p>
            <AgentSettings agent={config} state={state} />
          </div>
        )}
      </Drawer>
    </div>
  );
}
