"use client";

import { useMemo, useState, type FormEvent } from "react";
import { leadStages, leadTemp, sampleLeads, sampleTeam, type Lead, type LeadSource, type LeadStage, type LeadTemp } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Field, Select, TextInput } from "@/components/setup/fields";
import { Avatar, Badge, Button, EmptyState, Modal, SegmentedControl, SourceLabel, StatCard, sourceIcon, type BadgeTone } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { LeadDrawer, tempColor, tempLabel, tempTone } from "./LeadDrawer";

// Everyone who enquired, as a sortable table or a pipeline board, with a
// detail drawer for each lead.
// Demo: edits, bulk actions and new leads are kept in this component only.

type SortKey = "score" | "name" | "created" | "activity";
type Sort = { key: SortKey; dir: "asc" | "desc" };

const sources: LeadSource[] = ["WhatsApp", "Instagram", "Messenger", "Website", "Missed call", "Ad form"];
const stageTone: Record<LeadStage, BadgeTone> = { new: "brand", contacted: "neutral", qualified: "warm", booked: "success", lost: "danger" };
const stageLabel = Object.fromEntries(leadStages.map((s) => [s.id, s.label])) as Record<LeadStage, string>;

function ScoreCell({ score }: { score: number }) {
  const t = leadTemp(score);
  return (
    <span className="flex items-center gap-2.5">
      <span className="w-7 text-right text-[14px] font-bold text-ink tabular-nums">{score}</span>
      <span className="hidden h-1.5 w-14 overflow-hidden rounded-full bg-panel xl:block" aria-hidden="true">
        <span className="block h-full rounded-full" style={{ width: `${score}%`, background: tempColor[t] }} />
      </span>
      <Badge tone={tempTone[t]}>{tempLabel[t]}</Badge>
    </span>
  );
}

function SortHeader({ label, k, sort, onSort, className = "" }: { label: string; k: SortKey; sort: Sort; onSort: (k: SortKey) => void; className?: string }) {
  const active = sort.key === k;
  return (
    <th scope="col" aria-sort={active ? (sort.dir === "asc" ? "ascending" : "descending") : "none"} className={`px-3 py-3 text-left ${className}`}>
      <button type="button" onClick={() => onSort(k)} className={`inline-flex cursor-pointer items-center gap-1 text-[12.5px] font-semibold tracking-[0.04em] whitespace-nowrap uppercase ${active ? "text-ink" : "text-muted hover:text-ink"}`}>
        {label}
        <Icon name="chevron-down" size={14} className={`transition ${active ? "opacity-100" : "opacity-30"} ${active && sort.dir === "asc" ? "rotate-180" : ""}`} />
      </button>
    </th>
  );
}

