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
export type ThreadMessage = {
  from: "customer" | "ai" | "team";
  text: string;
  time: string;
  /** Text by default. A note is only seen by the team; voice notes carry their transcript as `text`. */
  kind?: "image" | "voice" | "note";
  duration?: string;
  /** For images attached in the demo: a local preview URL. */
  src?: string;
};
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
      { from: "customer", text: "I visited last week and want to ask about a refund. The appointment was cut short.", time: "8:14 PM", kind: "voice", duration: "0:14" },
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
      { from: "customer", text: "Is this the place in the photo?", time: "6:00 PM", kind: "image" },
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
      { from: "team", text: "Second person is a first visit; book them 30 min.", time: "4:45 PM", kind: "note" },
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

/** Saved replies the team inserts by typing "/" in the inbox. */
export const sampleQuickReplies = [
  { id: "hours", title: "Opening hours", text: "We’re open Monday to Saturday, 10 AM to 7 PM." },
  { id: "book", title: "Booking link", text: "You can pick a time that suits you here: vegam.example/book" },
  { id: "location", title: "Directions", text: "We’re next to the main entrance, with free parking. Here’s the map: vegam.example/map" },
  { id: "refund", title: "Refund received", text: "Thanks for letting us know. I’ve passed this to the manager and we’ll reply within one working day." },
  { id: "thanks", title: "Thank you", text: "Thank you! See you soon." },
];

const ownerLabel: Record<ThreadOwner, string> = { ai: "AI", team: "Team", needs: "Needs you" };

/** The first few threads, shown on Home. */
export const sampleConversations = sampleThreads
  .filter((t) => t.owner !== "needs")
  .slice(0, 4)
  .map((t) => ({ who: t.who, last: t.messages[t.messages.length - 1].text, channel: t.channel, time: t.time, by: ownerLabel[t.owner] }));

// ---------- Calendar ----------

/** `day` is days from today (0 = today); `service` indexes the business's services (or the sample ones). */
export type Booking = {
  id: string;
  day: number;
  start: string;
  minutes: number;
  service: number;
  who: string;
  phone: string;
  channel: InboxChannel | "Phone" | "Booking link";
  status: "confirmed" | "pending";
  note?: string;
};

const bk = (id: string, day: number, start: string, minutes: number, service: number, who: string, phone: string, channel: Booking["channel"], status: Booking["status"] = "confirmed", note?: string): Booking => ({
  id,
  day,
  start,
  minutes,
  service,
  who,
  phone,
  channel,
  status,
  note,
});

