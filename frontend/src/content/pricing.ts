// Everything on the pricing page comes from here: plans, the plan picker,
// the comparison table and the FAQ.
// Prices are per month. Annual prices are the monthly equivalent with two
// months free (monthly × 10 / 12, rounded). Meta's WhatsApp template fees are
// passed on at cost and are not included.


import type { Currency } from "@/lib/locale";

export type { Currency };
export type PlanId = "starter" | "growth" | "pro";
export type Billing = "monthly" | "annual";

export type Plan = {
  id: PlanId;
  name: string;
  promise: string;
  bestFor: string;
  /** Kept so older call sites compile. The cards no longer draw a tier mark. */
  dots: number;
  popular?: boolean;
  /** Leave undefined to show `priceNote` instead. */
  price?: Record<Currency, Record<Billing, number>>;
  /** Show the price as a starting point ("From $399"). */
  from?: boolean;
  priceNote: string;
  /** Button on the plan card; it starts sign-up with this plan selected. */
  cta: string;
  highlights: string[];
  limits: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    dots: 1,
    name: "Starter",
    promise: "Never miss a message",
    bestFor: "A single location losing customers to slow replies and missed calls",
    price: {
      USD: { monthly: 49, annual: 41 },
      EUR: { monthly: 45, annual: 38 },
      GBP: { monthly: 39, annual: 33 },
      INR: { monthly: 2999, annual: 2499 },
      AUD: { monthly: 75, annual: 63 },
      CAD: { monthly: 69, annual: 58 },
      SGD: { monthly: 65, annual: 54 },
      AED: { monthly: 179, annual: 149 },
    },
    priceNote: "WhatsApp fees passed on at cost.",
    cta: "Start free pilot",
    highlights: [
      "AI replies on WhatsApp, 24/7, in any language",
      "Missed call → WhatsApp in seconds",
      "Booking page, calendar and reminders",
      "Website lead capture, WhatsApp button and QR",
      "Morning report on WhatsApp at 8 AM",
    ],
    limits: ["1,000 AI conversations / month", "2 team seats", "1-step follow-up"],
  },
  {
    id: "growth",
    dots: 2,
    name: "Growth",
    promise: "Every channel and every call",
    bestFor: "A busy business with steady calls and social media enquiries",
    popular: true,
    price: {
      USD: { monthly: 149, annual: 124 },
      EUR: { monthly: 139, annual: 116 },
      GBP: { monthly: 119, annual: 99 },
      INR: { monthly: 7999, annual: 6666 },
      AUD: { monthly: 229, annual: 191 },
      CAD: { monthly: 199, annual: 166 },
      SGD: { monthly: 199, annual: 166 },
      AED: { monthly: 549, annual: 458 },
    },
    priceNote: "WhatsApp fees passed on at cost.",
    cta: "Start free pilot",
    highlights: [
      "Everything in Starter",
      "AI answers incoming calls, with summaries",
      "Instagram, Messenger and website chat",
      "Ad leads contacted within a minute",
      "Lead scoring and Google review requests",
    ],
    limits: ["3,000 AI conversations / month", "300 voice minutes / month", "5 team seats"],
  },
  {
    id: "pro",
    dots: 3,
    name: "Pro",
    promise: "Grow and bring customers back",
    bestFor: "Multi-location businesses and teams that sell actively",
    price: {
      USD: { monthly: 399, annual: 333 },
      EUR: { monthly: 369, annual: 308 },
      GBP: { monthly: 319, annual: 266 },
      INR: { monthly: 19999, annual: 16666 },
      AUD: { monthly: 599, annual: 499 },
      CAD: { monthly: 529, annual: 441 },
      SGD: { monthly: 529, annual: 441 },
      AED: { monthly: 1469, annual: 1224 },
    },
    from: true,
    priceNote: "Final price depends on locations and usage.",
    cta: "Start free pilot",
    highlights: [
      "Everything in Growth",
      "AI calls new leads who enquired",
      "Payment links and polite reminders",
      "Broadcasts, win-back and rebooking",
      "Multi-branch and integrations",
    ],
    limits: ["Custom AI conversations", "1,000 voice minutes / month", "Unlimited seats"],
  },
];

