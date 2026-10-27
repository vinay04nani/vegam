"use client";

import { useState } from "react";
import { sampleClosures, sampleHours, sampleLocations, weekDays, type DayHours } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { Badge, Button, Modal, Toggle, useToast } from "../../kit";
import { SampleTag, SaveBar, SettingsSection } from "../../ui";
import { Dropdown, Input, Label, List, Panel } from "./parts";

// Locations, weekly opening hours, closures and booking rules. The AI only
// offers times inside these hours.
// Demo: kept in this component.

export function Hours() {
  const toast = useToast();
  const [hours, setHours] = useState<DayHours[]>(sampleHours);
  const [closures, setClosures] = useState(sampleClosures);
  const [dirty, setDirty] = useState(false);
  const [adding, setAdding] = useState(false);
  const [closure, setClosure] = useState({ date: "", reason: "" });

  const setDay = (i: number, patch: Partial<DayHours>) => {
    setHours((h) => h.map((d, j) => (j === i ? { ...d, ...patch } : d)));
    setDirty(true);
  };

  return (
    <>
      <Panel>
        <SettingsSection title="Locations" description="Each location has its own hours, services and team, all in one inbox.">
          <List>
            {sampleLocations.map((l) => (
              <li key={l.id} className="flex items-center gap-3 px-4 py-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-panel text-muted">
                  <Icon name="pin" size={17} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="flex items-center gap-2 text-[14.5px] font-semibold text-ink">
                    {l.name}
                    {l.primary && <Badge>Primary</Badge>}
                  </span>
                  <span className="truncate text-[13px] text-subtle">{l.address}</span>
                </span>
                <Button variant="ghost" icon="pencil" ariaLabel={`Edit ${l.name}`} onClick={() => toast("Editing locations comes with your account (demo)", "info")}>
                  Edit
                </Button>
              </li>
            ))}
          </List>
          <span>
            <Button icon="plus" onClick={() => toast("Extra locations are part of the Pro plan (demo)", "info")}>
              Add a location
            </Button>
          </span>
        </SettingsSection>

        <SettingsSection title="Opening hours" description="The AI assistant only offers times when you’re open, and tells people your hours when you’re closed.">
          <div className="flex items-center justify-between">
            <SampleTag />
            <button
              type="button"
              onClick={() => {
                setHours((h) => h.map((d, i) => (i < 5 ? { ...d, from: h[0].from, to: h[0].to, open: h[0].open } : d)));
                setDirty(true);
              }}
              className="cursor-pointer text-[13.5px] font-semibold text-indigo hover:underline"
            >
              Copy Monday to weekdays
            </button>
          </div>
          <List>
            {weekDays.map((day, i) => {
              const d = hours[i];
              return (
                <li key={day} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5">
                  <span className="w-32">
                    <Toggle checked={d.open} onChange={(v) => setDay(i, { open: v })} label={day} />
                  </span>
                  {d.open ? (
                    <span className="flex items-center gap-2">
                      <label>
                        <span className="sr-only">{day} opens at</span>
                        <Input type="time" value={d.from} onChange={(e) => setDay(i, { from: e.target.value })} className="w-[120px]" />
                      </label>
                      <span className="text-[13px] text-subtle">to</span>
                      <label>
                        <span className="sr-only">{day} closes at</span>
                        <Input type="time" value={d.to} onChange={(e) => setDay(i, { to: e.target.value })} className="w-[120px]" />
                      </label>
                    </span>
                  ) : (
                    <span className="text-[14px] text-subtle">Closed</span>
                  )}
                </li>
              );
            })}
          </List>
        </SettingsSection>

        <SettingsSection title="Holidays and closures" description="Days you’re closed. The AI won’t book them and tells people when you reopen.">
          {closures.length > 0 && (
            <List>
              {closures.map((c) => (
                <li key={c.id} className="flex items-center gap-3 px-4 py-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#FFF3E6] text-warning">
                    <Icon name="calendar" size={16} />
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className="text-[14.5px] font-semibold text-ink">{c.date}</span>
                    <span className="text-[13px] text-subtle">{c.reason} · closed all day</span>
                  </span>
                  <button
                    type="button"
                    aria-label={`Remove ${c.date}`}
                    onClick={() => setClosures((cs) => cs.filter((x) => x.id !== c.id))}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger"
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </li>
              ))}
            </List>
          )}
          <span>
            <Button icon="plus" onClick={() => setAdding(true)}>
              Add a closure
            </Button>
          </span>
        </SettingsSection>

        <SettingsSection title="Booking rules" description="How the AI fits bookings into your day.">
          <div className="grid gap-4 sm:grid-cols-2" onChange={() => setDirty(true)}>
            <Label label="Time between bookings">
              <Dropdown defaultValue="10">
                <option value="0">None</option>
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
              </Dropdown>
            </Label>
            <Label label="Shortest notice">
              <Dropdown defaultValue="60">
                <option value="0">Any time</option>
                <option value="60">1 hour</option>
                <option value="180">3 hours</option>
                <option value="1440">1 day</option>
              </Dropdown>
            </Label>
            <Label label="Book up to">
              <Dropdown defaultValue="30">
                <option value="7">1 week ahead</option>
                <option value="30">1 month ahead</option>
                <option value="90">3 months ahead</option>
              </Dropdown>
            </Label>
            <Label label="Bookings at the same time">
              <Dropdown defaultValue="1">
                <option value="1">One at a time</option>
                <option value="2">Up to 2</option>
                <option value="3">Up to 3</option>
              </Dropdown>
            </Label>
          </div>
          <Toggle checked onChange={() => setDirty(true)} label="Ask me before confirming bookings outside opening hours" description="The customer hears “I’ll check and confirm shortly”." />
        </SettingsSection>
      </Panel>

      {dirty && (
        <SaveBar
          inDialog
          onDiscard={() => {
            setHours(sampleHours);
            setDirty(false);
          }}
          onSave={() => {
            setDirty(false);
            toast("Hours saved");
          }}
        />
      )}

      <Modal
        open={adding}
        onClose={() => setAdding(false)}
        title="Add a closure"
        footer={
          <>
            <Button variant="ghost" onClick={() => setAdding(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!closure.date}
              onClick={() => {
                const d = new Date(closure.date);
                const label = d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
                setClosures((cs) => [...cs, { id: `x${Date.now()}`, date: label, reason: closure.reason || "Closed", allDay: true }]);
                setClosure({ date: "", reason: "" });
                setAdding(false);
                toast("Closure added");
              }}
            >
              Add closure
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <Label label="Date">
            <Input type="date" value={closure.date} onChange={(e) => setClosure((c) => ({ ...c, date: e.target.value }))} />
          </Label>
          <Label label="Reason (optional)" hint="The AI tells customers this, e.g. “We’re closed for Diwali”.">
            <Input value={closure.reason} onChange={(e) => setClosure((c) => ({ ...c, reason: e.target.value }))} placeholder="e.g. Diwali" />
          </Label>
        </div>
      </Modal>
    </>
  );
}
