import { links, primaryFeatures, secondaryFeatures, type Feature } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ChatDemo } from "./ChatDemo";

const iconStyle: Record<Feature["icon"], string> = {
  message: "bg-periwinkle text-white",
  phone: "bg-[#FFF2DC] text-[#C26A00]",
  missed: "bg-[#FDECEC] text-danger",
  calendar: "bg-[#E8F3EA] text-success",
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
          <ButtonLink href={links.whatsappDemo} size="xl" block className="mt-auto">
            Try the live demo on WhatsApp
          </ButtonLink>
        </Reveal>

        <div className="grid min-w-0 flex-[1_1_560px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {primaryFeatures.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className={`${card} relative flex min-h-[260px] flex-col gap-3 overflow-hidden px-9 py-10 ${i === 0 ? "border-periwinkle-line" : ""}`}
            >
              {i === 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-10 -right-10 h-[150px] w-[150px] animate-float rounded-full bg-[radial-gradient(circle_at_70%_30%,#9FAAF5_0%,#C9CFF8_35%,rgb(255_176_32/0.9)_62%,rgb(255_176_32/0)_72%)]"
                />
              )}
              <span aria-hidden="true" className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${iconStyle[f.icon]}`}>
                <Icon name={f.icon} />
              </span>
              <h3 className="m-0 mt-auto text-2xl font-semibold tracking-[-0.01em]">{f.title}</h3>
              <p className="m-0 text-[17px] text-subtle">{f.body}</p>
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
