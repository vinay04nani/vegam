import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

// Compact form pieces for the Settings pages (smaller than the onboarding fields).

export const control =
  "min-h-10 w-full rounded-[10px] border border-line-strong bg-white px-3 text-[14.5px] text-ink outline-none transition placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10 disabled:bg-panel disabled:text-muted";

export function Label({ label, hint, children, className = "" }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
      <span className="text-[14px] font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="text-[12.5px] text-subtle">{hint}</span>}
    </label>
  );
}

export function Input(props: ComponentProps<"input">) {
  return <input {...props} className={`${control} ${props.className ?? ""}`} />;
}

export function TextArea(props: ComponentProps<"textarea">) {
  return <textarea {...props} className={`${control} py-2.5 leading-snug ${props.className ?? ""}`} />;
}

export function Dropdown({ children, className = "", ...props }: ComponentProps<"select">) {
  return (
    <span className={`relative block ${className}`}>
      <select {...props} className={`${control} cursor-pointer appearance-none pr-9`}>
        {children}
      </select>
      <Icon name="chevron-down" size={14} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-subtle" />
    </span>
  );
}

/** A bordered list of rows, e.g. team members or API keys. */
export function List({ children }: { children: ReactNode }) {
  return <ul className="m-0 flex list-none flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-line p-0">{children}</ul>;
}

/** The white card a settings page sits in. */
export function Panel({ children }: { children: ReactNode }) {
  return <div className="rounded-[20px] border border-line bg-white p-5 sm:p-7">{children}</div>;
}
