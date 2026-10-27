"use client";

import { useEffect, type FormEvent } from "react";
import { countries } from "@/content/onboarding";
import { links } from "@/content/site";
import { Field, PrimaryButton, Select, TextInput } from "@/components/setup/fields";
import { PlanChooser } from "@/components/setup/PlanChooser";
import { Icon } from "@/components/ui/Icon";
import { VegamMark } from "@/components/ui/Kolam";
import { planFromUrl, useOnboarding } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";

// Minimal onboarding: two short screens, then straight to the dashboard.
// Teaching the assistant, connecting WhatsApp and testing happen there, as
// guided setup tasks. The plan can be skipped and picked later.

const TOTAL = 2;

export function Onboarding() {
  const { state, update, ready } = useOnboarding();
  const step = Math.min(state.step, TOTAL - 1);
  const b = state.business;
  const dial = countries.find((c) => c.id === b.country)?.dial ?? "+";

  // A plan chosen on the pricing page arrives as ?plan=…
  useEffect(() => {
    if (!ready) return;
    const fromUrl = planFromUrl();
    if (fromUrl && !state.plan) update((s) => ({ ...s, plan: fromUrl }));
    // Only on first load.
  }, [ready]);

  const finish = (keepPlan: boolean) => {
    update((s) => ({ ...s, plan: keepPlan ? s.plan : null, onboardedAt: s.onboardedAt ?? new Date().toISOString() }));
    // Let the state save before leaving the page.
    window.setTimeout(() => (window.location.href = withBase("/app/")), 60);
  };

  const submitAbout = (e: FormEvent) => {
    e.preventDefault();
    if (b.name.trim().length < 2) return;
    update((s) => ({ ...s, step: 1 }));
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="flex min-h-svh flex-col bg-page">
      <header className="flex h-16 items-center justify-between px-5 sm:px-8">
        <a href={links.home} className="text-[26px] leading-none font-extrabold tracking-[-0.045em] text-ink">
          vegam
        </a>
        <a href={withBase("/contact/?topic=setup")} className="text-[14.5px] font-semibold text-indigo hover:underline">
          Set it up for me
        </a>
      </header>

      <main className={`flex flex-1 justify-center px-5 pt-6 pb-16 transition-opacity sm:pt-12 ${ready ? "opacity-100" : "opacity-0"}`}>
        <div className="flex w-full max-w-[520px] flex-col gap-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <VegamMark size={44} strokeWidth={6} className="text-ink" />
            <div className="flex items-center gap-2" aria-label={`Step ${step + 1} of ${TOTAL}`}>
              {Array.from({ length: TOTAL }, (_, i) => (
                <span key={i} className={`h-1.5 rounded-full transition-all ${i <= step ? "w-8 bg-orange" : "w-4 bg-line-strong"}`} />
              ))}
            </div>
            <h1 className="m-0 font-serif text-[clamp(32px,4vw,42px)] leading-[1.08] font-normal tracking-[-0.03em] text-ink">
              {step === 0 ? "Tell us about your business" : "Pick a plan"}
            </h1>
            <p className="m-0 text-[17px] text-subtle">
              {step === 0 ? "Two quick questions, then you’re in your dashboard." : "Every plan starts with 30 days free. You can also skip this and choose later."}
            </p>
          </div>

          {step === 0 ? (
            <form onSubmit={submitAbout} className="flex flex-col gap-5" noValidate>
              <Field label="Business name">
                <TextInput
                  value={b.name}
                  onChange={(e) => update((s) => ({ ...s, business: { ...s.business, name: e.target.value } }))}
                  placeholder="e.g. Nila & Co"
                  autoComplete="organization"
                  autoFocus
                />
              </Field>
              <Field label="Country" hint="Sets your currency and time zone.">
                <Select value={b.country} onChange={(e) => update((s) => ({ ...s, business: { ...s.business, country: e.target.value as typeof b.country } }))}>
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Your WhatsApp number (optional)" hint="Your 8 AM morning report goes here. You can add it later.">
                <span className="flex gap-2">
                  <span className="flex min-h-13 items-center rounded-[14px] border border-line-strong bg-panel px-4 text-base text-ink">{dial}</span>
                  <TextInput type="tel" autoComplete="tel-national" value={state.ownerPhone} onChange={(e) => update((s) => ({ ...s, ownerPhone: e.target.value }))} placeholder="98765 43210" />
                </span>
              </Field>
              <PrimaryButton type="submit" disabled={b.name.trim().length < 2} className="mt-2 w-full">
                Continue
                <Icon name="chevron-right" size={18} />
              </PrimaryButton>
            </form>
          ) : (
            <div className="flex flex-col gap-6">
              <PlanChooser
                state={state}
                value={state.plan}
                billing={state.billing}
                onChange={(plan) => update((s) => ({ ...s, plan }))}
                onBilling={(billing) => update((s) => ({ ...s, billing }))}
              />
              <div className="flex flex-col items-center gap-3">
                <PrimaryButton onClick={() => finish(true)} disabled={!state.plan} className="w-full">
                  Start free pilot
                  <Icon name="chevron-right" size={18} />
                </PrimaryButton>
                <button type="button" onClick={() => finish(false)} className="min-h-11 cursor-pointer text-[15.5px] font-semibold text-ink underline-offset-4 hover:underline">
                  Skip for now, explore the dashboard
                </button>
                <button
                  type="button"
                  onClick={() => update((s) => ({ ...s, step: 0 }))}
                  className="inline-flex cursor-pointer items-center gap-1 text-[14.5px] font-medium text-subtle hover:text-ink"
                >
                  <Icon name="chevron-left" size={16} />
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
