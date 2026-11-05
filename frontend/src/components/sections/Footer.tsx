import { footerColumns } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="company" className="overflow-hidden border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-14 px-4 pt-20 pb-10 sm:px-10">
        <div className="flex flex-[1_1_280px] flex-col gap-3.5">
          <span className="text-[2.75rem] leading-none font-bold tracking-[-0.045em]">vegam</span>
          <span className="text-body-lg text-text-3">Every customer, answered in seconds.</span>
          <p className="m-0 mt-5 max-w-[280px] text-body leading-relaxed text-text-3">© {year} Vegam. All rights reserved.</p>
        </div>
        <div className="grid flex-[3_1_640px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-4 text-body-lg">
              <span className="text-label font-semibold tracking-wide text-text uppercase">{col.title}</span>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="text-text-2 transition hover:text-text">
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="text-outline-mark mx-auto h-[0.62em] max-w-[1320px] overflow-hidden px-4 text-center text-display-xl leading-[0.78] font-bold tracking-[-0.06em] select-none sm:px-10">
        vegam
      </div>
    </footer>
  );
}
