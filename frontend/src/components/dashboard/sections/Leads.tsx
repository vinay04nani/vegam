"use client";

import { useState } from "react";
import { sampleLeads, type Lead, type LeadTemp } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { PageTitle, SampleTag } from "../ui";

// Everyone who enquired, sorted by how interested they are, with the
// follow-ups Vegam has sent and the next step.
// Demo: "Mark contacted" changes this component's copy only.

const columns: { id: LeadTemp; title: string; body: string; dot: string }[] = [
  { id: "hot", title: "Hot", body: "Ready to book. Call these first.", dot: "bg-orange" },
  { id: "warm", title: "Warm", body: "Interested. Vegam is following up.", dot: "bg-accent" },
  { id: "cold", title: "Cold", body: "Gone quiet. Follow-ups paused.", dot: "bg-periwinkle" },
];

export function Leads() {
  const [leads, setLeads] = useState<Lead[]>(sampleLeads);
  const [contacted, setContacted] = useState<string[]>([]);

  const markContacted = (id: string) => {
    setContacted((c) => [...c, id]);
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, temp: l.temp === "hot" ? "warm" : l.temp, next: "Contacted today · follow-up in 2 days" } : l)));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Leads" body="Everyone who enquired, sorted by interest. Vegam follows up politely and stops when they reply or say STOP." />
        <SampleTag />
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-3">
        {columns.map((col) => {
          const list = leads.filter((l) => l.temp === col.id);
          return (
            <section key={col.id} aria-label={`${col.title} leads`} className="flex flex-col gap-3 rounded-[22px] bg-[#F4F4F8] p-3">
              <div className="flex items-start justify-between gap-2 px-2 pt-1">
                <div className="flex flex-col gap-0.5">
                  <h2 className="m-0 flex items-center gap-2 text-[17px] font-semibold text-ink">
                    <span className={`h-2.5 w-2.5 rounded-full ${col.dot}`} />
                    {col.title}
                  </h2>
                  <p className="m-0 text-[13.5px] text-subtle">{col.body}</p>
                </div>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[13px] font-semibold text-ink">{list.length}</span>
              </div>
              {list.length === 0 && <p className="m-0 rounded-[16px] bg-white/60 p-4 text-center text-[14px] text-subtle">No leads here.</p>}
              {list.map((l) => (
                <article key={l.id} className={`flex flex-col gap-2.5 rounded-[16px] bg-white p-4 shadow-[0_1px_2px_rgb(30_31_43/0.05)] ${col.id === "hot" ? "ring-1 ring-orange/30" : ""}`}>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[15.5px] font-semibold text-ink">{l.name}</span>
                    <span className="rounded-full bg-panel px-2 py-0.5 text-[12px] font-medium whitespace-nowrap text-muted">{l.channel}</span>
                  </div>
                  <p className="m-0 text-[14.5px] text-ink-soft">{l.interest}</p>
                  <p className="m-0 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-subtle">
                    <span>Last contact: {l.last}</span>
                    <span>
                      {l.followUps} follow-up{l.followUps === 1 ? "" : "s"} sent
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-2.5">
                    <span className={`text-[13.5px] font-semibold ${col.id === "hot" ? "text-warning" : "text-muted"}`}>{l.next}</span>
                    {contacted.includes(l.id) ? (
                      <span className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-success">
                        <Icon name="check" size={15} />
                        Contacted
                      </span>
                    ) : (
                      col.id !== "cold" && (
                        <button
                          type="button"
                          onClick={() => markContacted(l.id)}
                          className="min-h-9 cursor-pointer rounded-full border border-line-strong bg-white px-3 text-[13.5px] font-semibold text-ink hover:border-subtle"
                        >
                          Mark contacted
                        </button>
                      )
                    )}
                  </div>
                </article>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}
