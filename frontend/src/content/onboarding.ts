// Copy and options for onboarding (/onboarding/) and the dashboard (/app/),
// including its setup guide. Until the backend exists, answers are kept in
// the browser and the dashboard shows labelled sample data.

import type { IconName } from "@/components/ui/Icon";
import type { PlanId } from "./pricing";

export const countries = [
  { id: "IN", name: "India", currency: "INR", dial: "+91" },
  { id: "US", name: "United States", currency: "USD", dial: "+1" },
  { id: "GB", name: "United Kingdom", currency: "USD", dial: "+44" },
  { id: "AE", name: "UAE", currency: "USD", dial: "+971" },
  { id: "SG", name: "Singapore", currency: "USD", dial: "+65" },
  { id: "AU", name: "Australia", currency: "USD", dial: "+61" },
  { id: "CA", name: "Canada", currency: "USD", dial: "+1" },
  { id: "OTHER", name: "Another country", currency: "USD", dial: "+" },
] as const;

export type CountryId = (typeof countries)[number]["id"];

export const toneOptions = [
  { id: "friendly", label: "Friendly", sample: "Hi! Happy to help." },
  { id: "formal", label: "Formal", sample: "Good evening. How may I help you?" },
] as const;

export type Tone = (typeof toneOptions)[number]["id"];

/** Languages the assistant can reply in. */
export const languageNames = ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Bengali", "Arabic", "Spanish", "French"];

/** What "Read my website" fills in during the demo. Neutral on purpose: Vegam never assumes an industry. */
export const sampleImport = {
  services: [
    { name: "First visit", minutes: 30, price: { INR: 500, USD: 15 } },
    { name: "Standard appointment", minutes: 60, price: { INR: 1200, USD: 40 } },
    { name: "Follow-up", minutes: 20, price: { INR: 300, USD: 10 } },
  ],
  faqs: [
    { q: "Is there parking?", a: "Yes, free parking is available next to the entrance." },
    { q: "Can I pay by card or UPI?", a: "Yes. We accept cash, cards and UPI." },
  ],
};

export type ChannelId = "whatsapp" | "missed" | "voice" | "social" | "website" | "ads";

export type Channel = {
  id: ChannelId;
  icon: IconName;
  title: string;
  body: string;
  minPlan: PlanId;
};

export const channelList: Channel[] = [
  {
    id: "whatsapp",
    icon: "message",
    title: "WhatsApp",
    body: "Your assistant replies to every WhatsApp message on your business number.",
    minPlan: "starter",
  },
  {
    id: "missed",
    icon: "missed",
    title: "Missed calls",
    body: "Callers you can’t answer get a WhatsApp within seconds.",
    minPlan: "starter",
  },
  {
    id: "website",
    icon: "globe",
    title: "Website",
    body: "Enquiries from your website form, a chat button and a QR code.",
    minPlan: "starter",
  },
  {
    id: "voice",
    icon: "phone",
    title: "AI call answering",
    body: "The AI picks up when you’re busy, books visits and writes a summary.",
    minPlan: "growth",
  },
  {
    id: "social",
    icon: "instagram",
    title: "Instagram and Messenger",
    body: "Direct messages from Instagram and Facebook in the same inbox.",
    minPlan: "growth",
  },
  {
    id: "ads",
    icon: "megaphone",
    title: "Ad lead forms",
    body: "New leads from Meta and Google ads are contacted within a minute.",
    minPlan: "pro",
  },
];

export const planRank: Record<PlanId, number> = { starter: 0, growth: 1, pro: 2 };

/**
 * Switches for the planned limits, off while the app is being built so every
 * tab and feature is visible. `minPlan` on each item records what each plan
 * will include once `limitByPlan` is on.
 */
export const gating = {
  /** Before go-live, show only setup items in the sidebar. */
  setupOnlyBeforeLive: false,
  /** Hide or lock tabs, channels and tasks above the business's plan. */
  limitByPlan: false,
};

/** A sample forwarding number shown in the demo. The real one is issued per business. */
export const sampleForwardingNumber = "+91 80 0000 0000";

