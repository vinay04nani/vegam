import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section id="demo" className="scroll-mt-20 px-3 py-16 sm:px-10 sm:py-24">
      <Reveal className="mx-auto max-w-[1240px] rounded-xl border border-border bg-surface p-1.5 shadow-2">
        <div className="bg-night relative flex flex-col items-center gap-6 rounded-lg px-5 py-16 text-center sm:py-24">
          <DisplayHeading className="max-w-[20ch] text-display-xl text-white">Your next customer is messaging you right now</DisplayHeading>
          <p className="m-0 max-w-[40rem] text-body-lg text-white/80">Book a 15-minute demo and see how Vegam would answer your customers.</p>
          <div className="flex flex-wrap justify-center gap-3">
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
