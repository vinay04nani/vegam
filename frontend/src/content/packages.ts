// Sample packages, memberships and gift vouchers. Days count from today.
// Labelled "Sample data" wherever shown.
// TODO(backend): store these per customer and update them when visits are completed.

export type CustomerPackage = {
  id: string;
  who: string;
  phone: string;
  kind: "package" | "membership";
  name: string;
  price: number;
  /** Visits included; for memberships, visits per month (0 = unlimited). */
  total: number;
  used: number;
  /** Days until it expires (packages) or renews (memberships). */
  days: number;
  autoRenew?: boolean;
  location: string;
};

export const samplePackages: CustomerPackage[] = [
  { id: "pk1", who: "T. George", phone: "+91 99•• ••• 980", kind: "package", name: "Package of 5", price: 5000, total: 5, used: 2, days: 64, location: "l3" },
  { id: "pk2", who: "J. Thomas", phone: "+91 70•• ••• 529", kind: "package", name: "Package of 5", price: 5000, total: 5, used: 4, days: 21, location: "l1" },
  { id: "pk3", who: "M. Iyer", phone: "+91 98•• ••• 334", kind: "membership", name: "Monthly membership", price: 3500, total: 4, used: 1, days: 12, autoRenew: true, location: "l1" },
  { id: "pk4", who: "A. Khan", phone: "+91 90•• ••• 447", kind: "package", name: "Package of 10", price: 9000, total: 10, used: 10, days: 5, location: "l2" },
  { id: "pk5", who: "R. Mehta", phone: "+91 98•• ••• 112", kind: "membership", name: "Unlimited monthly", price: 6000, total: 0, used: 7, days: 3, autoRenew: true, location: "l1" },
  { id: "pk6", who: "N. Paul", phone: "+91 88•• ••• 612", kind: "package", name: "Package of 5", price: 5000, total: 5, used: 3, days: -4, location: "l1" },
];

export const packageOffers = [
  { name: "Package of 5", kind: "package" as const, total: 5, price: 5000, valid: 90 },
  { name: "Package of 10", kind: "package" as const, total: 10, price: 9000, valid: 180 },
  { name: "Monthly membership", kind: "membership" as const, total: 4, price: 3500, valid: 30 },
  { name: "Unlimited monthly", kind: "membership" as const, total: 0, price: 6000, valid: 30 },
];

export type GiftVoucher = { id: string; code: string; amount: number; balance: number; buyer: string; recipient: string; sold: number; expires: number; location: string };

export const sampleVouchers: GiftVoucher[] = [
  { id: "gv1", code: "NILA-7K2Q", amount: 2000, balance: 2000, buyer: "S. Menon", recipient: "Priya (sister)", sold: 3, expires: 362, location: "l1" },
  { id: "gv2", code: "NILA-3M8T", amount: 1500, balance: 300, buyer: "K. Shah", recipient: "K. Shah", sold: 40, expires: 325, location: "l2" },
  { id: "gv3", code: "NILA-9P4R", amount: 5000, balance: 0, buyer: "Corporate · Acme Ltd", recipient: "Team outing", sold: 75, expires: 290, location: "l1" },
  { id: "gv4", code: "NILA-2D6W", amount: 1000, balance: 1000, buyer: "D. Pillai", recipient: "Mother", sold: 380, expires: -15, location: "l3" },
];

/** Where a package stands. */
export function packageStatus(p: CustomerPackage) {
  if (p.days < 0) return "Expired";
  if (p.kind === "package" && p.used >= p.total) return "Used up";
  if (p.kind === "package" && (p.total - p.used <= 1 || p.days <= 14)) return "Ending soon";
  if (p.kind === "membership" && p.days <= 7) return p.autoRenew ? "Renews soon" : "Ending soon";
  return "Active";
}

export function voucherStatus(v: GiftVoucher) {
  if (v.expires < 0) return "Expired";
  if (v.balance <= 0) return "Used";
  if (v.balance < v.amount) return "Part used";
  return "Not used yet";
}
