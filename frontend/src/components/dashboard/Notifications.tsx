"use client";

import { useEffect, useRef, useState } from "react";
import { sampleNotifications, type AppNotification } from "@/content/app";
import { Icon } from "@/components/ui/Icon";

// The bell in the top bar: what needs the owner, bookings and system notices.
// Demo: read state lives in this component.

export function NotificationBell({ onOpen }: { onOpen: (view: string) => void }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<AppNotification[]>(sampleNotifications);
  const root = useRef<HTMLDivElement>(null);
  const unread = items.filter((n) => n.unread).length;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const groups = ["Needs you", "Bookings", "System"] as const;

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-label={unread ? `Notifications, ${unread} unread` : "Notifications"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink transition hover:bg-white"
      >
        <Icon name="bell" size={20} />
        {unread > 0 && <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-warning px-1 text-[10.5px] font-bold text-white">{unread}</span>}
      </button>
      {open && (
        <div role="dialog" aria-label="Notifications" className="absolute top-12 right-0 z-50 flex max-h-[70vh] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-[16px] border border-line bg-white shadow-[0_20px_50px_rgb(30_31_43/0.18)]">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="m-0 text-[15px] font-semibold text-ink">Notifications</p>
            <button type="button" disabled={!unread} onClick={() => setItems((xs) => xs.map((x) => ({ ...x, unread: false })))} className="cursor-pointer text-[13px] font-semibold text-indigo disabled:cursor-default disabled:text-subtle">
              Mark all as read
            </button>
          </div>
          <div className="overflow-y-auto">
            {groups.map((g) => {
              const list = items.filter((n) => n.group === g);
              if (!list.length) return null;
              return (
                <section key={g} aria-label={g}>
                  <p className="m-0 bg-[#FAFAFC] px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.08em] text-subtle uppercase">{g}</p>
                  {list.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => {
                        setItems((xs) => xs.map((x) => (x.id === n.id ? { ...x, unread: false } : x)));
                        if (n.view) onOpen(n.view);
                        setOpen(false);
                      }}
                      className="flex w-full cursor-pointer items-start gap-3 border-b border-line px-4 py-3 text-left last:border-b-0 hover:bg-[#FAFAFC]"
                    >
                      <span className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full ${g === "Needs you" ? "bg-[#FFF3E6] text-warning" : "bg-periwinkle-soft text-indigo"}`}>
                        <Icon name={n.icon} size={15} />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <span className={`text-[14px] text-ink ${n.unread ? "font-semibold" : "font-medium"}`}>{n.title}</span>
                        <span className="text-[13px] leading-snug text-subtle">{n.body}</span>
                        <span className="text-[12px] text-subtle">{n.time}</span>
                      </span>
                      {n.unread && <span className="mt-2 h-2 w-2 flex-none rounded-full bg-indigo" aria-label="Unread" />}
                    </button>
                  ))}
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
