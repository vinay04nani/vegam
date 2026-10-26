"use client";

import { useCallback, useEffect, useState } from "react";
import type { ChannelId, CountryId, Tone } from "@/content/onboarding";
import { countries } from "@/content/onboarding";
import type { Billing, Currency, PlanId } from "@/content/pricing";

// The sign-up wizard's answers. Until the backend exists they live in this
// browser (localStorage) so the wizard can resume where it was left and the
// dashboard can show the business's own name and plan.
// TODO(backend): save to the business record instead.

export type Service = { name: string; minutes: number; price: number };
export type Faq = { q: string; a: string };
export type ChannelStatus = "off" | "pending" | "connected";

export type OnboardingState = {
  step: number;
  completed: number[];
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
  testSent: boolean;
  liveAt: string | null;
  checklistDone: string[];
};

export const initialState: OnboardingState = {
  step: 0,
  completed: [],
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
  testSent: false,
  liveAt: null,
  checklistDone: [],
};

const KEY = "vegam.onboarding.v1";

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

/** Wizard state, loaded after mount (so the static HTML matches) and saved on every change. */
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

/** Recommends a plan from the business answers, like the pricing page picker. */
export function recommendPlan(state: OnboardingState): PlanId {
  if (state.business.locations === "more") return "pro";
  if (state.business.team === "Just me") return "starter";
  return "growth";
}

/** Reads ?plan= from the URL (set by the pricing page buttons). */
export function planFromUrl(): PlanId | null {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search).get("plan");
  return p === "starter" || p === "growth" || p === "pro" ? p : null;
}
