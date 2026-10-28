"use client";

import { teamPerformance } from "@/content/reports";
import { Avatar } from "../../kit";
import { BarList, SplitBar, slots } from "./charts";
import { type Model } from "./model";
import { DataTable, Panel, pct, seconds } from "./parts";

// Team: who answered conversations, how fast, how well, and how the work is
// shared between people (the AI listed first for comparison).

export function Team({ m }: { m: Model }) {
  const f = (m.range / 30) * m.scope;
  const rows = teamPerformance.map((t) => ({ ...t, conversations: Math.max(1, Math.round(t.conversations * f)), bookings: Math.round(t.bookings * f) }));
  const people = rows.filter((r) => r.name !== "Vegam AI");
  const peopleTotal = people.reduce((a, p) => a + p.conversations, 0);

  return (
    <>
      <Panel title="Performance by person" description="The AI is listed for comparison. Click a column to sort.">
        <DataTable
          label="Performance by person"
          initialSort={{ id: "conversations", desc: true }}
          rows={rows}
          columns={[
            {
              id: "name",
              label: "Name",
              value: (r) => r.name,
              render: (r) => (
                <span className="flex items-center gap-2.5">
                  <Avatar name={r.name} size={30} />
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="font-medium text-ink">{r.name}</span>
                    <span className="text-[12px] text-subtle">{r.role}</span>
                  </span>
                </span>
              ),
            },
            { id: "conversations", label: "Conversations", align: "right", value: (r) => r.conversations, render: (r) => r.conversations.toLocaleString("en-IN") },
            { id: "reply", label: "First reply", align: "right", value: (r) => r.reply, render: (r) => seconds(r.reply) },
            { id: "resolved", label: "Resolved", align: "right", value: (r) => r.resolved, render: (r) => pct(r.resolved) },
            { id: "rating", label: "Rating", align: "right", value: (r) => r.rating, render: (r) => `${r.rating.toFixed(1)} ★` },
            { id: "bookings", label: "Bookings", align: "right", value: (r) => r.bookings, render: (r) => r.bookings.toLocaleString("en-IN") },
          ]}
        />
      </Panel>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 xl:grid-cols-2">
        <Panel title="How the team shares chats" description={`${peopleTotal} conversations answered by people`}>
          <SplitBar parts={people.map((p, i) => ({ label: p.name, share: p.conversations / Math.max(1, peopleTotal), color: slots[i] }))} />
          <p className="m-0 text-[13px] text-subtle">New handovers go to whoever is free, in turn. Change this in Settings → Inbox.</p>
        </Panel>
        <Panel title="First reply by person" description="Average wait after a handover. Lower is better." table={{ columns: ["Name", "First reply"], rows: people.map((p) => [p.name, seconds(p.reply)]) }}>
          <BarList rows={people.map((p) => ({ label: p.name, value: Math.round(p.reply / 60) }))} format={(v) => `${v} min`} labelWidth={96} note={(r) => `${r.label}: ${r.value} min on average`} />
        </Panel>
      </div>
    </>
  );
}
