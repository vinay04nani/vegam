"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { OnboardingState } from "@/lib/onboarding";
import { Account } from "./settings/Account";
import { Billing } from "./settings/Billing";
import { ActivityLog } from "./settings/ActivityLog";
import { BookingPage } from "./settings/BookingPage";
import { ContactFields } from "./settings/ContactFields";
import { InboxRules } from "./settings/InboxRules";
import { Language } from "./settings/Language";
import { Payments } from "./settings/Payments";
import { Security } from "./settings/Security";
import { Services } from "./settings/Services";
import { WhatsAppProfile } from "./settings/WhatsAppProfile";
import { Automations } from "./settings/Automations";
import { Developers } from "./settings/Developers";
import { General } from "./settings/General";
import { HelpPanel } from "./settings/HelpPanel";
import { Hours } from "./settings/Hours";
import { NotificationPrefs } from "./settings/NotificationPrefs";
import { Privacy } from "./settings/Privacy";
import { Team } from "./settings/Team";
import { Templates } from "./settings/Templates";

// Settings: a dialog over the current page, in the style of Claude's and
// ChatGPT's settings. A quiet menu of sections on the left (a dropdown on
// phones) and one section at a time on the right, made of flat rows. Changes
// apply straight away. Open a section directly with "settings:<section>".

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; onOpen: (view: string) => void };

type SectionId =
  | "general"
  | "services"
  | "hours"
  | "booking"
  | "team"
  | "whatsapp"
  | "inbox"
  | "templates"
  | "automations"
  | "notifications"
  | "contacts"
  | "payments"
  | "language"
  | "security"
  | "activity"
  | "privacy"
  | "developers"
  | "account"
  | "billing"
  | "help";

const groups: { title: string; items: { id: SectionId; label: string; icon: IconName; keywords: string }[] }[] = [
  {
    title: "Business",
    items: [
      { id: "general", label: "General", icon: "home", keywords: "profile name logo country time zone whatsapp email gst tax address" },
      { id: "services", label: "Services and prices", icon: "tag", keywords: "services prices duration menu catalogue" },
      { id: "hours", label: "Hours and bookings", icon: "clock", keywords: "opening hours closures holidays booking rules locations" },
      { id: "booking", label: "Booking page", icon: "calendar", keywords: "booking link qr colour cancellation policy questions" },
      { id: "team", label: "Team", icon: "users", keywords: "members invite roles permissions" },
    ],
  },
  {
    title: "Messaging",
    items: [
      { id: "whatsapp", label: "WhatsApp profile", icon: "message", keywords: "whatsapp business profile display name about quality rating limit meta" },
      { id: "inbox", label: "Inbox", icon: "inbox", keywords: "assignment round robin away message close chats rating signature" },
      { id: "templates", label: "Templates", icon: "note", keywords: "whatsapp templates meta approval fees" },
      { id: "automations", label: "Automations", icon: "refresh", keywords: "reminders confirmation no-show review rebook missed call quiet hours" },
      { id: "notifications", label: "Notifications", icon: "bell", keywords: "alerts email whatsapp morning report weekly summary" },
    ],
  },
  {
    title: "Customers",
    items: [
      { id: "contacts", label: "Contacts and fields", icon: "users", keywords: "tags custom fields duplicates merge" },
      { id: "payments", label: "Payments", icon: "card", keywords: "razorpay stripe upi deposit payment links refunds" },
    ],
  },
  {
    title: "Account",
    items: [
      { id: "language", label: "Language and format", icon: "globe", keywords: "languages hindi telugu date time format week" },
      { id: "security", label: "Security", icon: "lock", keywords: "two-step 2fa password sessions devices sign out mask" },
      { id: "activity", label: "Activity log", icon: "chart", keywords: "audit log history who changed" },
      { id: "privacy", label: "Privacy", icon: "shield", keywords: "ai disclosure opt-out stop consent retention recordings data requests dpdp" },
      { id: "developers", label: "API and webhooks", icon: "key", keywords: "api keys webhooks developers integration" },
      { id: "billing", label: "Billing and invoices", icon: "card", keywords: "billing invoices pdf receipts payment method usage plan gst" },
      { id: "account", label: "Plan and data", icon: "sparkle", keywords: "plan billing export delete close account" },
      { id: "help", label: "Help and support", icon: "headset", keywords: "help support articles contact shortcuts what's new" },
    ],
  },
];

