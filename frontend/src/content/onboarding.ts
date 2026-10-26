// Copy and options for the sign-up wizard (/onboarding/) and the dashboard
// (/app/). Until the backend exists, the wizard keeps its answers in the
// browser and the dashboard shows labelled sample data.

import type { IconName } from "@/components/ui/Icon";
import type { PlanId } from "./pricing";

export const wizardSteps = [
  { id: "business", title: "Your business", hint: "Name, country and languages" },
  { id: "plan", title: "Choose a plan", hint: "30-day pilot, no card needed" },
  { id: "assistant", title: "Teach your assistant", hint: "Services, prices, hours" },
  { id: "channels", title: "Connect channels", hint: "WhatsApp, calls, website" },
  { id: "test", title: "Test it", hint: "Chat with your assistant" },
  { id: "live", title: "Go live", hint: "Start your pilot" },
] as const;

export type StepId = (typeof wizardSteps)[number]["id"];

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

export const languageOptions = ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Bengali", "Arabic", "Spanish", "French"];

export const teamSizeOptions = ["Just me", "2–5", "6–20", "More than 20"];

export const toneOptions = [
  { id: "friendly", label: "Friendly", sample: "Hi! Happy to help." },
  { id: "formal", label: "Formal", sample: "Good evening. How may I help you?" },
] as const;

export type Tone = (typeof toneOptions)[number]["id"];

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
  essential?: boolean;
};

export const channelList: Channel[] = [
  {
    id: "whatsapp",
    icon: "message",
    title: "WhatsApp",
    body: "Your assistant replies to every WhatsApp message on your business number.",
    minPlan: "starter",
    essential: true,
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

/** A sample forwarding number shown in the demo. The real one is issued per business. */
export const sampleForwardingNumber = "+91 80 0000 0000";

export type ChecklistItem = {
  id: string;
  title: string;
  body: string;
  minPlan: PlanId;
  priority: "Must" | "Should" | "Before day 25";
  action: string;
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
    body: "Send UPI or card links for deposits and bills, with polite reminders until paid.",
    minPlan: "pro",
    priority: "Should",
    action: "Set up payments",
  },
  {
    id: "billing",
    title: "Add a payment method",
    body: "Your pilot is free. Add a card or UPI mandate before day 25 to keep going after day 30.",
    minPlan: "starter",
    priority: "Before day 25",
    action: "Add payment method",
  },
];

export const appNav: { id: string; label: string; icon: IconName; minPlan: PlanId }[] = [
  { id: "home", label: "Home", icon: "home", minPlan: "starter" },
  { id: "inbox", label: "Inbox", icon: "inbox", minPlan: "starter" },
  { id: "calendar", label: "Calendar", icon: "calendar", minPlan: "starter" },
  { id: "leads", label: "Leads", icon: "users", minPlan: "starter" },
  { id: "calls", label: "Calls", icon: "phone", minPlan: "growth" },
  { id: "campaigns", label: "Campaigns", icon: "megaphone", minPlan: "pro" },
  { id: "reports", label: "Reports", icon: "chart", minPlan: "starter" },
  { id: "assistant", label: "Assistant", icon: "sparkle", minPlan: "starter" },
  { id: "settings", label: "Settings", icon: "settings", minPlan: "starter" },
];