/** Allowances per plan, for usage bars and seat counts. Pro conversations are custom; this is the default allowance. */
export const planLimits: Record<PlanId, { conversations: number; minutes: number; seats: number; followUps: number }> = {
  starter: { conversations: 1000, minutes: 0, seats: 2, followUps: 1 },
  growth: { conversations: 3000, minutes: 300, seats: 5, followUps: 3 },
  pro: { conversations: 6000, minutes: 1000, seats: Infinity, followUps: 3 },
};

/** Charged when a month goes over its allowance; nothing stops working. */
export const overage: Record<Currency, { conversation: number; minute: number }> = {
  USD: { conversation: 0.02, minute: 0.08 },
  EUR: { conversation: 0.02, minute: 0.07 },
  GBP: { conversation: 0.02, minute: 0.06 },
  INR: { conversation: 1.5, minute: 6 },
  AUD: { conversation: 0.03, minute: 0.12 },
  CAD: { conversation: 0.03, minute: 0.11 },
  SGD: { conversation: 0.03, minute: 0.11 },
  AED: { conversation: 0.08, minute: 0.3 },
};

// ---------- Plan picker ----------

export type PickerQuestion = {
  id: string;
  question: string;
  options: { label: string; score: Partial<Record<PlanId, number>> }[];
};

export const pickerQuestions: PickerQuestion[] = [
  {
    id: "calls",
    question: "How many calls do you get on a busy day?",
    options: [
      { label: "A few", score: { starter: 2 } },
      { label: "10–40", score: { growth: 2 } },
      { label: "More than 40", score: { growth: 1, pro: 2 } },
    ],
  },
  {
    id: "channels",
    question: "Where do customers message you?",
    options: [
      { label: "Mostly WhatsApp", score: { starter: 2 } },
      { label: "WhatsApp + Instagram or website", score: { growth: 2 } },
      { label: "Everywhere, plus ads", score: { growth: 1, pro: 1 } },
    ],
  },
  {
    id: "branches",
    question: "How many locations do you run?",
    options: [
      { label: "One", score: { starter: 1, growth: 1 } },
      { label: "Two or more", score: { pro: 3 } },
    ],
  },
  {
    id: "goal",
    question: "What matters most right now?",
    options: [
      { label: "Reply to everyone fast", score: { starter: 2 } },
      { label: "Answer every call", score: { growth: 2 } },
      { label: "Bring customers back and get paid", score: { pro: 2 } },
    ],
  },
];

// ---------- Comparison table ----------

type Cell = boolean | string;
export type FeatureRow = { name: string; info: string; values: Record<PlanId, Cell> };
export type FeatureGroup = { title: string; rows: FeatureRow[] };

const all = { starter: true, growth: true, pro: true };
const growthUp = { starter: false, growth: true, pro: true };
const proOnly = { starter: false, growth: false, pro: true };

