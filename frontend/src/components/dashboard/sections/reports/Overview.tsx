"use client";

import { useState, type ReactNode } from "react";
import { busyGrid, channelGroups, hours, topQuestions, weekdayNames } from "@/content/reports";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ColumnChart, Funnel, Legend, LineChart, quiet, slots } from "./charts";
import { change, type Model } from "./model";
import { DataTable, Delta, KpiRow, Panel, ShareBar, pct, rupees, rupeesShort, seconds, type Kpi } from "./parts";

// Overview: five headline numbers that double as the picker for the main
// trend, highlights written from the numbers, the enquiry-to-visit funnel,
// enquiries by channel over time and how each channel performs.

type Metric = "enquiries" | "bookings" | "value" | "conversion" | "reply";

const metrics: Record<Metric, { label: string; format: (v: number) => string; axis?: (v: number) => string; better?: "down" }> = {
  enquiries: { label: "Enquiries", format: (v) => v.toLocaleString("en-IN") },
  bookings: { label: "Bookings", format: (v) => v.toLocaleString("en-IN") },
  value: { label: "Booking value", format: rupees, axis: (v) => (v >= 1e5 ? `₹${v / 1e5}L` : v >= 1e3 ? `₹${v / 1e3}K` : `₹${v}`) },
  conversion: { label: "Conversion rate", format: (v) => `${v.toFixed(1)}%`, axis: (v) => `${v}%` },
  reply: { label: "First reply", format: (v) => seconds(v), axis: (v) => `${v}s`, better: "down" },
};

const valueOf = (m: Metric, b: { enquiries: number; bookings: number; value: number; conversion: number; reply: number }) => (m === "conversion" ? Math.round(b.conversion * 1000) / 10 : b[m]);

