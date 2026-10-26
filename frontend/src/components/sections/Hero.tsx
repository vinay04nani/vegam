import { channels, links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { PulseOrnament } from "@/components/ui/Ornament";

function Rule() {
  return (
    <span
      aria-hidden="true"
      className="h-px w-80 max-w-[70vw] bg-[linear-gradient(90deg,rgb(21_16_173/0),rgb(21_16_173/0.45),rgb(21_16_173/0))]"
    />
  );
}

export function Hero() {
  return (
    <div className="bg-hero relative">
      <section
        id="top"
        className="mx-auto flex max-w-[1000px] flex-col items-center gap-7 px-4 pt-[clamp(140px,16vw,220px)] pb-[clamp(64px,8vw,110px)] text-center sm:px-10"
      >
        <div className="reveal is-visible">
          <PulseOrnament />
        </div>
        <div className="flex flex-col items-center">
          <Rule />
          <p className="m-0 py-3 text-xl font-medium text-brand">The AI front desk for every business</p>
          <Rule />
        </div>
        <DisplayHeading as="h1" className="text-[clamp(46px,6.4vw,92px)] leading-[1.02]">
          Every customer, answered in seconds
        </DisplayHeading>
        <p className="m-0 max-w-[760px] text-[clamp(18px,1.7vw,23px)] leading-relaxed text-ink-soft">
          Vegam replies on WhatsApp, Instagram and your website, answers your calls and books appointments. Day and
          night, in your customers&apos; language.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3.5">
          <ButtonLink href={links.demo} size="xl">
            Book a demo
          </ButtonLink>
          <ButtonLink href="#product" variant="light" size="xl">
            See how it works
          </ButtonLink>
        </div>
        <p className="m-0 text-[15px] text-muted">No new app to learn · Your team can take over any chat, any time</p>
      </section>

      <section className="flex flex-col items-center gap-7 pt-6 pb-18">
        <p className="m-0 px-4 text-center text-sm font-semibold tracking-[0.18em] text-muted uppercase">
          Works where your customers already are
        </p>
        <div className="mask-fade-x w-full overflow-hidden">
          <ul className="m-0 flex w-max animate-marquee list-none gap-18 p-0 hover:[animation-play-state:paused]">
            {[...channels, ...channels].map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                aria-hidden={i >= channels.length}
                className="flex items-center gap-3 text-[26px] font-bold tracking-[-0.02em] whitespace-nowrap text-faint"
              >
                <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full" style={{ background: c.color }} />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
