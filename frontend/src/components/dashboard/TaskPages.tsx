"use client";

import { useState, type ReactNode } from "react";
import { plans, type Billing, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { AssistantSetup, assistantValid } from "@/components/setup/AssistantSetup";
import { ChannelSetup } from "@/components/setup/ChannelSetup";
import { PrimaryButton } from "@/components/setup/fields";
import { PlanChooser } from "@/components/setup/PlanChooser";
import { TestChat, testSuggestions } from "@/components/setup/TestChat";
import { whatsappStarted, type OnboardingState, type SetupTask } from "@/lib/onboarding";
import { PageTitle } from "./ui";

// One page per setup task. Each has a single job and a button that returns to Home.

type Update = (fn: (s: OnboardingState) => OnboardingState) => void;
type PageProps = { state: OnboardingState; update: Update; onHome: () => void };

const markDone = (task: SetupTask) => (s: OnboardingState) => ({ ...s, setupDone: s.setupDone.includes(task) ? s.setupDone : [...s.setupDone, task] });

function Footer({ hint, children }: { hint?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col-reverse items-start gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-end">
      {hint && <span className="text-[14px] text-subtle">{hint}</span>}
      {children}
    </div>
  );
}

function backLabel(state: OnboardingState) {
  return state.liveAt ? "Home" : "Setup";
}

export function PlanPage({ state, update, onHome }: PageProps) {
  const [plan, setPlan] = useState<PlanId | null>(state.plan);
  const [billing, setBilling] = useState<Billing>(state.billing);
  const chosen = plans.find((p) => p.id === plan);
  const changed = plan !== state.plan || billing !== state.billing;

  return (
    <div className="flex max-w-[860px] flex-col gap-8">
      <PageTitle
        title={state.plan ? "Your plan" : "Choose a plan"}
        body={state.liveAt ? "Change plan any time; it applies from your next billing period." : "Every plan starts with a free 30-day pilot when you go live. No card needed."}
        onBack={onHome}
        backLabel={backLabel(state)}
      />
      <PlanChooser state={state} value={plan} billing={billing} onChange={setPlan} onBilling={setBilling} detailed />
      <Footer hint={!plan ? "Pick a plan to continue." : undefined}>
        <PrimaryButton
          disabled={!plan || (!!state.plan && !changed)}
          onClick={() => {
            update((s) => ({ ...s, plan, billing }));
            onHome();
          }}
        >
          {state.plan ? "Save plan" : `Choose ${chosen?.name ?? "plan"}`}
        </PrimaryButton>
      </Footer>
    </div>
  );
}

export function AssistantPage({ state, update, onHome }: PageProps) {
  const ok = assistantValid(state);
  return (
    <div className="flex max-w-[760px] flex-col gap-8">
      <PageTitle
        title="Teach your assistant"
        body="It only answers from what you give it. When it doesn’t know something, it asks your team instead of guessing."
        onBack={onHome}
        backLabel={backLabel(state)}
      />
      <AssistantSetup state={state} update={update} />
      <Footer hint={ok ? undefined : "Add at least one service and your opening hours."}>
        <PrimaryButton
          disabled={!ok}
          onClick={() => {
            update(markDone("assistant"));
            onHome();
          }}
        >
          Save
        </PrimaryButton>
      </Footer>
    </div>
  );
}

export function WhatsAppPage({ state, update, onHome }: PageProps) {
  const started = whatsappStarted(state);
  return (
    <div className="flex max-w-[760px] flex-col gap-8">
      <PageTitle title="Connect WhatsApp" body="Customers message this number and your assistant replies. It takes about two minutes." onBack={onHome} backLabel={backLabel(state)} />
      <ChannelSetup state={state} update={update} only={["whatsapp"]} />
      <Footer hint={started ? undefined : "Connect with Meta to continue."}>
        <PrimaryButton disabled={!started} onClick={onHome}>
          Done
        </PrimaryButton>
      </Footer>
    </div>
  );
}

export function TestPage({ state, update, onHome }: PageProps) {
  const [tried, setTried] = useState(false);
  return (
    <div className="flex max-w-[760px] flex-col gap-8">
      <PageTitle
        title="Try it yourself"
        body="Chat as if you were a customer. Ask something it doesn’t know too: it should hand over to your team rather than guess."
        onBack={onHome}
        backLabel={backLabel(state)}
      />
      <TestChat state={state} suggestions={testSuggestions(state)} onSend={() => setTried(true)} />
      <Footer hint={tried || state.setupDone.includes("test") ? undefined : "Send at least one message first."}>
        <PrimaryButton
          disabled={!tried && !state.setupDone.includes("test")}
          onClick={() => {
            update(markDone("test"));
            onHome();
          }}
        >
          Looks good
        </PrimaryButton>
      </Footer>
    </div>
  );
}

export function ChannelsPage({ state, update, onHome }: PageProps) {
  return (
    <div className="flex max-w-[760px] flex-col gap-8">
      <PageTitle
        title="Channels"
        body="Every place customers reach you, answered from one inbox. Connect them now or any time later."
        onBack={onHome}
        backLabel={backLabel(state)}
      />
      <ChannelSetup state={state} update={update} />
      <Footer>
        <PrimaryButton onClick={onHome}>
          <Icon name="chevron-left" size={18} />
          Back to {backLabel(state)}
        </PrimaryButton>
      </Footer>
    </div>
  );
}
