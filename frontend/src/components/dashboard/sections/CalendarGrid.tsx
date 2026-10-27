"use client";

import { useEffect, useRef, useState } from "react";
import { serviceColors, type Booking } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Badge, sourceIcon } from "../kit";
import { addDays, diffDays, fmtDate, fmtMin, layoutColumns, toMin, weekday } from "./calendarUtils";

// The calendar's three views: a time grid (day or week), a month grid and an
// agenda list. All take day offsets from today, like the bookings do.

export type Block = { id: string; day: number; start: string; minutes: number; reason: string };
export type CalItem = ({ kind: "booking" } & Booking) | ({ kind: "block" } & Block);

const HOUR_PX = 76;
const colorOf = (service: number) => serviceColors[service % serviceColors.length];

type GridProps = {
  today: Date;
  days: number[];
  itemsFor: (day: number) => CalItem[];
  open: number;
  close: number;
  serviceName: (i: number) => string;
  onSelect: (item: CalItem) => void;
  onDayClick?: (day: number) => void;
};

type Placement = { top: number; height: number; left: string; width: string; z: number };

function EventBlock({ item, place, wide, serviceName, onSelect }: { item: CalItem; place: Placement; wide: boolean; serviceName: (i: number) => string; onSelect: (i: CalItem) => void }) {
  const start = toMin(item.start);
  const range = `${fmtMin(start)} – ${fmtMin(start + item.minutes)}`;
  const compact = place.height < 52;
  const style = { top: place.top, height: place.height, left: place.left, width: place.width, zIndex: place.z };
  const base = "absolute overflow-hidden rounded-[8px] border border-white text-left transition hover:z-30! hover:shadow-[0_6px_18px_rgb(30_31_43/0.16)] focus-visible:z-30! focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-indigo";

  if (item.kind === "block") {
    return (
      <button
        type="button"
        onClick={() => onSelect(item)}
        title={`${item.reason || "Blocked"}, ${range}`}
        className={`${base} cursor-pointer bg-[repeating-linear-gradient(135deg,#F1F2F6_0,#F1F2F6_5px,#E6E7EE_5px,#E6E7EE_10px)] px-2 text-muted ${compact ? "flex items-center" : "py-1.5"}`}
        style={style}
      >
        <span className="flex items-center gap-1 text-[12px] font-semibold">
          <Icon name="lock" size={11} className="flex-none" />
          <span className="truncate">{item.reason || "Blocked"}</span>
        </span>
        {!compact && <span className="block truncate text-[11.5px]">{range}</span>}
      </button>
    );
  }

  const [accent, tint, text] = colorOf(item.service);
  const pending = item.status === "pending";
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      title={`${item.who} · ${serviceName(item.service)} · ${range}${pending ? " · waiting to confirm" : ""}`}
      aria-label={`${item.who}, ${serviceName(item.service)}, ${range}${pending ? ", waiting to confirm" : ""}`}
      className={`${base} cursor-pointer pr-2 pl-3 ${compact ? "flex items-center" : "flex flex-col py-1.5"}`}
      style={{ ...style, background: tint, color: text, boxShadow: pending ? `inset 0 0 0 1px ${accent}` : undefined }}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px]" style={{ background: accent }} />
      {compact ? (
        <span className="flex min-w-0 items-center gap-1 text-[12px] leading-none">
          {pending && <Icon name="clock" size={11} className="flex-none" />}
          <span className="truncate font-semibold">{item.who}</span>
          {wide && <span className="flex-none opacity-80">· {fmtMin(start)}</span>}
        </span>
      ) : (
        <>
          <span className="flex min-w-0 items-center gap-1.5">
            {pending && <Icon name="clock" size={12} className="flex-none" />}
            <span className="truncate text-[12.5px] leading-tight font-semibold">{item.who}</span>
            {wide && (
              <span className="ml-auto flex flex-none items-center gap-2">
                <Icon name={sourceIcon[item.channel] ?? "message"} size={13} className="opacity-70" />
                <Badge tone={pending ? "warning" : "success"}>{pending ? "Waiting" : "Confirmed"}</Badge>
              </span>
            )}
          </span>
          <span className="truncate text-[11.5px] leading-snug opacity-80">{range}</span>
          {place.height >= 72 && <span className="truncate text-[11.5px] leading-snug opacity-80">{serviceName(item.service)}</span>}
          {wide && place.height >= 96 && <span className="truncate text-[11.5px] leading-snug opacity-70">{item.phone}</span>}
        </>
      )}
    </button>
  );
}

