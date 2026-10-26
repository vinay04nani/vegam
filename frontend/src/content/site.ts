// All landing page copy and demo data lives here so it can be edited without
// touching layout code. Values in [brackets] are placeholders to fill in.

export const links = {
  home: "/",
  login: "/login/",
  signup: "/signup/",
  contact: "/contact/",
  demo: "/contact/?topic=demo",
  sampleCall: "#call",
  sampleReport: "#report",
  privacy: "#privacy",
  terms: "#terms",
};

export const companyLegalName = "[Company legal name]";

export const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#plans" },
  { label: "Company", href: "/#company" },
];

export type Channel = { name: string; color: string };

export const channels: Channel[] = [
  { name: "WhatsApp", color: "#2BB673" },
  { name: "Phone calls", color: "#3D8BFF" },
  { name: "Instagram", color: "#FF5C8A" },
  { name: "Messenger", color: "#6E77E6" },
  { name: "Website chat", color: "#FFB020" },
  { name: "Ad lead forms", color: "#8B6CFF" },
];

export type ViewRow = { status: string; count: string; action: string; tone: "success" | "warning" | "danger" | "neutral" };

export type ShowcaseView = {
  id: string;
  icon: "message" | "phone" | "lead" | "sun";
  title: string;
  subtitle: string;
  tag: string;
  steps: string[];
  summary: string;
  columns: [string, string];
  rows: ViewRow[];
};

export const showcaseViews: ShowcaseView[] = [
  {
    id: "msg",
    icon: "message",
    title: "Customer messages",
    subtitle: "Front desk",
    tag: "FRONT DESK",
    steps: [
      "Replied to every new message in seconds",
      "Answered questions from your price list",
      "Booked appointments into your calendar",
    ],
    summary: "Done. 38 conversations handled since 9 AM:",
    columns: ["Status", "Chats"],
    rows: [
      { status: "Booked", count: "12", action: "Confirmed, reminders scheduled", tone: "success" },
      { status: "Follow-up", count: "23", action: "Sent, waiting for a reply", tone: "warning" },
      { status: "Needs you", count: "3", action: "Flagged for your team", tone: "danger" },
    ],
  },
  {
    id: "call",
    icon: "phone",
    title: "Phone calls",
    subtitle: "Voice",
    tag: "VOICE",
    steps: [
      "Answered 11 calls while you were busy",
      "Told every caller it is an AI assistant",
      "Wrote a short summary for each call",
    ],
    summary: "Done. 11 calls handled today:",
    columns: ["Outcome", "Calls"],
    rows: [
      { status: "Booked", count: "5", action: "Slot added to your calendar", tone: "success" },
      { status: "Callback", count: "4", action: "Callback requested, details noted", tone: "warning" },
      { status: "Urgent", count: "2", action: "Passed straight to you", tone: "danger" },
    ],
  },
  {
    id: "lead",
    icon: "lead",
    title: "New leads",
    subtitle: "Follow-up",
    tag: "FOLLOW-UP",
    steps: [
      "Contacted every new lead within a minute",
      "Asked your qualifying questions",
      "Sorted leads by how interested they are",
    ],
    summary: "Done. 24 leads contacted this week:",
    columns: ["Interest", "Leads"],
    rows: [
      { status: "High", count: "7", action: "Call these first", tone: "success" },
      { status: "Medium", count: "11", action: "Follow-up message scheduled", tone: "warning" },
      { status: "Not now", count: "6", action: "Paused, will check back in 30 days", tone: "danger" },
    ],
  },
  {
    id: "report",
    icon: "sun",
    title: "Morning report",
    subtitle: "Daily at 8 AM",
    tag: "DAILY",
    steps: [
      "Counted yesterday’s enquiries, bookings and calls",
      "Checked today’s schedule",
      "Picked out what needs your attention",
    ],
    summary: "Good morning. Here is yesterday:",
    columns: ["Item", "Count"],
    rows: [
      { status: "Enquiries", count: "14", action: "All replied to", tone: "neutral" },
      { status: "Bookings", count: "6", action: "2 still need confirming", tone: "neutral" },
      { status: "Missed calls", count: "2", action: "Both recovered on WhatsApp", tone: "neutral" },
    ],
  },
];

