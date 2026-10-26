import { links, plans, type Plan } from "@/content/site";
import { DisplayHeading } from "@/components/ui/Heading";
import { ArtTile, type Palette } from "@/components/ui/ArtTile";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const cover: Record<Plan["style"], { palette: Palette; text: string }> = {
  orange: { palette: "saffron", text: "text-white" },
  indigo: { palette: "indigo", text: "text-white" },
  light: { palette: "mist", text: "text-brand" },
};

export function Plans() {
  return (
    <section id="plans" className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-12 px-4 py-[clamp(40px,6vw,80px)] sm:px-10">
      <Reveal className="flex flex-col items-center gap-3.5 text-center">
        <DisplayHeading className="text-[clamp(38px,4.4vw,60px)]">Simple plans</DisplayHeading>
        <p className="m-0 text-[19px] text-subtle">Start small. Switch on more as you grow.</p>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <a
              href={links.demo}
              className="group flex h-full flex-col rounded-[20px] border border-line bg-white p-3 text-ink transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgb(21_16_173/0.12)]"
            >
              <ArtTile palette={cover[p.style].palette} className="h-[220px] rounded-[14px]">
                <span className={`text-[44px] font-bold tracking-[-0.02em] transition duration-500 group-hover:scale-105 ${cover[p.style].text}`}>
                  {p.name}
                </span>
              </ArtTile>
              <div className="flex flex-col gap-1.5 px-3.5 pt-4.5 pb-2.5">
                <div className="flex items-center justify-between text-[21px] font-medium">
                  <span>{p.price}</span>
                  <Icon
                    name="arrow"
                    size={20}
                    strokeWidth={1.8}
                    className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <span className="text-base text-subtle">{p.description}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
