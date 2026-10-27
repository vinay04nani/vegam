// Sample data for the Settings pages. Labelled "Sample data" wherever shown.
// TODO(backend): load from the business's settings.

export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

export type DayHours = { open: boolean; from: string; to: string };
export const sampleHours: DayHours[] = [
  { open: true, from: "10:00", to: "19:00" },
  { open: true, from: "10:00", to: "19:00" },
  { open: true, from: "10:00", to: "19:00" },
  { open: true, from: "10:00", to: "19:00" },
  { open: true, from: "10:00", to: "19:00" },
  { open: true, from: "10:00", to: "17:00" },
  { open: false, from: "10:00", to: "14:00" },
];

export const sampleClosures = [
  { id: "x1", date: "Sun 8 Nov 2026", reason: "Holiday", allDay: true },
  { id: "x2", date: "Fri 25 Dec 2026", reason: "Christmas", allDay: true },
];

export const sampleLocations = [{ id: "l1", name: "Main location", address: "12 MG Road, Bengaluru 560001", primary: true }];

export type Role = "Owner" | "Manager" | "Front desk";
export const roles: Role[] = ["Owner", "Manager", "Front desk"];

/** What each role can do. */
export const permissions: { label: string; allowed: Role[] }[] = [
  { label: "Reply to chats and take over from the AI", allowed: ["Owner", "Manager", "Front desk"] },
  { label: "See and change bookings", allowed: ["Owner", "Manager", "Front desk"] },
  { label: "See contacts and export them", allowed: ["Owner", "Manager"] },
  { label: "Send campaigns", allowed: ["Owner", "Manager"] },
  { label: "Change the AI agents and knowledge", allowed: ["Owner", "Manager"] },
  { label: "Invite and remove people", allowed: ["Owner"] },
  { label: "Plan, billing and invoices", allowed: ["Owner"] },
];

export type TemplateStatus = "Approved" | "In review" | "Rejected";
export type Template = { id: string; name: string; category: "Utility" | "Marketing"; language: string; status: TemplateStatus; body: string; note?: string };

export const sampleTemplates: Template[] = [
  { id: "t1", name: "appointment_reminder", category: "Utility", language: "English", status: "Approved", body: "Hi {{1}}, a reminder of your visit at {{2}} tomorrow. Reply YES to confirm or CHANGE to pick another time." },
  { id: "t2", name: "booking_confirmed", category: "Utility", language: "English", status: "Approved", body: "Thanks {{1}}! You’re booked for {{2}}. We’ll send a reminder the day before." },
  { id: "t3", name: "missed_call_followup", category: "Utility", language: "English", status: "Approved", body: "Sorry we missed your call, {{1}}. You can book here: {{2}}, or reply CALL and we’ll ring you back." },
  { id: "t4", name: "review_request", category: "Marketing", language: "English", status: "In review", body: "Thanks for visiting, {{1}}! If you have a minute, a review helps us a lot: {{2}}" },
  { id: "t5", name: "weekend_offer", category: "Marketing", language: "Hindi", status: "Rejected", body: "नमस्ते {{1}}! इस वीकेंड नए स्लॉट खुले हैं। बुक करें: {{2}}", note: "Meta asked for a clearer opt-out line. Add “Reply STOP to opt out” and resubmit." },
];

export const sampleApiKeys = [
  { id: "k1", name: "Website booking widget", key: "vg_live_••••••••••••3f9a", created: "12 Oct 2026", lastUsed: "Today" },
  { id: "k2", name: "Billing software sync", key: "vg_live_••••••••••••81c2", created: "2 Oct 2026", lastUsed: "3 days ago" },
];

export const webhookEvents = ["booking.created", "booking.changed", "booking.cancelled", "contact.created", "chat.handed_over", "call.completed"];

export const sampleWebhooks = [{ id: "w1", url: "https://example.com/hooks/vegam", events: ["booking.created", "booking.cancelled"], status: "Active" as const, lastDelivery: "200 OK · 2 h ago" }];

export const notificationEvents = [
  { id: "handover", label: "A chat is handed to your team" },
  { id: "booking", label: "New or changed booking" },
  { id: "cancel", label: "Booking cancelled or no-show" },
  { id: "callback", label: "A caller asks for a call back" },
  { id: "report", label: "Morning report" },
  { id: "usage", label: "Usage and billing alerts" },
] as const;
