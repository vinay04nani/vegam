import { companyLegalName, footerColumns, socials } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="company" className="overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_0%,#F4F4F7_100%)]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-14 px-4 pt-20 pb-10 sm:px-10">
        <div className="flex flex-[1_1_280px] flex-col gap-3.5">
          <span className="text-[52px] leading-none font-extrabold tracking-[-0.045em]">vegam</span>
          <span className="text-base text-subtle">Every customer, answered in seconds.</span>
          <span className="mt-7 text-[15px] text-subtle">Find us at</span>
          <div className="flex gap-3.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition hover:bg-white hover:text-ink hover:shadow-[0_4px_14px_rgb(30_31_43/0.08)]"
              >
                <Icon name={s.icon} size={s.icon === "x" ? 20 : 24} strokeWidth={1.8} />
              </a>
            ))}
          </div>
          <div className="mt-5 max-w-[260px] border border-line-strong p-4.5 text-[15px] leading-relaxed text-subtle">
            © {year} {companyLegalName}. All rights reserved.
            <br />
            <br />
            Built in Visakhapatnam, India, for businesses everywhere.
          </div>
        </div>
        <div className="grid flex-[3_1_640px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-4.5 text-lg">
              <span className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">{col.title}</span>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="text-muted transition hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="text-giant mx-auto h-[0.62em] max-w-[1320px] overflow-hidden px-4 text-center text-[clamp(120px,27vw,420px)] leading-[0.78] font-extrabold tracking-[-0.06em] select-none sm:px-10"
      >
        vegam
      </div>
    </footer>
  );
}
