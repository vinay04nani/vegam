// Date helpers for the calendar. Bookings store `day` as days from today, so
// every date here is converted to and from that offset.

export const DAY_MS = 86_400_000;

export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
export const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
/** Whole days from `a` to `b` (DST safe). */
export const diffDays = (a: Date, b: Date) => Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / DAY_MS);
/** Monday-based weekday: Monday 0 … Sunday 6. */
export const weekday = (d: Date) => (d.getDay() + 6) % 7;

export const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
};
export const toTime = (min: number) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
/** 9:30 AM style. */
export const fmtMin = (min: number, withMinutes = true) => {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  return `${((h + 11) % 12) + 1}${withMinutes && m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`;
};

export const fmtDate = (d: Date, opts: Intl.DateTimeFormatOptions) => d.toLocaleDateString("en-GB", opts);

/** Lays out overlapping events side by side: returns each item's column and the column count of its cluster. */
export function layoutColumns<T extends { id: string; start: string; minutes: number }>(items: T[]) {
  const sorted = [...items].sort((a, b) => toMin(a.start) - toMin(b.start) || b.minutes - a.minutes);
  const out = new Map<string, { col: number; cols: number }>();
  let cluster: T[] = [];
  let clusterEnd = -1;
  let colEnds: number[] = [];
  const flush = () => {
    const cols = colEnds.length || 1;
    cluster.forEach((it) => out.set(it.id, { col: out.get(it.id)!.col, cols }));
    cluster = [];
    colEnds = [];
  };
  for (const it of sorted) {
    const s = toMin(it.start);
    const e = s + it.minutes;
    if (s >= clusterEnd && cluster.length) flush();
    let col = colEnds.findIndex((end) => end <= s);
    if (col === -1) {
      col = colEnds.length;
      colEnds.push(e);
    } else colEnds[col] = e;
    out.set(it.id, { col, cols: 1 });
    cluster.push(it);
    clusterEnd = Math.max(clusterEnd, e);
  }
  if (cluster.length) flush();
  return out;
}
