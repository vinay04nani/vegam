// Sample data for the dashboard demo. Shown with a "Sample data" label until
// the backend supplies the business's real numbers.
// TODO(backend): replace with live data.

export const sampleToday = [
  { label: "Enquiries", value: "14", note: "All replied" },
  { label: "Bookings", value: "6", note: "2 after closing time" },
  { label: "Missed calls", value: "2", note: "Both followed up" },
  { label: "Avg. reply", value: "6s", note: "Day and night" },
];

export const sampleNeedsYou = [
  { who: "Customer · +91 98•• ••• 210", text: "Asked about a refund for last week’s visit", tag: "Handed over", channel: "WhatsApp" },
  { who: "Caller · +91 90•• ••• 044", text: "Wants a callback about a large group booking", tag: "Callback", channel: "Phone" },
  { who: "Question your assistant didn’t know", text: "“Do you open on public holidays?”", tag: "Answer once", channel: "Assistant" },
];

// ---------- Inbox ----------

export type InboxChannel = "WhatsApp" | "Instagram" | "Messenger" | "Website" | "Missed call";
export type ThreadMessage = { from: "customer" | "ai" | "team"; text: string; time: string };
/** Who is handling the chat: the AI, a person on the team, or nobody yet (handed over). */
export type ThreadOwner = "ai" | "team" | "needs";
export type Thread = { id: string; who: string; channel: InboxChannel; time: string; owner: ThreadOwner; unread?: boolean; messages: ThreadMessage[] };

export const sampleThreads: Thread[] = [
  {
    id: "t1",
    who: "P. Sharma",
    channel: "WhatsApp",
    time: "9:42 PM",
    owner: "ai",
    messages: [
      { from: "customer", text: "Hi, are you open tomorrow? I’d like to come in around 6.", time: "9:41 PM" },
      { from: "ai", text: "Hi! 6:00 PM is taken, but 6:30 PM is free. Shall I book it for you?", time: "9:41 PM" },
      { from: "customer", text: "Yes, 6:30 works", time: "9:42 PM" },
      { from: "ai", text: "Booked: tomorrow at 6:30 PM. I’ll send a reminder in the morning.", time: "9:42 PM" },
    ],
  },
  {
    id: "t2",
    who: "+91 98•• ••• 210",
    channel: "WhatsApp",
    time: "8:15 PM",
    owner: "needs",
    unread: true,
    messages: [
      { from: "customer", text: "I visited last week and want to ask about a refund.", time: "8:14 PM" },
      { from: "ai", text: "I’m sorry to hear that. I’ve passed this to the team so a person can help you. Someone will reply here shortly.", time: "8:14 PM" },
      { from: "customer", text: "Okay, thank you.", time: "8:15 PM" },
    ],
  },
  {
    id: "t3",
    who: "+91 99•• ••• 318",
    channel: "Missed call",
    time: "7:15 PM",
    owner: "ai",
    messages: [
      { from: "ai", text: "Sorry we missed your call. You can book here: vegam.example/book. Or reply CALL and we’ll ring you back.", time: "7:14 PM" },
      { from: "customer", text: "Booked for Saturday, thanks", time: "7:15 PM" },
    ],
  },
  {
    id: "t4",
    who: "M. D’Souza",
    channel: "Instagram",
    time: "6:02 PM",
    owner: "ai",
    unread: true,
    messages: [
      { from: "customer", text: "What are your timings on Sunday?", time: "6:01 PM" },
      { from: "ai", text: "We’re closed on Sundays. We’re open Monday to Saturday, 10 AM to 7 PM. Would you like to book a visit?", time: "6:02 PM" },
    ],
  },
  {
    id: "t5",
    who: "K. Iyer",
    channel: "Website",
    time: "4:48 PM",
    owner: "team",
    messages: [
      { from: "customer", text: "Can I bring someone along to my appointment?", time: "4:40 PM" },
      { from: "team", text: "Of course! See you both on Thursday.", time: "4:46 PM" },
      { from: "customer", text: "Thanks, see you then!", time: "4:48 PM" },
    ],
  },
  {
    id: "t6",
    who: "A. Khan",
    channel: "Messenger",
    time: "1:20 PM",
    owner: "ai",
    messages: [
      { from: "customer", text: "Can I move my booking to next week?", time: "1:19 PM" },
      { from: "ai", text: "Of course. Next Tuesday at 11:30 AM is free. Move it?", time: "1:19 PM" },
      { from: "customer", text: "Yes please", time: "1:20 PM" },
      { from: "ai", text: "Moved to next Tuesday, 11:30 AM. You’ll get a reminder the day before.", time: "1:20 PM" },
    ],
  },
];

