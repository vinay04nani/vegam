"use client";

import { useState } from "react";
import { plans, type Billing, type Plan, type PlanId } from "@/content/pricing";
import { useLocale } from "@/components/LocaleProvider";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CURRENCIES, formatMoney, taxNote, type Currency } from "@/lib/locale";
import { withBase } from "@/lib/paths";

const pricesPublished = plans.some((p) => p.price);

function Toggle<T extends string>({ value, options, onChange, label }: { value: T; options: { id: T; label: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-full border border-border-strong bg-surface p-1 shadow-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={`min-h-10 cursor-pointer rounded-full px-4 text-body font-semibold transition ${value === o.id ? "bg-brand-fill text-white" : "text-text-2 hover:text-text"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Price({ plan, billing, currency, locale, region }: { plan: Plan; billing: Billing; currency: Currency; locale: string; region: string }) {
  if (!plan.price) return <p className="m-0 text-h2 text-text">{plan.priceNote}</p>;
  const monthly = plan.price[currency][billing];
  return (
    <div className="text-text">
      <p className="m-0 flex flex-wrap items-baseline gap-x-1.5">
        {plan.from && <span className="text-body-lg font-medium text-text-3">From</span>}
        <span className="text-display leading-none font-semibold tracking-[-0.03em] tabular-nums">{formatMoney(monthly, currency, locale)}</span>
        <span className="text-body-lg text-text-3">/ month</span>
      </p>
      <p className="m-0 mt-2 text-label text-text-3">
        {billing === "annual" ? "Billed yearly. " : ""}
        {taxNote(region)}. {plan.priceNote}
      </p>
    </div>
  );
}

export function PlanCards({ highlight }: { highlight: PlanId | null }) {
  const detected = useLocale();
  const [billing, setBilling] = useState<Billing>("monthly");
  const [currency, setCurrency] = useState<Currency | null>(null);
  const active = currency ?? detected.currency;

  return (
    <div className="flex flex-col items-center gap-10">
      {pricesPublished && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Toggle label="Billing period" value={billing} onChange={setBilling} options={[{ id: "monthly", label: "Monthly" }, { id: "annual", label: "Annual · 2 months free" }]} />
          <label className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong bg-surface px-4 text-body font-semibold shadow-1">
            <span className="text-text-3">Currency</span>
            <select
              aria-label="Currency"
              value={active}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="cursor-pointer bg-transparent text-text outline-none"
            >
              {CURRENCIES.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      <div className="grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const featured = !!plan.popular;
          const chosen = highlight === plan.id;
          return (
            <Reveal key={plan.id} delay={i * 90} className="h-full">
              <article
                id={`plan-${plan.id}`}
                aria-label={`${plan.name} plan`}
                className={`relative flex h-full scroll-mt-28 flex-col rounded-xl p-7 sm:p-8 ${
                  featured ? "border-2 border-brand bg-brand-subtle shadow-2" : "border border-border bg-surface shadow-1"
                } ${chosen ? "ring-2 ring-brand ring-offset-2 ring-offset-bg" : ""}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="m-0 font-serif text-display leading-none">{plan.name}</h3>
                  {(chosen || plan.popular) && (
                    <span className={`rounded-full px-3 py-1 text-caption font-semibold tracking-wide uppercase ${chosen ? "bg-brand-fill text-white" : "bg-signal text-[#14151F]"}`}>
                      {chosen ? "Best fit for you" : "Most popular"}
                    </span>
                  )}
                </div>
                <p className="m-0 mt-3 text-body-lg font-medium text-signal-ink">{plan.promise}</p>
                <p className="m-0 mt-3 text-body leading-snug text-text-2">{plan.bestFor}</p>
                <div className="my-6 h-px bg-border" />
                <Price plan={plan} billing={billing} currency={active} locale={detected.locale} region={detected.region} />
                <ButtonLink href={withBase(`/signup/?plan=${plan.id}`)} block className="mt-5">
                  {plan.cta}
                </ButtonLink>
                <p className="m-0 mt-2.5 text-center text-label text-text-3">30 days free · No card needed</p>
                <ul className="m-0 mt-7 flex list-none flex-col gap-3 p-0">
                  {plan.highlights.map((h, j) => (
                    <li key={h} className={`flex items-start gap-3 text-body-lg leading-snug text-text-2 ${j === 0 && i > 0 ? "font-semibold text-text" : ""}`}>
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-fill text-white">
                        <Icon name="check" size={14} strokeWidth={2.4} className="[&_circle]:hidden" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="m-0 mt-auto grid list-none grid-cols-1 gap-2 p-0 pt-8 text-label">
                  {plan.limits.map((l) => (
                    <li key={l} className="flex items-center gap-2 text-text-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {l}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
      <a href="#compare" className="inline-flex items-center gap-1.5 font-semibold text-text underline-offset-4 hover:underline">
        Compare every feature
        <Icon name="chevron-down" size={18} />
      </a>
    </div>
  );
}
