// The AI agents a business can switch on, with sample stats, voices,
// unanswered questions and an activity log.
// TODO(backend): live stats and real agent settings.

import type { IconName } from "@/components/ui/Icon";
import type { PlanId } from "./pricing";

export type AgentId = "chat" | "voice" | "outbound" | "followup" | "reviews" | "payments" | "winback" | "report" | "owner";
export type AgentGroup = "desk" | "grow" | "you";

export type AgentStat = { label: string; value: string; delta?: number; better?: "up" | "down"; trend: number[] };

export type Agent = {
  id: AgentId;
  name: string;
  icon: IconName;
  group: AgentGroup;
  minPlan: PlanId;
  /** One line for the card. */
  short: string;
  description: string;
  defaultOn: boolean;
  /** Where it works, shown as chips. */
  works: string[];
  /** The number on its card, this week. */
  headline: { label: string; value: string };
  /** Four numbers for Overview and Performance. */
  stats: AgentStat[];
  /** How its work ended this week (shares add up to 1). */
  outcomes: { label: string; share: number }[];
  /** Why it handed over or what held it back (shares). */
  reasons?: { title: string; rows: { label: string; share: number }[] };
  /** Things that need the owner now. */
  alerts: { text: string; action?: { label: string; view: string } }[];
  /** Setup steps; all done means it's ready. */
  steps: { label: string; done: boolean; view?: string }[];
  /** Plan allowance it uses, if any. */
  usage?: { label: string; used: number; max: number };
};

export const agentGroups: { id: AgentGroup; title: string; body: string }[] = [
  { id: "desk", title: "Front desk", body: "Answer every message and call, day and night." },
  { id: "grow", title: "Grow", body: "Win new customers, get paid and bring people back." },
  { id: "you", title: "For you", body: "Keep you informed and take orders from your phone." },
];

/** A gentle repeatable trend for sample sparklines. */
const trend = (base: number, slope: number, seed: number) => Array.from({ length: 12 }, (_, i) => Math.max(0, Math.round((base + slope * i + Math.sin(i * 1.3 + seed) * base * 0.08) * 10) / 10));

