"use client";

import { useEffect, useState } from "react";
import { links, navLinks } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line/80 bg-page/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-10 ${
          solid ? "py-3" : "py-5"
        }`}
      >
        <a href="/#top" aria-label="Vegam home" className="text-[34px] leading-none font-extrabold tracking-[-0.045em] text-ink">
          vegam
        </a>

        <div className="hidden items-center gap-9 text-[17px] font-medium md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-ink">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <a href={links.login} className="px-3 text-[16px] font-semibold text-ink hover:underline hover:underline-offset-4">
            Log in
          </a>
          <ButtonLink href={links.contact} variant="light" size="md">
            Contact us
          </ButtonLink>
          <ButtonLink href={links.demo} size="md">
            Book a demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-[0_1px_2px_rgb(30_31_43/0.08)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-2.5">
            <ButtonLink href={links.demo} block onClick={() => setOpen(false)}>
              Book a demo
            </ButtonLink>
            <ButtonLink href={links.contact} variant="light" block onClick={() => setOpen(false)}>
              Contact us
            </ButtonLink>
            <ButtonLink href={links.login} variant="light" block onClick={() => setOpen(false)}>
              Log in
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
