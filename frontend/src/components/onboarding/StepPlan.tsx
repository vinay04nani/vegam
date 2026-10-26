import { plans, type Billing } from "@/content/pricing";
import { TierMark } from "@/components/ui/Kolam";
import { Icon } from "@/components/ui/Icon";
import { currencyFor, formatMoney, recommendPlan, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { StepHeader } from "./fields";

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export const planValid = (s: OnboardingState) => s.plan !== null;

export function StepPlan({ state, update }: Props) {
  const currency = currencyFor(state);
  const recommended = recommendPlan(state);
  const setBilling = (billing: Billing) => update((s) => ({ ...s, billing }));

  return (
    <div className="flex flex-col gap-8">
      <StepHeader
        step={2}
        title="Choose your plan"
        body="Every plan starts with a free 30-day pilot. No card needed now; add one before day 25 if you want to keep going."
      />
      <div role="radiogroup" aria-label="Billing period" className="inline-flex w-fit rounded-full border border-line-strong bg-white p-1">
        {(["monthly", "annual"] as Billing[]).map((b) => (
          <button
            key={b}
            type="button"
            role="radio"
            aria-checked={state.billing === b}
            onClick={() => setBilling(b)}
            className={`min-h-10 cursor-pointer rounded-full px-5 text-[15px] font-semibold transition ${state.billing === b ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
          >
            {b === "monthly" ? "Monthly" : "Annual · 2 months free"}
          </button>
        ))}
      </div>

      <div role="radiogroup" aria-label="Plan" className="grid gap-4 xl:grid-cols-3">
        {plans.map((p) => {
          const chosen = state.plan === p.id;
          const price = p.price?.[currency][state.billing];
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={chosen}
              onClick={() => update((s) => ({ ...s, plan: p.id }))}
              className={`relative flex cursor-pointer flex-col gap-3 rounded-[22px] border-2 bg-white p-5 text-left transition ${
                chosen ? "border-ink shadow-[0_18px_40px_rgb(30_31_43/0.12)]" : "border-line hover:border-line-strong"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <TierMark dots={p.dots} className="text-ink" />
                <span className="flex items-center gap-2">
                  {p.id === recommended && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11.5px] font-semibold tracking-[0.06em] text-ink uppercase">Fits you</span>
                  )}
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${chosen ? "border-ink bg-ink text-white" : "border-line-strong"}`}>
                    {chosen && <Icon name="check" size={13} strokeWidth={2.8} className="[&_circle]:hidden" />}
                  </span>
                </span>
              </span>
              <span className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink">{p.name}</span>
              <span className="text-[15px] font-medium text-[#B4500A]">{p.promise}</span>
              {price !== undefined && (
                <span className="flex flex-wrap items-baseline gap-x-1">
                  {p.from && <span className="text-sm text-subtle">From</span>}
                  <span className="text-[26px] font-bold tracking-[-0.02em] text-ink">{formatMoney(price, currency)}</span>
                  <span className="text-sm text-subtle">/ month after the pilot</span>
                </span>
              )}
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[14px] text-ink-soft">
                {p.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-2">
                    <Icon name="check" size={16} className="mt-0.5 flex-none text-success" />
                    {h}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <p className="m-0 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14.5px] text-subtle">
        <span>{currency === "INR" ? "Prices exclude GST. " : ""}WhatsApp fees are passed on at cost. Switch plans any time.</span>
        <a href={withBase("/pricing/#compare")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-indigo hover:underline">
          Compare every feature
          <Icon name="external" size={15} />
        </a>
      </p>
      {state.plan === "pro" && state.business.locations === "more" && (
        <p className="m-0 rounded-[16px] bg-periwinkle-soft px-4 py-3 text-[15px] text-brand">
          You’ll set up your first location now. After you go live, we’ll book a call to add the others and confirm your price.
        </p>
      )}
    </div>
  );
}
