"use client";

import { PaymentLinkModal, type PaymentDraft } from "./payments/PaymentLinkModal";
import { locationOf } from "@/content/settings";
import { useBranch } from "../branch";
import { useEffect, useMemo, useState } from "react";
import { sampleBookings, sampleServiceNames, serviceColors, type Booking } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Field, Select, TextInput } from "@/components/setup/fields";
import type { OnboardingState } from "@/lib/onboarding";
import { Avatar, Badge, Button, IconButton, Modal, SegmentedControl, SourceLabel } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { Agenda, MonthGrid, TimeGrid, type Block, type CalItem } from "./CalendarGrid";
import { MiniMonth } from "./MiniMonth";
import { addDays, fmtDate, fmtMin, startOfDay, toMin, toTime, weekday } from "./calendarUtils";

// Bookings on a week, day, month or agenda view, with a mini month, today's
// summary, service filters, and dialogs to book, block time, reschedule and
// cancel.
// Demo: changes are kept in this component only.

type View = "day" | "week" | "month" | "agenda";
type Draft = { id?: string; who: string; service: number; day: number; start: string };

const defaultMinutes = [30, 60, 20, 45];

export function Calendar({ state, onOpen }: { state: OnboardingState; onOpen: (view: string) => void }) {
  // Dates are filled in after load so the static HTML matches.
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState<View>("week");
  const [anchor, setAnchor] = useState(0);
  const [bookings, setBookings] = useState<Booking[]>(sampleBookings);
  const [paying, setPaying] = useState<PaymentDraft | null>(null);
  const { branch } = useBranch();
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [hidden, setHidden] = useState<number[]>([]);
  const [selected, setSelected] = useState<CalItem | null>(null);
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [blockDraft, setBlockDraft] = useState<Omit<Block, "id"> | null>(null);

  useEffect(() => {
    setToday(startOfDay(new Date()));
    if (window.matchMedia("(max-width: 767px)").matches) setView("agenda");
  }, []);

  const open = toMin(state.assistant.open || "10:00");
  const close = Math.max(open + 60, toMin(state.assistant.close || "19:00"));
  const owned = state.assistant.services.filter((s) => s.name.trim());
  const services = (owned.length ? owned.map((s) => ({ name: s.name, minutes: s.minutes || 30 })) : sampleServiceNames.map((name, i) => ({ name, minutes: defaultMinutes[i] }))).slice(0, 4);
  const serviceName = (i: number) => services[i]?.name ?? sampleServiceNames[i] ?? "Appointment";

  const itemsFor = useMemo(
    () => (d: number): CalItem[] => [
      ...bookings.filter((b) => b.day === d && !hidden.includes(b.service) && (branch === "all" || locationOf(b.id) === branch)).map((b) => ({ kind: "booking" as const, ...b })),
      ...blocks.filter((b) => b.day === d).map((b) => ({ kind: "block" as const, ...b })),
    ],
    [bookings, blocks, hidden, branch],
  );
  const busyDays = useMemo(() => new Set(bookings.map((b) => b.day)), [bookings]);

  if (!today) return <div className="min-h-[600px]" aria-busy="true" />;

  const anchorDate = addDays(today, anchor);
  const weekStart = anchor - weekday(anchorDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => weekStart + i);
  const step = view === "day" ? 1 : view === "week" ? 7 : view === "agenda" ? 14 : 0;
  const move = (dir: 1 | -1) => {
    if (view === "month") {
      const target = new Date(anchorDate.getFullYear(), anchorDate.getMonth() + dir, 1);
      setAnchor(Math.round((target.getTime() - today.getTime()) / 86_400_000));
    } else setAnchor((a) => a + dir * step);
  };

  const unit = view === "day" ? "day" : view === "week" ? "week" : view === "month" ? "month" : "two weeks";
  const rangeLabel =
    view === "day"
      ? fmtDate(anchorDate, { weekday: "long", day: "numeric", month: "long", year: "numeric" })
      : view === "month"
        ? fmtDate(anchorDate, { month: "long", year: "numeric" })
        : (() => {
            const a = addDays(today, view === "week" ? weekStart : anchor);
            const b = addDays(a, view === "week" ? 6 : 13);
            return `${fmtDate(a, { day: "numeric", month: "short" })} – ${fmtDate(b, { day: "numeric", month: "short", year: "numeric" })}`;
          })();

  const todays = bookings.filter((b) => b.day === 0);
  const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
  const upNext = todays.filter((b) => toMin(b.start) + b.minutes > nowMin).sort((a, b) => toMin(a.start) - toMin(b.start));
  const tomorrowFirst = bookings.filter((b) => b.day === 1).sort((a, b) => toMin(a.start) - toMin(b.start))[0];
  const until = (b: Booking) => {
    const m = toMin(b.start) - nowMin;
    if (m <= 0) return "Now";
    return m < 60 ? `in ${m} min` : `in ${Math.floor(m / 60)} h ${m % 60 ? `${m % 60} min` : ""}`.trim();
  };

  // ----- Booking dialog -----
  const draftService = draft ? services[draft.service] : undefined;
  const draftMinutes = draft?.id ? (bookings.find((b) => b.id === draft.id)?.minutes ?? draftService?.minutes ?? 30) : (draftService?.minutes ?? 30);
  const clash = draft
    ? itemsFor(draft.day)
        .concat(bookings.filter((b) => b.day === draft.day && hidden.includes(b.service)).map((b) => ({ kind: "booking" as const, ...b })))
        .find((it) => it.id !== draft.id && toMin(draft.start) < toMin(it.start) + it.minutes && toMin(it.start) < toMin(draft.start) + draftMinutes)
    : undefined;
  const slots = Array.from({ length: Math.floor((close - open) / 30) }, (_, i) => open + i * 30).filter((m) => m + 15 <= close);

  const saveDraft = () => {
    if (!draft || !draft.who.trim() || clash) return;
    if (draft.id) {
      setBookings((bs) => bs.map((b) => (b.id === draft.id ? { ...b, who: draft.who.trim(), service: draft.service, day: draft.day, start: draft.start } : b)));
    } else {
      setBookings((bs) => [
        ...bs,
        { id: `n${Date.now()}`, day: draft.day, start: draft.start, minutes: draftMinutes, service: draft.service, who: draft.who.trim(), phone: "Added by your team", channel: "Booking link", status: "confirmed" },
      ]);
    }
    setAnchor(draft.day);
    if (view === "month" || view === "agenda") setView(window.matchMedia("(max-width: 767px)").matches ? "agenda" : "day");
    setDraft(null);
    setSelected(null);
  };

  const dayOptions = Array.from({ length: 21 }, (_, i) => i - 3 + Math.max(0, anchor));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Calendar" body="Every booking from chats, calls and your booking link, on your opening hours." />
        <SampleTag />
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => setAnchor(0)}>Today</Button>
        <IconButton icon="chevron-left" label={`Previous ${unit}`} onClick={() => move(-1)} />
        <IconButton icon="chevron-right" label={`Next ${unit}`} onClick={() => move(1)} />
        <h2 className="m-0 ml-1 min-w-0 flex-1 truncate text-[18px] font-semibold text-ink sm:text-[20px]" aria-live="polite">
          {rangeLabel}
        </h2>
        <div className="hidden md:block">
          <SegmentedControl
            label="Calendar view"
            value={view}
            onChange={setView}
            options={[
              { id: "day", label: "Day" },
              { id: "week", label: "Week" },
              { id: "month", label: "Month" },
              { id: "agenda", label: "Agenda" },
            ]}
          />
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="md:hidden">
            <SegmentedControl
              label="Calendar view"
              size="sm"
              value={view === "agenda" ? "agenda" : "day"}
              onChange={setView}
              options={[
                { id: "agenda", label: "Agenda" },
                { id: "day", label: "Day" },
              ]}
            />
          </div>
          <Button icon="lock" onClick={() => setBlockDraft({ day: anchor, start: toTime(Math.min(close - 60, Math.max(open, 13 * 60))), minutes: 60, reason: "" })} className="ml-auto md:ml-0">
            <span className="sr-only sm:not-sr-only">Block time</span>
          </Button>
          <Button variant="primary" icon="plus" onClick={() => setDraft({ who: "", service: 0, day: Math.max(0, anchor), start: toTime(slots[0] ?? open) })}>
            New booking
          </Button>
        </div>
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-[248px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="hidden flex-col gap-4 lg:flex">
          <div className="rounded-[18px] border border-line bg-white p-4">
            <MiniMonth
              key={`${anchorDate.getFullYear()}-${anchorDate.getMonth()}`}
              today={today}
              selected={anchor}
              busyDays={busyDays}
              onSelect={(d) => {
                setAnchor(d);
                if (view === "month") setView("day");
              }}
            />
          </div>
          <div className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-4">
            <div className="flex flex-col gap-1.5">
              <p className="m-0 text-[14.5px] font-semibold text-ink">Up next</p>
              <p className="m-0 flex flex-wrap items-center gap-1.5 text-[12.5px] text-subtle">
                {todays.length} booking{todays.length === 1 ? "" : "s"} today
                {todays.some((b) => b.status === "pending") && <Badge tone="warning">{todays.filter((b) => b.status === "pending").length} waiting</Badge>}
              </p>
            </div>
            {upNext.length ? (
              <ul className="m-0 flex list-none flex-col gap-1 p-0">
                {upNext.slice(0, 4).map((b, i) => (
                  <li key={b.id}>
                    <button
                      type="button"
                      onClick={() => setSelected({ kind: "booking", ...b })}
                      className={`flex w-full cursor-pointer items-center gap-2.5 rounded-[12px] p-2 text-left transition hover:bg-panel ${i === 0 ? "bg-[#F7F8FF]" : ""}`}
                    >
                      <span className="w-[60px] flex-none text-[12.5px] leading-tight font-semibold whitespace-nowrap text-ink tabular-nums">{fmtMin(toMin(b.start))}</span>
                      <span className="h-8 w-[3px] flex-none rounded-full" style={{ background: serviceColors[b.service % serviceColors.length][0] }} />
                      <span className="flex min-w-0 flex-1 flex-col leading-tight">
                        <span className="truncate text-[13.5px] font-semibold text-ink">{b.who}</span>
                        <span className="truncate text-[12px] text-subtle">{i === 0 ? until(b) : serviceName(b.service)}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="m-0 text-[13.5px] text-subtle">
                Nothing else today.
                {tomorrowFirst && (
                  <>
                    {" "}
                    Tomorrow starts with <strong className="font-semibold text-ink">{tomorrowFirst.who}</strong> at {fmtMin(toMin(tomorrowFirst.start))}.
                  </>
                )}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2.5 rounded-[18px] border border-line bg-white p-4">
            <p className="m-0 text-[14.5px] font-semibold text-ink">Services</p>
            {services.map((s, i) => {
              const [accent] = serviceColors[i % serviceColors.length];
              const on = !hidden.includes(i);
              return (
                <label key={s.name} className="flex cursor-pointer items-center gap-2.5 text-[14px] text-ink">
                  <input type="checkbox" checked={on} onChange={() => setHidden((h) => (on ? [...h, i] : h.filter((x) => x !== i)))} className="sr-only" />
                  <span className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[5px] border-2 text-white" style={{ borderColor: accent, background: on ? accent : "white" }}>
                    {on && <Icon name="check" size={12} strokeWidth={3} className="[&_circle]:hidden" />}
                  </span>
                  <span className="flex-1 truncate">{s.name}</span>
                  <span className="text-[12.5px] text-subtle">{s.minutes} min</span>
                </label>
              );
            })}
            <div className="mt-1 flex flex-col gap-2 border-t border-line pt-3 text-[12.5px] text-subtle">
              <span className="flex items-center gap-2">
                <span className="relative h-4 w-6 overflow-hidden rounded-[4px] bg-[#EEF0FF]">
                  <span className="absolute inset-y-0 left-0 w-[3px] bg-[#4A47E0]" />
                </span>
                Confirmed
              </span>
              <span className="flex items-center gap-2">
                <span className="relative flex h-4 w-6 items-center justify-center overflow-hidden rounded-[4px] bg-[#EEF0FF] text-[#1E1C6E] shadow-[inset_0_0_0_1px_#4A47E0]">
                  <Icon name="clock" size={10} />
                </span>
                Waiting to confirm
              </span>
              <span className="flex items-center gap-2">
                <span className="h-4 w-6 rounded-[4px] bg-[repeating-linear-gradient(135deg,#F1F2F6_0,#F1F2F6_3px,#E6E7EE_3px,#E6E7EE_6px)]" />
                Blocked
              </span>
            </div>
          </div>
        </aside>

        {/* Main view */}
        <div className="min-w-0">
          {/* Phone week strip */}
          {view === "day" && (
            <div className="mb-3 flex gap-1.5 overflow-x-auto md:hidden" role="tablist" aria-label="Day">
              {weekDays.map((d) => {
                const date = addDays(today, d);
                const sel = d === anchor;
                return (
                  <button
                    key={d}
                    type="button"
                    role="tab"
                    aria-selected={sel}
                    onClick={() => setAnchor(d)}
                    className={`flex min-w-[48px] flex-1 cursor-pointer flex-col items-center gap-0.5 rounded-[12px] py-2 text-[12px] ${sel ? "bg-ink text-white" : d === 0 ? "bg-white text-ink ring-1 ring-ink" : "bg-white text-ink ring-1 ring-line"}`}
                  >
                    <span className={sel ? "text-white/75" : "text-subtle"}>{fmtDate(date, { weekday: "narrow" })}</span>
                    <span className="text-[15px] font-semibold">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>
          )}

          {view === "week" && (
            <TimeGrid today={today} days={weekDays} itemsFor={itemsFor} open={open} close={close} serviceName={serviceName} onSelect={setSelected} onDayClick={(d) => { setAnchor(d); setView("day"); }} />
          )}
          {view === "day" && <TimeGrid today={today} days={[anchor]} itemsFor={itemsFor} open={open} close={close} serviceName={serviceName} onSelect={setSelected} />}
          {view === "month" && (
            <MonthGrid today={today} anchor={anchor} itemsFor={itemsFor} serviceName={serviceName} onSelect={setSelected} onDayClick={(d) => { setAnchor(d); setView("day"); }} />
          )}
          {view === "agenda" && <Agenda today={today} from={anchor} days={14} itemsFor={itemsFor} serviceName={serviceName} onSelect={setSelected} />}
        </div>
      </div>

      {/* Booking details */}
      <Modal
        open={!!selected}
        onClose={() => {
          setSelected(null);
          setConfirmCancel(false);
        }}
        title={selected?.kind === "block" ? "Blocked time" : "Booking"}
        width={460}
        footer={
          selected?.kind === "booking" ? (
            confirmCancel ? (
              <>
                <span className="mr-auto text-[14px] font-semibold text-danger">Cancel this booking?</span>
                <Button variant="ghost" onClick={() => setConfirmCancel(false)}>
                  Keep it
                </Button>
                <Button
                  variant="primary"
                  className="bg-danger hover:bg-[#a30d0d]"
                  onClick={() => {
                    setBookings((bs) => bs.filter((b) => b.id !== selected.id));
                    setSelected(null);
                    setConfirmCancel(false);
                  }}
                >
                  Cancel booking
                </Button>
              </>
            ) : (
              <>
                <Button variant="danger" onClick={() => setConfirmCancel(true)} className="mr-auto">
                  Cancel
                </Button>
                <Button icon="message" onClick={() => onOpen("inbox")}>
                  Message
                </Button>
                <Button variant="primary" icon="calendar" onClick={() => {
                    if (selected?.kind !== "booking") return;
                    setDraft({ id: selected.id, who: selected.who, service: selected.service, day: selected.day, start: selected.start });
                    setSelected(null);
                  }}>
                  Reschedule
                </Button>
              </>
            )
          ) : (
            <Button
              variant="danger"
              onClick={() => {
                setBlocks((bs) => bs.filter((b) => b.id !== selected?.id));
                setSelected(null);
              }}
            >
              Remove block
            </Button>
          )
        }
      >
        {selected?.kind === "booking" && (
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-3 w-3 flex-none rounded-[4px]" style={{ background: serviceColors[selected.service % serviceColors.length][0] }} />
              <div className="flex flex-col gap-0.5">
                <p className="m-0 text-[18px] font-semibold text-ink">{serviceName(selected.service)}</p>
                <p className="m-0 text-[14.5px] text-subtle">
                  {fmtDate(addDays(today, selected.day), { weekday: "long", day: "numeric", month: "long" })} · {fmtMin(toMin(selected.start))} – {fmtMin(toMin(selected.start) + selected.minutes)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-[14px] border border-line p-3">
              <Avatar name={selected.who} size={40} />
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-[15px] font-semibold text-ink">{selected.who}</span>
                <span className="text-[13.5px] text-subtle">{selected.phone}</span>
              </div>
              <Badge tone={selected.status === "confirmed" ? "success" : "warning"} dot>
                {selected.status === "confirmed" ? "Confirmed" : "Waiting"}
              </Badge>
            </div>
            <dl className="m-0 grid grid-cols-2 gap-x-4 gap-y-3 text-[14px]">
              <div>
                <dt className="text-subtle">Booked from</dt>
                <dd className="m-0 mt-1">
                  <SourceLabel source={selected.channel} />
                </dd>
              </div>
              <div>
                <dt className="text-subtle">Reminder</dt>
                <dd className="m-0 mt-1 text-ink">{selected.day > 0 ? "Goes out the day before" : "Sent"}</dd>
              </div>
              {selected.note && (
                <div className="col-span-2">
                  <dt className="text-subtle">Note</dt>
                  <dd className="m-0 mt-1 text-ink">{selected.note}</dd>
                </div>
              )}
            </dl>
            <button
              type="button"
              onClick={() => {
                if (selected?.kind !== "booking") return;
                setPaying({ who: selected.who, phone: selected.phone, item: serviceName(selected.service), amount: owned[selected.service]?.price ? Math.round(owned[selected.service].price * 0.25) : 300, purpose: "Deposit" });
                setSelected(null);
              }}
              className="flex cursor-pointer items-center gap-3 rounded-[12px] border border-dashed border-line-strong px-3 py-2.5 text-left transition hover:border-ink hover:bg-panel"
            >
              <Icon name="wallet" size={17} className="flex-none text-muted" />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14px] font-semibold text-ink">Request a deposit</span>
                <span className="text-[12.5px] text-subtle">Send a Stripe payment link on WhatsApp</span>
              </span>
              <Icon name="chevron-right" size={16} className="text-muted" />
            </button>
          </div>
        )}
        {selected?.kind === "block" && (
          <p className="m-0 text-[15px] text-ink">
            {selected.reason || "Blocked"} · {fmtDate(addDays(today, selected.day), { weekday: "long", day: "numeric", month: "long" })}, {fmtMin(toMin(selected.start))} – {fmtMin(toMin(selected.start) + selected.minutes)}. No one can book this time.
          </p>
        )}
      </Modal>

      {/* New booking / reschedule */}
      <Modal
        open={!!draft}
        onClose={() => setDraft(null)}
        title={draft?.id ? "Reschedule booking" : "New booking"}
        footer={
          <>
            <Button variant="ghost" onClick={() => setDraft(null)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={saveDraft} disabled={!draft?.who.trim() || !!clash}>
              {draft?.id ? "Move booking" : "Book"}
            </Button>
          </>
        }
      >
        {draft && (
          <div className="flex flex-col gap-4">
            <Field label="Customer">
              <TextInput value={draft.who} onChange={(e) => setDraft({ ...draft, who: e.target.value })} placeholder="Name or number" autoFocus={!draft.id} />
            </Field>
            <Field label="Service">
              <Select value={draft.service} onChange={(e) => setDraft({ ...draft, service: Number(e.target.value) })}>
                {services.map((s, i) => (
                  <option key={s.name} value={i}>
                    {s.name} · {s.minutes} min
                  </option>
                ))}
              </Select>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Day">
                <Select value={draft.day} onChange={(e) => setDraft({ ...draft, day: Number(e.target.value) })}>
                  {dayOptions.map((d) => (
                    <option key={d} value={d}>
                      {d === 0 ? "Today" : d === 1 ? "Tomorrow" : fmtDate(addDays(today, d), { weekday: "short", day: "numeric", month: "short" })}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Time">
                <Select value={draft.start} onChange={(e) => setDraft({ ...draft, start: e.target.value })}>
                  {slots.map((m) => (
                    <option key={m} value={toTime(m)}>
                      {fmtMin(m)}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>
            {clash ? (
              <p role="alert" className="m-0 flex items-center gap-2 rounded-[12px] bg-[#FDECEC] px-3.5 py-2.5 text-[14px] text-danger">
                <Icon name="clock" size={16} />
                That time overlaps with {clash.kind === "booking" ? clash.who : "blocked time"} ({fmtMin(toMin(clash.start))}).
              </p>
            ) : (
              <p className="m-0 text-[13.5px] text-subtle">
                {fmtMin(toMin(draft.start))} – {fmtMin(toMin(draft.start) + draftMinutes)}. The customer gets a confirmation on WhatsApp and a reminder the day before.
              </p>
            )}
          </div>
        )}
      </Modal>

      {/* Block time */}
      <Modal
        open={!!blockDraft}
        onClose={() => setBlockDraft(null)}
        title="Block time"
        footer={
          <>
            <Button variant="ghost" onClick={() => setBlockDraft(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (!blockDraft) return;
                setBlocks((bs) => [...bs, { id: `k${Date.now()}`, ...blockDraft }]);
                setAnchor(blockDraft.day);
                if (view === "month") setView("week");
                setBlockDraft(null);
              }}
            >
              Block it
            </Button>
          </>
        }
      >
        {blockDraft && (
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Day">
                <Select value={blockDraft.day} onChange={(e) => setBlockDraft({ ...blockDraft, day: Number(e.target.value) })}>
                  {dayOptions.map((d) => (
                    <option key={d} value={d}>
                      {d === 0 ? "Today" : d === 1 ? "Tomorrow" : fmtDate(addDays(today, d), { weekday: "short", day: "numeric", month: "short" })}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="From">
                <Select value={blockDraft.start} onChange={(e) => setBlockDraft({ ...blockDraft, start: e.target.value })}>
                  {slots.map((m) => (
                    <option key={m} value={toTime(m)}>
                      {fmtMin(m)}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="For">
                <Select value={blockDraft.minutes} onChange={(e) => setBlockDraft({ ...blockDraft, minutes: Number(e.target.value) })}>
                  {[30, 60, 120, 240].map((m) => (
                    <option key={m} value={m}>
                      {m < 60 ? `${m} min` : `${m / 60} h`}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>
            <Field label="Reason (optional)">
              <TextInput value={blockDraft.reason} onChange={(e) => setBlockDraft({ ...blockDraft, reason: e.target.value })} placeholder="e.g. Staff meeting" />
            </Field>
            <p className="m-0 text-[13.5px] text-subtle">No one can book this time. Your assistant will offer other slots.</p>
          </div>
        )}
      </Modal>
      <PaymentLinkModal open={!!paying} onClose={() => setPaying(null)} initial={paying ?? undefined} business={state.business.name || undefined} />
    </div>
  );
}
