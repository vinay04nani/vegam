"use client";

import { useState } from "react";
import type { PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { TierMark } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";
import { ComparisonTable } from "./ComparisonTable";
import { Faq } from "./Faq";
import { PlanCards } from "./PlanCards";
import { PlanPicker } from "./PlanPicker";

// The pricing page shares the nav, footer, type and buttons with the rest of
// the site, but uses its own ink-and-saffron palette and a framed dark hero
// instead of the landing page's light glow.

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <Reveal className="flex flex-col gap-4">
      <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.18em] text-muted uppercase">
        <span className="h-2 w-2 rounded-full bg-orange" />
        {eyebrow}
      </span>
      <DisplayHeading className="max-w-[760px] text-[clamp(34px,4vw,54px)]">{title}</DisplayHeading>
      {body && <p className="m-0 max-w-[600px] text-[clamp(17px,1.4vw,19px)] text-subtle">{body}</p>}
    </Reveal>
  );
}

export function PricingPage() {
  const [picked, setPicked] = useState<PlanId | null>(null);

  const pick = (plan: PlanId | null) => {
    setPicked(plan);
    if (plan) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.setTimeout(() => document.getElementById(`plan-${plan}`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }), 350);
    }
  };

  return (
    <>
      {/* 1. Framed dark hero: title on the left, plan picker on the right */}
      <div className="px-3 pt-[88px] sm:px-6">
        <section className="relative isolate mx-auto max-w-[1360px] overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#1B1C2E_0%,#22233A_55%,#2E2220_100%)]">
          <div aria-hidden="true" className="bg-dots-light absolute inset-0 -z-10 [mask-image:radial-gradient(90%_80%_at_25%_30%,#000_25%,transparent_80%)]" />
          <div aria-hidden="true" className="absolute -right-32 -bottom-40 -z-10 h-[520px] w-[520px] rounded-full bg-orange/35 blur-[110px]" />
          <div aria-hidden="true" className="absolute -top-24 left-[30%] -z-10 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[90px]" />
          <div className="grid items-center gap-12 px-[clamp(20px,5vw,72px)] py-[clamp(48px,6vw,88px)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7 text-white">
              <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[14px] font-semibold ring-1 ring-white/20">
                <TierMark dots={3} className="h-4 w-auto text-white" />
                Pricing
              </span>
              <DisplayHeading as="h1" className="text-[clamp(44px,5.4vw,78px)] leading-[1.02] text-white">
                Pay for the front desk you <span className="text-orange italic">need</span>
              </DisplayHeading>
              <p className="m-0 max-w-[520px] text-[clamp(18px,1.5vw,21px)] leading-relaxed text-white/75">
                Three plans that grow with you. Each one is set up for you and starts with a 30-day pilot measured in your own numbers.
              </p>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[16px] text-white/85">
                {["Set up for you, live within a day", "30-day measured pilot", "Switch plans or cancel anytime"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25">
                      <Icon name="check" size={14} strokeWidth={2.4} className="[&_circle]:hidden" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Reveal delay={120}>
              <PlanPicker onPick={pick} />
            </Reveal>
          </div>
        </section>
      </div>

      {/* 2. Plans */}
      <section id="plans" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pt-[clamp(56px,7vw,96px)] pb-[clamp(72px,9vw,120px)] sm:px-10">
        <PlanCards highlight={picked} />
      </section>

      {/* 3. Comparison */}
      <section id="compare" className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-12 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10">
        <SectionHead eyebrow="Compare plans" title="Every feature, side by side" body="Grouped so you can find what matters. Tap a group to collapse it." />
        <Reveal>
          <ComparisonTable />
        </Reveal>
      </section>

      {/* 4. FAQ, with the closing call to action beside it */}
      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Questions" title="Frequently asked" body="How plans, usage, fees and the 30-day pilot work." />
          <Reveal className="relative isolate overflow-hidden rounded-[24px] bg-ink p-7 text-white">
            <div aria-hidden="true" className="bg-dots-light absolute inset-0 -z-10 opacity-70" />
            <div aria-hidden="true" className="absolute -right-16 -bottom-20 -z-10 h-48 w-48 rounded-full bg-orange/40 blur-3xl" />
            <p className="m-0 font-serif text-[28px] leading-tight tracking-[-0.02em]">Not sure which plan?</p>
            <p className="m-0 mt-2 text-[15.5px] text-white/70">Tell us how customers reach you today. We’ll recommend a plan and set up your pilot.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={links.demo} variant="light" size="md">
                Book a demo
              </ButtonLink>
              <ButtonLink href={links.contact} variant="glass" size="md">
                Contact us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <Faq />
        </Reveal>
      </section>
    </>
  );
}
