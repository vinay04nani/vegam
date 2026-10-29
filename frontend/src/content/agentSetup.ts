// What each AI agent can be set up to do, as data. The Setup tab draws these
// sections and fields; the defaults are each agent's starting settings, and
// the labels name changes in the change history.
// TODO(backend): load and save each agent's settings per business.

import type { AgentId } from "./agents";
import type { PlanId } from "./pricing";

export type Step = { after: string; text: string };
export type Permission = { number: string; level: "view" | "calendar" | "full" };
export type FieldValue = string | boolean | string[] | Step[] | Permission[] | Record<string, string>;
export type Config = Record<string, FieldValue>;

type Base = { key: string; label: string; description?: string; /** Part of a bigger plan. */ plan?: PlanId };
export type SetupField = Base &
  (
    | { type: "text"; default: string; placeholder?: string }
    | { type: "textarea"; default: string; placeholder?: string }
    | { type: "select"; default: string; options: { v: string; l: string }[] }
    | { type: "toggle"; default: boolean; locked?: boolean }
    | { type: "chips"; default: string[]; options: string[] }
    | { type: "list"; default: string[]; placeholder: string }
    | { type: "time"; default: string }
    | { type: "voice"; default: string }
    | { type: "sequence"; default: Step[] }
    | { type: "permissions"; default: Permission[] }
    | { type: "perLocation"; default: Record<string, string>; placeholder: string }
    | { type: "link"; default: string; view: string; action: string }
  );

export type SetupSection = { id: string; title: string; description?: string; fields: SetupField[] };

const o = (...xs: string[]) => xs.map((x) => ({ v: x, l: x }));
const tone = (): SetupField => ({ key: "tone", label: "Tone", type: "select", default: "business", options: [{ v: "business", l: "Business default (Friendly)" }, ...o("Friendly", "Formal", "Short and to the point")] });
const languages = (): SetupField => ({
  key: "languages",
  label: "Languages",
  description: "It replies in the customer’s language when it’s one of these.",
  type: "chips",
  default: ["English", "Hindi"],
  options: ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Bengali"],
});
const aiDisclosure = (): SetupField => ({ key: "says_ai", label: "Says it’s an AI assistant", description: "Always on, by law and by design.", type: "toggle", default: true, locked: true });
const quiet = (): SetupField => ({
  key: "quiet",
  label: "Quiet hours",
  description: "Messages wait until morning instead of going out late at night.",
  type: "select",
  default: "21-8",
  options: [
    { v: "21-8", l: "9 PM to 8 AM" },
    { v: "20-9", l: "8 PM to 9 AM" },
    { v: "22-8", l: "10 PM to 8 AM" },
  ],
});

