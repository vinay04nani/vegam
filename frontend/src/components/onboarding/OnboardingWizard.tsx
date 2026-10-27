"use client";

import { useEffect, useRef } from "react";
import { wizardSteps } from "@/content/onboarding";
import { links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { planFromUrl, recommendPlan, useOnboarding, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { PrimaryButton } from "./fields";
import { StepAssistant, assistantValid } from "./StepAssistant";
import { StepBusiness, businessValid } from "./StepBusiness";
import { StepChannels, channelsValid } from "./StepChannels";
import { StepGoLive } from "./StepGoLive";
import { StepPlan, planValid } from "./StepPlan";
import { StepRail } from "./StepRail";
import { StepTest, testValid } from "./StepTest";

const validators: ((s: OnboardingState) => boolean)[] = [businessValid, planValid, assistantValid, channelsValid, testValid, () => true];

const blockers = [
  "Add your business name to continue.",
  "Choose a plan to continue.",
  "Add at least one service and your opening hours.",
  "Connect WhatsApp to continue.",
  "Add your WhatsApp number for the morning report.",
  "",
];

/** The sign-up wizard: step rail on the left, the current step beside it. */
export function OnboardingWizard() {
  const { state, update, ready } = useOnboarding();
  const top = useRef<HTMLDivElement>(null);
  const step = state.step;
  const valid = validators[step](state);

  // A plan chosen on the pricing page arrives as ?plan=…
  useEffect(() => {
    if (!ready) return;
    const fromUrl = planFromUrl();
    if (fromUrl && !state.plan) update((s) => ({ ...s, plan: fromUrl }));
    // Only on first load.
  }, [ready]);

  const go = (next: number) => {
    update((s) => {
      // Pre-select the recommended plan the first time someone reaches step 2.
      const plan = next === 1 && !s.plan ? recommendPlan(s) : s.plan;
      return { ...s, step: next, plan };
    });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    top.current?.focus({ preventScroll: true });
  };

  const next = () => {
    if (!valid) return;
    const last = step === wizardSteps.length - 1;
    update((s) => ({
      ...s,
      completed: s.completed.includes(s.step) ? s.completed : [...s.completed, s.step],
      liveAt: last ? (s.liveAt ?? new Date().toISOString()) : s.liveAt,
    }));
    if (last) {
      // Let the state save before leaving the page.
      window.setTimeout(() => (window.location.href = withBase("/app/?welcome=1")), 60);
      return;
    }
    go(step + 1);
  };

  return (
    <div className="min-h-svh bg-page">
      <header className="sticky top-0 z-30 border-b border-line bg-page/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8">
          <a href={links.home} className="text-[26px] leading-none font-extrabold tracking-[-0.045em] text-ink">
            vegam
          </a>
          <div className="flex items-center gap-4 text-[14.5px]">
            <span className="hidden items-center gap-1.5 text-subtle sm:inline-flex">
              <Icon name="check" size={16} className="text-success" />
              Progress saved
            </span>
            <a href={withBase("/contact/?topic=setup")} className="font-semibold text-indigo hover:underline">
              Set it up for me
            </a>
          </div>
        </div>
        <div className="h-1 bg-line lg:hidden" aria-hidden="true">
          <div className="h-full bg-[linear-gradient(90deg,#ffb020,#ee7a2e)] transition-[width] duration-500" style={{ width: `${((step + 1) / wizardSteps.length) * 100}%` }} />
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 pt-8 pb-32 sm:px-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:pt-12">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <StepRail current={step} completed={state.completed} onJump={go} />
          </div>
        </aside>

        <main ref={top} tabIndex={-1} className={`min-w-0 outline-none transition-opacity ${ready ? "opacity-100" : "opacity-0"}`}>
          <div className="mx-auto max-w-[720px]">
            {step === 0 && <StepBusiness state={state} update={update} />}
            {step === 1 && <StepPlan state={state} update={update} />}
            {step === 2 && <StepAssistant state={state} update={update} />}
            {step === 3 && <StepChannels state={state} update={update} />}
            {step === 4 && <StepTest state={state} update={update} />}
            {step === 5 && <StepGoLive state={state} onEdit={go} />}
          </div>
        </main>
      </div>

      {/* Bottom bar with Back / Continue, always in reach on phones */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur">
        {/* Same columns as the page, so the buttons line up with the step */}
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-3 sm:px-8 lg:grid-cols-[230px_minmax(0,1fr)]">
          <span className="hidden lg:block" />
          <div className="mx-auto flex w-full max-w-[720px] items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {step > 0 && (
                <button type="button" onClick={() => go(step - 1)} className="inline-flex min-h-12 cursor-pointer items-center gap-1 rounded-full px-3 font-semibold text-ink hover:bg-panel">
                  <Icon name="chevron-left" size={18} />
                  Back
                </button>
              )}
            </div>
            <div className="flex items-center gap-4">
              {!valid && <span className="hidden text-[14px] text-subtle md:inline">{blockers[step]}</span>}
              <PrimaryButton onClick={next} disabled={!valid}>
                {step === wizardSteps.length - 1 ? "Go live" : "Continue"}
                <Icon name="chevron-right" size={18} />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
