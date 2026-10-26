import type { OnboardingState } from "./onboarding";
import { currencyFor, formatMoney } from "./onboarding";

// A tiny rule-based stand-in for the real AI, so the wizard's test chat can
// answer from what the owner just entered. It only uses the owner's own
// information and hands over when it doesn't know, like the real assistant.
// TODO(backend): replace with the real assistant API.

export type DemoMessage = { from: "customer" | "assistant"; text: string; handover?: boolean };

const has = (text: string, re: RegExp) => re.test(text.toLowerCase());

export function businessName(state: OnboardingState) {
  return state.business.name.trim() || "Your business";
}

export function assistantIntro(state: OnboardingState) {
  const who = state.assistant.name.trim() ? `${state.assistant.name.trim()}, ${businessName(state)}’s AI assistant` : `${businessName(state)}’s AI assistant`;
  return state.assistant.tone === "formal" ? `Good evening. I’m ${who}. How may I help you?` : `Hi! I’m ${who}. How can I help?`;
}

export function hoursLine(state: OnboardingState) {
  const { days, open, close } = state.assistant;
  return `We’re open ${days.trim() || "every day"}, ${open} to ${close}.`;
}

function priceList(state: OnboardingState) {
  const cur = currencyFor(state);
  const items = state.assistant.services.filter((s) => s.name.trim());
  if (!items.length) return null;
  return items.map((s) => `${s.name}: ${formatMoney(s.price, cur)} (${s.minutes} min)`).join("\n");
}

export function replyTo(text: string, history: DemoMessage[], state: OnboardingState): DemoMessage {
  const cur = currencyFor(state);
  const lastAssistant = [...history].reverse().find((m) => m.from === "assistant")?.text ?? "";
  const offeredSlots = lastAssistant.includes("Which works for you?");

  if (offeredSlots && has(text, /\b(11|4|4:30|first|second|morning|afternoon|yes|ok|sure)\b/)) {
    const slot = has(text, /\b(4|4:30|second|afternoon)\b/) ? "4:30 PM" : "11:00 AM";
    return { from: "assistant", text: `Booked: tomorrow at ${slot}. I’ll send a reminder the day before. Reply here any time to change it.` };
  }
  if (has(text, /human|person|staff|someone|manager|call me|talk to/)) {
    return { from: "assistant", text: "Sure, I’ve passed this to the team. Someone will reply here shortly.", handover: true };
  }
  const service = state.assistant.services.find((s) => s.name.trim() && text.toLowerCase().includes(s.name.toLowerCase()));
  if (service) {
    return { from: "assistant", text: `${service.name} is ${formatMoney(service.price, cur)} and takes ${service.minutes} minutes. Shall I book one for you?` };
  }
  if (has(text, /price|cost|how much|rate|fee|charge|menu|list/)) {
    const list = priceList(state);
    return list
      ? { from: "assistant", text: `Here are our prices:\n${list}\nWould you like to book?` }
      : { from: "assistant", text: "Let me check our prices with the team. They’ll reply here shortly.", handover: true };
  }
  if (has(text, /book|appointment|slot|tomorrow|available|free|visit|come in/)) {
    return { from: "assistant", text: "Tomorrow at 11:00 AM or 4:30 PM is free. Which works for you?" };
  }
  if (has(text, /time|open|hour|close|timing|when/)) {
    return { from: "assistant", text: hoursLine(state) };
  }
  const words = text.toLowerCase().match(/[a-z]{4,}/g) ?? [];
  const faq = state.assistant.faqs.find((f) => f.q.trim() && words.some((w) => f.q.toLowerCase().includes(w)));
  if (faq) return { from: "assistant", text: faq.a };
  if (has(text, /^(hi|hello|hey|namaste|hola)\b/)) return { from: "assistant", text: assistantIntro(state) };
  return {
    from: "assistant",
    text: "I’m not sure about that, so I’ve asked the team. They’ll reply here shortly.",
    handover: true,
  };
}
