import { links } from "@/content/site";
import { DisplayHeading } from "@/components/ui/Heading";
import { ArtTile } from "@/components/ui/ArtTile";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

function Card({
  href,
  meta,
  title,
  delay,
  children,
}: {
  href: string;
  meta: string;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal delay={delay}>
      <a href={href} className="group flex flex-col gap-4 text-ink">
        <div
          aria-hidden="true"
          className="relative h-[270px] overflow-hidden rounded-[14px] border border-line transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgb(21_16_173/0.12)]"
        >
          {children}
        </div>
        <span className="text-[15px] text-subtle">{meta}</span>
        <span className="-mt-1.5 text-[22px] font-medium group-hover:underline group-hover:underline-offset-4">{title}</span>
      </a>
    </Reveal>
  );
}

export function SeeItInAction() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 py-[clamp(56px,7vw,100px)] sm:px-10">
      <Reveal>
        <DisplayHeading className="text-center text-[clamp(38px,4.4vw,60px)]">See it in action</DisplayHeading>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-9">
        <Card href={links.sampleCall} meta="2 min · Audio and transcript" title="Hear Vegam take a real booking call" delay={0}>
          <div className="absolute inset-0 isolate bg-white">
            <div className="bg-grain absolute inset-0 z-10 opacity-50" />
            <span className="absolute top-7.5 left-8 text-[34px] font-semibold tracking-[-0.02em]">Sample call</span>
            <span className="absolute bottom-12.5 left-5.5 h-[90px] w-[90px] rounded-full bg-[#2B27C4] transition duration-500 group-hover:-translate-y-2" />
            <span className="absolute bottom-6.5 left-[120px] h-[58px] w-[58px] rounded-full bg-[#FF5C8A] transition duration-500 group-hover:translate-x-2" />
            <span className="absolute -bottom-[120px] left-1/2 -ml-[110px] h-[260px] w-[260px] rounded-full bg-[#2BB673]" />
            <span className="absolute top-[90px] right-[70px] h-[50px] w-[50px] rounded-full bg-accent transition duration-500 group-hover:-translate-y-2" />
            <span className="absolute -right-5 -bottom-2.5 h-[130px] w-[130px] rounded-full bg-[#8B6CFF]" />
            <span className="absolute top-1/2 left-1/2 -mt-5 -ml-8 flex h-16 w-16 items-center justify-center rounded-full bg-ink/75 text-white transition duration-300 group-hover:scale-110">
              <Icon name="play" />
            </span>
          </div>
        </Card>
        <Card href={links.demo} meta="15 minutes · Video call" title="Book a demo and see Vegam set up for your business" delay={90}>
          <ArtTile palette="indigo" className="h-full">
            <span className="font-serif text-[52px] tracking-[-0.03em] text-white transition duration-500 group-hover:scale-105">Live demo</span>
          </ArtTile>
        </Card>
        <Card href={links.sampleReport} meta="Sample · Sent daily at 8 AM" title="See what lands on your phone each morning" delay={180}>
          <ArtTile palette="saffron" className="h-full text-center">
            <span className="text-[46px] leading-[1.08] font-bold tracking-[-0.02em] text-white transition duration-500 group-hover:scale-105">
              Morning
              <br />
              report
            </span>
          </ArtTile>
        </Card>
      </div>
    </section>
  );
}
