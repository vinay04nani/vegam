"use client";

import { useEffect, useState } from "react";
import { sampleCalls, sampleTeam, type CallOutcome } from "@/content/dashboard";
import { sampleForwardingNumber } from "@/content/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Field, Select, inputClass } from "@/components/setup/fields";
import { Badge, Button, SegmentedControl, Tabs, Toggle, useToast, type BadgeTone } from "../kit";
import { Card, PageTitle, SampleTag } from "../ui";

// Calls the AI answered, with summary, transcript and recording, plus the
// phone numbers and the rules for when the AI picks up and who it transfers to.
// Demo: playback is simulated and settings are kept in this component only.

const outcomeTone: Record<CallOutcome, BadgeTone> = { Booked: "success", Callback: "warning", Transferred: "brand", Info: "neutral" };

const seconds = (d: string) => {
  const [m, s] = d.split(":").map(Number);
  return m * 60 + (s || 0);
};
const clock = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

/** A recording player: play/pause, a waveform you can click to seek, and speed. */
function Player({ id, duration }: { id: string; duration: number }) {
  const [playing, setPlaying] = useState(false);
  const [at, setAt] = useState(0);
  const [speed, setSpeed] = useState<"1" | "1.5" | "2">("1");
  const bars = Array.from({ length: 56 }, (_, i) => 5 + ((id.charCodeAt(i % id.length) * (i + 7) * 13) % 22));

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
    <div className="flex flex-col gap-3 rounded-[16px] border border-line p-3.5">
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
        <span className="flex-none text-[13px] font-semibold text-ink-soft tabular-nums">
          {clock(at)} / {clock(duration)}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
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
        <span className="text-[12.5px] text-subtle">Recorded only when the caller agreed.</span>
      </div>
    </div>
  );
}