export function Leads({ onOpen }: { onOpen: (view: string) => void }) {
  const [leads, setLeads] = useState<Lead[]>(sampleLeads);
  const [query, setQuery] = useState("");
  const [temp, setTemp] = useState<"all" | LeadTemp>("all");
  const [source, setSource] = useState<"all" | LeadSource>("all");
  const [sort, setSort] = useState<Sort>({ key: "score", dir: "desc" });
  const [view, setView] = useState<"table" | "pipeline">("table");
  const [selected, setSelected] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({ name: "", phone: "", source: "WhatsApp" as LeadSource, interest: "" });

  const counts = useMemo(() => {
    const c = { all: leads.length, hot: 0, warm: 0, cold: 0 };
    leads.forEach((l) => c[leadTemp(l.score)]++);
    return c;
  }, [leads]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = leads.filter(
      (l) =>
        (temp === "all" || leadTemp(l.score) === temp) &&
        (source === "all" || l.source === source) &&
        (!q || `${l.name} ${l.phone} ${l.interest}`.toLowerCase().includes(q)),
    );
    const value = (l: Lead) => (sort.key === "score" ? l.score : sort.key === "created" ? -l.createdMins : sort.key === "activity" ? -l.lastMins : 0);
    return [...list].sort((a, b) => {
      const r = sort.key === "name" ? a.name.localeCompare(b.name) : value(a) - value(b);
      return sort.dir === "asc" ? r : -r;
    });
  }, [leads, query, temp, source, sort]);

  const open = leads.find((l) => l.id === openId) ?? null;
  const update = (l: Lead) => setLeads((ls) => ls.map((x) => (x.id === l.id ? l : x)));
  const onSort = (k: SortKey) => setSort((s) => (s.key === k ? { key: k, dir: s.dir === "asc" ? "desc" : "asc" } : { key: k, dir: k === "name" ? "asc" : "desc" }));
  const allSelected = visible.length > 0 && visible.every((l) => selected.includes(l.id));
  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const bulk = (fn: (l: Lead) => Lead) => {
    setLeads((ls) => ls.map((l) => (selected.includes(l.id) ? fn(l) : l)));
    setSelected([]);
  };

  const addLead = (e: FormEvent) => {
    e.preventDefault();
    if (draft.name.trim().length < 2) return;
    const lead: Lead = {
      id: `n${Date.now()}`,
      name: draft.name.trim(),
      phone: draft.phone.trim() || "Not added",
      source: draft.source,
      score: 50,
      stage: "new",
      owner: "AI",
      interest: draft.interest.trim() || "Added by hand",
      summary: "Added by your team. Vegam will follow up on the channel they came from.",
      createdAt: "Just now",
      createdMins: 0,
      lastActivity: "Just now",
      lastMins: 0,
      followUps: 0,
      next: "First follow-up today",
      activity: [{ at: "Just now", kind: "note", text: "Lead added by your team" }],
    };
    setLeads((ls) => [lead, ...ls]);
    setDraft({ name: "", phone: "", source: "WhatsApp", interest: "" });
    setAdding(false);
    setOpenId(lead.id);
  };

  const booked = leads.filter((l) => l.stage === "booked").length;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Leads" body="Everyone who enquired, scored by how ready they are to book. Vegam follows up politely and stops when they reply or say STOP." />
        <div className="flex items-center gap-3">
          <SampleTag />
          <Button variant="primary" icon="plus" onClick={() => setAdding(true)}>
            Add lead
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="New this week" value={leads.filter((l) => l.createdMins < 7 * 1440).length} note="From every channel" icon="users" />
        <StatCard label="Hot leads" value={counts.hot} note="Score 70 or more" icon="sparkle" />
        <StatCard label="Booked from leads" value={`${Math.round((booked / Math.max(1, leads.length)) * 100)}%`} note={`${booked} of ${leads.length} leads`} icon="calendar" />
        <StatCard label="Average first reply" value="6 sec" note="Day and night" icon="clock" />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-3 lg:flex-row lg:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search leads</span>
          <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, number or interest"
            className="min-h-10 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-10 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <SegmentedControl
            label="Filter by temperature"
            size="sm"
            value={temp}
            onChange={setTemp}
            options={[
              { id: "all", label: `All ${counts.all}` },
              { id: "hot", label: `Hot ${counts.hot}` },
              { id: "warm", label: `Warm ${counts.warm}` },
              { id: "cold", label: `Cold ${counts.cold}` },
            ]}
          />
          <label className="relative">
            <span className="sr-only">Source</span>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value as "all" | LeadSource)}
              className="min-h-10 cursor-pointer appearance-none rounded-[10px] border border-line-strong bg-white pr-8 pl-3 text-[14px] font-medium text-ink"
            >
              <option value="all">All sources</option>
              {sources.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <Icon name="chevron-down" size={14} className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-subtle" />
          </label>
          <SegmentedControl
            label="View"
            size="sm"
            value={view}
            onChange={setView}
            options={[
              { id: "table", label: "Table", icon: "table" },
              { id: "pipeline", label: "Pipeline", icon: "board" },
            ]}
          />
        </div>
      </div>

      {/* Bulk actions */}
      {selected.length > 0 && (
        <div role="region" aria-label="Bulk actions" className="flex flex-wrap items-center gap-2 rounded-[14px] bg-ink px-4 py-2.5 text-white">
          <span className="mr-2 text-[14px] font-semibold">{selected.length} selected</span>
          <button
            type="button"
            onClick={() => bulk((l) => ({ ...l, stage: l.stage === "new" ? "contacted" : l.stage, lastActivity: "Just now", lastMins: 0, activity: [...l.activity, { at: "Just now", kind: "note", text: "Marked as contacted" }] }))}
            className="min-h-8 cursor-pointer rounded-[8px] bg-white/12 px-3 text-[13.5px] font-semibold hover:bg-white/20"
          >
            Mark contacted
          </button>
          <label className="relative">
            <span className="sr-only">Assign to</span>
            <select
              value=""
              onChange={(e) => e.target.value && bulk((l) => ({ ...l, owner: e.target.value }))}
              className="min-h-8 cursor-pointer appearance-none rounded-[8px] bg-white/12 pr-7 pl-3 text-[13.5px] font-semibold text-white hover:bg-white/20 [&>option]:text-ink"
            >
              <option value="">Assign to…</option>
              <option value="AI">AI assistant</option>
              {sampleTeam.map((m) => (
                <option key={m.name}>{m.name}</option>
              ))}
            </select>
            <Icon name="chevron-down" size={13} className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2" />
          </label>
          <button type="button" onClick={() => setSelected([])} className="ml-auto cursor-pointer text-[13.5px] font-semibold text-white/75 hover:text-white">
            Clear
          </button>
        </div>
      )}

      {view === "table" ? (
        <div className="overflow-hidden rounded-[18px] border border-line bg-white">
          {visible.length === 0 ? (
            <EmptyState icon="users" title="No leads match" body="Try another filter or search." />
          ) : (
            <>
              {/* Desktop table */}
              <table className="hidden w-full border-collapse md:table">
                <thead className="border-b border-line bg-[#FAFAFC]">
                  <tr>
                    <th scope="col" className="w-10 py-3 pl-4">
                      <input
                        type="checkbox"
                        aria-label="Select all"
                        checked={allSelected}
                        onChange={() => setSelected(allSelected ? [] : visible.map((l) => l.id))}
                        className="h-4 w-4 cursor-pointer accent-[#23243A]"
                      />
                    </th>
                    <SortHeader label="Lead" k="name" sort={sort} onSort={onSort} />
                    <th scope="col" className="hidden px-3 py-3 text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase lg:table-cell">
                      Source
                    </th>
                    <SortHeader label="Score" k="score" sort={sort} onSort={onSort} />
                    <th scope="col" className="px-3 py-3 text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">
                      Stage
                    </th>
                    <th scope="col" className="hidden px-3 py-3 text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase xl:table-cell">
                      Owner
                    </th>
                    <SortHeader label="Last activity" k="activity" sort={sort} onSort={onSort} className="hidden lg:table-cell" />
                    <th scope="col" className="px-3 py-3 text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">
                      Next step
                    </th>
                    <th scope="col" className="w-10 pr-4">
                      <span className="sr-only">Open</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((l) => {
                    const isSel = selected.includes(l.id);
                    return (
                      <tr
                        key={l.id}
                        onClick={() => setOpenId(l.id)}
                        className={`cursor-pointer border-b border-line transition last:border-b-0 ${isSel ? "bg-periwinkle-soft/50" : "hover:bg-[#FAFAFC]"}`}
                      >
                        <td className="py-3 pl-4" onClick={(e) => e.stopPropagation()}>
                          <input type="checkbox" aria-label={`Select ${l.name}`} checked={isSel} onChange={() => toggle(l.id)} className="h-4 w-4 cursor-pointer accent-[#23243A]" />
                        </td>
                        <td className="px-3 py-3">
                          <span className="flex items-center gap-3">
                            <Avatar name={l.name} size={34} />
                            <span className="flex min-w-0 flex-col">
                              <span className="truncate text-[14.5px] font-semibold text-ink">{l.name}</span>
                              <span className="max-w-[260px] truncate text-[13px] text-subtle">{l.interest}</span>
                            </span>
                          </span>
                        </td>
                        <td className="hidden px-3 py-3 lg:table-cell">
                          <SourceLabel source={l.source} />
                        </td>
                        <td className="px-3 py-3">
                          <ScoreCell score={l.score} />
                        </td>
                        <td className="px-3 py-3">
                          <Badge tone={stageTone[l.stage]}>{stageLabel[l.stage]}</Badge>
                        </td>
                        <td className="hidden px-3 py-3 xl:table-cell">
                          <span className="flex items-center gap-2 text-[13.5px] whitespace-nowrap text-ink-soft">
                            {l.owner === "AI" ? (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-accent">
                                <Icon name="sparkle" size={12} />
                              </span>
                            ) : (
                              <Avatar name={l.owner} size={24} />
                            )}
                            {l.owner === "AI" ? "AI" : l.owner}
                          </span>
                        </td>
                        <td className="hidden px-3 py-3 text-[13.5px] whitespace-nowrap text-subtle lg:table-cell">{l.lastActivity}</td>
                        <td className="px-3 py-3">
                          <span className={`text-[13.5px] font-semibold whitespace-nowrap ${l.next.startsWith("Call") ? "text-warning" : "text-ink-soft"}`}>{l.next}</span>
                        </td>
                        <td className="pr-4 text-right">
                          <Icon name="chevron-right" size={18} className="text-faint" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Phone list */}
              <ul className="m-0 list-none p-0 md:hidden">
                {visible.map((l) => (
                  <li key={l.id} className="border-b border-line last:border-b-0">
                    <button type="button" onClick={() => setOpenId(l.id)} className="flex w-full cursor-pointer items-start gap-3 p-4 text-left">
                      <Avatar name={l.name} size={38} />
                      <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                        <span className="flex items-center justify-between gap-2">
                          <span className="truncate text-[15px] font-semibold text-ink">{l.name}</span>
                          <ScoreCell score={l.score} />
                        </span>
                        <span className="truncate text-[13.5px] text-subtle">{l.interest}</span>
                        <span className="flex flex-wrap items-center gap-2">
                          <Badge tone={stageTone[l.stage]}>{stageLabel[l.stage]}</Badge>
                          <SourceLabel source={l.source} />
                        </span>
                        <span className={`text-[13px] font-semibold ${l.next.startsWith("Call") ? "text-warning" : "text-ink-soft"}`}>{l.next}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="m-0 border-t border-line bg-[#FAFAFC] px-4 py-2.5 text-[13px] text-subtle">
                Showing {visible.length} of {leads.length} leads
              </p>
            </>
          )}
        </div>
      ) : (
        /* Pipeline board */
        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="grid min-w-[1080px] grid-cols-5 gap-3">
            {leadStages.map((st) => {
              const col = visible.filter((l) => l.stage === st.id);
              return (
                <section key={st.id} aria-label={`${st.label} leads`} className="flex min-h-[320px] flex-col gap-2.5 rounded-[18px] bg-[#F4F4F8] p-2.5">
                  <div className="flex items-center justify-between px-1.5 pt-1">
                    <Badge tone={stageTone[st.id]}>{st.label}</Badge>
                    <span className="text-[13px] font-semibold text-muted">{col.length}</span>
                  </div>
                  {col.map((l) => (
                    <article key={l.id} className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-white p-3 shadow-[0_1px_2px_rgb(30_31_43/0.04)]">
                      <button type="button" onClick={() => setOpenId(l.id)} className="flex cursor-pointer items-center gap-2.5 text-left">
                        <Avatar name={l.name} size={28} />
                        <span className="min-w-0 flex-1 truncate text-[14px] font-semibold text-ink">{l.name}</span>
                      </button>
                      <p className="m-0 line-clamp-2 text-[13px] text-subtle">{l.interest}</p>
                      <div className="flex items-center justify-between gap-2">
                        <Badge tone={tempTone[leadTemp(l.score)]}>
                          {l.score} · {tempLabel[leadTemp(l.score)]}
                        </Badge>
                        <Icon name={sourceIcon[l.source]} size={15} className="text-muted" />
                      </div>
                      <label className="relative">
                        <span className="sr-only">Move {l.name} to</span>
                        <select
                          value=""
                          onChange={(e) => e.target.value && update({ ...l, stage: e.target.value as LeadStage, activity: [...l.activity, { at: "Just now", kind: "note", text: `Moved to ${stageLabel[e.target.value as LeadStage]}` }] })}
                          className="min-h-8 w-full cursor-pointer appearance-none rounded-[8px] border border-line bg-[#FAFAFC] pr-7 pl-2.5 text-[12.5px] font-medium text-ink-soft"
                        >
                          <option value="">Move to…</option>
                          {leadStages
                            .filter((s) => s.id !== l.stage)
                            .map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.label}
                              </option>
                            ))}
                        </select>
                        <Icon name="chevron-down" size={13} className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-subtle" />
                      </label>
                    </article>
                  ))}
                  {col.length === 0 && <p className="m-0 rounded-[12px] border border-dashed border-line-strong p-4 text-center text-[13px] text-subtle">No leads</p>}
                </section>
              );
            })}
          </div>
        </div>
      )}

      <LeadDrawer key={open?.id ?? "none"} lead={open} onClose={() => setOpenId(null)} onChange={update} onOpen={onOpen} />

      <Modal
        open={adding}
        onClose={() => setAdding(false)}
        title="Add a lead"
        footer={
          <>
            <Button variant="ghost" onClick={() => setAdding(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="add-lead" disabled={draft.name.trim().length < 2}>
              Add lead
            </Button>
          </>
        }
      >
        <form id="add-lead" onSubmit={addLead} className="flex flex-col gap-4">
          <Field label="Name">
            <TextInput value={draft.name} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} placeholder="e.g. A. Rao" autoFocus />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone (optional)">
              <TextInput type="tel" value={draft.phone} onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))} placeholder="+91 98765 43210" />
            </Field>
            <Field label="Source">
              <Select value={draft.source} onChange={(e) => setDraft((d) => ({ ...d, source: e.target.value as LeadSource }))}>
                {sources.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </Select>
            </Field>
          </div>
          <Field label="What are they interested in?">
            <TextInput value={draft.interest} onChange={(e) => setDraft((d) => ({ ...d, interest: e.target.value }))} placeholder="e.g. Wants a weekend slot" />
          </Field>
        </form>
      </Modal>
    </div>
  );
}
