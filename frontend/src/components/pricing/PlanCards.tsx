"use client";

import { useEffect, useState } from "react";
import { currencySymbol, plans, type Billing, type Currency, type Plan, type PlanId } from "@/content/pricing";
import { ArtTile } from "@/components/ui/ArtTile";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { VegamMark } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";
import { withBase } from "@/lib/paths";

const pricesPublished = plans.some((p) => p.price);

function Toggle<T extends string>({ value, options, onChange, label }: { value: T; options: { id: T; label: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-full border border-line-strong bg-white p-1 shadow-[0_1px_2px_rgb(30_31_43/0.06)]">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={`min-h-10 cursor-pointer rounded-full px-5 text-[15px] font-semibold transition ${value === o.id ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Price({ plan, billing, currency }: { plan: Plan; billing: Billing; currency: Currency }) {
  if (!plan.price) {
    return <p className="m-0 text-[22px] font-semibold tracking-[-0.01em] text-ink">{plan.priceNote}</p>;
  }
  const monthly = plan.price[currency][billing];
  return (
    <p className="m-0 flex items-baseline gap-1.5 text-ink">
      <span className="text-[40px] leading-none font-bold tracking-[-0.03em]">
        {currencySymbol[currency]}
        {monthly.toLocaleString(currency === "INR" ? "en-IN" : "en-US")}
      </span>
      <span className="text-base text-subtle">/ month{billing === "annual" ? ", billed yearly" : ""}</span>
    </p>
  );
}

export function PlanCards({ highlight }: { highlight: PlanId | null }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [currency, setCurrency] = useState<Currency>("INR");

  useEffect(() => {
    if (!pricesPublished) return;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz !== "Asia/Kolkata" && tz !== "Asia/Calcutta") setCurrency("USD");
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      {pricesPublished && (
        <div className="flex flex-wrap justify-center gap-3">
          <Toggle label="Billing period" value={billing} onChange={setBilling} options={[{ id: "monthly", label: "Monthly" }, { id: "annual", label: "Annual · 2 months free" }]} />
          <Toggle label="Currency" value={currency} onChange={setCurrency} options={[{ id: "INR", label: "₹ INR" }, { id: "USD", label: "$ USD" }]} />
        </div>
      )}

      <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const featured = highlight ? highlight === plan.id : plan.popular;
          return (
            <Reveal key={plan.id} delay={i * 90} className="h-full">
              <article
                id={`plan-${plan.id}`}
                aria-label={`${plan.name} plan`}
                className={`group relative flex h-full scroll-mt-28 flex-col rounded-[26px] bg-white p-3 transition duration-500 ${
                  featured
                    ? "border-2 border-ink shadow-[0_30px_80px_rgb(21_16_173/0.18)] lg:-translate-y-3"
                    : "border border-line shadow-[0_1px_2px_rgb(30_31_43/0.04)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgb(21_16_173/0.1)]"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3.5 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-[0_0_0_4px_#fbfbfd,0_8px_24px_rgb(238_122_46/0.45)]">
                    <VegamMark size={14} strokeWidth={9} className="text-accent" />
                    {highlight ? "Best fit for you" : "Most popular"}
                  </span>
                )}
                <ArtTile palette={plan.palette} className="h-[150px] rounded-[18px]">
                  <div className="text-center">
                    <p className={`m-0 text-[36px] leading-none font-bold tracking-[-0.02em] ${plan.palette === "mist" ? "text-brand" : "text-white"}`}>{plan.name}</p>
                    <p className={`m-0 mt-2 text-[15px] font-medium ${plan.palette === "mist" ? "text-brand/80" : "text-white/90"}`}>{plan.promise}</p>
                  </div>
                </ArtTile>

                <div className="flex flex-1 flex-col gap-5 px-4 pt-6 pb-4">
                  <p className="m-0 text-[15px] leading-snug text-subtle">
                    <span className="font-semibold text-ink">Best for: </span>
                    {plan.bestFor}
                  </p>
                  <Price plan={plan} billing={billing} currency={currency} />
                  <ButtonLink href={withBase(`/contact/?topic=${plan.cta.topic}`)} variant={featured ? "dark" : "light"} block>
                    {plan.cta.label}
                  </ButtonLink>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {plan.highlights.map((h, j) => (
                      <li key={h} className={`flex items-start gap-3 text-[15.5px] leading-snug ${j === 0 && i > 0 ? "font-semibold text-ink" : "text-ink-soft"}`}>
                        <Icon name="check" size={19} strokeWidth={1.8} className="mt-0.5 flex-none text-success" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-4">
                    {plan.limits.map((l) => (
                      <span key={l} className="rounded-full bg-panel px-3 py-1.5 text-[13px] font-medium text-muted">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <a href="#compare" className="inline-flex items-center gap-1.5 font-semibold text-indigo hover:underline hover:underline-offset-4">
        Compare every feature
        <Icon name="chevron-down" size={18} />
      </a>
    </div>
  );
}
