"use client";

import { useEffect, useMemo, useState } from "react";
import { sampleMorningReports, sampleWeekWon } from "@/content/dashboard";
import { channelGroups, serviceMix, type ChannelFilter, type Range } from "@/content/reports";
import { Icon } from "@/components/ui/Icon";
import { downloadPdf } from "@/lib/pdf";
import { Button, Menu, Modal, SegmentedControl, Skeleton, Tabs, useToast } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { useBranch } from "../branch";
import { Dropdown, Switch } from "./settings/parts";
import { AiPerformance } from "./reports/AiPerformance";
import { Bookings } from "./reports/Bookings";
import { Conversations } from "./reports/Conversations";
import { Overview } from "./reports/Overview";
import { Team } from "./reports/Team";
import { buildModel, change } from "./reports/model";
import { Panel, pct, rupees, seconds } from "./reports/parts";

// Reports: how the front desk is doing, as a dashboard. One filter row (date
// range, channel, compare with the previous period) scopes every tab:
// Overview, Conversations, Bookings, AI performance and Team. Morning reports
// lists what's sent to WhatsApp and any scheduled reports. Export as CSV or
// a PDF summary. All numbers are sample data until the backend exists.

type Tab = "overview" | "conversations" | "bookings" | "ai" | "team" | "reports";

const tabs: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "conversations", label: "Conversations" },
  { id: "bookings", label: "Bookings" },
  { id: "ai", label: "AI performance" },
  { id: "team", label: "Team" },
  { id: "reports", label: "Morning reports" },
];

const ranges: { id: `${Range}`; label: string; long: string }[] = [
  { id: "7", label: "7D", long: "Last 7 days" },
  { id: "30", label: "30D", long: "Last 30 days" },
  { id: "90", label: "90D", long: "Last 90 days" },
  { id: "365", label: "12M", long: "Last 12 months" },
];

type Schedule = { id: string; report: string; every: "Daily" | "Weekly" | "Monthly"; time: string; via: string; fixed?: boolean };

