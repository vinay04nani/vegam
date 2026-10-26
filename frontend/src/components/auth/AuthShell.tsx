import type { ReactNode } from "react";
import { authHighlights, channels, links } from "@/content/site";
import { PixelIcon } from "./PixelIcon";
import { PixelBackdrop } from "@/components/pixel/PixelBackdrop";

/** Split screen for log in and sign up: pixel coast and product card on the left, form on the right. */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-page p-0 lg:p-2.5">
      <div className="flex min-h-svh overflow-hidden bg-white lg:min-h-[calc(100svh-20px)] lg:rounded-[22px] lg:border lg:border-line">
        <aside className="relative hidden w-1/2 overflow-hidden lg:block">
          <PixelBackdrop scene="coast" className="absolute inset-0" />
          <div className="bg-grain absolute inset-0 opacity-40" />
          <div className="relative flex h-full items-center justify-center p-[clamp(24px,4vw,64px)]">
            <div className="w-full max-w-[540px] rounded-[28px] bg-white/95 p-[clamp(28px,3vw,44px)] shadow-[0_30px_80px_rgb(14_11_61/0.25)] backdrop-blur">
              <p className="m-0 font-serif text-[30px] leading-tight tracking-[-0.02em]">The AI front desk for every business</p>
              <ul className="m-0 mt-8 flex list-none flex-col gap-6 p-0">
                {authHighlights.map((h) => (
                  <li key={h.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex-none">
                      <PixelIcon name={h.icon} size={38} />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-[17px] font-semibold">{h.title}</span>
                      <span className="text-[15px] leading-snug text-subtle">{h.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="m-0 mt-9 text-sm text-faint">Works where your customers already are</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {channels.map((c) => (
                  <span key={c.name} className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-muted">
                    <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="relative flex flex-1 flex-col">
          <a href={links.home} className="absolute top-6 left-6 text-[28px] leading-none font-extrabold tracking-[-0.045em] text-ink">
            vegam
          </a>
          <div className="flex flex-1 items-center justify-center px-5 pt-24 pb-12 lg:py-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
