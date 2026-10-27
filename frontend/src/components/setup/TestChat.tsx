"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { assistantIntro, businessName, replyTo, type DemoMessage } from "@/lib/demoAssistant";
import type { OnboardingState } from "@/lib/onboarding";

/** Questions to try, built from the owner's own services and answers. */
export function testSuggestions(state: OnboardingState) {
  const first = state.assistant.services.find((s) => s.name.trim())?.name;
  const faq = state.assistant.faqs.find((f) => f.q.trim())?.q;
  return ["What are your timings?", first ? `How much is ${first.toLowerCase()}?` : "What are your prices?", "Can I book tomorrow?", faq, "Can I talk to a person?"].filter(
    (x): x is string => !!x,
  );
}

// The "Try it yourself" setup task: a chat with the demo assistant, answering from what the
// owner entered. Nothing is sent to anyone.

const lines = (text: string) =>
  text.split("\n").map((l, i) => (
    <span key={i} className="block">
      {l}
    </span>
  ));

function Message({ m }: { m: DemoMessage }) {
  const mine = m.from === "customer";
  return (
    <div className={`flex max-w-[82%] flex-col gap-1 ${mine ? "self-end items-end" : "self-start"}`}>
      <span className="px-1 text-[12px] font-medium text-subtle">{mine ? "Customer (you)" : "Assistant"}</span>
      <div className={`rounded-[18px] px-4 py-2.5 text-[15px] leading-snug ${mine ? "rounded-tr-[6px] bg-ink text-white" : "rounded-tl-[6px] bg-panel text-ink"}`}>{lines(m.text)}</div>
      {m.handover && (
        <span className="inline-flex items-center gap-1 px-1 text-[12.5px] font-medium text-warning">
          <Icon name="users" size={13} />
          Handed to your team
        </span>
      )}
    </div>
  );
}

export function TestChat({ state, suggestions, onSend }: { state: OnboardingState; suggestions: string[]; onSend?: () => void }) {
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight });
  }, [messages, typing]);

  const sendText = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    onSend?.();
    const history: DemoMessage[] = [...messages, { from: "customer", text }];
    setMessages(history);
    setDraft("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, replyTo(text, history, state)]);
      setTyping(false);
    }, 700);
  };

  const send = (e: FormEvent) => {
    e.preventDefault();
    sendText(draft);
  };

  const name = businessName(state);

  return (
    <section aria-label="Test chat" className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-white">
      <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo text-[15px] font-bold text-white">{(name[0] ?? "Y").toUpperCase()}</span>
        <span className="flex min-w-0 flex-1 flex-col leading-tight">
          <span className="truncate text-[15.5px] font-semibold text-ink">{name}</span>
          <span className="text-[13px] text-subtle">{typing ? "typing…" : "Test chat · not sent to anyone"}</span>
        </span>
        {messages.length > 0 && (
          <button type="button" onClick={() => setMessages([])} className="cursor-pointer text-[14px] font-medium text-subtle hover:text-ink">
            Clear
          </button>
        )}
      </div>

      <div ref={list} aria-live="polite" className="flex h-[360px] flex-col gap-3 overflow-y-auto px-5 py-4">
        <Message m={{ from: "assistant", text: assistantIntro(state) }} />
        {messages.map((m, i) => (
          <Message key={i} m={m} />
        ))}
        {typing && <span className="self-start rounded-[18px] rounded-tl-[6px] bg-panel px-4 py-2.5 text-[15px] text-subtle">…</span>}
      </div>

      <div className="flex flex-col gap-3 border-t border-line px-5 py-4">
        <div className="flex flex-wrap gap-2" aria-label="Try asking">
          {suggestions.map((q) => (
            <button
              key={q}
              type="button"
              disabled={typing}
              onClick={() => sendText(q)}
              className="min-h-9 cursor-pointer rounded-full border border-line-strong bg-white px-3.5 text-[13.5px] font-medium text-ink transition hover:border-subtle disabled:cursor-wait"
            >
              {q}
            </button>
          ))}
        </div>
        <form onSubmit={send} className="flex items-center gap-2">
          <label className="flex-1">
            <span className="sr-only">Message your assistant as a customer</span>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type as a customer…"
              className="min-h-12 w-full rounded-full border border-line-strong bg-white px-5 text-[15px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
            />
          </label>
          <button type="submit" aria-label="Send" className="flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full bg-ink text-white">
            <Icon name="send" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
