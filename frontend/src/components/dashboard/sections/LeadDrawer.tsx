"use client";

import { useState } from "react";
import { leadStages, leadTemp, sampleTeam, type Lead, type LeadActivity, type LeadStage } from "@/content/dashboard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { inputClass } from "@/components/setup/fields";
import { Avatar, Badge, Button, Drawer, SourceLabel } from "../kit";

// The detail panel for one lead: score, stage, actions, AI summary, details
// and the full activity history, with notes.
// Demo: changes are kept by the Leads page only.

const activityIcon: Record<LeadActivity["kind"], IconName> = {
  enquiry: "message",
  ai: "sparkle",
  followup: "send",
  call: "phone",
  booking: "calendar",
  note: "note",
};

export const tempTone = { hot: "hot", warm: "warm", cold: "cold" } as const;
export const tempLabel = { hot: "Hot", warm: "Warm", cold: "Cold" } as const;
export const tempColor = { hot: "#EE7A2E", warm: "#E0A100", cold: "#6E8BC7" } as const;

function ScoreRing({ score }: { score: number }) {
  const r = 24;
  const c = 2 * Math.PI * r;
  const t = leadTemp(score);
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label={`Score ${score} of 100`} className="flex-none">
      <circle cx="30" cy="30" r={r} fill="none" stroke="#ECEDF2" strokeWidth="6" />
      <circle cx="30" cy="30" r={r} fill="none" stroke={tempColor[t]} strokeWidth="6" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - score / 100)} transform="rotate(-90 30 30)" />
      <text x="30" y="35" textAnchor="middle" className="fill-ink text-[15px] font-bold">
        {score}
      </text>
    </svg>
  );
}

