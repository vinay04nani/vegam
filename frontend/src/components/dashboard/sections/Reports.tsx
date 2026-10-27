"use client";

import { useState } from "react";
import { sampleBaseline, sampleMorningReports, sampleWeekWon } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Card, PageTitle, SampleTag } from "../ui";

// The pilot's promise in numbers: week 1 (before Vegam) against the latest
// week, what Vegam won this week, and every morning report.

function Bar({ value, max, tone, label }: { value: number; max: number; tone: "before" | "after"; label: string }) {
  const pct = max > 0 ? Math.max(2, (value / max) * 100) : 2;
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 flex-none text-[12.5px] text-subtle">{tone === "before" ? "Week 1" : "Now"}</span>
      <span className="h-3 flex-1 overflow-hidden rounded-full bg-panel">
        <span className={`block h-full rounded-full ${tone === "before" ? "bg-line-strong" : "bg-[linear-gradient(90deg,#ffb020,#ee7a2e)]"}`} style={{ width: `${pct}%` }} />
      </span>
      <span className={`w-20 flex-none text-right text-[14px] ${tone === "after" ? "font-bold text-ink" : "text-muted"}`}>{label}</span>
    </div>
  );
}

export function Reports() {
  const [open, setOpen] = useState<string | null>(sampleMorningReports[0].day);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Reports" body="Your pilot baseline against today, what Vegam won you this week, and every morning report." />
        <SampleTag />
      </div>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card title="Before and after Vegam">
          <p className="m-0 -mt-2 text-[14px] text-subtle">Week 1 of your pilot measured how things were. “Now” is the last 7 days.</p>
          <div className="flex flex-col gap-5">
            {sampleBaseline.map((m) => {
              const max = Math.max(m.beforeValue, m.afterValue);
              return (
                <div key={m.label} className="flex flex-col gap-2">
                  <span className="flex items-center justify-between gap-2 text-[15px] font-semibold text-ink">
                    {m.label}
                    <span className="text-[12.5px] font-medium text-success">{m.better === "lower" ? "Lower is better" : "Higher is better"}</span>
                  </span>
                  <Bar value={m.beforeValue} max={max} tone="before" label={m.before} />
                  <Bar value={m.afterValue} max={max} tone="after" label={m.after} />
                </div>
              );
            })}
          </div>
        </Card>

        <div className="flex flex-col gap-5">
          <section className="relative isolate flex flex-col gap-4 overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#1B1C2E_0%,#22233A_55%,#2E2220_100%)] p-5 text-white">
            <div aria-hidden="true" className="absolute -right-12 -bottom-16 -z-10 h-48 w-48 rounded-full bg-orange/40 blur-3xl" />
            <div className="flex items-center justify-between gap-2">
              <h2 className="m-0 font-serif text-[24px] leading-tight font-normal">What Vegam won you this week</h2>
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {sampleWeekWon.map((w) => (
                <li key={w.label} className="flex items-baseline gap-3">
                  <span className="w-10 flex-none text-right text-[28px] leading-none font-bold text-accent">{w.value}</span>
                  <span className="text-[15px] text-white/85">{w.label}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 text-[13px] text-white/60">Sent to your WhatsApp every Monday morning.</p>
          </section>

          <Card title="Morning reports">
            <ul className="m-0 flex list-none flex-col p-0">
              {sampleMorningReports.map((r) => {
                const isOpen = open === r.day;
                return (
                  <li key={r.day} className="border-t border-line first:border-t-0">
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : r.day)} className="flex w-full cursor-pointer items-center gap-3 py-3 text-left">
                      <Icon name="sun" size={18} className="flex-none text-orange" />
                      <span className="flex-1 text-[15px] font-medium text-ink">{r.day}, 8:00 AM</span>
                      <span className="text-[13px] text-subtle">
                        {r.enquiries} enquiries · {r.bookings} bookings
                      </span>
                      <Icon name="chevron-down" size={16} className={`flex-none text-subtle transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="mb-3 ml-7 rounded-[14px] bg-panel p-3.5 text-[14.5px] leading-relaxed text-ink">
                        <strong className="font-semibold">Good morning. Here’s yesterday:</strong>
                        <span className="block">
                          {r.enquiries} enquiries, all replied · {r.bookings} new bookings · {r.missed} missed call{r.missed === 1 ? "" : "s"}
                          {r.missed ? ", all followed up" : ""}
                        </span>
                        <span className="mt-1 block">
                          <strong className="font-semibold text-warning">Needs you:</strong> {r.needs}
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
