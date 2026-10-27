"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { sampleBaseline, sampleMorningReports, sampleWeekWon } from "@/content/dashboard";
import { busyGrid, channelShare, dailySeries, handledSplit, handoverReasons, hours, topQuestions, weekdays, type Range } from "@/content/reports";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, SegmentedControl, Skeleton, Tabs, useToast } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { BarList, Heatmap, LineChart, Legend, Sparkline, SplitBar, series } from "./reports/charts";

// Reports: how the front desk is doing, as a dashboard. Overview (headline
// numbers, trend, channels, funnel, busiest times, who handled chats), AI
// performance (resolution, handovers, top questions, before/after) and the
// morning reports. All numbers are sample data until the backend exists.

type Tab = "overview" | "ai" | "reports";

const fmtDay = (d: Date, range: Range) => d.toLocaleDateString("en-GB", range === 7 ? { weekday: "short" } : { day: "numeric", month: "short" });
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const pct = (n: number) => `${Math.round(n * 100)}%`;

function Panel({ title, description, action, children, className = "" }: { title: string; description?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section aria-label={title} className={`flex min-w-0 flex-col gap-4 rounded-[18px] border border-line bg-white p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="m-0 text-[15.5px] font-semibold text-ink">{title}</h2>
          {description && <p className="m-0 mt-0.5 text-[13px] text-subtle">{description}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function Delta({ value, better = "up" }: { value: number; better?: "up" | "down" }) {
  const good = better === "up" ? value >= 0 : value <= 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-[12.5px] font-semibold ${good ? "text-success" : "text-danger"}`}>
      <Icon name="chevron-down" size={13} className={value >= 0 ? "rotate-180" : ""} />
      {Math.abs(Math.round(value * 100))}%<span className="sr-only">{good ? " better" : " worse"} than the previous period</span>
    </span>
  );
}

function Stat({ label, value, delta, better, trend, hint }: { label: string; value: string; delta: number; better?: "up" | "down"; trend: number[]; hint: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-[18px] border border-line bg-white p-4">
      <span className="text-[13px] font-medium text-subtle">{label}</span>
      <span className="flex items-end justify-between gap-2">
        <span className="text-[28px] leading-none font-semibold tracking-[-0.02em] text-ink tabular-nums">{value}</span>
        <Sparkline values={trend.length > 12 ? Array.from({ length: Math.ceil(trend.length / 7) }, (_, i) => trend.slice(i * 7, i * 7 + 7).reduce((a, b) => a + b, 0) / trend.slice(i * 7, i * 7 + 7).length) : trend} />
      </span>
      <span className="flex items-center gap-1.5 text-[12.5px] text-subtle">
        <Delta value={delta} better={better} />
        {hint}
      </span>
    </div>
  );
}

