"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { appNav } from "@/content/onboarding";
import { sampleBookings, sampleLeads, sampleThreads } from "@/content/dashboard";
import { sampleContacts } from "@/content/contacts";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Kbd } from "./kit";

// ⌘K / Ctrl+K search across pages, people and actions.
// Demo: searches the sample data loaded in the browser.

type Result = { id: string; group: string; label: string; hint?: string; icon: IconName; view: string };

const actions: Result[] = [
  { id: "a-booking", group: "Actions", label: "New booking", icon: "plus", view: "calendar" },
  { id: "a-lead", group: "Actions", label: "Add a lead", icon: "plus", view: "leads" },
  { id: "a-campaign", group: "Actions", label: "New campaign", icon: "megaphone", view: "campaigns" },
  { id: "a-channel", group: "Actions", label: "Connect a channel", icon: "globe", view: "channels" },
  { id: "a-invite", group: "Actions", label: "Invite your team", icon: "users", view: "settings:team" },
  { id: "a-billing", group: "Actions", label: "Billing and usage", icon: "chart", view: "billing" },
  { id: "a-profile", group: "Actions", label: "Your profile", icon: "users", view: "profile" },
  { id: "a-help", group: "Actions", label: "Help centre", icon: "headset", view: "help" },
];

export function CommandPalette({ open, onClose, onOpen }: { open: boolean; onClose: () => void; onOpen: (view: string) => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQ("");
    setActive(0);
    window.setTimeout(() => input.current?.focus(), 0);
  }, [open]);

  const results = useMemo(() => {
    const pages: Result[] = appNav.map((n) => ({ id: `p-${n.id}`, group: "Pages", label: n.label, icon: n.icon, view: n.id }));
    const people: Result[] = [
      ...sampleThreads.map((t) => ({ id: `t-${t.id}`, group: "Conversations", label: t.who, hint: t.channel, icon: "message" as IconName, view: "inbox" })),
      ...sampleContacts.map((c) => ({ id: `c-${c.id}`, group: "Contacts", label: c.name, hint: c.phone, icon: "users" as IconName, view: "contacts" })),
      ...sampleLeads.map((l) => ({ id: `l-${l.id}`, group: "Leads", label: l.name, hint: l.interest, icon: "lead" as IconName, view: "leads" })),
      ...sampleBookings.filter((b) => b.day >= 0 && b.day < 3).map((b) => ({ id: `b-${b.id}`, group: "Bookings", label: b.who, hint: b.day === 0 ? `Today ${b.start}` : b.day === 1 ? `Tomorrow ${b.start}` : `In 2 days ${b.start}`, icon: "calendar" as IconName, view: "calendar" })),
    ];
    const all = [...actions, ...pages, ...people];
    const term = q.trim().toLowerCase();
    const list = term ? all.filter((r) => `${r.label} ${r.hint ?? ""} ${r.group}`.toLowerCase().includes(term)) : [...actions.slice(0, 4), ...pages];
    return list.slice(0, 12);
  }, [q]);

  if (!open) return null;

  const choose = (r: Result | undefined) => {
    if (!r) return;
    onOpen(r.view);
    onClose();
  };

  let lastGroup = "";
  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/35 p-4 pt-[12vh] backdrop-blur-[2px]" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label="Search" className="w-full max-w-[600px] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_80px_rgb(30_31_43/0.3)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Icon name="search" size={18} className="text-subtle" />
          <input
            ref={input}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(results.length - 1, a + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(0, a - 1));
              } else if (e.key === "Enter") choose(results[active]);
              else if (e.key === "Escape") onClose();
            }}
            placeholder="Search pages, people, bookings or actions…"
            aria-label="Search"
            aria-controls="palette-results"
            aria-activedescendant={results[active] ? `pr-${results[active].id}` : undefined}
            className="min-h-14 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-faint"
          />
          <Kbd>Esc</Kbd>
        </div>
        <ul id="palette-results" role="listbox" className="m-0 max-h-[55vh] list-none overflow-y-auto p-2">
          {results.length === 0 && <li className="p-6 text-center text-[14.5px] text-subtle">No results for “{q}”.</li>}
          {results.map((r, i) => {
            const header = r.group !== lastGroup ? r.group : null;
            lastGroup = r.group;
            return (
              <li key={r.id} role="presentation">
                {header && <p className="m-0 px-3 pt-2.5 pb-1 text-[11.5px] font-semibold tracking-[0.08em] text-subtle uppercase">{header}</p>}
                <button
                  id={`pr-${r.id}`}
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(r)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2.5 text-left ${i === active ? "bg-panel" : ""}`}
                >
                  <Icon name={r.icon} size={17} className="flex-none text-muted" />
                  <span className="flex-none text-[14.5px] font-medium text-ink">{r.label}</span>
                  {r.hint && <span className="truncate text-[13px] text-subtle">{r.hint}</span>}
                  {i === active && <Icon name="chevron-right" size={16} className="ml-auto flex-none text-subtle" />}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="m-0 flex items-center gap-3 border-t border-line bg-[#FAFAFC] px-4 py-2 text-[12px] text-subtle">
          <span className="flex items-center gap-1">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd> to move
          </span>
          <span className="flex items-center gap-1">
            <Kbd>Enter</Kbd> to open
          </span>
        </p>
      </div>
    </div>
  );
}
