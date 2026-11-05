// Rewrites India-specific sample strings for the visitor's region. Numbers stay
// in the source data; money formatters convert them separately.

import { formatFromInr, getLocaleState, type LocaleState } from "./locale";

export type RegionSample = {
  id: string;
  phones: string[];
  places: string[];
  addresses: string[];
  methods: string[];
  surnames: string[];
  first: string;
  last: string;
  email: string;
  holiday: string;
};

const SURNAMES = [
  "Sharma", "Mehta", "Khan", "Fernandes", "George", "Iyer", "Shah", "Paul", "Reddy", "Ali", "Thomas", "Pillai", "Kumar",
  "Das", "Varma", "Bhat", "Menon", "Qureshi", "Nair", "Pinto", "Joshi", "Kulkarni", "Rao", "Gupta", "Bose", "Mathew",
  "Roy", "Kapoor", "Singh", "Varghese", "Agarwal", "D'Souza", "D’Souza", "Iqbal", "Banerjee", "Chatterjee", "Patel",
];

function sample(
  id: string,
  phones: string[],
  places: string[],
  addresses: string[],
  methods: string[],
  surnames: string[],
  first: string,
  last: string,
  email: string,
  holiday: string,
): RegionSample {
  return { id, phones, places, addresses, methods, surnames, first, last, email, holiday };
}

const US = sample(
  "us",
  ["+1 415 555 0142", "+1 212 555 0198", "+1 206 555 0134", "+1 312 555 0177", "+1 617 555 0119", "+1 305 555 0160", "+1 512 555 0188", "+1 303 555 0104"],
  ["Austin", "Denver", "Seattle", "Chicago", "Brooklyn", "Oakland"],
  ["120 Congress Ave, Austin, TX 78701", "88 Larimer St, Denver, CO 80202", "410 Pine St, Seattle, WA 98101"],
  ["Card", "Apple Pay", "Card"],
  ["Nguyen", "Bennett", "Okoye", "Silva", "Brooks", "Chen", "Wright", "Garcia", "Hassan", "Cooper", "Diaz", "Reed", "Alvarez", "Kim", "Murphy", "Rossi", "Cohen", "Walsh", "Parker", "Evans", "Foster", "Hughes", "Powell", "Price", "Bailey", "Howard", "Ward", "Cox", "Gray", "James", "Torres", "Long", "Myers"],
  "Alex",
  "Morgan",
  "alex@company.com",
  "a public holiday",
);

const GB = sample(
  "gb",
  ["+44 7700 900128", "+44 7700 900244", "+44 7700 900381", "+44 7700 900456", "+44 7700 900512", "+44 20 7946 0991"],
  ["Manchester", "Bristol", "Edinburgh", "Leeds", "Cardiff", "Brighton"],
  ["18 King Street, Manchester M2 6AG", "9 Park Row, Bristol BS1 5LJ", "40 George Street, Edinburgh EH2 2LE"],
  ["Card", "Apple Pay", "Card"],
  ["Adeyemi", "Hughes", "Okafor", "Clarke", "Murphy", "Reid", "Khan", "Walsh", "Campbell", "Edwards", "Bennett", "Shaw", "Patel", "Green", "Wood", "Bell", "Cook", "Morgan", "Rogers", "Perry", "Barnes", "Fisher", "Hayes", "Graham", "Owen", "Webb", "Knight", "Hunt", "Rose", "Stone", "Fox", "Marsh", "Cole"],
  "Sam",
  "Adeyemi",
  "sam@company.co.uk",
  "a bank holiday",
);

