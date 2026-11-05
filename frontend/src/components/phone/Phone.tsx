import type { ReactNode, Ref } from "react";
import { Icon } from "@/components/ui/Icon";

// A phone screen with a chat-app look, used by the home page preview and the
// onboarding live preview. No real app's logo or name appears on it.

export function Phone({
  time,
  title,
  status,
  avatar,
  footer,
  bodyRef,
  className = "",
  children,
}: {
  time: string;
  title: string;
  status: string;
  avatar: ReactNode;
  /** Shown under the chat, e.g. a message box. */
  footer?: ReactNode;
  bodyRef?: Ref<HTMLDivElement>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`w-[300px] flex-none rounded-xl bg-brand-fill p-2.5 shadow-2 md:shadow-3 ring-1 ring-black/10 ${className}`}>
      <div className="light-surface flex h-[580px] flex-col overflow-hidden rounded-xl bg-[#EFEAE2] text-start">
        <div className="flex items-center justify-between bg-surface px-6 pt-3 text-caption font-semibold text-ink" aria-hidden="true">
          <span>{time}</span>
          <span className="h-5 w-20 rounded-full bg-brand-fill" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3.5 rounded-sm bg-brand-fill" />
            <span className="h-2.5 w-5 rounded-sm border-[1.5px] border-ink" />
          </span>
        </div>
        <div className="flex items-center gap-3 border-b border-black/5 bg-surface px-4 pt-2.5 pb-3">
          <Icon name="chevron-left" size={20} className="-ms-1 text-ink" />
          {avatar}
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-body font-semibold text-ink">{title}</span>
            <span className="text-caption text-subtle">{status}</span>
          </div>
        </div>
        <div ref={bodyRef} tabIndex={0} role="region" aria-label="Sample conversation" className="flex flex-1 flex-col gap-2 overflow-y-auto bg-[#ECE5DD] px-3 py-3 text-body leading-snug [scrollbar-width:none]">
          {children}
        </div>
        {footer}
      </div>
    </div>
  );
}

export function Bubble({ from, time, children }: { from: "them" | "me"; time: string; children: ReactNode }) {
  const me = from === "me";
  return (
    <div className={`max-w-[86%] rounded-lg px-3 pt-2 pb-1.5 text-ink shadow-1 ${me ? "self-end rounded-se-[4px] bg-[#D9FDD3]" : "self-start rounded-ss-[4px] bg-surface"}`}>
      {children}
      <span className="mt-0.5 flex items-center justify-end gap-1 text-caption text-text-3">
        {time}
        {me && <Icon name="check" size={13} strokeWidth={2.4} className="text-[#2B7DBF] [&_circle]:hidden" />}
      </span>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="mx-auto rounded-lg bg-surface/90 px-2.5 py-1 text-caption font-medium text-subtle shadow-1">{children}</span>;
}

