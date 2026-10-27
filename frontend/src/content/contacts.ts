// Sample customers for the Contacts page. Names and numbers are made up and
// masked; every screen that shows them carries a "Sample data" tag.
// TODO(backend): load from the business's customer records.

export type ContactChannel = "whatsapp" | "instagram" | "messenger" | "website" | "phone";
export type OptIn = "opted-in" | "opted-out" | "not-asked";
export type ContactEvent = { at: string; kind: "chat" | "booking" | "call" | "optin" | "optout" | "note" | "campaign"; text: string };

export type Contact = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  channels: ContactChannel[];
  tags: string[];
  /** Days since the last visit; null if they have never visited. */
  lastVisitDays: number | null;
  bookings: number;
  noShows: number;
  optIn: OptIn;
  /** How and when they agreed (or stopped) hearing from the business. */
  consent: string;
  firstSeen: string;
  note?: string;
  timeline: ContactEvent[];
};

export const channelLabel: Record<ContactChannel, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  messenger: "Messenger",
  website: "Website",
  phone: "Phone",
};

export const optInLabel: Record<OptIn, string> = { "opted-in": "Opted in", "opted-out": "Opted out", "not-asked": "Not asked" };

export const sampleTags = ["Regular", "New", "VIP", "Family", "Corporate", "Needs reminder", "Lapsed"];

