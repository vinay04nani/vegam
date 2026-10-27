"use client";

import { useEffect, useState } from "react";
import { sampleBookings, sampleServiceNames, type Booking } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import type { OnboardingState } from "@/lib/onboarding";
import { Card, PageTitle, SampleTag } from "../ui";

// Bookings by day or week on a time grid built from the business's opening
// hours. Owners can block time and open a booking to move or cancel it.
// Demo: blocks and cancellations live in this component only.

type Block = { id: string; day: number; start: string; minutes: number };
type Item = ({ kind: "booking" } & Booking) | ({ kind: "block" } & Block);

const PX_PER_MIN = 1.1;
const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
};
const fmt = (min: number) => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${((h + 11) % 12) + 1}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`;
};

export function Calendar({ state }: { state: OnboardingState }) {
  const [view, setView] = useState<"day" | "week">("week");
  const [day, setDay] = useState(0);
  const [bookings, setBookings] = useState<Booking[]>(sampleBookings);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [blockForm, setBlockForm] = useState({ day: 0, start: "13:00", minutes: 60 });
  const [showBlock, setShowBlock] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  // Dates are filled in after load so the static HTML matches.
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  const open = toMin(state.assistant.open || "10:00");
  const close = Math.max(open + 60, toMin(state.assistant.close || "19:00"));
  const hours = Array.from({ length: Math.ceil((close - open) / 60) }, (_, i) => open + i * 60);
  const serviceName = (i: number) => state.assistant.services.filter((s) => s.name.trim())[i]?.name ?? sampleServiceNames[i] ?? "Appointment";

  const dayLabel = (d: number, short = false) => {
    if (d === 0) return "Today";
    if (d === 1) return "Tomorrow";
    if (!today) return `In ${d} days`;
    const date = new Date(today.getTime() + d * 86_400_000);
    return date.toLocaleDateString("en-GB", short ? { weekday: "short", day: "numeric" } : { weekday: "long", day: "numeric", month: "short" });
  };

  const items = (d: number): Item[] => [
    ...bookings.filter((b) => b.day === d).map((b) => ({ kind: "booking" as const, ...b })),
    ...blocks.filter((b) => b.day === d).map((b) => ({ kind: "block" as const, ...b })),
  ];

  const days = view === "week" ? [0, 1, 2, 3, 4, 5, 6] : [day];
  const chosen = bookings.find((b) => b.id === selected);
  const count = (d: number) => bookings.filter((b) => b.day === d).length;

  const addBlock = () => {
    setBlocks((bs) => [...bs, { id: `k${bs.length}-${blockForm.day}-${blockForm.start}`, ...blockForm }]);
    setShowBlock(false);
    setView("day");
    setDay(blockForm.day);
  };

  const column = (d: number) => (
    <div key={d} className="relative border-l border-line first:border-l-0" style={{ height: (close - open) * PX_PER_MIN }}>
      {hours.map((h) => (
        <div key={h} aria-hidden="true" className="absolute inset-x-0 border-t border-line/70" style={{ top: (h - open) * PX_PER_MIN }} />
      ))}
      {items(d).map((it) => {
        const top = (toMin(it.start) - open) * PX_PER_MIN;
        const height = Math.max(26, it.minutes * PX_PER_MIN - 3);
        if (it.kind === "block")
          return (
            <div
              key={it.id}
              className="absolute inset-x-1 overflow-hidden rounded-[10px] border border-dashed border-line-strong bg-[repeating-linear-gradient(135deg,#F4F4F8_0,#F4F4F8_6px,#ECEDF2_6px,#ECEDF2_12px)] px-2 py-1 text-[12px] font-medium text-muted"
              style={{ top, height }}
            >
              Blocked
            </div>
          );
        const active = selected === it.id;
        return (
          <button
            key={it.id}
            type="button"
            onClick={() => {
              setSelected(active ? null : it.id);
              setNote(null);
            }}
            className={`absolute inset-x-1 flex cursor-pointer flex-col overflow-hidden rounded-[10px] px-2 py-1 text-left text-[12px] leading-tight transition ${
              active ? "bg-ink text-white" : it.status === "pending" ? "border border-orange/40 bg-[#FFF3E6] text-ink" : "bg-periwinkle-soft text-ink hover:bg-[#E2E5FD]"
            }`}
            style={{ top, height }}
          >
            <span className="truncate font-semibold">{it.who}</span>
            {height > 40 && <span className={`truncate ${active ? "text-white/75" : "text-subtle"}`}>{serviceName(it.service)}</span>}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Calendar" body="Every booking from chats, calls and your booking link, on your opening hours." />
        <SampleTag />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="radiogroup" aria-label="Calendar view" className="hidden rounded-full border border-line-strong bg-white p-1 lg:inline-flex">
          {(["day", "week"] as const).map((v) => (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={view === v}
              onClick={() => setView(v)}
              className={`min-h-9 cursor-pointer rounded-full px-4 text-[14.5px] font-semibold capitalize transition ${view === v ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
            >
              {v}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowBlock((x) => !x)}
          aria-expanded={showBlock}
          className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-full border border-line-strong bg-white px-4 text-[14.5px] font-semibold text-ink hover:border-subtle"
        >
          <Icon name="lock" size={16} />
          Block time
        </button>
      </div>

      {showBlock && (
        <Card title="Block time" className="max-w-[640px]">
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-ink">
              Day
              <select
                value={blockForm.day}
                onChange={(e) => setBlockForm((f) => ({ ...f, day: Number(e.target.value) }))}
                className="min-h-11 rounded-[12px] border border-line-strong bg-white px-3 font-normal"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                  <option key={d} value={d}>
                    {dayLabel(d)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-ink">
              From
              <select value={blockForm.start} onChange={(e) => setBlockForm((f) => ({ ...f, start: e.target.value }))} className="min-h-11 rounded-[12px] border border-line-strong bg-white px-3 font-normal">
                {Array.from({ length: (close - open) / 30 }, (_, i) => open + i * 30).map((m) => (
                  <option key={m} value={`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`}>
                    {fmt(m)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-ink">
              For
              <select value={blockForm.minutes} onChange={(e) => setBlockForm((f) => ({ ...f, minutes: Number(e.target.value) }))} className="min-h-11 rounded-[12px] border border-line-strong bg-white px-3 font-normal">
                {[30, 60, 120, 240].map((m) => (
                  <option key={m} value={m}>
                    {m < 60 ? `${m} min` : `${m / 60} h`}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="m-0 text-[14px] text-subtle">No one can book this time. Your assistant will offer other slots.</p>
          <button type="button" onClick={addBlock} className="min-h-10 w-fit cursor-pointer rounded-full bg-ink px-5 text-[14.5px] font-semibold text-white">
            Block it
          </button>
        </Card>
      )}

      {/* Day picker (always on phones, and for the day view) */}
      <div className={`flex gap-2 overflow-x-auto pb-1 ${view === "week" ? "lg:hidden" : ""}`} role="tablist" aria-label="Day">
        {[0, 1, 2, 3, 4, 5, 6].map((d) => (
          <button
            key={d}
            type="button"
            role="tab"
            aria-selected={day === d}
            onClick={() => setDay(d)}
            className={`flex min-h-14 min-w-[88px] flex-none cursor-pointer flex-col items-center justify-center rounded-[14px] border px-3 text-[13.5px] transition ${
              day === d ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-line-strong"
            }`}
          >
            <span className="font-semibold">{dayLabel(d, true)}</span>
            <span className={day === d ? "text-white/70" : "text-subtle"}>{count(d)} booked</span>
          </button>
        ))}
      </div>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="overflow-hidden rounded-[22px] border border-line bg-white">
          {/* Week header */}
          <div className={`hidden border-b border-line ${view === "week" ? "lg:grid" : ""}`} style={{ gridTemplateColumns: `64px repeat(7, minmax(0,1fr))` }}>
            <span />
            {[0, 1, 2, 3, 4, 5, 6].map((d) => (
              <span key={d} className="border-l border-line px-2 py-2.5 text-center text-[13px] font-semibold text-ink">
                {dayLabel(d, true)}
              </span>
            ))}
          </div>
          <div className="max-h-[640px] overflow-y-auto">
            {/* Phones always show one day; desktop follows the view toggle. */}
            <div className={`grid ${view === "week" ? "lg:hidden" : ""}`} style={{ gridTemplateColumns: "64px minmax(0,1fr)" }}>
              <Hours hours={hours} open={open} />
              {column(day)}
            </div>
            {view === "week" && (
              <div className="hidden lg:grid" style={{ gridTemplateColumns: `64px repeat(7, minmax(0,1fr))` }}>
                <Hours hours={hours} open={open} />
                {days.map((d) => column(d))}
              </div>
            )}
          </div>
        </div>

        <Card title={chosen ? chosen.who : "Booking details"}>
          {chosen ? (
            <div className="flex flex-col gap-3">
              <p className="m-0 text-[15px] text-ink">{serviceName(chosen.service)}</p>
              <p className="m-0 flex items-center gap-2 text-[14.5px] text-subtle">
                <Icon name="clock" size={16} />
                {dayLabel(chosen.day)}, {fmt(toMin(chosen.start))} · {chosen.minutes} min
              </p>
              <p className="m-0 text-[14.5px] text-subtle">
                {chosen.status === "confirmed" ? "Confirmed by the customer. Reminder sent the day before." : "Waiting for the customer to confirm. Reminder sent."}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setNote("In the product you pick a new time and the customer is asked to confirm it.")}
                  className="min-h-10 cursor-pointer rounded-full border border-line-strong bg-white px-4 text-[14px] font-semibold text-ink hover:border-subtle"
                >
                  Reschedule
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookings((bs) => bs.filter((b) => b.id !== chosen.id));
                    setSelected(null);
                  }}
                  className="min-h-10 cursor-pointer rounded-full px-4 text-[14px] font-semibold text-danger hover:bg-[#FDECEC]"
                >
                  Cancel booking
                </button>
              </div>
              {note && (
                <p role="status" className="m-0 rounded-[12px] bg-periwinkle-soft px-3 py-2 text-[13.5px] text-brand">
                  {note}
                </p>
              )}
              <p className="m-0 text-[12.5px] text-subtle">The customer is told on the channel they booked from.</p>
            </div>
          ) : (
            <p className="m-0 text-[14.5px] text-subtle">Select a booking to see details, move it or cancel it.</p>
          )}
          <div className="flex flex-col gap-2 border-t border-line pt-4 text-[13px] text-subtle">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-[4px] bg-periwinkle-soft" /> Confirmed
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-[4px] border border-orange/40 bg-[#FFF3E6]" /> Waiting to confirm
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-[4px] border border-dashed border-line-strong bg-panel" /> Blocked
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Hours({ hours, open }: { hours: number[]; open: number }) {
  return (
    <div className="relative">
      {hours.map((h) => (
        <span key={h} className="absolute right-2 -translate-y-1/2 text-[11.5px] text-subtle first:translate-y-0" style={{ top: (h - open) * PX_PER_MIN + (h === open ? 4 : 0) }}>
          {fmt(h)}
        </span>
      ))}
    </div>
  );
}