const all = groups.flatMap((g) => g.items);

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
  const filtered = groups.map((g) => ({ ...g, items: g.items.filter((it) => !q || `${it.label} ${it.keywords}`.toLowerCase().includes(q)) })).filter((g) => g.items.length);

  return (
    <div className="fixed inset-0 z-[45] flex items-stretch justify-center sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
        tabIndex={-1}
        className="relative flex h-full w-full max-w-[1040px] animate-[fade-in_0.15s_ease-out] overflow-hidden bg-white shadow-[0_30px_80px_rgb(30_31_43/0.3)] outline-none motion-reduce:animate-none sm:h-[min(780px,calc(100svh-48px))] sm:rounded-[20px]"
      >
        <button type="button" onClick={onClose} aria-label="Close settings" className="absolute top-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] text-muted hover:bg-panel hover:text-ink sm:top-4 sm:right-4">
          <Icon name="close" size={18} />
        </button>

        {/* Section menu (desktop) */}
        <nav aria-label="Settings sections" className="hidden w-[232px] flex-none flex-col gap-4 overflow-y-auto border-r border-line bg-[#F7F7FA] px-3 py-4 lg:flex">
          <label className="relative">
            <span className="sr-only">Search settings</span>
            <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search settings"
              className="h-9 w-full rounded-[8px] border border-transparent bg-white/0 pr-2 pl-8 text-[14px] text-ink outline-none placeholder:text-subtle hover:bg-white/70 focus:border-line-strong focus:bg-white"
            />
          </label>
          {filtered.length === 0 && <p className="m-0 px-2.5 text-[13.5px] text-subtle">No settings match “{query}”.</p>}
          {filtered.map((g) => (
            <div key={g.title} className="flex flex-col gap-px">
              <p className="m-0 px-2.5 pb-1 text-[12.5px] font-medium text-subtle">{g.title}</p>
              {g.items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  aria-current={section === it.id ? "page" : undefined}
                  onClick={() => pick(it.id)}
                  className={`flex h-9 cursor-pointer items-center gap-2.5 rounded-[8px] px-2.5 text-left text-[14px] transition ${section === it.id ? "bg-[#E9E9EF] font-medium text-ink" : "text-ink-soft hover:bg-[#EFEFF4]"}`}
                >
                  <Icon name={it.icon} size={16} className={section === it.id ? "text-ink" : "text-muted"} />
                  {it.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Section */}
        <div ref={content} className="min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[680px] px-5 pt-4 pb-12 sm:px-10 sm:pt-8">
            <label className="relative mr-11 mb-5 block lg:hidden">
              <span className="sr-only">Settings section</span>
              <select value={section} onChange={(e) => pick(e.target.value as SectionId)} className="h-10 w-full cursor-pointer appearance-none rounded-[10px] border border-line-strong bg-white pr-9 pl-3 text-[15px] font-medium text-ink">
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
              <Icon name="chevron-down" size={16} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-subtle" />
            </label>
            <h2 className="m-0 mb-7 text-[20px] font-semibold tracking-[-0.01em] text-ink">{current.label}</h2>
            {section === "general" && <General state={state} update={update} />}
            {section === "services" && <Services state={state} update={update} />}
            {section === "hours" && <Hours />}
            {section === "booking" && <BookingPage name={state.business.name} />}
            {section === "whatsapp" && <WhatsAppProfile name={state.business.name} onOpen={onOpen} />}
            {section === "inbox" && <InboxRules />}
            {section === "contacts" && <ContactFields />}
            {section === "payments" && <Payments india={state.business.country === "IN"} />}
            {section === "language" && <Language state={state} update={update} />}
            {section === "security" && <Security />}
            {section === "activity" && <ActivityLog />}
            {section === "team" && <Team />}
            {section === "templates" && <Templates />}
            {section === "automations" && <Automations />}
            {section === "notifications" && <NotificationPrefs />}
            {section === "privacy" && <Privacy onOpen={onOpen} />}
            {section === "developers" && <Developers />}
            {section === "billing" && <Billing state={state} onOpen={onOpen} />}
            {section === "account" && <Account state={state} onOpen={onOpen} />}
            {section === "help" && <HelpPanel onOpen={onOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}