const ownerLabel: Record<ThreadOwner, string> = { ai: "AI", team: "Team", needs: "Needs you" };

/** The first few threads, shown on Home. */
export const sampleConversations = sampleThreads
  .filter((t) => t.owner !== "needs")
  .slice(0, 4)
  .map((t) => ({ who: t.who, last: t.messages[t.messages.length - 1].text, channel: t.channel, time: t.time, by: ownerLabel[t.owner] }));

// ---------- Calendar ----------

/** `day` is days from today (0 = today). */
export type Booking = { id: string; day: number; start: string; minutes: number; service: number; who: string; status: "confirmed" | "pending" };

/** `service` is an index into the business's own services (or the sample ones). */
export const sampleBookings: Booking[] = [
  { id: "b1", day: 0, start: "10:00", minutes: 30, service: 0, who: "R. Mehta", status: "confirmed" },
  { id: "b2", day: 0, start: "11:30", minutes: 60, service: 1, who: "A. Khan", status: "confirmed" },
  { id: "b3", day: 0, start: "15:00", minutes: 20, service: 2, who: "S. Rao", status: "pending" },
  { id: "b4", day: 0, start: "17:30", minutes: 60, service: 1, who: "J. Thomas", status: "confirmed" },
  { id: "b5", day: 1, start: "10:30", minutes: 60, service: 1, who: "L. Fernandes", status: "confirmed" },
  { id: "b6", day: 1, start: "18:30", minutes: 30, service: 0, who: "P. Sharma", status: "confirmed" },
  { id: "b7", day: 2, start: "12:00", minutes: 20, service: 2, who: "N. Gupta", status: "pending" },
  { id: "b8", day: 3, start: "11:00", minutes: 60, service: 1, who: "V. Reddy", status: "confirmed" },
  { id: "b9", day: 3, start: "16:00", minutes: 30, service: 0, who: "T. Bose", status: "confirmed" },
  { id: "b10", day: 4, start: "14:30", minutes: 60, service: 1, who: "H. Ali", status: "confirmed" },
  { id: "b11", day: 5, start: "10:00", minutes: 30, service: 0, who: "D. Pillai", status: "pending" },
];

export const sampleServiceNames = ["First visit", "Standard appointment", "Follow-up"];

/** Today's bookings, shown on Home. */
export const sampleUpcoming = sampleBookings.filter((b) => b.day === 0).map((b) => ({ time: b.start, name: sampleServiceNames[b.service], who: b.who }));

// ---------- Leads ----------

export type LeadTemp = "hot" | "warm" | "cold";
export type Lead = { id: string; name: string; channel: InboxChannel | "Ad form"; temp: LeadTemp; interest: string; last: string; followUps: number; next: string };

export const sampleLeads: Lead[] = [
  { id: "l1", name: "R. Varma", channel: "Ad form", temp: "hot", interest: "Asked for a group booking for 6 people", last: "2 h ago", followUps: 1, next: "Call today" },
  { id: "l2", name: "+91 97•• ••• 552", channel: "WhatsApp", temp: "hot", interest: "Asked prices twice, wants Saturday", last: "Today", followUps: 0, next: "Call today" },
  { id: "l3", name: "S. Menon", channel: "Website", temp: "warm", interest: "Asked about the standard appointment", last: "Yesterday", followUps: 2, next: "Follow-up tomorrow" },
  { id: "l4", name: "F. Qureshi", channel: "Instagram", temp: "warm", interest: "Saved the price list, no booking yet", last: "2 days ago", followUps: 1, next: "Follow-up Friday" },
  { id: "l5", name: "G. Nair", channel: "Messenger", temp: "warm", interest: "Wants an evening slot next week", last: "3 days ago", followUps: 2, next: "Follow-up Monday" },
  { id: "l6", name: "+91 93•• ••• 107", channel: "Missed call", temp: "cold", interest: "Didn’t reply to the booking link", last: "1 week ago", followUps: 3, next: "Paused · check in 30 days" },
  { id: "l7", name: "B. Joshi", channel: "WhatsApp", temp: "cold", interest: "Said “maybe next month”", last: "2 weeks ago", followUps: 3, next: "Paused · check in 30 days" },
];

// ---------- Reports ----------

/** Pilot week 1 (before Vegam) against the latest week. Lower is better for reply time. */
export const sampleBaseline = [
  { label: "Average first reply", before: "2 h 10 min", after: "6 sec", beforeValue: 130, afterValue: 0.1, unit: "min", better: "lower" as const },
  { label: "Missed calls followed up", before: "20%", after: "100%", beforeValue: 20, afterValue: 100, unit: "%", better: "higher" as const },
  { label: "Bookings per week", before: "18", after: "27", beforeValue: 18, afterValue: 27, unit: "", better: "higher" as const },
  { label: "Enquiries answered after hours", before: "0", after: "31", beforeValue: 0, afterValue: 31, unit: "", better: "higher" as const },
];

