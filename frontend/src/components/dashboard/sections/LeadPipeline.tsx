"use client";

import { useState, type DragEvent } from "react";
import { leadStages, leadTemp, type Lead, type LeadStage } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Avatar, IconButton, Menu, sourceIcon } from "../kit";
import { tempColor, tempLabel } from "./LeadDrawer";

// The Leads pipeline: one column per stage, compact cards, drag and drop
// between columns, and a "⋯" menu on each card for keyboard and touch.

const stageColor: Record<LeadStage, string> = {
  new: "#4A47E0",
  contacted: "#6B7280",
  qualified: "#D99A00",
  booked: "#2E7D32",
  lost: "#C41010",
};

type Props = {
  leads: Lead[];
  onOpen: (id: string) => void;
  onMove: (id: string, stage: LeadStage) => void;
  onAdd: (stage: LeadStage) => void;
};

function LeadCard({ lead, onOpen, onMove, dragging, onDragStart, onDragEnd }: { lead: Lead; onOpen: () => void; onMove: (s: LeadStage) => void; dragging: boolean; onDragStart: (e: DragEvent) => void; onDragEnd: () => void }) {
  const t = leadTemp(lead.score);
  const urgent = lead.next.startsWith("Call");
  return (
    <article
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`group relative flex cursor-grab flex-col hover:z-10 focus-within:z-20 gap-2.5 rounded-[14px] border border-line bg-white p-3.5 shadow-[0_1px_2px_rgb(30_31_43/0.05)] transition hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_8px_20px_rgb(30_31_43/0.08)] active:cursor-grabbing ${dragging ? "opacity-50" : ""}`}
    >
      {urgent && (
        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#FFF3E6] px-2 py-0.5 text-[11.5px] font-semibold text-warning">
          <Icon name="phone" size={11} />
          {lead.next}
        </span>
      )}
      <div className="flex items-center gap-2.5">
        <Avatar name={lead.name} size={30} />
        <div className="flex min-w-0 flex-1 flex-col">
          {/* The name button stretches over the card, so the whole card opens the lead. */}
          <button type="button" onClick={onOpen} className="truncate text-left text-[14.5px] font-semibold text-ink outline-none after:absolute after:inset-0 after:rounded-[14px] focus-visible:after:ring-2 focus-visible:after:ring-indigo">
            {lead.name}
          </button>
        </div>
        <span
          title={`Score ${lead.score} · ${tempLabel[t]}`}
          aria-label={`Score ${lead.score}, ${tempLabel[t]}`}
          className="inline-flex flex-none items-center gap-1.5 rounded-full bg-panel px-2 py-0.5 text-[12.5px] font-bold text-ink tabular-nums"
        >
          <span className="h-2 w-2 rounded-full" style={{ background: tempColor[t] }} />
          {lead.score}
        </span>
      </div>

      <p className="m-0 line-clamp-2 text-[13.5px] leading-snug text-ink-soft">{lead.interest}</p>

      <div className="flex items-center gap-2 border-t border-line pt-2.5 text-[12.5px] text-subtle">
        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-panel" title={`From ${lead.source}`} aria-label={`From ${lead.source}`} role="img">
          <Icon name={sourceIcon[lead.source] ?? "message"} size={13} className="text-muted" />
        </span>
        <span className="min-w-0 truncate">{lead.lastActivity}</span>
        <span className="ml-auto flex-none" title={lead.owner === "AI" ? "Handled by the AI" : `Owner: ${lead.owner}`}>
          {lead.owner === "AI" ? (
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-ink text-accent">
              <Icon name="sparkle" size={11} />
            </span>
          ) : (
            <Avatar name={lead.owner} size={22} />
          )}
        </span>
        {/* Above the stretched name button, so it gets its own clicks. */}
        <div className="relative z-10 -mr-1.5">
          <Menu
            label={`Actions for ${lead.name}`}
            items={[
              { label: "Move to", heading: true },
              ...leadStages.map((s) => ({ label: s.label, checked: s.id === lead.stage, disabled: s.id === lead.stage, onSelect: () => onMove(s.id) })),
              { label: "Open lead", onSelect: onOpen },
            ]}
          />
        </div>
      </div>
    </article>
  );
}

export function LeadPipeline({ leads, onOpen, onMove, onAdd }: Props) {
  const [dragId, setDragId] = useState<string | null>(null);
  const [over, setOver] = useState<LeadStage | null>(null);

  return (
    <div className="-mx-4 snap-x snap-mandatory overflow-x-auto px-4 pb-3 sm:mx-0 sm:snap-none sm:px-0">
      <div className="grid w-max grid-cols-[repeat(5,85vw)] items-start gap-3 sm:w-auto sm:min-w-[1100px] sm:grid-cols-5">
        {leadStages.map((st) => {
          const col = leads.filter((l) => l.stage === st.id);
          const avg = col.length ? Math.round(col.reduce((n, l) => n + l.score, 0) / col.length) : 0;
          const isOver = over === st.id && dragId !== null;
          return (
            <section key={st.id} aria-label={`${st.label} leads`} className="flex snap-start flex-col gap-2.5">
              <header className="relative overflow-hidden rounded-[14px] border border-line bg-white px-3.5 pt-3.5 pb-3">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px]" style={{ background: stageColor[st.id] }} />
                <div className="flex min-h-9 items-center gap-2">
                  <h3 className="m-0 text-[14.5px] font-semibold text-ink">{st.label}</h3>
                  <span className="rounded-full bg-panel px-2 py-0.5 text-[12px] font-semibold text-muted tabular-nums">{col.length}</span>
                  {st.id !== "lost" && <IconButton icon="plus" label={`Add lead to ${st.label}`} onClick={() => onAdd(st.id)} className="ml-auto h-7 w-7 border-transparent" />}
                </div>
                <p className="m-0 mt-0.5 text-[12.5px] text-subtle">{st.id === "lost" ? "Closed" : col.length ? `Avg score ${avg}` : "Empty"}</p>
              </header>

              <div
                onDragOver={(e) => {
                  if (!dragId) return;
                  e.preventDefault();
                  setOver(st.id);
                }}
                onDragLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOver(null);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragId) onMove(dragId, st.id);
                  setDragId(null);
                  setOver(null);
                }}
                className={`flex min-h-[200px] flex-col gap-2.5 rounded-[16px] p-2 transition ${isOver ? "bg-periwinkle-soft ring-2 ring-indigo/40" : "bg-[#F4F4F8]"}`}
              >
                {col.map((l) => (
                  <LeadCard
                    key={l.id}
                    lead={l}
                    dragging={dragId === l.id}
                    onOpen={() => onOpen(l.id)}
                    onMove={(s) => onMove(l.id, s)}
                    onDragStart={(e) => {
                      e.dataTransfer.effectAllowed = "move";
                      e.dataTransfer.setData("text/plain", l.id);
                      setDragId(l.id);
                    }}
                    onDragEnd={() => {
                      setDragId(null);
                      setOver(null);
                    }}
                  />
                ))}
                {col.length === 0 && (
                  <p className="m-0 flex flex-1 items-center justify-center rounded-[12px] border border-dashed border-line-strong p-5 text-center text-[13px] text-subtle">
                    {isOver ? "Drop here" : "No leads in this stage"}
                  </p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
