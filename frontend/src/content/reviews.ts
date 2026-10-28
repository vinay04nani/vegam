// Sample Google reviews, review requests and private feedback (Growth).
// Days are counted back from today. Labelled "Sample data" wherever shown.
// TODO(backend): load from the Google Business Profile API and Vegam's own requests.

export type Review = {
  id: string;
  who: string;
  stars: number;
  days: number;
  text: string;
  location: string;
  /** Left after a Vegam review request. */
  requested?: boolean;
  reply?: { text: string; days: number };
};

export const sampleReviews: Review[] = [
  { id: "rv1", who: "Ananya R.", stars: 5, days: 0, text: "Booked on WhatsApp at 11 at night and got a slot for the next morning. Staff were lovely and on time.", location: "l1", requested: true },
  { id: "rv2", who: "Karthik S.", stars: 2, days: 1, text: "Had to wait 25 minutes past my appointment time. The service itself was fine.", location: "l2" },
  { id: "rv3", who: "Fatima K.", stars: 5, days: 2, text: "Very easy to reschedule, I just tapped a button on the reminder. Will come back.", location: "l1", requested: true },
  { id: "rv4", who: "Rohit M.", stars: 4, days: 3, text: "Good experience overall. Parking was a little hard to find.", location: "l3", requested: true },
  {
    id: "rv5",
    who: "Divya P.",
    stars: 5,
    days: 5,
    text: "Quick replies, clear prices, no surprises. Exactly what I wanted.",
    location: "l2",
    requested: true,
    reply: { text: "Thank you, Divya! We’re so glad the prices were clear. See you next time.", days: 4 },
  },
  { id: "rv6", who: "Sanjay V.", stars: 3, days: 6, text: "Okay visit. The person on the phone was helpful but the place was crowded on Saturday.", location: "l1" },
  {
    id: "rv7",
    who: "Meera N.",
    stars: 5,
    days: 8,
    text: "Third visit this year. Reminders are really useful, I never forget now.",
    location: "l1",
    requested: true,
    reply: { text: "Thank you, Meera! Lovely to see you again, and glad the reminders help.", days: 8 },
  },
  {
    id: "rv8",
    who: "Arjun T.",
    stars: 1,
    days: 10,
    text: "Called twice, nobody answered.",
    location: "l3",
    reply: { text: "We’re sorry, Arjun. That shouldn’t happen: calls are now answered by our assistant when we’re busy. We’d love to make it right; please message us on WhatsApp.", days: 9 },
  },
  { id: "rv9", who: "Priya D.", stars: 5, days: 12, text: "Friendly, professional and on time.", location: "l2", requested: true, reply: { text: "Thank you, Priya! We appreciate you taking the time.", days: 11 } },
];

/** Totals on Google (all time), for the headline numbers. */
export const googleTotals = {
  rating: 4.7,
  count: 186,
  distribution: [
    { stars: 5, count: 141 },
    { stars: 4, count: 27 },
    { stars: 3, count: 9 },
    { stars: 2, count: 4 },
    { stars: 1, count: 5 },
  ],
};

/** AI reply drafts. Kind and short; low ratings apologise and offer to talk, never argue. */
export function draftsFor(r: Review, business: string): string[] {
  const first = r.who.split(" ")[0];
  if (r.stars >= 4)
    return [
      `Thank you, ${first}! We’re really glad you had a good visit. See you again soon.`,
      `Thanks so much for the kind words, ${first}. It means a lot to the team at ${business}.`,
      `${first}, thank you for taking the time to write this. We look forward to your next visit!`,
    ];
  if (r.stars === 3)
    return [
      `Thank you for the honest feedback, ${first}. We’re working on Saturday crowding, and we’d love to see you on a quieter day. Message us and we’ll find a good slot.`,
      `Thanks, ${first}. Sorry it was busy. Weekday mornings are much calmer; reply on WhatsApp and we’ll hold one for you.`,
    ];
  return [
    `We’re sorry, ${first}. That’s not the experience we want for anyone. Could you message us on WhatsApp so we can make it right?`,
    `${first}, thank you for telling us, and we apologise. The owner would like to call you; please share a good time on WhatsApp.`,
  ];
}

export type RequestOutcome = "google" | "private" | "rated" | "waiting" | "none";

export const sampleRequests: { id: string; who: string; visit: string; days: number; rating?: number; outcome: RequestOutcome; location: string }[] = [
  { id: "rq1", who: "Ananya R.", visit: "Standard appointment", days: 0, rating: 5, outcome: "google", location: "l1" },
  { id: "rq2", who: "L. Fernandes", visit: "Extended session", days: 0, outcome: "waiting", location: "l1" },
  { id: "rq3", who: "N. Gupta", visit: "Follow-up", days: 1, rating: 2, outcome: "private", location: "l3" },
  { id: "rq4", who: "Fatima K.", visit: "First visit", days: 1, rating: 5, outcome: "google", location: "l1" },
  { id: "rq5", who: "S. Rao", visit: "Consultation", days: 2, rating: 4, outcome: "rated", location: "l2" },
  { id: "rq6", who: "Rohit M.", visit: "Standard appointment", days: 3, rating: 4, outcome: "google", location: "l3" },
  { id: "rq7", who: "H. Ali", visit: "First visit", days: 3, outcome: "none", location: "l2" },
  { id: "rq8", who: "J. Thomas", visit: "Package of 5", days: 4, rating: 3, outcome: "private", location: "l1" },
  { id: "rq9", who: "Divya P.", visit: "Standard appointment", days: 5, rating: 5, outcome: "google", location: "l2" },
];

export type FeedbackStatus = "new" | "called" | "resolved";

export const sampleFeedback: { id: string; who: string; phone: string; stars: number; text: string; days: number; status: FeedbackStatus; location: string }[] = [
  { id: "fb1", who: "N. Gupta", phone: "+91 87•• ••• 104", stars: 2, text: "The follow-up felt rushed. I had questions and didn’t get time to ask them.", days: 1, status: "new", location: "l3" },
  { id: "fb2", who: "J. Thomas", phone: "+91 70•• ••• 529", stars: 3, text: "Fine, but my package balance wasn’t clear on the bill.", days: 4, status: "called", location: "l1" },
  { id: "fb3", who: "B. Nair", phone: "+91 98•• ••• 903", stars: 1, text: "Appointment moved without asking me first.", days: 9, status: "resolved", location: "l2" },
];
