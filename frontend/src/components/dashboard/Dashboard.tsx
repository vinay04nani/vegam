"use client";

import { useState } from "react";
import { appNav, planRank } from "@/content/onboarding";
import { viewInfo } from "@/content/dashboard";
import { plans, type PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { clearOnboarding, useOnboarding } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { LiveHome } from "./LiveHome";
import { SetupHome } from "./SetupHome";
import { AssistantPage, ChannelsPage, PlanPage, TestPage, WhatsAppPage } from "./TaskPages";
import { PageTitle, pilotDay } from "./ui";

// The dashboard. Until the assistant is live, Home is a short setup guide and
// everything else can be explored. After go-live, Home shows the pilot, the
// optional "Grow with Vegam" tasks and today. Sections the demo doesn't build
// yet describe what they will hold.

/** Pages that belong to Home in the navigation. */
const homeViews = ["home", "preview", "setup-assistant", "setup-whatsapp", "setup-test"];

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

function SettingsPage({ onOpen }: { onOpen: (view: string) => void }) {
  return (
    <div className="flex max-w-[760px] flex-col gap-6">
      <PageTitle title="Settings" body={viewInfo.settings.body} />
      <div className="flex flex-col gap-2 rounded-[22px] border border-line bg-white p-3">
        {[
          { icon: "chart" as const, label: "Plan and billing", view: "plan" },
          { icon: "globe" as const, label: "Channels", view: "channels" },
          { icon: "sparkle" as const, label: "Assistant: services, hours and answers", view: "assistant" },
        ].map((x) => (
          <button key={x.view} type="button" onClick={() => onOpen(x.view)} className="flex cursor-pointer items-center gap-3 rounded-[14px] p-3 text-left hover:bg-panel">
            <Icon name={x.icon} size={20} className="text-indigo" />
            <span className="flex-1 text-[15.5px] font-medium text-ink">{x.label}</span>
            <Icon name="chevron-right" size={18} className="text-subtle" />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          clearOnboarding();
          window.location.href = withBase("/onboarding/");
        }}
        className="w-fit cursor-pointer text-[14.5px] font-medium text-subtle underline-offset-4 hover:text-danger hover:underline"
      >
        Start over (clears this demo’s saved answers)
      </button>
    </div>
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
  // Before a plan is chosen nothing is locked, so people can explore everything.
  const plan: PlanId = state.plan ?? (onboarded ? "pro" : "growth");
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
      case "settings":
        return <SettingsPage onOpen={select} />;
      default:
        return <Placeholder id={view} plan={plan} />;
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
          <div className="absolute inset-x-3 bottom-20 flex flex-col gap-1 rounded-[20px] bg-[#F4F4F8] p-3 shadow-[0_20px_50px_rgb(30_31_43/0.25)]" onClick={(e) => e.stopPropagation()}>
            {nav.slice(4).map((n) => (
              <NavButton key={n.id} {...n} view={navView} plan={plan} onSelect={select} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
