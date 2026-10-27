"use client";

import { useState } from "react";
import { IconButton } from "../kit";
import { addDays, diffDays, fmtDate, weekday } from "./calendarUtils";

/** A small month picker: today ringed, the selected day filled, dots on days with bookings. */
export function MiniMonth({ today, selected, onSelect, busyDays }: { today: Date; selected: number; onSelect: (offset: number) => void; busyDays: Set<number> }) {
  const sel = addDays(today, selected);
  const [month, setMonth] = useState(new Date(sel.getFullYear(), sel.getMonth(), 1));
  const first = month;
  const gridStart = addDays(first, -weekday(first));
  const cells = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="m-0 text-[14.5px] font-semibold text-ink">{fmtDate(month, { month: "long", year: "numeric" })}</p>
        <div className="flex gap-1">
          <IconButton icon="chevron-left" label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} className="h-8 w-8" />
          <IconButton icon="chevron-right" label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="h-8 w-8" />
        </div>
      </div>
      <div className="grid grid-cols-7 text-center text-[11.5px] font-semibold text-subtle" aria-hidden="true">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="py-1">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5" role="grid" aria-label="Pick a day">
        {cells.map((d) => {
          const off = diffDays(today, d);
          const inMonth = d.getMonth() === month.getMonth();
          const isToday = off === 0;
          const isSel = off === selected;
          return (
            <button
              key={d.toISOString()}
              type="button"
              onClick={() => onSelect(off)}
              aria-label={fmtDate(d, { weekday: "long", day: "numeric", month: "long" })}
              aria-pressed={isSel}
              className={`relative mx-auto flex h-8 w-8 cursor-pointer flex-col items-center justify-center rounded-full text-[13px] transition ${
                isSel ? "bg-ink font-semibold text-white" : isToday ? "font-semibold text-ink ring-1 ring-ink" : inMonth ? "text-ink hover:bg-panel" : "text-faint hover:bg-panel"
              }`}
            >
              {d.getDate()}
              {busyDays.has(off) && <span className={`absolute bottom-1 h-1 w-1 rounded-full ${isSel ? "bg-white" : "bg-orange"}`} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
