"use client";

import { useState } from "react";
import { sampleCampaigns, type Campaign, type CampaignType } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Field, PrimaryButton, Select, TextInput, inputClass } from "@/components/setup/fields";
import { Card, PageTitle, SampleTag } from "../ui";

// Messages to customers who opted in: broadcasts, win-back and rebooking
// reminders, with what they led to.
// Demo: new campaigns are saved as drafts in this component only.

const typeInfo: Record<CampaignType, string> = {
  Broadcast: "One message to everyone who opted in, such as new hours or an offer.",
  "Win-back": "A friendly note to customers who haven’t come back in a while.",
  Rebooking: "A reminder when it’s about time for someone’s next visit.",
};

const statusStyle: Record<Campaign["status"], string> = {
  Sent: "bg-[#E8F3EA] text-success",
  Running: "bg-periwinkle-soft text-brand",
  Scheduled: "bg-[#FFF3E6] text-warning",
  Draft: "bg-panel text-muted",
};

const OPTED_IN = 412;

export function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(sampleCampaigns);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ name: "", type: "Broadcast" as CampaignType, message: "" });

  const save = () => {
    if (!form.name.trim() || !form.message.trim()) return;
    setCampaigns((cs) => [{ id: `n${cs.length}`, name: form.name.trim(), type: form.type, audience: OPTED_IN, sent: 0, replies: 0, bookings: 0, status: "Draft" }, ...cs]);
    setForm({ name: "", type: "Broadcast", message: "" });
    setCreating(false);
  };

  const totals = campaigns.reduce((t, c) => ({ sent: t.sent + c.sent, replies: t.replies + c.replies, bookings: t.bookings + c.bookings }), { sent: 0, replies: 0, bookings: 0 });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <PageTitle title="Campaigns" body={`Messages to customers who agreed to hear from you (${OPTED_IN} people). Anyone who replies STOP is never messaged again.`} />
        <div className="flex items-center gap-3">
          <SampleTag />
          <button
            type="button"
            onClick={() => setCreating((c) => !c)}
            aria-expanded={creating}
            className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full bg-ink px-5 text-[15px] font-semibold text-white"
          >
            <Icon name="plus" size={17} />
            New campaign
          </button>
        </div>
      </div>

      {creating && (
        <Card title="New campaign" className="max-w-[720px]">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <TextInput value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Weekend slots" />
            </Field>
            <Field label="Type" hint={typeInfo[form.type]}>
              <Select value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as CampaignType }))}>
                {(Object.keys(typeInfo) as CampaignType[]).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
            </Field>
          </div>
          <Field label="Message" hint="Messages sent more than 24 hours after a customer’s last message use a template Meta approves first, usually within a day.">
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Hi {name}, we’ve opened new evening slots this week. Reply BOOK to pick a time."
              className={`${inputClass} py-3`}
            />
          </Field>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton onClick={save} disabled={!form.name.trim() || !form.message.trim()}>
              Save draft
            </PrimaryButton>
            <button type="button" onClick={() => setCreating(false)} className="min-h-11 cursor-pointer px-3 text-[15px] font-semibold text-subtle hover:text-ink">
              Cancel
            </button>
          </div>
        </Card>
      )}

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
                {c.type} · {c.audience} people
              </span>
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
