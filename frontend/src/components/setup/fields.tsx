import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

// Form pieces shared by the wizard steps, in the same style as the contact form.

export const inputClass =
  "min-h-13 w-full rounded-[14px] border border-line-strong bg-white px-4 text-base text-ink outline-none transition placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10";

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="text-[13.5px] text-subtle">{hint}</span>}
    </label>
  );
}

export function TextInput(props: ComponentProps<"input">) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Select({ children, ...props }: ComponentProps<"select">) {
  return (
    <span className="relative block">
      <select {...props} className={`${inputClass} cursor-pointer appearance-none pr-10`}>
        {children}
      </select>
      <Icon name="chevron-down" size={16} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle" />
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
      <legend className="mb-2 p-0 text-[15px] font-semibold text-ink">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value.includes(o.id);
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.id)}
              className={`min-h-10 cursor-pointer rounded-full border px-4 text-[14.5px] font-medium transition ${
                on ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:border-subtle"
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
      className={`inline-flex min-h-13 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(180deg,#3A3C58_0%,#22233A_55%,#1C1D2E_100%)] px-7 text-[17px] font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.16)] transition hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_12px_30px_rgb(30_31_43/0.25)] disabled:cursor-not-allowed disabled:border-transparent disabled:bg-none disabled:bg-[#E4E6F0] disabled:text-muted disabled:shadow-none ${props.className ?? ""}`}
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
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-5 text-[15px] font-semibold text-ink transition hover:border-subtle disabled:cursor-wait disabled:opacity-60 ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function StatusPill({ tone, children }: { tone: "done" | "wait" | "off" | "lock"; children: ReactNode }) {
  const styles = {
    done: "bg-[#E8F3EA] text-success",
    wait: "bg-[#FFF3E6] text-warning",
    off: "bg-panel text-muted",
    lock: "bg-periwinkle-soft text-brand",
  }[tone];
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12.5px] font-semibold whitespace-nowrap ${styles}`}>{children}</span>;
}