export const sampleBookings: Booking[] = [
  bk("b1", -3, "11:00", 60, 1, "M. Iyer", "+91 98•• ••• 334", "WhatsApp"),
  bk("b2", -2, "10:30", 30, 0, "K. Shah", "+91 90•• ••• 871", "Booking link"),
  bk("b3", -2, "16:00", 60, 1, "R. Das", "+91 97•• ••• 205", "Phone"),
  bk("b4", -1, "12:00", 20, 2, "N. Paul", "+91 88•• ••• 612", "Instagram"),
  bk("b5", -1, "17:00", 60, 1, "T. George", "+91 99•• ••• 980", "WhatsApp"),
  bk("b6", 0, "10:00", 30, 0, "R. Mehta", "+91 98•• ••• 112", "WhatsApp", "confirmed", "First time; asked about parking."),
  bk("b7", 0, "11:30", 60, 1, "A. Khan", "+91 90•• ••• 447", "Messenger"),
  bk("b8", 0, "12:00", 30, 0, "L. Fernandes", "+91 96•• ••• 058", "Website", "pending"),
  bk("b9", 0, "15:00", 20, 2, "S. Rao", "+91 81•• ••• 763", "Phone", "pending"),
  bk("b10", 0, "17:30", 60, 1, "J. Thomas", "+91 70•• ••• 529", "Booking link"),
  bk("b11", 1, "10:30", 60, 1, "V. Reddy", "+91 99•• ••• 318", "Missed call"),
  bk("b12", 1, "14:00", 30, 0, "H. Ali", "+91 93•• ••• 640", "WhatsApp"),
  bk("b13", 1, "18:30", 30, 0, "P. Sharma", "+91 98•• ••• 761", "WhatsApp", "confirmed", "Booked after closing time by the AI."),
  bk("b14", 2, "11:00", 20, 2, "N. Gupta", "+91 87•• ••• 104", "Instagram", "pending"),
  bk("b15", 2, "13:30", 60, 1, "D. Pillai", "+91 95•• ••• 377", "Phone"),
  bk("b16", 2, "16:30", 30, 0, "F. Qureshi", "+91 91•• ••• 826", "Website"),
  bk("b17", 3, "10:00", 60, 1, "T. Bose", "+91 98•• ••• 450", "WhatsApp"),
  bk("b18", 3, "15:00", 30, 0, "G. Nair", "+91 94•• ••• 238", "Messenger", "pending"),
  bk("b19", 4, "12:30", 60, 1, "S. Menon", "+91 97•• ••• 615", "Website"),
  bk("b20", 4, "17:00", 20, 2, "B. Joshi", "+91 90•• ••• 902", "WhatsApp"),
  bk("b21", 5, "10:30", 30, 0, "C. Mathew", "+91 89•• ••• 147", "Booking link"),
  bk("b22", 5, "11:00", 60, 1, "E. Roy", "+91 98•• ••• 863", "Phone"),
  bk("b23", 7, "11:30", 60, 1, "I. Kapoor", "+91 99•• ••• 521", "WhatsApp"),
  bk("b24", 8, "16:00", 30, 0, "O. Singh", "+91 92•• ••• 274", "Instagram", "pending"),
  bk("b25", 10, "12:00", 60, 1, "U. Varghese", "+91 96•• ••• 690", "Website"),
];

export const sampleServiceNames = ["First visit", "Standard appointment", "Follow-up"];

/** One colour per service, in order: [accent bar, tint background, text]. */
export const serviceColors: [string, string, string][] = [
  ["#4A47E0", "#EEF0FF", "#1E1C6E"],
  ["#EE7A2E", "#FFF1E6", "#7A3300"],
  ["#2E8B57", "#E8F5EC", "#1C4F33"],
  ["#8B6CFF", "#F2EEFF", "#43308C"],
];

/** Today's bookings, shown on Home. */
export const sampleUpcoming = sampleBookings.filter((b) => b.day === 0).map((b) => ({ time: b.start, name: sampleServiceNames[b.service], who: b.who }));

// ---------- Leads ----------

export type LeadTemp = "hot" | "warm" | "cold";
export type LeadStage = "new" | "contacted" | "qualified" | "booked" | "lost";
export type LeadSource = InboxChannel | "Ad form";
export type LeadActivity = { at: string; kind: "enquiry" | "ai" | "followup" | "call" | "booking" | "note"; text: string };
export type Lead = {
  id: string;
  name: string;
  phone: string;
  source: LeadSource;
  score: number;
  stage: LeadStage;
  owner: string;
  interest: string;
  summary: string;
  createdAt: string;
  /** Minutes ago, for sorting by newest. */
  createdMins: number;
  lastActivity: string;
  lastMins: number;
  followUps: number;
  next: string;
  activity: LeadActivity[];
};

/** Hot from 70, warm from 40, otherwise cold. */
export const leadTemp = (score: number): LeadTemp => (score >= 70 ? "hot" : score >= 40 ? "warm" : "cold");

export const leadStages: { id: LeadStage; label: string }[] = [
  { id: "new", label: "New" },
  { id: "contacted", label: "Contacted" },
  { id: "qualified", label: "Qualified" },
  { id: "booked", label: "Booked" },
  { id: "lost", label: "Lost" },
];

const enquiry = (at: string, text: string): LeadActivity => ({ at, kind: "enquiry", text });
const ai = (at: string, text: string): LeadActivity => ({ at, kind: "ai", text });
const fu = (at: string, text: string): LeadActivity => ({ at, kind: "followup", text });

