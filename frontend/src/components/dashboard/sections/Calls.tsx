"use client";

import { useEffect, useMemo, useState } from "react";
import { sampleCalls, sampleTeam, type Call, type CallOutcome } from "@/content/dashboard";
import { sampleContacts } from "@/content/contacts";
import { sampleForwardingNumber } from "@/content/onboarding";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Select, inputClass } from "@/components/setup/fields";
import { Avatar, Badge, Button, Drawer, EmptyState, SegmentedControl, Tabs, Toggle, useToast, type BadgeTone } from "../kit";
import { PageTitle, SampleTag, SaveBar, SettingsSection } from "../ui";

// Calls the AI answered, as a call log in the style of Aircall and Dialpad:
// a summary strip, a filterable table, and a details drawer with the
// recording, AI summary and transcript. "Numbers & routing" holds the phone
// numbers and the rules for when the AI picks up and who it transfers to.
// Demo: playback is simulated and settings are kept in this component only.

const outcomes: CallOutcome[] = ["Booked", "Callback", "Transferred", "Info"];
const outcomeTone: Record<CallOutcome, BadgeTone> = { Booked: "success", Callback: "warning", Transferred: "brand", Info: "neutral" };
const outcomeLabel: Record<CallOutcome, string> = { Booked: "Booked", Callback: "Call back", Transferred: "Transferred", Info: "Answered" };
const outcomeIcon: Record<CallOutcome, IconName> = { Booked: "calendar", Callback: "phone", Transferred: "users", Info: "message" };

const seconds = (d: string) => {
  const [m, s] = d.split(":").map(Number);
  return m * 60 + (s || 0);
};
const clock = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
const nameFor = (c: Call) => sampleContacts.find((x) => x.phone === c.caller)?.name ?? null;

/** A recording player: play/pause, a waveform you can click to seek, and speed. */
function Player({ id, duration }: { id: string; duration: number }) {
  const [playing, setPlaying] = useState(false);
  const [at, setAt] = useState(0);
  const [speed, setSpeed] = useState<"1" | "1.5" | "2">("1");
  const bars = Array.from({ length: 48 }, (_, i) => 5 + ((id.charCodeAt(i % id.length) * (i + 7) * 13) % 22));

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setAt((t) => {
        const next = t + 0.25 * Number(speed);
        if (next >= duration) {
          setPlaying(false);
          return duration;
        }
        return next;
      });
    }, 250);
    return () => window.clearInterval(timer);
  }, [playing, speed, duration]);

  const progress = at / duration;
  return (
    <div className="flex flex-col gap-3 rounded-[16px] bg-[#F7F7FA] p-3.5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={playing ? "Pause recording" : "Play recording"}
          onClick={() => {
            if (at >= duration) setAt(0);
            setPlaying((p) => !p);
          }}
          className="flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white"
        >
          {playing ? (
            <span aria-hidden="true" className="flex gap-[3px]">
              <span className="h-3.5 w-[3px] rounded-sm bg-white" />
              <span className="h-3.5 w-[3px] rounded-sm bg-white" />
            </span>
          ) : (
            <Icon name="play" size={15} />
          )}
        </button>
        <button
          type="button"
          aria-label="Seek in recording"
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setAt(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * duration);
          }}
          className="flex h-9 min-w-0 flex-1 cursor-pointer items-center gap-px overflow-hidden sm:gap-[2px]"
        >
          {bars.map((h, i) => (
            <span key={i} aria-hidden="true" className={`min-w-0 flex-1 rounded-full ${i / bars.length < progress ? "bg-ink" : "bg-line-strong"}`} style={{ height: h }} />
          ))}
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-semibold text-ink-soft tabular-nums">
          {clock(at)} / {clock(duration)}
        </span>
        <SegmentedControl
          label="Playback speed"
          size="sm"
          value={speed}
          onChange={setSpeed}
          options={[
            { id: "1", label: "1×" },
            { id: "1.5", label: "1.5×" },
            { id: "2", label: "2×" },
          ]}
        />
      </div>
    </div>
  );
}

