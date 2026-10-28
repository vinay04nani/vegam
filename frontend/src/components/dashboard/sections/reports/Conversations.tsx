"use client";

import { busyGrid, handledSplit, hours, ratings, replyBuckets, topics, weekdays } from "@/content/reports";
import { BarList, ColumnChart, Heatmap, Legend, SplitBar, slots } from "./charts";
import { change, type Model } from "./model";
import { Figure, KpiRow, Panel, pct, seconds } from "./parts";

// Conversations: how fast and how well chats are answered, who answered them,
// when they arrive, what they're about and how customers rated them.

export function Conversations({ m, compare }: { m: Model; compare: boolean }) {
  const { cur, prev } = m;
  const n = cur.enquiries;
  const trend = (f: (i: number) => number) => m.buckets.map((_, i) => f(i));
  const avgRating = ratings.reduce((a, r) => a + r.stars * r.share, 0);

  return (
    <>
      <KpiRow
        compare={compare}
        items={[
          { id: "conv", label: "Conversations", value: n.toLocaleString("en-IN"), delta: change(n, prev.enquiries), trend: m.buckets.map((b) => b.enquiries) },
          { id: "reply", label: "Average first reply", value: seconds(cur.reply), delta: change(cur.reply, prev.reply), better: "down", trend: m.buckets.map((b) => b.reply) },
          { id: "resolve", label: "Time to resolve", value: "4 min", delta: -0.09, better: "down", trend: trend((i) => 5 - i / m.buckets.length), hint: "median" },
          { id: "rating", label: "Customer rating", value: `${avgRating.toFixed(1)} / 5`, delta: 0.02, trend: trend((i) => 4.5 + (i / m.buckets.length) * 0.2 + Math.sin(i) * 0.05), hint: "after a chat closes" },
          { id: "after", label: "After closing time", value: "31%", delta: 0.04, trend: trend((i) => 28 + (i % 3)), hint: "of conversations" },
        ]}
      />

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <Panel
          title="Time to first reply"
          description="Conversations by how long the customer waited"
          action={
            <Legend
              items={[
                { label: "AI", color: slots[0] },
                { label: "Your team", color: slots[1] },
              ]}
            />
          }
          table={{ columns: ["Waited", "Answered by the AI", "Answered by your team"], rows: replyBuckets.map((b) => [b.label, Math.round(b.ai * n), Math.round(b.team * n)]) }}
        >
          <ColumnChart
            label="Conversations by time to first reply"
            labels={replyBuckets.map((b) => b.label)}
            data={[
              { id: "ai", label: "AI", color: slots[0], values: replyBuckets.map((b) => Math.round(b.ai * n)) },
              { id: "team", label: "Your team", color: slots[1], values: replyBuckets.map((b) => Math.round(b.team * n)) },
            ]}
          />
          <p className="m-0 text-[13px] text-subtle">
            <span className="font-semibold text-ink">{pct(replyBuckets[0].ai + replyBuckets[0].team)}</span> got an answer in under 10 seconds. Slow replies are the ones handed to your team.
          </p>
        </Panel>

        <Panel title="Who handled chats" description="Of all conversations in this period">
          <SplitBar parts={handledSplit.map((p, i) => ({ label: p.label, share: p.share, color: slots[i] }))} />
          <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-4">
            <Figure label="Hours saved" value={`${Math.round(n * 0.78 * 0.07)} h`} hint="at 4 min a chat" />
            <Figure label="Missed calls recovered" value={String(Math.round(cur.enqCh[1] * 0.62))} hint="called back on WhatsApp" />
            <Figure label="Handovers" value={String(Math.round(n * 0.16))} hint="answered in 4 min on average" />
            <Figure label="Reopened" value={pct(0.03)} hint="customer wrote again within 2 days" />
          </div>
        </Panel>
      </div>

      <Panel title="Busiest times" description="Enquiries by day and hour. Have someone at the desk when it’s darkest.">
        <Heatmap rows={weekdays} cols={hours.map((h) => (h === 12 ? "12p" : h > 12 ? `${h - 12}p` : `${h}a`))} values={busyGrid((m.range / 30) * m.scope)} />
      </Panel>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-2">
        <Panel title="What people asked about" description="Topic of each conversation" table={{ columns: ["Topic", "Conversations", "Share"], rows: topics.map((t) => [t.label, Math.round(t.share * n), pct(t.share)]) }}>
          <BarList rows={topics.map((t) => ({ label: t.label, value: Math.round(t.share * n) }))} note={(r) => `${r.label}: ${pct(r.value / n)} of conversations`} />
        </Panel>
        <Panel
          title="Customer ratings"
          description={`${Math.round(n * 0.42).toLocaleString("en-IN")} customers rated their chat`}
          table={{ columns: ["Rating", "Customers", "Share"], rows: ratings.map((r) => [`${r.stars} stars`, Math.round(r.share * n * 0.42), pct(r.share)]) }}
        >
          <div className="flex items-baseline gap-2">
            <span className="text-[34px] leading-none font-semibold tracking-[-0.02em] text-ink">{avgRating.toFixed(1)}</span>
            <span className="text-[13px] text-subtle">out of 5 · {pct(ratings[0].share + ratings[1].share)} gave 4 or 5 stars</span>
          </div>
          <BarList rows={ratings.map((r) => ({ label: `${r.stars} star${r.stars > 1 ? "s" : ""}`, value: Math.round(r.share * n * 0.42) }))} labelWidth={64} note={(r) => `${r.label}: ${r.value} customers`} />
        </Panel>
      </div>
    </>
  );
}
