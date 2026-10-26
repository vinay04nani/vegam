"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bubble, Chip, Phone } from "@/components/phone/Phone";
import { Icon } from "@/components/ui/Icon";
import { assistantIntro, businessName, hoursLine, replyTo, type DemoMessage } from "@/lib/demoAssistant";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";

// What customers will see, updated as the owner types. On the "Test it" step
// it becomes a working chat with the demo assistant.

function Avatar({ name }: { name: string }) {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo text-[15px] font-bold text-white">
      {(name.trim()[0] ?? "Y").toUpperCase()}
    </span>
  );
}

const lines = (text: string) =>
  text.split("\n").map((l, i) => (
    <span key={i} className="block">
      {l}
    </span>
  ));

function Preview({ state }: { state: OnboardingState }) {
  const first = state.assistant.services.find((s) => s.name.trim());
  return (
    <>
      <Chip>Today</Chip>
      <Bubble from="me" time="9:41 PM">
        Hi, what are your timings?
      </Bubble>
      <Bubble from="them" time="9:41 PM">
        {assistantIntro(state).replace(/ How (can|may) I help( you)?\?/, "")} {hoursLine(state)}
      </Bubble>
      {first && (
        <>
          <Bubble from="me" time="9:42 PM">
            How much is {first.name.toLowerCase()}?
          </Bubble>
          <Bubble from="them" time="9:42 PM">
            {first.name} is {formatMoney(first.price, currencyFor(state))} and takes {first.minutes} minutes. Shall I book one for you?
          </Bubble>
        </>
      )}
      {!first && (
        <span className="mt-2 self-center rounded-lg bg-white/90 px-3 py-2 text-center text-[12px] text-subtle">
          Add your services in step 3 and they’ll show up here.
        </span>
      )}
    </>
  );
}

export function LivePreview({ state, interactive = false, suggestions = [] }: { state: OnboardingState; interactive?: boolean; suggestions?: string[] }) {
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight });
  }, [messages, typing]);

  const sendText = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
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
  const footer = interactive ? (
    <form onSubmit={send} className="flex items-center gap-2 bg-[#F6F3EE] px-2.5 py-2.5">
      <label className="flex-1">
        <span className="sr-only">Message your assistant as a customer</span>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type as a customer…"
          className="h-10 w-full rounded-full bg-white px-4 text-[14px] text-ink outline-none placeholder:text-faint focus:ring-2 focus:ring-indigo/30"
        />
      </label>
      <button type="submit" aria-label="Send" className="flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-full bg-success text-white">
        <Icon name="send" size={18} />
      </button>
    </form>
  ) : undefined;

  const phone = (
    <Phone time="9:41" title={name} status={interactive && typing ? "typing…" : "AI assistant · replies instantly"} avatar={<Avatar name={name} />} footer={footer} bodyRef={body}>
      {interactive ? (
        <>
          <Chip>Test chat · not sent to anyone</Chip>
          <Bubble from="them" time="now">
            {assistantIntro(state)}
          </Bubble>
          {messages.map((m, i) =>
            m.from === "customer" ? (
              <Bubble key={i} from="me" time="now">
                {m.text}
              </Bubble>
            ) : (
              <div key={i} className="flex flex-col gap-1 self-start">
                <Bubble from="them" time="now">
                  {lines(m.text)}
                </Bubble>
                {m.handover && (
                  <span className="ml-1 inline-flex items-center gap-1 text-[11.5px] font-medium text-warning">
                    <Icon name="users" size={12} />
                    Handed to your team
                  </span>
                )}
              </div>
            ),
          )}
          {typing && <span className="self-start rounded-[14px] rounded-tl-[4px] bg-white px-3 py-2 text-[13px] text-subtle">…</span>}
        </>
      ) : (
        <Preview state={state} />
      )}
    </Phone>
  );

  if (!suggestions.length) return phone;
  return (
    <div className="flex flex-col items-center gap-5">
      {phone}
      <div className="flex max-w-[340px] flex-wrap justify-center gap-2" aria-label="Try asking">
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
    </div>
  );
}