/** Places a day's events: a single event takes the full width; overlapping ones cascade like Google Calendar, or sit side by side when they start together. */
function placeAll(items: CalItem[], pos: (min: number) => number) {
  const layout = layoutColumns(items);
  const out = new Map<string, Placement>();
  for (const it of items) {
    const s = toMin(it.start);
    const { col, cols } = layout.get(it.id) ?? { col: 0, cols: 1 };
    const top = pos(s) + 1;
    const height = Math.max(34, (it.minutes / 60) * HOUR_PX - 2);
    const sameStart = items.some((o) => o.id !== it.id && toMin(o.start) === s);
    let left = 0;
    let width = 100;
    if (cols > 1) {
      if (sameStart) {
        width = 100 / cols;
        left = col * width;
      } else {
        const indent = cols === 2 ? 38 : Math.min(30, 45 / (cols - 1));
        left = col * indent;
        width = 100 - left;
      }
    }
    out.set(it.id, { top, height, left: `calc(${left}% + 2px)`, width: `calc(${width}% - 4px)`, z: 1 + col });
  }
  return out;
}

/** Day or week time grid on the business's opening hours, with a now line. */
export function TimeGrid({ today, days, itemsFor, open, close, serviceName, onSelect, onDayClick }: GridProps) {
  const all = days.flatMap((d) => itemsFor(d));
  const earliest = Math.min(open, ...all.map((i) => toMin(i.start)));
  const latest = Math.max(close, ...all.map((i) => toMin(i.start) + i.minutes));
  const startH = Math.max(0, Math.floor(earliest / 60));
  const endH = Math.min(24, Math.ceil(latest / 60));
  const startMin = startH * 60;
  const total = (endH - startH) * HOUR_PX;
  const hours = Array.from({ length: endH - startH }, (_, i) => startH + i);
  const pos = (min: number) => ((min - startMin) / 60) * HOUR_PX;
  const scroller = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<Date | null>(null);
  const wide = days.length === 1;

  useEffect(() => {
    setNow(new Date());
    const t = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(t);
  }, []);

  // When the day doesn't fit, open scrolled to the current time.
  useEffect(() => {
    const el = scroller.current;
    if (!el || el.scrollHeight <= el.clientHeight) return;
    const n = new Date();
    if (days.includes(0)) el.scrollTop = Math.max(0, pos(n.getHours() * 60 + n.getMinutes()) - el.clientHeight / 3);
  }, [days.join(",")]);

  const nowMin = now ? now.getHours() * 60 + now.getMinutes() : -1;
  const showNow = days.includes(0) && nowMin >= startMin && nowMin <= endH * 60;
  const cols = `60px repeat(${days.length}, minmax(0, 1fr))`;
  const colTint = (d: number) => (d === 0 ? "bg-[#F7F8FF]" : weekday(addDays(today, d)) >= 5 ? "bg-[#FCFCFD]" : "bg-white");

  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_1px_2px_rgb(30_31_43/0.03)]">
      {/* Day headers */}
      <div className="grid border-b border-line" style={{ gridTemplateColumns: cols }}>
        <span />
        {days.map((d) => {
          const date = addDays(today, d);
          const isToday = d === 0;
          const n = itemsFor(d).filter((i) => i.kind === "booking").length;
          return (
            <button
              key={d}
              type="button"
              onClick={() => onDayClick?.(d)}
              disabled={!onDayClick}
              className={`flex flex-col items-center gap-0.5 border-l border-line py-2.5 enabled:cursor-pointer enabled:hover:bg-[#F7F7FA] ${colTint(d)} ${wide ? "items-start px-4" : ""}`}
            >
              <span className={`text-[12px] font-semibold tracking-[0.08em] uppercase ${isToday ? "text-indigo" : "text-subtle"}`}>{fmtDate(date, { weekday: wide ? "long" : "short" })}</span>
              <span className={`flex h-9 w-9 items-center justify-center rounded-full text-[20px] leading-none font-semibold ${isToday ? "bg-ink text-white" : "text-ink"}`}>{date.getDate()}</span>
              <span className="text-[11.5px] text-subtle">{n ? `${n} booking${n === 1 ? "" : "s"}` : "No bookings"}</span>
            </button>
          );
        })}
      </div>

      <div ref={scroller} className="max-h-[max(520px,calc(100svh-250px))] overflow-y-auto">
        <div className="relative grid" style={{ gridTemplateColumns: cols, height: total + 8 }}>
          {/* Hour labels */}
          <div className="relative">
            {hours.map((h, i) => (
              <span key={h} className={`absolute right-2.5 text-[11.5px] font-medium text-subtle ${i === 0 ? "top-1" : "-translate-y-1/2"}`} style={i === 0 ? undefined : { top: pos(h * 60) }}>
                {fmtMin(h * 60, false)}
              </span>
            ))}
            {showNow && (
              <span className="absolute right-1 z-40 -translate-y-1/2 rounded-full bg-[#D0302F] px-1.5 py-0.5 text-[10.5px] leading-none font-semibold whitespace-nowrap text-white" style={{ top: pos(nowMin) }}>
                {fmtMin(nowMin).replace(" AM", "am").replace(" PM", "pm")}
              </span>
            )}
          </div>

          {days.map((d) => {
            const items = itemsFor(d);
            const places = placeAll(items, pos);
            return (
              <div key={d} className={`relative border-l border-line ${colTint(d)}`}>
                {/* Hour and half-hour lines */}
                {hours.map((h) => (
                  <div key={h} aria-hidden="true">
                    {h !== startH && <div className="absolute inset-x-0 border-t border-line" style={{ top: pos(h * 60) }} />}
                    <div className="absolute inset-x-0 border-t border-line/45" style={{ top: pos(h * 60 + 30) }} />
                  </div>
                ))}
                {items.map((it) => (
                  <EventBlock key={it.id} item={it} place={places.get(it.id)!} wide={wide} serviceName={serviceName} onSelect={onSelect} />
                ))}
                {d === 0 && showNow && (
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 z-40 flex items-center opacity-90" style={{ top: pos(nowMin) - 1 }}>
                    <span className="-ml-[5px] h-2.5 w-2.5 flex-none rounded-full bg-[#D0302F]" />
                    <span className="h-[2px] flex-1 bg-[#D0302F]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Six-week month grid with up to three bookings per day. */
export function MonthGrid({ today, anchor, itemsFor, serviceName, onSelect, onDayClick }: { today: Date; anchor: number; itemsFor: (d: number) => CalItem[]; serviceName: (i: number) => string; onSelect: (i: CalItem) => void; onDayClick: (d: number) => void }) {
  const a = addDays(today, anchor);
  const first = new Date(a.getFullYear(), a.getMonth(), 1);
  const gridStart = addDays(first, -weekday(first));
  const cells = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white">
      <div className="grid grid-cols-7 border-b border-line bg-[#FAFAFC]">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <span key={d} className="py-2.5 text-center text-[11.5px] font-semibold tracking-[0.08em] text-subtle uppercase">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((date, i) => {
          const off = diffDays(today, date);
          const inMonth = date.getMonth() === first.getMonth();
          const items = itemsFor(off).sort((x, y) => toMin(x.start) - toMin(y.start));
          return (
            <div key={i} className={`flex min-h-[112px] flex-col gap-1 border-b border-line p-1.5 ${i % 7 ? "border-l" : ""} ${inMonth ? "bg-white" : "bg-[#FAFAFC]"}`}>
              <button
                type="button"
                onClick={() => onDayClick(off)}
                aria-label={`Open ${fmtDate(date, { weekday: "long", day: "numeric", month: "long" })}`}
                className={`flex h-7 w-7 cursor-pointer items-center justify-center self-end rounded-full text-[13px] font-semibold hover:bg-panel ${off === 0 ? "bg-ink text-white hover:bg-ink" : inMonth ? "text-ink" : "text-faint"}`}
              >
                {date.getDate()}
              </button>
              {items.slice(0, 3).map((it) => {
                const [accent] = it.kind === "booking" ? colorOf(it.service) : ["#8a8c9a"];
                return (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => onSelect(it)}
                    aria-label={`${it.kind === "booking" ? `${it.who}, ${serviceName(it.service)}` : it.reason || "Blocked"}, ${fmtMin(toMin(it.start))}`}
                    className="flex cursor-pointer items-center gap-1.5 rounded-[6px] px-1.5 py-0.5 text-left text-[12px] text-ink hover:bg-panel"
                  >
                    <span className="h-2 w-2 flex-none rounded-full" style={{ background: accent }} />
                    <span className="flex-none text-subtle tabular-nums">{fmtMin(toMin(it.start)).replace(" AM", "am").replace(" PM", "pm")}</span>
                    <span className="truncate font-medium">{it.kind === "booking" ? it.who : it.reason || "Blocked"}</span>
                  </button>
                );
              })}
              {items.length > 3 && (
                <button type="button" onClick={() => onDayClick(off)} className="cursor-pointer px-1.5 text-left text-[12px] font-semibold text-indigo hover:underline">
                  +{items.length - 3} more
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** A list of upcoming days, the default on phones. */
export function Agenda({ today, from, days, itemsFor, serviceName, onSelect }: { today: Date; from: number; days: number; itemsFor: (d: number) => CalItem[]; serviceName: (i: number) => string; onSelect: (i: CalItem) => void }) {
  const list = Array.from({ length: days }, (_, i) => from + i).map((d) => ({ d, items: itemsFor(d).sort((x, y) => toMin(x.start) - toMin(y.start)) }));
  const withItems = list.filter((x) => x.items.length);
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white">
      {withItems.length === 0 && <p className="m-0 p-8 text-center text-[15px] text-subtle">No bookings in these days.</p>}
      {withItems.map(({ d, items }) => {
        const date = addDays(today, d);
        return (
          <section key={d} aria-label={fmtDate(date, { weekday: "long", day: "numeric", month: "long" })}>
            <h3 className="sticky top-0 z-10 m-0 flex items-center gap-3 border-b border-line bg-[#FAFAFC]/95 px-4 py-2.5 backdrop-blur">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-semibold ${d === 0 ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-line"}`}>{date.getDate()}</span>
              <span className="flex flex-col leading-tight">
                <span className="text-[14.5px] font-semibold text-ink">{d === 0 ? "Today" : d === 1 ? "Tomorrow" : fmtDate(date, { weekday: "long" })}</span>
                <span className="text-[12.5px] font-normal text-subtle">
                  {fmtDate(date, { day: "numeric", month: "long" })} · {items.filter((i) => i.kind === "booking").length} booked
                </span>
              </span>
            </h3>
            <ul className="m-0 list-none p-0">
              {items.map((it) => {
                const s = toMin(it.start);
                const accent = it.kind === "booking" ? colorOf(it.service)[0] : "#B9BAC4";
                return (
                  <li key={it.id} className="border-b border-line last:border-b-0">
                    <button type="button" onClick={() => onSelect(it)} className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left hover:bg-[#FAFAFC]">
                      <span className="w-[72px] flex-none text-[13px] leading-tight text-ink tabular-nums">
                        <span className="block font-semibold">{fmtMin(s)}</span>
                        <span className="text-subtle">{it.minutes} min</span>
                      </span>
                      <span className="h-10 w-1 flex-none rounded-full" style={{ background: accent }} />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-[14.5px] font-semibold text-ink">{it.kind === "booking" ? it.who : it.reason || "Blocked"}</span>
                        <span className="truncate text-[13px] text-subtle">{it.kind === "booking" ? serviceName(it.service) : "No bookings"}</span>
                      </span>
                      {it.kind === "booking" && it.status === "pending" && <Badge tone="warning">Waiting</Badge>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
