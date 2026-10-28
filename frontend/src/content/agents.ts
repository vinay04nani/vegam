// The AI agents a business can switch on, with sample stats, voices,
// unanswered questions and an activity log.
// TODO(backend): live stats and real agent settings.

import type { IconName } from "@/components/ui/Icon";
import type { PlanId } from "./pricing";

export type AgentId = "chat" | "voice" | "outbound" | "followup" | "report" | "owner";

export type Agent = {
  id: AgentId;
  name: string;
  icon: IconName;
  minPlan: PlanId;
  description: string;
  defaultOn: boolean;
  stats: { label: string; value: string }[];
};

export const agents: Agent[] = [
  {
    id: "chat",
    name: "Chat receptionist",
    icon: "message",
    minPlan: "starter",
    description: "Replies on WhatsApp, Instagram, Messenger and your website, answers questions from your knowledge and books appointments.",
    defaultOn: true,
    stats: [
      { label: "Chats this week", value: "142" },
      { label: "Handled without staff", value: "86%" },
      { label: "Avg. first reply", value: "6 sec" },
    ],
  },
  {
    id: "voice",
    name: "Voice receptionist",
    icon: "phone",
    minPlan: "growth",
    description: "Answers calls when you’re busy, says it’s an AI assistant, books visits, and transfers to your team when asked.",
    defaultOn: true,
    stats: [
      { label: "Calls this week", value: "38" },
      { label: "Booked on the call", value: "41%" },
      { label: "Transferred", value: "5" },
    ],
  },
  {
    id: "outbound",
    name: "Outbound caller",
    icon: "send",
    minPlan: "pro",
    description: "Calls new leads who enquired, within your calling hours and only with their consent.",
    defaultOn: false,
    stats: [
      { label: "Calls this week", value: "—" },
      { label: "Reached", value: "—" },
      { label: "Booked", value: "—" },
    ],
  },
  {
    id: "followup",
    name: "Follow-up agent",
    icon: "refresh",
    minPlan: "starter",
    description: "Gently follows up with people who went quiet, and stops as soon as they reply, book or say STOP.",
    defaultOn: true,
    stats: [
      { label: "Follow-ups sent", value: "64" },
      { label: "Replied", value: "29%" },
      { label: "Booked", value: "11" },
    ],
  },
  {
    id: "report",
    name: "Report writer",
    icon: "sun",
    minPlan: "starter",
    description: "Sends your morning report on WhatsApp at 8 AM and a weekly “what Vegam won you” summary.",
    defaultOn: true,
    stats: [
      { label: "Reports sent", value: "27" },
      { label: "Next report", value: "8:00 AM" },
      { label: "Weekly summary", value: "Monday" },
    ],
  },
  {
    id: "owner",
    name: "Owner’s assistant",
    icon: "sparkle",
    minPlan: "starter",
    description: "Message it from your own WhatsApp: “Bookings today?”, “Block Friday afternoon”, “Who needs a call back?”.",
    defaultOn: true,
    stats: [
      { label: "Requests this week", value: "12" },
      { label: "Most used", value: "Bookings today" },
      { label: "Allowed numbers", value: "2" },
    ],
  },
];

export const sampleVoices = [
  { id: "asha", name: "Asha", note: "Warm, Indian English and Hindi" },
  { id: "ravi", name: "Ravi", note: "Calm, Indian English and Telugu" },
  { id: "meera", name: "Meera", note: "Bright, Indian English and Tamil" },
  { id: "noah", name: "Noah", note: "Neutral, international English" },
];

export const sampleUnanswered = [
  { id: "q1", question: "Do you open on public holidays?", asked: 3, last: "Today, 9:12 AM", channel: "WhatsApp" },
  { id: "q2", question: "Do you sell gift vouchers?", asked: 2, last: "Yesterday", channel: "Website" },
  { id: "q3", question: "Is there wheelchair access?", asked: 1, last: "2 days ago", channel: "Instagram" },
  { id: "q4", question: "Can I pay in instalments?", asked: 1, last: "3 days ago", channel: "Phone" },
];

export const sampleAgentActivity = [
  { time: "9:42 PM", agent: "Chat receptionist", action: "Booked P. Sharma for tomorrow 6:30 PM", outcome: "Booked" },
  { time: "8:14 PM", agent: "Chat receptionist", action: "Handed a refund question to your team", outcome: "Handed over" },
  { time: "7:14 PM", agent: "Chat receptionist", action: "Sent a booking link after a missed call", outcome: "Sent" },
  { time: "11:05 AM", agent: "Voice receptionist", action: "Took a callback request for a group booking", outcome: "Callback" },
  { time: "10:12 AM", agent: "Voice receptionist", action: "Booked a standard appointment for Thursday 4 PM", outcome: "Booked" },
  { time: "10:00 AM", agent: "Follow-up agent", action: "Sent follow-up 2 to S. Menon", outcome: "Sent" },
  { time: "8:00 AM", agent: "Report writer", action: "Sent the morning report to the owner", outcome: "Sent" },
  { time: "7:58 AM", agent: "Owner’s assistant", action: "Blocked Friday 2–6 PM on request", outcome: "Done" },
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
