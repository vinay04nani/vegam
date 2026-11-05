"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

// Shared building blocks for dashboard screens: controls, badges, avatars,
// stat cards, and accessible drawer and modal dialogs.

export function SegmentedControl<T extends string>({
  label,
  value,
  options,
  onChange,
  size = "md",
}: {
  label: string;
  value: T;
  options: { id: T; label: ReactNode; icon?: IconName }[];
  onChange: (v: T) => void;
  size?: "sm" | "md";
}) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex flex-none rounded-lg border border-line-strong bg-surface p-1 shadow-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md font-semibold whitespace-nowrap transition ${size === "sm" ? "min-h-8 px-2.5 text-label" : "min-h-9 px-3.5 text-body"} ${
            value === o.id ? "bg-brand-fill text-white shadow-1" : "text-ink-soft hover:bg-panel hover:text-ink"
          }`}
        >
          {o.icon && <Icon name={o.icon} size={15} />}
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function IconButton({ icon, label, onClick, className = "" }: { icon: IconName; label: string; onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`inline-flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-md border border-line-strong bg-surface text-ink transition hover:bg-panel ${className}`}
    >
      <Icon name={icon} size={17} />
    </button>
  );
}

export function Button({
  children,
  onClick,
  variant = "secondary",
  icon,
  type = "button",
  form,
  disabled,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  /** A fuller name for screen readers when the visible text is short (e.g. "Connect" → "Connect Instagram"). */
  ariaLabel?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  icon?: IconName;
  type?: "button" | "submit";
  /** Submits a form elsewhere on the page, e.g. from a modal footer. */
  form?: string;
  disabled?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-brand-fill text-white hover:bg-brand-hover shadow-1",
    secondary: "border border-line-strong bg-surface text-ink hover:bg-panel",
    ghost: "text-ink-soft hover:bg-panel hover:text-ink",
    danger: "text-danger hover:bg-[#FDECEC]",
  }[variant];
  return (
    <button
      type={type}
      form={form}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-9 flex-none cursor-pointer items-center justify-center gap-1.5 rounded-md px-3.5 text-body font-semibold whitespace-nowrap transition disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
}

const avatarTones = ["bg-[#E6E8FD] text-brand", "bg-[#FFEBD9] text-[#8A3B00]", "bg-[#E3F2E6] text-[#1F5F25]", "bg-[#F1E6FA] text-[#5B2C83]", "bg-[#E2F0F7] text-[#14506B]", "bg-[#FBE7EA] text-[#8A1F33]"];

export function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const letters = name.replace(/[^A-Za-z ]/g, "").trim();
  const initials = letters ? letters.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase() : "#";
  const tone = avatarTones[[...name].reduce((n, c) => n + c.charCodeAt(0), 0) % avatarTones.length];
  return (
    <span aria-hidden="true" className={`inline-flex flex-none items-center justify-center rounded-full font-bold ${tone}`} style={{ width: size, height: size, fontSize: size * 0.38 }}>
      {letters ? initials : <Icon name="users" size={Math.round(size * 0.48)} />}
    </span>
  );
}

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "hot" | "warm" | "cold";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-panel text-muted ring-line",
  brand: "bg-periwinkle-soft text-brand ring-[#D9DCFB]",
  success: "bg-[#E8F3EA] text-success ring-[#CFE6D3]",
  warning: "bg-signal/15 text-warning ring-[#FBDDBF]",
  danger: "bg-[#FDECEC] text-danger ring-[#F7CFCF]",
  hot: "bg-[#FFEDE0] text-[#9C3D00] ring-[#FAD1B3]",
  warm: "bg-[#FFF6DB] text-signal-ink ring-[#F5E2A6]",
  cold: "bg-[#EAF0FB] text-[#2F4F86] ring-[#D3DEF3]",
};

export function Badge({ tone = "neutral", children, dot = false }: { tone?: BadgeTone; children: ReactNode; dot?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-caption font-semibold whitespace-nowrap ring-1 ring-inset ${badgeTones[tone]}`}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

export function StatCard({ label, value, note, icon }: { label: string; value: ReactNode; note?: ReactNode; icon?: IconName }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border border-line bg-surface p-4 shadow-1">
      <span className="flex items-center justify-between gap-2 text-label font-medium text-subtle">
        {label}
        {icon && <Icon name={icon} size={16} className="text-faint" />}
      </span>
      <span className="text-h1 leading-none font-bold tracking-[-0.02em] text-ink">{value}</span>
      {note && <span className="text-caption text-subtle">{note}</span>}
    </div>
  );
}

