"use client";

import { useEffect, useState } from "react";
import { sampleServiceNames, type Campaign, type CampaignType } from "@/content/dashboard";
import { sampleTags } from "@/content/contacts";
import { sampleTemplates } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { useBranch } from "../../branch";
import { Button, Modal, SegmentedControl } from "../../kit";
import { Dropdown, Input } from "../settings/parts";

// New campaign: who gets it (filters with a live count), which approved
// WhatsApp template it uses (with a preview), what Meta will charge, and
// when it goes out. Only customers who agreed to hear from you are counted.

export const OPTED_IN = 412;
/** Meta’s approximate fee per message in India, by template category. */
const FEES = { Marketing: 0.88, Utility: 0.13 };

const tagShare: Record<string, number> = { Regular: 0.35, New: 0.2, VIP: 0.08, Family: 0.12, Corporate: 0.05, "Needs reminder": 0.1, Lapsed: 0.15 };
const visits = [
  { v: "any", l: "Any time", f: 1 },
  { v: "30", l: "In the last 30 days", f: 0.38 },
  { v: "30-90", l: "30 to 90 days ago", f: 0.27 },
  { v: "90", l: "More than 90 days ago", f: 0.21 },
  { v: "never", l: "Never visited (leads)", f: 0.14 },
];
const leads = [
  { v: "any", l: "Anyone", f: 1 },
  { v: "customers", l: "Customers who have visited", f: 0.62 },
  { v: "hot", l: "Hot leads", f: 0.12 },
  { v: "warm", l: "Warm leads", f: 0.2 },
  { v: "cold", l: "Cold leads", f: 0.18 },
];

const typeInfo: Record<CampaignType, string> = {
  Broadcast: "One message to the people you choose, such as new hours or an offer.",
  "Win-back": "A friendly note to customers who haven’t come back in a while.",
  Rebooking: "Runs every day: a reminder when it’s about time for someone’s next visit.",
};

const fill = (t: string) => t.replace("{{1}}", "Priya").replace("{{2}}", "vegam.app/nila-co");

