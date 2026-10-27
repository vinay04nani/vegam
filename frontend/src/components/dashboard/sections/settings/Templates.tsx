"use client";

import { useState } from "react";
import { sampleTemplates, type Template, type TemplateStatus } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, Drawer, useToast, type BadgeTone } from "../../kit";
import { SampleTag, SettingsSection } from "../../ui";
import { Dropdown, Input, Label, List, Panel, TextArea } from "./parts";

// WhatsApp message templates. Messages sent more than 24 hours after the
// customer's last message (reminders, follow-ups, campaigns) must use a
// template Meta has approved. Demo: submissions go straight to "In review".

const statusTone: Record<TemplateStatus, BadgeTone> = { Approved: "success", "In review": "warning", Rejected: "danger" };
const samples = ["Asha", "Thursday 4:00 PM"];
const fill = (body: string) => body.replace(/\{\{(\d+)\}\}/g, (_, n) => samples[Number(n) - 1] ?? `[value ${n}]`);

/** A WhatsApp-style preview of a template with sample values. */
function Preview({ body }: { body: string }) {
  return (
    <div className="rounded-[16px] bg-[#ECE5DD] p-4">
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
      <Panel>
        <SettingsSection title="Message templates" description="Reminders, follow-ups and campaigns sent more than 24 hours after a customer’s last message must use a template that Meta approves. Approval usually takes minutes, sometimes up to a day.">
          <div className="flex items-center justify-between gap-3">
            <SampleTag />
            <Button variant="primary" icon="plus" onClick={() => setEditing(blank)}>
              New template
            </Button>
          </div>
          <List>
            {templates.map((t) => (
              <li key={t.id}>
                <button type="button" onClick={() => setEditing(t)} className="flex w-full cursor-pointer items-start gap-3 px-4 py-3.5 text-left hover:bg-[#FAFAFC]">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#E8F3EA] text-success">
                    <Icon name="message" size={16} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[13.5px] font-semibold text-ink">{t.name}</span>
                      <Badge tone={statusTone[t.status]} dot>
                        {t.status}
                      </Badge>
                    </span>
                    <span className="line-clamp-2 text-[13.5px] text-ink-soft">{t.body}</span>
                    <span className="text-[12.5px] text-subtle">
                      {t.category} · {t.language}
                    </span>
                    {t.note && <span className="text-[13px] font-medium text-danger">{t.note}</span>}
                  </span>
                  <Icon name="chevron-right" size={17} className="mt-2 flex-none text-faint" />
                </button>
              </li>
            ))}
          </List>
        </SettingsSection>

        <SettingsSection title="Fees" description="Meta charges per template message. Vegam passes this on at cost, shown in Billing.">
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[14px] text-ink-soft">
            <li className="flex gap-2">
              <Icon name="check" size={16} className="mt-0.5 flex-none text-success" />
              Replies within 24 hours of a customer’s message are free.
            </li>
            <li className="flex gap-2">
              <Icon name="check" size={16} className="mt-0.5 flex-none text-success" />
              Utility templates (reminders, confirmations) cost less than Marketing ones.
            </li>
            <li className="flex gap-2">
              <Icon name="check" size={16} className="mt-0.5 flex-none text-success" />
              Marketing templates go only to contacts who opted in.
            </li>
          </ul>
        </SettingsSection>
      </Panel>

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
            {editing.status === "Rejected" && editing.note && <p className="m-0 rounded-[12px] bg-[#FDECEC] p-3 text-[13.5px] text-danger">{editing.note}</p>}
            <Label label="Name" hint="Lowercase letters, numbers and underscores, e.g. appointment_reminder.">
              <Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value.toLowerCase().replace(/\s+/g, "_") })} placeholder="appointment_reminder" />
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <Label label="Category">
                <Dropdown value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value as Template["category"] })}>
                  <option>Utility</option>
                  <option>Marketing</option>
                </Dropdown>
              </Label>
              <Label label="Language">
                <Dropdown value={editing.language} onChange={(e) => setEditing({ ...editing, language: e.target.value })}>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Telugu</option>
                  <option>Tamil</option>
                  <option>Arabic</option>
                </Dropdown>
              </Label>
            </div>
            <Label label="Message" hint="Use {{1}}, {{2}} for details that change, like the name or time.">
              <TextArea rows={4} value={editing.body} onChange={(e) => setEditing({ ...editing, body: e.target.value })} placeholder="Hi {{1}}, a reminder of your visit at {{2}} tomorrow." />
            </Label>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" icon="plus" onClick={() => setEditing({ ...editing, body: `${editing.body}{{${vars.length + 1}}}` })}>
                Add variable
              </Button>
              {editing.category === "Marketing" && !/stop/i.test(editing.body) && (
                <Button variant="ghost" icon="plus" onClick={() => setEditing({ ...editing, body: `${editing.body.trimEnd()}\nReply STOP to opt out.` })}>
                  Add opt-out line
                </Button>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[14px] font-semibold text-ink">Preview</span>
              <Preview body={editing.body} />
              {vars.length > 0 && <span className="text-[12.5px] text-subtle">Sample values: {vars.map((v, i) => `${v} = ${samples[i] ?? "…"}`).join(", ")}</span>}
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
}
