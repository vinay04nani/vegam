import { links, trustPoints } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Trust() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-16 px-4 py-[clamp(72px,9vw,120px)] sm:px-10">
      <Reveal>
        <DisplayHeading className="text-center text-[clamp(38px,4.4vw,60px)]">
          Built to be trusted with your customers
        </DisplayHeading>
      </Reveal>
      <div className="flex flex-wrap items-center gap-[clamp(32px,6vw,96px)]">
        <Reveal
          className="relative h-[clamp(360px,45vw,560px)] min-w-0 flex-[1_1_420px] overflow-hidden rounded-[22px] border border-periwinkle-line bg-[linear-gradient(160deg,#A6B0F5_0%,#DCE0FB_45%,#EEF0FD_60%,#B3BCF6_100%)]"
        >
          <div aria-hidden="true">
            <span className="absolute -bottom-[260px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-periwinkle/28" />
            <span className="absolute -bottom-[170px] left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-periwinkle/32" />
            <span className="absolute -bottom-[90px] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-periwinkle/42" />
            <span className="absolute top-[22%] left-1/2 h-[150px] w-[150px] -translate-x-1/2 rounded-full border-2 border-white" />
            <span className="absolute top-[calc(22%+30px)] left-1/2 h-[90px] w-[90px] -translate-x-1/2 rounded-full border-2 border-white" />
            <span className="absolute top-[calc(22%+58px)] left-1/2 h-[34px] w-[34px] -translate-x-1/2 animate-glow rounded-full bg-accent" />
          </div>
        </Reveal>
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-10">
          {trustPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="flex gap-5">
              <Icon name="sparkle" size={30} className="mt-0.5 flex-none text-[#F2A33A]" />
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-[28px] font-medium tracking-[-0.015em]">{p.title}</h3>
                <p className="m-0 text-[19px] text-subtle">{p.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <ButtonLink href={links.demo} size="xl" block className="min-h-16">
              Get started
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
