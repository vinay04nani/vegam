"use client";

import { useState } from "react";
import type { PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
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
        <span className="h-2 w-2 rounded-full bg-signal" />
        {eyebrow}
      </span>
      <DisplayHeading className="max-w-[760px] text-display-xl">{title}</DisplayHeading>
      {body && <p className="m-0 max-w-[600px] text-h3 text-subtle">{body}</p>}
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
        <section className="bg-night relative isolate mx-auto max-w-[1360px] overflow-hidden rounded-xl">
          <div className="grid items-center gap-12 px-[clamp(20px,5vw,72px)] py-[clamp(48px,6vw,88px)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-body font-semibold ring-1 ring-white/20">
                Pricing
              </span>
              <DisplayHeading as="h1" className="text-display-xl text-white">
                Pay for the front desk you <span className="text-signal">need</span>
              </DisplayHeading>
              <p className="m-0 max-w-[520px] text-h2 leading-relaxed text-white/75">
                Three plans that grow with you. Each one is set up for you and starts with a 30-day pilot measured in your own numbers.
              </p>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-body-lg text-white/85">
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
          <Reveal className="relative isolate overflow-hidden rounded-xl bg-brand-fill p-7 text-white">
            <div aria-hidden="true" className="absolute -end-16 -bottom-20 -z-10 h-48 w-48 rounded-full bg-signal/30 blur-3xl" />
            <p className="m-0 font-serif text-h1 leading-tight tracking-[-0.02em]">Not sure which plan?</p>
            <p className="m-0 mt-2 text-body-lg text-white/70">Tell us how customers reach you today. We’ll recommend a plan and set up your pilot.</p>
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