export const agentSetup: Record<AgentId, SetupSection[]> = {
  chat: [
    {
      id: "identity",
      title: "Identity",
      description: "How it introduces itself and sounds.",
      fields: [
        { key: "name", label: "Name customers see", type: "text", default: "Nila & Co assistant" },
        { key: "greeting", label: "First message", type: "textarea", default: "Hi! I’m the Nila & Co assistant. I can answer questions and book you in. How can I help?" },
        { key: "greeting_by_location", label: "Different greeting per location", description: "Each location can welcome people in its own words.", type: "perLocation", default: {}, placeholder: "Same as the first message", plan: "pro" },
        tone(),
        languages(),
      ],
    },
    {
      id: "skills",
      title: "What it can do",
      description: "Switch off anything you’d rather your team handled.",
      fields: [
        { key: "answer", label: "Answer questions from your knowledge", type: "toggle", default: true },
        { key: "book", label: "Book visits", type: "toggle", default: true },
        { key: "reschedule", label: "Reschedule and cancel", type: "toggle", default: true },
        { key: "lead", label: "Save new enquiries as leads", type: "toggle", default: true },
        { key: "paylink", label: "Send payment links", type: "toggle", default: false, plan: "pro" },
        { key: "deposit", label: "Take a deposit before confirming", description: "Cuts no-shows for longer visits.", type: "toggle", default: false, plan: "pro" },
        { key: "ask", label: "Before booking, ask for", type: "chips", default: ["Name", "Phone", "Service", "Preferred time"], options: ["Name", "Phone", "Service", "Preferred time", "Email", "Notes"] },
      ],
    },
    {
      id: "rules",
      title: "Rules",
      description: "When it steps back, and what it never does.",
      fields: [
        aiDisclosure(),
        { key: "h_person", label: "Hand over when they ask for a person", type: "toggle", default: true },
        { key: "h_upset", label: "Hand over when they seem upset", type: "toggle", default: true },
        { key: "h_money", label: "Hand over refunds and payment problems", type: "toggle", default: true },
        { key: "h_unknown", label: "Hand over when it doesn’t know", description: "It never guesses.", type: "toggle", default: true, locked: true },
        { key: "never", label: "Never talk about", type: "list", default: ["Discounts not on your price list", "Other businesses"], placeholder: "Add a topic" },
        {
          key: "discount",
          label: "Discounts it may offer",
          type: "select",
          default: "none",
          options: [
            { v: "none", l: "None" },
            { v: "5", l: "Up to 5%" },
            { v: "10", l: "Up to 10%" },
          ],
        },
      ],
    },
    {
      id: "hours",
      title: "When it works",
      fields: [
        {
          key: "when",
          label: "Replies",
          type: "select",
          default: "always",
          options: [
            { v: "always", l: "Always, day and night" },
            { v: "after", l: "Only outside opening hours" },
            { v: "during", l: "Only during opening hours" },
          ],
        },
        { key: "after_note", label: "After-hours note", description: "Added to replies when you’re closed.", type: "textarea", default: "We’re closed right now, but I can book you in for tomorrow." },
        { key: "channels", label: "Works on", type: "chips", default: ["WhatsApp", "Instagram", "Messenger", "Website chat"], options: ["WhatsApp", "Instagram", "Messenger", "Website chat"] },
      ],
    },
  ],
  voice: [
    {
      id: "voice",
      title: "Voice and greeting",
      fields: [
        { key: "voice", label: "Voice", type: "voice", default: "asha" },
        {
          key: "speed",
          label: "Speaking speed",
          type: "select",
          default: "normal",
          options: [
            { v: "slow", l: "A little slower" },
            { v: "normal", l: "Normal" },
            { v: "fast", l: "A little faster" },
          ],
        },
        { key: "greeting", label: "Greeting", type: "textarea", default: "Thanks for calling Nila & Co. I’m the AI assistant. How can I help?" },
        { key: "greeting_by_location", label: "Different greeting per location", type: "perLocation", default: {}, placeholder: "Same as the greeting", plan: "pro" },
        languages(),
      ],
    },
    {
      id: "answering",
      title: "Answering",
      fields: [
        {
          key: "answer_after",
          label: "Picks up",
          type: "select",
          default: "4",
          options: [
            { v: "2", l: "After 2 rings" },
            { v: "4", l: "After 4 rings" },
            { v: "6", l: "After 6 rings" },
            { v: "0", l: "Every call, straight away" },
          ],
        },
        {
          key: "after_hours",
          label: "After closing time",
          type: "select",
          default: "message",
          options: [
            { v: "message", l: "Take a message and book a call back" },
            { v: "normal", l: "Answer and book as normal" },
            { v: "voicemail", l: "Send to voicemail" },
          ],
        },
        { key: "numbers", label: "Phone numbers and forwarding", description: "Your numbers, forwarding and the missed-call WhatsApp live in Calls.", type: "link", default: "", view: "calls", action: "Open Calls" },
      ],
    },
    {
      id: "skills",
      title: "What it can do",
      fields: [
        { key: "answer", label: "Answer questions", type: "toggle", default: true },
        { key: "book", label: "Book visits", type: "toggle", default: true },
        { key: "reschedule", label: "Reschedule and cancel", type: "toggle", default: true },
        { key: "message", label: "Take a message", type: "toggle", default: true },
        { key: "wa_after", label: "Send a WhatsApp after the call", description: "With the booking details or your booking link.", type: "toggle", default: true },
      ],
    },
    {
      id: "transfers",
      title: "Transfers",
      fields: [
        {
          key: "transfer_to",
          label: "Transfer to",
          type: "select",
          default: "desk",
          options: [
            { v: "desk", l: "Front desk · +91 80•• ••• 210" },
            { v: "kumar", l: "R. Kumar" },
            { v: "you", l: "You" },
          ],
        },
        {
          key: "transfer_how",
          label: "How",
          type: "select",
          default: "warm",
          options: [
            { v: "warm", l: "Tell them who’s calling first" },
            { v: "cold", l: "Put the caller straight through" },
          ],
        },
        {
          key: "no_answer",
          label: "If nobody picks up",
          type: "select",
          default: "message",
          options: [
            { v: "message", l: "Take a message" },
            { v: "next", l: "Try the next person" },
          ],
        },
        { key: "h_person", label: "Transfer when they ask for a person", type: "toggle", default: true },
        { key: "h_upset", label: "Transfer when they seem upset", type: "toggle", default: true },
      ],
    },
    {
      id: "recording",
      title: "Recording and summaries",
      fields: [
        aiDisclosure(),
        { key: "record", label: "Record calls", description: "Callers hear a short notice first and can say no.", type: "toggle", default: true },
        {
          key: "summary_fields",
          label: "After each call, note down",
          description: "Shown on every call summary and in Contacts.",
          type: "list",
          default: ["Service wanted", "New customer?", "Preferred day", "Urgent?"],
          placeholder: "Add something to note",
        },
      ],
    },
  ],
  outbound: [
    {
      id: "who",
      title: "Who it calls",
      fields: [
        { key: "sources", label: "New leads from", type: "chips", default: ["Ad forms", "Website forms", "Missed calls"], options: ["Ad forms", "Website forms", "Missed calls", "Instagram enquiries"] },
        { key: "consent", label: "Only people who enquired and agreed to a call", type: "toggle", default: true, locked: true },
        { key: "dnd", label: "Skip numbers on Do-Not-Disturb lists", description: "Required in India for promotional calls.", type: "toggle", default: true, locked: true },
        { key: "dlt", label: "DLT-registered number", description: "Business calls in India need a registered number series.", type: "link", default: "", view: "calls", action: "Check in Calls" },
      ],
    },
    {
      id: "when",
      title: "When it calls",
      fields: [
        {
          key: "within",
          label: "Calls new leads within",
          type: "select",
          default: "1",
          options: [
            { v: "1", l: "1 minute" },
            { v: "5", l: "5 minutes" },
            { v: "30", l: "30 minutes" },
          ],
        },
        {
          key: "attempts",
          label: "Attempts",
          type: "select",
          default: "2",
          options: [
            { v: "1", l: "1 call" },
            { v: "2", l: "2 calls" },
            { v: "3", l: "3 calls" },
          ],
        },
        {
          key: "gap",
          label: "Between attempts",
          type: "select",
          default: "2h",
          options: [
            { v: "2h", l: "2 hours" },
            { v: "next", l: "The next day" },
          ],
        },
        { key: "from", label: "Calling from", type: "time", default: "10:00" },
        { key: "until", label: "Until", type: "time", default: "19:00" },
        { key: "days", label: "On", type: "chips", default: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], options: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      ],
    },
    {
      id: "call",
      title: "The call",
      fields: [
        {
          key: "goal",
          label: "Goal",
          type: "select",
          default: "book",
          options: [
            { v: "book", l: "Book a visit" },
            { v: "info", l: "Answer questions and send prices" },
            { v: "qualify", l: "Ask a few questions and pass to your team" },
          ],
        },
        { key: "opening", label: "Opening line", type: "textarea", default: "Hi, this is the AI assistant from Nila & Co. You asked about us a minute ago. Is now a good time?" },
        { key: "voice", label: "Voice", type: "voice", default: "asha" },
        { key: "wa_fallback", label: "If they don’t answer, send a WhatsApp", type: "toggle", default: true },
        { key: "voicemail", label: "Voicemail message", type: "textarea", default: "Hi, it’s Nila & Co returning your enquiry. We’ve sent you a WhatsApp with times and prices." },
      ],
    },
  ],
  followup: [
    {
      id: "sequences",
      title: "Follow-up sequences",
      description: "Each starts when a customer goes quiet in that situation. They stop as soon as the customer replies, books or says STOP.",
      fields: [
        {
          key: "seq_price",
          label: "Asked a price but didn’t book",
          type: "sequence",
          default: [
            { after: "24", text: "Hi {name}, just checking in. Would you like me to hold one of those times for you?" },
            { after: "72", text: "Hi {name}, we still have a few slots this week. Reply with a day and I’ll book it." },
            { after: "168", text: "Hi {name}, no pressure at all. If you’d like to visit later, just message us here anytime." },
          ],
        },
        { key: "seq_noshow", label: "Missed their visit", type: "sequence", default: [{ after: "4", text: "Hi {name}, we missed you today! Would you like to pick a new time?" }] },
        { key: "seq_quote", label: "Got a quote", type: "sequence", default: [{ after: "72", text: "Hi {name}, any questions about the quote we sent? Happy to help." }] },
      ],
    },
    {
      id: "rules",
      title: "Rules",
      fields: [
        { key: "stop", label: "Stop when they reply, book or say STOP", type: "toggle", default: true, locked: true },
        quiet(),
        { key: "cold", label: "Pause cold leads for 30 days, then check in once", type: "toggle", default: true },
      ],
    },
  ],
  reviews: [
    {
      id: "ask",
      title: "Asking for reviews",
      fields: [
        { key: "on_ask", label: "Ask after each visit", type: "toggle", default: true },
        {
          key: "when",
          label: "When",
          type: "select",
          default: "2h",
          options: [
            { v: "2h", l: "2 hours after the visit" },
            { v: "evening", l: "The same evening" },
            { v: "next", l: "The next morning" },
          ],
        },
        {
          key: "threshold",
          label: "Send to Google",
          type: "select",
          default: "4",
          options: [
            { v: "4", l: "4 and 5 stars" },
            { v: "5", l: "Only 5 stars" },
          ],
        },
        { key: "ask_text", label: "Message", type: "textarea", default: "Thanks for visiting Nila & Co today, {name}! How was it? Tap 1 to 5." },
        { key: "once", label: "Ask each customer at most once every 90 days", type: "toggle", default: true },
      ],
    },
    {
      id: "unhappy",
      title: "When someone isn’t happy",
      fields: [
        { key: "sorry", label: "Reply", type: "textarea", default: "I’m sorry to hear that. What could we have done better? I’ll pass it straight to the owner." },
        { key: "notify", label: "Tell", type: "chips", default: ["You", "Location manager"], options: ["You", "Location manager", "Everyone on the team"] },
      ],
    },
    {
      id: "replies",
      title: "Replies to Google reviews",
      fields: [
        { key: "draft", label: "Draft a reply to every new review", type: "toggle", default: true },
        { key: "autopost", label: "Post replies to 5-star reviews without asking", description: "Lower ratings always wait for you.", type: "toggle", default: false },
        tone(),
        { key: "sign", label: "Sign off", type: "text", default: "— Team Nila & Co" },
      ],
    },
  ],
  payments: [
    {
      id: "reminders",
      title: "Reminders",
      fields: [
        { key: "days", label: "Remind on", type: "chips", default: ["Day 3", "Day 7", "Day 14"], options: ["Day 1", "Day 3", "Day 7", "Day 14", "Day 30"] },
        {
          key: "tone_pay",
          label: "Tone",
          type: "select",
          default: "gentle",
          options: [
            { v: "gentle", l: "Gentle" },
            { v: "firm", l: "Polite but firm" },
          ],
        },
        { key: "text", label: "Reminder message", type: "textarea", default: "Hi {name}, a gentle reminder about {amount} for {item}. You can pay here: {link}" },
        quiet(),
      ],
    },
    {
      id: "rules",
      title: "Rules",
      fields: [
        { key: "pause_reply", label: "Pause reminders when they reply", type: "toggle", default: true },
        { key: "disputes", label: "Hand disputes and “already paid” to you", type: "toggle", default: true, locked: true },
        { key: "receipt", label: "Send a receipt when paid", type: "toggle", default: true },
        {
          key: "deposit",
          label: "Default deposit",
          type: "select",
          default: "25",
          options: [
            { v: "0", l: "No deposit" },
            { v: "25", l: "25% of the price" },
            { v: "50", l: "50% of the price" },
          ],
        },
        { key: "stripe", label: "Stripe and payment settings", type: "link", default: "", view: "settings:payments", action: "Open" },
      ],
    },
  ],
  winback: [
    {
      id: "rebook",
      title: "Time to rebook",
      fields: [
        { key: "on_rebook", label: "Remind regulars", type: "toggle", default: true },
        {
          key: "cycle",
          label: "When",
          type: "select",
          default: "usual",
          options: [
            { v: "usual", l: "At each customer’s usual gap" },
            { v: "4", l: "After 4 weeks" },
            { v: "6", l: "After 6 weeks" },
            { v: "8", l: "After 8 weeks" },
          ],
        },
        { key: "rebook_text", label: "Message", type: "textarea", default: "Hi {name}, it’s been about {gap} since your last visit. Shall I find you a time this week?" },
      ],
    },
    {
      id: "winback",
      title: "Win back",
      fields: [
        { key: "on_winback", label: "Message customers you haven’t seen in a while", type: "toggle", default: true },
        {
          key: "after",
          label: "After",
          type: "select",
          default: "90",
          options: [
            { v: "60", l: "60 days" },
            { v: "90", l: "90 days" },
            { v: "120", l: "120 days" },
          ],
        },
        {
          key: "offer",
          label: "Offer",
          type: "select",
          default: "none",
          options: [
            { v: "none", l: "No offer" },
            { v: "5", l: "5% off the next visit" },
            { v: "addon", l: "A free add-on" },
          ],
        },
        { key: "winback_text", label: "Message", type: "textarea", default: "Hi {name}, we haven’t seen you in a while and wanted to say hello. Reply if you’d like a time this week." },
      ],
    },
    {
      id: "audience",
      title: "Who gets these",
      fields: [
        { key: "optin", label: "Only customers who agreed to hear from you", type: "toggle", default: true, locked: true },
        {
          key: "gap_since",
          label: "Skip anyone messaged in the last",
          type: "select",
          default: "14",
          options: [
            { v: "7", l: "7 days" },
            { v: "14", l: "14 days" },
            { v: "30", l: "30 days" },
          ],
        },
        {
          key: "max",
          label: "At most",
          type: "select",
          default: "50",
          options: [
            { v: "20", l: "20 messages a week" },
            { v: "50", l: "50 messages a week" },
            { v: "100", l: "100 messages a week" },
          ],
        },
      ],
    },
  ],
  report: [
    {
      id: "morning",
      title: "Morning report",
      fields: [
        { key: "time", label: "Send at", type: "time", default: "08:00" },
        { key: "to", label: "Send to", type: "chips", default: ["Your WhatsApp"], options: ["Your WhatsApp", "Email", "Location managers"] },
        { key: "parts", label: "Include", type: "chips", default: ["Yesterday’s numbers", "What needs you", "Today’s bookings"], options: ["Yesterday’s numbers", "What needs you", "Today’s bookings", "Money collected", "New reviews"] },
      ],
    },
    {
      id: "weekly",
      title: "Weekly summary",
      fields: [
        { key: "weekly", label: "Send “what Vegam won you” every week", type: "toggle", default: true },
        { key: "day", label: "On", type: "select", default: "Monday", options: o("Monday", "Friday", "Sunday") },
        { key: "value", label: "Include an estimate of the value", type: "toggle", default: true },
      ],
    },
  ],
  owner: [
    {
      id: "access",
      title: "Who can use it",
      description: "Only these numbers can ask about bookings or change anything.",
      fields: [
        {
          key: "people",
          label: "Allowed numbers",
          type: "permissions",
          default: [
            { number: "+91 98765 43210 · You", level: "full" },
            { number: "+91 90•• ••• 120 · R. Kumar", level: "calendar" },
          ],
        },
      ],
    },
    {
      id: "commands",
      title: "What it can do",
      fields: [
        {
          key: "commands",
          label: "Allowed requests",
          type: "chips",
          default: ["See bookings", "Block time", "Who needs a call back", "Pause the AI"],
          options: ["See bookings", "Block time", "Who needs a call back", "Pause the AI", "Change prices", "Send a broadcast"],
        },
        { key: "confirm", label: "Ask to confirm before cancelling or changing many bookings", type: "toggle", default: true },
        { key: "log", label: "Keep a log of every request", type: "toggle", default: true, locked: true },
      ],
    },
  ],
};

