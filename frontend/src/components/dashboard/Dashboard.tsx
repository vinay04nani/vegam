"use client";

import { useEffect, useState } from "react";
import { appNav, type NavItem } from "@/content/onboarding";
import { plans, type PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { sampleThreads } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { isIncluded, useOnboarding } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { LiveHome } from "./LiveHome";
import { SetupHome } from "./SetupHome";
import { AssistantPage, PlanPage, TestPage, WhatsAppPage } from "./TaskPages";
import { Calendar } from "./sections/Calendar";
import { Calls } from "./sections/Calls";
import { Channels } from "./sections/Channels";
import { Campaigns } from "./sections/Campaigns";
import { Inbox } from "./sections/Inbox";
import { Leads } from "./sections/Leads";
import { Reports } from "./sections/Reports";
import { Settings } from "./sections/Settings";
import { Agents } from "./sections/Agents";
import { Billing } from "./sections/Billing";
import { Contacts } from "./sections/Contacts";
import { Help } from "./sections/Help";
import { Profile } from "./sections/Profile";
import { CommandPalette } from "./CommandPalette";
import { Menu, ToastProvider } from "./kit";
import { NotificationBell } from "./Notifications";
import { pilotDay } from "./ui";

// The dashboard. Until the assistant is live, Home is a short setup guide;
// every other section can be explored at any time with sample data. After
// go-live, Home shows the pilot, the optional "Grow with Vegam" tasks and
// today. Plan limits are switched off for now (see `gating`).

/** Pages that belong to Home in the navigation. */
const homeViews = ["home", "preview", "setup-assistant", "setup-whatsapp", "setup-test"];
/** Pages reached from the user menu or other pages, highlighted under their parent in the navigation. */
const parentOf: Record<string, string> = { assistant: "agents", plan: "settings", billing: "settings", profile: "settings" };

const userName = "Vinay";

/** Unread counts beside nav items. Demo: from the sample inbox, so they don't change as chats are read. */
const navCounts: Record<string, number> = { inbox: sampleThreads.filter((t) => t.unread).length };

function NavButton({
  id,
  label,
  icon,
  compact = false,
  view,
  plan,
  onSelect,
  count,
}: NavItem & { compact?: boolean; view: string; plan: PlanId; onSelect: (id: string) => void; count?: number }) {
  const active = view === id;
  const locked = !isIncluded(appNav.find((n) => n.id === id)?.minPlan ?? "starter", plan);
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      aria-label={count ? `${label}, ${count} unread` : undefined}
      onClick={() => onSelect(id)}
      className={
        compact
          ? `flex min-h-14 flex-1 cursor-pointer flex-col items-center justify-center gap-1 text-[11.5px] font-semibold ${active ? "text-ink" : "text-subtle"}`
          : `flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-[12px] px-3 text-[15px] font-medium transition ${active ? "bg-white text-ink shadow-[0_1px_3px_rgb(30_31_43/0.08)]" : "text-ink-soft hover:bg-white/60"}`
      }
    >
      <span className="relative">
        <Icon name={icon} size={compact ? 22 : 19} />
        {!!count && compact && (
          <span aria-hidden="true" className="absolute -top-1 -right-2 min-w-4 rounded-full bg-orange px-1 text-center text-[10.5px] leading-4 font-bold text-white">
            {count}
          </span>
        )}
      </span>
      {label}
      {!!count && !compact && (
        <span aria-hidden="true" className="ml-auto rounded-full bg-ink px-1.5 text-[11.5px] leading-5 font-bold text-white">
          {count}
        </span>
      )}
      {locked && !compact && <Icon name="lock" size={14} className="ml-auto text-faint" />}
    </button>
  );
}

