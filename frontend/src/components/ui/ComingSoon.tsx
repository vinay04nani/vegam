import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { withBase } from "@/lib/paths";

type Props = {
  icon: IconName;
  label: string;
  body: string;
  contactTopic: string;
};

/** A plain page for routes that are not in the nav yet. */
export function ComingSoon({ icon, label, body, contactTopic }: Props) {
  return (
    <div className="relative flex min-h-svh flex-col bg-bg">
      <div aria-hidden="true" className="bg-hero pointer-events-none absolute inset-x-0 top-0 h-80" />
      <header className="relative p-5 sm:p-8">
        <a href={links.home} className="text-h2 font-bold tracking-[-0.04em] text-text">
          vegam
        </a>
      </header>
      <main className="relative flex flex-1 items-center justify-center px-4 pb-16">
        <div className="w-full max-w-[560px] rounded-xl border border-border bg-surface p-8 text-center shadow-2 sm:p-12">
          <div className="flex justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-subtle text-brand">
              <Icon name={icon} size={28} />
            </span>
          </div>
          <p className="m-0 mt-5 text-label font-semibold tracking-wide text-text-3 uppercase">{label}</p>
          <h1 className="m-0 mt-3 font-serif text-display text-text">Coming soon</h1>
          <p className="m-0 mx-auto mt-5 max-w-[420px] text-body-lg text-text-2">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={withBase(`/contact/?topic=${contactTopic}`)}>Contact us</ButtonLink>
            <ButtonLink href={links.home} variant="light">
              <Icon name="chevron-left" size={18} />
              Back to home
            </ButtonLink>
          </div>
        </div>
      </main>
    </div>
  );
}
