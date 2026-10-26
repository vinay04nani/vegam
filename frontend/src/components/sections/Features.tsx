import { links, primaryFeatures, secondaryFeatures, type Feature } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { ArtTile, FrostedIcon, type Palette } from "@/components/ui/ArtTile";
import { Reveal } from "@/components/ui/Reveal";
import { ChatDemo } from "./ChatDemo";

const tilePalette: Record<Feature["icon"], Palette> = {
  message: "periwinkle",
  phone: "saffron",
  missed: "rose",
  calendar: "leaf",
};

const card = "rounded-[22px] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgb(21_16_173/0.08)]";

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto flex max-w-[1240px] scroll-mt-20 flex-col gap-14 px-4 pt-[clamp(80px,10vw,140px)] pb-[clamp(64px,8vw,110px)] sm:px-10"
    >
      <Reveal className="flex flex-col items-center gap-4.5 text-center">
        <DisplayHeading className="max-w-[720px] text-[clamp(40px,4.6vw,64px)]">
          Everything your front desk does, done for you
        </DisplayHeading>
        <p className="m-0 text-xl text-subtle">One assistant for every message, call and booking.</p>
      </Reveal>

      <div className="flex flex-wrap items-stretch gap-4">
        <Reveal className="flex min-w-0 flex-[1_1_460px] flex-col gap-8 rounded-[22px] border border-line bg-[linear-gradient(to_bottom,#FFFFFF_70%,#F1F2FC_100%)] px-[clamp(20px,3vw,56px)] py-[clamp(24px,4vw,56px)]">
          <h3 className="m-0 font-serif text-[clamp(32px,3vw,42px)] leading-tight font-normal tracking-[-0.02em]">
            Answer <span className="text-indigo">every channel</span>
            <br />
            from one place
          </h3>
          <ChatDemo />
          <ButtonLink href={links.demo} size="xl" block className="mt-auto">
            Book a demo
          </ButtonLink>
        </Reveal>

        <div className="grid min-w-0 flex-[1_1_560px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {primaryFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className={`${card} group flex flex-col gap-1 p-3`}>
              <ArtTile palette={tilePalette[f.icon]} className="h-[150px] rounded-[16px]">
                <FrostedIcon name={f.icon} size={54} />
              </ArtTile>
              <h3 className="m-0 px-4 pt-4 text-2xl font-semibold tracking-[-0.01em]">{f.title}</h3>
              <p className="m-0 px-4 pb-4 text-[17px] text-subtle">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid flex-[1_1_100%] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {secondaryFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className={`${card} flex flex-col gap-2 px-9 py-8`}>
              <h3 className="m-0 text-2xl font-semibold">{f.title}</h3>
              <p className="m-0 text-[17px] text-subtle">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