export const sampleLeads: Lead[] = [
  {
    id: "l1", name: "R. Varma", phone: "+91 98•• ••• 552", source: "Ad form", score: 92, stage: "qualified", owner: "R. Kumar",
    interest: "Group booking for 6 people next month", summary: "Ready to book a group visit; wants a price for 6 and a weekend date.",
    createdAt: "Today, 9:12 AM", createdMins: 180, lastActivity: "2 h ago", lastMins: 120, followUps: 1, next: "Call today",
    activity: [enquiry("Today, 9:12 AM", "Filled the ad form: “Group of 6, next month”"), ai("Today, 9:13 AM", "Sent prices and asked for preferred dates"), { at: "Today, 10:40 AM", kind: "call", text: "Asked for a callback after 5 PM" }],
  },
  {
    id: "l2", name: "+91 97•• ••• 108", phone: "+91 97•• ••• 108", source: "WhatsApp", score: 84, stage: "contacted", owner: "AI",
    interest: "Asked prices twice, wants Saturday", summary: "Comparing prices; asked twice about Saturday availability.",
    createdAt: "Yesterday, 7:40 PM", createdMins: 960, lastActivity: "Today", lastMins: 240, followUps: 0, next: "Call today",
    activity: [enquiry("Yesterday, 7:40 PM", "“How much is the standard appointment?”"), ai("Yesterday, 7:40 PM", "Shared the price list and Saturday slots"), enquiry("Today, 8:05 AM", "“Is Saturday 11 AM still free?”")],
  },
  {
    id: "l3", name: "A. Bhat", phone: "+91 93•• ••• 761", source: "Instagram", score: 76, stage: "new", owner: "AI",
    interest: "Wants the earliest slot this week", summary: "New enquiry from Instagram; flexible on time, wants this week.",
    createdAt: "Today, 11:20 AM", createdMins: 60, lastActivity: "1 h ago", lastMins: 60, followUps: 0, next: "Offer slots",
    activity: [enquiry("Today, 11:20 AM", "“Do you have anything this week?”"), ai("Today, 11:20 AM", "Offered Thursday 10 AM and Friday 4 PM")],
  },
  {
    id: "l4", name: "S. Menon", phone: "+91 97•• ••• 615", source: "Website", score: 63, stage: "contacted", owner: "S. Das",
    interest: "Asked about the standard appointment", summary: "Interested but unsure about timing; asked for evening slots.",
    createdAt: "2 days ago", createdMins: 2900, lastActivity: "Yesterday", lastMins: 1400, followUps: 2, next: "Follow-up tomorrow",
    activity: [enquiry("2 days ago", "Website form: standard appointment"), ai("2 days ago", "Replied with prices and evening slots"), fu("Yesterday", "Follow-up 1: “Shall I hold Thursday 6 PM?”"), fu("Yesterday", "Follow-up 2 scheduled")],
  },
  {
    id: "l5", name: "F. Qureshi", phone: "+91 91•• ••• 826", source: "Instagram", score: 58, stage: "contacted", owner: "AI",
    interest: "Saved the price list, no booking yet", summary: "Looked at prices; no reply to the first follow-up.",
    createdAt: "3 days ago", createdMins: 4300, lastActivity: "2 days ago", lastMins: 2900, followUps: 1, next: "Follow-up Friday",
    activity: [enquiry("3 days ago", "“Can you send your prices?”"), ai("3 days ago", "Sent the price list"), fu("2 days ago", "Follow-up 1 sent")],
  },
  {
    id: "l6", name: "G. Nair", phone: "+91 94•• ••• 238", source: "Messenger", score: 55, stage: "qualified", owner: "R. Kumar",
    interest: "Wants an evening slot next week", summary: "Qualified: evenings only, next week, two people.",
    createdAt: "3 days ago", createdMins: 4400, lastActivity: "3 days ago", lastMins: 4300, followUps: 2, next: "Follow-up Monday",
    activity: [enquiry("3 days ago", "“Any evening slots next week for two?”"), ai("3 days ago", "Shared Tuesday and Wednesday evenings"), fu("2 days ago", "Follow-up 1 sent"), fu("Yesterday", "Follow-up 2 sent")],
  },
  {
    id: "l7", name: "P. Sharma", phone: "+91 98•• ••• 761", source: "WhatsApp", score: 88, stage: "booked", owner: "AI",
    interest: "Booked tomorrow 6:30 PM", summary: "Booked by the AI after closing time.",
    createdAt: "Yesterday, 9:41 PM", createdMins: 900, lastActivity: "Yesterday", lastMins: 899, followUps: 0, next: "Visit tomorrow",
    activity: [enquiry("Yesterday, 9:41 PM", "“Are you open tomorrow around 6?”"), ai("Yesterday, 9:41 PM", "Offered 6:30 PM"), { at: "Yesterday, 9:42 PM", kind: "booking", text: "Booked tomorrow at 6:30 PM" }],
  },
  {
    id: "l8", name: "V. Reddy", phone: "+91 99•• ••• 318", source: "Missed call", score: 71, stage: "booked", owner: "AI",
    interest: "Booked from the missed-call message", summary: "Missed call recovered on WhatsApp; booked for tomorrow.",
    createdAt: "Yesterday, 7:14 PM", createdMins: 1050, lastActivity: "Yesterday", lastMins: 1040, followUps: 0, next: "Visit tomorrow",
    activity: [{ at: "Yesterday, 7:14 PM", kind: "call", text: "Missed call" }, ai("Yesterday, 7:14 PM", "Sent the booking link on WhatsApp"), { at: "Yesterday, 7:20 PM", kind: "booking", text: "Booked tomorrow 10:30 AM" }],
  },
  {
    id: "l9", name: "K. Pinto", phone: "+91 88•• ••• 430", source: "Website", score: 44, stage: "new", owner: "AI",
    interest: "Asked if gift vouchers are available", summary: "Question the assistant couldn’t answer; passed to the team.",
    createdAt: "Today, 8:30 AM", createdMins: 270, lastActivity: "Today", lastMins: 270, followUps: 0, next: "Answer question",
    activity: [enquiry("Today, 8:30 AM", "“Do you sell gift vouchers?”"), ai("Today, 8:30 AM", "Passed to the team")],
  },
  {
    id: "l10", name: "+91 93•• ••• 107", phone: "+91 93•• ••• 107", source: "Missed call", score: 28, stage: "contacted", owner: "AI",
    interest: "Didn’t reply to the booking link", summary: "No reply after 3 follow-ups; paused.",
    createdAt: "1 week ago", createdMins: 10100, lastActivity: "1 week ago", lastMins: 9800, followUps: 3, next: "Paused · check in 30 days",
    activity: [{ at: "1 week ago", kind: "call", text: "Missed call" }, ai("1 week ago", "Sent the booking link"), fu("6 days ago", "Follow-up 1"), fu("4 days ago", "Follow-up 2"), fu("2 days ago", "Follow-up 3, then paused")],
  },
  {
    id: "l11", name: "B. Joshi", phone: "+91 90•• ••• 902", source: "WhatsApp", score: 22, stage: "lost", owner: "S. Das",
    interest: "Said “maybe next month”", summary: "Not ready now; asked to be contacted next month.",
    createdAt: "2 weeks ago", createdMins: 20000, lastActivity: "2 weeks ago", lastMins: 19000, followUps: 3, next: "Check in next month",
    activity: [enquiry("2 weeks ago", "“What are your prices?”"), ai("2 weeks ago", "Sent prices"), enquiry("2 weeks ago", "“Maybe next month”")],
  },
  {
    id: "l12", name: "D. Kulkarni", phone: "+91 95•• ••• 044", source: "Ad form", score: 47, stage: "new", owner: "AI",
    interest: "Wants to know about weekend hours", summary: "Ad lead asking about weekends; awaiting reply to slots.",
    createdAt: "Today, 7:55 AM", createdMins: 305, lastActivity: "Today", lastMins: 300, followUps: 0, next: "Follow-up tomorrow",
    activity: [enquiry("Today, 7:55 AM", "Ad form: “Open on weekends?”"), ai("Today, 7:56 AM", "Shared Saturday hours and slots")],
  },
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
