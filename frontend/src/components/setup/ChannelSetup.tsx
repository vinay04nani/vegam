"use client";

import { useState, type ReactNode } from "react";
import { channelList, sampleForwardingNumber, type Channel, type ChannelId } from "@/content/onboarding";
import { plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { isIncluded, type ChannelStatus, type OnboardingState } from "@/lib/onboarding";
import { SecondaryButton, StatusPill } from "./fields";

type Props = {
  state: OnboardingState;
  update: (fn: (s: OnboardingState) => OnboardingState) => void;
  /** Show only these channels (the WhatsApp setup page shows just WhatsApp). */
  only?: ChannelId[];
};

// TODO(backend): each "connect" button starts the real flow (Meta Embedded
// Signup, Facebook Login, carrier forwarding test call). The demo only
// changes the status so the rest of the wizard can be tried.

const forwardCode = `**004*${sampleForwardingNumber.replace(/\s/g, "")}#`;

function StatusFor({ status }: { status: ChannelStatus }) {
  if (status === "connected") return <StatusPill tone="done">Connected</StatusPill>;
  if (status === "pending") return <StatusPill tone="wait">Waiting for Meta</StatusPill>;
  return <StatusPill tone="off">Not connected</StatusPill>;
}

function Copyable({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <span className="flex items-center gap-2 rounded-[12px] bg-panel py-1.5 pr-1.5 pl-3.5">
      <code className="flex-1 overflow-x-auto font-mono text-[14px] whitespace-nowrap text-ink">{text}</code>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(text).catch(() => undefined);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        }}
        className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-[9px] bg-white px-3 text-[13.5px] font-semibold text-ink shadow-[0_1px_2px_rgb(30_31_43/0.08)]"
      >
        <Icon name="copy" size={15} />
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}

