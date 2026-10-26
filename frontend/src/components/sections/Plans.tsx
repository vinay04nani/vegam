import { links, plans, type Plan } from "@/content/site";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const coverStyle: Record<Plan["style"], string> = {
  orange:
    "text-white bg-[radial-gradient(70%_80%_at_50%_40%,rgb(255_255_255/0)_30%,rgb(255_255_255/0.35)_100%),linear-gradient(170deg,#F2A65A_0%,#EE7A2E_55%,#F6C79A_100%)]",
  indigo: "text-white bg-[linear-gradient(180deg,#3B35D0_0%,#6E77E6_55%,#E9B49A_100%)]",
  light: "text-brand bg-[linear-gradient(180deg,#F7F8FE_0%,#DCE0FB_60%,#B9C2F7_100%)]",
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
              <div className={`flex h-[220px] items-center justify-center overflow-hidden rounded-[14px] ${coverStyle[p.style]}`}>
                <span className="text-[44px] font-bold tracking-[-0.02em] transition duration-500 group-hover:scale-105">{p.name}</span>
              </div>
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
