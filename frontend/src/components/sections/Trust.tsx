import { links, trustPoints } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const icons = ["check", "shield", "users"] as const;

export function Trust() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <DisplayHeading className="text-center text-display-xl">Built to be trusted with your customers</DisplayHeading>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {trustPoints.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 shadow-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-subtle text-brand">
              <Icon name={icons[i]} size={20} />
            </span>
            <h3 className="m-0 text-h2">{p.title}</h3>
            <p className="m-0 text-body-lg text-text-2">{p.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="flex justify-center">
        <ButtonLink href={links.demo} size="xl">
          Get started
        </ButtonLink>
      </Reveal>
    </section>
  );
}
