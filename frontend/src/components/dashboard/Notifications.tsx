"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { sampleNotifications, type AppNotification } from "@/content/app";
import { Icon } from "@/components/ui/Icon";

// The bell in the top bar opens a panel that slides in from the right, below
// the top bar, so the page stays visible beside it. Nothing is dimmed; a click
// outside, Esc or the close button puts it away.
// Demo: read state lives in this component.

const groupTone: Record<AppNotification["group"], string> = {
  "Needs you": "bg-[#FFF3E6] text-warning",
  Bookings: "bg-[#E8F3EA] text-success",
  System: "bg-periwinkle-soft text-indigo",
};

/** Sample times are relative words; anything from today goes under "Today". */
const isToday = (time: string) => /min|h ago|just now/i.test(time);

export function NotificationBell({
  onOpen,
}: {
  onOpen: (view: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState<"all" | "unread">("all");
  const [items, setItems] = useState<AppNotification[]>(sampleNotifications);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const unread = items.filter((n) => n.unread).length;

  useEffect(() => {
    if (!open) return;
    panel.current?.focus();
    // The panel is portalled to <body> (the top bar's blur would otherwise trap a fixed element), so check both.
    const onDown = (e: MouseEvent) =>
      !root.current?.contains(e.target as Node) &&
      !panel.current?.contains(e.target as Node) &&
      setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const list = items.filter((n) => show === "all" || n.unread);
  const sections = [
    { title: "Today", items: list.filter((n) => isToday(n.time)) },
    { title: "Earlier", items: list.filter((n) => !isToday(n.time)) },
  ];
  const read = (id: string) =>
    setItems((xs) =>
      xs.map((x) => (x.id === id ? { ...x, unread: false } : x)),
    );

  return (
    <div ref={root}>
      <button
        type="button"
        aria-label={
          unread ? `Notifications, ${unread} unread` : "Notifications"
        }
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink transition ${open ? "bg-white shadow-[0_1px_3px_rgb(30_31_43/0.1)]" : "hover:bg-white"}`}
      >
        <Icon name="bell" size={20} />
        {unread > 0 && (
          <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-warning px-1 text-[10.5px] font-bold text-white">
            {unread}
          </span>
        )}
      </button>

      {open &&
        createPortal(
          <div
            ref={panel}
            role="dialog"
            aria-label="Notifications"
            tabIndex={-1}
            className="fixed top-14 right-0 bottom-0 z-40 flex w-full animate-slide-in flex-col border-l border-line bg-white shadow-[-16px_0_40px_rgb(30_31_43/0.08)] outline-none motion-reduce:animate-none sm:w-[400px] lg:top-16"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
              <p className="m-0 flex-1 text-[16px] font-semibold text-ink">
                Notifications
              </p>
              <button
                type="button"
                disabled={!unread}
                onClick={() =>
                  setItems((xs) => xs.map((x) => ({ ...x, unread: false })))
                }
                className="cursor-pointer text-[13px] font-semibold text-indigo disabled:cursor-default disabled:text-subtle"
              >
                Mark all as read
              </button>
              <button
                type="button"
                aria-label="Close notifications"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-ink"
              >
                <Icon name="close" size={17} />
              </button>
            </div>

            <div
              role="tablist"
              aria-label="Show"
              className="flex gap-5 border-b border-line px-5"
            >
              {(["all", "unread"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={show === t}
                  onClick={() => setShow(t)}
                  className={`-mb-px cursor-pointer border-b-2 py-2.5 text-[14px] font-semibold ${show === t ? "border-ink text-ink" : "border-transparent text-subtle hover:text-ink"}`}
                >
                  {t === "all"
                    ? "All"
                    : `Unread${unread ? ` (${unread})` : ""}`}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto">
              {list.length === 0 && (
                <div className="flex flex-col items-center gap-2 px-6 py-16 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F3EA] text-success">
                    <Icon name="check" size={22} />
                  </span>
                  <p className="m-0 text-[15px] font-semibold text-ink">
                    You’re all caught up
                  </p>
                  <p className="m-0 text-[13.5px] text-subtle">
                    New handovers, bookings and updates will show here.
                  </p>
                </div>
              )}
              {sections.map(
                (s) =>
                  s.items.length > 0 && (
                    <section key={s.title} aria-label={s.title}>
                      <p className="m-0 px-5 pt-4 pb-1.5 text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">
                        {s.title}
                      </p>
                      <ul className="m-0 list-none p-0">
                        {s.items.map((n) => (
                          <li
                            key={n.id}
                            className={`relative flex gap-3 px-5 py-3.5 ${n.unread ? "bg-periwinkle-soft/35" : ""}`}
                          >
                            {n.unread && (
                              <span
                                className="absolute top-0 bottom-0 left-0 w-[3px] bg-indigo"
                                aria-hidden="true"
                              />
                            )}
                            <span
                              className={`flex h-9 w-9 flex-none items-center justify-center rounded-full ${groupTone[n.group]}`}
                            >
                              <Icon name={n.icon} size={16} />
                            </span>
                            <span className="flex min-w-0 flex-1 flex-col gap-1">
                              <span className="flex items-start justify-between gap-3">
                                <span
                                  className={`text-[14.5px] leading-snug text-ink ${n.unread ? "font-semibold" : "font-medium"}`}
                                >
                                  {n.title}
                                  {n.unread && (
                                    <span className="sr-only"> (unread)</span>
                                  )}
                                </span>
                                <span className="flex-none text-[12px] text-subtle">
                                  {n.time}
                                </span>
                              </span>
                              <span className="text-[13.5px] leading-snug text-ink-soft">
                                {n.body}
                              </span>
                              <span className="mt-1 flex gap-2">
                                {n.view && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      read(n.id);
                                      onOpen(n.view!);
                                      setOpen(false);
                                    }}
                                    className="min-h-8 cursor-pointer rounded-[8px] border border-line-strong bg-white px-3 text-[13px] font-semibold text-ink hover:bg-panel"
                                  >
                                    {n.group === "Needs you" ? "Open" : "View"}
                                  </button>
                                )}
                                {n.unread && (
                                  <button
                                    type="button"
                                    onClick={() => read(n.id)}
                                    className="min-h-8 cursor-pointer rounded-[8px] px-2.5 text-[13px] font-semibold text-subtle hover:bg-panel hover:text-ink"
                                  >
                                    Mark as read
                                  </button>
                                )}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ),
              )}
            </div>

            <div className="border-t border-line px-5 py-3">
              <button
                type="button"
                onClick={() => {
                  onOpen("settings");
                  setOpen(false);
                }}
                className="inline-flex cursor-pointer items-center gap-1.5 text-[13.5px] font-semibold text-ink-soft hover:text-ink"
              >
                <Icon name="settings" size={15} />
                Notification settings
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