export const agents: Agent[] = [
  {
    id: "chat",
    name: "Chat receptionist",
    icon: "message",
    group: "desk",
    minPlan: "starter",
    short: "Replies to every message and books visits.",
    description: "Replies on WhatsApp, Instagram, Messenger and your website, answers from your knowledge, books, reschedules and hands over to your team when it should.",
    defaultOn: true,
    works: ["WhatsApp", "Instagram", "Messenger", "Website chat"],
    headline: { label: "Chats this week", value: "142" },
    stats: [
      { label: "Conversations", value: "142", delta: 0.11, trend: trend(16, 0.5, 1) },
      { label: "Resolved without staff", value: "86%", delta: 0.04, trend: trend(80, 0.5, 2) },
      { label: "Bookings made", value: "48", delta: 0.09, trend: trend(5, 0.15, 3) },
      { label: "Average first reply", value: "6 sec", delta: -0.12, better: "down", trend: trend(8, -0.15, 4) },
    ],
    outcomes: [
      { label: "Resolved", share: 0.52 },
      { label: "Booked", share: 0.34 },
      { label: "Handed over", share: 0.14 },
    ],
    reasons: {
      title: "Why chats were handed over",
      rows: [
        { label: "Asked for a person", share: 0.38 },
        { label: "Didn’t know the answer", share: 0.27 },
        { label: "Refund or payment issue", share: 0.17 },
        { label: "Group or special booking", share: 0.12 },
        { label: "Customer seemed upset", share: 0.06 },
      ],
    },
    alerts: [{ text: "4 questions it couldn’t answer this week", action: { label: "Answer them", view: "agent:chat/knowledge" } }],
    steps: [
      { label: "Services, prices and hours added", done: true },
      { label: "WhatsApp connected", done: true },
      { label: "50 test replies checked with you", done: false, view: "agent:chat/test" },
      { label: "Instagram and Messenger connected", done: true },
    ],
    usage: { label: "AI conversations", used: 2520, max: 3000 },
  },
  {
    id: "voice",
    name: "Voice receptionist",
    icon: "phone",
    group: "desk",
    minPlan: "growth",
    short: "Answers calls you can’t pick up.",
    description: "Answers calls when you’re busy, says it’s an AI assistant, answers questions, books visits, takes messages and transfers to your team when asked.",
    defaultOn: true,
    works: ["Your phone number", "Missed calls"],
    headline: { label: "Calls this week", value: "38" },
    stats: [
      { label: "Calls answered", value: "38", delta: 0.06, trend: trend(4, 0.12, 1) },
      { label: "Booked on the call", value: "41%", delta: 0.05, trend: trend(36, 0.4, 2) },
      { label: "Transferred to you", value: "5", delta: -0.17, better: "down", trend: trend(1, -0.02, 3) },
      { label: "Average call", value: "1:48", trend: trend(110, -0.5, 4) },
    ],
    outcomes: [
      { label: "Booked", share: 0.41 },
      { label: "Answered", share: 0.33 },
      { label: "Message taken", share: 0.13 },
      { label: "Transferred", share: 0.13 },
    ],
    reasons: {
      title: "Why calls were transferred",
      rows: [
        { label: "Asked for a person", share: 0.46 },
        { label: "Urgent", share: 0.27 },
        { label: "Didn’t know the answer", share: 0.18 },
        { label: "Complaint", share: 0.09 },
      ],
    },
    alerts: [{ text: "2 callers are waiting for a call back", action: { label: "See calls", view: "calls" } }],
    steps: [
      { label: "AI phone number set up", done: true, view: "calls" },
      { label: "Voice and greeting chosen", done: true },
      { label: "Who it transfers to", done: true },
      { label: "Test call made", done: false, view: "agent:voice/test" },
    ],
    usage: { label: "AI call minutes", used: 213, max: 300 },
  },
  {
    id: "outbound",
    name: "Outbound caller",
    icon: "send",
    group: "grow",
    minPlan: "pro",
    short: "Calls new leads within a minute.",
    description: "Calls people who just enquired, from ad forms, your website or a missed call, within your calling hours and only with their consent. Falls back to WhatsApp if they don’t answer.",
    defaultOn: false,
    works: ["Ad forms", "Website forms", "Missed calls"],
    headline: { label: "Leads called", value: "17" },
    stats: [
      { label: "Leads called", value: "17", delta: 0.21, trend: trend(1.4, 0.05, 1) },
      { label: "Reached", value: "71%", delta: 0.03, trend: trend(68, 0.3, 2) },
      { label: "Booked on the call", value: "6", delta: 0.2, trend: trend(0.5, 0.02, 3) },
      { label: "Time to first call", value: "52 sec", delta: -0.1, better: "down", trend: trend(60, -0.6, 4) },
    ],
    outcomes: [
      { label: "Booked", share: 0.35 },
      { label: "Interested", share: 0.24 },
      { label: "Not now", share: 0.12 },
      { label: "No answer", share: 0.29 },
    ],
    alerts: [{ text: "DLT number registration in review", action: { label: "Check", view: "calls" } }],
    steps: [
      { label: "Lead sources chosen", done: true },
      { label: "Calling hours set", done: true },
      { label: "DLT-registered number", done: false, view: "calls" },
    ],
    usage: { label: "AI call minutes", used: 213, max: 300 },
  },
  {
    id: "followup",
    name: "Follow-up agent",
    icon: "refresh",
    group: "grow",
    minPlan: "starter",
    short: "Nudges people who went quiet.",
    description: "Gently follows up with people who asked a price, missed a visit or got a quote, and stops as soon as they reply, book or say STOP.",
    defaultOn: true,
    works: ["WhatsApp"],
    headline: { label: "Replied this week", value: "29%" },
    stats: [
      { label: "Follow-ups sent", value: "64", delta: 0.08, trend: trend(5, 0.1, 1) },
      { label: "Replied", value: "29%", delta: 0.04, trend: trend(26, 0.3, 2) },
      { label: "Booked after a nudge", value: "11", delta: 0.22, trend: trend(0.8, 0.03, 3) },
      { label: "Opted out", value: "1%", delta: 0, better: "down", trend: trend(1, 0, 4) },
    ],
    outcomes: [
      { label: "Booked", share: 0.17 },
      { label: "Replied", share: 0.12 },
      { label: "No reply yet", share: 0.7 },
      { label: "Stopped", share: 0.01 },
    ],
    alerts: [],
    steps: [
      { label: "Sequences set", done: true },
      { label: "Templates approved by Meta", done: true, view: "settings:templates" },
    ],
  },
  {
    id: "reviews",
    name: "Review agent",
    icon: "star",
    group: "grow",
    minPlan: "growth",
    short: "Asks for reviews and drafts replies.",
    description: "Asks customers how their visit went, sends happy ones to Google, brings unhappy ones to you privately, and drafts replies to every Google review.",
    defaultOn: true,
    works: ["WhatsApp", "Google Business Profile"],
    headline: { label: "New Google reviews", value: "14" },
    stats: [
      { label: "Requests sent", value: "52", delta: 0.1, trend: trend(4, 0.1, 1) },
      { label: "Left a Google review", value: "27%", delta: 0.06, trend: trend(22, 0.4, 2) },
      { label: "Private feedback", value: "3", delta: -0.25, better: "down", trend: trend(0.4, -0.01, 3) },
      { label: "Replies drafted", value: "11", trend: trend(1, 0.03, 4) },
    ],
    outcomes: [
      { label: "Google review", share: 0.27 },
      { label: "Rated, no review", share: 0.19 },
      { label: "Private feedback", share: 0.06 },
      { label: "No reply", share: 0.48 },
    ],
    alerts: [{ text: "5 reviews waiting for a reply", action: { label: "Reply", view: "reviews" } }],
    steps: [
      { label: "Google Business Profile connected", done: true },
      { label: "Review request template approved", done: false, view: "settings:templates" },
    ],
  },
  {
    id: "payments",
    name: "Payment collector",
    icon: "wallet",
    group: "grow",
    minPlan: "pro",
    short: "Sends payment links and reminders.",
    description: "Sends Stripe payment links for deposits and bills, reminds people on day 3, 7 and 14 until they pay, and hands disputes to you.",
    defaultOn: true,
    works: ["WhatsApp", "Stripe"],
    headline: { label: "Collected this month", value: "₹9,000" },
    stats: [
      { label: "Collected", value: "₹9,000", delta: 0.18, trend: trend(700, 20, 1) },
      { label: "Paid on time", value: "68%", delta: 0.05, trend: trend(62, 0.5, 2) },
      { label: "Overdue", value: "₹10,700", delta: 0.12, better: "down", trend: trend(800, 15, 3) },
      { label: "Average time to pay", value: "2.6 days", delta: -0.09, better: "down", trend: trend(3, -0.04, 4) },
    ],
    outcomes: [
      { label: "Paid", share: 0.58 },
      { label: "Waiting", share: 0.17 },
      { label: "Overdue", share: 0.25 },
    ],
    alerts: [{ text: "3 payments are overdue", action: { label: "See payments", view: "payments" } }],
    steps: [
      { label: "Stripe connected", done: true, view: "settings:payments" },
      { label: "Reminder messages approved", done: true },
    ],
  },
  {
    id: "winback",
    name: "Win-back and rebooking",
    icon: "megaphone",
    group: "grow",
    minPlan: "pro",
    short: "Brings regulars and lapsed customers back.",
    description: "Reminds regulars when it’s time for their next visit and sends a kind note to customers you haven’t seen in a while. Only to people who agreed to hear from you.",
    defaultOn: false,
    works: ["WhatsApp"],
    headline: { label: "Brought back", value: "11" },
    stats: [
      { label: "Messages sent", value: "81", delta: 0.05, trend: trend(6, 0.1, 1) },
      { label: "Replied", value: "23%", delta: 0.02, trend: trend(21, 0.2, 2) },
      { label: "Rebooked", value: "11", delta: 0.37, trend: trend(0.7, 0.04, 3) },
      { label: "Opted out", value: "2%", delta: 0.01, better: "down", trend: trend(2, 0, 4) },
    ],
    outcomes: [
      { label: "Rebooked", share: 0.14 },
      { label: "Replied", share: 0.09 },
      { label: "No reply", share: 0.75 },
      { label: "Opted out", share: 0.02 },
    ],
    alerts: [],
    steps: [
      { label: "Visit cycle set", done: true },
      { label: "Marketing template approved", done: false, view: "settings:templates" },
    ],
  },
  {
    id: "report",
    name: "Report writer",
    icon: "sun",
    group: "you",
    minPlan: "starter",
    short: "Your morning report and weekly wins.",
    description: "Sends your morning report on WhatsApp at 8 AM with yesterday’s numbers and what needs you, and a weekly “what Vegam won you” summary.",
    defaultOn: true,
    works: ["Your WhatsApp", "Email"],
    headline: { label: "Next report", value: "8:00 AM" },
    stats: [
      { label: "Reports sent", value: "27", trend: trend(2, 0.05, 1) },
      { label: "Opened", value: "96%", trend: trend(94, 0.1, 2) },
      { label: "Actions taken from it", value: "18", delta: 0.12, trend: trend(1.4, 0.04, 3) },
      { label: "Next weekly summary", value: "Monday", trend: trend(1, 0, 4) },
    ],
    outcomes: [
      { label: "Opened", share: 0.96 },
      { label: "Not opened", share: 0.04 },
    ],
    alerts: [],
    steps: [{ label: "Your WhatsApp number confirmed", done: true }],
  },
  {
    id: "owner",
    name: "Owner’s assistant",
    icon: "sparkle",
    group: "you",
    minPlan: "starter",
    short: "Run the desk by messaging it.",
    description: "Message it from your own WhatsApp: “Bookings today?”, “Block Friday afternoon”, “Who needs a call back?”, “Pause the AI”. Only numbers you allow can use it.",
    defaultOn: true,
    works: ["Your WhatsApp"],
    headline: { label: "Requests this week", value: "12" },
    stats: [
      { label: "Requests", value: "12", delta: 0.2, trend: trend(1, 0.05, 1) },
      { label: "Done straight away", value: "92%", trend: trend(90, 0.2, 2) },
      { label: "Most used", value: "Bookings today", trend: trend(1, 0, 3) },
      { label: "Allowed numbers", value: "2", trend: trend(2, 0, 4) },
    ],
    outcomes: [
      { label: "Answered", share: 0.58 },
      { label: "Calendar changed", share: 0.25 },
      { label: "Settings changed", share: 0.09 },
      { label: "Asked to confirm", share: 0.08 },
    ],
    alerts: [],
    steps: [{ label: "Allowed numbers set", done: true }],
  },
];

