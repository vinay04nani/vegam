"use client";

import { sampleBaseline } from "@/content/dashboard";
import { handoverReasons, topQuestions } from "@/content/reports";
import { Badge } from "../../kit";
import { BarList, LineChart, slots } from "./charts";
import { change, type Model } from "./model";
import { KpiRow, Panel, pct } from "./parts";

// AI performance: how much the assistant resolves alone, why it hands over,
// what customers ask most, and the before/after of the pilot.

export function AiPerformance({ m, compare, onOpen }: { m: Model; compare: boolean; onOpen: (view: string) => void }) {
  const { cur, prev } = m;
  const resolved = m.buckets.map((_, i) => Math.round((70 + (i / Math.max(1, m.buckets.length - 1)) * 8 + Math.sin(i * 1.9) * 1.2) * 10) / 10);
  const unanswered = topQuestions.filter((q) => !q.answered);

  return (
    <>
      <KpiRow
        compare={compare}
        items={[
          { id: "res", label: "Resolved by the AI", value: "78%", delta: 0.06, trend: resolved, hint: "no person needed" },
          { id: "hand", label: "Handed to your team", value: String(Math.round(cur.enquiries * 0.22)), delta: change(cur.enquiries * 0.22, prev.enquiries * 0.24), better: "down", trend: resolved.map((r) => 100 - r) },
          { id: "booked", label: "Booked by the AI", value: String(Math.round(cur.bookings * 0.84)), delta: change(cur.bookings, prev.bookings), trend: m.buckets.map((b) => b.bookings), hint: "without staff help" },
          { id: "unknown", label: "Questions it didn’t know", value: String(unanswered.length), delta: -0.33, better: "down", trend: [9, 8, 7, 6, 6, 5, 4], hint: "answer them in AI agents" },
        ]}
      />

      <Panel
        title="Resolved by the AI"
        description="Share of conversations closed without a person. It rises as you answer new questions."
        table={{ columns: ["Period", "Resolved by the AI"], rows: m.buckets.map((b, i) => [b.tip, `${resolved[i]}%`]) }}
      >
        <LineChart
          label="Share of conversations resolved by the AI"
          labels={m.buckets.map((b) => b.label)}
          tipLabels={m.buckets.map((b) => b.tip)}
          height={220}
          format={(v) => `${v}%`}
          axisFormat={(v) => `${v}%`}
          data={[{ id: "res", label: "Resolved by the AI", color: slots[0], values: resolved }]}
        />
      </Panel>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-2">
        <Panel title="Why chats were handed over" description="Share of handovers" table={{ columns: ["Reason", "Share"], rows: handoverReasons.map((r) => [r.reason, pct(r.share)]) }}>
          <BarList rows={handoverReasons.map((r) => ({ label: r.reason, value: Math.round(r.share * 100) }))} format={(v) => `${v}%`} note={(r) => `${r.label}: ${r.value}% of handovers`} />
        </Panel>
        <Panel title="Most asked questions" action={<span className="text-[12.5px] text-subtle">Times asked</span>}>
          <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
            {topQuestions.map((q) => (
              <li key={q.q} className="flex items-center gap-3 py-2.5 text-[14px]">
                <span className="min-w-0 flex-1 truncate text-ink">{q.q}</span>
                {q.answered ? (
                  <Badge tone="success">Answered</Badge>
                ) : (
                  <button type="button" onClick={() => onOpen("agents")} className="cursor-pointer rounded-full">
                    <Badge tone="warning">Answer it</Badge>
                  </button>
                )}
                <span className="w-10 text-right font-semibold text-ink tabular-nums">{Math.round(q.count * (m.range / 30) * m.scope)}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Before and after Vegam" description="Week 1 of your pilot measured how things were. “Now” is the last 7 days.">
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
          {sampleBaseline.map((b) => {
            const max = Math.max(b.beforeValue, b.afterValue, 0.01);
            return (
              <div key={b.label} className="flex flex-col gap-2">
                <span className="flex items-center justify-between gap-2 text-[14px] font-medium text-ink">
                  {b.label}
                  <span className="text-[12px] font-normal text-subtle">{b.better === "lower" ? "Lower is better" : "Higher is better"}</span>
                </span>
                {(
                  [
                    ["Week 1", b.beforeValue, b.before, "#C9CBD6"],
                    ["Now", b.afterValue, b.after, slots[0]],
                  ] as const
                ).map(([label, v, text, color]) => (
                  <div key={label} className="grid grid-cols-[52px_minmax(0,1fr)_80px] items-center gap-2 text-[13px]">
                    <span className="text-subtle">{label}</span>
                    <span className="h-3">
                      <span className="block h-full rounded-r-[4px]" style={{ width: `${Math.max(1.5, (v / max) * 100)}%`, background: color }} />
                    </span>
                    <span className={`text-right tabular-nums ${label === "Now" ? "font-semibold text-ink" : "text-subtle"}`}>{text}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Panel>
    </>
  );
}
