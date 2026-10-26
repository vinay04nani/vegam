import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { withBase } from "@/lib/paths";
import { PixelBackdrop } from "./PixelBackdrop";
import type { SceneName } from "./scenes";

type Props = {
  scene: SceneName;
  icon: IconName;
  label: string;
  body: string;
  contactTopic: string;
};

/** A "coming soon" page: a pixel scene with a frosted card on top. */
export function ComingSoon({ scene, icon, label, body, contactTopic }: Props) {
  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <PixelBackdrop scene={scene} className="absolute inset-0 -z-10" />
      <div className="bg-grain absolute inset-0 -z-10 opacity-40" />

      <header className="p-5 sm:p-8">
        <a
          href={links.home}
          className="inline-flex rounded-full bg-white/90 px-5 py-2.5 text-[24px] leading-none font-extrabold tracking-[-0.045em] text-ink shadow-[0_8px_24px_rgb(14_11_61/0.2)] backdrop-blur"
        >
          vegam
        </a>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 pb-16">
        <div className="reveal is-visible w-full max-w-[560px] rounded-[28px] bg-white/92 p-[clamp(28px,5vw,52px)] text-center shadow-[0_30px_80px_rgb(14_11_61/0.3)] backdrop-blur">
          <div className="flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-periwinkle-soft text-indigo">
              <Icon name={icon} size={30} />
            </span>
          </div>
          <p className="m-0 mt-5 text-sm font-semibold tracking-[0.2em] text-muted uppercase">{label}</p>
          <h1 className="m-0 mt-3 font-serif text-[clamp(44px,6vw,68px)] leading-none font-normal tracking-[-0.03em] text-ink">Coming soon</h1>
          <p className="m-0 mx-auto mt-5 max-w-[420px] text-[17px] leading-relaxed text-subtle">{body}</p>
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