export const featureGroups: FeatureGroup[] = [
  {
    title: "Channels",
    rows: [
      { name: "AI replies on WhatsApp", info: "Answers in seconds, 24/7, only from your own information.", values: all },
      { name: "Missed call → WhatsApp", info: "Callers you couldn't answer get a WhatsApp within seconds.", values: all },
      { name: "Website lead capture, WhatsApp button, QR", info: "Enquiries from your existing website and shop reach Vegam.", values: all },
      { name: "AI answers incoming calls", info: "A voice agent answers, books and transfers to staff when needed.", values: { starter: false, growth: "300 min", pro: "1,000 min" } },
      { name: "Instagram, Messenger, website chat", info: "All social and website chats in the same inbox.", values: growthUp },
      { name: "Ad lead forms (Meta, Google)", info: "New ad leads are contacted within a minute.", values: growthUp },
      { name: "AI calls new leads", info: "Calls people who enquired, within the legal window and hours.", values: proOnly },
    ],
  },
  {
    title: "Bookings",
    rows: [
      { name: "Booking page and calendar", info: "Customers book in chat or with a link you can share anywhere.", values: all },
      { name: "Reminders with Confirm / Reschedule", info: "A reminder the day before; customers reply to change plans.", values: all },
      { name: "Calendar sync (Google, Calendly)", info: "Keep your existing booking tool; Vegam handles reminders.", values: growthUp },
      { name: "Payment links and deposits", info: "Stripe payment links, with polite reminders until paid.", values: proOnly },
    ],
  },
  {
    title: "Leads and growth",
    rows: [
      { name: "Automatic follow-ups", info: "Gentle nudges to people who went quiet; stops on reply or STOP.", values: { starter: "1 step", growth: "3 steps", pro: "3 steps" } },
      { name: "Lead scoring (Hot / Warm / Cold)", info: "Your team sees who to call first.", values: growthUp },
      { name: "Google review requests and replies", info: "Ask happy customers for reviews; AI drafts replies.", values: growthUp },
      { name: "Broadcasts, win-back and rebooking", info: "Messages to opted-in customers to bring them back.", values: proOnly },
    ],
  },
  {
    title: "Team and reports",
    rows: [
      { name: "Team inbox with take over", info: "Step into any chat; the AI pauses for that conversation.", values: { starter: "2 seats", growth: "5 seats", pro: "Unlimited" } },
      { name: "AI conversations per month", info: "One conversation is everything a customer says in 24 hours.", values: { starter: "1,000", growth: "3,000", pro: "Custom" } },
      { name: "Morning report on WhatsApp", info: "Yesterday's enquiries, bookings and calls at 8 AM.", values: all },
      { name: "Owner's WhatsApp assistant", info: "Ask “Bookings today?” or “Block Friday” from your phone.", values: { starter: "Basic", growth: true, pro: true } },
      { name: "Weekly “what Vegam won you” report", info: "Bookings, recovered calls and estimated value.", values: growthUp },
      { name: "Multi-branch", info: "One inbox and calendar across locations.", values: proOnly },
      { name: "Integrations (Sheets, Zoho, Tally, Shopify)", info: "Bookings and leads flow into the tools you already use.", values: proOnly },
      { name: "Custom AI voice and persona", info: "Your chosen name, tone and voice.", values: proOnly },
      { name: "Priority support", info: "Faster help from the Vegam team.", values: proOnly },
    ],
  },
];

// ---------- FAQ ----------

export const faqs: { q: string; a: string }[] = [
  {
    q: "Which plan should I start with?",
    a: "Most businesses start with Growth because it answers calls as well as messages. If customers mainly reach you on WhatsApp, Starter is enough. Use the plan picker above, or ask us.",
  },
  {
    q: "How does the 30-day pilot work?",
    a: "In week 1 we set you up and measure today's baseline: replies, missed calls and bookings. In weeks 2–4 Vegam runs your front desk and you see the difference in your morning report. On day 30 you choose a plan or stop. Export of your data is planned and is not available yet.",
  },
  {
    q: "What counts as an AI conversation?",
    a: "Everything one customer says to Vegam within 24 hours counts as one conversation, however many messages. For example, asking the price, picking a slot and confirming is one conversation.",
  },
  {
    q: "How are voice minutes counted?",
    a: "Each minute the AI spends on a call, rounded up to the nearest minute. A 2½ minute booking call uses 3 minutes.",
  },
  {
    q: "Who pays WhatsApp's fees?",
    a: "Replies within 24 hours of a customer's message are free. Reminders and follow-ups sent after that use Meta's message templates, which have a small fee per message. We pass these on at cost.",
  },
  {
    q: "Are taxes included?",
    a: "Prices exclude tax. VAT, GST or sales tax is added on your invoice, based on where your business is based.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Move up or down at any time; changes apply from your next billing period.",
  },
  {
    q: "Do I need a new WhatsApp number?",
    a: "Often not: many numbers can keep using the WhatsApp Business app alongside Vegam. If yours can't, we'll help you set up a separate number. We check this during setup.",
  },
  {
    q: "What happens if I go over my allowance?",
    a: "Nothing stops working. Extra AI conversations and voice minutes are billed in your currency, and we'll tell you before you reach your limit.",
  },
  {
    q: "Will customers know they're talking to an AI?",
    a: "Yes. Vegam says it's an AI assistant when asked and at the start of every call, and hands over to a person whenever someone asks.",
  },
  {
    q: "Does Vegam make up answers?",
    a: "No. It answers only from the information you approve. When it isn't sure, or a customer is upset, it hands the chat to your team.",
  },
  {
    q: "Is my customers' data safe?",
    a: "We do not sell personal data, and we do not plan to use it to train general AI models. Encryption, separation of each business's data, and export or deletion are planned. None of them is in place yet, and this site does not store customer data.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. There's no lock-in on monthly plans. Export of contacts and conversations before you leave is planned and is not available yet.",
  },
];
