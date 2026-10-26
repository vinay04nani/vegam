"use client";

import { useEffect, useState } from "react";
import { appNav, checklist, planRank, type ChecklistItem } from "@/content/onboarding";
import { sampleConversations, sampleNeedsYou, sampleToday, sampleUpcoming, viewInfo } from "@/content/dashboard";
import { plans, type PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { VegamMark } from "@/components/ui/Kolam";
import { useOnboarding, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";

// The dashboard a business lands on after going live. Home shows the pilot,
// the setup checklist, what needs the owner, and today at a glance. Other
// sections describe what they will hold until the product backend exists.

const DAY = 86_400_000;

function pilotDay(liveAt: string | null) {
  if (!liveAt) return 3;
  return Math.min(30, Math.max(1, Math.floor((Date.now() - new Date(liveAt).getTime()) / DAY) + 1));
}

function SampleTag() {
  return <span className="rounded-full bg-panel px-2 py-0.5 text-[11.5px] font-semibold tracking-[0.06em] text-muted uppercase">Sample data</span>;
}

function Card({ title, extra, children, className = "" }: { title: string; extra?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={`flex flex-col gap-4 rounded-[22px] border border-line bg-white p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="m-0 text-[17px] font-semibold text-ink">{title}</h2>
        {extra}
      </div>
      {children}
    </section>
  );
}

function Ring({ done, total }: { done: number; total: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" role="img" aria-label={`${done} of ${total} done`}>
      <circle cx="28" cy="28" r={r} fill="none" stroke="#ECEDF2" strokeWidth="6" />
      <circle
        cx="28"
        cy="28"
        r={r}
        fill="none"
        stroke="#EE7A2E"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - done / total)}
        transform="rotate(-90 28 28)"
        className="transition-[stroke-dashoffset] duration-700"
      />
      <text x="28" y="33" textAnchor="middle" className="fill-ink text-[14px] font-bold">
        {done}/{total}
      </text>
    </svg>
  );
}

function Checklist({ items, done, onDone }: { items: ChecklistItem[]; done: string[]; onDone: (id: string) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const left = items.filter((i) => !done.includes(i.id));
  const count = items.length - left.length;

  if (!left.length) {
    return (
      <Card title="Setup complete">
        <p className="m-0 flex items-center gap-2 text-[15px] text-success">
          <Icon name="check" size={20} />
          Everything is set up. Nice work.
        </p>
      </Card>
    );
  }

  return (
    <Card title="Finish setting up" extra={<Ring done={count} total={items.length} />}>
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
                        onDone(item.id);
                        setOpen(null);
                      }}
                      className="inline-flex min-h-10 w-fit cursor-pointer items-center gap-1.5 rounded-full bg-ink px-4 text-[14px] font-semibold text-white"
                    >
                      {item.action}
                      <span className="font-normal text-white/70">(demo: marks done)</span>
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

function Home({ state, update, demo, plan }: { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; demo: boolean; plan: PlanId }) {
  const [welcome, setWelcome] = useState(false);
  // Date-dependent text is filled in after load so the static HTML matches.
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setWelcome(new URLSearchParams(window.location.search).has("welcome"));
    setNow(new Date());
  }, []);

  const day = pilotDay(state.liveAt);
  const items = checklist.filter((c) => planRank[plan] >= planRank[c.minPlan]);
  const waMeta = state.channels.whatsapp === "pending";
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
          <button type="button" aria-label="Dismiss" onClick={() => setWelcome(false)} className="cursor-pointer rounded-full p-1 text-white/70 hover:text-white">
            <Icon name="close" size={18} />
          </button>
        </div>
      )}

      {demo && (
        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[16px] bg-periwinkle-soft px-4 py-3 text-[15px] text-brand">
          This is a demo account with sample data.
          <a href={withBase("/onboarding/")} className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
            Set up your own front desk
            <Icon name="chevron-right" size={16} />
          </a>
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

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col gap-5">
          <Checklist items={items} done={state.checklistDone} onDone={markDone} />
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

function Placeholder({ id, plan }: { id: string; plan: PlanId }) {
  const info = viewInfo[id];
  const needs = appNav.find((n) => n.id === id)?.minPlan ?? "starter";
  const locked = planRank[plan] < planRank[needs];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="m-0 font-serif text-[clamp(30px,3vw,42px)] leading-tight font-normal tracking-[-0.02em] text-ink">{info.title}</h1>
      <div className="flex flex-col items-start gap-4 rounded-[22px] border border-dashed border-line-strong bg-white p-[clamp(20px,4vw,40px)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-periwinkle-soft text-indigo">
          <Icon name={locked ? "lock" : (appNav.find((n) => n.id === id)?.icon ?? "home")} size={24} />
        </span>
        <p className="m-0 max-w-[560px] text-[17px] leading-relaxed text-ink-soft">{info.body}</p>
        <p className="m-0 text-[14.5px] text-subtle">
          {locked ? `Included in the ${plans.find((p) => p.id === needs)?.name} plan.` : "This section arrives with the product build. The demo covers Home."}
        </p>
      </div>
    </div>
  );
}

function NavButton({
  id,
  label,
  icon,
  compact = false,
  view,
  plan,
  onSelect,
}: (typeof appNav)[number] & { compact?: boolean; view: string; plan: PlanId; onSelect: (id: string) => void }) {
  const active = view === id;
  const locked = planRank[plan] < planRank[appNav.find((n) => n.id === id)!.minPlan];
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={() => onSelect(id)}
      className={
        compact
          ? `flex min-h-14 flex-1 cursor-pointer flex-col items-center justify-center gap-1 text-[11.5px] font-semibold ${active ? "text-ink" : "text-subtle"}`
          : `flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-[12px] px-3 text-[15px] font-medium transition ${active ? "bg-white text-ink shadow-[0_1px_3px_rgb(30_31_43/0.08)]" : "text-ink-soft hover:bg-white/60"}`
      }
    >
      <Icon name={icon} size={compact ? 22 : 19} />
      {label}
      {locked && !compact && <Icon name="lock" size={14} className="ml-auto text-faint" />}
    </button>
  );
}

export function Dashboard() {
  const { state, update, ready } = useOnboarding();
  const [view, setView] = useState("home");
  const [more, setMore] = useState(false);
  const demo = ready && !state.liveAt;
  const plan: PlanId = state.plan ?? "growth";
  const nav = appNav;
  const name = state.business.name || "Nila & Co";

  const select = (id: string) => {
    setView(id);
    setMore(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-svh bg-page">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[248px] flex-col border-r border-line bg-[#F4F4F8] p-4 lg:flex">
        <a href={links.home} className="px-3 pt-2 pb-5 text-[26px] leading-none font-extrabold tracking-[-0.045em] text-ink">
          vegam
        </a>
        <div className="mb-4 flex items-center gap-3 rounded-[14px] bg-white p-3 shadow-[0_1px_3px_rgb(30_31_43/0.06)]">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo text-[15px] font-bold text-white">{name[0]?.toUpperCase()}</span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[15px] font-semibold text-ink">{name}</span>
            <span className="text-[12.5px] text-subtle">{plans.find((p) => p.id === plan)?.name} · pilot</span>
          </span>
        </div>
        <nav aria-label="Dashboard" className="flex flex-col gap-1">
          {nav.map((n) => (
            <NavButton key={n.id} {...n} view={view} plan={plan} onSelect={select} />
          ))}
        </nav>
        <a href={withBase("/contact/?topic=support")} className="mt-auto flex items-center gap-2 rounded-[12px] px-3 py-2.5 text-[14.5px] font-medium text-ink-soft hover:bg-white/60">
          <Icon name="headset" size={18} />
          Help and support
        </a>
      </aside>

      {/* Phone top bar */}
      <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-line bg-page/90 px-4 backdrop-blur lg:hidden">
        <a href={links.home} className="text-[22px] leading-none font-extrabold tracking-[-0.045em] text-ink">
          vegam
        </a>
        <span className="truncate text-[14.5px] font-semibold text-ink">{name}</span>
      </header>

      <main className={`px-4 pt-6 pb-28 transition-opacity sm:px-8 lg:ml-[248px] lg:pt-10 lg:pb-16 ${ready ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-[1180px]">{view === "home" ? <Home state={state} update={update} demo={demo} plan={plan} /> : <Placeholder id={view} plan={plan} />}</div>
      </main>

      {/* Phone bottom tabs */}
      <nav aria-label="Dashboard" className="fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        {nav.slice(0, 4).map((n) => (
          <NavButton key={n.id} {...n} compact view={view} plan={plan} onSelect={select} />
        ))}
        <button
          type="button"
          aria-expanded={more}
          onClick={() => setMore(!more)}
          className={`flex min-h-14 flex-1 cursor-pointer flex-col items-center justify-center gap-1 text-[11.5px] font-semibold ${nav.slice(4).some((n) => n.id === view) ? "text-ink" : "text-subtle"}`}
        >
          <Icon name="menu" size={22} />
          More
        </button>
      </nav>
      {more && (
        <div className="fixed inset-0 z-10 bg-ink/30 lg:hidden" onClick={() => setMore(false)}>
          <div className="absolute inset-x-3 bottom-20 flex flex-col gap-1 rounded-[20px] bg-[#F4F4F8] p-3 shadow-[0_20px_50px_rgb(30_31_43/0.25)]" onClick={(e) => e.stopPropagation()}>
            {nav.slice(4).map((n) => (
              <NavButton key={n.id} {...n} view={view} plan={plan} onSelect={select} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
