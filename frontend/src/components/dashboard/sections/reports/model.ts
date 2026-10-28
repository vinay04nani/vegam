import { averagePrice, channelGroups, dailySeries, splitByChannel, type ChannelFilter, type Range } from "@/content/reports";

// Turns the sample daily series into what the Reports tabs show for one date
// range and channel: totals, the previous period, chart buckets and the
// per-channel split. Every tab reads from the same model, so the filter row
// scopes all of them at once.

type Day = { date: Date; enquiries: number; bookings: number; value: number; reply: number; enqCh: number[]; bookCh: number[] };

export type Bucket = { label: string; tip: string; enquiries: number; bookings: number; value: number; conversion: number; reply: number; enqCh: number[]; bookCh: number[] };

export type Totals = { enquiries: number; bookings: number; value: number; conversion: number; reply: number; enqCh: number[]; bookCh: number[]; valueCh: number[] };

export type Model = {
  range: Range;
  channel: ChannelFilter;
  /** Share of all enquiries the current channel filter covers (1 for all channels). */
  scope: number;
  days: Day[];
  buckets: Bucket[];
  prevBuckets: Bucket[];
  cur: Totals;
  prev: Totals;
  period: string;
  prevPeriod: string;
  /** "daily" | "weekly" | "monthly" — what one chart point is. */
  grain: string;
};

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const avgConversion = sum(channelGroups.map((c) => c.share * c.conversion));
const dayMonth = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

function totals(days: Day[]): Totals {
  const enquiries = sum(days.map((d) => d.enquiries));
  const bookings = sum(days.map((d) => d.bookings));
  const pick = (f: (d: Day) => number[]) => channelGroups.map((_, j) => sum(days.map((d) => f(d)[j])));
  const bookCh = pick((d) => d.bookCh);
  const value = sum(days.map((d) => d.value));
  return {
    enquiries,
    bookings,
    value,
    conversion: bookings / Math.max(1, enquiries),
    reply: sum(days.map((d) => d.reply * d.enquiries)) / Math.max(1, enquiries),
    enqCh: pick((d) => d.enqCh),
    bookCh,
    valueCh: bookCh.map((b) => b * (value / Math.max(1, bookings))),
  };
}

const groups: Record<Range, number> = { 7: 7, 30: 30, 90: 13, 365: 12 };

function bucketise(days: Day[], range: Range): Bucket[] {
  const g = groups[range];
  return Array.from({ length: g }, (_, i) => {
    const part = days.slice(Math.floor((i * days.length) / g), Math.floor(((i + 1) * days.length) / g));
    const t = totals(part);
    const first = part[0].date;
    const last = part[part.length - 1].date;
    const mid = part[Math.floor(part.length / 2)].date;
    const label = range === 7 ? first.toLocaleDateString("en-GB", { weekday: "short" }) : range === 30 ? dayMonth(first) : range === 90 ? dayMonth(first) : mid.toLocaleDateString("en-GB", { month: "short" });
    const tip = part.length === 1 ? first.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) : `${dayMonth(first)} – ${dayMonth(last)}`;
    return { label, tip, enquiries: t.enquiries, bookings: t.bookings, value: t.value, conversion: t.conversion, reply: Math.round(t.reply * 10) / 10, enqCh: t.enqCh, bookCh: t.bookCh };
  });
}

/** `factor` scales the sample to one location's share of the business (1 for all locations). */
export function buildModel(range: Range, channel: ChannelFilter, today: Date, factor = 1): Model {
  const idx = channelGroups.findIndex((c) => c.id === channel);
  const raw = dailySeries(range * 2, today).map((d) => (factor === 1 ? d : { ...d, enquiries: Math.max(1, Math.round(d.enquiries * factor)), bookings: Math.max(0, Math.round(d.bookings * factor)), value: Math.round(d.value * factor) }));
  const days: Day[] = raw.map((d, k) => {
    const enqCh = splitByChannel(d.enquiries, k);
    const rate = d.bookings / Math.max(1, d.enquiries) / avgConversion;
    const bookCh = enqCh.map((e, j) => Math.round(e * channelGroups[j].conversion * rate));
    const enquiries = idx < 0 ? sum(enqCh) : enqCh[idx];
    const bookings = idx < 0 ? sum(bookCh) : bookCh[idx];
    const reply = Math.round(d.reply * (channel === "calls" ? 1.6 : 1) * 10) / 10;
    return { date: d.date, enquiries, bookings, value: Math.round(bookings * averagePrice * (d.value / Math.max(1, d.bookings * averagePrice))), reply, enqCh, bookCh };
  });
  const cur = days.slice(range);
  const prev = days.slice(0, range);
  const fmt = (ds: Day[]) => `${dayMonth(ds[0].date)} – ${ds[ds.length - 1].date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;
  const all = sum(cur.map((d) => sum(d.enqCh)));
  const ct = totals(cur);
  return {
    range,
    channel,
    scope: ct.enquiries / Math.max(1, all),
    days: cur,
    buckets: bucketise(cur, range),
    prevBuckets: bucketise(prev, range),
    cur: ct,
    prev: totals(prev),
    period: fmt(cur),
    prevPeriod: fmt(prev),
    grain: range === 90 ? "Weekly" : range === 365 ? "Monthly" : "Daily",
  };
}

/** Relative change, guarded against a zero base. */
export const change = (now: number, before: number) => now / Math.max(1e-9, before) - 1;