// ---------- Activity: what each agent did, with the conversation ----------

export type ActivityOutcome = "Resolved" | "Booked" | "Handed over" | "Sent" | "No answer" | "Paid" | "Replied" | "Done" | "Transferred";
export type ActivityLine = { from: "customer" | "ai" | "team"; text: string };
export type ActivityItem = { id: string; agent: AgentId; when: string; who: string; channel: string; summary: string; outcome: ActivityOutcome; lines: ActivityLine[] };

const act = (agent: AgentId, id: string, when: string, who: string, channel: string, outcome: ActivityOutcome, summary: string, lines: ActivityLine[] = []): ActivityItem => ({ id, agent, when, who, channel, outcome, summary, lines });
const c = (text: string): ActivityLine => ({ from: "customer", text });
const a = (text: string): ActivityLine => ({ from: "ai", text });

export const agentActivity: ActivityItem[] = [
  act("chat", "ac1", "Today, 9:42 PM", "P. Sharma", "WhatsApp", "Booked", "Booked a standard appointment for tomorrow 6:30 PM", [
    c("Hi, can I come tomorrow evening?"),
    a("Of course! Tomorrow we have 5:30 PM and 6:30 PM free. Which suits you?"),
    c("6:30 please"),
    a("Done: you’re booked for tomorrow at 6:30 PM. I’ll send a reminder in the morning."),
  ]),
  act("chat", "ac2", "Today, 8:14 PM", "K. Shah", "WhatsApp", "Handed over", "Asked for a refund; handed to your team", [
    c("I want a refund for last week’s visit"),
    a("I’m sorry to hear that. I’ve passed this to the team and someone will message you today."),
  ]),
  act("chat", "ac3", "Today, 6:05 PM", "N. Paul", "Instagram", "Resolved", "Answered prices and parking", [
    c("How much is a first visit? Is there parking?"),
    a("A first visit is ₹500 and takes about 30 minutes. Yes, free parking is right next to the entrance."),
  ]),
  act("chat", "ac4", "Today, 1:22 PM", "A. Khan", "Website chat", "Resolved", "Didn’t know about public holidays; said it would check", [
    c("Are you open on public holidays?"),
    a("I’m not sure about public holidays. I’ll check with the team and get back to you shortly."),
  ]),
  act("chat", "ac5", "Yesterday, 11:48 PM", "R. Mehta", "WhatsApp", "Booked", "Booked a first visit after closing time", [
    c("Do you have anything Saturday morning?"),
    a("Saturday at 10 AM and 11:30 AM are free. Shall I book one?"),
    c("10 AM"),
    a("Booked! See you Saturday at 10 AM."),
  ]),
  act("chat", "ac6", "Yesterday, 4:30 PM", "L. Fernandes", "Messenger", "Resolved", "Rescheduled to Thursday", [
    c("Can I move my visit to Thursday?"),
    a("Sure. Thursday 3 PM or 5 PM?"),
    c("5"),
    a("Moved to Thursday at 5 PM. See you then!"),
  ]),
  act("voice", "av1", "Today, 11:05 AM", "+91 90•• ••• 044", "Phone", "Handed over", "Group booking for 12; asked the owner to call back after 5 PM", [
    a("Thanks for calling. I’m the AI assistant. How can I help?"),
    c("I want to book for a group of about 12 next month."),
    a("I’ll ask the owner to call you about that. Is after 5 PM a good time?"),
    c("Yes, after 5 is fine."),
  ]),
  act("voice", "av2", "Today, 10:12 AM", "P. Sharma", "Phone", "Booked", "Booked Thursday 4 PM", [
    a("Thanks for calling. I’m the AI assistant. How can I help?"),
    c("Can I book for Thursday afternoon?"),
    a("Thursday at 4 PM is free. Shall I book it?"),
    c("Yes please."),
  ]),
  act("voice", "av3", "Yesterday, 2:15 PM", "+91 97•• ••• 552", "Phone", "Transferred", "Upset about a delay; transferred to R. Kumar", [
    c("I’ve been waiting for 20 minutes!"),
    a("I’m really sorry. Let me put you through to the manager now."),
  ]),
  act("outbound", "ao1", "Today, 9:13 AM", "R. Varma", "Ad form", "Booked", "Called within a minute of the ad form; booked a group visit", [
    a("Hi, this is the AI assistant from Nila & Co. You asked about a group visit a minute ago. Is now a good time?"),
    c("Yes! We’re six people, sometime next month."),
    a("The 14th at 11 AM is free for six. Shall I book it and send a deposit link?"),
    c("Perfect."),
  ]),
  act("outbound", "ao2", "Yesterday, 5:40 PM", "+91 93•• ••• 218", "Website form", "No answer", "No answer; sent prices and a booking link on WhatsApp"),
  act("followup", "af1", "Today, 10:00 AM", "S. Menon", "WhatsApp", "Sent", "Sent follow-up 2 of 3", [a("Hi Menon, we still have a few slots this week. Reply with a day and I’ll book it.")]),
  act("followup", "af2", "Yesterday, 6:10 PM", "V. Reddy", "WhatsApp", "Booked", "Booked after the first nudge", [
    a("Hi Reddy, just checking in. Would you like me to hold one of those times for you?"),
    c("Yes, Friday 11 please"),
    a("Booked for Friday at 11 AM!"),
  ]),
  act("reviews", "ar1", "Today, 3:00 PM", "Ananya R.", "WhatsApp", "Replied", "Rated 5 stars and left a Google review", [
    a("Thanks for visiting today! How was it? Tap 1 to 5."),
    c("5"),
    a("Wonderful! Would you share that on Google? It helps us a lot: g.page/review"),
  ]),
  act("reviews", "ar2", "Yesterday, 7:20 PM", "N. Gupta", "WhatsApp", "Handed over", "Rated 2 stars; feedback sent to you privately", [
    a("Thanks for visiting today! How was it? Tap 1 to 5."),
    c("2"),
    a("I’m sorry to hear that. What could we have done better? I’ll pass it straight to the owner."),
    c("The visit felt rushed."),
  ]),
  act("payments", "ap1", "Today, 12:40 PM", "A. Khan", "WhatsApp", "Paid", "Paid ₹1,200 by UPI after the link"),
  act("payments", "ap2", "Today, 10:00 AM", "T. George", "WhatsApp", "Sent", "Sent reminder 2 for ₹3,000 (Package of 5)", [
    a("Hi George, a gentle reminder about your balance of ₹3,000 for the Package of 5. You can pay here: pay.vegam.app/04k21x"),
  ]),
  act("winback", "aw1", "Yesterday, 11:00 AM", "M. Iyer", "WhatsApp", "Booked", "Time-to-rebook reminder at 6 weeks; booked", [
    a("Hi Iyer, it’s been about 6 weeks since your last visit. Shall I find you a time this week?"),
    c("Yes, Wednesday morning"),
    a("Wednesday 10 AM is yours!"),
  ]),
  act("report", "arp1", "Today, 8:00 AM", "You", "WhatsApp", "Sent", "Morning report: 14 enquiries, 6 bookings, 1 needs you"),
  act("report", "arp2", "Monday, 8:00 AM", "You", "WhatsApp", "Sent", "Weekly summary: 9 bookings after closing time"),
  act("owner", "aow1", "Today, 7:58 AM", "You", "WhatsApp", "Done", "Blocked Friday 2–6 PM", [c("Block Friday afternoon"), a("Blocked Friday 2–6 PM. Nobody can book then. Want me to tell the 2 people already booked?"), c("No, keep them")]),
  act("owner", "aow2", "Yesterday, 9:15 PM", "You", "WhatsApp", "Done", "Listed tomorrow’s bookings", [
    c("Bookings tomorrow?"),
    a("6 bookings tomorrow: 10:00 R. Mehta, 11:30 A. Khan, 12:00 L. Fernandes, 3:00 S. Rao, 5:30 J. Thomas, 6:30 P. Sharma."),
  ]),
];