export function CampaignBuilder({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: (c: Campaign) => void }) {
  const { locations } = useBranch();
  const [name, setName] = useState("");
  const [type, setType] = useState<CampaignType>("Broadcast");
  const [tags, setTags] = useState<string[]>([]);
  const [visit, setVisit] = useState("any");
  const [service, setService] = useState("any");
  const [location, setLocation] = useState("all");
  const [lead, setLead] = useState("any");
  const [template, setTemplate] = useState(sampleTemplates.find((t) => t.status === "Approved")!.id);
  const [when, setWhen] = useState<"now" | "later">("now");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");

  useEffect(() => {
    if (!open) return;
    setName("");
    setType("Broadcast");
    setTags([]);
    setVisit("any");
    setService("any");
    setLocation("all");
    setLead("any");
    setWhen("now");
    setDate("");
  }, [open]);

  useEffect(() => {
    if (type === "Win-back") setVisit("90");
    if (type === "Rebooking") setVisit("30-90");
  }, [type]);

  const factor =
    (tags.length
      ? Math.min(
          1,
          tags.reduce((a, t) => a + (tagShare[t] ?? 0.1), 0),
        )
      : 1) *
    (visits.find((x) => x.v === visit)?.f ?? 1) *
    (service === "any" ? 1 : 0.3) *
    (location === "all" ? 1 : (locations.find((l) => l.id === location)?.share ?? 1)) *
    (leads.find((x) => x.v === lead)?.f ?? 1);
  const count = Math.round(OPTED_IN * factor);
  const tpl = sampleTemplates.find((t) => t.id === template)!;
  const rate = FEES[tpl.category];
  const fee = Math.round(count * rate);
  const parts = [
    tags.length ? `Tagged ${tags.join(" or ")}` : "",
    visit !== "any" ? `Last visit: ${visits.find((x) => x.v === visit)!.l.toLowerCase()}` : "",
    service !== "any" ? `Booked ${service}` : "",
    location !== "all" ? `${locations.find((l) => l.id === location)?.name}` : "",
    lead !== "any" ? leads.find((x) => x.v === lead)!.l : "",
  ].filter(Boolean);
  const who = parts.length ? parts.join(" · ") : "Everyone who opted in";
  const ok = name.trim().length > 1 && count > 0 && (when === "now" || type === "Rebooking" || !!date);
  const whenText = type === "Rebooking" ? "Runs every day at 10 AM" : when === "now" ? "Sending now" : `${date} at ${time}`;

  const save = (status: Campaign["status"]) => {
    onSave({ id: `c${Date.now()}`, name: name.trim(), type, audience: count, sent: status === "Sent" ? count : 0, replies: 0, bookings: 0, status, who, template: tpl.name, when: status === "Draft" ? "Not scheduled" : whenText });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="New campaign"
      width={820}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={name.trim().length < 2} onClick={() => save("Draft")}>
            Save draft
          </Button>
          <Button variant="primary" icon={when === "now" && type !== "Rebooking" ? "send" : "clock"} disabled={!ok} onClick={() => save(type === "Rebooking" ? "Running" : when === "now" ? "Sent" : "Scheduled")}>
            {type === "Rebooking" ? "Turn on" : when === "now" ? `Send to ${count}` : "Schedule"}
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_260px]">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Name</span>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. New evening slots" autoFocus />
            </label>
            <div className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Type</span>
              <SegmentedControl label="Campaign type" size="sm" value={type} onChange={setType} options={(Object.keys(typeInfo) as CampaignType[]).map((t) => ({ id: t, label: t }))} />
              <span className="text-[13px] text-subtle">{typeInfo[type]}</span>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="m-0 text-[15px] font-semibold text-ink">Who gets it</h3>
            <div className="flex flex-col gap-1.5">
              <span className="text-[13.5px] text-ink-soft">Tags (any of these)</span>
              <div className="flex flex-wrap gap-1.5">
                {sampleTags.map((t) => {
                  const on = tags.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setTags((x) => (on ? x.filter((y) => y !== t) : [...x, t]))}
                      className={`min-h-8 cursor-pointer rounded-full border px-3 text-[13px] font-medium ${on ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:border-ink/40"}`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-ink-soft">Last visit</span>
                <Dropdown value={visit} onChange={(e) => setVisit(e.target.value)}>
                  {visits.map((x) => (
                    <option key={x.v} value={x.v}>
                      {x.l}
                    </option>
                  ))}
                </Dropdown>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-ink-soft">Has booked</span>
                <Dropdown value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="any">Any service</option>
                  {sampleServiceNames.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </Dropdown>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-ink-soft">Location</span>
                <Dropdown value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="all">All locations</option>
                  {locations.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </Dropdown>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-ink-soft">Lead status</span>
                <Dropdown value={lead} onChange={(e) => setLead(e.target.value)}>
                  {leads.map((x) => (
                    <option key={x.v} value={x.v}>
                      {x.l}
                    </option>
                  ))}
                </Dropdown>
              </label>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="m-0 text-[15px] font-semibold text-ink">Message</h3>
            <label className="flex flex-col gap-1.5">
              <span className="text-[13.5px] text-ink-soft">WhatsApp template</span>
              <Dropdown value={template} onChange={(e) => setTemplate(e.target.value)}>
                {sampleTemplates.map((t) => (
                  <option key={t.id} value={t.id} disabled={t.status !== "Approved"}>
                    {t.name} · {t.category}
                    {t.status !== "Approved" ? ` (${t.status.toLowerCase()})` : ""}
                  </option>
                ))}
              </Dropdown>
              <span className="text-[12.5px] text-subtle">Messages to people who haven’t written in 24 hours must use a template Meta has approved. New templates are in Settings → Templates.</span>
            </label>
          </section>

          {type !== "Rebooking" && (
            <section className="flex flex-col gap-3">
              <h3 className="m-0 text-[15px] font-semibold text-ink">When</h3>
              <SegmentedControl
                label="When to send"
                size="sm"
                value={when}
                onChange={setWhen}
                options={[
                  { id: "now", label: "Send now" },
                  { id: "later", label: "Schedule" },
                ]}
              />
              {when === "later" && (
                <span className="grid grid-cols-2 gap-3 sm:max-w-[360px]">
                  <Input aria-label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                  <Input aria-label="Time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </span>
              )}
              <span className="text-[12.5px] text-subtle">Never sent during quiet hours (9 PM to 8 AM); those wait until morning.</span>
            </section>
          )}
        </div>

        <aside className="flex flex-col gap-4 md:sticky md:top-0 md:self-start">
          <div className="flex flex-col gap-1 rounded-[14px] border border-line bg-[#FAFAFC] p-4">
            <span className="text-[13px] text-subtle">Will reach</span>
            <span className="text-[30px] leading-none font-semibold tracking-[-0.02em] text-ink">{count}</span>
            <span className="text-[13px] text-subtle">people · {who}</span>
            <span className="mt-2 flex items-start gap-1.5 border-t border-line pt-2 text-[12.5px] text-subtle">
              <Icon name="shield" size={14} className="mt-0.5 flex-none" />
              Only customers who opted in. 14 who replied STOP and 23 never asked are left out.
            </span>
          </div>
          <div className="flex flex-col gap-1 rounded-[14px] border border-line p-4">
            <span className="text-[13px] text-subtle">WhatsApp fees</span>
            <span className="text-[20px] font-semibold text-ink">≈ ₹{fee.toLocaleString("en-IN")}</span>
            <span className="text-[12.5px] text-subtle">About ₹{rate} per {tpl.category.toLowerCase()} message, charged by Meta and passed on at cost.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-medium text-subtle">Preview</span>
            <div className="rounded-[14px] bg-[#E9E1D8] p-3">
              <div className="rounded-[10px] rounded-tl-none bg-white p-3 text-[13px] leading-[1.45] text-[#111B21] shadow-[0_1px_1px_rgb(0_0_0/0.08)]">
                {fill(tpl.body)}
                <span className="mt-2 block text-[11.5px] text-[#667781]">Reply STOP to opt out</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Modal>
  );
}
