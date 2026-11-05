import { languageBubbles, links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export function Languages() {
  return (
    <section className="relative mx-auto max-w-[1340px] px-4 py-[clamp(40px,6vw,80px)] sm:px-10">
      <div className="flex flex-wrap items-stretch gap-4">
        <Reveal className="flex min-w-0 flex-[1_1_380px] flex-col gap-5.5 rounded-xl border border-line bg-surface p-[clamp(28px,4vw,52px)]">
          <DisplayHeading className="text-display-xl leading-[1.04]">
            Any business.
            <br />
            Any language.
          </DisplayHeading>
          <p className="m-0 text-h3 leading-[1.7] text-muted">
            From a two-person shop to a team with ten branches, Vegam learns your services, prices and words, then
            answers each customer in the language they write in, wherever they are.
          </p>
          <ButtonLink href={links.demo} className="mt-auto self-start">
            Explore Vegam
          </ButtonLink>
        </Reveal>

        <Reveal
          delay={120}
          className="relative min-h-[520px] min-w-0 flex-[2_1_560px] overflow-hidden rounded-xl border border-line bg-languages"
        >
          <div
            role="img"
            aria-label="Customer messages in Spanish, French, Hindi, Japanese, Arabic and Portuguese gathering around Vegam, which replied in 4 seconds"
            className="absolute inset-0"
          >
            <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-[360px] w-[360px] -translate-1/2 rounded-full border border-brand/12" />
            <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-[220px] w-[220px] -translate-1/2 rounded-full border border-brand/16" />
            <span aria-hidden="true" className="animate-live absolute top-1/2 left-1/2 h-16 w-16 -translate-1/2 rounded-full bg-signal" />
            <span
              aria-hidden="true"
              className="absolute top-[calc(50%+56px)] left-1/2 -translate-x-1/2 rounded-full bg-surface px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap shadow-1"
            >
              Replied in 4 sec
            </span>
            {languageBubbles.map((b, i) => (
              <span
                key={b.lang}
                lang={b.lang}
                dir={b.lang === "ar" ? "rtl" : undefined}
                aria-hidden="true"
                className={`absolute ${b.pos} ${b.mobile ? "" : "hidden sm:block"} bg-surface px-3.5 py-2 text-sm whitespace-nowrap shadow-2 sm:px-4 sm:py-2.5 sm:text-base ${
                  b.side === "left" ? "rounded-[16px_16px_16px_4px]" : "rounded-[16px_16px_4px_16px]"
                }`}
                style={{ animationDelay: `${i * -0.9}s` }}
              >
                {b.text}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