function ChannelCard({ channel, status, locked, children }: { channel: Channel; status: ChannelStatus; locked: PlanId | null; children: ReactNode }) {
  return (
    <section className={`flex flex-col gap-4 rounded-[22px] border bg-white p-5 ${locked ? "border-dashed border-line-strong" : "border-line"}`}>
      <div className="flex items-start gap-4">
        <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-[14px] ${locked ? "bg-panel text-muted" : "bg-periwinkle-soft text-indigo"}`}>
          <Icon name={channel.icon} size={22} />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h2 className="m-0 text-[17px] font-semibold text-ink">{channel.title}</h2>
            {locked ? (
              <StatusPill tone="lock">
                <Icon name="lock" size={12} />
                {plans.find((p) => p.id === locked)?.name} plan
              </StatusPill>
            ) : (
              <StatusFor status={status} />
            )}
            
          </div>
          <p className="m-0 text-[15px] text-subtle">{channel.body}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

/** Connection cards for each channel. With plan limits on, channels above the plan show how to switch. */
export function ChannelSetup({ state, update, only }: Props) {
  const [busy, setBusy] = useState<ChannelId | null>(null);
  const setStatus = (id: ChannelId, status: ChannelStatus) => update((s) => ({ ...s, channels: { ...s.channels, [id]: status } }));
  const connect = (id: ChannelId, status: ChannelStatus = "connected") => {
    setBusy(id);
    window.setTimeout(() => {
      setStatus(id, status);
      setBusy(null);
    }, 900);
  };

  const body = (c: Channel, status: ChannelStatus) => {
    switch (c.id) {
      case "whatsapp":
        return status === "off" ? (
          <div className="flex flex-col gap-4 sm:pl-15">
            <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
              <legend className="mb-2 p-0 text-[14.5px] font-semibold text-ink">Which number should customers message?</legend>
              {(
                [
                  ["current", "My current business number", "Many numbers can keep using the WhatsApp Business app alongside Vegam. We check during setup."],
                  ["new", "A new number", "We’ll help you get one. Good if your current number is personal."],
                ] as const
              ).map(([id, title, hint]) => (
                <label key={id} className="flex cursor-pointer items-start gap-3 rounded-[14px] border border-line px-3.5 py-3 has-[:checked]:border-ink">
                  <input
                    type="radio"
                    name="wa-number"
                    checked={state.whatsappNumber === id}
                    onChange={() => update((s) => ({ ...s, whatsappNumber: id }))}
                    className="mt-1 accent-[#23243A]"
                  />
                  <span className="flex flex-col">
                    <span className="text-[15px] font-medium text-ink">{title}</span>
                    <span className="text-[13.5px] text-subtle">{hint}</span>
                  </span>
                </label>
              ))}
            </fieldset>
            <SecondaryButton onClick={() => connect("whatsapp", "pending")} disabled={busy === "whatsapp"} className="w-fit">
              {busy === "whatsapp" ? "Connecting…" : "Connect with Meta"}
            </SecondaryButton>
          </div>
        ) : (
          <p className="m-0 rounded-[14px] bg-[#FFF8F0] px-4 py-3 text-[14.5px] text-ink-soft sm:ml-15">
            Meta is reviewing your display name. This usually takes a few hours, sometimes up to 2 days. You can finish setting up and test your assistant meanwhile; we’ll message you when it’s approved.
          </p>
        );
      case "missed":
      case "voice":
        return status === "off" ? (
          <div className="flex flex-col gap-3 sm:pl-15">
            <p className="m-0 text-[14.5px] text-ink-soft">
              {c.id === "missed"
                ? "On the phone your business number is on, dial this code and press call. Calls you don’t answer will then come to Vegam."
                : "Uses the same forwarding as missed calls. The AI answers after 4 rings, says it’s an AI assistant, and can transfer to you."}
            </p>
            {c.id === "missed" && <Copyable text={forwardCode} />}
            <SecondaryButton onClick={() => connect(c.id)} disabled={busy === c.id} className="w-fit">
              {busy === c.id ? "Calling you…" : c.id === "missed" ? "I’ve dialled it, make a test call" : "Turn on AI call answering"}
            </SecondaryButton>
            {c.id === "missed" && <p className="m-0 text-[13px] text-subtle">Sample code for the demo. Your own forwarding number appears here after sign-up.</p>}
          </div>
        ) : null;
      case "website":
        return status === "off" ? (
          <div className="flex flex-col gap-3 sm:pl-15">
            <p className="m-0 text-[14.5px] text-ink-soft">Paste this before the closing &lt;/body&gt; tag, or send it to whoever manages your website. (Sample code; yours appears after sign-up.)</p>
            <Copyable text={`<script src="https://vegam.example/chat.js" data-business="your-id" async></script>`} />
            <SecondaryButton onClick={() => connect("website")} disabled={busy === "website"} className="w-fit">
              {busy === "website" ? "Checking…" : "I’ve added it"}
            </SecondaryButton>
          </div>
        ) : null;
      default:
        return status === "off" ? (
          <SecondaryButton onClick={() => connect(c.id)} disabled={busy === c.id} className="w-fit sm:ml-15">
            {busy === c.id ? "Connecting…" : c.id === "social" ? "Connect with Facebook" : "Connect ad accounts"}
          </SecondaryButton>
        ) : null;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {channelList.filter((c) => !only || only.includes(c.id)).map((c) => {
        const locked = isIncluded(c.minPlan, state.plan) ? null : c.minPlan;
        return (
          <ChannelCard key={c.id} channel={c} status={state.channels[c.id]} locked={locked}>
            {locked ? (
              <button
                type="button"
                onClick={() => update((s) => ({ ...s, plan: c.minPlan }))}
                className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-[15px] font-semibold text-indigo hover:underline sm:ml-15"
              >
                Switch to {plans.find((p) => p.id === c.minPlan)?.name}
                <Icon name="chevron-right" size={16} />
              </button>
            ) : (
              body(c, state.channels[c.id])
            )}
          </ChannelCard>
        );
      })}
    </div>
  );
}
