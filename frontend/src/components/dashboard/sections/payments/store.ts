import { useSyncExternalStore } from "react";
import { samplePayments, type PaymentLink } from "@/content/payments";

// Payment links shared across the dashboard, so a link sent from the inbox,
// the calendar or a contact shows up on the Payments page.
// Demo: kept in memory for this visit only.

let links: PaymentLink[] = samplePayments;
const listeners = new Set<() => void>();

export const paymentStore = {
  add(link: PaymentLink) {
    links = [link, ...links];
    listeners.forEach((l) => l());
  },
  update(id: string, patch: Partial<PaymentLink>) {
    links = links.map((l) => (l.id === id ? { ...l, ...patch } : l));
    listeners.forEach((l) => l());
  },
};

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const usePaymentLinks = () => useSyncExternalStore(subscribe, () => links, () => samplePayments);
