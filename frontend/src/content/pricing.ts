// Everything on the pricing page comes from here: plans, the plan picker,
// how-it-works journeys, the comparison table, usage notes and the FAQ.
// To publish prices, fill in `price` on each plan (monthly and annual, per
// currency); the billing and currency switches appear automatically.

import type { ChatTab } from "./site";
import type { IconName } from "@/components/ui/Icon";
import type { Palette } from "@/components/ui/ArtTile";

export type PlanId = "starter" | "growth" | "pro";
export type Currency = "INR" | "USD";
export type Billing = "monthly" | "annual";

export type Plan = {
  id: PlanId;
  name: string;
  promise: string;
  bestFor: string;
  palette: Palette;
  popular?: boolean;
  /** Leave undefined until prices are decided. */
  price?: Record<Currency, Record<Billing, number>>;
  priceNote: string;
  cta: { label: string; topic: string };
  highlights: string[];
  limits: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    promise: "Never miss a message",
    bestFor: "A single location losing customers to slow replies and missed calls",
    palette: "saffron",
    priceNote: "Pilot pricing on request",
    cta: { label: "Start a pilot", topic: "pricing" },
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
    name: "Growth",
    promise: "Every channel and every call",
    bestFor: "A busy business with steady calls and social media enquiries",
    palette: "indigo",
    popular: true,
    priceNote: "Pilot pricing on request",
    cta: { label: "Start a pilot", topic: "pricing" },
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
    name: "Pro",
    promise: "Grow and bring customers back",
    bestFor: "Multi-location businesses and teams that sell actively",
    palette: "mist",
    priceNote: "Custom pricing",
    cta: { label: "Talk to us", topic: "pricing" },
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

export const currencySymbol: Record<Currency, string> = { INR: "₹", USD: "$" };

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

// ---------- How it works: one journey per plan ----------

export const journeys: Record<PlanId, { intro: string; steps: { icon: IconName; title: string; body: string }[]; chat: ChatTab[] }> = {
  starter: {
    intro: "A customer messages or calls while you're busy. Vegam answers, books and reminds, and you see it all in the morning.",
    steps: [
      { icon: "missed", title: "Missed call", body: "A caller rings out while you're with someone." },
      { icon: "message", title: "WhatsApp in seconds", body: "Vegam sends a friendly message with booking options." },
      { icon: "calendar", title: "Booked + reminded", body: "The slot is booked; a reminder goes the day before." },
      { icon: "sun", title: "Morning report", body: "You see every enquiry and booking at 8 AM." },
    ],
    chat: [
      {
        id: "starter-missed",
        label: "Missed call",
        color: "#C41010",
        chat: [
          { ai: true, text: "Hi, this is [Your business]. Sorry we missed your call! Want to book a visit or ask a question?" },
          { ai: false, text: "Do you have anything tomorrow morning?" },
          { ai: true, text: "Tomorrow at 10:30 AM is free. Shall I book it for you?" },
          { ai: false, text: "Yes please" },
          { ai: true, text: "Booked: tomorrow, 10:30 AM. I’ll remind you this evening." },
        ],
      },
      {
        id: "starter-reminder",
        label: "Reminder",
        color: "#2BB673",
        chat: [
          { ai: true, text: "Reminder: your visit with [Your business] is tomorrow at 10:30 AM. Confirm or reschedule?" },
          { ai: false, text: "Can we make it 12?" },
          { ai: true, text: "12:00 PM is free. Moved. See you tomorrow!" },
        ],
      },
    ],
  },
  growth: {
    intro: "Calls, Instagram and ad leads all get answered. Hot leads go to your team first, and happy customers leave reviews.",
    steps: [
      { icon: "phone", title: "AI answers the call", body: "Introduces itself as an AI, answers and books." },
      { icon: "instagram", title: "Every channel", body: "Instagram and website chats land in the same inbox." },
      { icon: "lead", title: "Hot leads first", body: "Leads are scored so your team calls the best ones." },
      { icon: "check", title: "Reviews", body: "After a visit, happy customers are asked for a review." },
    ],
    chat: [
      {
        id: "growth-call",
        label: "Phone call",
        color: "#3D8BFF",
        chat: [
          { ai: true, text: "Thanks for calling [Your business]. I’m the AI assistant. How can I help?" },
          { ai: false, text: "How much is a full service, and are you open Sunday?" },
          { ai: true, text: "It starts at [price]. We’re open Sunday until 2 PM. Would you like a slot?" },
          { ai: false, text: "Sunday 11 is good." },
          { ai: true, text: "Booked for Sunday, 11 AM. I’ve sent the details on WhatsApp." },
        ],
      },
      {
        id: "growth-instagram",
        label: "Instagram",
        color: "#FF5C8A",
        chat: [
          { ai: false, text: "price?" },
          { ai: true, text: "Hi! Prices start at [price]. Here’s our full list and a booking link. Want me to find you a time?" },
          { ai: false, text: "This week evening" },
          { ai: true, text: "Thursday 6 PM or Friday 7 PM are free. Which one works?" },
        ],
      },
    ],
  },
  pro: {
    intro: "New leads get a call within a minute, deposits are collected, and regulars are reminded to come back.",
    steps: [
      { icon: "lead", title: "New enquiry", body: "Someone fills your website form." },
      { icon: "phone", title: "AI calls in a minute", body: "Only people who enquired, within the legal window." },
      { icon: "check", title: "Deposit paid", body: "A payment link secures the booking." },
      { icon: "calendar", title: "Comes back", body: "A rebooking reminder at the right time." },
    ],
    chat: [
      {
        id: "pro-payment",
        label: "Deposit",
        color: "#FFB020",
        chat: [
          { ai: true, text: "Your booking for Saturday 4 PM is held. Pay the deposit here to confirm: [payment link]" },
          { ai: false, text: "Paid" },
          { ai: true, text: "Received, thank you! You’re confirmed for Saturday at 4 PM." },
        ],
      },
      {
        id: "pro-rebook",
        label: "Rebooking",
        color: "#8B6CFF",
        chat: [
          { ai: true, text: "Hi Priya, it’s been 6 weeks since your last visit. Shall I book your next one?" },
          { ai: false, text: "Yes, same time as last time" },
          { ai: true, text: "Booked: Tuesday at 5 PM, same as before. See you then!" },
        ],
      },
    ],
  },
};

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
      { name: "Payment links and deposits", info: "UPI or card links, with polite reminders until paid.", values: proOnly },
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

// ---------- Usage explained ----------

export const usageNotes: { icon: IconName; title: string; body: string; example: string }[] = [
  {
    icon: "message",
    title: "AI conversation",
    body: "Everything one customer says to Vegam within 24 hours counts as one conversation, however many messages.",
    example: "Asks the price, picks a slot, confirms = 1 conversation",
  },
  {
    icon: "phone",
    title: "Voice minute",
    body: "Each minute the AI spends on a call. Short calls are counted to the nearest minute.",
    example: "A 2½ minute booking call = 3 minutes",
  },
  {
    icon: "mail",
    title: "WhatsApp fees",
    body: "Replies within 24 hours of a customer's message are free. Reminders and follow-ups after that use Meta's message templates, passed on at cost.",
    example: "A day-before reminder = one small Meta fee",
  },
];

// ---------- Every plan ----------

export const everyPlan: { icon: IconName; title: string; body: string; palette: Palette }[] = [
  { icon: "headset", title: "Set up for you", body: "We connect WhatsApp, load your services and test 50 replies with you.", palette: "periwinkle" },
  { icon: "message", title: "Human takeover", body: "Step into any chat or call, any time. The AI steps back.", palette: "saffron" },
  { icon: "check", title: "Honest AI", body: "Always says it's an AI assistant, and never invents prices.", palette: "leaf" },
  { icon: "close", title: "STOP means stop", body: "Opt-outs are honoured instantly, on every channel.", palette: "rose" },
];

// ---------- Pilot ----------

export const pilotSteps = [
  { title: "Week 1: measure", body: "We set you up and measure today's baseline: replies, missed calls, bookings." },
  { title: "Weeks 2–4: Vegam runs", body: "Vegam answers, books and follows up. You see the difference every morning." },
  { title: "Day 30: decide", body: "Keep going on the plan that fits, or stop. Your data is yours to export." },
];

// ---------- FAQ ----------

export const faqs: { q: string; a: string }[] = [
  {
    q: "Which plan should I start with?",
    a: "Most businesses start with Growth because it answers calls as well as messages. If customers mainly reach you on WhatsApp, Starter is enough. Use the plan picker above, or ask us.",
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
    a: "Nothing stops working. Extra conversations and voice minutes are billed at a published rate, and we'll tell you before you reach your limit.",
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
    a: "Data is encrypted, separated per business and never sold or used to train general AI models. You can export or delete it at any time.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. There's no lock-in on monthly plans. You can export your contacts and conversations before you leave.",
  },
];
