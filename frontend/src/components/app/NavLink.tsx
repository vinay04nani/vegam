"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Sections whose sub-pages keep the sidebar item highlighted. */
const SECTIONS = ["/app/conversations/", "/app/people/"];

const tidy = (path: string) => (path.endsWith("/") ? path : `${path}/`);

/** A sidebar link that marks itself as the current page. */
export default function NavLink({ href, title, children }: { href: string; title?: string; className?: string; children: ReactNode }) {
  const path = tidy(usePathname());
  const on = path === href || (SECTIONS.includes(href) && path.startsWith(href)) || (href === "/app/" && path === "/app/welcome/");
  return (
    <Link href={href} title={title} className={on ? "nv on" : "nv"} aria-current={on ? "page" : undefined}>
      {children}
    </Link>
  );
}
