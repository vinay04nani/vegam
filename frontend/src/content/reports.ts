// Sample analytics for the Reports page. Deterministic (no randomness) so the
// page renders the same on the server and in the browser. Labelled
// "Sample data" wherever shown.
// TODO(backend): replace with the business's real metrics.

export type Range = 7 | 30 | 90;
export type DayPoint = { date: Date; enquiries: number; bookings: number };

/** A smooth, repeatable wobble in [-1, 1]. */
const wobble = (i: number) => Math.sin(i * 1.7) * 0.6 + Math.sin(i * 0.37) * 0.4;

/** Daily enquiries and bookings for the last `days` days, ending today. */
export function dailySeries(days: number, today: Date): DayPoint[] {
  return Array.from({ length: days }, (_, k) => {
    const i = days - 1 - k;
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    const weekend = date.getDay() === 0 ? 0.55 : date.getDay() === 6 ? 1.2 : 1;
    const growth = 1 + (days - i) / (days * 6);
    const enquiries = Math.max(3, Math.round((13 + wobble(k + days) * 3.5) * weekend * growth));
    const bookings = Math.max(1, Math.round(enquiries * (0.38 + wobble(k * 2 + 3) * 0.06)));
    return { date, enquiries, bookings };
  });
}

export const channelShare = [
  { channel: "WhatsApp", share: 0.46 },
  { channel: "Missed calls", share: 0.18 },
  { channel: "Instagram", share: 0.14 },
  { channel: "Website", share: 0.12 },
  { channel: "Messenger", share: 0.06 },
  { channel: "Ad forms", share: 0.04 },
];

/** Handling split for chats: answered by the AI alone, AI then a person, a person only. */
export const handledSplit = [
  { id: "ai", label: "AI only", share: 0.78 },
  { id: "handover", label: "AI, then your team", share: 0.16 },
  { id: "team", label: "Your team only", share: 0.06 },
];

export const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Enquiries by weekday and hour (busy lunchtimes and evenings, quiet Sunday). */
export function busyGrid(scale: number) {
  return weekdays.map((_, d) =>
    hours.map((h, j) => {
      const peak = Math.exp(-((h - 12.5) ** 2) / 4) * 0.8 + Math.exp(-((h - 18.5) ** 2) / 3);
      const day = d === 6 ? 0.35 : d === 5 ? 1.25 : 1;
      return Math.round((2 + peak * 9 + Math.abs(wobble(d * 12 + j)) * 2) * day * scale);
    }),
  );
}

export const handoverReasons = [
  { reason: "Asked for a person", share: 0.38 },
  { reason: "Didn’t know the answer", share: 0.27 },
  { reason: "Refund or payment issue", share: 0.17 },
  { reason: "Group or special booking", share: 0.12 },
  { reason: "Customer seemed upset", share: 0.06 },
];

export const topQuestions = [
  { q: "What are your timings?", count: 86, answered: true },
  { q: "How much is a first visit?", count: 64, answered: true },
  { q: "Can I book for tomorrow?", count: 58, answered: true },
  { q: "Is there parking?", count: 31, answered: true },
  { q: "Do you open on public holidays?", count: 12, answered: false },
  { q: "Can I pay in instalments?", count: 7, answered: false },
];
