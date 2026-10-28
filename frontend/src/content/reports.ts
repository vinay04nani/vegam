// Sample analytics for the Reports page. Deterministic (no randomness) so the
// page renders the same on the server and in the browser. Labelled
// "Sample data" wherever shown.
// TODO(backend): replace with the business's real metrics.

export type Range = 7 | 30 | 90 | 365;
export type DayPoint = { date: Date; enquiries: number; bookings: number; value: number; reply: number };

/** A smooth, repeatable wobble in [-1, 1]. */
const wobble = (i: number) => Math.sin(i * 0.9) * 0.45 + Math.sin(i * 0.37) * 0.35 + Math.sin(i * 2.3) * 0.2;

/** Average price of a booking, in rupees. */
export const averagePrice = 1200;

/** Daily enquiries, bookings, booking value and average first reply (seconds) for the last `days` days, ending today. */
export function dailySeries(days: number, today: Date): DayPoint[] {
  return Array.from({ length: days }, (_, k) => {
    const i = days - 1 - k;
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    const weekend = date.getDay() === 0 ? 0.55 : date.getDay() === 6 ? 1.2 : 1;
    const growth = 1 + (days - i) / (days * 6);
    const enquiries = Math.max(3, Math.round((13 + wobble(k + days) * 3.5) * weekend * growth));
    const bookings = Math.max(1, Math.round(enquiries * (0.38 + wobble(k * 2 + 3) * 0.06)));
    const value = Math.round(bookings * averagePrice * (1 + wobble(k * 3 + 1) * 0.12));
    const reply = Math.max(3, Math.round((7.5 - (k / days) * 2 + wobble(k * 5) * 1.4) * 10) / 10);
    return { date, enquiries, bookings, value, reply };
  });
}

/** Channels, grouped into four so a stacked chart stays readable. Colour follows the channel, never its rank. */
export const channelGroups = [
  { id: "whatsapp", label: "WhatsApp", share: 0.46, conversion: 0.44 },
  { id: "calls", label: "Calls", share: 0.18, conversion: 0.41 },
  { id: "social", label: "Instagram and Messenger", share: 0.2, conversion: 0.29 },
  { id: "web", label: "Website and ads", share: 0.16, conversion: 0.33 },
] as const;

export type ChannelFilter = "all" | (typeof channelGroups)[number]["id"];

/** Daily split of one day's enquiries across the channel groups (sums to the total). */
export function splitByChannel(total: number, k: number) {
  const raw = channelGroups.map((c, j) => c.share * (1 + wobble(k * 3 + j * 5) * 0.25));
  const sumRaw = raw.reduce((a, b) => a + b, 0);
  // Largest remainder, so rounding doesn't pile onto one channel.
  const exact = raw.map((r) => (r / sumRaw) * total);
  const parts = exact.map(Math.floor);
  const order = exact.map((e, j) => [e - Math.floor(e), j]).sort((a, b) => b[0] - a[0]);
  for (let r = total - parts.reduce((a, b) => a + b, 0), i = 0; r > 0; r--, i++) parts[order[i][1]]++;
  return parts;
}

/** Handling split for chats: answered by the AI alone, AI then a person, a person only. */
export const handledSplit = [
  { id: "ai", label: "AI only", share: 0.78 },
  { id: "handover", label: "AI, then your team", share: 0.16 },
  { id: "team", label: "Your team only", share: 0.06 },
];

export const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const weekdayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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

/** Time to first reply: share of conversations in each bucket, answered by the AI or by your team. */
export const replyBuckets = [
  { label: "Under 10 s", ai: 0.71, team: 0 },
  { label: "10–30 s", ai: 0.07, team: 0.01 },
  { label: "30–60 s", ai: 0, team: 0.03 },
  { label: "1–5 min", ai: 0, team: 0.09 },
  { label: "5–30 min", ai: 0, team: 0.06 },
  { label: "30 min +", ai: 0, team: 0.03 },
];

/** What conversations were about. */
export const topics = [
  { label: "New booking", share: 0.34 },
  { label: "Prices", share: 0.19 },
  { label: "Timings and location", share: 0.15 },
  { label: "Reschedule", share: 0.12 },
  { label: "Cancel", share: 0.07 },
  { label: "Payment", share: 0.06 },
  { label: "Something else", share: 0.07 },
];

/** Customer ratings after a chat closes (share of ratings given). */
export const ratings = [
  { stars: 5, share: 0.74 },
  { stars: 4, share: 0.17 },
  { stars: 3, share: 0.05 },
  { stars: 2, share: 0.02 },
  { stars: 1, share: 0.02 },
];

/** Services as booked. Neutral names: Vegam never assumes an industry. */
export const serviceMix = [
  { name: "Standard appointment", share: 0.38, price: 1200, change: 0.09 },
  { name: "First visit", share: 0.22, price: 500, change: 0.18 },
  { name: "Follow-up", share: 0.17, price: 300, change: -0.04 },
  { name: "Extended session", share: 0.11, price: 2000, change: 0.12 },
  { name: "Consultation", share: 0.08, price: 800, change: 0.02 },
  { name: "Package of 5", share: 0.04, price: 5000, change: 0.25 },
];

/** How far ahead customers book. */
export const leadTimes = [
  { label: "Same day", share: 0.27 },
  { label: "Next day", share: 0.31 },
  { label: "2–7 days", share: 0.29 },
  { label: "1–2 weeks", share: 0.09 },
  { label: "Later", share: 0.04 },
];

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

/** Who answered conversations, per 30 days. The AI row is the assistant itself. */
export const teamPerformance = [
  { name: "Vegam AI", role: "AI receptionist", conversations: 312, reply: 6, resolved: 0.78, rating: 4.7, bookings: 118 },
  { name: "You", role: "Owner", conversations: 38, reply: 260, resolved: 0.92, rating: 4.8, bookings: 14 },
  { name: "R. Kumar", role: "Manager", conversations: 29, reply: 190, resolved: 0.9, rating: 4.6, bookings: 11 },
  { name: "S. Das", role: "Front desk", conversations: 24, reply: 410, resolved: 0.83, rating: 4.5, bookings: 7 },
];
