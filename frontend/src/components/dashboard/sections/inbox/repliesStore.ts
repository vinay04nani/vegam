import { useSyncExternalStore } from "react";
import { sampleQuickReplies, type SavedReply } from "@/content/dashboard";

// Saved replies shared by the inbox ("/" picker) and Settings → Saved replies.
// Demo: kept in memory for this visit.

let replies: SavedReply[] = sampleQuickReplies;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const replyStore = {
  save(r: SavedReply) {
    replies = replies.some((x) => x.id === r.id) ? replies.map((x) => (x.id === r.id ? r : x)) : [...replies, r];
    emit();
  },
  remove(id: string) {
    replies = replies.filter((x) => x.id !== id);
    emit();
  },
  used(id: string) {
    replies = replies.map((x) => (x.id === id ? { ...x, uses: x.uses + 1 } : x));
    emit();
  },
};

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const useSavedReplies = () =>
  useSyncExternalStore(
    subscribe,
    () => replies,
    () => sampleQuickReplies,
  );