export const sampleWeekWon = [
  { value: "9", label: "bookings from chats after closing time" },
  { value: "6", label: "missed calls turned into bookings" },
  { value: "4", label: "customers brought back by follow-ups" },
];

export const sampleMorningReports = [
  { day: "Today", enquiries: 14, bookings: 6, missed: 2, needs: "1 customer asked about a refund" },
  { day: "Yesterday", enquiries: 11, bookings: 4, missed: 1, needs: "Nothing" },
  { day: "2 days ago", enquiries: 17, bookings: 7, missed: 3, needs: "2 questions your assistant didn’t know" },
  { day: "3 days ago", enquiries: 9, bookings: 3, missed: 0, needs: "Nothing" },
];

// ---------- Calls ----------

export type CallOutcome = "Booked" | "Callback" | "Transferred" | "Info";
export type Call = { id: string; time: string; caller: string; duration: string; outcome: CallOutcome; summary: string; transcript: { from: "ai" | "caller"; text: string }[] };

export const sampleCalls: Call[] = [
  {
    id: "c1",
    time: "Today, 11:05 AM",
    caller: "+91 90•• ••• 044",
    duration: "2:41",
    outcome: "Callback",
    summary: "Wants a large group booking for next month. Asked for the owner to call back after 5 PM.",
    transcript: [
      { from: "ai", text: "Thanks for calling. I’m the AI assistant. How can I help?" },
      { from: "caller", text: "I want to book for a group of about 12 next month." },
      { from: "ai", text: "I’ll ask the owner to call you about that. Is after 5 PM a good time?" },
      { from: "caller", text: "Yes, after 5 is fine." },
    ],
  },
  {
    id: "c2",
    time: "Today, 10:12 AM",
    caller: "+91 98•• ••• 761",
    duration: "1:28",
    outcome: "Booked",
    summary: "Booked a standard appointment for Thursday at 4:00 PM. Reminder scheduled.",
    transcript: [
      { from: "ai", text: "Thanks for calling. I’m the AI assistant. How can I help?" },
      { from: "caller", text: "Do you have anything on Thursday afternoon?" },
      { from: "ai", text: "Thursday at 4:00 PM is free. Shall I book it?" },
      { from: "caller", text: "Yes please." },
    ],
  },
  {
    id: "c3",
    time: "Yesterday, 6:40 PM",
    caller: "+91 99•• ••• 318",
    duration: "0:52",
    outcome: "Info",
    summary: "Asked about Sunday hours. Told them we’re closed on Sundays and sent the booking link.",
    transcript: [
      { from: "caller", text: "Are you open this Sunday?" },
      { from: "ai", text: "We’re closed on Sundays. I can send you our booking link for Monday." },
    ],
  },
  {
    id: "c4",
    time: "Yesterday, 2:15 PM",
    caller: "+91 97•• ••• 552",
    duration: "3:05",
    outcome: "Transferred",
    summary: "Had a question about an earlier bill. Transferred to the front desk at their request.",
    transcript: [
      { from: "caller", text: "I have a question about my bill from last week." },
      { from: "ai", text: "Let me put you through to the team now." },
    ],
  },
];

// ---------- Campaigns ----------

export type CampaignType = "Broadcast" | "Win-back" | "Rebooking";
export type Campaign = { id: string; name: string; type: CampaignType; audience: number; sent: number; replies: number; bookings: number; status: "Sent" | "Scheduled" | "Running" | "Draft" };

export const sampleCampaigns: Campaign[] = [
  { id: "m1", name: "Festive opening hours", type: "Broadcast", audience: 412, sent: 412, replies: 37, bookings: 12, status: "Sent" },
  { id: "m2", name: "We miss you", type: "Win-back", audience: 86, sent: 86, replies: 14, bookings: 6, status: "Sent" },
  { id: "m3", name: "Time for your next visit", type: "Rebooking", audience: 58, sent: 23, replies: 9, bookings: 5, status: "Running" },
  { id: "m4", name: "New evening slots", type: "Broadcast", audience: 412, sent: 0, replies: 0, bookings: 0, status: "Scheduled" },
];

// ---------- Settings ----------

export const sampleTeam = [
  { name: "You", role: "Owner", contact: "owner@example.com" },
  { name: "R. Kumar", role: "Manager", contact: "+91 90•• ••• 120" },
  { name: "S. Das", role: "Front desk", contact: "+91 81•• ••• 455" },
];
