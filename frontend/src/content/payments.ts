// Sample payment links (Pro). Days are counted back from today so the demo
// never goes stale. Labelled "Sample data" wherever shown.
// TODO(backend): load from Stripe Payment Links and webhooks.

export type PaymentPurpose = "Deposit" | "Full payment" | "Balance" | "Invoice";
export type PaymentStatus = "unpaid" | "paid" | "refunded" | "cancelled";

export type PaymentLink = {
  id: string;
  who: string;
  phone: string;
  purpose: PaymentPurpose;
  item: string;
  amount: number;
  /** Days ago the link was sent (0 = today). */
  sent: number;
  /** Days after sending that payment is due. */
  dueIn: number;
  status: PaymentStatus;
  /** Days ago it was paid, for paid and refunded links. */
  paid?: number;
  method?: "UPI" | "Card" | "Cash";
  viewed?: boolean;
  location: string;
};

/** Reminders go out on these days after the link is sent, until it's paid. */
export const reminderDays = [3, 7, 14];

export const samplePayments: PaymentLink[] = [
  { id: "p01", who: "R. Mehta", phone: "+91 98•• ••• 112", purpose: "Deposit", item: "First visit", amount: 200, sent: 0, dueIn: 3, status: "unpaid", viewed: true, location: "l1" },
  { id: "p02", who: "A. Khan", phone: "+91 90•• ••• 447", purpose: "Full payment", item: "Standard appointment", amount: 1200, sent: 0, dueIn: 3, status: "paid", paid: 0, method: "UPI", viewed: true, location: "l2" },
  { id: "p03", who: "L. Fernandes", phone: "+91 96•• ••• 058", purpose: "Deposit", item: "Extended session", amount: 500, sent: 4, dueIn: 3, status: "unpaid", viewed: true, location: "l1" },
  { id: "p04", who: "T. George", phone: "+91 99•• ••• 980", purpose: "Balance", item: "Package of 5", amount: 3000, sent: 9, dueIn: 7, status: "unpaid", viewed: false, location: "l3" },
  { id: "p05", who: "M. Iyer", phone: "+91 98•• ••• 334", purpose: "Invoice", item: "Group booking (6 people)", amount: 7200, sent: 16, dueIn: 14, status: "unpaid", viewed: true, location: "l1" },
  { id: "p06", who: "K. Shah", phone: "+91 90•• ••• 871", purpose: "Full payment", item: "First visit", amount: 500, sent: 2, dueIn: 3, status: "paid", paid: 1, method: "Card", viewed: true, location: "l2" },
  { id: "p07", who: "N. Paul", phone: "+91 88•• ••• 612", purpose: "Deposit", item: "Standard appointment", amount: 300, sent: 5, dueIn: 3, status: "paid", paid: 4, method: "UPI", viewed: true, location: "l1" },
  { id: "p08", who: "V. Reddy", phone: "+91 99•• ••• 318", purpose: "Full payment", item: "Extended session", amount: 2000, sent: 8, dueIn: 3, status: "paid", paid: 5, method: "UPI", viewed: true, location: "l3" },
  { id: "p09", who: "H. Ali", phone: "+91 93•• ••• 640", purpose: "Deposit", item: "Consultation", amount: 200, sent: 12, dueIn: 3, status: "refunded", paid: 11, method: "Card", viewed: true, location: "l2" },
  { id: "p10", who: "P. Sharma", phone: "+91 98•• ••• 761", purpose: "Full payment", item: "Follow-up", amount: 300, sent: 6, dueIn: 3, status: "cancelled", viewed: false, location: "l1" },
  { id: "p11", who: "J. Thomas", phone: "+91 70•• ••• 529", purpose: "Full payment", item: "Package of 5", amount: 5000, sent: 11, dueIn: 7, status: "paid", paid: 3, method: "UPI", viewed: true, location: "l1" },
  { id: "p12", who: "D. Pillai", phone: "+91 95•• ••• 377", purpose: "Deposit", item: "Standard appointment", amount: 300, sent: 1, dueIn: 3, status: "unpaid", viewed: false, location: "l3" },
];

/** Unpaid and past its due date. */
export const isOverdue = (p: PaymentLink) => p.status === "unpaid" && p.sent > p.dueIn;

/** Reminders already sent for an unpaid link. */
export const remindersSent = (p: PaymentLink) => (p.status === "unpaid" ? reminderDays.filter((d) => d <= p.sent).length : reminderDays.filter((d) => p.paid !== undefined && d <= p.sent - p.paid).length);

export const daysAgo = (d: number) => (d === 0 ? "Today" : d === 1 ? "Yesterday" : `${d} days ago`);

/** A short, made-up link code, stable for an id. */
export const linkUrl = (id: string) => `pay.vegam.app/${id.replace(/\D/g, "")}k${id.length * 7}x`;