export type ChatMessage = { ai: boolean; text: string };
export type ChatTab = { id: string; label: string; color: string; chat: ChatMessage[] };

export const chatTabs: ChatTab[] = [
  {
    id: "wa",
    label: "WhatsApp",
    color: "#2BB673",
    chat: [
      { ai: false, text: "Hi! Do you have anything free tomorrow evening?" },
      { ai: true, text: "Hi, I’m the AI assistant for [Your business]. Tomorrow at 6:30 PM is free. Shall I book it?" },
      { ai: false, text: "Yes please." },
      { ai: true, text: "Done: tomorrow, 6:30 PM. I’ll send a reminder in the morning." },
    ],
  },
  {
    id: "call",
    label: "Phone call",
    color: "#3D8BFF",
    chat: [
      { ai: true, text: "Thanks for calling [Your business]. I’m the AI assistant. How can I help?" },
      { ai: false, text: "What time do you close on Saturday?" },
      { ai: true, text: "We’re open until 4 PM on Saturday. Would you like to book a visit?" },
      { ai: false, text: "Not today, thanks." },
      { ai: true, text: "No problem. I’ll text you our hours and booking link." },
    ],
  },
  {
    id: "web",
    label: "Website",
    color: "#FFB020",
    chat: [
      { ai: false, text: "Can I change my booking to next week?" },
      {
        ai: true,
        text: "Of course. I can see your booking for Thursday at 11 AM. Next Thursday at the same time is free. Move it?",
      },
      { ai: false, text: "Perfect." },
      { ai: true, text: "Moved to next Thursday, 11 AM. You’ll get a confirmation on WhatsApp." },
    ],
  },
];

export type Feature = { icon: "message" | "phone" | "missed" | "calendar"; title: string; body: string };

export const primaryFeatures: Feature[] = [
  { icon: "message", title: "AI chat replies", body: "Replies on WhatsApp, Instagram, Messenger and your website, day and night." },
  { icon: "phone", title: "AI phone answering", body: "Picks up when you're busy, books visits, and writes a summary of every call." },
  {
    icon: "missed",
    title: "Missed-call recovery",
    body: "Every missed caller gets a WhatsApp within seconds, with options to book or ask for a callback.",
  },
  { icon: "calendar", title: "Bookings and reminders", body: "Customers book in a chat or a call. Reminders go out on their own." },
];

export const secondaryFeatures = [
  { title: "Lead follow-up", body: "Every enquiry contacted within a minute, and sorted by interest." },
  { title: "Morning report", body: "Yesterday's enquiries, bookings and calls on WhatsApp at 8 AM." },
  { title: "Team handover", body: "Take over any chat or call with one tap. The AI steps back." },
];

export const languageBubbles = [
  { lang: "es", text: "Hola, ¿tienen hora el sábado?", pos: "left-[4%] top-[6%] sm:left-[6%] sm:top-[10%]", side: "left", mobile: true },
  { lang: "fr", text: "Bonjour, vous êtes ouverts ?", pos: "right-[4%] top-[20%] sm:right-[6%] sm:top-[14%]", side: "right", mobile: true },
  { lang: "hi", text: "नमस्ते, कीमत क्या है?", pos: "left-[4%] top-[46%]", side: "left", mobile: false },
  { lang: "ja", text: "こんにちは、予約できますか？", pos: "right-[4%] top-[50%]", side: "right", mobile: false },
  { lang: "ar", text: "مرحبا، هل يمكنني الحجز؟", pos: "left-[4%] bottom-[20%] sm:left-[12%] sm:bottom-[10%]", side: "left", mobile: true },
  { lang: "pt", text: "Olá, posso remarcar?", pos: "right-[4%] bottom-[6%] sm:right-[10%] sm:bottom-[12%]", side: "right", mobile: true },
] as const;

