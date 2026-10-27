// Sample data for app-wide UI: notifications, help articles and search.
// TODO(backend): replace with live data.

import type { IconName } from "@/components/ui/Icon";

export type AppNotification = {
  id: string;
  group: "Needs you" | "Bookings" | "System";
  icon: IconName;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  /** Dashboard view to open. */
  view?: string;
};

export const sampleNotifications: AppNotification[] = [
  { id: "n1", group: "Needs you", icon: "users", title: "A chat was handed to you", body: "+91 98•• ••• 210 asked about a refund.", time: "8 min ago", unread: true, view: "inbox" },
  { id: "n2", group: "Needs you", icon: "phone", title: "Callback requested", body: "+91 90•• ••• 044 wants a call after 5 PM about a group booking.", time: "1 h ago", unread: true, view: "calls" },
  { id: "n3", group: "Bookings", icon: "calendar", title: "New booking", body: "P. Sharma booked tomorrow at 6:30 PM (after closing time).", time: "Yesterday", unread: true, view: "calendar" },
  { id: "n4", group: "Bookings", icon: "calendar", title: "Booking moved", body: "A. Khan moved to next Tuesday, 11:30 AM.", time: "Yesterday", unread: false, view: "calendar" },
  { id: "n5", group: "System", icon: "message", title: "WhatsApp template approved", body: "“Appointment reminder” is ready to use.", time: "2 days ago", unread: false, view: "settings" },
  { id: "n6", group: "System", icon: "chart", title: "Usage at 80%", body: "You’ve used 80% of this month’s AI conversations.", time: "3 days ago", unread: false, view: "billing" },
];

export type HelpTopic = "Getting started" | "Inbox" | "Calendar" | "Calls" | "AI agents" | "Channels" | "Billing" | "Privacy";

export const helpTopics: { id: HelpTopic; icon: IconName; body: string }[] = [
  { id: "Getting started", icon: "sparkle", body: "Set up and go live" },
  { id: "Inbox", icon: "inbox", body: "Chats, handovers, notes" },
  { id: "Calendar", icon: "calendar", body: "Bookings and hours" },
  { id: "Calls", icon: "phone", body: "Forwarding and AI answering" },
  { id: "AI agents", icon: "message", body: "Teach and test your AI" },
  { id: "Channels", icon: "globe", body: "WhatsApp, Instagram and more" },
  { id: "Billing", icon: "card", body: "Plans, invoices, fees" },
  { id: "Privacy", icon: "shield", body: "Consent and your data" },
];

export type HelpArticle = { id: string; topic: HelpTopic; title: string; body: string; steps?: string[]; view?: string; minutes: number };

