"use client";

import { useState } from "react";
import { everyPlan, pilotSteps, usageNotes, type PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading, Eyebrow } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { TierMark, VegamMark } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";
import { ComparisonTable } from "./ComparisonTable";
import { Faq } from "./Faq";
import { HowItWorks } from "./HowItWorks";
import { PlanCards } from "./PlanCards";
import { PlanPicker } from "./PlanPicker";

// The pricing page shares the nav, footer, type and colours with the rest of
// the site, but has its own look: a kolam dot grid instead of the landing
// page's glow, editorial plan cards, a dark journey band and a bento grid.

function SectionHead({ eyebrow, title, body, dark = false, align = "left" }: { eyebrow: string; title: string; body?: string; dark?: boolean; align?: "left" | "center" }) {
  return (
    <Reveal className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""}`}>
      <span className={`inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.18em] uppercase ${dark ? "text-white/60" : "text-muted"}`}>
        <span className="h-2 w-2 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <DisplayHeading className={`max-w-[760px] text-[clamp(34px,4vw,54px)] ${dark ? "text-white" : ""}`}>{title}</DisplayHeading>
      {body && <p className={`m-0 max-w-[600px] text-[clamp(17px,1.4vw,19px)] ${dark ? "text-white/65" : "text-subtle"}`}>{body}</p>}
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
      {/* 1. Split hero on a kolam dot grid, with the plan picker beside the title */}
      <div className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(80%_70%_at_30%_40%,#000_30%,transparent_80%)]" />
        <div aria-hidden="true" className="absolute top-[18%] -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-periwinkle/15 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[-120px] bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-accent/15 blur-3xl" />
        <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 pt-[clamp(120px,12vw,170px)] pb-[clamp(56px,7vw,96px)] sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-7">
            <span className="reveal is-visible inline-flex w-fit items-center gap-3 rounded-full border border-line-strong bg-white px-4 py-2 text-[14px] font-semibold text-ink shadow-[0_1px_2px_rgb(30_31_43/0.05)]">
              <TierMark dots={3} className="h-4 w-auto text-ink" />
              Pricing
            </span>
            <DisplayHeading as="h1" className="text-[clamp(44px,5.6vw,80px)] leading-[1.02]">
              Pay for the front desk you <span className="text-indigo italic">need</span>
            </DisplayHeading>
            <p className="m-0 max-w-[540px] text-[clamp(18px,1.5vw,21px)] leading-relaxed text-ink-soft">
              Three plans that grow with you. Each one is set up for you and starts with a 30-day pilot measured in your own numbers.
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[16px] text-ink-soft">
              {["Set up for you, live within a day", "30-day measured pilot", "Switch plans or cancel anytime"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
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
        </section>
      </div>

      {/* 2. Plans */}
      <section id="plans" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10">
        <PlanCards highlight={picked} />
      </section>

      {/* 3. How it works: a dark band */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1B1C2E_0%,#22233A_60%,#2B2A6E_100%)] px-4 py-[clamp(72px,9vw,120px)] sm:px-10">
        <div aria-hidden="true" className="bg-dots-light absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]" />
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead dark eyebrow="How it works" title="Watch each plan serve a real customer" body="Pick a plan and see the journey play out, from first message to booked." />
          </div>
          <Reveal>
            <div className="rounded-[28px] bg-white p-[clamp(20px,3.5vw,44px)] shadow-[0_40px_100px_rgb(0_0_0/0.35)]">
              <HowItWorks />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Comparison */}
      <section id="compare" className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-12 px-4 py-[clamp(72px,9vw,120px)] sm:px-10">
        <SectionHead eyebrow="Compare plans" title="Every feature, side by side" body="Grouped so you can find what matters. Tap a group to collapse it." />
        <Reveal>
          <ComparisonTable />
        </Reveal>
      </section>

      {/* 5. Bento: usage explained + included in every plan + pilot */}
      <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10">
        <SectionHead eyebrow="No surprises" title="What counts, and what's always included" />
        <div className="grid gap-4 md:grid-cols-6">
          {usageNotes.map((u, i) => (
            <Reveal key={u.title} delay={i * 80} className="flex flex-col gap-3 rounded-[24px] border border-line bg-white p-7 md:col-span-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-indigo">
                <Icon name={u.icon} size={20} />
              </span>
              <h3 className="m-0 mt-2 text-[21px] font-semibold tracking-[-0.01em]">{u.title}</h3>
              <p className="m-0 text-[15.5px] leading-relaxed text-subtle">{u.body}</p>
              <p className="m-0 mt-auto border-t border-dashed border-line-strong pt-4 text-[14px] font-medium text-ink-soft">
                <span className="text-accent">●</span> {u.example}
              </p>
            </Reveal>
          ))}

          <Reveal className="relative isolate overflow-hidden rounded-[24px] bg-ink p-7 text-white md:col-span-3 md:row-span-2">
            <div aria-hidden="true" className="bg-dots-light absolute inset-0 -z-10 opacity-70" />
            <span className="text-sm font-semibold tracking-[0.18em] text-white/60 uppercase">The 30-day pilot</span>
            <h3 className="m-0 mt-3 font-serif text-[clamp(30px,3vw,40px)] leading-tight font-normal tracking-[-0.02em]">Prove it with your own numbers</h3>
            <ol className="relative m-0 mt-7 flex list-none flex-col gap-6 p-0">
              <span aria-hidden="true" className="absolute top-3 bottom-3 left-[11px] w-[2px] rounded-full bg-[linear-gradient(180deg,#ffb020,#6e77e6)]" />
              {pilotSteps.map((s) => (
                <li key={s.title} className="relative flex gap-4">
                  <span className="relative z-10 mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-[17px] font-semibold">{s.title}</span>
                    <span className="text-[15px] text-white/65">{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <ButtonLink href={links.demo} variant="light" className="mt-8">
              Start your pilot
            </ButtonLink>
          </Reveal>

          <Reveal className="rounded-[24px] bg-[#e9f2e3] p-5 shadow-[inset_0_0_0_1px_rgb(46_125_50/0.12)] md:col-span-3" aria-label="Sample morning report">
            <div className="flex items-center gap-3 border-b border-success/15 pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                <VegamMark size={20} strokeWidth={8} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-semibold">Vegam · Morning report</span>
                <span className="text-[13px] text-subtle">Today, 8:00 AM</span>
              </span>
            </div>
            <div className="mt-4 rounded-[16px_16px_16px_4px] bg-white p-4 text-[15px] leading-relaxed shadow-[0_2px_6px_rgb(30_31_43/0.06)]">
              <p className="m-0 font-semibold">Good morning! Here’s yesterday:</p>
              <ul className="m-0 mt-2 list-none space-y-1 p-0 text-ink-soft">
                <li>💬 14 enquiries, all replied (avg 6 sec)</li>
                <li>📅 6 bookings, 2 to confirm</li>
                <li>📞 2 missed calls, both recovered</li>
                <li>🔥 3 hot leads to call today</li>
              </ul>
              <p className="m-0 mt-3 text-[13px] text-subtle">Sample report. Your numbers will appear here.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:col-span-3">
            {everyPlan.map((e, i) => (
              <Reveal key={e.title} delay={i * 70} className="flex flex-col gap-2 rounded-[24px] border border-line bg-white p-5">
                <Icon name={e.icon} size={22} className="text-indigo" />
                <h3 className="m-0 mt-2 text-[17px] font-semibold">{e.title}</h3>
                <p className="m-0 text-[14px] leading-snug text-subtle">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ: sticky heading on the left, questions on the right */}
      <section className="mx-auto grid max-w-[1240px] gap-10 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Questions" title="Frequently asked" />
          <Reveal className="rounded-[24px] border border-line bg-white p-6">
            <p className="m-0 text-[17px] font-semibold">Still have questions?</p>
            <p className="m-0 mt-1.5 text-[15px] text-subtle">We’ll walk you through the plans in a 15-minute call.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={links.demo} size="md">
                Book a demo
              </ButtonLink>
              <ButtonLink href={links.contact} variant="light" size="md">
                Contact us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <Faq />
        </Reveal>
      </section>

      {/* 7. Help me choose: a light strip unique to this page */}
      <section className="px-4 pb-[clamp(64px,8vw,110px)] sm:px-10">
        <Reveal className="relative isolate mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 overflow-hidden rounded-[30px] border border-line bg-white p-[clamp(28px,4vw,56px)] md:flex-row md:items-center">
          <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 [mask-image:linear-gradient(90deg,transparent_30%,#000)]" />
          <div className="flex max-w-[620px] flex-col gap-3">
            <Eyebrow>Not sure yet?</Eyebrow>
            <DisplayHeading className="text-[clamp(30px,3.4vw,46px)]">We’ll help you pick the right plan</DisplayHeading>
            <p className="m-0 text-[17px] text-subtle">Tell us how customers reach you today. We’ll recommend a plan and set up your pilot.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={links.demo} size="xl">
              Book a demo
            </ButtonLink>
            <ButtonLink href="#plans" variant="light" size="xl">
              Back to plans
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
