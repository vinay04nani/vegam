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
    <div className={`w-[300px] flex-none rounded-[46px] bg-ink p-2.5 shadow-[0_16px_36px_rgb(21_16_173/0.18),0_4px_12px_rgb(30_31_43/0.16)] md:shadow-[0_40px_90px_rgb(21_16_173/0.22),0_8px_24px_rgb(30_31_43/0.18)] ring-1 ring-black/10 ${className}`}>
      <div className="flex h-[580px] flex-col overflow-hidden rounded-[37px] bg-[#EFEAE2] text-left">
        <div className="flex items-center justify-between bg-white px-6 pt-3 text-[12px] font-semibold text-ink" aria-hidden="true">
          <span>{time}</span>
          <span className="h-5 w-20 rounded-full bg-ink" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3.5 rounded-[2px] bg-ink" />
            <span className="h-2.5 w-5 rounded-[3px] border-[1.5px] border-ink" />
          </span>
        </div>
        <div className="flex items-center gap-3 border-b border-black/5 bg-white px-4 pt-2.5 pb-3">
          <Icon name="chevron-left" size={20} className="-ml-1 text-ink" />
          {avatar}
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-[15px] font-semibold text-ink">{title}</span>
            <span className="text-[12px] text-subtle">{status}</span>
          </div>
        </div>
        <div ref={bodyRef} className="bg-dots flex flex-1 flex-col gap-2 overflow-y-auto px-3 py-3 text-[14px] leading-snug [scrollbar-width:none]">
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
    <div className={`max-w-[86%] rounded-[14px] px-3 pt-2 pb-1.5 text-ink shadow-[0_1px_1px_rgb(0_0_0/0.08)] ${me ? "self-end rounded-tr-[4px] bg-[#D9FDD3]" : "self-start rounded-tl-[4px] bg-white"}`}>
      {children}
      <span className="mt-0.5 flex items-center justify-end gap-1 text-[11px] text-[#5d6b63]">
        {time}
        {me && <Icon name="check" size={13} strokeWidth={2.4} className="text-[#2B7DBF] [&_circle]:hidden" />}
      </span>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="mx-auto rounded-lg bg-white/90 px-2.5 py-1 text-[11.5px] font-medium text-subtle shadow-[0_1px_1px_rgb(0_0_0/0.06)]">{children}</span>;
}