// ---------- Tests: scenarios each agent should handle ----------

export const testSets: Record<AgentId, { id: string; scenario: string; expect: string }[]> = {
  chat: [
    { id: "t1", scenario: "“How much is a first visit?”", expect: "Gives the price from your services" },
    { id: "t2", scenario: "“Can I book tomorrow evening?”", expect: "Offers free times and books" },
    { id: "t3", scenario: "“Are you open on public holidays?”", expect: "Doesn’t guess; hands over" },
    { id: "t4", scenario: "“I want to talk to a person”", expect: "Hands over straight away" },
    { id: "t5", scenario: "“क्या कल शाम का समय मिलेगा?” (Hindi)", expect: "Replies in Hindi" },
    { id: "t6", scenario: "“Give me 50% off or I’ll leave a bad review”", expect: "Stays polite, no discount above your limit" },
  ],
  voice: [
    { id: "t1", scenario: "Caller asks the opening hours", expect: "Answers from your hours" },
    { id: "t2", scenario: "Caller wants to book Thursday", expect: "Books and confirms on WhatsApp" },
    { id: "t3", scenario: "Caller asks for the manager", expect: "Transfers to your team" },
    { id: "t4", scenario: "Caller is angry about waiting", expect: "Apologises and transfers" },
    { id: "t5", scenario: "Call after closing time", expect: "Takes a message and books a callback" },
  ],
  outbound: [
    { id: "t1", scenario: "New ad lead answers", expect: "Introduces itself as an AI and offers times" },
    { id: "t2", scenario: "Lead says “not now”", expect: "Ends politely and sends a WhatsApp" },
    { id: "t3", scenario: "Lead is on Do-Not-Disturb", expect: "Doesn’t call; sends WhatsApp only" },
  ],
  followup: [
    { id: "t1", scenario: "Customer asked a price and went quiet", expect: "Nudge 1 after 1 day" },
    { id: "t2", scenario: "Customer replies STOP", expect: "Stops and never messages again" },
    { id: "t3", scenario: "Customer books after nudge 1", expect: "Cancels nudges 2 and 3" },
  ],
  reviews: [
    { id: "t1", scenario: "Customer rates 5", expect: "Sends your Google link" },
    { id: "t2", scenario: "Customer rates 2", expect: "Asks what went wrong; tells you privately" },
    { id: "t3", scenario: "1-star Google review", expect: "Drafts an apology, waits for you to approve" },
  ],
  payments: [
    { id: "t1", scenario: "Deposit link not paid after 3 days", expect: "Polite reminder 1" },
    { id: "t2", scenario: "Customer says they already paid", expect: "Hands over; pauses reminders" },
    { id: "t3", scenario: "Paid by UPI", expect: "Sends a receipt and stops reminders" },
  ],
  winback: [
    { id: "t1", scenario: "Regular, 6 weeks since last visit", expect: "Time-to-rebook message" },
    { id: "t2", scenario: "Customer never agreed to marketing", expect: "Skipped" },
  ],
  report: [{ id: "t1", scenario: "Monday 8 AM", expect: "Morning report plus weekly summary" }],
  owner: [
    { id: "t1", scenario: "“Bookings today?” from your number", expect: "Lists today’s bookings" },
    { id: "t2", scenario: "“Bookings today?” from an unknown number", expect: "Refuses politely" },
    { id: "t3", scenario: "“Cancel all bookings tomorrow”", expect: "Asks you to confirm first" },
  ],
};

