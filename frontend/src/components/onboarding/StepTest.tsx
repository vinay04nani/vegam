"use client";

import { useState } from "react";
import { countries } from "@/content/onboarding";
import { Icon } from "@/components/ui/Icon";
import type { OnboardingState } from "@/lib/onboarding";
import { Field, SecondaryButton, StepHeader, TextInput } from "./fields";
import { TestChat } from "./TestChat";

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export const testValid = (s: OnboardingState) => s.ownerPhone.replace(/\D/g, "").length >= 6;

export function StepTest({ state, update }: Props) {
  const [sending, setSending] = useState(false);
  const dial = countries.find((c) => c.id === state.business.country)?.dial ?? "+";
  const first = state.assistant.services.find((s) => s.name.trim())?.name;
  const faq = state.assistant.faqs.find((f) => f.q.trim())?.q;
  const suggestions = ["What are your timings?", first ? `How much is ${first.toLowerCase()}?` : "What are your prices?", "Can I book tomorrow?", faq, "Can I talk to a person?"].filter(
    (x): x is string => !!x,
  );

  return (
    <div className="flex flex-col gap-9">
      <StepHeader
        step={5}
        title="Test your assistant"
        body="Chat as if you were a customer. Ask something it doesn’t know too: it should hand over to your team rather than guess."
      />
      <TestChat state={state} suggestions={suggestions} />

      <section className="flex flex-col gap-4 rounded-[22px] border border-line bg-white p-5">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-periwinkle-soft text-indigo">
            <Icon name="sun" size={22} />
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="m-0 text-[17px] font-semibold text-ink">Your morning report</h2>
            <p className="m-0 text-[15px] text-subtle">
              Every day at 8 AM: yesterday’s enquiries, bookings and calls, and anything that needs you. You can also message this number to ask “Bookings today?” or “Block Friday”.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <Field label="Your WhatsApp number">
              <span className="flex gap-2">
                <span className="flex min-h-13 items-center rounded-[14px] border border-line-strong bg-panel px-4 text-base text-ink">{dial}</span>
                <TextInput
                  type="tel"
                  autoComplete="tel-national"
                  value={state.ownerPhone}
                  onChange={(e) => update((s) => ({ ...s, ownerPhone: e.target.value, testSent: false }))}
                  placeholder="98765 43210"
                />
              </span>
            </Field>
          </div>
          <SecondaryButton
            disabled={!testValid(state) || sending}
            onClick={() => {
              setSending(true);
              window.setTimeout(() => {
                setSending(false);
                update((s) => ({ ...s, testSent: true }));
              }, 900);
            }}
            className="min-h-13"
          >
            <Icon name="send" size={16} />
            {sending ? "Sending…" : "Send me a test"}
          </SecondaryButton>
        </div>
        {state.testSent && (
          <p role="status" className="m-0 text-[14px] text-success">
            Test message queued. (Demo: nothing is actually sent until the product is connected.)
          </p>
        )}
      </section>
    </div>
  );
}