export function Reports() {
  const toast = useToast();
  const [tab, setTab] = useState<Tab>("overview");
  const [range, setRange] = useState<Range>(30);
  const [today, setToday] = useState<Date | null>(null);
  const [openReport, setOpenReport] = useState<string | null>(sampleMorningReports[0].day);

  // Dates depend on the viewer's clock, so build the series after mount.
  useEffect(() => setToday(new Date()), []);

  const data = useMemo(() => {
    if (!today) return null;
    const all = dailySeries(range * 2, today);
    const cur = all.slice(range);
    const prev = all.slice(0, range);
    const enq = sum(cur.map((d) => d.enquiries));
    const book = sum(cur.map((d) => d.bookings));
    const enqPrev = sum(prev.map((d) => d.enquiries));
    const bookPrev = sum(prev.map((d) => d.bookings));
    const bucket = range === 90 ? 7 : 1;
    const groups = Array.from({ length: Math.ceil(cur.length / bucket) }, (_, i) => cur.slice(i * bucket, i * bucket + bucket));
    return {
      cur,
      enq,
      book,
      dEnq: enq / Math.max(1, enqPrev) - 1,
      dBook: book / Math.max(1, bookPrev) - 1,
      labels: groups.map((g) => (bucket === 7 ? `w/c ${fmtDay(g[0].date, 30)}` : fmtDay(g[0].date, range))),
      enqSeries: groups.map((g) => sum(g.map((d) => d.enquiries))),
      bookSeries: groups.map((g) => sum(g.map((d) => d.bookings))),
      afterHours: Math.round(enq * 0.31),
    };
  }, [today, range]);

  const price = 1200;
  const exportCsv = () => {
    if (!data) return;
    const rows = [["Date", "Enquiries", "Bookings"], ...data.cur.map((d) => [d.date.toISOString().slice(0, 10), d.enquiries, d.bookings])];
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([rows.map((r) => r.join(",")).join("\n")], { type: "text/csv" }));
    a.download = `vegam-report-${range}d.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast("Report exported");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Reports" body="How your front desk is doing: enquiries, bookings, the AI’s work and the busiest times." />
        <SampleTag />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs
          label="Report"
          value={tab}
          onChange={setTab}
          tabs={[
            { id: "overview", label: "Overview" },
            { id: "ai", label: "AI performance" },
            { id: "reports", label: "Morning reports" },
          ]}
        />
        {tab !== "reports" && (
          <div className="flex items-center gap-2">
            <SegmentedControl
              label="Date range"
              size="sm"
              value={String(range) as "7" | "30" | "90"}
              onChange={(v) => setRange(Number(v) as Range)}
              options={[
                { id: "7", label: "7 days" },
                { id: "30", label: "30 days" },
                { id: "90", label: "90 days" },
              ]}
            />
            <Button icon="download" onClick={exportCsv}>
              Export
            </Button>
          </div>
        )}
      </div>

      {!data ? (
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-[118px]" />
          ))}
          <Skeleton className="h-[320px] md:col-span-4" />
        </div>
      ) : tab === "overview" ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Stat label="Enquiries" value={String(data.enq)} delta={data.dEnq} trend={data.enqSeries} hint="vs previous period" />
            <Stat label="Bookings" value={String(data.book)} delta={data.dBook} trend={data.bookSeries} hint={`${pct(data.book / data.enq)} of enquiries`} />
            <Stat label="Value of bookings" value={`₹${(data.book * price).toLocaleString("en-IN")}`} delta={data.dBook} trend={data.bookSeries} hint="at your listed prices" />
            <Stat label="Average first reply" value="6 sec" delta={-0.12} better="down" trend={[9, 8, 8, 7, 7, 6, 6]} hint="day and night" />
          </div>

          <Panel title="Enquiries and bookings" description={range === 90 ? "Weekly totals" : "Daily totals"} action={<Legend items={[{ label: "Enquiries", color: series.blue }, { label: "Bookings", color: series.orange }]} />}>
            <LineChart
              labels={data.labels}
              data={[
                { id: "enq", label: "Enquiries", color: series.blue, values: data.enqSeries },
                { id: "book", label: "Bookings", color: series.orange, values: data.bookSeries },
              ]}
            />
          </Panel>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Panel title="Where enquiries come from" description="Share of all enquiries">
              <BarList rows={channelShare.map((c) => ({ label: c.channel, value: Math.round(c.share * data.enq) }))} note={(r) => `${r.label}: ${r.value} enquiries (${pct(r.value / data.enq)})`} />
            </Panel>
            <Panel title="From enquiry to visit" description="How many people reach each step">
              <BarList
                rows={[
                  { label: "Enquired", value: data.enq },
                  { label: "Replied within 1 min", value: Math.round(data.enq * 0.99) },
                  { label: "Booked", value: data.book },
                  { label: "Came in", value: Math.round(data.book * 0.91) },
                ]}
                note={(r) => `${r.label}: ${pct(r.value / data.enq)} of enquiries`}
              />
              <p className="m-0 text-[13px] text-subtle">
                <span className="font-semibold text-ink">{data.afterHours}</span> enquiries arrived after closing time; the AI answered all of them.
              </p>
            </Panel>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Panel title="Busiest times" description="Enquiries by day and hour. Staff the desk when it’s darkest.">
              <Heatmap rows={weekdays} cols={hours.map((h) => (h === 12 ? "12p" : h > 12 ? `${h - 12}p` : `${h}a`))} values={busyGrid(range / 30)} />
            </Panel>
            <Panel title="Who handled chats" description="Of all conversations in this period">
              <SplitBar parts={handledSplit.map((p, i) => ({ label: p.label, share: p.share, color: [series.blue, series.orange, series.aqua][i] }))} />
              <div className="grid grid-cols-2 gap-3 border-t border-line pt-4">
                <div>
                  <p className="m-0 text-[13px] text-subtle">Hours saved</p>
                  <p className="m-0 text-[22px] font-semibold text-ink tabular-nums">{Math.round(data.enq * 0.78 * 0.07)} h</p>
                </div>
                <div>
                  <p className="m-0 text-[13px] text-subtle">Missed calls recovered</p>
                  <p className="m-0 text-[22px] font-semibold text-ink tabular-nums">{Math.round(data.enq * 0.18 * 0.62)}</p>
                </div>
              </div>
            </Panel>
          </div>
        </>
      ) : tab === "ai" ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Stat label="Resolved by the AI" value="78%" delta={0.06} trend={[70, 72, 71, 74, 76, 77, 78]} hint="no person needed" />
            <Stat label="Handed to your team" value={String(Math.round(data.enq * 0.22))} delta={-0.08} better="down" trend={[30, 28, 27, 27, 25, 24, 22]} hint="conversations" />
            <Stat label="Booked by the AI" value={String(Math.round(data.book * 0.84))} delta={data.dBook} trend={data.bookSeries} hint="without staff help" />
            <Stat label="Questions it didn’t know" value="4" delta={-0.33} better="down" trend={[9, 8, 7, 6, 6, 5, 4]} hint="answer them in AI agents" />
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Panel title="Why chats were handed over" description="Share of handovers">
              <BarList rows={handoverReasons.map((r) => ({ label: r.reason, value: Math.round(r.share * 100) }))} format={(v) => `${v}%`} note={(r) => `${r.label}: ${r.value}% of handovers`} />
            </Panel>
            <Panel title="Most asked questions">
              <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
                {topQuestions.map((q) => (
                  <li key={q.q} className="flex items-center gap-3 py-2.5 text-[14px]">
                    <span className="min-w-0 flex-1 truncate text-ink">{q.q}</span>
                    {q.answered ? <Badge tone="success">Answered</Badge> : <Badge tone="warning">Needs an answer</Badge>}
                    <span className="w-10 text-right font-semibold text-ink tabular-nums">{q.count}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
          <Panel title="Before and after Vegam" description="Week 1 of your pilot measured how things were. “Now” is the last 7 days.">
            <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
              {sampleBaseline.map((m) => {
                const max = Math.max(m.beforeValue, m.afterValue, 0.01);
                return (
                  <div key={m.label} className="flex flex-col gap-2">
                    <span className="flex items-center justify-between gap-2 text-[14px] font-medium text-ink">
                      {m.label}
                      <span className="text-[12px] font-normal text-subtle">{m.better === "lower" ? "Lower is better" : "Higher is better"}</span>
                    </span>
                    {(
                      [
                        ["Week 1", m.beforeValue, m.before, "#C9CBD6"],
                        ["Now", m.afterValue, m.after, series.blue],
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
      ) : (
        <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Panel title="Morning reports" description="Sent to your WhatsApp at 8 AM every day.">
            <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
              {sampleMorningReports.map((r) => {
                const isOpen = openReport === r.day;
                return (
                  <li key={r.day}>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenReport(isOpen ? null : r.day)} className="flex w-full cursor-pointer items-center gap-3 py-3 text-left">
                      <Icon name="sun" size={17} className="flex-none text-muted" />
                      <span className="flex-1 text-[14.5px] font-medium text-ink">{r.day}, 8:00 AM</span>
                      <span className="text-[13px] text-subtle">
                        {r.enquiries} enquiries · {r.bookings} bookings
                      </span>
                      <Icon name="chevron-down" size={16} className={`flex-none text-subtle transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="mb-3 ml-7 rounded-[12px] bg-panel p-3.5 text-[14px] leading-relaxed text-ink">
                        <strong className="font-semibold">Good morning. Here’s yesterday:</strong>
                        <span className="block">
                          {r.enquiries} enquiries, all replied · {r.bookings} new bookings · {r.missed} missed call{r.missed === 1 ? "" : "s"}
                          {r.missed ? ", all followed up" : ""}
                        </span>
                        <span className="mt-1 block">
                          <strong className="font-semibold">Needs you:</strong> {r.needs}
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Panel>
          <Panel title="What Vegam won you this week" description="Sent every Monday morning.">
            <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
              {sampleWeekWon.map((w) => (
                <li key={w.label} className="flex items-baseline gap-3 py-3">
                  <span className="w-9 flex-none text-right text-[24px] leading-none font-semibold text-ink tabular-nums">{w.value}</span>
                  <span className="text-[14px] text-ink-soft">{w.label}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      )}
    </div>
  );
}
