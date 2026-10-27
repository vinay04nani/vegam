"use client";

import { useState } from "react";
import { sampleTemplates, type Template, type TemplateStatus } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, Drawer, useToast, type BadgeTone } from "../../kit";
import { Dropdown, Group, Input, RowButton, TextArea } from "./parts";

// WhatsApp message templates. Messages sent more than 24 hours after the
// customer's last message (reminders, follow-ups, campaigns) must use a
// template Meta has approved. Demo: submissions go straight to "In review".

const statusTone: Record<TemplateStatus, BadgeTone> = { Approved: "success", "In review": "warning", Rejected: "danger" };
const samples = ["Asha", "Thursday 4:00 PM"];
const fill = (body: string) => body.replace(/\{\{(\d+)\}\}/g, (_, n) => samples[Number(n) - 1] ?? `[value ${n}]`);

/** A WhatsApp-style preview of a template with sample values. */
function Preview({ body }: { body: string }) {
  return (
    <div className="rounded-[12px] bg-[#ECE5DD] p-4">
      <div className="ml-auto max-w-[300px] rounded-[10px] rounded-tr-[2px] bg-[#DCF8C6] px-3 py-2 text-[14px] leading-snug whitespace-pre-wrap text-[#111B21] shadow-[0_1px_0.5px_rgb(0_0_0/0.13)]">
        {fill(body) || <span className="text-[#667781]">Your message preview appears here</span>}
        <span className="mt-1 block text-right text-[11px] text-[#667781]">10:42 ✓✓</span>
      </div>
    </div>
  );
}

export function Templates() {
  const toast = useToast();
  const [templates, setTemplates] = useState<Template[]>(sampleTemplates);
  const [editing, setEditing] = useState<Template | null>(null);
  const blank: Template = { id: "", name: "", category: "Utility", language: "English", status: "In review", body: "" };
  const vars = editing ? [...new Set(editing.body.match(/\{\{\d+\}\}/g) ?? [])] : [];
  const validName = !!editing && /^[a-z0-9_]{3,}$/.test(editing.name);

  return (
    <>
      <Group
        title="WhatsApp templates"
        description="Reminders and campaigns sent more than 24 hours after a customer’s last message need a template approved by Meta. Approval usually takes minutes."
        action={
          <RowButton tone="primary" icon="plus" onClick={() => setEditing(blank)}>
            New
          </RowButton>
        }
      >
        {templates.map((t) => (
          <button key={t.id} type="button" onClick={() => setEditing(t)} className="-mx-2 flex w-[calc(100%+16px)] cursor-pointer items-center gap-4 rounded-[8px] px-2 py-3.5 text-left hover:bg-[#F7F7FA]">
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[13.5px] text-ink">{t.name}</span>
                <Badge tone={statusTone[t.status]}>{t.status}</Badge>
              </span>
              <span className="truncate text-[13px] text-subtle">{t.body}</span>
              {t.note && <span className="text-[13px] text-danger">{t.note}</span>}
            </span>
            <span className="hidden flex-none text-[13px] text-subtle sm:inline">
              {t.category} · {t.language}
            </span>
            <Icon name="chevron-right" size={16} className="flex-none text-faint" />
          </button>
        ))}
      </Group>

      <Group title="Fees">
        <p className="m-0 py-4 text-[14px] leading-relaxed text-ink-soft">
          Replies within 24 hours of a customer’s message are free. Meta charges for each template message after that; Utility templates (reminders, confirmations) cost less than Marketing ones. Vegam passes these fees on at cost, and Marketing templates only go to contacts who opted in.
        </p>
      </Group>

      <Drawer
        open={editing !== null}
        onClose={() => setEditing(null)}
        title={editing?.id ? "Template" : "New template"}
        footer={
          editing && (
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setEditing(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                disabled={!validName || !editing.body.trim()}
                onClick={() => {
                  const t = { ...editing, status: "In review" as const, note: undefined, id: editing.id || `t${Date.now()}` };
                  setTemplates((ts) => (editing.id ? ts.map((x) => (x.id === t.id ? t : x)) : [...ts, t]));
                  setEditing(null);
                  toast("Sent to Meta for approval");
                }}
              >
                {editing.id ? "Resubmit for approval" : "Submit for approval"}
              </Button>
            </div>
          )
        }
      >
        {editing && (
          <div className="flex flex-col gap-4">
            {editing.status === "Rejected" && editing.note && <p className="m-0 rounded-[10px] bg-[#FDECEC] p-3 text-[13.5px] text-danger">{editing.note}</p>}
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Name</span>
              <Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value.toLowerCase().replace(/\s+/g, "_") })} placeholder="appointment_reminder" />
              <span className="text-[12.5px] text-subtle">Lowercase letters, numbers and underscores.</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Category</span>
                <Dropdown value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value as Template["category"] })}>
                  <option>Utility</option>
                  <option>Marketing</option>
                </Dropdown>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Language</span>
                <Dropdown value={editing.language} onChange={(e) => setEditing({ ...editing, language: e.target.value })}>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Telugu</option>
                  <option>Tamil</option>
                  <option>Arabic</option>
                </Dropdown>
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Message</span>
              <TextArea rows={4} value={editing.body} onChange={(e) => setEditing({ ...editing, body: e.target.value })} placeholder="Hi {{1}}, a reminder of your visit at {{2}} tomorrow." />
              <span className="text-[12.5px] text-subtle">Use {"{{1}}"}, {"{{2}}"} for details that change, like the name or time.</span>
            </label>
            <div className="flex flex-wrap gap-2">
              <RowButton icon="plus" onClick={() => setEditing({ ...editing, body: `${editing.body}{{${vars.length + 1}}}` })}>
                Add variable
              </RowButton>
              {editing.category === "Marketing" && !/stop/i.test(editing.body) && (
                <RowButton icon="plus" onClick={() => setEditing({ ...editing, body: `${editing.body.trimEnd()}\nReply STOP to opt out.` })}>
                  Add opt-out line
                </RowButton>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Preview</span>
              <Preview body={editing.body} />
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
}