export const helpArticles: HelpArticle[] = [
  { id: "h1", topic: "Getting started", title: "Connect your WhatsApp number", minutes: 3, view: "channels", body: "Connect the number your customers already use, or get a new one. Your business keeps working while Meta reviews your display name.", steps: ["Open Channels and choose WhatsApp.", "Sign in with Facebook and pick or create your Meta Business account.", "Choose your current number (you can keep using the WhatsApp Business app) or a new one.", "Enter the code Meta sends to that number.", "Wait for display-name approval. We’ll message you when it’s done."] },
  { id: "h2", topic: "Getting started", title: "Teach your assistant from your website", minutes: 2, view: "agents", body: "Paste a link or upload a price list. The assistant reads your services, prices and hours; you check them before anything goes live.", steps: ["Open AI agents, then Knowledge.", "Paste your website link or upload a PDF or photo of your price list.", "Check each service, price and duration.", "Add answers to common questions, then save."] },
  { id: "h3", topic: "Getting started", title: "Go live in 10 minutes", minutes: 4, view: "home", body: "The setup guide on Home walks you through choosing a plan, teaching the assistant, connecting WhatsApp and a test chat." },
  { id: "h4", topic: "Inbox", title: "Take over a chat from the AI", minutes: 1, view: "inbox", body: "Press Take over, or simply reply. The AI pauses for that chat until you press Hand back to AI. Other chats carry on as normal." },
  { id: "h5", topic: "Inbox", title: "Saved replies and internal notes", minutes: 2, view: "inbox", body: "Type / in the reply box to insert a saved reply. Switch to Internal note to leave a message only your team can see; it’s never sent to the customer." },
  { id: "h6", topic: "Inbox", title: "Assign, snooze and resolve chats", minutes: 2, view: "inbox", body: "Assign a chat to a teammate from the chat header. Snooze hides it until later; Resolve closes it until the customer writes again." },
  { id: "h7", topic: "Calendar", title: "Set your hours and closures", minutes: 2, view: "settings", body: "The AI only offers times when you’re open. Set weekly hours, holidays and booking rules in Settings, Locations and hours." },
  { id: "h8", topic: "Calendar", title: "Bookings waiting to confirm", minutes: 1, view: "calendar", body: "Bookings outside your usual rules are marked Waiting. Open one to confirm or suggest another time; the customer is told straight away." },
  { id: "h9", topic: "Calls", title: "Set up call forwarding", minutes: 3, view: "calls", body: "Forward calls you can’t answer to your AI number with a short code, then place a test call.", steps: ["Open Calls, then Numbers & routing.", "Copy the code for busy, no answer or phone off.", "Dial it on the phone with your business SIM.", "Press Place a test call and answer it."] },
  { id: "h10", topic: "Calls", title: "How AI call answering works", minutes: 2, view: "calls", body: "The AI answers after a few rings, says it’s an AI assistant, answers questions, books visits and transfers to your team when asked. Every call gets a summary." },
  { id: "h11", topic: "AI agents", title: "Answer questions your AI didn’t know", minutes: 1, view: "agents", body: "When the AI doesn’t know something, it hands over instead of guessing. Answer it once under AI agents, Unanswered, and it will know next time." },
  { id: "h12", topic: "AI agents", title: "Test your assistant safely", minutes: 1, view: "agents", body: "Use the Playground to chat as a customer. Nothing is sent to anyone and test chats don’t count towards your usage." },
  { id: "h13", topic: "Channels", title: "Connect Instagram and Messenger", minutes: 3, view: "channels", body: "Your Instagram must be a professional account linked to a Facebook Page. Connect both from Channels; replies arrive in the same inbox." },
  { id: "h14", topic: "Billing", title: "WhatsApp fees explained", minutes: 2, view: "billing", body: "Replies within 24 hours of a customer’s message are free. Templates sent outside that window (reminders, campaigns) are charged by Meta per message and passed on at cost." },
  { id: "h15", topic: "Billing", title: "Change or cancel your plan", minutes: 1, view: "billing", body: "Switch plans any time from Billing. Upgrades apply straight away; downgrades from your next billing period. You can pause instead of cancelling." },
  { id: "h16", topic: "Billing", title: "Get GST invoices", minutes: 1, view: "settings", body: "Add your GSTIN in Settings, General. Every invoice after that shows GST so you can claim input credit." },
  { id: "h17", topic: "Privacy", title: "Opt-outs and consent", minutes: 2, view: "settings", body: "Anyone who replies STOP stops getting reminders and campaigns at once. Each contact shows how and when they agreed to hear from you." },
  { id: "h18", topic: "Privacy", title: "When a customer asks about their data", minutes: 2, view: "settings", body: "Customers can ask what you hold about them or ask you to delete it. Set where requests go in Settings, Privacy and consent; you have 30 days to reply." },
];

/** Recent product updates, newest first. */
export const whatsNew = [
  { date: "27 Oct 2026", title: "A new inbox", body: "Folders, assignment, internal notes and a customer panel beside every chat." },
  { date: "27 Oct 2026", title: "Call log and routing", body: "Recordings with speed control, AI summaries and forwarding codes in one place." },
  { date: "27 Oct 2026", title: "Settings, reorganised", body: "Templates with a live preview, automations, roles and API keys." },
];
