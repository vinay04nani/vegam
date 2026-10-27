"use client";

import { useState } from "react";
import { appNav } from "@/content/onboarding";
import { plans, type PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { isIncluded, useOnboarding } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { LiveHome } from "./LiveHome";
import { SetupHome } from "./SetupHome";
import { AssistantPage, ChannelsPage, PlanPage, TestPage, WhatsAppPage } from "./TaskPages";
import { Calendar } from "./sections/Calendar";
import { Calls } from "./sections/Calls";
import { Campaigns } from "./sections/Campaigns";
import { Inbox } from "./sections/Inbox";
import { Leads } from "./sections/Leads";
import { Reports } from "./sections/Reports";
import { Settings } from "./sections/Settings";
import { pilotDay } from "./ui";

// The dashboard. Until the assistant is live, Home is a short setup guide;
// every other section can be explored at any time with sample data. After
// go-live, Home shows the pilot, the optional "Grow with Vegam" tasks and
// today. Plan limits are switched off for now (see `gating`).

/** Pages that belong to Home in the navigation. */
const homeViews = ["home", "preview", "setup-assistant", "setup-whatsapp", "setup-test"];

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
  const locked = !isIncluded(appNav.find((n) => n.id === id)!.minPlan, plan);
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
  const [welcome, setWelcome] = useState(false);
  const onboarded = !!state.onboardedAt;
  const live = !!state.liveAt;
  const mode = !onboarded ? "demo" : "live";
  const plan: PlanId = state.plan ?? "growth";
  // When gating.setupOnlyBeforeLive is switched on, this becomes the setup-only list before go-live.
  const nav = appNav;
  const name = state.business.name || "Nila & Co";
  const planName = plans.find((p) => p.id === state.plan)?.name;
  const status = !onboarded ? "Demo account" : live ? `${planName} · pilot day ${pilotDay(state.liveAt)}` : planName ? `${planName} · not live yet` : "No plan yet · not live";

  const select = (id: string) => {
    setView(id);
    setMore(false);
    window.scrollTo({ top: 0 });
  };
  const home = () => select("home");
  const navView = homeViews.includes(view) ? "home" : view;

  const goLive = () => {
    update((s) => ({ ...s, liveAt: new Date().toISOString() }));
    setWelcome(true);
    select("home");
  };

  const page = (() => {
    const props = { state, update, onHome: home };
    switch (view) {
      case "home":
        return onboarded && !live ? (
          <SetupHome state={state} onOpen={select} onGoLive={goLive} />
        ) : (
          <LiveHome state={state} update={update} plan={plan} mode={mode} welcome={welcome} onDismissWelcome={() => setWelcome(false)} onOpen={select} />
        );
      case "preview":
        return <LiveHome state={state} update={update} plan={state.plan ?? "growth"} mode="preview" welcome={false} onDismissWelcome={() => undefined} onOpen={select} />;
      case "plan":
        return <PlanPage {...props} />;
      case "setup-assistant":
      case "assistant":
        return <AssistantPage {...props} />;
      case "setup-whatsapp":
        return <WhatsAppPage {...props} />;
      case "setup-test":
        return <TestPage {...props} />;
      case "channels":
        return <ChannelsPage {...props} />;
      case "inbox":
        return <Inbox />;
      case "calendar":
        return <Calendar state={state} />;
      case "leads":
        return <Leads />;
      case "calls":
        return <Calls />;
      case "campaigns":
        return <Campaigns />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings state={state} update={update} onOpen={select} />;
      default:
        return <LiveHome state={state} update={update} plan={plan} mode={mode} welcome={false} onDismissWelcome={() => undefined} onOpen={select} />;
    }
  })();

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
            <span className="text-[12.5px] text-subtle">{status}</span>
          </span>
        </div>
        {onboarded && !state.plan && (
          <button type="button" onClick={() => select("plan")} className="mb-4 flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-[12px] bg-ink text-[14.5px] font-semibold text-white">
            Choose a plan
            <Icon name="chevron-right" size={16} />
          </button>
        )}
        <nav aria-label="Dashboard" className="flex flex-col gap-1">
          {nav.map((n) => (
            <NavButton key={n.id} {...n} view={navView} plan={plan} onSelect={select} />
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
        <span className="flex min-w-0 flex-col items-end leading-tight">
          <span className="truncate text-[14.5px] font-semibold text-ink">{name}</span>
          <span className="text-[12px] text-subtle">{status}</span>
        </span>
      </header>

      <main className={`px-4 pt-6 pb-28 transition-opacity sm:px-8 lg:ml-[248px] lg:pt-10 lg:pb-16 ${ready ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-[1180px]">{page}</div>
      </main>

      {/* Phone bottom tabs */}
      <nav aria-label="Dashboard" className="fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        {nav.slice(0, 4).map((n) => (
          <NavButton key={n.id} {...n} compact view={navView} plan={plan} onSelect={select} />
        ))}
        <button
          type="button"
          aria-expanded={more}
          onClick={() => setMore(!more)}
          className={`flex min-h-14 flex-1 cursor-pointer flex-col items-center justify-center gap-1 text-[11.5px] font-semibold ${nav.slice(4).some((n) => n.id === navView) ? "text-ink" : "text-subtle"}`}
        >
          <Icon name="menu" size={22} />
          More
        </button>
      </nav>
      {more && (
        <div className="fixed inset-0 z-10 bg-ink/30 lg:hidden" onClick={() => setMore(false)}>
          <nav
            aria-label="More sections"
            className="absolute inset-x-3 bottom-20 flex flex-col gap-1 rounded-[20px] bg-[#F4F4F8] p-3 shadow-[0_20px_50px_rgb(30_31_43/0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {nav.slice(4).map((n) => (
              <NavButton key={n.id} {...n} view={navView} plan={plan} onSelect={select} />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
