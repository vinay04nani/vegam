"use client";

import { useEffect, useRef, useState } from "react";
import { wizardSteps } from "@/content/onboarding";
import { links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { planFromUrl, recommendPlan, useOnboarding, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { PrimaryButton } from "./fields";
import { LivePreview } from "./LivePreview";
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

/** The sign-up wizard: step rail on the left, the step in the middle, a live phone preview on the right. */
export function OnboardingWizard() {
  const { state, update, ready } = useOnboarding();
  const [sheet, setSheet] = useState(false);
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

  const showPreview = step !== 4;

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

      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 pt-8 pb-32 sm:px-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:pt-12 xl:grid-cols-[230px_minmax(0,1fr)_340px]">
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

        {showPreview && (
          <aside className="hidden xl:block" aria-label="What customers see">
            <div className="sticky top-28 flex flex-col items-center gap-3">
              <p className="m-0 text-sm font-semibold tracking-[0.16em] text-muted uppercase">What customers see</p>
              <LivePreview state={state} />
            </div>
          </aside>
        )}
      </div>

      {/* Bottom bar with Back / Continue, always in reach on phones */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-8 lg:pl-[calc(230px+80px)] xl:pr-[calc(340px+80px)]">
          <div className="flex items-center gap-2">
            {step > 0 && (
              <button type="button" onClick={() => go(step - 1)} className="inline-flex min-h-12 cursor-pointer items-center gap-1 rounded-full px-3 font-semibold text-ink hover:bg-panel">
                <Icon name="chevron-left" size={18} />
                Back
              </button>
            )}
            {showPreview && (
              <button type="button" onClick={() => setSheet(true)} className="inline-flex min-h-12 cursor-pointer items-center gap-1.5 rounded-full px-3 font-semibold text-indigo hover:bg-panel xl:hidden">
                <Icon name="message" size={18} />
                <span className="hidden sm:inline">See what customers see</span>
                <span className="sm:hidden">Preview</span>
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

      {sheet && (
        <div role="dialog" aria-modal="true" aria-label="What customers see" className="fixed inset-0 z-40 flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center xl:hidden" onClick={() => setSheet(false)}>
          <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <LivePreview state={state} />
            <button type="button" autoFocus onClick={() => setSheet(false)} className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full bg-white px-5 font-semibold text-ink">
              <Icon name="close" size={16} />
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
