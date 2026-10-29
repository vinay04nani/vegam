"use client";

import { useState } from "react";
import { sampleVoices } from "@/content/agents";
import type { FieldValue, Permission, SetupField, SetupSection, Step } from "@/content/agentSetup";
import { planRank } from "@/content/onboarding";
import { planLimits, plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { useBranch } from "../../branch";
import { useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch, TextArea } from "../settings/parts";

// Draws an agent's settings from its description (content/agentSetup.ts) as
// flat rows, like the Settings dialog. Changed fields carry a small marker
// until they're published.

type Props = { sections: SetupSection[]; values: Record<string, FieldValue>; changed?: string[]; onChange: (key: string, v: FieldValue) => void; plan: PlanId; onOpen: (view: string) => void };

const chip = (on: boolean) =>
  `inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-full border px-3 text-[13.5px] font-medium transition ${on ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:border-ink/40"}`;

function Label({ f, changed, plan }: { f: SetupField; changed: boolean; plan: PlanId }) {
  const above = f.plan && planRank[plan] < planRank[f.plan];
  return (
    <span className="flex flex-wrap items-center gap-2">
      {f.label}
      {above && <span className="rounded-full border border-line-strong px-1.5 text-[11px] leading-[18px] font-semibold text-subtle">{plans.find((p) => p.id === f.plan)?.name}</span>}
      {changed && (
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-indigo">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
          Changed
        </span>
      )}
    </span>
  );
}

function ListEditor({ value, onChange, placeholder, label }: { value: string[]; onChange: (v: string[]) => void; placeholder: string; label: string }) {
  const [draft, setDraft] = useState("");
  const add = () => {
    const t = draft.trim();
    if (t && !value.includes(t)) onChange([...value, t]);
    setDraft("");
  };
  return (
    <div className="flex flex-col gap-2.5">
      {value.length > 0 && (
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {value.map((x) => (
            <li key={x} className="inline-flex items-center gap-1 rounded-full bg-panel py-1 pr-1 pl-3 text-[13.5px] text-ink">
              {x}
              <button type="button" onClick={() => onChange(value.filter((y) => y !== x))} aria-label={`Remove ${x}`} className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink">
                <Icon name="close" size={13} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <span className="flex gap-2">
        <Input
          aria-label={`${label}: add`}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          placeholder={placeholder}
          className="w-64"
        />
        <RowButton icon="plus" onClick={add} ariaLabel={`Add to ${label}`}>
          Add
        </RowButton>
      </span>
    </div>
  );
}

const delays = [
  { v: "4", l: "4 hours" },
  { v: "24", l: "1 day" },
  { v: "72", l: "3 days" },
  { v: "168", l: "7 days" },
];

function SequenceEditor({ value, onChange, plan, label }: { value: Step[]; onChange: (v: Step[]) => void; plan: PlanId; label: string }) {
  const max = planLimits[plan].followUps;
  return (
    <div className="flex flex-col gap-3">
      <ol className="m-0 flex list-none flex-col gap-2.5 p-0">
        {value.map((st, i) => {
          const over = i >= max;
          return (
            <li key={i} className={`flex flex-col gap-2 rounded-[12px] border p-3 ${over ? "border-dashed border-line-strong bg-panel/60" : "border-line"}`}>
              <span className="flex flex-wrap items-center gap-2 text-[13.5px] text-ink">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">{i + 1}</span>
                Send
                <select
                  aria-label={`${label}, step ${i + 1}: when`}
                  value={st.after}
                  onChange={(e) => onChange(value.map((x, j) => (j === i ? { ...x, after: e.target.value } : x)))}
                  className="h-8 cursor-pointer rounded-[8px] border border-line-strong bg-white px-2 text-[13.5px] font-semibold"
                >
                  {delays.map((d) => (
                    <option key={d.v} value={d.v}>
                      {d.l}
                    </option>
                  ))}
                </select>
                {i === 0 ? "after they go quiet" : "after the last one"}
                {over && <span className="text-[12px] text-subtle">· needs Growth or Pro</span>}
                {value.length > 1 && (
                  <button
                    type="button"
                    onClick={() => onChange(value.filter((_, j) => j !== i))}
                    aria-label={`${label}: remove step ${i + 1}`}
                    className="ml-auto cursor-pointer rounded-[8px] p-1 text-muted hover:bg-panel hover:text-danger"
                  >
                    <Icon name="trash" size={15} />
                  </button>
                )}
              </span>
              <TextArea aria-label={`${label}, step ${i + 1}: message`} rows={2} value={st.text} onChange={(e) => onChange(value.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)))} />
            </li>
          );
        })}
      </ol>
      <span className="flex flex-wrap items-center gap-3">
        {value.length < 3 && (
          <RowButton icon="plus" onClick={() => onChange([...value, { after: "168", text: "Hi {name}, just a gentle reminder that we’d love to see you." }])}>
            Add a step
          </RowButton>
        )}
        <span className="text-[12.5px] text-subtle">
          {"{name}"} becomes their first name. Your plan sends up to {max} step{max === 1 ? "" : "s"}.
        </span>
      </span>
    </div>
  );
}

const levels: { v: Permission["level"]; l: string }[] = [
  { v: "view", l: "See bookings only" },
  { v: "calendar", l: "Bookings and calendar" },
  { v: "full", l: "Everything, including pausing the AI" },
];

function PermissionsEditor({ value, onChange }: { value: Permission[]; onChange: (v: Permission[]) => void }) {
  const [number, setNumber] = useState("");
  return (
    <div className="flex flex-col gap-2.5">
      <ul className="m-0 flex list-none flex-col divide-y divide-line rounded-[12px] border border-line p-0">
        {value.map((p, i) => (
          <li key={p.number} className="flex flex-wrap items-center gap-3 px-3 py-2.5">
            <span className="min-w-0 flex-1 text-[14px] text-ink">{p.number}</span>
            <Dropdown aria-label={`What ${p.number} can do`} value={p.level} onChange={(e) => onChange(value.map((x, j) => (j === i ? { ...x, level: e.target.value as Permission["level"] } : x)))} className="w-64">
              {levels.map((l) => (
                <option key={l.v} value={l.v}>
                  {l.l}
                </option>
              ))}
            </Dropdown>
            {value.length > 1 && (
              <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} aria-label={`Remove ${p.number}`} className="cursor-pointer rounded-[8px] p-1 text-muted hover:bg-panel hover:text-danger">
                <Icon name="trash" size={15} />
              </button>
            )}
          </li>
        ))}
      </ul>
      <span className="flex gap-2">
        <Input aria-label="Add a number" type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="+91 number" className="w-56" />
        <RowButton
          icon="plus"
          onClick={() => {
            if (number.trim().length < 6) return;
            onChange([...value, { number: number.trim(), level: "view" }]);
            setNumber("");
          }}
        >
          Allow
        </RowButton>
      </span>
    </div>
  );
}

function VoicePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const toast = useToast();
  return (
    <div role="radiogroup" aria-label="Voice" className="grid grid-cols-[minmax(0,1fr)] gap-2 sm:grid-cols-2">
      {sampleVoices.map((v) => {
        const on = value === v.id;
        return (
          <div key={v.id} className={`flex items-center gap-3 rounded-[12px] border px-3 py-2.5 transition ${on ? "border-ink shadow-[0_0_0_1px_#1E1F2B]" : "border-line hover:border-line-strong"}`}>
            <button type="button" role="radio" aria-checked={on} onClick={() => onChange(v.id)} className="flex min-w-0 flex-1 cursor-pointer flex-col text-left">
              <span className="text-[14px] font-semibold text-ink">{v.name}</span>
              <span className="truncate text-[12.5px] text-subtle">{v.note}</span>
            </button>
            <button
              type="button"
              onClick={() => toast(`Playing ${v.name}’s sample (demo)`, "info")}
              aria-label={`Play ${v.name}’s voice`}
              className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-full bg-panel text-ink hover:bg-line"
            >
              <Icon name="play" size={13} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

function PerLocation({ value, onChange, placeholder, label }: { value: Record<string, string>; onChange: (v: Record<string, string>) => void; placeholder: string; label: string }) {
  const { locations } = useBranch();
  return (
    <div className="flex flex-col gap-2">
      {locations.map((l) => (
        <label key={l.id} className="grid grid-cols-[minmax(0,1fr)] items-center gap-1.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-3">
          <span className="text-[13.5px] text-ink-soft">{l.name}</span>
          <Input aria-label={`${label}: ${l.name}`} value={value[l.id] ?? ""} onChange={(e) => onChange({ ...value, [l.id]: e.target.value })} placeholder={placeholder} />
        </label>
      ))}
    </div>
  );
}

export function FieldRow({ f, value, changed, onChange, plan, onOpen }: { f: SetupField; value: FieldValue; changed: boolean; onChange: (v: FieldValue) => void; plan: PlanId; onOpen: (view: string) => void }) {
  const label = <Label f={f} changed={changed} plan={plan} />;
  switch (f.type) {
    case "text":
      return (
        <Row label={label} description={f.description}>
          <Input aria-label={f.label} value={value as string} onChange={(e) => onChange(e.target.value)} placeholder={f.placeholder} className="w-72" />
        </Row>
      );
    case "time":
      return (
        <Row label={label} description={f.description}>
          <Input aria-label={f.label} type="time" value={value as string} onChange={(e) => onChange(e.target.value)} className="w-36" />
        </Row>
      );
    case "select":
      return (
        <Row label={label} description={f.description}>
          <Dropdown aria-label={f.label} value={value as string} onChange={(e) => onChange(e.target.value)} className="w-72">
            {f.options.map((x) => (
              <option key={x.v} value={x.v}>
                {x.l}
              </option>
            ))}
          </Dropdown>
        </Row>
      );
    case "toggle":
      return (
        <Row label={label} description={f.description}>
          {f.locked && <span className="text-[12.5px] text-subtle">Always on</span>}
          <Switch checked={value as boolean} onChange={onChange} label={f.label} disabled={f.locked} />
        </Row>
      );
    case "link":
      return (
        <Row label={label} description={f.description}>
          <RowButton onClick={() => onOpen(f.view)}>{f.action}</RowButton>
        </Row>
      );
    case "textarea":
      return (
        <Row label={label} description={f.description} stacked>
          <TextArea aria-label={f.label} rows={2} value={value as string} onChange={(e) => onChange(e.target.value)} placeholder={f.placeholder} />
        </Row>
      );
    case "chips": {
      const v = value as string[];
      return (
        <Row label={label} description={f.description} stacked>
          <div className="flex flex-wrap gap-2" role="group" aria-label={f.label}>
            {f.options.map((x) => {
              const on = v.includes(x);
              return (
                <button key={x} type="button" aria-pressed={on} onClick={() => onChange(on ? v.filter((y) => y !== x) : [...v, x])} className={chip(on)}>
                  {on && <Icon name="check" size={13} strokeWidth={2.6} className="[&_circle]:hidden" />}
                  {x}
                </button>
              );
            })}
          </div>
        </Row>
      );
    }
    case "list":
      return (
        <Row label={label} description={f.description} stacked>
          <ListEditor value={value as string[]} onChange={onChange} placeholder={f.placeholder} label={f.label} />
        </Row>
      );
    case "voice":
      return (
        <Row label={label} description={f.description} stacked>
          <VoicePicker value={value as string} onChange={onChange} />
        </Row>
      );
    case "sequence":
      return (
        <Row label={label} description={f.description} stacked>
          <SequenceEditor value={value as Step[]} onChange={onChange} plan={plan} label={f.label} />
        </Row>
      );
    case "permissions":
      return (
        <Row label={label} description={f.description} stacked>
          <PermissionsEditor value={value as Permission[]} onChange={onChange} />
        </Row>
      );
    case "perLocation":
      return (
        <Row label={label} description={f.description} stacked>
          <PerLocation value={value as Record<string, string>} onChange={onChange} placeholder={f.placeholder} label={f.label} />
        </Row>
      );
  }
}

/** All sections of an agent's (or the business's) settings. */
export function SetupForm({ sections, values, changed = [], onChange, plan, onOpen }: Props) {
  return (
    <div className="flex flex-col">
      {sections.map((s) => (
        <div key={s.id} id={`setup-${s.id}`} className="mt-9 scroll-mt-6 first:mt-0">
          <Group title={s.title} description={s.description}>
            {s.fields.map((f) => (
              <FieldRow key={f.key} f={f} value={values[f.key]} changed={changed.includes(f.key)} onChange={(v) => onChange(f.key, v)} plan={plan} onOpen={onOpen} />
            ))}
          </Group>
        </div>
      ))}
    </div>
  );
}
