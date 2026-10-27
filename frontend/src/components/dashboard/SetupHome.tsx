"use client";

import type { ReactNode } from "react";
import { plans } from "@/content/pricing";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PrimaryButton, StatusPill } from "@/components/setup/fields";
import { readyToGoLive, whatsappStarted, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { Card, Ring } from "./ui";

// Home before the assistant is live: a short guide to the few things it needs,
// then one "Go live" button. Everything else waits until after go-live.

type Props = {
  state: OnboardingState;
  onOpen: (view: string) => void;
  onGoLive: () => void;
};

type Task = { id: string; icon: IconName; title: string; body: string; minutes?: number; done: boolean; status?: ReactNode; view?: string; action?: string };

export function SetupHome({ state, onOpen, onGoLive }: Props) {
  const plan = plans.find((p) => p.id === state.plan);
  const wa = state.channels.whatsapp;

  const tasks: Task[] = [
    { id: "account", icon: "check", title: "Create your account", body: "Done. Welcome to Vegam.", done: true },
    {
      id: "plan",
      icon: "sparkle",
      title: plan ? `${plan.name} plan, 30 days free` : "Choose a plan",
      body: plan ? "Your pilot starts when you go live. You can change plan any time." : "Starts your free 30-day pilot. No card needed.",
      minutes: 1,
      done: !!plan,
      view: "plan",
      action: plan ? "Change" : "Choose",
    },
    {
      id: "assistant",
      icon: "pencil",
      title: "Teach your assistant",
      body: "Your services, prices and hours, from your website or a price list.",
      minutes: 3,
      done: state.setupDone.includes("assistant"),
      view: "setup-assistant",
    },
    {
      id: "whatsapp",
      icon: "message",
      title: "Connect WhatsApp",
      body: "The number your customers message.",
      minutes: 2,
      done: whatsappStarted(state),
      status: wa === "pending" ? <StatusPill tone="wait">Waiting for Meta</StatusPill> : undefined,
      view: "setup-whatsapp",
    },
    {
      id: "test",
      icon: "send",
      title: "Try it yourself",
      body: "Chat with your assistant as if you were a customer.",
      minutes: 1,
      done: state.setupDone.includes("test"),
      view: "setup-test",
    },
  ];

  const done = tasks.filter((t) => t.done).length;
  const ready = readyToGoLive(state);
  const next = tasks.find((t) => !t.done);
  const left = tasks.filter((t) => !t.done).reduce((m, t) => m + (t.minutes ?? 0), 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="m-0 font-serif text-[clamp(30px,3vw,42px)] leading-tight font-normal tracking-[-0.02em] text-ink">Welcome, {state.business.name || "there"}</h1>
        <p className="m-0 text-[17px] text-subtle">
          {ready ? "Everything is ready. Go live when you are." : `Your assistant isn’t live yet. About ${left} minutes to go.`}
        </p>
      </div>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Card title="Get your assistant live" extra={<Ring done={done} total={tasks.length} />}>
          <ol className="m-0 flex list-none flex-col p-0">
            {tasks.map((t, i) => {
              const isNext = t === next;
              return (
                <li key={t.id} className={`flex items-center gap-4 border-t border-line py-4 first:border-t-0 ${isNext ? "-mx-3 rounded-[16px] border-transparent bg-panel px-3" : ""}`}>
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${t.done ? "bg-success text-white" : isNext ? "bg-ink text-white" : "bg-periwinkle-soft text-indigo"}`}
                  >
                    {t.done ? <Icon name="check" size={18} strokeWidth={2.6} className="[&_circle]:hidden" /> : <span className="text-[15px] font-bold">{i + 1}</span>}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span className="text-[16px] font-semibold text-ink">{t.title}</span>
                      {t.status}
                      {!t.done && t.minutes && <span className="text-[13px] text-subtle">~{t.minutes} min</span>}
                    </span>
                    <span className="text-[14.5px] text-subtle">{t.body}</span>
                  </span>
                  {t.view && (
                    <button
                      type="button"
                      onClick={() => onOpen(t.view!)}
                      className={`min-h-10 flex-none cursor-pointer rounded-full px-4 text-[14.5px] font-semibold transition ${
                        isNext ? "bg-ink text-white" : "border border-line-strong bg-white text-ink hover:border-subtle"
                      }`}
                    >
                      {t.action ?? (t.done ? "Edit" : "Start")}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
          <div className="flex flex-col items-start gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 text-[14.5px] text-subtle">{ready ? "Your 30-day pilot starts today." : "Go live unlocks when the steps above are done."}</p>
            <PrimaryButton onClick={onGoLive} disabled={!ready}>
              Go live
              <Icon name="chevron-right" size={18} />
            </PrimaryButton>
          </div>
        </Card>

        <div className="flex flex-col gap-5">
          <Card title="Explore while you set up">
            <div className="flex flex-col gap-2">
              {[
                { icon: "home" as const, label: "Preview your Home", body: "See it with sample data", view: "preview" },
                { icon: "globe" as const, label: "All channels", body: "Missed calls, website, Instagram and more", view: "channels" },
                { icon: "chart" as const, label: "Plans and prices", body: plan ? `You’re on ${plan.name}` : "Pick one when you’re ready", view: "plan" },
              ].map((x) => (
                <button
                  key={x.label}
                  type="button"
                  onClick={() => onOpen(x.view)}
                  className="flex cursor-pointer items-center gap-3 rounded-[14px] p-2.5 text-left transition hover:bg-panel"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[12px] bg-periwinkle-soft text-indigo">
                    <Icon name={x.icon} size={20} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[15px] font-semibold text-ink">{x.label}</span>
                    <span className="text-[13.5px] text-subtle">{x.body}</span>
                  </span>
                  <Icon name="chevron-right" size={18} className="text-subtle" />
                </button>
              ))}
            </div>
          </Card>
          <section className="relative isolate flex flex-col gap-2 overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#1B1C2E_0%,#22233A_55%,#2E2220_100%)] p-5 text-white">
            <div aria-hidden="true" className="absolute -right-12 -bottom-16 -z-10 h-44 w-44 rounded-full bg-orange/40 blur-3xl" />
            <h2 className="m-0 font-serif text-[22px] leading-tight font-normal">Rather we set it up?</h2>
            <p className="m-0 text-[14.5px] text-white/75">Send us your website or price list and we’ll have your assistant ready within a day.</p>
            <a href={withBase("/contact/?topic=setup")} className="mt-2 inline-flex min-h-10 w-fit items-center gap-1.5 rounded-full bg-white px-4 text-[14.5px] font-semibold text-ink">
              Set it up for me
              <Icon name="chevron-right" size={16} />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