const EU = sample(
  "eu",
  ["+49 151 23456701", "+33 6 12 34 56 78", "+34 612 345 678", "+31 6 12345678", "+39 347 123 4567", "+351 91 234 5678"],
  ["Lyon", "Hamburg", "Porto", "Utrecht", "Milan", "Valencia"],
  ["12 Rue de la République, 69002 Lyon", "22 Jungfernstieg, 20354 Hamburg", "40 Rua de Santa Catarina, 4000-442 Porto"],
  ["Card", "Bank transfer", "Card"],
  ["Rossi", "Bernard", "Keller", "Silva", "Novak", "Costa", "Moreau", "Hoffmann", "Ferrari", "Berg", "Dubois", "Weber", "Conti", "Lopes", "Meier", "Blanc", "Schulz", "Greco", "Vermeer", "Santos", "Fischer", "Romano", "Petit", "Kruger", "Almeida", "Lefevre", "Bauer", "Ricci", "Nunes", "Simon", "Vogel", "Marino", "David"],
  "Mina",
  "Rossi",
  "mina@company.com",
  "a public holiday",
);

const AE = sample(
  "ae",
  ["+971 50 123 4501", "+971 52 234 4502", "+971 55 345 4503", "+971 58 456 4504", "+971 4 123 4500"],
  ["Dubai Marina", "Jumeirah", "Abu Dhabi", "Al Barsha", "Deira", "Sharjah"],
  ["Marina Gate, Dubai Marina", "Al Maryah Island, Abu Dhabi", "Jumeirah Beach Road, Dubai"],
  ["Card", "Apple Pay", "Card"],
  ["Hassan", "Farouk", "Nasser", "Rahman", "El-Sayed", "Haddad", "Mansour", "Karim", "Saleh", "Noor", "Aziz", "Ibrahim", "Yousef", "Malik", "Darwish", "Hamdan", "Qureshi", "Saeed", "Farah", "Nabil", "Amin", "Zayed", "Latif", "Hariri", "Osman", "Bakr", "Fayed", "Nasr", "Kamal", "Sharif", "Adel", "Tariq", "Bader"],
  "Leila",
  "Hassan",
  "leila@company.com",
  "a public holiday",
);

const SG = sample(
  "sg",
  ["+65 8123 4501", "+65 8234 4502", "+65 8345 4503", "+65 8456 4504", "+65 9123 4505", "+65 6234 4500"],
  ["Tanjong Pagar", "Holland Village", "Katong", "Novena", "Jurong", "Bugis"],
  ["8 Robinson Road, Singapore 048544", "44 Holland Drive, Singapore 270044", "120 East Coast Road, Singapore 428802"],
  ["Card", "PayNow", "Card"],
  ["Tan", "Lim", "Ng", "Wong", "Goh", "Chen", "Koh", "Ong", "Teo", "Yeo", "Ho", "Chua", "Lee", "Chan", "Toh", "Sim", "Ang", "Loh", "Phua", "Seah", "Wee", "Tay", "Quek", "Low", "Pang", "Soh", "Chia", "Foo", "Kek", "Lai", "Poh", "Seng", "Yap"],
  "Wei",
  "Tan",
  "wei@company.com",
  "a public holiday",
);