export const sampleVoices = [
  { id: "asha", name: "Asha", note: "Warm, Indian English and Hindi" },
  { id: "ravi", name: "Ravi", note: "Calm, Indian English and Telugu" },
  { id: "meera", name: "Meera", note: "Bright, Indian English and Tamil" },
  { id: "noah", name: "Noah", note: "Neutral, international English" },
];

/** Questions the AI couldn't answer. `suggestion` is drafted from how your team replied. */
export const sampleUnanswered: { id: string; question: string; asked: number; last: string; channel: string; agent: AgentId; suggestion?: string }[] = [
  { id: "q1", question: "Do you open on public holidays?", asked: 3, last: "Today, 9:12 AM", channel: "WhatsApp", agent: "chat", suggestion: "We’re closed on national holidays and open 10 AM to 2 PM on other public holidays." },
  { id: "q2", question: "Do you sell gift vouchers?", asked: 2, last: "Yesterday", channel: "Website", agent: "chat", suggestion: "Yes! Gift vouchers are available at the front desk for any amount from ₹500." },
  { id: "q3", question: "Is there wheelchair access?", asked: 1, last: "2 days ago", channel: "Instagram", agent: "chat" },
  { id: "q4", question: "Can I pay in instalments?", asked: 1, last: "3 days ago", channel: "Phone", agent: "voice", suggestion: "Packages can be paid in two parts: half when you book and half at your third visit." },
];

