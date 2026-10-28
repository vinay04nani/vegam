"use client";

import { leadTimes, serviceMix } from "@/content/reports";
import { BarList, ColumnChart, SplitBar, slots } from "./charts";
import { change, type Model } from "./model";
import { DataTable, Delta, Figure, KpiRow, Panel, ShareBar, pct, rupees, rupeesShort } from "./parts";

// Bookings: value over time, what was booked, who booked, how far ahead, and
// what didn't happen (cancellations and no-shows).

export function Bookings({ m, compare }: { m: Model; compare: boolean }) {
  const { cur, prev } = m;
  const avg = cur.value / Math.max(1, cur.bookings);
  const avgPrev = prev.value / Math.max(1, prev.bookings);
  const trend = (f: (i: number) => number) => m.buckets.map((_, i) => f(i));
  // Split the period's bookings and value across services so the table adds up to the tiles above.
  const weight = serviceMix.reduce((a, s) => a + s.share * s.price, 0);
  const services = serviceMix.map((s) => ({ ...s, bookings: Math.round(s.share * cur.bookings), value: Math.round((cur.value * s.share * s.price) / weight) }));
  services[0].bookings += cur.bookings - services.reduce((a, s) => a + s.bookings, 0);
  services[0].value += cur.value - services.reduce((a, s) => a + s.value, 0);
  const totalValue = cur.value;
  const noShows = Math.round(cur.bookings * 0.041);

  return (
    <>
      <KpiRow
        compare={compare}
        items={[
          { id: "book", label: "Bookings", value: cur.bookings.toLocaleString("en-IN"), delta: change(cur.bookings, prev.bookings), trend: m.buckets.map((b) => b.bookings) },
          { id: "value", label: "Booking value", value: rupeesShort(cur.value), delta: change(cur.value, prev.value), trend: m.buckets.map((b) => b.value) },
          { id: "avg", label: "Average booking", value: rupees(avg), delta: change(avg, avgPrev), trend: m.buckets.map((b) => b.value / Math.max(1, b.bookings)) },
          { id: "noshow", label: "No-show rate", value: "4.1%", delta: -0.22, better: "down", trend: trend((i) => 6 - (i / m.buckets.length) * 2 + Math.sin(i * 1.3) * 0.3), hint: "reminders on" },
          { id: "return", label: "Returning customers", value: "41%", delta: 0.05, trend: trend((i) => 37 + (i / m.buckets.length) * 4), hint: "booked before" },
        ]}
      />

      <Panel
        title="Booking value"
        description={`${m.grain} totals at your listed prices`}
        table={{ columns: [m.grain === "Daily" ? "Day" : m.grain === "Weekly" ? "Week" : "Month", "Bookings", "Value"], rows: m.buckets.map((b) => [b.tip, b.bookings, rupees(b.value)]) }}
      >
        <ColumnChart
          label={`Booking value, ${m.grain.toLowerCase()}`}
          labels={m.buckets.map((b) => b.label)}
          tipLabels={m.buckets.map((b) => b.tip)}
          format={rupees}
          axisFormat={(v) => (v >= 1e5 ? `₹${v / 1e5}L` : v >= 1e3 ? `₹${v / 1e3}K` : `₹${v}`)}
          data={[{ id: "value", label: "Booking value", color: slots[0], values: m.buckets.map((b) => b.value) }]}
        />
      </Panel>

      <Panel title="Services" description="What customers booked in this period. Click a column to sort.">
        <DataTable
          label="Bookings by service"
          initialSort={{ id: "value", desc: true }}
          rows={services}
          columns={[
            { id: "name", label: "Service", value: (s) => s.name, className: "font-medium text-ink" },
            { id: "bookings", label: "Bookings", align: "right", value: (s) => s.bookings, render: (s) => s.bookings.toLocaleString("en-IN") },
            { id: "share", label: "Share of value", align: "right", value: (s) => s.value / totalValue, render: (s) => <ShareBar share={s.value / totalValue} /> },
            { id: "price", label: "Average price", align: "right", value: (s) => s.value / Math.max(1, s.bookings), render: (s) => rupees(s.value / Math.max(1, s.bookings)) },
            { id: "value", label: "Value", align: "right", value: (s) => s.value, render: (s) => rupees(s.value) },
            ...(compare ? [{ id: "change", label: "Change", align: "right" as const, value: (s: { change: number }) => s.change, render: (s: { change: number }) => <Delta value={s.change} size="sm" /> }] : []),
          ]}
          footer={["Total", cur.bookings.toLocaleString("en-IN"), "100%", rupees(avg), rupees(totalValue), ...(compare ? [""] : [])]}
        />
      </Panel>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-3">
        <Panel title="New and returning" description="Who booked">
          <SplitBar
            parts={[
              { label: "New customers", share: 0.59, color: slots[0] },
              { label: "Returning", share: 0.41, color: slots[1] },
            ]}
          />
          <div className="mt-auto grid grid-cols-2 gap-4 border-t border-line pt-4">
            <Figure label="Brought back by follow-ups" value={String(Math.round(cur.bookings * 0.06))} />
            <Figure label="Rebooked within 60 days" value="34%" />
          </div>
        </Panel>
        <Panel title="How far ahead people book" table={{ columns: ["Booked", "Bookings", "Share"], rows: leadTimes.map((l) => [l.label, Math.round(l.share * cur.bookings), pct(l.share)]) }}>
          <BarList rows={leadTimes.map((l) => ({ label: l.label, value: Math.round(l.share * cur.bookings) }))} labelWidth={86} note={(r) => `${r.label}: ${pct(r.value / cur.bookings)} of bookings`} />
        </Panel>
        <Panel title="Changes and no-shows" description="Reminders go out a day and 2 hours before">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <Figure label="Rescheduled" value={String(Math.round(cur.bookings * 0.09))} hint="by the AI, in chat" />
            <Figure label="Cancelled" value={String(Math.round(cur.bookings * 0.05))} hint={`${rupees(Math.round(cur.bookings * 0.05) * 1200)} freed up`} />
            <Figure label="No-shows" value={String(noShows)} hint="4.1% of bookings" />
            <Figure label="Slots refilled" value={String(Math.round(cur.bookings * 0.03))} hint="from the waitlist" />
          </div>
        </Panel>
      </div>
    </>
  );
}
