"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { OnboardingState } from "@/lib/onboarding";
import { PageTitle } from "../ui";
import { Account } from "./settings/Account";
import { Automations } from "./settings/Automations";
import { Developers } from "./settings/Developers";
import { General } from "./settings/General";
import { Hours } from "./settings/Hours";
import { NotificationPrefs } from "./settings/NotificationPrefs";
import { Privacy } from "./settings/Privacy";
import { Team } from "./settings/Team";
import { Templates } from "./settings/Templates";

// Settings in the style of Linear and Stripe: a menu of sections on the left
// (a dropdown on phones) and one section at a time on the right. Each
// section lives in ./settings/.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; onOpen: (view: string) => void };

type SectionId = "general" | "hours" | "team" | "templates" | "automations" | "notifications" | "privacy" | "developers" | "account";

const groups: { title: string; items: { id: SectionId; label: string; icon: IconName; body: string }[] }[] = [
  {
    title: "Business",
    items: [
      { id: "general", label: "General", icon: "home", body: "Your business profile, region, contact details and tax information." },
      { id: "hours", label: "Locations and hours", icon: "clock", body: "Where and when you’re open, closures and booking rules." },
      { id: "team", label: "Team and roles", icon: "users", body: "Who can use Vegam and what they can do." },
    ],
  },
  {
    title: "Messaging",
    items: [
      { id: "templates", label: "Message templates", icon: "message", body: "WhatsApp templates for reminders, follow-ups and campaigns." },
      { id: "automations", label: "Automations", icon: "refresh", body: "Messages Vegam sends on its own around each booking." },
      { id: "notifications", label: "Notifications", icon: "bell", body: "Which alerts reach you, and where." },
    ],
  },
  {
    title: "Account",
    items: [
      { id: "privacy", label: "Privacy and consent", icon: "shield", body: "AI disclosure, opt-outs, data retention and data requests." },
      { id: "developers", label: "API and webhooks", icon: "key", body: "Connect Vegam to your own software." },
      { id: "account", label: "Plan and data", icon: "card", body: "Your plan, exporting data and closing your account." },
    ],
  },
];

const all = groups.flatMap((g) => g.items);

const shortcuts: { label: string; icon: IconName; view: string }[] = [
  { label: "AI agents", icon: "sparkle", view: "agents" },
  { label: "Channels", icon: "globe", view: "channels" },
  { label: "Billing", icon: "card", view: "billing" },
  { label: "Your profile", icon: "users", view: "profile" },
];

export function Settings({ state, update, onOpen }: Props) {
  const [section, setSection] = useState<SectionId>("general");
  const current = all.find((s) => s.id === section)!;

  const pick = (id: SectionId) => {
    setSection(id);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="Settings" body="Everything about how your business runs on Vegam." />

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
        {/* Section menu: a list on desktop, a dropdown on phones */}
        <nav aria-label="Settings sections" className="sticky top-24 hidden flex-col gap-5 lg:flex">
          {groups.map((g) => (
            <div key={g.title} className="flex flex-col gap-0.5">
              <p className="m-0 px-3 pb-1.5 text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">{g.title}</p>
              {g.items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  aria-current={section === it.id ? "page" : undefined}
                  onClick={() => pick(it.id)}
                  className={`flex min-h-10 cursor-pointer items-center gap-2.5 rounded-[10px] px-3 text-left text-[14.5px] transition ${section === it.id ? "bg-white font-semibold text-ink shadow-[0_1px_3px_rgb(30_31_43/0.08)]" : "text-ink-soft hover:bg-white/60"}`}
                >
                  <Icon name={it.icon} size={17} className={section === it.id ? "text-ink" : "text-muted"} />
                  {it.label}
                </button>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-0.5 border-t border-line pt-4">
            <p className="m-0 px-3 pb-1.5 text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">Elsewhere</p>
            {shortcuts.map((s) => (
              <button key={s.view} type="button" onClick={() => onOpen(s.view)} className="flex min-h-9 cursor-pointer items-center gap-2.5 rounded-[10px] px-3 text-left text-[14px] text-ink-soft hover:bg-white/60">
                <Icon name={s.icon} size={16} className="text-muted" />
                <span className="flex-1">{s.label}</span>
                <Icon name="chevron-right" size={14} className="text-faint" />
              </button>
            ))}
          </div>
        </nav>

        <label className="relative lg:hidden">
          <span className="sr-only">Settings section</span>
          <select
            value={section}
            onChange={(e) => pick(e.target.value as SectionId)}
            className="min-h-12 w-full cursor-pointer appearance-none rounded-[14px] border border-line-strong bg-white pr-10 pl-4 text-[15.5px] font-semibold text-ink"
          >
            {groups.map((g) => (
              <optgroup key={g.title} label={g.title}>
                {g.items.map((it) => (
                  <option key={it.id} value={it.id}>
                    {it.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <Icon name="chevron-down" size={17} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle" />
        </label>

        <div className="flex min-w-0 flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="m-0 text-[22px] font-semibold tracking-[-0.01em] text-ink">{current.label}</h2>
            <p className="m-0 text-[15px] text-subtle">{current.body}</p>
          </div>
          {section === "general" && <General state={state} update={update} />}
          {section === "hours" && <Hours />}
          {section === "team" && <Team />}
          {section === "templates" && <Templates />}
          {section === "automations" && <Automations />}
          {section === "notifications" && <NotificationPrefs />}
          {section === "privacy" && <Privacy onOpen={onOpen} />}
          {section === "developers" && <Developers />}
          {section === "account" && <Account state={state} onOpen={onOpen} />}
        </div>
      </div>
    </div>
  );
}
