import { links } from "@/content/site";
import { currencySymbol, plans, type PlanId } from "@/content/pricing";
import { DisplayHeading } from "@/components/ui/Heading";
import { ArtTile, type Palette } from "@/components/ui/ArtTile";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const cover: Record<PlanId, { palette: Palette; text: string }> = {
  starter: { palette: "saffron", text: "text-white" },
  growth: { palette: "indigo", text: "text-white" },
  pro: { palette: "mist", text: "text-brand" },
};

const money = (n: number, inr: boolean) => `${currencySymbol[inr ? "INR" : "USD"]}${n.toLocaleString(inr ? "en-IN" : "en-US")}`;

export function Plans() {
  return (
    <section id="plans" className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-12 px-4 py-[clamp(40px,6vw,80px)] sm:px-10">
      <Reveal className="flex flex-col items-center gap-3.5 text-center">
        <DisplayHeading className="text-[clamp(38px,4.4vw,60px)]">Simple plans</DisplayHeading>
        <p className="m-0 text-[19px] text-subtle">Start with a 30-day pilot. Switch on more as you grow.</p>
        <a href={links.pricing} className="inline-flex items-center gap-1.5 font-semibold text-indigo hover:underline hover:underline-offset-4">
          Compare plans and features
          <Icon name="chevron-right" size={18} />
        </a>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
        {plans.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <a
              href={`${links.pricing}#plan-${p.id}`}
              className="group flex h-full flex-col rounded-[20px] border border-line bg-white p-3 text-ink transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgb(21_16_173/0.12)]"
            >
              <ArtTile palette={cover[p.id].palette} className="h-[180px] rounded-[14px]">
                <span className={`text-[44px] font-bold tracking-[-0.02em] transition duration-500 group-hover:scale-105 ${cover[p.id].text}`}>
                  {p.name}
                </span>
              </ArtTile>
              <div className="flex flex-col gap-1.5 px-3.5 pt-4.5 pb-2.5">
                {p.price && (
                  <p className="m-0 flex flex-wrap items-baseline gap-x-1.5">
                    {p.from && <span className="text-base text-subtle">From</span>}
                    <span className="text-[32px] leading-none font-bold tracking-[-0.02em]">{money(p.price.INR.monthly, true)}</span>
                    <span className="text-base text-subtle">/ month · {money(p.price.USD.monthly, false)} outside India</span>
                  </p>
                )}
                <div className="mt-2 flex items-center justify-between text-[19px] font-medium">
                  <span>{p.promise}</span>
                  <Icon
                    name="arrow"
                    size={20}
                    strokeWidth={1.8}
                    className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <span className="text-base text-subtle">{p.highlights.slice(0, 3).join(" · ")}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