export type ChecklistItem = {
  id: string;
  title: string;
  body: string;
  minPlan: PlanId;
  priority: "Must" | "Should" | "Before day 25";
  action: string;
  /** A dashboard page that does this task; without one the demo just marks it done. */
  view?: string;
};

export const checklist: ChecklistItem[] = [
  {
    id: "meta",
    title: "WhatsApp approval",
    body: "Meta reviews your display name and business. We’re tracking it and will message you when it’s done; nothing for you to do unless they ask.",
    minPlan: "starter",
    priority: "Must",
    action: "Check status",
  },
  {
    id: "templates",
    title: "Approve reminder messages",
    body: "Reminders and follow-ups sent after 24 hours use message templates that Meta approves. We’ve written them; review the wording.",
    minPlan: "starter",
    priority: "Must",
    action: "Review templates",
  },
  {
    id: "unanswered",
    title: "Answer 3 new questions",
    body: "Customers asked things your assistant didn’t know. Answer once and it will know next time.",
    minPlan: "starter",
    priority: "Must",
    action: "Answer questions",
  },
  {
    id: "channels",
    title: "Connect more channels",
    body: "Missed calls, your website, AI call answering, Instagram and Messenger: every place customers reach you, in one inbox.",
    minPlan: "starter",
    priority: "Should",
    action: "Connect channels",
    view: "channels",
  },
  {
    id: "share",
    title: "Share your booking link",
    body: "Put the link and QR code on your Instagram bio, Google profile and website, and at your counter.",
    minPlan: "starter",
    priority: "Should",
    action: "Get link and QR",
  },
  {
    id: "team",
    title: "Invite your team",
    body: "Add staff to the inbox, and set when the assistant should hand chats to a person.",
    minPlan: "starter",
    priority: "Should",
    action: "Invite people",
  },
  {
    id: "import",
    title: "Import existing customers",
    body: "Bring in customers who agreed to hear from you, so reminders and reports include them.",
    minPlan: "starter",
    priority: "Should",
    action: "Import contacts",
  },
  {
    id: "calendar",
    title: "Connect your calendar",
    body: "Sync Google Calendar or Calendly so the assistant never double-books.",
    minPlan: "growth",
    priority: "Should",
    action: "Connect calendar",
  },
  {
    id: "branches",
    title: "Add your other locations",
    body: "Each location gets its own hours, services and team, in one inbox.",
    minPlan: "pro",
    priority: "Should",
    action: "Add locations",
  },
  {
    id: "payments",
    title: "Turn on payment links",
    body: "Send Stripe payment links for deposits and bills, with polite reminders until paid.",
    minPlan: "pro",
    priority: "Should",
    action: "Set up payments",
  },
  {
    id: "billing",
    title: "Add a payment method",
    body: "Your pilot is free. Add a card (through Stripe) before day 25 to keep going after day 30.",
    minPlan: "starter",
    priority: "Before day 25",
    action: "Add payment method",
  },
];

export type NavItem = { id: string; label: string; icon: IconName; minPlan: PlanId; group: "work" | "setup" };

export const appNav: NavItem[] = [
  { id: "home", label: "Home", icon: "home", minPlan: "starter", group: "work" },
  { id: "inbox", label: "Inbox", icon: "inbox", minPlan: "starter", group: "work" },
  { id: "contacts", label: "Contacts", icon: "users", minPlan: "starter", group: "work" },
  { id: "calendar", label: "Calendar", icon: "calendar", minPlan: "starter", group: "work" },
  { id: "leads", label: "Leads", icon: "lead", minPlan: "starter", group: "work" },
  { id: "calls", label: "Calls", icon: "phone", minPlan: "growth", group: "work" },
  { id: "campaigns", label: "Campaigns", icon: "megaphone", minPlan: "pro", group: "work" },
  { id: "reports", label: "Reports", icon: "chart", minPlan: "starter", group: "work" },
  { id: "agents", label: "AI agents", icon: "sparkle", minPlan: "starter", group: "setup" },
];