const AU = sample(
  "au",
  ["+61 412 345 201", "+61 423 456 202", "+61 434 567 203", "+61 445 678 204", "+61 2 9123 4501"],
  ["Surry Hills", "Fitzroy", "Fortitude Valley", "Fremantle", "Hobart", "Bondi"],
  ["20 Crown Street, Surry Hills NSW 2010", "88 Brunswick Street, Fitzroy VIC 3065", "15 James Street, Fortitude Valley QLD 4006"],
  ["Card", "Apple Pay", "Card"],
  ["Nguyen", "Wilson", "Campbell", "Taylor", "Brown", "Martin", "Thompson", "White", "Walker", "Harris", "Young", "King", "Wright", "Scott", "Green", "Adams", "Baker", "Nelson", "Carter", "Mitchell", "Roberts", "Turner", "Phillips", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Morris", "Murphy", "Cook", "Rogers", "Reed"],
  "Jordan",
  "Nguyen",
  "jordan@company.com",
  "a public holiday",
);

const CA = sample(
  "ca",
  ["+1 416 555 0148", "+1 604 555 0172", "+1 514 555 0194", "+1 403 555 0116", "+1 613 555 0183"],
  ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Halifax"],
  ["100 King Street W, Toronto, ON M5X 1A9", "555 Burrard Street, Vancouver, BC V6C 2B5", "1250 René-Lévesque, Montreal, QC H3B 4W8"],
  ["Card", "Interac", "Card"],
  ["Tremblay", "Campbell", "Singh", "MacDonald", "Roy", "Gagnon", "Wilson", "Brown", "Martin", "Lee", "Anderson", "Taylor", "Thomas", "Jackson", "White", "Harris", "Clark", "Lewis", "Young", "Walker", "Hall", "Allen", "Wright", "King", "Scott", "Green", "Adams", "Baker", "Nelson", "Carter", "Mitchell", "Perez", "Roberts"],
  "Noah",
  "Tremblay",
  "noah@company.com",
  "a public holiday",
);

const INTL = sample(
  "intl",
  ["+1 415 555 0142", "+44 7700 900128", "+49 151 23456701", "+61 412 345 201", "+65 8123 4501", "+971 50 123 4501"],
  ["Lisbon", "Austin", "Singapore", "Nairobi", "Seoul", "Mexico City"],
  ["120 Congress Ave, Austin, TX 78701", "18 King Street, Manchester M2 6AG", "8 Robinson Road, Singapore 048544"],
  ["Card", "Wallet", "Card"],
  US.surnames,
  "Alex",
  "Morgan",
  "alex@company.com",
  "a public holiday",
);

const EURO = new Set(["AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK", "AD", "MC", "SM", "VA", "ME", "XK"]);

const IN = sample(
  "in",
  ["+91 98765 43210", "+91 98100 12345", "+91 90000 11122"],
  ["Bengaluru", "Hyderabad", "Mumbai"],
  ["12 MG Road, Bengaluru 560001", "44 80 Feet Road, Koramangala, Bengaluru 560034", "7 ITPL Main Road, Whitefield, Bengaluru 560066"],
  ["UPI", "Card", "UPI"],
  SURNAMES,
  "Arjun",
  "Sharma",
  "arjun@company.com",
  "a public holiday",
);

export function sampleFor(region: string): RegionSample {
  if (region === "IN") return IN;
  if (region === "US") return US;
  if (region === "GB") return GB;
  if (region === "AE") return AE;
  if (region === "SG") return SG;
  if (region === "AU") return AU;
  if (region === "CA") return CA;
  if (EURO.has(region)) return EU;
  if (region === "IN") return US;
  return INTL;
}

const PHRASES: [string, string][] = [
  ["Required in India for promotional calls.", "Follow the calling rules where you operate."],
  ["Business calls in India need a registered number series.", "Business calls may need a registered number where you operate."],
  ["In India: DLT registration for business calling (we guide you)", "Local business-calling registration, where your country requires it"],
  ["In India: DLT sender ID and template registration", "Local sender ID and template registration, where required"],
  ["DLT registration (India)", "Calling registration"],
  ["Get GST invoices", "Get tax invoices"],
  ["Add your GSTIN in Settings, General. Every invoice after that shows GST so you can claim input credit.", "Add your tax ID in Settings, General. Invoices after that show tax where it applies."],
  ["Yes. We accept cash, cards and UPI.", "Yes. We accept cards and the payment methods common where you are."],
  ["We accept cash, cards and UPI.", "We accept cards and the payment methods common where you are."],
  ["Can I pay by card or UPI?", "Can I pay by card?"],
  ["Do you take UPI?", "Which cards do you take?"],
  ["Paid by UPI", "Paid by card"],
  ["Warm, Indian English and Hindi", "Warm, clear English"],
  ["Calm, Indian English and Telugu", "Calm, clear English"],
  ["Bright, Indian English and Tamil", "Bright, clear English"],
  ["Namaste. ", "Hello. "],
];

const PLACES = /\b(Bengaluru|Bangalore|Hyderabad|Visakhapatnam|Mumbai|Chennai|Delhi|Pune|Kolkata|Koramangala|Whitefield|Indiranagar|MG Road|ITPL Main Road|80 Feet Road)\b/g;
const PHONE = /\+91(?:[\s\u00a0\u202f]*[\d•]){6,18}/g;
const RUPEE = /₹\s?(\d[\d,]*(?:\.\d+)?)/g;
const KNOWN_ADDRESS = /12 MG Road, Bengaluru 560001|44 80 Feet Road, Koramangala, Bengaluru 560034|7 ITPL Main Road, Whitefield, Bengaluru 560066/g;

function hash(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) h = Math.imul(h ^ value.charCodeAt(i), 16777619);
  return h >>> 0;
}

