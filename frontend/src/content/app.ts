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

export const helpArticles = [
  { id: "h1", topic: "Getting started", title: "Connect your WhatsApp number", body: "Use Meta’s sign-up window, choose your current or a new number, and wait for display-name approval." },
  { id: "h2", topic: "Getting started", title: "Teach your assistant from your website", body: "Paste a link or upload a price list, then check services, prices and hours before saving." },
  { id: "h3", topic: "Inbox", title: "Take over a chat from the AI", body: "Press Take over or simply reply. The AI pauses for that chat until you hand it back." },
  { id: "h4", topic: "Calls", title: "Set up missed-call forwarding", body: "Dial the forwarding code from your business phone, then make a test call." },
  { id: "h5", topic: "Calls", title: "How AI call answering works", body: "The AI answers after a few rings, says it’s an AI assistant, and can transfer to your team." },
  { id: "h6", topic: "Billing", title: "WhatsApp fees explained", body: "Replies within 24 hours are free. Templates sent outside that window are billed by Meta and passed on at cost." },
  { id: "h7", topic: "Billing", title: "Change or cancel your plan", body: "Switch plans any time from Billing. Changes apply from your next billing period." },
  { id: "h8", topic: "Privacy", title: "Opt-outs and consent", body: "Anyone who replies STOP is never messaged again. Consent records are kept for every contact." },
];