function CallLog({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [openId, setOpenId] = useState(sampleCalls[0].id);
  const [outcome, setOutcome] = useState<"all" | CallOutcome>("all");
  const call = sampleCalls.find((c) => c.id === openId) ?? sampleCalls[0];
  const counts = (["Booked", "Callback", "Transferred", "Info"] as CallOutcome[]).map((o) => ({ o, n: sampleCalls.filter((c) => c.outcome === o).length }));
  const list = sampleCalls.filter((c) => outcome === "all" || c.outcome === outcome);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {counts.map(({ o, n }) => (
          <button
            key={o}
            type="button"
            aria-pressed={outcome === o}
            onClick={() => setOutcome(outcome === o ? "all" : o)}
            className={`flex cursor-pointer flex-col items-start gap-1.5 rounded-[18px] border bg-white p-4 text-left transition ${outcome === o ? "border-ink shadow-[0_0_0_1px_#23243A]" : "border-line hover:border-line-strong"}`}
          >
            <span className="text-[26px] leading-none font-bold text-ink">{n}</span>
            <Badge tone={outcomeTone[o]}>{o}</Badge>
          </button>
        ))}
      </div>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card title={outcome === "all" ? "Recent calls" : `${outcome} calls`}>
          <ul className="m-0 flex list-none flex-col p-0">
            {list.map((c) => {
              const active = c.id === call.id;
              return (
                <li key={c.id} className="border-t border-line first:border-t-0">
                  <button
                    type="button"
                    aria-current={active ? "true" : undefined}
                    onClick={() => setOpenId(c.id)}
                    className={`-mx-2 flex w-[calc(100%+16px)] cursor-pointer items-start gap-3 rounded-[14px] px-2 py-3 text-left transition ${active ? "bg-periwinkle-soft/60" : "hover:bg-page"}`}
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-brand">
                      <Icon name="phone" size={18} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[15px] font-semibold text-ink">{c.caller}</span>
                        <Badge tone={outcomeTone[c.outcome]}>{c.outcome}</Badge>
                      </span>
                      <span className="text-[13px] text-subtle">
                        {c.time} · {c.duration}
                      </span>
                      <span className="line-clamp-2 text-[14px] text-ink-soft">{c.summary}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card title={call.caller}>
          <div className="-mt-2 flex flex-wrap items-center gap-2 text-[13.5px] text-subtle">
            <span>{call.time}</span>
            <span>·</span>
            <span>{call.duration}</span>
            <Badge tone={outcomeTone[call.outcome]}>{call.outcome}</Badge>
          </div>
          <Player key={call.id} id={call.id} duration={seconds(call.duration)} />
          <div className="rounded-[16px] bg-panel p-4">
            <p className="m-0 flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.1em] text-muted uppercase">
              <Icon name="sparkle" size={13} />
              AI summary
            </p>
            <p className="m-0 mt-1.5 text-[15px] text-ink">{call.summary}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="m-0 text-[13px] font-semibold tracking-[0.1em] text-muted uppercase">Transcript</p>
            {call.transcript.map((line, i) => (
              <p key={i} className="m-0 flex gap-3 text-[14.5px] leading-snug">
                <span className={`w-16 flex-none font-semibold ${line.from === "ai" ? "text-indigo" : "text-ink"}`}>{line.from === "ai" ? "AI" : "Caller"}</span>
                <span className="text-ink-soft">{line.text}</span>
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-line pt-4">
            <Button variant="primary" icon="phone" onClick={() => toast("Calling from your phone… (demo)", "info")}>
              Call back
            </Button>
            <Button icon="message" onClick={() => onOpen("inbox")}>
              Message on WhatsApp
            </Button>
            <Button variant="ghost" icon="download" onClick={() => toast("Transcript downloaded (demo)")}>
              Transcript
            </Button>
          </div>
        </Card>
      </div>
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
  const target = sampleForwardingNumber.replace(/\s/g, "");

  return (
    <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-5">
        <Card title="Phone numbers" extra={<SampleTag />}>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            <li className="flex items-start gap-3 rounded-[14px] border border-line p-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink text-accent">
                <Icon name="sparkle" size={18} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[15.5px] font-semibold text-ink tabular-nums">{sampleForwardingNumber}</span>
                  <Badge tone="success" dot>
                    Active
                  </Badge>
                </span>
                <span className="text-[13.5px] text-subtle">Your AI number. Calls forwarded here are answered by the voice receptionist.</span>
                <span className="flex items-center gap-1.5 text-[13px] text-ink-soft">
                  <Icon name="shield" size={14} className="text-success" />
                  Business KYC verified
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-[14px] border border-line p-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-panel text-muted">
                <Icon name="phone" size={18} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[15.5px] font-semibold text-ink">Your business number</span>
                  <Badge tone="warning" dot>
                    Forwarding not checked
                  </Badge>
                </span>
                <span className="text-[13.5px] text-subtle">Keep your number. Set up forwarding below, then place a test call.</span>
              </span>
            </li>
          </ul>
          <Button icon="plus" className="self-start" onClick={() => toast("Number request sent (demo)")}>
            Get another number
          </Button>
        </Card>

        <Card title="Forward your calls to the AI">
          <p className="m-0 -mt-2 text-[14.5px] text-ink-soft">Dial these on the phone that has your business SIM. They work on most mobile networks; your operator may charge for forwarded calls.</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {forwardCodes.map((f) => {
              const code = `${f.code}${target}#`;
              return (
                <li key={f.code} className="flex items-center gap-3 rounded-[12px] bg-panel px-3.5 py-2.5">
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[14px] font-semibold text-ink">{f.when}</span>
                    <span className="text-[12.5px] text-subtle">{f.note}</span>
                    <code className="mt-1 font-mono text-[13.5px] font-semibold break-all text-ink">{code}</code>
                  </span>
                  <button
                    type="button"
                    aria-label={`Copy code for ${f.when.toLowerCase()}`}
                    onClick={() => {
                      navigator.clipboard?.writeText(code).catch(() => undefined);
                      toast("Code copied");
                    }}
                    className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-white hover:text-ink"
                  >
                    <Icon name="copy" size={15} />
                  </button>
                </li>
              );
            })}
          </ul>
          <Button icon="phone" className="self-start" onClick={() => toast("Test call placed. Answer it to hear your AI (demo)", "info")}>
            Place a test call
          </Button>
        </Card>
      </div>

      <div className="flex flex-col gap-5">
        <Card title="When the AI answers">
          <div className="flex flex-col gap-2">
            {(
              [
                ["missed", "When you’re busy or don’t answer", "Recommended. You still take the calls you can."],
                ["after", "Only outside business hours", "During hours your phone rings as usual."],
                ["always", "Every call", "The AI answers first and transfers when asked."],
              ] as const
            ).map(([id, title, body]) => (
              <label key={id} className={`flex cursor-pointer items-start gap-3 rounded-[14px] border p-3.5 ${answer === id ? "border-ink" : "border-line"}`}>
                <input type="radio" name="answer" checked={answer === id} onChange={() => setAnswer(id)} className="mt-1 accent-[#23243A]" />
                <span className="flex flex-col">
                  <span className="text-[14.5px] font-semibold text-ink">{title}</span>
                  <span className="text-[13px] text-subtle">{body}</span>
                </span>
              </label>
            ))}
          </div>
          <Field label="After hours">
            <Select defaultValue="book">
              <option value="book">Answer questions and book visits</option>
              <option value="message">Take a message for a callback</option>
              <option value="whatsapp">Send a WhatsApp with the booking link</option>
            </Select>
          </Field>
        </Card>

        <Card title="Transfers to your team">
          <p className="m-0 -mt-2 text-[14px] text-subtle">When a caller asks for a person, the AI tries these people in order during business hours. If nobody picks up, it takes a message.</p>
          <ol className="m-0 flex list-none flex-col gap-2 p-0">
            {sampleTeam.map((m, i) => (
              <li key={m.name} className="flex items-center gap-3 rounded-[12px] border border-line px-3.5 py-2.5">
                <span className="w-5 text-center text-[13px] font-bold text-muted">{i + 1}</span>
                <span className="flex-1">
                  <Toggle checked={transfer[m.name]} onChange={(v) => setTransfer((t) => ({ ...t, [m.name]: v }))} label={m.name === "You" ? "You (owner)" : m.name} description={`${m.role} · ${m.name === "You" ? "+91 98•• ••• 001" : m.contact}`} />
                </span>
              </li>
            ))}
          </ol>
        </Card>

        <Card title="What callers hear">
          <Toggle checked onChange={() => undefined} disabled label="Say it’s an AI assistant at the start of every call" description="Always on." />
          <Field label="Recording notice" hint="Played before recording starts. Calls are recorded only if the caller stays on the line.">
            <textarea rows={2} defaultValue="This call may be recorded so we can serve you better." className={`${inputClass} py-3`} />
          </Field>
          <Toggle checked onChange={() => undefined} label="Send a WhatsApp after every missed call" description="With your booking link, within seconds." />
          <p className="m-0 flex gap-2 rounded-[12px] bg-panel p-3 text-[13px] text-ink-soft">
            <Icon name="shield" size={15} className="mt-0.5 flex-none text-muted" />
            In India, outbound calling needs DLT registration: 160-series numbers for service calls and 140-series for promotional calls. Vegam handles this before the outbound caller is turned on.
          </p>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => toast("Call settings saved")}>
              Save
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function Calls({ onOpen }: { onOpen: (view: string) => void }) {
  const [tab, setTab] = useState<"log" | "routing">("log");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Calls" body="Calls your AI assistant answered. It says it’s an AI at the start of every call and transfers to you when asked." />
        <SampleTag />
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
