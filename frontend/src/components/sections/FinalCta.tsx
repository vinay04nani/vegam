import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section id="demo" className="bg-cta scroll-mt-20 px-4 py-[clamp(96px,12vw,170px)] sm:px-10">
      <Reveal className="flex flex-col items-center gap-7.5 text-center">
        <DisplayHeading className="max-w-[900px] text-[clamp(42px,5.6vw,80px)] leading-[1.04]">
          Your next customer is messaging you right now
        </DisplayHeading>
        <p className="m-0 text-xl text-ink-soft">
          Book a 15-minute demo and see how Vegam would answer your customers.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <ButtonLink href={links.demo} size="xl">
            Book a demo
          </ButtonLink>
          <ButtonLink href="#plans" variant="light" size="xl">
            See plans
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
