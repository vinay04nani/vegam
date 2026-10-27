"use client";

import { useEffect, useRef, useState } from "react";
import { serviceColors, type Booking } from "@/content/dashboard";
import { Badge } from "../kit";
import { addDays, diffDays, fmtDate, fmtMin, layoutColumns, toMin, weekday } from "./calendarUtils";

// The calendar's three views: a time grid (day or week), a month grid and an
// agenda list. All take day offsets from today, like the bookings do.

export type Block = { id: string; day: number; start: string; minutes: number; reason: string };
export type CalItem = ({ kind: "booking" } & Booking) | ({ kind: "block" } & Block);

const HOUR_PX = 60;
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

function EventBlock({ item, top, height, left, width, serviceName, onSelect }: { item: CalItem; top: number; height: number; left: string; width: string; serviceName: (i: number) => string; onSelect: (i: CalItem) => void }) {
  const start = toMin(item.start);
  const range = `${fmtMin(start)} – ${fmtMin(start + item.minutes)}`;
  if (item.kind === "block") {
    return (
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="absolute cursor-pointer overflow-hidden rounded-[8px] border border-line-strong bg-[repeating-linear-gradient(135deg,#F4F4F8_0,#F4F4F8_6px,#E9EAF0_6px,#E9EAF0_12px)] px-2 py-1 text-left text-[12px] text-muted"
        style={{ top, height, left, width }}
      >
        <span className="block truncate font-semibold">{item.reason || "Blocked"}</span>
        {height > 36 && <span className="block truncate">{range}</span>}
      </button>
    );
  }
  const [accent, tint, text] = colorOf(item.service);
  const pending = item.status === "pending";
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`${item.who}, ${serviceName(item.service)}, ${range}${pending ? ", waiting to confirm" : ""}`}
      className="group absolute flex cursor-pointer flex-col overflow-hidden rounded-[8px] py-1 pr-1.5 pl-2.5 text-left text-[12px] leading-tight shadow-[0_1px_2px_rgb(30_31_43/0.06)] transition hover:z-10 hover:shadow-[0_6px_16px_rgb(30_31_43/0.14)]"
      style={{
        top,
        height,
        left,
        width,
        background: pending ? "#FFFFFF" : tint,
        color: text,
        border: pending ? `1.5px dashed ${accent}` : `1px solid ${tint}`,
      }}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px]" style={{ background: accent }} />
      <span className="truncate font-semibold">{item.who}</span>
      {height >= 38 && <span className="truncate opacity-85">{serviceName(item.service)}</span>}
      {height >= 54 && <span className="truncate opacity-75">{range}</span>}
    </button>
  );
}

/** Day or week time grid with opening hours, a now line and side-by-side overlaps. */
export function TimeGrid({ today, days, itemsFor, open, close, serviceName, onSelect, onDayClick }: GridProps) {
  const startH = Math.max(0, Math.floor(open / 60) - 1);
  const endH = Math.min(24, Math.ceil(close / 60) + 1);
  const startMin = startH * 60;
  const total = (endH - startH) * HOUR_PX;
  const hours = Array.from({ length: endH - startH }, (_, i) => startH + i);
  const pos = (min: number) => ((min - startMin) / 60) * HOUR_PX;
  const scroller = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(t);
  }, []);

  // Open scrolled to the current time, or to opening time.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const n = new Date();
    const target = days.includes(0) ? n.getHours() * 60 + n.getMinutes() - 90 : open - 30;
    el.scrollTop = Math.max(0, pos(target));
  }, [days.join(",")]);

  const nowMin = now ? now.getHours() * 60 + now.getMinutes() : -1;
  const cols = `56px repeat(${days.length}, minmax(0, 1fr))`;

  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-white">
      {/* Day headers */}
      <div className="grid border-b border-line" style={{ gridTemplateColumns: cols }}>
        <span className="flex items-end justify-center pb-2 text-[11px] text-subtle">{now ? fmtDate(now, { timeZoneName: "short" }).split(" ").pop() : ""}</span>
        {days.map((d) => {
          const date = addDays(today, d);
          const isToday = d === 0;
          return (
            <button
              key={d}
              type="button"
              onClick={() => onDayClick?.(d)}
              disabled={!onDayClick}
              className="flex flex-col items-center gap-1 border-l border-line py-2.5 enabled:cursor-pointer enabled:hover:bg-[#FAFAFC]"
            >
              <span className={`text-[11.5px] font-semibold tracking-[0.08em] uppercase ${isToday ? "text-ink" : "text-subtle"}`}>{fmtDate(date, { weekday: "short" })}</span>
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[16px] font-semibold ${isToday ? "bg-ink text-white" : "text-ink"}`}>{date.getDate()}</span>
            </button>
          );
        })}
      </div>

      <div ref={scroller} className="max-h-[620px] overflow-y-auto">
        <div className="relative grid" style={{ gridTemplateColumns: cols, height: total }}>
          {/* Hour labels */}
          <div className="relative">
            {hours.map((h) =>
              h === startH ? null : (
                <span key={h} className="absolute right-2 -translate-y-1/2 text-[11px] font-medium text-subtle" style={{ top: pos(h * 60) }}>
                  {fmtMin(h * 60, false)}
                </span>
              ),
            )}
          </div>

          {days.map((d) => {
            const items = itemsFor(d);
            const layout = layoutColumns(items);
            return (
              <div key={d} className="relative border-l border-line">
                {/* Closed hours shading */}
                <div aria-hidden="true" className="absolute inset-x-0 top-0 bg-[#F7F7FA]" style={{ height: pos(open) }} />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-[#F7F7FA]" style={{ top: pos(close) }} />
                {/* Hour and half-hour lines */}
                {hours.map((h) => (
                  <div key={h} aria-hidden="true">
                    <div className="absolute inset-x-0 border-t border-line" style={{ top: pos(h * 60) }} />
                    <div className="absolute inset-x-0 border-t border-dashed border-line/70" style={{ top: pos(h * 60 + 30) }} />
                  </div>
                ))}
                {items.map((it) => {
                  const s = toMin(it.start);
                  const { col, cols: n } = layout.get(it.id) ?? { col: 0, cols: 1 };
                  const w = 100 / n;
                  return (
                    <EventBlock
                      key={it.id}
                      item={it}
                      top={pos(s) + 1}
                      height={Math.max(22, (it.minutes / 60) * HOUR_PX - 3)}
                      left={`calc(${col * w}% + 3px)`}
                      width={`calc(${w}% - 6px)`}
                      serviceName={serviceName}
                      onSelect={onSelect}
                    />
                  );
                })}
                {d === 0 && nowMin >= startMin && nowMin <= endH * 60 && (
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 z-20 flex items-center" style={{ top: pos(nowMin) }}>
                    <span className="-ml-1.5 h-3 w-3 rounded-full bg-[#E5484D]" />
                    <span className="h-[2px] flex-1 bg-[#E5484D]" />
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
