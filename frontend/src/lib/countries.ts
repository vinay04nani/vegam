import { getCountries, getCountryCallingCode, getExampleNumber, isValidPhoneNumber, type CountryCode } from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";
import { getLocaleState } from "./locale";

export type CountryOption = { id: string; name: string; dial: string };

const ZONES: Record<string, string> = {
  AE: "Asia/Dubai", AR: "America/Argentina/Buenos_Aires", AT: "Europe/Vienna", AU: "Australia/Sydney", BE: "Europe/Brussels",
  BG: "Europe/Sofia", BR: "America/Sao_Paulo", CA: "America/Toronto", CH: "Europe/Zurich", CL: "America/Santiago",
  CN: "Asia/Shanghai", CO: "America/Bogota", CY: "Asia/Nicosia", CZ: "Europe/Prague", DE: "Europe/Berlin", DK: "Europe/Copenhagen",
  EE: "Europe/Tallinn", EG: "Africa/Cairo", ES: "Europe/Madrid", FI: "Europe/Helsinki", FR: "Europe/Paris", GB: "Europe/London",
  GH: "Africa/Accra", GR: "Europe/Athens", HK: "Asia/Hong_Kong", HR: "Europe/Zagreb", HU: "Europe/Budapest", ID: "Asia/Jakarta",
  IE: "Europe/Dublin", IL: "Asia/Jerusalem", IN: "Asia/Kolkata", IT: "Europe/Rome", JP: "Asia/Tokyo", KE: "Africa/Nairobi",
  KR: "Asia/Seoul", LT: "Europe/Vilnius", LU: "Europe/Luxembourg", LV: "Europe/Riga", MA: "Africa/Casablanca", MT: "Europe/Malta",
  MX: "America/Mexico_City", MY: "Asia/Kuala_Lumpur", NG: "Africa/Lagos", NL: "Europe/Amsterdam", NO: "Europe/Oslo", NZ: "Pacific/Auckland",
  PH: "Asia/Manila", PK: "Asia/Karachi", PL: "Europe/Warsaw", PT: "Europe/Lisbon", QA: "Asia/Qatar", RO: "Europe/Bucharest",
  SA: "Asia/Riyadh", SE: "Europe/Stockholm", SG: "Asia/Singapore", SI: "Europe/Ljubljana", SK: "Europe/Bratislava", TH: "Asia/Bangkok",
  TR: "Europe/Istanbul", TW: "Asia/Taipei", UA: "Europe/Kyiv", US: "America/New_York", VN: "Asia/Ho_Chi_Minh", ZA: "Africa/Johannesburg",
};

export function listCountries(locale = getLocaleState().locale): CountryOption[] {
  const names = new Intl.DisplayNames([locale, "en"], { type: "region" });
  return getCountries()
    .map((id) => ({
      id,
      name: names.of(id) ?? id,
      dial: `+${getCountryCallingCode(id)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, locale));
}

export function countryById(id: string, locale?: string) {
  return listCountries(locale).find((c) => c.id === id);
}

export function exampleNational(id: string) {
  try {
    return getExampleNumber(id as CountryCode, examples)?.formatNational() ?? "";
  } catch {
    return "";
  }
}

export function isPhoneValid(number: string, country: string) {
  const trimmed = number.trim();
  if (!trimmed) return false;
  try {
    return isValidPhoneNumber(trimmed, country as CountryCode);
  } catch {
    return false;
  }
}

export function zoneForCountry(code: string) {
  return ZONES[code] ?? null;
}

export function timeZoneLabel(zone: string, locale = getLocaleState().locale) {
  try {
    const parts = new Intl.DateTimeFormat(locale, { timeZone: zone, timeZoneName: "longOffset" }).formatToParts(new Date());
    const offset = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
    const place = zone.split("/").pop()?.replace(/_/g, " ") ?? zone;
    return offset ? `${place} (${offset})` : place;
  } catch {
    return "Local time";
  }
}