/** Shared by every agent unless an agent overrides it. */
export const businessRules: SetupSection[] = [
  {
    id: "voice",
    title: "How your AI sounds",
    fields: [
      { key: "tone", label: "Tone", type: "select", default: "Friendly", options: o("Friendly", "Formal", "Short and to the point") },
      languages(),
      { key: "disclosure", label: "How it says it’s an AI", type: "textarea", default: "I’m the AI assistant for Nila & Co. A person from the team can help anytime." },
      aiDisclosure(),
    ],
  },
  {
    id: "limits",
    title: "Limits",
    fields: [
      { key: "never", label: "Never talk about", type: "list", default: ["Discounts not on your price list", "Other businesses", "Personal opinions"], placeholder: "Add a topic" },
      {
        key: "discount",
        label: "Discounts any agent may offer",
        type: "select",
        default: "none",
        options: [
          { v: "none", l: "None" },
          { v: "5", l: "Up to 5%" },
          { v: "10", l: "Up to 10%" },
        ],
      },
      quiet(),
    ],
  },
  {
    id: "handover",
    title: "Handovers",
    description: "When any agent passes a customer to a person.",
    fields: [
      { key: "h_person", label: "They ask for a person", type: "toggle", default: true },
      { key: "h_upset", label: "They seem upset", type: "toggle", default: true },
      { key: "h_money", label: "Refunds and payment problems", type: "toggle", default: true },
      { key: "h_unknown", label: "It doesn’t know the answer", type: "toggle", default: true, locked: true },
      {
        key: "escalate",
        label: "If nobody replies in 15 minutes, tell",
        type: "select",
        default: "you",
        options: [
          { v: "you", l: "You" },
          { v: "manager", l: "The location manager" },
          { v: "all", l: "Everyone on the team" },
        ],
      },
    ],
  },
];

export const defaultsOf = (sections: SetupSection[]): Config => Object.fromEntries(sections.flatMap((s) => s.fields.map((f) => [f.key, f.default])));
