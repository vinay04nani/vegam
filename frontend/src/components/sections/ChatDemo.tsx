"use client";

import { useEffect, useRef, useState } from "react";
import { chatTabs } from "@/content/site";

const STEP_MS = 1100;

/** Tabbed sample conversations that play out message by message. */
export function ChatDemo() {
  const [tabId, setTabId] = useState(chatTabs[0].id);
  const [shown, setShown] = useState(1);
  const [started, setStarted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tab = chatTabs.find((t) => t.id === tabId) ?? chatTabs[0];

  // Start playing once the demo scrolls into view.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || shown >= tab.chat.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(tab.chat.length);
      return;
    }
    const timer = window.setTimeout(() => setShown((n) => n + 1), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [started, shown, tab.chat.length]);

  const selectTab = (id: string) => {
    setTabId(id);
    setShown(1);
  };

  const next = tab.chat[shown];
  const typing = started && next !== undefined;

  return (
    <div ref={rootRef} className="overflow-hidden rounded-[14px] border border-line bg-white">
      <div role="tablist" aria-label="Sample conversations" className="flex flex-wrap border-b border-line bg-[#F8F8FB]">
        {chatTabs.map((t) => {
          const active = t.id === tab.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`chat-tab-${t.id}`}
              aria-selected={active}
              aria-controls="chat-panel"
              onClick={() => selectTab(t.id)}
              className={`flex min-h-13 cursor-pointer items-center gap-2 border-t-2 border-r border-r-line px-5.5 text-base transition-colors ${
                active ? "border-t-indigo bg-white font-semibold text-ink" : "border-t-transparent font-medium text-muted hover:text-ink"
              }`}
            >
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: t.color }} />
              {t.label}
            </button>
          );
        })}
      </div>
      <div
        id="chat-panel"
        role="tabpanel"
        aria-labelledby={`chat-tab-${tab.id}`}
        aria-live="polite"
        className="flex min-h-[340px] flex-col gap-2.5 p-5.5 text-base leading-snug"
      >
        {tab.chat.slice(0, shown).map((m, i) => (
          <Bubble key={`${tab.id}-${i}`} ai={m.ai} text={m.text} />
        ))}
        {typing && <Typing ai={next.ai} />}
      </div>
    </div>
  );
}

function Bubble({ ai, text }: { ai: boolean; text: string }) {
  return ai ? (
    <div className="bubble-in flex max-w-[85%] flex-col gap-0.5 self-start">
      <span className="text-xs font-semibold text-indigo">Vegam AI</span>
      <div className="rounded-[14px_14px_14px_4px] bg-periwinkle-soft px-3.5 py-2.5 text-ink">{text}</div>
    </div>
  ) : (
    <div className="bubble-in flex max-w-[85%] flex-col items-end gap-0.5 self-end">
      <span className="text-xs font-semibold text-subtle">Customer</span>
      <div className="rounded-[14px_14px_4px_14px] bg-[#F4F4F7] px-3.5 py-2.5 text-ink">{text}</div>
    </div>
  );
}

function Typing({ ai }: { ai: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`bubble-in flex gap-1 rounded-full px-3.5 py-3 ${ai ? "self-start bg-periwinkle-soft" : "self-end bg-[#F4F4F7]"}`}
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className="typing-dot h-1.5 w-1.5 rounded-full bg-subtle" style={{ animationDelay: `${i * 150}ms` }} />
      ))}
    </div>
  );
}
