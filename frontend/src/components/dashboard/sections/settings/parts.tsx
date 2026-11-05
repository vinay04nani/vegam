import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

// Building blocks for the settings dialog, in the style of Claude's and
// ChatGPT's settings: small group headings and flat rows (name and a line of
// help on the left, the control on the right) divided by thin lines. No
// cards inside cards. Changes apply straight away.

export const control =
  "h-9 rounded-md border border-line-strong bg-surface px-3 text-body text-ink outline-none transition placeholder:text-faint focus:border-indigo focus:ring-3 focus:ring-indigo/10 disabled:bg-panel disabled:text-muted";

/** Full width unless the caller sets a width (e.g. "w-64"). */
const width = (cls = "") => (/(^|\s)w-/.test(cls) ? cls : `w-full ${cls}`);

/** A titled group of rows. `action` sits on the right of the heading (e.g. "Invite"). */
export function Group({ title, description, action, children }: { title?: string; description?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <section aria-label={title} className="mt-9 first:mt-0">
      {(title || action) && (
        <div className="mb-1 flex items-end justify-between gap-4 border-b border-line pb-2.5">
          <div className="min-w-0">
            {title && <h3 className="m-0 text-body font-semibold text-ink">{title}</h3>}
            {description && <p className="m-0 mt-0.5 text-label leading-snug text-subtle">{description}</p>}
          </div>
          {action && <div className="flex flex-none items-center gap-2">{action}</div>}
        </div>
      )}
      <div className="divide-y divide-line">{children}</div>
    </section>
  );
}

/** One setting. `stacked` puts a wide control (text area, list) under the label. */
export function Row({ label, description, children, stacked = false }: { label: ReactNode; description?: ReactNode; children?: ReactNode; stacked?: boolean }) {
  return (
    <div className={stacked ? "flex flex-col gap-2.5 py-4" : "flex flex-wrap items-center justify-between gap-x-6 gap-y-2.5 py-4"}>
      <div className={stacked ? "min-w-0" : "min-w-0 flex-1 basis-[220px]"}>
        <div className="text-body leading-snug text-ink">{label}</div>
        {description && <div className="mt-0.5 text-label leading-snug text-subtle">{description}</div>}
      </div>
      {children && <div className={stacked ? "" : "flex flex-none items-center gap-2"}>{children}</div>}
    </div>
  );
}

export function Input(props: ComponentProps<"input">) {
  return <input {...props} className={`${control} ${width(props.className)}`} />;
}

export function TextArea(props: ComponentProps<"textarea">) {
  return <textarea {...props} className={`${control} h-auto py-2 leading-snug ${width(props.className)}`} />;
}

export function Dropdown({ children, className = "", ...props }: ComponentProps<"select">) {
  return (
    <span className={`relative block ${width(className)}`}>
      <select {...props} className={`${control} w-full cursor-pointer appearance-none pe-8`}>
        {children}
      </select>
      <Icon name="chevron-down" size={14} className="pointer-events-none absolute top-1/2 end-2.5 -translate-y-1/2 text-subtle" />
    </span>
  );
}

/** A bare on/off switch; `label` is read by screen readers. */
export function Switch({ checked, onChange, label, disabled }: { checked: boolean; onChange: (v: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <label className={`relative inline-flex flex-none ${disabled ? "opacity-60" : "cursor-pointer"}`}>
      <span className="sr-only">{label}</span>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" />
      <span className="block h-[22px] w-[38px] rounded-full bg-line-strong transition peer-checked:bg-brand-fill peer-focus-visible:ring-2 peer-focus-visible:ring-indigo peer-focus-visible:ring-offset-2" />
      <span className="absolute top-[3px] start-[3px] h-4 w-4 rounded-full bg-surface shadow-1 transition peer-checked:translate-x-4" />
    </label>
  );
}

/** Small button used inside rows. */
export function RowButton({ children, onClick, tone = "default", ariaLabel, icon }: { children: ReactNode; onClick: () => void; tone?: "default" | "primary" | "danger"; ariaLabel?: string; icon?: IconName }) {
  const styles = {
    default: "border border-line-strong bg-surface text-ink hover:bg-panel",
    primary: "bg-brand-fill text-white hover:bg-brand-hover",
    danger: "border border-danger/40 bg-surface text-danger hover:bg-danger-subtle",
  }[tone];
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={`inline-flex h-8 flex-none cursor-pointer items-center gap-1.5 rounded-md px-3 text-label font-medium whitespace-nowrap transition ${styles}`}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </button>
  );
}