export function Dashboard() {
  const { state, update, ready } = useOnboarding();
  const [view, setView] = useState("home");
  const [more, setMore] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [palette, setPalette] = useState(false);

  // ⌘K / Ctrl+K opens search from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
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
  const navView = homeViews.includes(view) ? "home" : (parentOf[view] ?? view);

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
        return <Channels state={state} update={update} />;
      case "agents":
        return <Agents state={state} update={update} onOpen={select} />;
      case "contacts":
        return <Contacts onOpen={select} />;
      case "profile":
        return <Profile />;
      case "billing":
        return <Billing state={state} onOpen={select} />;
      case "help":
        return <Help onOpen={select} />;
      case "inbox":
        return <Inbox onOpen={select} />;
      case "calendar":
        return <Calendar state={state} onOpen={select} />;
      case "leads":
        return <Leads onOpen={select} />;
      case "calls":
        return <Calls onOpen={select} />;
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
    <ToastProvider>
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
        <nav aria-label="Dashboard" className="-mx-1 flex flex-1 flex-col gap-0.5 overflow-y-auto px-1">
          {(["work", "setup"] as const).map((g) => (
            <div key={g} className="flex flex-col gap-0.5">
              {g === "setup" && <p className="m-0 mt-4 mb-1 px-3 text-[11.5px] font-semibold tracking-[0.1em] text-subtle uppercase">Set up</p>}
              {nav
                .filter((n) => n.group === g)
                .map((n) => (
                  <NavButton key={n.id} {...n} count={navCounts[n.id]} view={navView} plan={plan} onSelect={select} />
                ))}
            </div>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => select("help")}
          aria-current={view === "help" ? "page" : undefined}
          className={`mt-3 flex min-h-11 cursor-pointer items-center gap-3 rounded-[12px] px-3 text-[15px] font-medium transition ${view === "help" ? "bg-white text-ink shadow-[0_1px_3px_rgb(30_31_43/0.08)]" : "text-ink-soft hover:bg-white/60"}`}
        >
          <Icon name="headset" size={19} />
          Help and support
        </button>
      </aside>

      {/* Top bar: notifications and the user menu (logo on phones). Search stays on ⌘K / Ctrl+K. */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-end gap-2 border-b border-line bg-page/90 px-4 backdrop-blur sm:px-8 lg:ml-[248px] lg:h-16">
        <a href={links.home} className="mr-auto text-[22px] leading-none font-extrabold tracking-[-0.045em] text-ink lg:hidden">
          vegam
        </a>
        <NotificationBell onOpen={select} />
        <Menu
          label="Account menu"
          trigger={
            <span className="flex items-center gap-2.5 rounded-full py-1 pr-1 pl-1 lg:pr-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[13.5px] font-bold text-white">{userName[0]}</span>
              <span className="hidden flex-col text-left leading-tight lg:flex">
                <span className="text-[13.5px] font-semibold text-ink">{userName}</span>
                <span className="text-[11.5px] text-subtle">Owner · {name}</span>
              </span>
            </span>
          }
          items={[
            { label: "Your profile", onSelect: () => select("profile") },
            { label: "Billing and usage", onSelect: () => select("billing") },
            { label: "Settings", onSelect: () => select("settings") },
            { label: "Help and support", onSelect: () => select("help") },
            {
              label: "Log out",
              onSelect: () => {
                // Demo: there is no session yet; go back to the log-in page.
                window.location.href = withBase("/login/");
              },
            },
          ]}
        />
      </header>

      <main className={`px-4 pt-6 pb-28 transition-opacity sm:px-8 lg:ml-[248px] lg:pt-8 lg:pb-16 ${ready ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-[1180px]">{page}</div>
      </main>

      {/* Phone bottom tabs */}
      <nav aria-label="Dashboard" className="fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        {nav.slice(0, 4).map((n) => (
          <NavButton key={n.id} {...n} count={navCounts[n.id]} compact view={navView} plan={plan} onSelect={select} />
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
              <NavButton key={n.id} {...n} count={navCounts[n.id]} view={navView} plan={plan} onSelect={select} />
            ))}
            <NavButton id="help" label="Help and support" icon="headset" minPlan="starter" group="setup" view={navView} plan={plan} onSelect={select} />
          </nav>
        </div>
      )}
      <CommandPalette open={palette} onClose={() => setPalette(false)} onOpen={select} />
    </div>
    </ToastProvider>
  );
}