export function LeadDrawer({
  lead,
  onClose,
  onChange,
  onOpen,
}: {
  lead: Lead | null;
  onClose: () => void;
  onChange: (lead: Lead) => void;
  onOpen: (view: string) => void;
}) {
  const [note, setNote] = useState("");
  if (!lead) return <Drawer open={false} onClose={onClose} title="">{null}</Drawer>;

  const t = leadTemp(lead.score);
  const stageIndex = leadStages.findIndex((s) => s.id === lead.stage);
  const setStage = (stage: LeadStage) => onChange({ ...lead, stage, activity: [...lead.activity, { at: "Just now", kind: "note", text: `Stage changed to ${leadStages.find((s) => s.id === stage)?.label}` }] });
  const addNote = () => {
    if (!note.trim()) return;
    onChange({ ...lead, activity: [...lead.activity, { at: "Just now", kind: "note", text: note.trim() }], lastActivity: "Just now", lastMins: 0 });
    setNote("");
  };

  return (
    <Drawer
      open
      onClose={onClose}
      title="Lead"
      footer={
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" icon="message" onClick={() => onOpen("inbox")}>
            Message
          </Button>
          <Button icon="calendar" onClick={() => onOpen("calendar")}>
            Book
          </Button>
          {lead.stage !== "lost" && (
            <Button variant="danger" onClick={() => setStage("lost")} className="ml-auto">
              Mark lost
            </Button>
          )}
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Identity and score */}
        <div className="flex items-start gap-4">
          <Avatar name={lead.name} size={48} />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="m-0 text-[19px] font-semibold text-ink">{lead.name}</p>
            <p className="m-0 text-[14px] text-subtle">{lead.phone}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <SourceLabel source={lead.source} />
              <Badge tone={tempTone[t]} dot>
                {tempLabel[t]}
              </Badge>
            </div>
          </div>
          <ScoreRing score={lead.score} />
        </div>

        {/* Stage stepper */}
        <div className="flex flex-col gap-2">
          <p className="m-0 text-[12.5px] font-semibold tracking-[0.1em] text-muted uppercase">Stage</p>
          <ol className="m-0 grid list-none grid-cols-4 gap-1.5 p-0" aria-label="Lead stage">
            {leadStages
              .filter((s) => s.id !== "lost")
              .map((s, i) => {
                const reached = lead.stage !== "lost" && i <= stageIndex;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      aria-current={lead.stage === s.id ? "step" : undefined}
                      onClick={() => setStage(s.id)}
                      className="flex w-full cursor-pointer flex-col gap-1.5 text-left"
                    >
                      <span className={`h-1.5 rounded-full ${reached ? "bg-ink" : "bg-line-strong"}`} />
                      <span className={`text-[12.5px] font-semibold ${lead.stage === s.id ? "text-ink" : "text-subtle"}`}>{s.label}</span>
                    </button>
                  </li>
                );
              })}
          </ol>
          {lead.stage === "lost" && (
            <p className="m-0 flex items-center gap-2 text-[13.5px] text-danger">
              Marked as lost.
              <button type="button" onClick={() => setStage("contacted")} className="cursor-pointer font-semibold underline underline-offset-2">
                Reopen
              </button>
            </p>
          )}
        </div>

        {/* AI summary */}
        <div className="rounded-[16px] bg-periwinkle-soft p-4">
          <p className="m-0 flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.1em] text-brand uppercase">
            <Icon name="sparkle" size={14} />
            AI summary
          </p>
          <p className="m-0 mt-1.5 text-[15px] leading-snug text-ink">{lead.summary}</p>
        </div>

        {/* Details */}
        <dl className="m-0 grid grid-cols-2 gap-x-4 gap-y-3 text-[14px]">
          <div>
            <dt className="text-subtle">Interest</dt>
            <dd className="m-0 mt-0.5 text-ink">{lead.interest}</dd>
          </div>
          <div>
            <dt className="text-subtle">Next step</dt>
            <dd className="m-0 mt-0.5 font-semibold text-ink">{lead.next}</dd>
          </div>
          <div>
            <dt className="text-subtle">Created</dt>
            <dd className="m-0 mt-0.5 text-ink">{lead.createdAt}</dd>
          </div>
          <div>
            <dt className="text-subtle">Follow-ups sent</dt>
            <dd className="m-0 mt-0.5 text-ink">{lead.followUps}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-subtle">
              <label htmlFor="lead-owner">Owner</label>
            </dt>
            <dd className="m-0 mt-1">
              <select
                id="lead-owner"
                value={lead.owner}
                onChange={(e) => onChange({ ...lead, owner: e.target.value })}
                className="min-h-10 w-full cursor-pointer rounded-[10px] border border-line-strong bg-white px-3 text-[14px] text-ink"
              >
                <option value="AI">AI assistant</option>
                {sampleTeam.map((m) => (
                  <option key={m.name} value={m.name === "You" ? "You" : m.name}>
                    {m.name}
                  </option>
                ))}
              </select>
            </dd>
          </div>
        </dl>

        {/* Activity */}
        <div className="flex flex-col gap-3">
          <p className="m-0 text-[12.5px] font-semibold tracking-[0.1em] text-muted uppercase">Activity</p>
          <ol className="relative m-0 flex list-none flex-col gap-4 p-0 before:absolute before:top-2 before:bottom-2 before:left-[13px] before:w-px before:bg-line-strong">
            {[...lead.activity].reverse().map((a, i) => (
              <li key={i} className="relative flex gap-3">
                <span className={`relative z-10 flex h-7 w-7 flex-none items-center justify-center rounded-full ring-4 ring-white ${a.kind === "ai" ? "bg-periwinkle-soft text-brand" : a.kind === "booking" ? "bg-[#E8F3EA] text-success" : "bg-panel text-muted"}`}>
                  <Icon name={activityIcon[a.kind]} size={14} />
                </span>
                <span className="flex flex-col pt-0.5">
                  <span className="text-[14.5px] leading-snug text-ink">{a.text}</span>
                  <span className="text-[12.5px] text-subtle">{a.at}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-2">
            <label htmlFor="lead-note" className="sr-only">
              Add a note
            </label>
            <textarea id="lead-note" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note for your team…" className={`${inputClass} min-h-0 py-2.5 text-[14.5px]`} />
            <Button onClick={addNote} disabled={!note.trim()} icon="note" className="w-fit">
              Add note
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
