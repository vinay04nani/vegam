"use client";

import { useEffect, useState } from "react";
import { checklist, type ChecklistItem } from "@/content/onboarding";
import { sampleConversations, sampleNeedsYou, sampleToday, sampleUpcoming } from "@/content/dashboard";
import { plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { VegamMark } from "@/components/ui/Kolam";
import { isIncluded, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { Card, Ring, SampleTag, pilotDay } from "./ui";

/** Optional tasks after go-live. Tasks with their own page open it; the rest are marked done in the demo. */
function GrowCard({ items, done, onDone, onOpen }: { items: ChecklistItem[]; done: string[]; onDone: (id: string) => void; onOpen: (view: string) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const left = items.filter((i) => !done.includes(i.id));
  const count = items.length - left.length;

  if (!left.length) {
    return (
      <Card title="Grow with Vegam">
        <p className="m-0 flex items-center gap-2 text-[15px] text-success">
          <Icon name="check" size={20} />
          Everything is set up. Nice work.
        </p>
      </Card>
    );
  }

  return (
    <Card title="Grow with Vegam" extra={<Ring done={count} total={items.length} />}>
      <ul className="m-0 flex list-none flex-col p-0">
        {items.map((item) => {
          const isDone = done.includes(item.id);
          const isOpen = open === item.id;
          return (
            <li key={item.id} className="border-t border-line first:border-t-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full cursor-pointer items-center gap-3 py-3 text-left"
              >
                <span className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 ${isDone ? "border-success bg-success text-white" : "border-line-strong"}`}>
                  {isDone && <Icon name="check" size={13} strokeWidth={2.8} className="[&_circle]:hidden" />}
                </span>
                <span className={`flex-1 text-[15px] font-medium ${isDone ? "text-subtle line-through" : "text-ink"}`}>{item.title}</span>
                {!isDone && (
                  <span className={`text-[12px] font-semibold whitespace-nowrap ${item.priority === "Must" ? "text-warning" : "text-muted"}`}>{item.priority}</span>
                )}
                <Icon name="chevron-down" size={16} className={`flex-none text-subtle transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="flex flex-col gap-3 pb-4 pl-9">
                  <p className="m-0 text-[14.5px] leading-relaxed text-subtle">{item.body}</p>
                  {!isDone && (
                    <button
                      type="button"
                      onClick={() => {
                        if (item.view) onOpen(item.view);
                        else onDone(item.id);
                        setOpen(null);
                      }}
                      className="inline-flex min-h-10 w-fit cursor-pointer items-center gap-1.5 rounded-full bg-ink px-4 text-[14px] font-semibold text-white"
                    >
                      {item.action}
                      {!item.view && <span className="font-normal text-white/70">(demo: marks done)</span>}
                    </button>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

type Props = {
  state: OnboardingState;
  update: (fn: (s: OnboardingState) => OnboardingState) => void;
  plan: PlanId;
  /** "demo": a visitor who hasn't signed up. "preview": an owner looking ahead from the setup guide. */
  mode: "live" | "demo" | "preview";
  welcome: boolean;
  onDismissWelcome: () => void;
  onOpen: (view: string) => void;
};

/** Home once the assistant is live: pilot progress, optional setup, what needs the owner, and today. */
export function LiveHome({ state, update, plan, mode, welcome, onDismissWelcome, onOpen }: Props) {
  // Date-dependent text is filled in after load so the static HTML matches.
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
  }, []);

  const day = mode === "live" ? pilotDay(state.liveAt) : 3;
  const items = checklist.filter((c) => isIncluded(c.minPlan, plan));
  const waMeta = mode === "live" && state.channels.whatsapp === "pending";
  const hour = now?.getHours() ?? 9;
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  const markDone = (id: string) =>
    update((s) => ({
      ...s,
      checklistDone: [...new Set([...s.checklistDone, id])],
      channels: id === "meta" ? { ...s.channels, whatsapp: "connected" } : s.channels,
    }));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="m-0 min-h-[1.5em] text-[15px] text-subtle">{now?.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}</p>
          <h1 className="m-0 mt-1 font-serif text-[clamp(30px,3vw,42px)] leading-tight font-normal tracking-[-0.02em] text-ink">
            {greeting}, {state.business.name || "Nila & Co"}
          </h1>
        </div>
      </div>

      {welcome && (
        <div role="status" className="relative isolate flex items-start gap-4 overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#1B1C2E_0%,#22233A_55%,#2E2220_100%)] p-5 text-white">
          <div aria-hidden="true" className="absolute -right-10 -bottom-16 -z-10 h-44 w-44 rounded-full bg-orange/40 blur-3xl" />
          <VegamMark size={34} strokeWidth={7} className="mt-0.5 flex-none text-accent" />
          <div className="flex flex-1 flex-col gap-1">
            <p className="m-0 font-serif text-[24px] leading-tight">You’re live.</p>
            <p className="m-0 text-[15px] text-white/75">Your assistant is answering. Your first morning report arrives tomorrow at 8 AM. A few things are left below.</p>
          </div>
          <button type="button" aria-label="Dismiss" onClick={onDismissWelcome} className="cursor-pointer rounded-full p-1 text-white/70 hover:text-white">
            <Icon name="close" size={18} />
          </button>
        </div>
      )}

      {mode === "demo" && (
        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[16px] bg-periwinkle-soft px-4 py-3 text-[15px] text-brand">
          This is a demo account with sample data.
          <a href={withBase("/onboarding/")} className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
            Set up your own front desk
            <Icon name="chevron-right" size={16} />
          </a>
        </p>
      )}
      {mode === "preview" && (
        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[16px] bg-periwinkle-soft px-4 py-3 text-[15px] text-brand">
          A preview of your Home once you’re live, with sample data.
          <button type="button" onClick={() => onOpen("home")} className="inline-flex cursor-pointer items-center gap-1 font-semibold underline-offset-4 hover:underline">
            Back to setup
            <Icon name="chevron-right" size={16} />
          </button>
        </p>
      )}

      {waMeta && (
        <p className="m-0 flex items-start gap-2.5 rounded-[16px] bg-[#FFF3E6] px-4 py-3 text-[15px] text-ink-soft">
          <Icon name="clock" size={19} className="mt-0.5 flex-none text-warning" />
          <span>
            <strong className="font-semibold text-ink">WhatsApp is waiting for Meta’s approval.</strong> Your other channels are working. We’ll message you when it’s approved.
          </span>
        </p>
      )}

      {/* Pilot progress */}
      <section className="flex flex-col gap-3 rounded-[22px] border border-line bg-white p-5" aria-label="Pilot progress">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="m-0 text-[17px] font-semibold text-ink">
            Pilot · day {day} of 30
          </p>
          <p className="m-0 text-[14.5px] text-subtle">{day <= 7 ? "Week 1: measuring your baseline" : "Weeks 2–4: Vegam runs your front desk"}</p>
        </div>
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: 30 }, (_, i) => (
            <span key={i} className={`h-2 flex-1 rounded-full ${i < day ? (i < 7 ? "bg-periwinkle" : "bg-orange") : "bg-line"} ${i === 6 ? "mr-1.5" : ""}`} />
          ))}
        </div>
        <p className="m-0 text-[14px] text-subtle">
          {plans.find((p) => p.id === plan)?.name} plan, free until day 30. Add a payment method by day 25 to keep going.
        </p>
      </section>

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col gap-5">
          <GrowCard items={items} done={state.checklistDone} onDone={markDone} onOpen={onOpen} />
          <Card title="Needs you" extra={<SampleTag />}>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {sampleNeedsYou.map((n) => (
                <li key={n.text} className="flex items-start gap-3 rounded-[16px] bg-panel p-3.5">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-orange" />
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-[13px] text-subtle">{n.who}</span>
                    <span className="text-[15px] text-ink">{n.text}</span>
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-warning">{n.tag}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="flex flex-col gap-5">
          <Card title="Yesterday" extra={<SampleTag />}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {sampleToday.map((t) => (
                <div key={t.label} className="flex flex-col gap-0.5 rounded-[16px] bg-panel p-3.5">
                  <span className="text-[28px] leading-none font-bold tracking-[-0.02em] text-ink">{t.value}</span>
                  <span className="mt-1.5 text-[14px] font-semibold text-ink">{t.label}</span>
                  <span className="text-[12.5px] text-subtle">{t.note}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card title="Today’s bookings" extra={<SampleTag />}>
            <ul className="m-0 flex list-none flex-col p-0">
              {sampleUpcoming.map((b) => (
                <li key={b.time} className="flex items-center gap-4 border-t border-line py-2.5 first:border-t-0">
                  <span className="w-12 font-mono text-[14px] text-ink">{b.time}</span>
                  <span className="flex-1 text-[15px] text-ink">{b.name}</span>
                  <span className="text-[14px] text-subtle">{b.who}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Recent conversations" extra={<SampleTag />}>
            <ul className="m-0 flex list-none flex-col p-0">
              {sampleConversations.map((c) => (
                <li key={c.who} className="flex items-center gap-3 border-t border-line py-3 first:border-t-0">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-[14px] font-bold text-brand">{c.who.replace(/[^A-Z0-9]/g, "")[0] ?? "?"}</span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="flex items-center gap-2 text-[15px] font-medium text-ink">
                      {c.who}
                      <span className="text-[12px] font-normal text-subtle">· {c.channel}</span>
                    </span>
                    <span className="truncate text-[14px] text-subtle">{c.last}</span>
                  </span>
                  <span className="flex flex-col items-end gap-1">
                    <span className="text-[12.5px] text-subtle">{c.time}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[11.5px] font-semibold ${c.by === "AI" ? "bg-periwinkle-soft text-brand" : "bg-[#E8F3EA] text-success"}`}>{c.by}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
