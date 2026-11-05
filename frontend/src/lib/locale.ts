// Visitor locale for a static export: detected in the browser, with a stable
// US default on the server so the first HTML matches hydration.

export const CURRENCIES = ["USD", "EUR", "GBP", "INR", "AUD", "CAD", "SGD", "AED"] as const;
export type Currency = (typeof CURRENCIES)[number];

export type TextDirection = "ltr" | "rtl";

export type LocaleState = {
  locale: string;
  timeZone: string;
  region: string;
  currency: Currency;
  dir: TextDirection;
};

export const DEFAULT_LOCALE: LocaleState = {
  locale: "en",
  timeZone: "UTC",
  region: "US",
  currency: "USD",
  dir: "ltr",
};

/** Eurozone and microstates we bill in euros. */
const EURO = new Set([
  "AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK",
  "AD", "MC", "SM", "VA", "ME", "XK",
]);

const GST = new Set(["IN", "AU", "SG", "NZ"]);
const SALES_TAX = new Set(["US", "CA"]);

const REGION_CURRENCY: Partial<Record<string, Currency>> = {
  US: "USD",
  IN: "INR",
  GB: "GBP",
  AE: "AED",
  AU: "AUD",
  CA: "CAD",
  SG: "SGD",
};

for (const code of EURO) REGION_CURRENCY[code] = "EUR";

/** Fixed demo rates: sample amounts are stored in rupees and shown in the visitor's currency. Not live FX. */
const INR_PER: Record<Currency, number> = {
  INR: 1,
  USD: 83,
  EUR: 90,
  GBP: 105,
  AUD: 54,
  CAD: 61,
  SGD: 62,
  AED: 22.6,
};

const RTL = /^(ar|he|fa|ur|yi|dv|ps|ckb|sd)\b/i;

export function currencyForRegion(region: string): Currency {
  return REGION_CURRENCY[region] ?? "USD";
}

export function dirForLocale(locale: string): TextDirection {
  return RTL.test(locale) ? "rtl" : "ltr";
}

function regionFromTimeZone(timeZone: string): string {
  if (timeZone === "Asia/Kolkata" || timeZone === "Asia/Calcutta") return "IN";
  if (timeZone === "Europe/London") return "GB";
  if (timeZone === "Europe/Dublin") return "IE";
  if (timeZone.startsWith("Europe/")) return "DE";
  if (timeZone.startsWith("Australia/")) return "AU";
  if (timeZone === "Asia/Singapore") return "SG";
  if (timeZone === "Asia/Dubai") return "AE";
  if (
    timeZone === "America/Toronto" ||
    timeZone === "America/Vancouver" ||
    timeZone === "America/Winnipeg" ||
    timeZone === "America/Edmonton" ||
    timeZone === "America/Halifax" ||
    timeZone === "America/St_Johns" ||
    timeZone === "America/Regina" ||
    timeZone === "America/Moncton"
  ) {
    return "CA";
  }
  if (timeZone.startsWith("America/")) return "US";
  return "US";
}

function queryOverride(): { currency?: Currency; region?: string } {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const currency = params.get("currency")?.toUpperCase();
  const region = params.get("region")?.toUpperCase();
  return {
    currency: currency && (CURRENCIES as readonly string[]).includes(currency) ? (currency as Currency) : undefined,
    region: region && /^[A-Z]{2}$/.test(region) ? region : undefined,
  };
}

/** Browser language, then time zone. `?currency=` and `?region=` override for checks. */
export function detectLocale(): LocaleState {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const locale = navigator.language || "en";
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const override = queryOverride();
  const sub = locale.split("-")[1];
  const fromTag = sub && /^[A-Za-z]{2}$/.test(sub) ? sub.toUpperCase() : "";
  const region = override.region || fromTag || regionFromTimeZone(timeZone);
  const currency = override.currency || currencyForRegion(region);
  return { locale, timeZone, region, currency, dir: dirForLocale(locale) };
}

let current: LocaleState = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

export function getLocaleState(): LocaleState {
  return current;
}

export function setLocaleState(next: LocaleState) {
  current = next;
  listeners.forEach((listener) => listener());
}

export function subscribeLocale(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Dashboard country picker: keep the visitor's language, switch currency and samples. */
export function applyCountry(region: string) {
  const override = queryOverride();
  setLocaleState({
    ...current,
    region,
    currency: override.currency || currencyForRegion(region),
  });
}

/** Tax wording for the visitor's country. Prices themselves stay tax-exclusive. */
export function taxNote(region: string): "excl. GST" | "excl. VAT" | "plus sales tax" {
  if (GST.has(region)) return "excl. GST";
  if (SALES_TAX.has(region)) return "plus sales tax";
  return "excl. VAT";
}

/** Sample invoice rate where the rate is nationally fixed. EU VAT stays off the figure (rates differ). */
export function sampleTaxRate(region: string): number {
  if (region === "IN") return 0.18;
  if (region === "AU") return 0.1;
  if (region === "SG") return 0.09;
  if (region === "AE") return 0.05;
  return 0;
}

export function formatNumber(value: number, locale = getLocaleState().locale, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatCompact(value: number, locale = getLocaleState().locale) {
  return new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function formatMoney(amount: number, currency: Currency, locale = getLocaleState().locale, compact = false) {
  const abs = Math.abs(amount);
  const whole = Number.isInteger(amount) || abs >= 100;
  const digits = compact ? 1 : whole ? 0 : 2;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: digits,
    minimumFractionDigits: compact || whole ? 0 : 2,
  }).format(amount);
}

export function currencySymbol(currency: Currency, locale = getLocaleState().locale) {
  const part = new Intl.NumberFormat(locale, { style: "currency", currency, currencyDisplay: "narrowSymbol" })
    .formatToParts(0)
    .find((p) => p.type === "currency");
  return part?.value ?? currency;
}

/** Sample money is stored in rupees. */
/** Round local price from the sample's dollar and rupee points. */
export function localPrice(usd: number, inr: number, currency: Currency) {
  if (currency === "INR") return inr;
  if (currency === "USD") return usd;
  const perUsd: Record<Exclude<Currency, "INR" | "USD">, number> = { EUR: 0.92, GBP: 0.79, AUD: 1.5, CAD: 1.36, SGD: 1.34, AED: 3.67 };
  return Math.max(1, Math.round(usd * perUsd[currency]));
}

export function convertInr(amountInr: number, currency: Currency) {
  if (currency === "INR") return amountInr;
  const value = amountInr / INR_PER[currency];
  if (Math.abs(value) >= 1) return Math.round(value);
  return Math.round(value * 100) / 100;
}

export function formatFromInr(amountInr: number, state: LocaleState | undefined = getLocaleState(), compact = false) {
  const loc = state ?? getLocaleState();
  return formatMoney(convertInr(amountInr, loc.currency), loc.currency, loc.locale, compact);
}

export function formatDate(date: Date, state?: LocaleState, options: Intl.DateTimeFormatOptions = {}) {
  const loc = state ?? getLocaleState();
  return new Intl.DateTimeFormat(loc.locale, { timeZone: loc.timeZone, ...options }).format(date);
}

export function formatTime(date: Date, state = getLocaleState()) {
  return formatDate(date, state, { hour: "numeric", minute: "2-digit" });
}

export function formatDayMonth(date: Date, state = getLocaleState()) {
  return formatDate(date, state, { day: "numeric", month: "short" });
}

export function relativeDay(daysAgo: number, locale = getLocaleState().locale) {
  const text = new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(-daysAgo, "day");
  return text.charAt(0).toLocaleUpperCase(locale) + text.slice(1);
}
