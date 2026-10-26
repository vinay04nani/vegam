import type { ReactNode } from "react";

/** Large serif section heading in the Vegam style. */
export function DisplayHeading({
  as: Tag = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`m-0 font-serif font-normal leading-[1.05] tracking-[-0.035em] text-ink ${className}`}>{children}</Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`m-0 text-sm font-semibold uppercase tracking-[0.2em] text-muted ${className}`}>{children}</p>
  );
}