function CallDetails({ call, onOpen }: { call: Call; onOpen: (view: string) => void }) {
  const toast = useToast();
  const name = nameFor(call);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3.5">
        <Avatar name={name ?? call.caller} size={48} />
        <div className="flex min-w-0 flex-col gap-1">
          <p className="m-0 truncate text-[18px] font-semibold text-ink">{name ?? call.caller}</p>
          <p className="m-0 text-[13.5px] text-subtle">
            {name && `${call.caller} · `}
            {call.time} · {call.duration}
          </p>
        </div>
        <span className="ml-auto">
          <Badge tone={outcomeTone[call.outcome]}>{outcomeLabel[call.outcome]}</Badge>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="primary" icon="phone" onClick={() => toast("Calling from your phone… (demo)", "info")}>
          Call back
        </Button>
        <Button icon="message" onClick={() => onOpen("inbox")}>
          WhatsApp
        </Button>
      </div>

      {call.outcome === "Callback" && (
        <p className="m-0 flex items-start gap-2.5 rounded-[14px] border border-[#FBDDBF] bg-[#FFF8F0] p-3.5 text-[14px] text-ink">
          <Icon name="clock" size={16} className="mt-0.5 flex-none text-warning" />
          <span>
            <span className="font-semibold">Waiting for your call back.</span> The caller asked for a person; nobody has called yet.
          </span>
        </p>
      )}

      <section className="flex flex-col gap-2">
        <h3 className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">Recording</h3>
        <Player key={call.id} id={call.id} duration={seconds(call.duration)} />
        <p className="m-0 text-[12.5px] text-subtle">Recorded only because the caller stayed on after the recording notice.</p>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="m-0 flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">
          <Icon name="sparkle" size={13} />
          AI summary
        </h3>
        <p className="m-0 rounded-[14px] bg-periwinkle-soft/60 p-3.5 text-[14.5px] leading-snug text-ink">{call.summary}</p>
      </section>

      <section className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h3 className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">Transcript</h3>
          <button type="button" onClick={() => toast("Transcript downloaded (demo)")} className="inline-flex cursor-pointer items-center gap-1 text-[13px] font-semibold text-ink-soft hover:text-ink">
            <Icon name="download" size={14} />
            Download
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          {call.transcript.map((line, i) => (
            <div key={i} className={`flex max-w-[88%] flex-col gap-0.5 ${line.from === "ai" ? "self-end items-end" : "self-start"}`}>
              <span className="px-1 text-[11.5px] font-semibold text-subtle">{line.from === "ai" ? "AI assistant" : "Caller"}</span>
              <span className={`rounded-[14px] px-3.5 py-2 text-[14px] leading-snug ${line.from === "ai" ? "rounded-tr-[4px] bg-periwinkle-soft text-ink" : "rounded-tl-[4px] border border-line bg-white text-ink"}`}>{line.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CallLog({ onOpen }: { onOpen: (view: string) => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<"all" | CallOutcome>("all");
  const [query, setQuery] = useState("");
  const call = sampleCalls.find((c) => c.id === openId) ?? null;

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sampleCalls.filter((c) => (outcome === "all" || c.outcome === outcome) && (!q || `${c.caller} ${nameFor(c) ?? ""} ${c.summary}`.toLowerCase().includes(q)));
  }, [outcome, query]);

  const booked = sampleCalls.filter((c) => c.outcome === "Booked").length;
  const callbacks = sampleCalls.filter((c) => c.outcome === "Callback").length;
  const avg = Math.round(sampleCalls.reduce((n, c) => n + seconds(c.duration), 0) / sampleCalls.length);
  const stats = [
    { label: "Calls answered", value: String(sampleCalls.length), note: "Last 7 days" },
    { label: "Booked on the call", value: `${Math.round((booked / sampleCalls.length) * 100)}%`, note: `${booked} bookings` },
    { label: "Waiting for a call back", value: String(callbacks), note: callbacks ? "Call them today" : "All done", warn: callbacks > 0 },
    { label: "Average call", value: clock(avg), note: "Minutes" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 overflow-hidden rounded-[18px] border border-line bg-white lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`flex flex-col gap-1 p-4 sm:p-5 ${i % 2 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <span className="text-[13px] font-medium text-subtle">{s.label}</span>
            <span className="text-[26px] leading-tight font-bold tracking-[-0.02em] text-ink">{s.value}</span>
            <span className={`text-[12.5px] ${s.warn ? "font-semibold text-warning" : "text-subtle"}`}>{s.note}</span>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-[18px] border border-line bg-white">
        <div className="flex flex-col gap-3 border-b border-line p-3 lg:flex-row lg:items-center">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search calls</span>
            <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search number, name or summary"
              className="min-h-10 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-9 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
            />
          </label>
          <div className="-mx-3 overflow-x-auto px-3">
            <SegmentedControl
              label="Filter by outcome"
              size="sm"
              value={outcome}
              onChange={setOutcome}
              options={[{ id: "all", label: `All ${sampleCalls.length}` }, ...outcomes.map((o) => ({ id: o, label: `${outcomeLabel[o]} ${sampleCalls.filter((c) => c.outcome === o).length}` }))]}
            />
          </div>
        </div>

        {list.length === 0 ? (
          <EmptyState icon="phone" title="No calls match" body="Try another filter or search." />
        ) : (
          <>
            <table className="hidden w-full border-collapse md:table">
              <thead className="bg-[#FAFAFC] text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    Caller
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Outcome
                  </th>
                  <th scope="col" className="hidden px-3 py-3 lg:table-cell">
                    What happened
                  </th>
                  <th scope="col" className="px-3 py-3 text-right">
                    Length
                  </th>
                  <th scope="col" className="px-3 py-3">
                    When
                  </th>
                  <th scope="col" className="w-10 pr-4">
                    <span className="sr-only">Open</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.map((c) => {
                  const name = nameFor(c);
                  return (
                    <tr key={c.id} onClick={() => setOpenId(c.id)} className="cursor-pointer border-t border-line transition hover:bg-[#FAFAFC]">
                      <td className="py-3 pl-4">
                        <button type="button" onClick={() => setOpenId(c.id)} className="flex cursor-pointer items-center gap-3 text-left">
                          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-brand">
                            <Icon name="phone" size={16} />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-[14.5px] font-semibold whitespace-nowrap text-ink">{name ?? c.caller}</span>
                            <span className="text-[12.5px] whitespace-nowrap text-subtle">{name ? c.caller : "Incoming call"}</span>
                          </span>
                        </button>
                      </td>
                      <td className="px-3 py-3">
                        <span className="inline-flex items-center gap-1.5">
                          <Badge tone={outcomeTone[c.outcome]}>
                            <Icon name={outcomeIcon[c.outcome]} size={12} />
                            {outcomeLabel[c.outcome]}
                          </Badge>
                        </span>
                      </td>
                      <td className="hidden max-w-0 px-3 py-3 lg:table-cell">
                        <span className="block truncate text-[14px] text-ink-soft">{c.summary}</span>
                      </td>
                      <td className="px-3 py-3 text-right text-[14px] text-ink-soft tabular-nums">{c.duration}</td>
                      <td className="px-3 py-3 text-[13.5px] whitespace-nowrap text-subtle">{c.time}</td>
                      <td className="pr-4 text-right">
                        <Icon name="chevron-right" size={18} className="text-faint" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <ul className="m-0 list-none p-0 md:hidden">
              {list.map((c) => {
                const name = nameFor(c);
                return (
                  <li key={c.id} className="border-t border-line first:border-t-0">
                    <button type="button" onClick={() => setOpenId(c.id)} className="flex w-full cursor-pointer items-start gap-3 p-4 text-left">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-brand">
                        <Icon name="phone" size={17} />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="truncate text-[15px] font-semibold text-ink">{name ?? c.caller}</span>
                          <Badge tone={outcomeTone[c.outcome]}>{outcomeLabel[c.outcome]}</Badge>
                        </span>
                        <span className="line-clamp-2 text-[13.5px] text-ink-soft">{c.summary}</span>
                        <span className="text-[12.5px] text-subtle">
                          {name && `${c.caller} · `}
                          {c.time} · {c.duration}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>

      <Drawer open={call !== null} onClose={() => setOpenId(null)} title="Call details">
        {call && <CallDetails call={call} onOpen={onOpen} />}
      </Drawer>
    </div>
  );
}

const forwardCodes = [
  { when: "When you’re busy", code: "**67*", note: "Your line is engaged" },
  { when: "When you don’t answer", code: "**61*", note: "After about 20 seconds" },
  { when: "When your phone is off", code: "**62*", note: "Switched off or no signal" },
];

function Routing() {
  const toast = useToast();
  const [answer, setAnswer] = useState<"missed" | "always" | "after">("missed");
  const [transfer, setTransfer] = useState<Record<string, boolean>>({ You: true, "R. Kumar": true, "S. Das": false });
  const [dirty, setDirty] = useState(false);
  const target = sampleForwardingNumber.replace(/\s/g, "");
  const touch = () => setDirty(true);

  return (
    <div className="flex flex-col">
      <div className="rounded-[20px] border border-line bg-white p-5 sm:p-7" onChange={touch}>
        <SettingsSection title="Phone numbers" description="Your AI number answers forwarded calls. Your customers keep calling the number they already know.">
          <ul className="m-0 flex list-none flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line p-0">
            <li className="flex flex-wrap items-center gap-3 p-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink text-accent">
                <Icon name="sparkle" size={18} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[15px] font-semibold text-ink tabular-nums">{sampleForwardingNumber}</span>
                <span className="text-[13px] text-subtle">AI number · Business KYC verified</span>
              </span>
              <Badge tone="success" dot>
                Active
              </Badge>
            </li>
            <li className="flex flex-wrap items-center gap-3 p-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-panel text-muted">
                <Icon name="phone" size={18} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[15px] font-semibold text-ink">Your business number</span>
                <span className="text-[13px] text-subtle">Forwards to the AI number</span>
              </span>
              <Badge tone="warning" dot>
                Not tested yet
              </Badge>
            </li>
          </ul>
          <span>
            <Button icon="plus" onClick={() => toast("Number request sent (demo)")}>
              Get another number
            </Button>
          </span>
        </SettingsSection>

        <SettingsSection title="Forward your calls" description="Dial these codes on the phone with your business SIM. Most networks support them; your operator may charge for forwarded calls.">
          <ul className="m-0 flex list-none flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line p-0">
            {forwardCodes.map((f) => {
              const code = `${f.code}${target}#`;
              return (
                <li key={f.code} className="flex items-center gap-3 px-4 py-3">
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[14.5px] font-semibold text-ink">{f.when}</span>
                    <code className="font-mono text-[13px] break-all text-ink-soft">{code}</code>
                  </span>
                  <Button
                    icon="copy"
                    ariaLabel={`Copy code for ${f.when.toLowerCase()}`}
                    onClick={() => {
                      navigator.clipboard?.writeText(code).catch(() => undefined);
                      toast("Code copied");
                    }}
                  >
                    Copy
                  </Button>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" icon="phone" onClick={() => toast("Test call placed. Answer it to hear your AI (demo)", "info")}>
              Place a test call
            </Button>
            <span className="text-[13px] text-subtle">We call your business number and check it reaches the AI.</span>
          </div>
        </SettingsSection>

        <SettingsSection title="When the AI answers" description="Pick when calls go to the AI. You can change this any time.">
          <div className="flex flex-col gap-2" role="radiogroup" aria-label="When the AI answers">
            {(
              [
                ["missed", "When you’re busy or don’t answer", "Recommended. You still take the calls you can."],
                ["after", "Only outside business hours", "During hours your phone rings as usual."],
                ["always", "Every call", "The AI answers first and transfers when asked."],
              ] as const
            ).map(([id, title, body]) => (
              <label key={id} className={`flex cursor-pointer items-start gap-3 rounded-[14px] border p-3.5 transition ${answer === id ? "border-ink bg-[#FAFAFC]" : "border-line hover:border-line-strong"}`}>
                <input type="radio" name="answer" checked={answer === id} onChange={() => setAnswer(id)} className="mt-1 accent-[#23243A]" />
                <span className="flex flex-col">
                  <span className="text-[14.5px] font-semibold text-ink">{title}</span>
                  <span className="text-[13px] text-subtle">{body}</span>
                </span>
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-[14.5px] font-semibold text-ink">After hours, the AI should</span>
            <Select defaultValue="book">
              <option value="book">Answer questions and book visits</option>
              <option value="message">Take a message for a call back</option>
              <option value="whatsapp">Send a WhatsApp with the booking link</option>
            </Select>
          </label>
        </SettingsSection>

        <SettingsSection title="Transfers to your team" description="When a caller asks for a person, the AI tries these people in order during business hours. If nobody answers, it takes a message.">
          <ol className="m-0 flex list-none flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line p-0">
            {sampleTeam.map((m, i) => (
              <li key={m.name} className="flex items-center gap-3 px-4 py-3">
                <span className="w-4 text-center text-[13px] font-bold text-muted">{i + 1}</span>
                <Avatar name={m.name} size={32} />
                <span className="min-w-0 flex-1">
                  <Toggle
                    checked={transfer[m.name]}
                    onChange={(v) => {
                      setTransfer((t) => ({ ...t, [m.name]: v }));
                      touch();
                    }}
                    label={m.name === "You" ? "You (owner)" : m.name}
                    description={`${m.role} · ${m.name === "You" ? "+91 98•• ••• 001" : m.contact}`}
                  />
                </span>
              </li>
            ))}
          </ol>
        </SettingsSection>

        <SettingsSection title="What callers hear" description="The AI always says it’s an AI. Recording needs the caller’s consent.">
          <Toggle checked onChange={() => undefined} disabled label="Say it’s an AI assistant at the start of every call" description="Always on." />
          <label className="flex flex-col gap-2">
            <span className="text-[14.5px] font-semibold text-ink">Recording notice</span>
            <textarea rows={2} defaultValue="This call may be recorded so we can serve you better." className={`${inputClass} py-3`} />
            <span className="text-[13px] text-subtle">Played before recording starts. Calls are recorded only if the caller stays on the line.</span>
          </label>
          <Toggle checked onChange={touch} label="Send a WhatsApp after every missed call" description="With your booking link, within seconds." />
          <p className="m-0 flex gap-2 rounded-[12px] bg-panel p-3 text-[13px] text-ink-soft">
            <Icon name="shield" size={15} className="mt-0.5 flex-none text-muted" />
            In India, outbound calling needs DLT registration: 160-series numbers for service calls and 140-series for promotional calls. Vegam handles this before the outbound caller is turned on.
          </p>
        </SettingsSection>
      </div>

      {dirty && (
        <SaveBar
          onDiscard={() => setDirty(false)}
          onSave={() => {
            setDirty(false);
            toast("Call settings saved");
          }}
        />
      )}
    </div>
  );
}

export function Calls({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [tab, setTab] = useState<"log" | "routing">("log");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Calls" body="Every call your AI receptionist answered: what happened, the recording and what to do next." />
        <div className="flex items-center gap-3">
          <SampleTag />
          <Button icon="phone" onClick={() => toast("Test call placed. Answer it to hear your AI (demo)", "info")}>
            Test call
          </Button>
        </div>
      </div>
      <Tabs
        label="Calls sections"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "log", label: "Call log", count: sampleCalls.length },
          { id: "routing", label: "Numbers & routing" },
        ]}
      />
      {tab === "log" ? <CallLog onOpen={onOpen} /> : <Routing />}
    </div>
  );
}
