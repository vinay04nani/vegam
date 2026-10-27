"use client";

import { useState } from "react";
import { plans, type Billing, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { Badge } from "../../kit";
import { Group, Input, Row, RowButton } from "./parts";

// Choosing and paying for a plan, inside the settings dialog: pick a plan,
// check out with Stripe, then a confirmation. During the free pilot nothing
// is charged until day 30.
// Demo: no card is charged; the choice saves to the onboarding state.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; onOpen: (view: string) => void };
type Step = "choose" | "checkout" | "done";

const DAY = 86_400_000;

export function Plans({ state, update, onOpen }: Props) {
  const currency = currencyFor(state);
  const india = currency === "INR";
  const [step, setStep] = useState<Step>("choose");
  const [billing, setBilling] = useState<Billing>(state.billing);
  const [pick, setPick] = useState<PlanId | null>(null);
  const [card, setCard] = useState<"saved" | "new">("saved");
  const [form, setForm] = useState({ number: "", expiry: "", cvc: "", name: "" });
  const [paying, setPaying] = useState(false);

  const current = state.plan;
  const chosen = plans.find((p) => p.id === pick);
  const pilotDaysLeft = state.liveAt ? Math.max(0, 30 - Math.floor((Date.now() - new Date(state.liveAt).getTime()) / DAY)) : 30;
  const inPilot = pilotDaysLeft > 0;
  const monthly = chosen?.price?.[currency][billing] ?? 0;
  const period = billing === "annual" ? monthly * 12 : monthly;
  const tax = india ? Math.round(period * 0.18) : 0;
  const cardOk = card === "saved" || (form.number.replace(/\D/g, "").length >= 15 && /^\d{2}\s?\/\s?\d{2}$/.test(form.expiry) && form.cvc.length >= 3 && form.name.trim().length > 1);

  const confirm = () => {
    setPaying(true);
    window.setTimeout(() => {
      update((s) => ({ ...s, plan: pick, billing }));
      setPaying(false);
      setStep("done");
    }, 900);
  };

  if (step === "done" && chosen) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F3EA] text-success">
          <Icon name="check" size={26} />
        </span>
        <h3 className="m-0 text-[20px] font-semibold text-ink">You’re on {chosen.name}</h3>
        <p className="m-0 max-w-[420px] text-[14.5px] leading-relaxed text-ink-soft">
          {inPilot
            ? `Your free pilot continues. Your card is charged ${formatMoney(period + tax, currency)} on day 30, then ${billing === "annual" ? "every year" : "every month"}.`
            : `We charged ${formatMoney(period + tax, currency)} through Stripe. Your invoice is ready.`}
        </p>
        <div className="mt-2 flex gap-2">
          <RowButton onClick={() => onOpen("settings:billing")}>View invoices</RowButton>
          <RowButton tone="primary" onClick={() => setStep("choose")}>
            Done
          </RowButton>
        </div>
      </div>
    );
  }

  if (step === "checkout" && chosen) {
    return (
      <>
        <button type="button" onClick={() => setStep("choose")} className="-mt-3 mb-5 inline-flex cursor-pointer items-center gap-1 text-[13.5px] font-medium text-subtle hover:text-ink">
          <Icon name="chevron-left" size={15} />
          Back to plans
        </button>

        <Group title="Order summary">
          <Row label={`${chosen.name} plan · ${billing === "annual" ? "annual" : "monthly"}`} description={billing === "annual" ? `${formatMoney(monthly, currency)}/month, billed yearly` : "Billed every month"}>
            <span className="text-[14px] text-ink tabular-nums">{formatMoney(period, currency)}</span>
          </Row>
          {india && (
            <Row label="GST (18%)">
              <span className="text-[14px] text-ink tabular-nums">{formatMoney(tax, currency)}</span>
            </Row>
          )}
          <Row label="WhatsApp fees" description="Passed on at cost and billed with your plan.">
            <span className="text-[14px] text-subtle">As used</span>
          </Row>
          <Row label={<span className="font-semibold">Due today</span>} description={inPilot ? `Free pilot · ${formatMoney(period + tax, currency)} on day 30 (${pilotDaysLeft} days left)` : undefined}>
            <span className="text-[16px] font-semibold text-ink tabular-nums">{formatMoney(inPilot ? 0 : period + tax, currency)}</span>
          </Row>
        </Group>

        <Group title="Pay with" description="Card details go straight to Stripe. Vegam never sees or stores them.">
          <label className="flex cursor-pointer items-center gap-3 py-4">
            <input type="radio" name="card" checked={card === "saved"} onChange={() => setCard("saved")} className="accent-[#23243A]" />
            <span className="flex-1 text-[14.5px] text-ink">Visa •••• 4242 · expires 08/29</span>
          </label>
          <div className="py-4">
            <label className="flex cursor-pointer items-center gap-3">
              <input type="radio" name="card" checked={card === "new"} onChange={() => setCard("new")} className="accent-[#23243A]" />
              <span className="flex-1 text-[14.5px] text-ink">A new card</span>
            </label>
            {card === "new" && (
              <div className="mt-3 ml-7 grid grid-cols-2 gap-2">
                <Input aria-label="Card number" inputMode="numeric" autoComplete="cc-number" placeholder="Card number" value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value.replace(/[^\d ]/g, "").slice(0, 23) })} className="col-span-2 w-full" />
                <Input aria-label="Expiry (MM/YY)" autoComplete="cc-exp" placeholder="MM / YY" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value.slice(0, 7) })} />
                <Input aria-label="CVC" inputMode="numeric" autoComplete="cc-csc" placeholder="CVC" value={form.cvc} onChange={(e) => setForm({ ...form, cvc: e.target.value.replace(/\D/g, "").slice(0, 4) })} />
                <Input aria-label="Name on card" autoComplete="cc-name" placeholder="Name on card" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="col-span-2 w-full" />
              </div>
            )}
          </div>
        </Group>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            disabled={!cardOk || paying}
            onClick={confirm}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-ink text-[15px] font-semibold text-white transition hover:bg-[#2c2d3d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon name="lock" size={15} />
            {paying ? "Confirming with Stripe…" : inPilot ? `Start ${chosen.name}` : `Pay ${formatMoney(period + tax, currency)}`}
          </button>
          <p className="m-0 flex items-center justify-center gap-2 text-[12.5px] text-subtle">
            <BrandLogo brand="stripe" size={18} bare />
            Payments by Stripe · Demo: no card is charged
          </p>
          <p className="m-0 text-center text-[12.5px] text-subtle">Cancel or change plan any time. Downgrades apply from your next billing period.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-[10px] bg-panel p-1">
          {(["monthly", "annual"] as Billing[]).map((b) => (
            <button
              key={b}
              type="button"
              role="radio"
              aria-checked={billing === b}
              onClick={() => setBilling(b)}
              className={`h-8 cursor-pointer rounded-[8px] px-3.5 text-[13.5px] font-medium transition ${billing === b ? "bg-white text-ink shadow-[0_1px_2px_rgb(30_31_43/0.12)]" : "text-subtle hover:text-ink"}`}
            >
              {b === "monthly" ? "Monthly" : "Annual · 2 months free"}
            </button>
          ))}
        </div>
        <span className="text-[13px] text-subtle">{inPilot ? `Free pilot · ${pilotDaysLeft} days left` : "Prices exclude tax"}</span>
      </div>

      <div role="radiogroup" aria-label="Plans" className="grid gap-3 md:grid-cols-3">
        {plans.map((p) => {
          const price = p.price?.[currency][billing];
          const isCurrent = current === p.id && state.billing === billing;
          return (
            <div key={p.id} className={`flex flex-col gap-4 rounded-[14px] border p-4 ${p.popular ? "border-ink" : "border-line"}`}>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <span className="text-[16px] font-semibold text-ink">{p.name}</span>
                  {isCurrent ? <Badge tone="success">Current</Badge> : p.popular ? <Badge tone="brand">Popular</Badge> : null}
                </span>
                <span className="text-[13px] leading-snug text-subtle">{p.promise}</span>
              </div>
              <div>
                <span className="text-[24px] font-semibold tracking-[-0.02em] text-ink">
                  {p.from && <span className="text-[14px] font-normal text-subtle">From </span>}
                  {price !== undefined ? formatMoney(price, currency) : "Custom"}
                </span>
                <span className="text-[13px] text-subtle"> /month</span>
              </div>
              <ul className="m-0 flex flex-1 list-none flex-col gap-1.5 p-0 text-[13.5px] text-ink-soft">
                {p.limits.map((l) => (
                  <li key={l} className="flex gap-2">
                    <Icon name="check" size={14} className="mt-0.5 flex-none text-ink" />
                    {l}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                role="radio"
                aria-checked={isCurrent}
                aria-label={isCurrent ? `${p.name} is your current plan` : `Choose ${p.name}`}
                disabled={isCurrent}
                onClick={() => {
                  setPick(p.id);
                  setStep("checkout");
                }}
                className={`h-9 cursor-pointer rounded-[8px] text-[13.5px] font-semibold transition disabled:cursor-default ${isCurrent ? "bg-panel text-subtle" : p.popular ? "bg-ink text-white hover:bg-[#2c2d3d]" : "border border-line-strong bg-white text-ink hover:bg-panel"}`}
              >
                {isCurrent ? "Current plan" : current ? `Switch to ${p.name}` : `Choose ${p.name}`}
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-[13px] text-subtle">
        WhatsApp fees are passed on at cost.{" "}
        <a href={withBase("/pricing/")} target="_blank" rel="noreferrer" className="font-medium text-indigo hover:underline">
          Compare all features
        </a>
      </p>
    </>
  );
}
