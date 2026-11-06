// Sample quotes (estimates) sent to customers on WhatsApp. Days count back
// from today. Labelled "Sample data" wherever shown.
// TODO(backend): store quotes and their PDFs per business.

export type QuoteItem = { name: string; qty: number; price: number };
export type QuoteStatus = "draft" | "sent" | "viewed" | "accepted" | "declined" | "expired";
export type Quote = { id: string; who: string; phone: string; items: QuoteItem[]; note: string; validDays: number; sent: number; status: QuoteStatus; location: string };

export const sampleQuotes: Quote[] = [
  {
    id: "q101",
    who: "M. Iyer",
    phone: "+91 98•• ••• 334",
    items: [
      { name: "Group booking (per person)", qty: 6, price: 1100 },
      { name: "Private room", qty: 1, price: 1500 },
    ],
    note: "Includes a 30-minute consultation for the group.",
    validDays: 14,
    sent: 2,
    status: "viewed",
    location: "l1",
  },
  { id: "q102", who: "R. Varma", phone: "+91 98•• ••• 552", items: [{ name: "Package of 5", qty: 1, price: 5000 }], note: "", validDays: 7, sent: 1, status: "sent", location: "l2" },
  { id: "q103", who: "T. George", phone: "+91 99•• ••• 980", items: [{ name: "Extended session", qty: 3, price: 2000 }], note: "Three sessions, booked a week apart.", validDays: 14, sent: 9, status: "accepted", location: "l3" },
  { id: "q104", who: "H. Ali", phone: "+91 93•• ••• 640", items: [{ name: "Standard appointment", qty: 4, price: 1200 }], note: "", validDays: 7, sent: 12, status: "expired", location: "l2" },
  {
    id: "q105",
    who: "D. Kulkarni",
    phone: "+91 95•• ••• 044",
    items: [
      { name: "First visit", qty: 1, price: 500 },
      { name: "Follow-up", qty: 2, price: 300 },
    ],
    note: "Weekend times available.",
    validDays: 7,
    sent: 0,
    status: "draft",
    location: "l1",
  },
];

export const quoteTotal = (q: { items: QuoteItem[] }) => q.items.reduce((a, i) => a + i.qty * i.price, 0);