export const trustPoints = [
  {
    title: "Honest by design",
    body: "Vegam tells every customer it's an AI assistant, and hands over to a person whenever asked.",
  },
  {
    title: "Consent built in",
    body: "It only contacts people who reached out to you. Anyone who replies STOP is never messaged again.",
  },
  {
    title: "Your team stays in charge",
    body: "Step into any chat or call with one tap. Vegam does the busywork; you keep the relationships.",
  },
];

export type Plan = { name: string; price: string; description: string; style: "orange" | "indigo" | "light" };

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "From $[XX] / month",
    description: "Chat inbox, AI replies, missed-call recovery, morning report",
    style: "orange",
  },
  {
    name: "Growth",
    price: "From $[XXX] / month",
    description: "Everything in Starter, plus AI calls, bookings, lead follow-up, 5 team seats",
    style: "indigo",
  },
  {
    name: "Scale",
    price: "Talk to us",
    description: "Several branches, outgoing AI calls, more call minutes, priority support",
    style: "light",
  },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Front desk", href: "#product" },
      { label: "AI calls", href: "#features" },
      { label: "Missed-call recovery", href: "#features" },
      { label: "Lead follow-up", href: "#features" },
      { label: "Bookings", href: "#features" },
      { label: "Morning report", href: "#features" },
    ],
  },
  {
    title: "Try it",
    links: [
      { label: "Sample call", href: links.sampleCall },
      { label: "Pricing", href: "#plans" },
      { label: "Book a demo", href: links.demo },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact us", href: links.contact },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: links.privacy },
      { label: "Terms of service", href: links.terms },
    ],
  },
];

export const socials = [
  { label: "LinkedIn", href: "#linkedin", icon: "linkedin" },
  { label: "X", href: "#x", icon: "x" },
  { label: "Instagram", href: "#instagram", icon: "instagram" },
  { label: "YouTube", href: "#youtube", icon: "youtube" },
] as const;

// Where form submissions go. Leave empty until a backend exists: forms then
// show their success state without sending anything.
export const forms = {
  contactEndpoint: "",
};

// Log in / sign up page: the card over the pixel scene.
export const authHighlights = [
  { icon: "chat", title: "AI chat replies", body: "Answers every WhatsApp, Instagram and website message in seconds, in your customer’s language." },
  { icon: "phone", title: "AI phone answering", body: "Picks up when you’re busy, books visits and writes a summary of every call." },
  { icon: "missed", title: "Missed-call recovery", body: "Every missed caller gets a WhatsApp within seconds, with options to book." },
  { icon: "sun", title: "Morning report", body: "Yesterday’s enquiries, bookings and calls on your phone at 8 AM." },
] as const;

export type ContactCard = { icon: "briefcase" | "headset" | "news"; label: string; href: string };

export const contactCards: ContactCard[] = [
  { icon: "briefcase", label: "Careers", href: "#careers" },
  { icon: "headset", label: "Technical support", href: "#support" },
  { icon: "news", label: "Press / Media", href: "#press" },
];

export const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "United States (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+1", label: "Canada (+1)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+33", label: "France (+33)" },
  { code: "+34", label: "Spain (+34)" },
  { code: "+55", label: "Brazil (+55)" },
  { code: "+966", label: "Saudi Arabia (+966)" },
  { code: "+27", label: "South Africa (+27)" },
  { code: "+81", label: "Japan (+81)" },
];

export const contactTopics = [
  { id: "demo", label: "Book a demo" },
  { id: "pricing", label: "Pricing" },
  { id: "partnership", label: "Partnership" },
  { id: "support", label: "Support" },
  { id: "other", label: "Something else" },
];

export const teamSizes = ["Just me", "2–10", "11–50", "51–200", "200+"];
