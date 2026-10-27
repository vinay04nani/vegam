"use client";

import { useState } from "react";
import { sampleCalls, type CallOutcome } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Card, PageTitle, SampleTag } from "../ui";

// Every call the AI answered: who, how long, what happened, and a short
// summary. Opening a call shows the transcript.

const outcomeStyle: Record<CallOutcome, string> = {
  Booked: "bg-[#E8F3EA] text-success",
  Callback: "bg-[#FFF3E6] text-warning",
  Transferred: "bg-periwinkle-soft text-brand",
  Info: "bg-panel text-muted",
};

export function Calls() {
  const [openId, setOpenId] = useState(sampleCalls[0].id);
  const call = sampleCalls.find((c) => c.id === openId) ?? sampleCalls[0];
  const counts = (["Booked", "Callback", "Transferred", "Info"] as CallOutcome[]).map((o) => ({ o, n: sampleCalls.filter((c) => c.outcome === o).length }));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Calls" body="Calls your AI assistant answered. It says it’s an AI at the start of every call and transfers to you when asked." />
        <SampleTag />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {counts.map(({ o, n }) => (
          <div key={o} className="flex flex-col gap-1 rounded-[18px] border border-line bg-white p-4">
            <span className="text-[26px] leading-none font-bold text-ink">{n}</span>
            <span className={`w-fit rounded-full px-2 py-0.5 text-[12.5px] font-semibold ${outcomeStyle[o]}`}>{o}</span>
          </div>
        ))}
      </div>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card title="Recent calls">
          <ul className="m-0 flex list-none flex-col p-0">
            {sampleCalls.map((c) => {
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
                        <span className={`rounded-full px-2 py-0.5 text-[12px] font-semibold ${outcomeStyle[c.outcome]}`}>{c.outcome}</span>
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
            <span className={`rounded-full px-2 py-0.5 text-[12px] font-semibold ${outcomeStyle[call.outcome]}`}>{call.outcome}</span>
          </div>
          <div className="rounded-[16px] bg-panel p-4">
            <p className="m-0 text-[13px] font-semibold tracking-[0.1em] text-muted uppercase">AI summary</p>
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
          <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
            <button type="button" className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-full border border-line-strong bg-white px-4 text-[14px] font-semibold text-ink hover:border-subtle">
              <Icon name="play" size={14} />
              Play recording
            </button>
            <span className="text-[13px] text-subtle">Recorded only when the caller agreed.</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
