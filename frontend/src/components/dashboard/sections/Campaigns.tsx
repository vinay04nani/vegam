"use client";

import { useState } from "react";
import { sampleCampaigns, type Campaign } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { useToast } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { CampaignBuilder, OPTED_IN } from "./campaigns/CampaignBuilder";

// Messages to customers who opted in: broadcasts, win-back and rebooking
// reminders, with what they led to.
// Demo: new campaigns are kept in this component only.

const statusStyle: Record<Campaign["status"], string> = {
  Sent: "bg-[#E8F3EA] text-success",
  Running: "bg-periwinkle-soft text-brand",
  Scheduled: "bg-[#FFF3E6] text-warning",
  Draft: "bg-panel text-muted",
};

export function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(sampleCampaigns);
  const [creating, setCreating] = useState(false);
  const toast = useToast();

  const totals = campaigns.reduce((t, c) => ({ sent: t.sent + c.sent, replies: t.replies + c.replies, bookings: t.bookings + c.bookings }), { sent: 0, replies: 0, bookings: 0 });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Campaigns" body={`Messages to customers who agreed to hear from you (${OPTED_IN} people). Anyone who replies STOP is never messaged again.`} />
        <div className="flex items-center gap-3">
          <SampleTag />
          <button type="button" onClick={() => setCreating(true)} className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full bg-ink px-5 text-[15px] font-semibold text-white">
            <Icon name="plus" size={17} />
            New campaign
          </button>
        </div>
      </div>

      <CampaignBuilder
        open={creating}
        onClose={() => setCreating(false)}
        onSave={(c) => {
          setCampaigns((cs) => [c, ...cs]);
          toast(c.status === "Draft" ? "Campaign saved as a draft" : c.status === "Sent" ? `Sending to ${c.audience} people` : c.status === "Running" ? "Rebooking reminders turned on" : `Scheduled: ${c.when}`);
        }}
      />

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Messages sent", value: totals.sent },
          { label: "Replies", value: totals.replies },
          { label: "Bookings", value: totals.bookings },
        ].map((t) => (
          <div key={t.label} className="flex flex-col gap-1 rounded-[18px] border border-line bg-white p-4">
            <span className="text-[26px] leading-none font-bold text-ink">{t.value}</span>
            <span className="text-[13.5px] text-subtle">{t.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {campaigns.map((c) => (
          <article key={c.id} className="flex flex-col gap-3 rounded-[20px] border border-line bg-white p-5 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-periwinkle-soft text-indigo">
              <Icon name={c.type === "Broadcast" ? "megaphone" : c.type === "Win-back" ? "users" : "calendar"} size={20} />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-[16px] font-semibold text-ink">{c.name}</span>
                <span className={`rounded-full px-2 py-0.5 text-[12px] font-semibold ${statusStyle[c.status]}`}>{c.status}</span>
              </span>
              <span className="text-[13.5px] text-subtle">
                {c.type} · {c.audience} people{c.who ? ` · ${c.who}` : ""}
              </span>
              {(c.template || c.when) && (
                <span className="text-[12.5px] text-faint">
                  {c.template && `Template: ${c.template}`}
                  {c.template && c.when && " · "}
                  {c.when}
                </span>
              )}
            </div>
            <dl className="m-0 grid flex-none grid-cols-3 gap-5 text-center">
              {[
                ["Sent", c.sent],
                ["Replies", c.replies],
                ["Bookings", c.bookings],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt className="text-[12.5px] text-subtle">{k}</dt>
                  <dd className="m-0 text-[18px] font-bold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
