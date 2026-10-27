"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { sampleNotifications, type AppNotification } from "@/content/app";
import { Icon } from "@/components/ui/Icon";

// The bell and its inbox of notifications. On desktop the bell sits beside
// the profile at the bottom of the sidebar and opens a floating card next to
// the sidebar; on phones it sits in the top bar and the card fills the width.
// Tabs filter by kind, "Read all" clears the dots, and a click opens the
// related page. Esc or a click outside closes it.
// Demo: read state lives in this component.

type Tab = "all" | AppNotification["group"];
const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Needs you", label: "Needs you" },
  { id: "Bookings", label: "Bookings" },
  { id: "System", label: "Updates" },
];

const tile: Record<AppNotification["group"], string> = {
  "Needs you": "bg-[#FFF1E6] text-[#C2560F]",
  Bookings: "bg-[#E8F3EA] text-success",
  System: "bg-[#EAF2FF] text-[#2F6FDB]",
};

export function NotificationBell({ onOpen, variant = "icon" }: { onOpen: (view: string) => void; variant?: "icon" | "sidebar" }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("all");
  const [items, setItems] = useState<AppNotification[]>(sampleNotifications);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const unread = items.filter((n) => n.unread).length;

  useEffect(() => {
    if (!open) return;
    panel.current?.focus();
    // The card is portalled to <body>, so a click inside it isn't inside `root`.
    const onDown = (e: MouseEvent) => !root.current?.contains(e.target as Node) && !panel.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const list = items.filter((n) => tab === "all" || n.group === tab);
  const label = unread ? `Notifications, ${unread} unread` : "Notifications";

  return (
    <div ref={root}>
      <button
        type="button"
        aria-label={label}
        title="Notifications"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`relative inline-flex h-10 w-10 flex-none cursor-pointer items-center justify-center text-ink transition ${variant === "sidebar" ? "rounded-[12px]" : "rounded-full"} ${open ? "bg-white shadow-[0_1px_3px_rgb(30_31_43/0.12)]" : "hover:bg-white"}`}
      >
        <Icon name="bell" size={20} />
        {unread > 0 && <span aria-hidden="true" className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full border-2 border-[#F4F4F8] bg-[#E5484D]" />}
      </button>

      {open &&
        createPortal(
          <div
            ref={panel}
            role="dialog"
            aria-label="Notifications"
            tabIndex={-1}
            className={`fixed z-40 flex flex-col overflow-hidden bg-white outline-none motion-reduce:animate-none ${
              variant === "sidebar"
                ? "top-3 bottom-3 left-[260px] w-[460px] animate-slide-in-left rounded-[24px] border border-line shadow-[0_24px_60px_rgb(30_31_43/0.16)]"
                : "inset-x-2 top-16 bottom-2 animate-slide-in rounded-[20px] border border-line shadow-[0_24px_60px_rgb(30_31_43/0.18)] sm:right-3 sm:left-auto sm:w-[440px]"
            }`}
          >
            <div className="flex items-center gap-6 border-b border-line px-6">
              <div role="tablist" aria-label="Show" className="flex flex-1 gap-6 overflow-x-auto">
                {tabs.map((t) => {
                  const n = t.id === "all" ? 0 : items.filter((x) => x.group === t.id && x.unread).length;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={tab === t.id}
                      onClick={() => setTab(t.id)}
                      className={`relative flex-none cursor-pointer py-4 text-[15px] whitespace-nowrap transition ${tab === t.id ? "font-semibold text-ink" : "text-subtle hover:text-ink"}`}
                    >
                      {t.label}
                      {n > 0 && <span className="ml-1.5 text-[12.5px] text-subtle">{n}</span>}
                      {tab === t.id && <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-6 rounded-full bg-ink" />}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={!unread}
                onClick={() => setItems((xs) => xs.map((x) => ({ ...x, unread: false })))}
                className="flex-none cursor-pointer text-[14.5px] text-subtle hover:text-ink disabled:cursor-default disabled:opacity-50 disabled:hover:text-subtle"
              >
                Read all
              </button>
            </div>

            <ul className="m-0 flex-1 list-none overflow-y-auto p-0">
              {list.length === 0 && (
                <li className="flex flex-col items-center gap-2 px-6 py-20 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-panel text-muted">
                    <Icon name="bell" size={22} />
                  </span>
                  <p className="m-0 text-[15px] font-semibold text-ink">Nothing here yet</p>
                  <p className="m-0 text-[13.5px] text-subtle">Handovers, bookings and updates will show up here.</p>
                </li>
              )}
              {list.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setItems((xs) => xs.map((x) => (x.id === n.id ? { ...x, unread: false } : x)));
                      if (n.view) {
                        onOpen(n.view);
                        setOpen(false);
                      }
                    }}
                    className="flex w-full cursor-pointer gap-4 px-6 py-5 text-left transition hover:bg-[#FAFAFC]"
                  >
                    <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-[12px] ${tile[n.group]}`}>
                      <Icon name={n.icon} size={20} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <span className="flex items-start gap-2">
                        <span className="flex-1 text-[16px] leading-snug font-semibold text-ink">
                          {n.title}
                          {n.unread && <span className="sr-only"> (unread)</span>}
                        </span>
                        {n.unread && <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-[#E5484D]" />}
                      </span>
                      <span className="text-[14.5px] leading-relaxed text-ink-soft">{n.body}</span>
                      <span className="text-[13px] text-subtle">{n.time}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )}
    </div>
  );
}
