"use client";

import { useState } from "react";
import { replyFolders, type SavedReply } from "@/content/dashboard";
import { Icon } from "@/components/ui/Icon";
import { Button, Drawer, useToast } from "../../kit";
import { replyStore, useSavedReplies } from "../inbox/repliesStore";
import { Dropdown, Group, Input, Row, RowButton, TextArea } from "./parts";

// Saved replies your team inserts in the inbox by typing "/" and a shortcut.
// Grouped by folder, with how often each is used. {name} becomes the
// customer's first name. Demo: changes last for this visit.

const blank: SavedReply = { id: "", title: "", shortcut: "", folder: "General", text: "", uses: 0 };

export function SavedReplies() {
  const toast = useToast();
  const replies = useSavedReplies();
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<SavedReply | null>(null);
  const q = query.trim().toLowerCase();
  const shown = replies.filter((r) => !q || `${r.title} ${r.shortcut} ${r.text}`.toLowerCase().includes(q));
  const taken = editing ? replies.some((r) => r.id !== editing.id && r.shortcut === editing.shortcut.trim()) : false;
  const ok = !!editing && editing.title.trim() && editing.text.trim() && /^[a-z0-9-]+$/.test(editing.shortcut.trim()) && !taken;

  return (
    <>
      <Group
        title="Your saved replies"
        description="Type / in the inbox, then the shortcut. {name} becomes the customer’s first name."
        action={
          <RowButton tone="primary" icon="plus" onClick={() => setEditing({ ...blank })}>
            New reply
          </RowButton>
        }
      >
        <div className="py-3">
          <label className="relative block">
            <span className="sr-only">Search saved replies</span>
            <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-subtle" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search saved replies" className="w-full pl-9" />
          </label>
        </div>
        {shown.length === 0 && <p className="m-0 py-4 text-[14px] text-subtle">No saved replies match.</p>}
        {replyFolders
          .filter((f) => shown.some((r) => r.folder === f))
          .map((f) => (
            <div key={f} className="flex flex-col">
              <p className="m-0 pt-4 pb-1 text-[12.5px] font-medium text-subtle">{f}</p>
              {shown
                .filter((r) => r.folder === f)
                .map((r) => (
                  <Row
                    key={r.id}
                    label={
                      <span className="flex min-w-0 flex-col">
                        <span className="flex flex-wrap items-baseline gap-2">
                          {r.title}
                          <span className="font-mono text-[12.5px] text-subtle">/{r.shortcut}</span>
                        </span>
                        <span className="line-clamp-2 text-[13px] text-subtle">{r.text}</span>
                      </span>
                    }
                  >
                    <span className="text-[12.5px] whitespace-nowrap text-subtle">Used {r.uses}×</span>
                    <RowButton onClick={() => setEditing(r)} ariaLabel={`Edit ${r.title}`}>
                      Edit
                    </RowButton>
                  </Row>
                ))}
            </div>
          ))}
      </Group>

      <Drawer
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.id ? "Edit saved reply" : "New saved reply"}
        footer={
          <>
            {editing?.id && (
              <Button
                variant="danger"
                className="mr-auto"
                onClick={() => {
                  replyStore.remove(editing.id);
                  setEditing(null);
                  toast("Saved reply deleted");
                }}
              >
                Delete
              </Button>
            )}
            <Button variant="ghost" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!ok}
              onClick={() => {
                if (!editing) return;
                replyStore.save({ ...editing, id: editing.id || `r${Date.now()}`, title: editing.title.trim(), shortcut: editing.shortcut.trim(), text: editing.text.trim() });
                setEditing(null);
                toast("Saved reply saved");
              }}
            >
              Save
            </Button>
          </>
        }
      >
        {editing && (
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Name</span>
              <Input
                value={editing.title}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    title: e.target.value,
                    shortcut:
                      editing.id || editing.shortcut
                        ? editing.shortcut
                        : e.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, "")
                            .slice(0, 16),
                  })
                }
                placeholder="e.g. Parking"
                autoFocus
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Shortcut</span>
                <span className="relative block">
                  <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 font-mono text-[14px] text-subtle">/</span>
                  <Input value={editing.shortcut} onChange={(e) => setEditing({ ...editing, shortcut: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })} className="w-full pl-6 font-mono" />
                </span>
                {taken && <span className="text-[12.5px] text-danger">Another reply uses /{editing.shortcut}</span>}
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Folder</span>
                <Dropdown value={editing.folder} onChange={(e) => setEditing({ ...editing, folder: e.target.value })}>
                  {replyFolders.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </Dropdown>
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Message</span>
              <TextArea rows={5} value={editing.text} onChange={(e) => setEditing({ ...editing, text: e.target.value })} placeholder="Hi {name}, …" />
              <span className="text-[12.5px] text-subtle">
                Insert:{" "}
                {["{name}"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setEditing({ ...editing, text: `${editing.text}${editing.text && !editing.text.endsWith(" ") ? " " : ""}${v}` })}
                    className="cursor-pointer font-mono text-ink underline underline-offset-2"
                  >
                    {v}
                  </button>
                ))}
              </span>
            </label>
          </div>
        )}
      </Drawer>
    </>
  );
}