export const sampleContacts: Contact[] = [
  {
    id: "c1",
    name: "M. D’Souza",
    phone: "+91 98•• ••• 210",
    email: "m.d•••@example.com",
    channels: ["whatsapp", "instagram"],
    tags: ["Regular", "VIP"],
    lastVisitDays: 6,
    bookings: 14,
    noShows: 0,
    optIn: "opted-in",
    consent: "Ticked “Send me reminders on WhatsApp” on the booking link, 12 Mar 2026",
    firstSeen: "Mar 2026",
    note: "Prefers evening slots. Usually books for two.",
    timeline: [
      { at: "Today, 9:40 AM", kind: "chat", text: "Asked about a Sunday slot on WhatsApp; handed to your team" },
      { at: "6 days ago", kind: "booking", text: "Standard appointment, attended" },
      { at: "3 weeks ago", kind: "campaign", text: "Received “Weekend slots open”; replied BOOK" },
      { at: "12 Mar 2026", kind: "optin", text: "Opted in to WhatsApp reminders on the booking link" },
    ],
  },
  {
    id: "c2",
    name: "P. Sharma",
    phone: "+91 98•• ••• 761",
    channels: ["whatsapp", "phone"],
    tags: ["Regular"],
    lastVisitDays: 12,
    bookings: 9,
    noShows: 1,
    optIn: "opted-in",
    consent: "Replied YES to the first WhatsApp message, 2 Apr 2026",
    firstSeen: "Apr 2026",
    timeline: [
      { at: "Yesterday", kind: "call", text: "Missed call; WhatsApp sent in 8 seconds, booked Friday 5 PM" },
      { at: "12 days ago", kind: "booking", text: "Follow-up, attended" },
      { at: "2 Apr 2026", kind: "optin", text: "Replied YES on WhatsApp" },
    ],
  },
  {
    id: "c3",
    name: "A. Khan",
    phone: "+91 99•• ••• 318",
    channels: ["whatsapp", "website"],
    tags: ["New"],
    lastVisitDays: null,
    bookings: 1,
    noShows: 0,
    optIn: "opted-in",
    consent: "Ticked the consent box on the website form, today",
    firstSeen: "This week",
    timeline: [
      { at: "Today, 8:15 AM", kind: "booking", text: "Booked a first visit for Thursday 11 AM" },
      { at: "Today, 8:12 AM", kind: "chat", text: "Website enquiry; the assistant replied in 6 seconds" },
      { at: "Today, 8:12 AM", kind: "optin", text: "Ticked the consent box on the website form" },
    ],
  },
  {
    id: "c4",
    name: "K. Iyer",
    phone: "+91 94•• ••• 118",
    channels: ["instagram"],
    tags: ["New"],
    lastVisitDays: null,
    bookings: 0,
    noShows: 0,
    optIn: "not-asked",
    consent: "Messaged first on Instagram. Not yet asked about WhatsApp messages.",
    firstSeen: "This week",
    timeline: [{ at: "Yesterday", kind: "chat", text: "Asked about prices on Instagram" }],
  },
  {
    id: "c5",
    name: "R. Varma",
    phone: "+91 98•• ••• 552",
    channels: ["whatsapp", "messenger"],
    tags: ["Family", "Regular"],
    lastVisitDays: 21,
    bookings: 11,
    noShows: 0,
    optIn: "opted-in",
    consent: "Agreed at the counter; staff noted it, 18 Jan 2026",
    firstSeen: "Jan 2026",
    timeline: [
      { at: "3 weeks ago", kind: "booking", text: "Standard appointment, attended, with two family members" },
      { at: "18 Jan 2026", kind: "optin", text: "Agreed at the counter (noted by Priya)" },
    ],
  },
  {
    id: "c6",
    name: "S. Menon",
    phone: "+91 97•• ••• 615",
    channels: ["whatsapp"],
    tags: ["Lapsed"],
    lastVisitDays: 94,
    bookings: 4,
    noShows: 1,
    optIn: "opted-in",
    consent: "Replied YES on WhatsApp, 5 Nov 2025",
    firstSeen: "Nov 2025",
    timeline: [
      { at: "2 weeks ago", kind: "campaign", text: "Received “We miss you”; no reply yet" },
      { at: "3 months ago", kind: "booking", text: "Follow-up, attended" },
    ],
  },
  {
    id: "c7",
    name: "F. Qureshi",
    phone: "+91 91•• ••• 826",
    channels: ["whatsapp", "phone"],
    tags: ["Corporate"],
    lastVisitDays: 30,
    bookings: 6,
    noShows: 0,
    optIn: "opted-out",
    consent: "Sent STOP on WhatsApp, 2 Sep 2026. Only replies to their own messages are sent now.",
    firstSeen: "Feb 2026",
    timeline: [
      { at: "2 Sep 2026", kind: "optout", text: "Sent STOP; removed from reminders and campaigns" },
      { at: "1 month ago", kind: "booking", text: "Standard appointment, attended" },
    ],
  },
  {
    id: "c8",
    name: "G. Nair",
    phone: "+91 94•• ••• 238",
    channels: ["whatsapp"],
    tags: ["Needs reminder"],
    lastVisitDays: 45,
    bookings: 3,
    noShows: 2,
    optIn: "opted-in",
    consent: "Ticked “Send me reminders” on the booking link, 9 Jun 2026",
    firstSeen: "Jun 2026",
    note: "Missed two visits. Send the reminder the evening before as well.",
    timeline: [
      { at: "6 weeks ago", kind: "booking", text: "First visit, no-show; follow-up sent" },
      { at: "9 Jun 2026", kind: "optin", text: "Opted in on the booking link" },
    ],
  },
  {
    id: "c9",
    name: "V. Reddy",
    phone: "+91 99•• ••• 404",
    channels: ["whatsapp", "instagram", "website"],
    tags: ["VIP"],
    lastVisitDays: 3,
    bookings: 18,
    noShows: 0,
    optIn: "opted-in",
    consent: "Replied YES on WhatsApp, 20 Dec 2025",
    firstSeen: "Dec 2025",
    timeline: [
      { at: "3 days ago", kind: "booking", text: "Standard appointment, attended; left a 5-star review" },
      { at: "1 week ago", kind: "chat", text: "Rescheduled on WhatsApp without staff help" },
    ],
  },
  {
    id: "c10",
    name: "K. Pinto",
    phone: "+91 88•• ••• 430",
    channels: ["messenger"],
    tags: [],
    lastVisitDays: 60,
    bookings: 2,
    noShows: 0,
    optIn: "not-asked",
    consent: "Messaged first on Messenger. Not yet asked about WhatsApp messages.",
    firstSeen: "Jul 2026",
    timeline: [{ at: "2 months ago", kind: "booking", text: "First visit, attended" }],
  },
  {
    id: "c11",
    name: "B. Joshi",
    phone: "+91 90•• ••• 902",
    channels: ["whatsapp", "phone"],
    tags: ["Family"],
    lastVisitDays: 9,
    bookings: 7,
    noShows: 0,
    optIn: "opted-in",
    consent: "Agreed on a call with the AI receptionist (recorded), 14 Aug 2026",
    firstSeen: "Aug 2026",
    timeline: [
      { at: "9 days ago", kind: "booking", text: "Follow-up, attended" },
      { at: "14 Aug 2026", kind: "optin", text: "Agreed on a call with the AI receptionist" },
    ],
  },
  {
    id: "c12",
    name: "D. Kulkarni",
    phone: "+91 95•• ••• 044",
    channels: ["phone"],
    tags: ["New"],
    lastVisitDays: null,
    bookings: 0,
    noShows: 0,
    optIn: "not-asked",
    consent: "Called once. Not yet asked about WhatsApp messages.",
    firstSeen: "This week",
    timeline: [{ at: "2 days ago", kind: "call", text: "Called after hours; the AI took a message for a callback" }],
  },
];
