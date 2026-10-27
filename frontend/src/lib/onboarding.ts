"use client";

import { useCallback, useEffect, useState } from "react";
import type { ChannelId, CountryId, Tone } from "@/content/onboarding";
import { countries, gating, planRank } from "@/content/onboarding";
import type { Billing, Currency, PlanId } from "@/content/pricing";

// The business's sign-up and setup answers. Until the backend exists they
// live in this browser (localStorage) so onboarding can resume where it was
// left and the dashboard can show the business's own name, plan and setup.
// TODO(backend): save to the business record instead.

export type Service = { name: string; minutes: number; price: number };
export type Faq = { q: string; a: string };
export type ChannelStatus = "off" | "pending" | "connected";

/** Setup tasks done from the dashboard. WhatsApp is tracked by its channel status. */
export type SetupTask = "assistant" | "test";

export type OnboardingState = {
  /** Onboarding screen: 0 about you, 1 pick a plan. */
  step: number;
  /** Set when onboarding is finished or skipped; the dashboard then shows the setup guide. */
  onboardedAt: string | null;
  business: {
    name: string;
    about: string;
    country: CountryId;
    languages: string[];
    locations: "one" | "more";
    team: string;
  };
  plan: PlanId | null;
  billing: Billing;
  assistant: {
    source: "website" | "upload" | "manual" | null;
    link: string;
    name: string;
    tone: Tone;
    services: Service[];
    open: string;
    close: string;
    days: string;
    faqs: Faq[];
  };
  channels: Record<ChannelId, ChannelStatus>;
  whatsappNumber: "current" | "new";
  ownerPhone: string;
  setupDone: SetupTask[];
  liveAt: string | null;
  checklistDone: string[];
};

export const initialState: OnboardingState = {
  step: 0,
  onboardedAt: null,
  business: { name: "", about: "", country: "IN", languages: ["English"], locations: "one", team: "2–5" },
  plan: null,
  billing: "monthly",
  assistant: {
    source: null,
    link: "",
    name: "",
    tone: "friendly",
    services: [],
    open: "10:00",
    close: "19:00",
    days: "Monday to Saturday",
    faqs: [],
  },
  channels: { whatsapp: "off", missed: "off", voice: "off", social: "off", website: "off", ads: "off" },
  whatsappNumber: "current",
  ownerPhone: "",
  setupDone: [],
  liveAt: null,
  checklistDone: [],
};

const KEY = "vegam.onboarding.v2";

function read(): OnboardingState | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<OnboardingState>;
    return {
      ...initialState,
      ...saved,
      business: { ...initialState.business, ...saved.business },
      assistant: { ...initialState.assistant, ...saved.assistant },
      channels: { ...initialState.channels, ...saved.channels },
    };
  } catch {
    return null;
  }
}

function write(state: OnboardingState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Private mode or storage blocked: the wizard still works, it just won't resume.
  }
}

export function clearOnboarding() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}

/** Saved state, loaded after mount (so the static HTML matches) and saved on every change. */
export function useOnboarding() {
  const [state, setState] = useState<OnboardingState>(initialState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = read();
    if (saved) setState(saved);
    setReady(true);
  }, []);

  const update = useCallback((fn: (s: OnboardingState) => OnboardingState) => {
    setState((prev) => {
      const next = fn(prev);
      write(next);
      return next;
    });
  }, []);

  return { state, update, ready };
}

export function currencyFor(state: OnboardingState): Currency {
  return countries.find((c) => c.id === state.business.country)?.currency ?? "USD";
}

export function formatMoney(amount: number, currency: Currency) {
  return `${currency === "INR" ? "₹" : "$"}${amount.toLocaleString(currency === "INR" ? "en-IN" : "en-US")}`;
}

/** Whether a feature for `minPlan` is available on `plan`. Always true while plan limits are switched off. */
export function isIncluded(minPlan: PlanId, plan: PlanId | null) {
  if (!gating.limitByPlan) return true;
  return plan !== null && planRank[plan] >= planRank[minPlan];
}

export const whatsappStarted = (s: OnboardingState) => s.channels.whatsapp !== "off";

/** Everything the setup guide needs before the assistant can go live. */
export const readyToGoLive = (s: OnboardingState) =>
  s.plan !== null && s.setupDone.includes("assistant") && whatsappStarted(s) && s.setupDone.includes("test");

/** Reads ?plan= from the URL (set by the pricing page buttons). */
export function planFromUrl(): PlanId | null {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search).get("plan");
  return p === "starter" || p === "growth" || p === "pro" ? p : null;
}
