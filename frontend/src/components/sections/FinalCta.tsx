import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { CircleLattice, VegamMark } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section id="demo" className="scroll-mt-20 px-3 py-[clamp(48px,7vw,100px)] sm:px-10">
      <Reveal className="mx-auto max-w-[1240px] rounded-[30px] border border-line-strong bg-white p-1.5 shadow-[0_30px_80px_rgb(21_16_173/0.12)]">
        <div className="bg-banner relative isolate flex flex-col items-center gap-7 overflow-hidden rounded-[24px] px-5 pt-[clamp(64px,8vw,110px)] pb-[clamp(48px,6vw,80px)] text-center">
          <CircleLattice className="absolute inset-x-0 bottom-0 -z-10 h-[78%] w-full" />
          <div className="bg-grain absolute inset-0 -z-10 opacity-90" />
          <DisplayHeading className="max-w-[860px] text-[clamp(38px,5vw,72px)] leading-[1.06] text-white">
            Your next customer is messaging you right now
          </DisplayHeading>
          <p className="m-0 max-w-[620px] text-[clamp(17px,1.5vw,20px)] text-white/75">
            Book a 15-minute demo and see how Vegam would answer your customers.
          </p>
          <span className="frosted mt-[clamp(24px,4vw,56px)] animate-float">
            <VegamMark size={68} strokeWidth={7} />
          </span>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={links.demo} size="xl">
              Book a demo
            </ButtonLink>
            <ButtonLink href="#plans" variant="glass" size="xl">
              See plans
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
