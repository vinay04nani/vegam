import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

// Form pieces shared by the wizard steps, in the same style as the contact form.

export const inputClass =
  "min-h-13 w-full rounded-lg border border-line-strong bg-surface px-4 text-base text-ink outline-none transition placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10";

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-body font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="text-label text-subtle">{hint}</span>}
    </label>
  );
}

export function TextInput(props: ComponentProps<"input">) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Select({ children, ...props }: ComponentProps<"select">) {
  return (
    <span className="relative block">
      <select {...props} className={`${inputClass} cursor-pointer appearance-none pe-10`}>
        {children}
      </select>
      <Icon name="chevron-down" size={16} className="pointer-events-none absolute top-1/2 end-4 -translate-y-1/2 text-subtle" />
    </span>
  );
}

/** Pill buttons for picking one option, or several when `multi`. */
export function Choices<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T[];
  onChange: (id: T) => void;
}) {
  return (
    <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
      <legend className="mb-2 p-0 text-body font-semibold text-ink">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value.includes(o.id);
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.id)}
              className={`min-h-10 cursor-pointer rounded-full border px-4 text-body font-medium transition ${
                on ? "border-ink bg-brand-fill text-white" : "border-line-strong bg-surface text-ink hover:border-subtle"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function PrimaryButton({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-fill px-7 text-body-lg font-semibold text-white shadow-1 transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-border disabled:text-muted disabled:shadow-none ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-5 text-body font-semibold text-ink transition hover:border-subtle disabled:cursor-wait disabled:opacity-60 ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function StatusPill({ tone, children }: { tone: "done" | "wait" | "off" | "lock"; children: ReactNode }) {
  const styles = {
    done: "bg-success-subtle text-success",
    wait: "bg-signal/15 text-warning",
    off: "bg-panel text-muted",
    lock: "bg-periwinkle-soft text-brand",
  }[tone];
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-caption font-semibold whitespace-nowrap ${styles}`}>{children}</span>;
}
