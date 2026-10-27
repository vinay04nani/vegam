"use client";

import { useEffect, useRef, type ReactNode } from "react";
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
    <div role="radiogroup" aria-label={label} className="inline-flex flex-none rounded-[12px] border border-line-strong bg-white p-1 shadow-[0_1px_2px_rgb(30_31_43/0.04)]">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-[9px] font-semibold whitespace-nowrap transition ${size === "sm" ? "min-h-8 px-2.5 text-[13px]" : "min-h-9 px-3.5 text-[14px]"} ${
            value === o.id ? "bg-ink text-white shadow-[0_1px_2px_rgb(30_31_43/0.2)]" : "text-ink-soft hover:bg-panel hover:text-ink"
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
      className={`inline-flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-[10px] border border-line-strong bg-white text-ink transition hover:bg-panel ${className}`}
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
}: {
  children: ReactNode;
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
    primary: "bg-ink text-white hover:bg-[#2c2d3d] shadow-[0_1px_2px_rgb(30_31_43/0.2)]",
    secondary: "border border-line-strong bg-white text-ink hover:bg-panel",
    ghost: "text-ink-soft hover:bg-panel hover:text-ink",
    danger: "text-danger hover:bg-[#FDECEC]",
  }[variant];
  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-9 flex-none cursor-pointer items-center justify-center gap-1.5 rounded-[10px] px-3.5 text-[14px] font-semibold whitespace-nowrap transition disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`}
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
      {initials}
    </span>
  );
}

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "hot" | "warm" | "cold";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-panel text-muted ring-line",
  brand: "bg-periwinkle-soft text-brand ring-[#D9DCFB]",
  success: "bg-[#E8F3EA] text-success ring-[#CFE6D3]",
  warning: "bg-[#FFF3E6] text-warning ring-[#FBDDBF]",
  danger: "bg-[#FDECEC] text-danger ring-[#F7CFCF]",
  hot: "bg-[#FFEDE0] text-[#9C3D00] ring-[#FAD1B3]",
  warm: "bg-[#FFF6DB] text-[#7A5200] ring-[#F5E2A6]",
  cold: "bg-[#EAF0FB] text-[#2F4F86] ring-[#D3DEF3]",
};

export function Badge({ tone = "neutral", children, dot = false }: { tone?: BadgeTone; children: ReactNode; dot?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[12px] font-semibold whitespace-nowrap ring-1 ring-inset ${badgeTones[tone]}`}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

export function StatCard({ label, value, note, icon }: { label: string; value: ReactNode; note?: ReactNode; icon?: IconName }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-[18px] border border-line bg-white p-4 shadow-[0_1px_2px_rgb(30_31_43/0.03)]">
      <span className="flex items-center justify-between gap-2 text-[13.5px] font-medium text-subtle">
        {label}
        {icon && <Icon name={icon} size={16} className="text-faint" />}
      </span>
      <span className="text-[28px] leading-none font-bold tracking-[-0.02em] text-ink">{value}</span>
      {note && <span className="text-[12.5px] text-subtle">{note}</span>}
    </div>
  );
}

export function EmptyState({ icon, title, body }: { icon: IconName; title: string; body?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-panel text-muted">
        <Icon name={icon} size={22} />
      </span>
      <p className="m-0 text-[15.5px] font-semibold text-ink">{title}</p>
      {body && <p className="m-0 max-w-[340px] text-[14px] text-subtle">{body}</p>}
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
      <div className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="relative flex h-full w-full flex-col bg-white shadow-[-20px_0_60px_rgb(30_31_43/0.18)] outline-none sm:max-w-[480px] sm:rounded-l-[24px]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <h2 className="m-0 text-[16px] font-semibold text-ink">{title}</h2>
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
      <div className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="relative flex max-h-[92svh] w-full flex-col rounded-t-[24px] bg-white shadow-[0_30px_80px_rgb(30_31_43/0.25)] outline-none sm:rounded-[24px]"
        style={{ maxWidth: width }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <h2 className="m-0 text-[16px] font-semibold text-ink">{title}</h2>
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
    <span className="inline-flex items-center gap-1.5 text-[13.5px] whitespace-nowrap text-ink-soft">
      <Icon name={sourceIcon[source] ?? "message"} size={15} className="text-muted" />
      {source}
    </span>
  );
}
