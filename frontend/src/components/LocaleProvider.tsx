"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { currencyForRegion, detectLocale, getLocaleState, setLocaleState, subscribeLocale, type LocaleState, DEFAULT_LOCALE } from "@/lib/locale";

const ONBOARDING_KEY = "vegam.onboarding.v2";

const ENGLISH_BLOCKS = "p, h1, h2, h3, h4, h5, h6, li, td, th, label, figcaption, blockquote, dd, dt, caption, .light-surface";
const RTL_LANG = /^(ar|he|fa|ur|yi|dv|ps)\b/i;

/** English copy stays left-to-right inside an RTL shell, so punctuation and times do not flip. */
function markEnglishIslands(rtl: boolean) {
  document.querySelectorAll<HTMLElement>("[data-en-island]").forEach((el) => {
    el.removeAttribute("dir");
    el.removeAttribute("data-en-island");
  });
  if (!rtl) return;

  const mark = (el: Element) => {
    if (!(el instanceof HTMLElement) || el.hasAttribute("data-en-island")) return;
    if (el.getAttribute("dir") === "rtl" || el.getAttribute("dir") === "ltr" || RTL_LANG.test(el.getAttribute("lang") || "")) return;
    if (el.parentElement?.closest("[data-en-island], [dir='ltr']")) return;
    el.dir = "ltr";
    el.setAttribute("data-en-island", "");
  };

  document.querySelectorAll(ENGLISH_BLOCKS).forEach(mark);
  document.querySelectorAll("span, a, strong, em, time, div").forEach((el) => {
    if (el.closest("[data-en-island], [dir='ltr']")) return;
    const text = [...el.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && (node.textContent || "").trim().length > 0);
    if (!text || el.children.length > 0) return;
    mark(el);
  });
}

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
    markEnglishIslands(locale.dir === "rtl");
    if (locale.dir !== "rtl") return;
    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => markEnglishIslands(true));
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [locale]);

  return children;
}
