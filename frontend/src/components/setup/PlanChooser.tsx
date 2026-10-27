import { plans, type Billing, type PlanId } from "@/content/pricing";
import { TierMark } from "@/components/ui/Kolam";
import { Icon } from "@/components/ui/Icon";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";

type Props = {
  state: OnboardingState;
  value: PlanId | null;
  billing: Billing;
  onChange: (plan: PlanId) => void;
  onBilling: (billing: Billing) => void;
  /** Show each plan's main features (the dashboard page has room for them). */
  detailed?: boolean;
};

/** The three plans as a simple list of choices, used in onboarding and on the dashboard's plan page. */
export function PlanChooser({ state, value, billing, onChange, onBilling, detailed = false }: Props) {
  const currency = currencyFor(state);

  return (
    <div className="flex flex-col gap-4">
      <div role="radiogroup" aria-label="Billing period" className="inline-flex w-fit rounded-full border border-line-strong bg-white p-1">
        {(["monthly", "annual"] as Billing[]).map((b) => (
          <button
            key={b}
            type="button"
            role="radio"
            aria-checked={billing === b}
            onClick={() => onBilling(b)}
            className={`min-h-9 cursor-pointer rounded-full px-4 text-[14.5px] font-semibold transition ${billing === b ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
          >
            {b === "monthly" ? "Monthly" : "Annual · 2 months free"}
          </button>
        ))}
      </div>

      <div role="radiogroup" aria-label="Plan" className="flex flex-col gap-3">
        {plans.map((p) => {
          const chosen = value === p.id;
          const price = p.price?.[currency][billing];
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={chosen}
              onClick={() => onChange(p.id)}
              className={`flex cursor-pointer items-start gap-4 rounded-[20px] border-2 bg-white p-4 text-left transition sm:p-5 ${
                chosen ? "border-ink shadow-[0_14px_34px_rgb(30_31_43/0.1)]" : "border-line hover:border-line-strong"
              }`}
            >
              <span className={`mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 ${chosen ? "border-ink bg-ink text-white" : "border-line-strong"}`}>
                {chosen && <Icon name="check" size={13} strokeWidth={2.8} className="[&_circle]:hidden" />}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[19px] font-semibold text-ink">{p.name}</span>
                  <TierMark dots={p.dots} className="h-3.5 w-auto text-ink" />
                  {p.popular && <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.06em] text-ink uppercase">Most popular</span>}
                </span>
                <span className="text-[15px] text-[#B4500A]">{p.promise}</span>
                {detailed && (
                  <ul className="m-0 mt-2 grid list-none gap-1.5 p-0 text-[14px] text-ink-soft sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <Icon name="check" size={16} className="mt-0.5 flex-none text-success" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </span>
              {price !== undefined && (
                <span className="flex flex-none flex-col items-end text-right">
                  <span className="text-[13px] text-subtle">{p.from ? "from" : " "}</span>
                  <span className="text-[22px] leading-tight font-bold tracking-[-0.02em] text-ink">{formatMoney(price, currency)}</span>
                  <span className="text-[13px] text-subtle">/ month</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p className="m-0 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-subtle">
        <span>30 days free, no card needed. {currency === "INR" ? "Prices exclude GST. " : ""}Change plan any time.</span>
        <a href={withBase("/pricing/#compare")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-indigo hover:underline">
          Compare plans
          <Icon name="external" size={14} />
        </a>
      </p>
    </div>
  );
}
