"use client";

import { useState } from "react";
import { sampleTags } from "@/content/contacts";
import { Icon } from "@/components/ui/Icon";
import { Dropdown, Group, Input, Row, RowButton, Switch } from "./parts";

// Tags and extra fields on each contact, and how duplicates are handled.
// Demo: kept here.

export function ContactFields() {
  const [tags, setTags] = useState(sampleTags);
  const [tag, setTag] = useState("");
  const [fields, setFields] = useState([
    { name: "Birthday", type: "Date" },
    { name: "Preferred staff", type: "Text" },
  ]);
  const [merge, setMerge] = useState(true);
  return (
    <>
      <Group title="Tags" description="Group contacts for campaigns and reports.">
        <div className="flex flex-wrap items-center gap-1.5 py-4">
          {tags.map((t) => (
            <span key={t} className="inline-flex h-7 items-center gap-1 rounded-full bg-panel pr-1 pl-3 text-[13px] text-ink">
              {t}
              <button type="button" aria-label={`Delete tag ${t}`} onClick={() => setTags((ts) => ts.filter((x) => x !== t))} className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-white hover:text-ink">
                <Icon name="close" size={11} />
              </button>
            </span>
          ))}
          <form onSubmit={(e) => { e.preventDefault(); if (tag.trim() && !tags.includes(tag.trim())) setTags([...tags, tag.trim()]); setTag(""); }} className="flex items-center">
            <Input aria-label="New tag" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="New tag" className="h-7 w-32 rounded-full text-[13px]" />
          </form>
        </div>
      </Group>
      <Group title="Custom fields" description="Extra details your team and the AI can use." action={<RowButton icon="plus" onClick={() => setFields([...fields, { name: "", type: "Text" }])}>Add</RowButton>}>
        {fields.map((f, i) => (
          <div key={i} className="flex items-center gap-2 py-3">
            <Input aria-label="Field name" value={f.name} onChange={(e) => setFields(fields.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))} placeholder="Field name" className="min-w-0 flex-1" />
            <Dropdown aria-label="Field type" value={f.type} onChange={(e) => setFields(fields.map((x, j) => (j === i ? { ...x, type: e.target.value } : x)))} className="w-32">
              <option>Text</option>
              <option>Number</option>
              <option>Date</option>
              <option>Yes / no</option>
            </Dropdown>
            <button type="button" aria-label={`Remove ${f.name || "field"}`} onClick={() => setFields(fields.filter((_, j) => j !== i))} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger">
              <Icon name="trash" size={15} />
            </button>
          </div>
        ))}
      </Group>
      <Group title="Duplicates">
        <Row label="Merge contacts with the same number" description="Chats from WhatsApp, calls and your booking link join one contact.">
          <Switch checked={merge} onChange={setMerge} label="Merge duplicates" />
        </Row>
      </Group>
    </>
  );
}