// ---------- Setup review: the 50 test replies checked with the owner ----------

const reviewBase = [
  { q: "What are your timings?", a: "We’re open Monday to Friday 10 AM to 7 PM, and Saturday 10 AM to 5 PM. We’re closed on Sundays." },
  { q: "How much is a first visit?", a: "A first visit is ₹500 and takes about 30 minutes. Would you like me to find you a time?" },
  { q: "Can I book for tomorrow evening?", a: "Tomorrow we have 5:30 PM and 6:30 PM free. Which one suits you?" },
  { q: "Is there parking?", a: "Yes, free parking is available next to the entrance." },
  { q: "Do you take UPI?", a: "Yes. We accept cash, cards and UPI." },
  { q: "Can I reschedule my appointment?", a: "Of course. Which day works better for you? I’ll show you the free times." },
  { q: "Do you open on public holidays?", a: "I’m not sure about public holidays. I’ll check with the team and get back to you shortly." },
  { q: "How long does a standard appointment take?", a: "A standard appointment takes about an hour." },
  { q: "Can I bring my friend along?", a: "Yes, you’re welcome to bring someone. If they’d like an appointment too, I can book you back to back." },
  { q: "I want a refund for last week", a: "I’m sorry to hear that. I’ve passed this to the team and someone will message you today." },
];
const phrasings = ["{q}", "Hi, {q}", "Hello! {q}", "Quick question: {q}", "Namaste. {q}"];

export type ReviewItem = { id: string; q: string; a: string; status: "todo" | "ok" | "fixed" };

/** 50 test replies from setup. The first 32 are already reviewed in the demo. */
export const setupReview: ReviewItem[] = phrasings.flatMap((p, pi) =>
  reviewBase.map((b, bi) => {
    const n = pi * reviewBase.length + bi;
    const q = p.replace("{q}", pi ? b.q.charAt(0).toLowerCase() + b.q.slice(1) : b.q);
    return { id: `sr${n}`, q, a: b.a, status: n < 32 ? (n % 11 === 6 ? "fixed" : "ok") : "todo" };
  }),
);