export function EmptyState({ icon, title, body }: { icon: IconName; title: string; body?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-panel text-muted">
        <Icon name={icon} size={22} />
      </span>
      <p className="m-0 text-body-lg font-semibold text-ink">{title}</p>
      {body && <p className="m-0 max-w-[340px] text-body text-subtle">{body}</p>}
    </div>
  );
}

/** Closes on Escape, focuses the panel on open and gives focus back on close. */
function useDialog(open: boolean, onClose: () => void) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [open, onClose]);
  return panel;
}

export function Drawer({ open, onClose, title, children, footer }: { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode }) {
  const panel = useDialog(open, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="relative flex h-full w-full flex-col bg-surface shadow-2 outline-none sm:max-w-[480px] sm:rounded-s-[24px]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <h2 className="m-0 text-body-lg font-semibold text-ink">{title}</h2>
          <IconButton icon="close" label="Close" onClick={onClose} className="border-transparent" />
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">{children}</div>
        {footer && <div className="border-t border-line px-5 py-3.5">{footer}</div>}
      </div>
    </div>
  );
}

export function Modal({ open, onClose, title, children, footer, width = 520 }: { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode; width?: number }) {
  const panel = useDialog(open, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="relative flex max-h-[92svh] w-full flex-col rounded-t-[24px] bg-surface shadow-2 outline-none sm:rounded-xl"
        style={{ maxWidth: width }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <h2 className="m-0 text-body-lg font-semibold text-ink">{title}</h2>
          <IconButton icon="close" label="Close" onClick={onClose} className="border-transparent" />
        </div>
        <div className="overflow-y-auto px-5 py-5">{children}</div>
        {footer && <div className="flex flex-wrap items-center justify-end gap-2 border-t border-line px-5 py-3.5">{footer}</div>}
      </div>
    </div>
  );
}

/** Icon for where a customer reached the business. */
export const sourceIcon: Record<string, IconName> = {
  WhatsApp: "message",
  Instagram: "instagram",
  Messenger: "message",
  Website: "globe",
  "Missed call": "missed",
  "Ad form": "megaphone",
  Phone: "phone",
  "Booking link": "calendar",
};

export function SourceLabel({ source }: { source: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-label whitespace-nowrap text-ink-soft">
      <Icon name={sourceIcon[source] ?? "message"} size={15} className="text-muted" />
      {source}
    </span>
  );
}

export type MenuItem = { label: string; onSelect?: () => void; disabled?: boolean; checked?: boolean; heading?: boolean; icon?: IconName; divider?: boolean; danger?: boolean };

/** A small popover menu behind an icon button: closes on Esc or an outside click, arrow keys move between items. */
export function Menu({
  label,
  items,
  icon = "more",
  className = "",
  trigger,
  align = "right",
  above = false,
  triggerClassName,
}: {
  label: string;
  items: MenuItem[];
  icon?: IconName;
  className?: string;
  /** Custom trigger content (e.g. an avatar) instead of the icon. */
  trigger?: ReactNode;
  align?: "left" | "right";
  /** Open upwards, e.g. from the bottom of the sidebar. */
  above?: boolean;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey, true);
    list.current?.querySelector<HTMLButtonElement>("[role=menuitem]:not([disabled])")?.focus();
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const els = [...(list.current?.querySelectorAll<HTMLButtonElement>("[role=menuitem]:not([disabled])") ?? [])];
    const i = els.indexOf(document.activeElement as HTMLButtonElement);
    els[(i + (e.key === "ArrowDown" ? 1 : -1) + els.length) % els.length]?.focus();
  };

  return (
    <div ref={root} className={`relative ${className}`} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        aria-label={label}
        title={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={triggerClassName ?? (trigger ? "inline-flex cursor-pointer items-center rounded-full transition hover:opacity-90" : "inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted transition hover:bg-panel hover:text-ink")}
      >
        {trigger ?? <Icon name={icon} size={16} />}
      </button>
      {open && (
        <div
          ref={list}
          role="menu"
          aria-label={label}
          onKeyDown={onKeyDown}
          className={`absolute ${above ? "bottom-full mb-2" : trigger ? "top-11" : "top-8"} ${above ? "inset-x-0" : align === "right" ? "end-0" : "start-0"} z-50 flex min-w-[188px] flex-col rounded-lg border border-line bg-surface p-1.5 shadow-2`}
        >
          {items.map((it, i) =>
            it.divider ? (
              <span key={i} role="separator" className="my-1 h-px bg-line" />
            ) : it.heading ? (
              <p key={i} className="m-0 px-2.5 pt-1.5 pb-1 text-caption font-semibold tracking-[0.08em] text-subtle uppercase">
                {it.label}
              </p>
            ) : (
              <button
                key={i}
                type="button"
                role="menuitem"
                disabled={it.disabled}
                onClick={() => {
                  it.onSelect?.();
                  setOpen(false);
                }}
                className={`flex min-h-9 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-start text-body outline-none hover:bg-panel focus:bg-panel disabled:cursor-default disabled:text-subtle disabled:hover:bg-transparent ${it.danger ? "text-danger" : "text-ink"}`}
              >
                <span className="w-4 flex-none">{it.icon ? <Icon name={it.icon} size={15} className={it.danger ? "" : "text-muted"} /> : it.checked && <Icon name="check" size={14} strokeWidth={2.6} className="[&_circle]:hidden" />}</span>
                {it.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}

/** Underlined tabs for sub-pages (Settings, AI agents). Scrolls sideways on narrow screens. */
export function Tabs<T extends string>({ label, value, tabs, onChange }: { label: string; value: T; tabs: { id: T; label: string; count?: number }[]; onChange: (v: T) => void }) {
  return (
    <div role="tablist" aria-label={label} className="-mx-4 flex gap-1 overflow-x-auto border-b border-line px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
      {tabs.map((t) => {
        const on = t.id === value;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(t.id)}
            className={`relative -mb-px flex min-h-11 flex-none cursor-pointer items-center gap-1.5 border-b-2 px-3 text-body font-semibold whitespace-nowrap transition ${
              on ? "border-ink text-ink" : "border-transparent text-subtle hover:text-ink"
            }`}
          >
            {t.label}
            {t.count !== undefined && <span className="rounded-full bg-panel px-1.5 text-caption text-muted">{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}

/** An on/off switch with its label. */
export function Toggle({ checked, onChange, label, description, disabled }: { checked: boolean; onChange: (v: boolean) => void; label: string; description?: string; disabled?: boolean }) {
  return (
    <label className={`flex items-start justify-between gap-4 ${disabled ? "opacity-60" : "cursor-pointer"}`}>
      <span className="flex min-w-0 flex-col">
        <span className="text-body font-medium text-ink">{label}</span>
        {description && <span className="text-label text-subtle">{description}</span>}
      </span>
      <span className="relative mt-0.5 flex-none">
        <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" />
        <span className="block h-6 w-10 rounded-full bg-line-strong transition peer-checked:bg-brand-fill peer-focus-visible:ring-2 peer-focus-visible:ring-indigo peer-focus-visible:ring-offset-2" />
        <span className="absolute top-0.5 start-0.5 h-5 w-5 rounded-full bg-surface shadow-1 transition peer-checked:translate-x-4" />
      </span>
    </label>
  );
}

/** A usage bar that turns amber at 80% and red at 100%. */
export function Progress({ value, max, label }: { value: number; max: number; label: string }) {
  const pct = Math.min(100, Math.round((value / Math.max(1, max)) * 100));
  const tone = pct >= 100 ? "bg-danger" : pct >= 80 ? "bg-signal" : "bg-brand-fill";
  return (
    <span role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} className="block h-2 w-full overflow-hidden rounded-full bg-panel">
      <span className={`block h-full rounded-full transition-[width] duration-500 ${tone}`} style={{ width: `${pct}%` }} />
    </span>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block animate-pulse rounded-md bg-panel ${className}`} />;
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="rounded-sm border border-line-strong bg-surface px-1.5 py-0.5 font-sans text-caption font-semibold text-muted shadow-1">{children}</kbd>;
}

// ---------- Toasts ----------

type ToastItem = { id: number; text: string; tone: "success" | "info" };
const ToastContext = createContext<(text: string, tone?: ToastItem["tone"]) => void>(() => undefined);

/** Short confirmations ("Saved", "Invite sent") shown at the bottom of the screen. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const push = useCallback((text: string, tone: ToastItem["tone"] = "success") => {
    const id = Date.now() + Math.random();
    setItems((xs) => [...xs.slice(-2), { id, text, tone }]);
    window.setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== id)), 3200);
  }, []);
  return (
    <ToastContext.Provider value={push}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-16 z-[60] flex flex-col items-center gap-2 px-4 lg:top-auto lg:end-6 lg:bottom-6 lg:start-auto lg:items-end lg:px-0">
        {items.map((t) => (
          <div key={t.id} role="status" className="pointer-events-auto flex items-center gap-2.5 rounded-lg bg-brand-fill px-4 py-2.5 text-body font-medium text-white shadow-2">
            <Icon name={t.tone === "success" ? "check" : "sparkle"} size={16} className={t.tone === "success" ? "text-[#7BD88F]" : "text-accent"} />
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
