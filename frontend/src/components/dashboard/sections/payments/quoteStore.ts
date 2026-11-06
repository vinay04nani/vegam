import { useSyncExternalStore } from "react";
import { sampleQuotes, type Quote } from "@/content/quotes";

// Quotes shared across the dashboard, so one sent from the inbox or a contact
// shows up under Payments → Quotes. Demo: kept in memory for this visit.

let quotes: Quote[] = sampleQuotes;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const quoteStore = {
  add(q: Quote) {
    quotes = [q, ...quotes];
    emit();
  },
  update(id: string, patch: Partial<Quote>) {
    quotes = quotes.map((q) => (q.id === id ? { ...q, ...patch } : q));
    emit();
  },
};

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const useQuotes = () =>
  useSyncExternalStore(
    subscribe,
    () => quotes,
    () => sampleQuotes,
  );
