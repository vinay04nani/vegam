"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { listCountries } from "@/lib/countries";
import { useLocale } from "@/components/LocaleProvider";

type Props = {
  value: string;
  onChange: (iso: string) => void;
  /** Show the calling code instead of the country name. */
  compact?: boolean;
  className?: string;
  label?: string;
};

/** Searchable country list. The selected value is an ISO code, never a hard-coded default. */
export function CountrySelect({ value, onChange, compact = false, className = "", label = "Country" }: Props) {
  const locale = useLocale();
  const countries = useMemo(() => listCountries(locale.locale), [locale.locale]);
  const selected = countries.find((c) => c.id === value) ?? countries.find((c) => c.id === locale.region) ?? countries[0];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q) || c.dial.includes(q) || c.id.toLowerCase().includes(q));
  }, [countries, query]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const choose = (id: string) => {
    onChange(id);
    setOpen(false);
    setQuery("");
  };

  const shown = open ? query : compact ? selected?.dial ?? "" : selected ? `${selected.name} (${selected.dial})` : "";

  return (
    <div ref={root} className={`relative ${className}`}>
      <input
        role="combobox"
        aria-label={label}
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        autoComplete="off"
        className="min-h-11 w-full rounded-md border border-border-strong bg-surface px-3 text-body text-text outline-none placeholder:text-text-3 focus:border-brand"
        value={shown}
        placeholder="Search countries"
        onFocus={() => {
          setOpen(true);
          setQuery("");
          setActive(Math.max(0, filtered.findIndex((c) => c.id === selected?.id)));
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActive(0);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActive((n) => Math.min(filtered.length - 1, n + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((n) => Math.max(0, n - 1));
          } else if (e.key === "Enter" && open && filtered[active]) {
            e.preventDefault();
            choose(filtered[active].id);
          } else if (e.key === "Escape") {
            setOpen(false);
            setQuery("");
          }
        }}
      />
      {open && (
        <ul id={listId} role="listbox" className="absolute z-30 mt-1 max-h-64 w-full min-w-56 overflow-auto rounded-lg border border-border bg-surface p-1 shadow-2">
          {filtered.length === 0 && <li className="px-3 py-2 text-label text-text-3">No countries match</li>}
          {filtered.map((c, index) => (
            <li key={c.id} role="option" aria-selected={c.id === value}>
              <button
                type="button"
                className={`flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-md px-3 text-start text-body ${index === active || c.id === value ? "bg-brand-subtle text-text" : "text-text hover:bg-surface-muted"}`}
                onMouseEnter={() => setActive(index)}
                onClick={() => choose(c.id)}
              >
                <span className="truncate">{c.name}</span>
                <span className="text-label text-text-3 tabular-nums">{c.dial}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
