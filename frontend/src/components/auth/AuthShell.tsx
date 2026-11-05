import type { ReactNode } from "react";
import { authHighlights, channels, links } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

/** Split screen for log in and sign up: an indigo panel on the left, the form on the right. */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-bg p-0 lg:p-2.5">
      <div className="flex min-h-svh overflow-hidden bg-surface lg:min-h-[calc(100svh-20px)] lg:rounded-xl lg:border lg:border-border">
        <aside className="bg-night relative hidden w-1/2 overflow-hidden text-white lg:block">
          <div className="relative flex h-full items-center justify-center p-10">
            <div className="w-full max-w-[540px]">
              <p className="m-0 text-h1 leading-tight text-white">The AI front desk for every business</p>
              <ul className="m-0 mt-8 flex list-none flex-col gap-6 p-0">
                {authHighlights.map((h) => (
                  <li key={h.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white/15">
                      <Icon name={h.icon} size={22} />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-body-lg font-semibold">{h.title}</span>
                      <span className="text-body leading-snug text-white/75">{h.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="m-0 mt-9 text-label text-white/60">Works where your customers already are</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {channels.map((c) => (
                  <span key={c.name} className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-label text-white/80">
                    <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="relative flex flex-1 flex-col">
          <a href={links.home} className="absolute top-6 start-6 text-h2 font-bold tracking-[-0.045em] text-text">
            vegam
          </a>
          <div className="flex flex-1 items-center justify-center px-5 pt-24 pb-12 lg:py-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
