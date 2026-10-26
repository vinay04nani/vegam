"use client";

import { useEffect, useState } from "react";
import { currencySymbol, plans, type Billing, type Currency, type Plan, type PlanId } from "@/content/pricing";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TierMark } from "@/components/ui/Kolam";
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

function Price({ plan, billing, currency, dark }: { plan: Plan; billing: Billing; currency: Currency; dark: boolean }) {
  if (!plan.price) {
    return <p className={`m-0 text-[22px] font-semibold tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}>{plan.priceNote}</p>;
  }
  const monthly = plan.price[currency][billing];
  return (
    <p className={`m-0 flex items-baseline gap-1.5 ${dark ? "text-white" : "text-ink"}`}>
      <span className="text-[44px] leading-none font-bold tracking-[-0.03em]">
        {currencySymbol[currency]}
        {monthly.toLocaleString(currency === "INR" ? "en-IN" : "en-US")}
      </span>
      <span className={`text-base ${dark ? "text-white/60" : "text-subtle"}`}>/ month{billing === "annual" ? ", billed yearly" : ""}</span>
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

      <div className="grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          // The popular plan is always the dark card; the picker's choice gets the ring.
          const dark = !!plan.popular;
          const chosen = highlight === plan.id;
          return (
            <Reveal key={plan.id} delay={i * 90} className="h-full">
              <article
                id={`plan-${plan.id}`}
                aria-label={`${plan.name} plan`}
                className={`relative isolate flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[28px] p-[clamp(24px,2.6vw,36px)] transition duration-500 ${
                  dark
                    ? "bg-[linear-gradient(165deg,#22233A_0%,#1B1C2E_55%,#3A2618_100%)] text-white shadow-[0_30px_80px_rgb(30_31_43/0.3)]"
                    : "border border-line bg-white text-ink hover:-translate-y-1 hover:shadow-[0_24px_60px_rgb(30_31_43/0.08)]"
                } ${chosen ? "ring-4 ring-orange ring-offset-4 ring-offset-page" : ""}`}
              >
                {dark && <div aria-hidden="true" className="bg-dots-light absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,#000,transparent_60%)]" />}
                <div className="flex items-start justify-between gap-3">
                  <TierMark dots={plan.dots} className={dark ? "text-white" : "text-ink"} />
                  {(chosen || plan.popular) && (
                    <span
                      className={`rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.06em] uppercase ${
                        chosen ? "bg-orange text-white" : "bg-accent text-ink"
                      }`}
                    >
                      {chosen ? "Best fit for you" : "Most popular"}
                    </span>
                  )}
                </div>

                <h3 className="m-0 mt-7 font-serif text-[46px] leading-none font-normal tracking-[-0.03em]">{plan.name}</h3>
                <p className={`m-0 mt-2 text-[17px] font-medium ${dark ? "text-[#FFC27A]" : "text-[#B4500A]"}`}>{plan.promise}</p>
                <p className={`m-0 mt-4 text-[15px] leading-snug ${dark ? "text-white/70" : "text-subtle"}`}>{plan.bestFor}</p>

                <div className={`my-7 h-px ${dark ? "bg-white/15" : "bg-line"}`} />
                <Price plan={plan} billing={billing} currency={currency} dark={dark} />
                <ButtonLink
                  href={withBase(`/contact/?topic=${plan.cta.topic}`)}
                  variant={dark ? "light" : "dark"}
                  block
                  className="mt-5"
                >
                  {plan.cta.label}
                </ButtonLink>

                <ul className="m-0 mt-7 flex list-none flex-col gap-3.5 p-0">
                  {plan.highlights.map((h, j) => (
                    <li key={h} className={`flex items-start gap-3 text-[15.5px] leading-snug ${j === 0 && i > 0 ? "font-semibold" : ""} ${dark ? "text-white/90" : "text-ink-soft"}`}>
                      <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${dark ? "bg-orange text-white" : "bg-ink text-white"}`}>
                        <Icon name="check" size={14} strokeWidth={2.4} className="[&_circle]:hidden" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <dl className={`m-0 mt-auto grid grid-cols-1 gap-2 pt-8 text-[13.5px]`}>
                  {plan.limits.map((l) => (
                    <div key={l} className={`flex items-center gap-2 ${dark ? "text-white/60" : "text-muted"}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      <dd className="m-0">{l}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          );
        })}
      </div>
      <a href="#compare" className="inline-flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:underline">
        Compare every feature
        <Icon name="chevron-down" size={18} />
      </a>
    </div>
  );
}