export function Reports({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [tab, setTab] = useState<Tab>("overview");
  const [range, setRange] = useState<Range>(30);
  const [channel, setChannel] = useState<ChannelFilter>("all");
  const [compare, setCompare] = useState(true);
  const [today, setToday] = useState<Date | null>(null);
  const [openReport, setOpenReport] = useState<string | null>(sampleMorningReports[0].day);
  const [scheduling, setScheduling] = useState(false);
  const [draft, setDraft] = useState({ report: "Overview", every: "Weekly" as Schedule["every"], time: "08:00", whatsapp: true, email: true });
  const [schedules, setSchedules] = useState<Schedule[]>([
    { id: "morning", report: "Morning report", every: "Daily", time: "8:00 AM", via: "WhatsApp", fixed: true },
    { id: "won", report: "What Vegam won you", every: "Weekly", time: "Mondays, 8:00 AM", via: "WhatsApp", fixed: true },
  ]);

  // Dates depend on the viewer's clock, so build the numbers after mount.
  useEffect(() => setToday(new Date()), []);
  const { current } = useBranch();
  const factor = current ? current.share || 0.1 : 1;
  const m = useMemo(() => (today ? buildModel(range, channel, today, factor) : null), [today, range, channel, factor]);

  const rangeLong = ranges.find((r) => r.id === String(range))!.long;
  const channelLabel = channel === "all" ? "All channels" : channelGroups.find((c) => c.id === channel)!.label;

  const exportCsv = () => {
    if (!m) return;
    const rows = [["Date", "Enquiries", "Bookings", "Booking value (INR)", "Average first reply (sec)"], ...m.days.map((d) => [d.date.toLocaleDateString("en-CA"), d.enquiries, d.bookings, d.value, d.reply])];
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([rows.map((r) => r.join(",")).join("\n")], { type: "text/csv" }));
    a.download = `vegam-report-${range === 365 ? "12m" : `${range}d`}${channel === "all" ? "" : `-${channel}`}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast("CSV downloaded");
  };

  const exportPdf = () => {
    if (!m) return;
    const { cur, prev } = m;
    const d = (now: number, before: number) => {
      const c = change(now, before);
      return `${c >= 0 ? "+" : "-"}${Math.abs(Math.round(c * 100))}%`;
    };
    downloadPdf(`vegam-report-${range === 365 ? "12m" : `${range}d`}.pdf`, [
      { text: "Vegam report", size: 20, bold: true, gap: 0 },
      { text: `${m.period} · ${current ? `${current.name} · ` : ""}${channelLabel}`, size: 11, gap: 22 },
      { text: `Compared with ${m.prevPeriod}. Sample data.`, size: 9 },
      { text: "Headline numbers", size: 13, bold: true, gap: 34 },
      { text: `Enquiries: ${cur.enquiries}  (${d(cur.enquiries, prev.enquiries)})` },
      { text: `Bookings: ${cur.bookings}  (${d(cur.bookings, prev.bookings)})` },
      { text: `Booking value: ${rupees(cur.value)}  (${d(cur.value, prev.value)})` },
      { text: `Conversion rate: ${pct(cur.conversion, 1)}` },
      { text: `Average first reply: ${seconds(cur.reply)}` },
      { text: "Channels", size: 13, bold: true, gap: 30 },
      ...channelGroups.map((c, j) => ({ text: `${c.label}: ${cur.enqCh[j]} enquiries, ${cur.bookCh[j]} bookings (${pct(cur.bookCh[j] / Math.max(1, cur.enqCh[j]))})` })),
      { text: "Services", size: 13, bold: true, gap: 30 },
      ...serviceMix.map((s) => ({ text: `${s.name}: ${Math.round(s.share * cur.bookings)} bookings` })),
      { text: "Conversations", size: 13, bold: true, gap: 30 },
      { text: "Resolved by the AI: 78%  ·  Handed to your team: 22%  ·  Customer rating: 4.6 / 5" },
    ]);
    toast("PDF downloaded");
  };

  const saveSchedule = () => {
    const via = [draft.whatsapp && "WhatsApp", draft.email && "Email"].filter(Boolean).join(" and ");
    const [h, min] = draft.time.split(":").map(Number);
    const time = `${draft.every === "Weekly" ? "Mondays, " : draft.every === "Monthly" ? "1st of the month, " : ""}${((h + 11) % 12) + 1}:${String(min).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
    setSchedules((s) => [...s, { id: String(Date.now()), report: draft.report, every: draft.every, time, via }]);
    setScheduling(false);
    toast(`${draft.every} ${draft.report.toLowerCase()} report scheduled`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <PageTitle title="Reports" body="How your front desk is doing: enquiries, bookings, the AI’s work and your team." />
        </div>
        <div className="flex items-center gap-2">
          <SampleTag />
          <Button icon="clock" onClick={() => setScheduling(true)}>
            Schedule
          </Button>
          <Menu
            label="Export report"
            align="right"
            triggerClassName="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-[10px] bg-ink px-3.5 text-[14px] font-semibold text-white shadow-[0_1px_2px_rgb(30_31_43/0.2)] transition hover:bg-[#2c2d3d]"
            trigger={
              <>
                <Icon name="download" size={16} />
                Export
                <Icon name="chevron-down" size={14} />
              </>
            }
            items={[
              { label: "Download CSV", icon: "table", onSelect: exportCsv },
              { label: "Download PDF summary", icon: "note", onSelect: exportPdf },
              { label: "", divider: true },
              { label: "Schedule a report…", icon: "clock", onSelect: () => setScheduling(true) },
            ]}
          />
        </div>
      </div>

      <Tabs label="Report" value={tab} onChange={setTab} tabs={tabs} />

      {tab !== "reports" && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
          <SegmentedControl label="Date range" size="sm" value={String(range) as `${Range}`} onChange={(v) => setRange(Number(v) as Range)} options={ranges.map((r) => ({ id: r.id, label: <span title={r.long}>{r.label}</span> }))} />
          <Menu
            label="Filter by channel"
            align="left"
            triggerClassName={`inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-[12px] border px-3 text-[13.5px] font-semibold transition ${channel === "all" ? "border-line-strong bg-white text-ink hover:bg-panel" : "border-ink bg-ink text-white"}`}
            trigger={
              <>
                <Icon name="filter" size={15} />
                {channelLabel}
                <Icon name="chevron-down" size={14} />
              </>
            }
            items={[{ label: "All channels", checked: channel === "all", onSelect: () => setChannel("all") }, { label: "", divider: true }, ...channelGroups.map((c) => ({ label: c.label, checked: channel === c.id, onSelect: () => setChannel(c.id) }))]}
          />
          <button
            type="button"
            role="switch"
            aria-checked={compare}
            aria-label="Compare with the previous period"
            onClick={() => setCompare(!compare)}
            className="inline-flex min-h-[42px] cursor-pointer items-center gap-2.5 rounded-[12px] border border-line-strong bg-white px-3 text-[13.5px] font-semibold text-ink transition hover:bg-panel"
          >
            <span aria-hidden="true" className={`relative block h-[18px] w-[30px] rounded-full transition ${compare ? "bg-ink" : "bg-line-strong"}`}>
              <span className={`absolute top-[2px] left-[2px] h-[14px] w-[14px] rounded-full bg-white shadow-[0_1px_2px_rgb(30_31_43/0.25)] transition ${compare ? "translate-x-3" : ""}`} />
            </span>
            Compare
          </button>
          {m && (
            <p className="m-0 text-[13px] text-subtle lg:ml-auto">
              {current && <span className="font-medium text-ink-soft">{current.name} · </span>}
              <span className="font-medium text-ink-soft">{m.period}</span>
              {compare && <span className="hidden sm:inline"> · vs {m.prevPeriod}</span>}
            </p>
          )}
        </div>
      )}

      {!m ? (
        <div className="grid grid-cols-2 gap-3 xl:grid-cols-5">
          {Array.from({ length: 5 }, (_, i) => (
            <Skeleton key={i} className="h-[112px]" />
          ))}
          <Skeleton className="col-span-2 h-[340px] xl:col-span-5" />
        </div>
      ) : (
        <div key={`${tab}`} className="flex animate-[fade-in_0.2s_ease-out] flex-col gap-4 motion-reduce:animate-none">
          {tab === "overview" && <Overview m={m} compare={compare} onOpen={onOpen} />}
          {tab === "conversations" && <Conversations m={m} compare={compare} />}
          {tab === "bookings" && <Bookings m={m} compare={compare} />}
          {tab === "ai" && <AiPerformance m={m} compare={compare} onOpen={onOpen} />}
          {tab === "team" && <Team m={m} />}
          {tab === "reports" && (
            <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <Panel title="Morning reports" description="Sent to your WhatsApp at 8 AM every day.">
                <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
                  {sampleMorningReports.map((r) => {
                    const isOpen = openReport === r.day;
                    return (
                      <li key={r.day}>
                        <button type="button" aria-expanded={isOpen} onClick={() => setOpenReport(isOpen ? null : r.day)} className="flex w-full cursor-pointer items-center gap-3 py-3 text-left">
                          <Icon name="sun" size={17} className="flex-none text-muted" />
                          <span className="flex-1 text-[14.5px] font-medium text-ink">{r.day}, 8:00 AM</span>
                          <span className="hidden text-[13px] text-subtle sm:inline">
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
              <div className="flex flex-col gap-4">
                <Panel title="What Vegam won you this week" description="Sent every Monday morning.">
                  <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
                    {sampleWeekWon.map((w) => (
                      <li key={w.label} className="flex items-baseline gap-3 py-3">
                        <span className="w-9 flex-none text-right text-[24px] leading-none font-semibold text-ink">{w.value}</span>
                        <span className="text-[14px] text-ink-soft">{w.label}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
                <Panel
                  title="Scheduled reports"
                  description="Delivered automatically"
                  action={
                    <Button icon="plus" onClick={() => setScheduling(true)}>
                      New
                    </Button>
                  }
                >
                  <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
                    {schedules.map((s) => (
                      <li key={s.id} className="flex items-center gap-3 py-3">
                        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[9px] bg-panel text-muted">
                          <Icon name={s.via.includes("Email") ? "mail" : "message"} size={16} />
                        </span>
                        <span className="flex min-w-0 flex-1 flex-col">
                          <span className="truncate text-[14px] font-medium text-ink">{s.report}</span>
                          <span className="truncate text-[12.5px] text-subtle">
                            {s.every} · {s.time} · {s.via}
                          </span>
                        </span>
                        {s.fixed ? (
                          <span className="text-[12px] text-subtle">Built in</span>
                        ) : (
                          <Menu
                            label={`Options for ${s.report}`}
                            items={[
                              {
                                label: "Stop sending",
                                icon: "trash",
                                danger: true,
                                onSelect: () => {
                                  setSchedules((all) => all.filter((x) => x.id !== s.id));
                                  toast("Scheduled report removed");
                                },
                              },
                            ]}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            </div>
          )}
        </div>
      )}

      <Modal
        open={scheduling}
        onClose={() => setScheduling(false)}
        title="Schedule a report"
        footer={
          <>
            <Button variant="ghost" onClick={() => setScheduling(false)}>
              Cancel
            </Button>
            <Button variant="primary" disabled={!draft.whatsapp && !draft.email} onClick={saveSchedule}>
              Schedule
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-5">
          <p className="m-0 text-[14px] text-subtle">A summary of the report, with a PDF attached, sent on a schedule. It uses the channel filter you choose at the time.</p>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Report</span>
            <Dropdown value={draft.report} onChange={(e) => setDraft({ ...draft, report: e.target.value })}>
              {tabs
                .filter((t) => t.id !== "reports")
                .map((t) => (
                  <option key={t.id}>{t.label}</option>
                ))}
            </Dropdown>
          </label>
          <div className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">How often</span>
            <SegmentedControl
              label="How often"
              size="sm"
              value={draft.every}
              onChange={(v) => setDraft({ ...draft, every: v })}
              options={[
                { id: "Daily", label: "Daily" },
                { id: "Weekly", label: "Weekly (Mondays)" },
                { id: "Monthly", label: "Monthly" },
              ]}
            />
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Time</span>
            <Dropdown value={draft.time} onChange={(e) => setDraft({ ...draft, time: e.target.value })} className="w-40">
              {["07:00", "08:00", "09:00", "18:00", "21:00"].map((t) => {
                const h = Number(t.slice(0, 2));
                return (
                  <option key={t} value={t}>
                    {((h + 11) % 12) + 1}:00 {h < 12 ? "AM" : "PM"}
                  </option>
                );
              })}
            </Dropdown>
          </label>
          <div className="flex flex-col gap-2.5">
            <span className="text-[14px] font-medium text-ink">Send to</span>
            <div className="flex items-center justify-between gap-3 text-[14px] text-ink">
              <span className="flex items-center gap-2.5">
                <Icon name="message" size={16} className="text-muted" />
                Your WhatsApp
              </span>
              <Switch checked={draft.whatsapp} onChange={(v) => setDraft({ ...draft, whatsapp: v })} label="Send on WhatsApp" />
            </div>
            <div className="flex items-center justify-between gap-3 text-[14px] text-ink">
              <span className="flex items-center gap-2.5">
                <Icon name="mail" size={16} className="text-muted" />
                owner@example.com
              </span>
              <Switch checked={draft.email} onChange={(v) => setDraft({ ...draft, email: v })} label="Send by email" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
