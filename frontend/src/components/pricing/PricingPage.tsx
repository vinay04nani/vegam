"use client";

import { useState } from "react";
import { everyPlan, pilotSteps, usageNotes, type PlanId } from "@/content/pricing";
import { links } from "@/content/site";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArtTile, FrostedIcon } from "@/components/ui/ArtTile";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading, Eyebrow } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { KolamOrnament, VegamMark } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";
import { ComparisonTable } from "./ComparisonTable";
import { Faq } from "./Faq";
import { HowItWorks } from "./HowItWorks";
import { PlanCards } from "./PlanCards";
import { PlanPicker } from "./PlanPicker";

function SectionHead({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return (
    <Reveal className="flex flex-col items-center gap-4 text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <DisplayHeading className="max-w-[820px] text-[clamp(36px,4.2vw,58px)]">{title}</DisplayHeading>
      {body && <p className="m-0 max-w-[640px] text-[clamp(17px,1.5vw,20px)] text-subtle">{body}</p>}
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
      {/* 1. Hero */}
      <div className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[clamp(620px,48vw,820px)]">
          <div className="bg-hero absolute inset-0" />
          <div className="bg-grain absolute inset-0 opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-page" />
        </div>
        <section className="mx-auto flex max-w-[920px] flex-col items-center gap-6 px-4 pt-[clamp(130px,14vw,190px)] pb-12 text-center sm:px-10">
          <div className="reveal is-visible">
            <KolamOrnament width={240} />
          </div>
          <p className="m-0 text-lg font-medium text-brand">Pricing</p>
          <DisplayHeading as="h1" className="text-[clamp(44px,6vw,84px)] leading-[1.02]">
            Simple plans for every front desk
          </DisplayHeading>
          <p className="m-0 max-w-[680px] text-[clamp(18px,1.6vw,22px)] leading-relaxed text-ink-soft">
            Start small and switch on more as you grow. Every plan is set up for you, and every pilot starts with a 30-day measured trial.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] text-muted">
            {["Set up for you", "30-day measured pilot", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon name="check" size={18} className="text-success" strokeWidth={1.8} />
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* 2. Picker */}
      <section className="mx-auto max-w-[1080px] px-4 pb-16 sm:px-10">
        <Reveal>
          <PlanPicker onPick={pick} />
        </Reveal>
      </section>

      {/* 3. Plans */}
      <section id="plans" className="mx-auto max-w-[1240px] scroll-mt-24 px-4 pt-6 pb-[clamp(64px,8vw,110px)] sm:px-10">
        <PlanCards highlight={picked} />
      </section>

      {/* 4. How it works */}
      <section className="bg-peri px-4 py-[clamp(72px,9vw,120px)] sm:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
          <SectionHead eyebrow="How it works" title="See what each plan does for a real customer" body="Pick a plan to watch a customer journey play out." />
          <Reveal>
            <div className="rounded-[26px] border border-line-strong bg-white/80 p-[clamp(20px,3.5vw,44px)] shadow-[0_30px_80px_rgb(21_16_173/0.1)] backdrop-blur">
              <HowItWorks />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Comparison */}
      <section id="compare" className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-12 px-4 py-[clamp(72px,9vw,120px)] sm:px-10">
        <SectionHead eyebrow="Compare plans" title="Every feature, side by side" body="Grouped so you can find what matters. Tap a group to collapse it." />
        <Reveal>
          <ComparisonTable />
        </Reveal>
      </section>

      {/* 6. Usage explained */}
      <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10">
        <SectionHead eyebrow="No surprises" title="How usage works" body="Plain answers to what counts, so your bill is never a mystery." />
        <div className="grid gap-5 md:grid-cols-3">
          {usageNotes.map((u, i) => (
            <Reveal key={u.title} delay={i * 90} className="flex h-full flex-col gap-4 rounded-[22px] border border-line bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-periwinkle-soft text-indigo">
                <Icon name={u.icon} size={22} />
              </span>
              <h3 className="m-0 text-[22px] font-semibold tracking-[-0.01em]">{u.title}</h3>
              <p className="m-0 text-[16px] leading-relaxed text-subtle">{u.body}</p>
              <p className="m-0 mt-auto rounded-[14px] bg-panel px-4 py-3 font-mono text-[13.5px] text-ink-soft">{u.example}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Every plan */}
      <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 pb-[clamp(72px,9vw,120px)] sm:px-10">
        <SectionHead eyebrow="Every plan" title="Included, whichever plan you choose" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
          {everyPlan.map((e, i) => (
            <Reveal key={e.title} delay={i * 80} className="group flex flex-col gap-1 rounded-[22px] border border-line bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgb(21_16_173/0.08)]">
              <ArtTile palette={e.palette} className="h-[130px] rounded-[16px]">
                <FrostedIcon name={e.icon} size={48} />
              </ArtTile>
              <h3 className="m-0 px-3 pt-4 text-[20px] font-semibold">{e.title}</h3>
              <p className="m-0 px-3 pb-3 text-[15.5px] text-subtle">{e.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. Pilot */}
      <section className="mx-auto max-w-[1240px] px-4 pb-[clamp(72px,9vw,120px)] sm:px-10">
        <Reveal className="grid items-center gap-10 rounded-[30px] border border-line bg-white p-[clamp(24px,4vw,56px)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Eyebrow>The 30-day pilot</Eyebrow>
              <DisplayHeading className="text-[clamp(32px,3.6vw,48px)]">Prove it with your own numbers</DisplayHeading>
            </div>
            <ol className="relative m-0 flex list-none flex-col gap-7 p-0">
              <span aria-hidden="true" className="absolute top-3 bottom-3 left-[11px] w-[2px] rounded-full bg-[linear-gradient(180deg,#ee7a2e,#6e77e6)]" />
              {pilotSteps.map((s) => (
                <li key={s.title} className="relative flex gap-5">
                  <span className="relative z-10 mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-white bg-ink shadow-[0_0_0_3px_rgb(238_122_46/0.25)]">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-[18px] font-semibold">{s.title}</span>
                    <span className="text-[16px] text-subtle">{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <ButtonLink href={links.demo} className="self-start">
              Start your pilot
            </ButtonLink>
          </div>
          <div aria-label="Sample morning report" className="relative rounded-[24px] bg-[#e9f2e3] p-5 shadow-[inset_0_0_0_1px_rgb(46_125_50/0.12)]">
            <div className="flex items-center gap-3 border-b border-success/15 pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                <VegamMark size={20} strokeWidth={8} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-semibold">Vegam</span>
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
          </div>
        </Reveal>
      </section>

      {/* 9. FAQ */}
      <section className="mx-auto flex max-w-[980px] flex-col gap-12 px-4 pb-[clamp(56px,7vw,90px)] sm:px-10">
        <SectionHead eyebrow="Questions" title="Frequently asked" />
        <Reveal>
          <Faq />
        </Reveal>
      </section>

      {/* 10. Final CTA */}
      <FinalCta />
    </>
  );
}