function pick<T>(list: T[], key: string) {
  return list[hash(key) % list.length];
}

export function localizeString(value: string, state: LocaleState = getLocaleState()) {
  if (state.region === "IN" || !value) return value;
  const sampleSet = sampleFor(state.region);
  let next = value;
  for (const [from, to] of PHRASES) next = next.replaceAll(from, to);
  next = next.replace(KNOWN_ADDRESS, (address) => pick(sampleSet.addresses, address));
  next = next.replace(PLACES, (place) => pick(sampleSet.places, place));
  next = next.replace(/\b5600\d\d\b/g, "00000");
  next = next.replace(PHONE, (phone) => pick(sampleSet.phones, phone));
  next = next.replaceAll("+91", sampleSet.phones[0].split(" ").slice(0, 1).join(" ") || "+1");
  next = next.replace(/\bUPI\b/g, (method) => pick(sampleSet.methods, method + next));
  next = next.replace(/\bGSTIN\b/g, "tax ID");
  next = next.replace(/\bGST\b/g, "tax");
  next = next.replace(/\bDiwali\b/g, sampleSet.holiday);
  next = next.replace(/\bArjun\b/g, sampleSet.first);
  const surname = new Map(SURNAMES.map((name, index) => [name, sampleSet.surnames[index % sampleSet.surnames.length]]));
  next = next.replace(/\b([A-Z][\p{L}'’]+)\b/gu, (word) => surname.get(word) ?? word);
  next = next.replace(RUPEE, (_m, raw: string) => {
    const amount = Number(raw.replace(/,/g, ""));
    return Number.isFinite(amount) ? formatFromInr(amount, state) : _m;
  });
  return next;
}

const cache = new WeakMap<object, { state: LocaleState; value: unknown }>();

export function regionalize<T>(value: T, state: LocaleState = getLocaleState()): T {
  if (typeof value === "string") return localizeString(value, state) as T;
  if (state.region === "IN" || typeof value !== "object" || value === null) return value;
  if (value instanceof Date) return value;
  const hit = cache.get(value);
  if (hit && hit.state === state) return hit.value as T;
  const seen = new WeakMap<object, unknown>();
  const walk = (node: unknown): unknown => {
    if (typeof node === "string") return localizeString(node, state);
    if (typeof node !== "object" || node === null || node instanceof Date) return node;
    const existing = seen.get(node);
    if (existing) return existing;
    if (Array.isArray(node)) {
      const copy: unknown[] = [];
      seen.set(node, copy);
      for (const item of node) copy.push(walk(item));
      return copy;
    }
    const copy: Record<string, unknown> = {};
    seen.set(node, copy);
    for (const key of Object.keys(node)) copy[key] = walk((node as Record<string, unknown>)[key]);
    return copy;
  };
  const next = walk(value) as T;
  cache.set(value, { state, value: next });
  return next;
}

/** A live view of demo data. Each read follows the current locale. */
export function regionalView<T extends object>(raw: T): T {
  return new Proxy(raw, {
    get(target, prop) {
      const next = regionalize(target);
      const value = Reflect.get(next as object, prop);
      return typeof value === "function" ? (value as (...args: unknown[]) => unknown).bind(next) : value;
    },
  });
}
