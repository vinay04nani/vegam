"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { OnboardingState } from "@/lib/onboarding";
import { Account } from "./settings/Account";
import { Automations } from "./settings/Automations";
import { Developers } from "./settings/Developers";
import { General } from "./settings/General";
import { Hours } from "./settings/Hours";
import { NotificationPrefs } from "./settings/NotificationPrefs";
import { Privacy } from "./settings/Privacy";
import { Team } from "./settings/Team";
import { Templates } from "./settings/Templates";

// Settings: a dialog with a menu of sections on the left (a dropdown on
// phones) and one section at a time on the right. Each section lives in
// ./settings/. Open a specific section with the view "settings:<section>".

type Props = {
  state: OnboardingState;
  update: (fn: (s: OnboardingState) => OnboardingState) => void;
  onOpen: (view: string) => void;
};

type SectionId = "general" | "hours" | "team" | "templates" | "automations" | "notifications" | "privacy" | "developers" | "account";

const groups: {
  title: string;
  items: { id: SectionId; label: string; icon: IconName; body: string }[];
}[] = [
  {
    title: "Business",
    items: [
      {
        id: "general",
        label: "General",
        icon: "home",
        body: "Your business profile, region, contact details and tax information.",
      },
      {
        id: "hours",
        label: "Locations and hours",
        icon: "clock",
        body: "Where and when you’re open, closures and booking rules.",
      },
      {
        id: "team",
        label: "Team and roles",
        icon: "users",
        body: "Who can use Vegam and what they can do.",
      },
    ],
  },
  {
    title: "Messaging",
    items: [
      {
        id: "templates",
        label: "Message templates",
        icon: "message",
        body: "WhatsApp templates for reminders, follow-ups and campaigns.",
      },
      {
        id: "automations",
        label: "Automations",
        icon: "refresh",
        body: "Messages Vegam sends on its own around each booking.",
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: "bell",
        body: "Which alerts reach you, and where.",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        id: "privacy",
        label: "Privacy and consent",
        icon: "shield",
        body: "AI disclosure, opt-outs, data retention and data requests.",
      },
      {
        id: "developers",
        label: "API and webhooks",
        icon: "key",
        body: "Connect Vegam to your own software.",
      },
      {
        id: "account",
        label: "Plan and data",
        icon: "card",
        body: "Your plan, exporting data and closing your account.",
      },
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

export const settingsSections = all.map((s) => s.id);

/**
 * Settings open as a large dialog over whatever page you're on (like Claude's
 * settings): search and the section menu on the left, the section on the
 * right. Full screen on phones, with the menu as a dropdown.
 */
export function Settings({ state, update, onOpen, onClose, initial = "general" }: Props & { onClose: () => void; initial?: string }) {
  const [section, setSection] = useState<SectionId>(all.some((s) => s.id === initial) ? (initial as SectionId) : "general");
  const [query, setQuery] = useState("");
  const current = all.find((s) => s.id === section)!;
  const content = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Esc closes (unless a dialog opened from inside settings is on top), the
  // page behind doesn't scroll, and focus returns to where it was.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (document.querySelectorAll("[role=dialog][aria-modal=true]").length > 1) return;
      onClose();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [onClose]);

  const pick = (id: SectionId) => {
    setSection(id);
    content.current?.scrollTo({ top: 0 });
  };
  const q = query.trim().toLowerCase();
  const filtered = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((it) => !q || `${it.label} ${it.body}`.toLowerCase().includes(q)),
    }))
    .filter((g) => g.items.length);

  return (
    <div className="fixed inset-0 z-[45] flex items-stretch justify-center sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
        tabIndex={-1}
        className="relative flex h-full w-full max-w-[1120px] animate-[fade-in_0.15s_ease-out] flex-col overflow-hidden bg-page shadow-[0_30px_80px_rgb(30_31_43/0.3)] outline-none motion-reduce:animate-none sm:h-[min(860px,calc(100svh-48px))] sm:rounded-[22px]"
      >
        <header className="flex flex-none items-center justify-between gap-3 border-b border-line bg-white px-5 py-3.5">
          <h1 className="m-0 text-[18px] font-semibold text-ink">Settings</h1>
          <button type="button" onClick={onClose} aria-label="Close settings" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] text-muted hover:bg-panel hover:text-ink">
            <Icon name="close" size={18} />
          </button>
        </header>

        <div className="flex min-h-0 flex-1">
          {/* Section menu (desktop) */}
          <nav aria-label="Settings sections" className="hidden w-[250px] flex-none flex-col gap-5 overflow-y-auto border-r border-line bg-[#F4F4F8] p-4 lg:flex">
            <label className="relative">
              <span className="sr-only">Search settings</span>
              <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-subtle" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="min-h-9 w-full rounded-[10px] border border-line bg-white pr-3 pl-9 text-[14px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
              />
            </label>
            {filtered.length === 0 && <p className="m-0 px-3 text-[13.5px] text-subtle">No settings match “{query}”.</p>}
            {filtered.map((g) => (
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
            <div className="mt-auto flex flex-col gap-0.5 border-t border-line pt-4">
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

          <div ref={content} className="min-w-0 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-5 p-4 sm:p-7">
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
      </div>
    </div>
  );
}