export function Overview({ m, compare, onOpen }: { m: Model; compare: boolean; onOpen: (view: string) => void }) {
  const [metric, setMetric] = useState<Metric>("bookings");
  const { cur, prev } = m;
  const spark = (k: Metric) => m.buckets.map((b) => valueOf(k, b));

  const kpis: Kpi[] = [
    { id: "enquiries", label: "Enquiries", value: cur.enquiries.toLocaleString("en-IN"), delta: change(cur.enquiries, prev.enquiries), trend: spark("enquiries"), hint: "all channels" },
    { id: "bookings", label: "Bookings", value: cur.bookings.toLocaleString("en-IN"), delta: change(cur.bookings, prev.bookings), trend: spark("bookings"), hint: "confirmed" },
    { id: "value", label: "Booking value", value: rupeesShort(cur.value), delta: change(cur.value, prev.value), trend: spark("value"), hint: "at your prices" },
    { id: "conversion", label: "Conversion rate", value: pct(cur.conversion, 1), delta: change(cur.conversion, prev.conversion), trend: spark("conversion"), hint: "enquiry to booking" },
    { id: "reply", label: "Average first reply", value: seconds(cur.reply), delta: change(cur.reply, prev.reply), better: "down", trend: spark("reply"), hint: "day and night" },
  ];

  const def = metrics[metric];
  const curVals = m.buckets.map((b) => valueOf(metric, b));
  const prevVals = m.prevBuckets.map((b) => valueOf(metric, b));
  const curTotal = metric === "conversion" ? cur.conversion * 100 : metric === "reply" ? cur.reply : cur[metric];
  const prevTotal = metric === "conversion" ? prev.conversion * 100 : metric === "reply" ? prev.reply : prev[metric];

  // Funnel and channel numbers.
  const replied = Math.round(cur.enquiries * 0.995);
  const engaged = Math.round(cur.enquiries * 0.71);
  const cameIn = Math.round(cur.bookings * 0.93);
  const shown = channelGroups.map((c, j) => ({ ...c, j })).filter((c) => m.channel === "all" || c.id === m.channel);

  // Highlights, written from the numbers.
  const grid = busyGrid(1);
  const dayTotals = grid.map((r) => r.reduce((a, b) => a + b, 0));
  const busiestDay = dayTotals.indexOf(Math.max(...dayTotals));
  const avgDay = dayTotals.reduce((a, b) => a + b, 0) / dayTotals.length;
  const hourTotals = hours.map((_, j) => grid.reduce((a, r) => a + r[j], 0));
  const peak = hours[hourTotals.indexOf(Math.max(...hourTotals))];
  const rates = channelGroups.map((c, j) => ({ label: c.label, rate: cur.bookCh[j] / Math.max(1, cur.enqCh[j]) }));
  const best = [...rates].sort((a, b) => b.rate - a.rate)[0];
  const unanswered = topQuestions.filter((q) => !q.answered).length;
  const dBook = change(cur.bookings, prev.bookings);
  const highlights: { icon: IconName; tone: string; body: ReactNode; action?: { label: string; view: string } }[] = [
    {
      icon: "chart",
      tone: dBook >= 0 ? "bg-[#E8F3EA] text-success" : "bg-[#FDECEC] text-danger",
      body: (
        <>
          Bookings are <strong className="font-semibold text-ink">{dBook >= 0 ? "up" : "down"} {pct(Math.abs(dBook))}</strong> on the previous period, and {pct(cur.conversion)} of enquiries became a booking.
        </>
      ),
    },
    {
      icon: "message",
      tone: "bg-[#EAF2FC] text-[#1d5fae]",
      body: (
        <>
          <strong className="font-semibold text-ink">{best.label}</strong> converts best: {pct(best.rate)} of its enquiries became bookings.
        </>
      ),
    },
    {
      icon: "clock",
      tone: "bg-[#FFF3E8] text-[#B4500A]",
      body: (
        <>
          <strong className="font-semibold text-ink">{weekdayNames[busiestDay]}s</strong> are busiest ({pct(dayTotals[busiestDay] / avgDay - 1)} above an average day), peaking around {peak > 12 ? `${peak - 12} PM` : `${peak} AM`}.
        </>
      ),
    },
    {
      icon: "sun",
      tone: "bg-[#F1EEFB] text-[#5B4BC4]",
      body: (
        <>
          <strong className="font-semibold text-ink">{Math.round(cur.enquiries * 0.31).toLocaleString("en-IN")}</strong> enquiries came after closing time. The AI answered every one.
        </>
      ),
    },
    {
      icon: "sparkle",
      tone: "bg-[#FDF3DC] text-[#8A5A00]",
      body: (
        <>
          <strong className="font-semibold text-ink">{unanswered} questions</strong> the AI couldn’t answer this period.
        </>
      ),
      action: { label: "Answer them", view: "agents" },
    },
  ];

  return (
    <>
      <KpiRow items={kpis} selected={metric} onSelect={(id) => setMetric(id as Metric)} compare={compare} />

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Panel
          title={def.label}
          description={
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-[22px] font-semibold tracking-[-0.01em] text-ink">{def.format(curTotal)}</span>
              {compare && <Delta value={change(curTotal, prevTotal)} better={def.better} />}
              <span>
                {m.grain.toLowerCase()} · {metric === "conversion" || metric === "reply" ? "average" : "total"} for the period
              </span>
            </span>
          }
          action={
            compare ? (
              <Legend
                items={[
                  { label: "This period", color: slots[0], line: true },
                  { label: "Previous period", color: quiet, line: true },
                ]}
              />
            ) : undefined
          }
          table={{
            columns: [m.grain === "Daily" ? "Day" : m.grain === "Weekly" ? "Week" : "Month", "This period", ...(compare ? ["Previous period"] : [])],
            rows: m.buckets.map((b, i) => [b.tip, def.format(curVals[i]), ...(compare ? [def.format(prevVals[i])] : [])]),
          }}
        >
          <LineChart
            label={`${def.label}, ${m.grain.toLowerCase()}, ${m.period}`}
            labels={m.buckets.map((b) => b.label)}
            tipLabels={m.buckets.map((b) => b.tip)}
            format={def.format}
            axisFormat={def.axis}
            data={[
              { id: "cur", label: "This period", color: slots[0], values: curVals },
              ...(compare ? [{ id: "prev", label: "Previous period", color: quiet, values: prevVals, muted: true }] : []),
            ]}
          />
        </Panel>

        <Panel title="Highlights" description="What stands out in this period">
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-[9px] ${h.tone}`}>
                  <Icon name={h.icon} size={16} />
                </span>
                <span className="min-w-0 text-[13.5px] leading-[1.45] text-ink-soft">
                  {h.body}
                  {h.action && (
                    <button type="button" onClick={() => onOpen(h.action!.view)} className="ml-1 cursor-pointer font-semibold text-ink underline decoration-line-strong underline-offset-2 hover:decoration-ink">
                      {h.action.label}
                    </button>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
        <Panel
          title="From enquiry to visit"
          description="How many people reach each step"
          table={{
            columns: ["Step", "People", "Of enquiries"],
            rows: [
              ["Enquired", cur.enquiries, "100%"],
              ["Got a reply within a minute", replied, pct(replied / cur.enquiries)],
              ["Asked about a time or price", engaged, pct(engaged / cur.enquiries)],
              ["Booked", cur.bookings, pct(cur.bookings / cur.enquiries)],
              ["Came in", cameIn, pct(cameIn / cur.enquiries)],
            ],
          }}
        >
          <Funnel
            steps={[
              { label: "Enquired", value: cur.enquiries },
              { label: "Got a reply", hint: "within a minute", value: replied },
              { label: "Asked about a time or price", value: engaged },
              { label: "Booked", value: cur.bookings },
              { label: "Came in", value: cameIn },
            ]}
          />
        </Panel>

        <Panel
          title="Enquiries by channel"
          description={`${m.grain} totals`}
          action={<Legend items={shown.map((c) => ({ label: c.label, color: slots[c.j] }))} />}
          table={{
            columns: [m.grain === "Daily" ? "Day" : m.grain === "Weekly" ? "Week" : "Month", ...shown.map((c) => c.label)],
            rows: m.buckets.map((b) => [b.tip, ...shown.map((c) => b.enqCh[c.j])]),
          }}
        >
          <ColumnChart
            label={`Enquiries by channel, ${m.grain.toLowerCase()}`}
            labels={m.buckets.map((b) => b.label)}
            tipLabels={m.buckets.map((b) => b.tip)}
            data={shown.map((c) => ({ id: c.id, label: c.label, color: slots[c.j], values: m.buckets.map((b) => b.enqCh[c.j]) }))}
            height={290}
          />
        </Panel>
      </div>

      <Panel title="Channel performance" description="Where enquiries come from and how well each channel books. Click a column to sort.">
        <DataTable
          label="Channel performance"
          initialSort={{ id: "enquiries", desc: true }}
          rows={shown.map((c) => ({
            ...c,
            enquiries: cur.enqCh[c.j],
            bookings: cur.bookCh[c.j],
            conversion: cur.bookCh[c.j] / Math.max(1, cur.enqCh[c.j]),
            value: cur.valueCh[c.j],
            share: cur.enqCh[c.j] / Math.max(1, cur.enqCh.reduce((a, b) => a + b, 0)),
            delta: change(cur.bookCh[c.j], prev.bookCh[c.j]),
          }))}
          columns={[
            {
              id: "label",
              label: "Channel",
              value: (r) => r.label,
              render: (r) => (
                <span className="flex items-center gap-2.5 font-medium whitespace-nowrap text-ink">
                  <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-[3px]" style={{ background: slots[r.j] }} />
                  {r.label}
                </span>
              ),
            },
            { id: "enquiries", label: "Enquiries", align: "right", value: (r) => r.enquiries, render: (r) => r.enquiries.toLocaleString("en-IN") },
            { id: "share", label: "Share", align: "right", value: (r) => r.share, render: (r) => <ShareBar share={r.share} /> },
            { id: "bookings", label: "Bookings", align: "right", value: (r) => r.bookings, render: (r) => r.bookings.toLocaleString("en-IN") },
            { id: "conversion", label: "Conversion", align: "right", value: (r) => r.conversion, render: (r) => pct(r.conversion, 1) },
            { id: "value", label: "Booking value", align: "right", value: (r) => r.value, render: (r) => rupees(r.value) },
            ...(compare ? [{ id: "delta", label: "Bookings change", align: "right" as const, value: (r: { delta: number }) => r.delta, render: (r: { delta: number }) => <Delta value={r.delta} size="sm" /> }] : []),
          ]}
        />
      </Panel>
    </>
  );
}
