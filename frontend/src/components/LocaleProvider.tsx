"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { currencyForRegion, detectLocale, getLocaleState, setLocaleState, subscribeLocale, type LocaleState, DEFAULT_LOCALE } from "@/lib/locale";

const ONBOARDING_KEY = "vegam.onboarding.v2";

export function useLocale(): LocaleState {
  return useSyncExternalStore(subscribeLocale, getLocaleState, () => DEFAULT_LOCALE);
}

function savedCountry() {
  try {
    const raw = localStorage.getItem(ONBOARDING_KEY);
    if (!raw) return "";
    const country = (JSON.parse(raw) as { business?: { country?: string } }).business?.country;
    return typeof country === "string" && /^[A-Z]{2}$/.test(country) ? country : "";
  } catch {
    return "";
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();

  useEffect(() => {
    const detected = detectLocale();
    const params = new URLSearchParams(window.location.search);
    const forced = params.has("currency") || params.has("region");
    const country = forced ? "" : savedCountry();
    setLocaleState(
      country
        ? { ...detected, region: country, currency: params.get("currency") ? detected.currency : currencyForRegion(country) }
        : detected,
    );

    const themeQuery = params.get("theme");
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const dark = themeQuery ? themeQuery === "dark" : theme.matches;
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    };
    applyTheme();
    if (themeQuery) return;
    theme.addEventListener("change", applyTheme);
    return () => theme.removeEventListener("change", applyTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale.locale;
    document.documentElement.dir = locale.dir;
  }, [locale]);

  return children;
}
