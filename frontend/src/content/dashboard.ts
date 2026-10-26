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

export const sampleUpcoming = [
  { time: "10:00", name: "First visit", who: "R. Mehta" },
  { time: "11:30", name: "Standard appointment", who: "A. Khan" },
  { time: "15:00", name: "Follow-up", who: "S. Rao" },
  { time: "17:30", name: "Standard appointment", who: "J. Thomas" },
];

export const sampleConversations = [
  { who: "P. Sharma", last: "Booked: tomorrow at 6:30 PM", channel: "WhatsApp", time: "9:42 PM", by: "AI" },
  { who: "+91 99•• ••• 318", last: "Missed call → sent booking link", channel: "Missed call", time: "7:15 PM", by: "AI" },
  { who: "M. D’Souza", last: "What are your timings on Sunday?", channel: "Instagram", time: "6:02 PM", by: "AI" },
  { who: "K. Iyer", last: "Thanks, see you then!", channel: "Website", time: "4:48 PM", by: "Team" },
];

export const viewInfo: Record<string, { title: string; body: string }> = {
  inbox: { title: "Inbox", body: "Every WhatsApp, Instagram, Messenger and website chat in one list. Take over any chat with one tap; the AI pauses for that conversation." },
  calendar: { title: "Calendar", body: "All bookings by day and week, with staff and services. Block time, move bookings, and see reminders that went out." },
  leads: { title: "Leads", body: "Everyone who enquired, sorted Hot, Warm and Cold, with the follow-ups Vegam has sent and who to call first." },
  calls: { title: "Calls", body: "Every call the AI answered, with a short summary, the outcome and the recording when the caller agreed." },
  campaigns: { title: "Campaigns", body: "Broadcasts, win-back and rebooking messages to customers who opted in, with results." },
  reports: { title: "Reports", body: "Your pilot baseline against today, the weekly “what Vegam won you” report, and every morning report." },
  assistant: { title: "Assistant", body: "Services, prices, hours and answers your assistant uses, the questions it couldn’t answer, and its name and tone." },
  settings: { title: "Settings", body: "Business details, channels, team and roles, plan and billing, data export and deletion." },
};
