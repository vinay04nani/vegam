"use client";

import { useState } from "react";
import { sampleApiKeys, sampleWebhooks, webhookEvents } from "@/content/settings";
import { Button, Modal, useToast } from "../../kit";
import { Group, Input, Row, RowButton } from "./parts";

// API keys and webhooks for connecting Vegam to other software.
// Demo: keys are made up and nothing is sent.

export function Developers() {
  const toast = useToast();
  const [keys, setKeys] = useState(sampleApiKeys);
  const [hooks, setHooks] = useState(sampleWebhooks);
  const [newKey, setNewKey] = useState<{ open: boolean; name: string; created: string | null }>({ open: false, name: "", created: null });
  const [hook, setHook] = useState<{ open: boolean; url: string; events: string[] }>({ open: false, url: "", events: ["booking.created"] });
  const closeKey = () => setNewKey({ open: false, name: "", created: null });

  return (
    <>
      <Group
        title="API keys"
        description="Let your own software read bookings and contacts, or create bookings. Keep keys secret."
        action={
          <RowButton tone="primary" icon="plus" onClick={() => setNewKey({ open: true, name: "", created: null })}>
            Create key
          </RowButton>
        }
      >
        {keys.length === 0 && <Row label={<span className="text-subtle">No keys yet.</span>} />}
        {keys.map((k) => (
          <Row key={k.id} label={k.name} description={<span className="font-mono">{k.key}</span>}>
            <span className="hidden text-[13px] text-subtle sm:inline">Used {k.lastUsed.toLowerCase()}</span>
            <RowButton
              tone="danger"
              ariaLabel={`Revoke ${k.name}`}
              onClick={() => {
                setKeys((ks) => ks.filter((x) => x.id !== k.id));
                toast("Key revoked");
              }}
            >
              Revoke
            </RowButton>
          </Row>
        ))}
      </Group>

      <Group
        title="Webhooks"
        description="Vegam sends a signed POST request to your URL when something happens."
        action={
          <RowButton icon="plus" onClick={() => setHook({ open: true, url: "", events: ["booking.created"] })}>
            Add
          </RowButton>
        }
      >
        {hooks.length === 0 && <Row label={<span className="text-subtle">No webhooks yet.</span>} />}
        {hooks.map((h) => (
          <Row key={h.id} label={<span className="font-mono text-[13.5px]">{h.url}</span>} description={`${h.events.join(", ")} · last delivery ${h.lastDelivery}`}>
            <RowButton onClick={() => toast("Test event sent (demo)")} ariaLabel={`Send a test event to ${h.url}`}>
              Test
            </RowButton>
            <RowButton
              tone="danger"
              ariaLabel={`Delete webhook ${h.url}`}
              onClick={() => {
                setHooks((hs) => hs.filter((x) => x.id !== h.id));
                toast("Webhook deleted");
              }}
            >
              Delete
            </RowButton>
          </Row>
        ))}
      </Group>

      <Modal
        open={newKey.open}
        onClose={closeKey}
        title={newKey.created ? "Copy your key" : "Create an API key"}
        footer={
          newKey.created ? (
            <Button variant="primary" onClick={closeKey}>
              Done
            </Button>
          ) : (
            <>
              <Button variant="ghost" onClick={closeKey}>
                Cancel
              </Button>
              <Button
                variant="primary"
                disabled={newKey.name.trim().length < 2}
                onClick={() => {
                  const secret = `vg_live_demo${Math.random().toString(36).slice(2, 14)}`;
                  setKeys((ks) => [...ks, { id: `k${Date.now()}`, name: newKey.name.trim(), key: `vg_live_••••••••••••${secret.slice(-4)}`, created: "Today", lastUsed: "Never" }]);
                  setNewKey((n) => ({ ...n, created: secret }));
                }}
              >
                Create key
              </Button>
            </>
          )
        }
      >
        {newKey.created ? (
          <div className="flex flex-col gap-3">
            <p className="m-0 text-[14px] text-ink-soft">This is the only time you’ll see the full key. Store it somewhere safe.</p>
            <div className="flex items-center gap-2 rounded-[10px] bg-panel p-3">
              <code className="min-w-0 flex-1 font-mono text-[13.5px] break-all text-ink">{newKey.created}</code>
              <RowButton
                icon="copy"
                onClick={() => {
                  navigator.clipboard?.writeText(newKey.created!).catch(() => undefined);
                  toast("Key copied");
                }}
              >
                Copy
              </RowButton>
            </div>
          </div>
        ) : (
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Name</span>
            <Input value={newKey.name} onChange={(e) => setNewKey((n) => ({ ...n, name: e.target.value }))} placeholder="e.g. Website booking widget" autoFocus />
          </label>
        )}
      </Modal>

      <Modal
        open={hook.open}
        onClose={() => setHook((h) => ({ ...h, open: false }))}
        title="Add a webhook"
        footer={
          <>
            <Button variant="ghost" onClick={() => setHook((h) => ({ ...h, open: false }))}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!/^https:\/\/.+\..+/.test(hook.url) || hook.events.length === 0}
              onClick={() => {
                setHooks((hs) => [...hs, { id: `w${Date.now()}`, url: hook.url, events: hook.events, status: "Active", lastDelivery: "none yet" }]);
                setHook({ open: false, url: "", events: ["booking.created"] });
                toast("Webhook added");
              }}
            >
              Add webhook
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Endpoint URL</span>
            <Input type="url" value={hook.url} onChange={(e) => setHook((h) => ({ ...h, url: e.target.value }))} placeholder="https://example.com/hooks/vegam" autoFocus />
          </label>
          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2 text-[14px] font-medium text-ink">Events</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {webhookEvents.map((ev) => (
                <label key={ev} className="flex cursor-pointer items-center gap-2 text-[13.5px]">
                  <input
                    type="checkbox"
                    checked={hook.events.includes(ev)}
                    onChange={() => setHook((h) => ({ ...h, events: h.events.includes(ev) ? h.events.filter((x) => x !== ev) : [...h.events, ev] }))}
                    className="h-4 w-4 accent-[#23243A]"
                  />
                  <span className="font-mono text-ink">{ev}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </Modal>
    </>
  );
}
