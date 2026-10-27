"use client";

import { useState } from "react";
import { sampleApiKeys, sampleWebhooks, webhookEvents } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, Menu, Modal, useToast } from "../../kit";
import { SampleTag, SettingsSection } from "../../ui";
import { Input, Label, List, Panel } from "./parts";

// API keys and webhooks for connecting Vegam to other software.
// Demo: keys are made up and nothing is sent.

export function Developers() {
  const toast = useToast();
  const [keys, setKeys] = useState(sampleApiKeys);
  const [hooks, setHooks] = useState(sampleWebhooks);
  const [newKey, setNewKey] = useState<{ open: boolean; name: string; created: string | null }>({ open: false, name: "", created: null });
  const [hook, setHook] = useState<{ open: boolean; url: string; events: string[] }>({ open: false, url: "", events: ["booking.created"] });

  return (
    <>
      <Panel>
        <SettingsSection title="API keys" description="Let your own software read bookings and contacts, or create bookings. Keep keys secret; anyone with a key can use your account.">
          <div className="flex items-center justify-between gap-3">
            <SampleTag />
            <Button variant="primary" icon="key" onClick={() => setNewKey({ open: true, name: "", created: null })}>
              Create key
            </Button>
          </div>
          <List>
            {keys.map((k) => (
              <li key={k.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-panel text-muted">
                  <Icon name="key" size={16} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[14.5px] font-semibold text-ink">{k.name}</span>
                  <span className="font-mono text-[12.5px] text-subtle">{k.key}</span>
                </span>
                <span className="text-[12.5px] text-subtle">
                  Created {k.created} · used {k.lastUsed.toLowerCase()}
                </span>
                <Menu
                  label={`More for ${k.name}`}
                  items={[
                    {
                      label: "Revoke key",
                      onSelect: () => {
                        setKeys((ks) => ks.filter((x) => x.id !== k.id));
                        toast("Key revoked");
                      },
                    },
                  ]}
                />
              </li>
            ))}
          </List>
        </SettingsSection>

        <SettingsSection title="Webhooks" description="Vegam sends a POST request to your URL when something happens, signed so you can check it came from us.">
          <List>
            {hooks.map((h) => (
              <li key={h.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate font-mono text-[13.5px] font-semibold text-ink">{h.url}</span>
                    <Badge tone="success" dot>
                      {h.status}
                    </Badge>
                  </span>
                  <span className="text-[12.5px] text-subtle">
                    {h.events.join(", ")} · last delivery {h.lastDelivery}
                  </span>
                </span>
                <Button variant="ghost" icon="send" onClick={() => toast("Test event sent (demo)")} ariaLabel={`Send a test event to ${h.url}`}>
                  Test
                </Button>
                <Menu
                  label={`More for ${h.url}`}
                  items={[
                    {
                      label: "Delete webhook",
                      onSelect: () => {
                        setHooks((hs) => hs.filter((x) => x.id !== h.id));
                        toast("Webhook deleted");
                      },
                    },
                  ]}
                />
              </li>
            ))}
          </List>
          <span>
            <Button icon="plus" onClick={() => setHook({ open: true, url: "", events: ["booking.created"] })}>
              Add webhook
            </Button>
          </span>
        </SettingsSection>
      </Panel>

      <Modal
        open={newKey.open}
        onClose={() => setNewKey({ open: false, name: "", created: null })}
        title={newKey.created ? "Copy your key" : "Create an API key"}
        footer={
          newKey.created ? (
            <Button variant="primary" onClick={() => setNewKey({ open: false, name: "", created: null })}>
              Done
            </Button>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setNewKey({ open: false, name: "", created: null })}>
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
            <div className="flex items-center gap-2 rounded-[12px] bg-panel p-3">
              <code className="min-w-0 flex-1 font-mono text-[13.5px] break-all text-ink">{newKey.created}</code>
              <Button
                icon="copy"
                onClick={() => {
                  navigator.clipboard?.writeText(newKey.created!).catch(() => undefined);
                  toast("Key copied");
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        ) : (
          <Label label="Name" hint="So you know what uses it, e.g. “Website booking widget”.">
            <Input value={newKey.name} onChange={(e) => setNewKey((n) => ({ ...n, name: e.target.value }))} autoFocus />
          </Label>
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
          <Label label="Endpoint URL" hint="Must start with https://">
            <Input type="url" value={hook.url} onChange={(e) => setHook((h) => ({ ...h, url: e.target.value }))} placeholder="https://example.com/hooks/vegam" autoFocus />
          </Label>
          <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
            <legend className="mb-2 text-[14px] font-semibold text-ink">Events</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {webhookEvents.map((ev) => (
                <label key={ev} className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-line px-3 py-2">
                  <input
                    type="checkbox"
                    checked={hook.events.includes(ev)}
                    onChange={() => setHook((h) => ({ ...h, events: h.events.includes(ev) ? h.events.filter((x) => x !== ev) : [...h.events, ev] }))}
                    className="h-4 w-4 accent-[#23243A]"
                  />
                  <span className="font-mono text-[13px] text-ink">{ev}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </Modal>
    </>
  );
}
