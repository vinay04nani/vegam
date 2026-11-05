"use client";

import { links } from "@/content/site";
import { plans } from "@/content/pricing";
import { useLocale } from "@/components/LocaleProvider";
import { ArtTile } from "@/components/ui/ArtTile";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { formatMoney, taxNote } from "@/lib/locale";

export function Plans() {
  const locale = useLocale();
  return (
    <section id="plans" className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-12 px-4 py-16 sm:px-10 sm:py-24">
      <Reveal className="flex flex-col items-center gap-3.5 text-center">
        <DisplayHeading className="text-display-xl">Simple plans</DisplayHeading>
        <p className="m-0 text-h3 font-normal text-text-3">Start with a 30-day pilot. Switch on more as you grow.</p>
        <a href={links.pricing} className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline hover:underline-offset-4">
          Compare plans and features
          <Icon name="chevron-right" size={18} />
        </a>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
        {plans.map((p, i) => {
          const amount = p.price?.[locale.currency].monthly;
          return (
            <Reveal key={p.id} delay={i * 90}>
              <a
                href={`${links.pricing}#plan-${p.id}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-3 text-text shadow-1 transition duration-150 hover:shadow-2"
              >
                <ArtTile className="h-[160px] rounded-lg">
                  <span className="font-serif text-display tracking-[-0.02em] text-brand">{p.name}</span>
                </ArtTile>
                <div className="flex flex-col gap-1.5 px-3.5 pt-4 pb-2.5">
                  {amount !== undefined && (
                    <p className="m-0 flex flex-wrap items-baseline gap-x-1.5">
                      {p.from && <span className="text-body-lg text-text-3">From</span>}
                      <span className="text-h1 font-semibold tracking-[-0.02em] tabular-nums">{formatMoney(amount, locale.currency, locale.locale)}</span>
                      <span className="text-body-lg text-text-3">/ month · {taxNote(locale.region)}</span>
                    </p>
                  )}
                  <div className="mt-2 flex items-center justify-between text-h3 font-medium">
                    <span className="text-text">{p.promise}</span>
                    <Icon name="arrow" size={20} className="text-brand" />
                  </div>
                  <span className="text-body-lg text-text-3">{p.highlights.slice(0, 3).join(" · ")}</span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
