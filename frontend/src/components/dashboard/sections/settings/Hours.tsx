"use client";

import { useState } from "react";
import { sampleClosures, sampleHours, weekDays, type DayHours } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { Button, Modal, useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch } from "./parts";

// Weekly opening hours, closures and booking rules. The AI only
// offers times inside these hours. Demo: kept in this component.

export function Hours() {
  const toast = useToast();
  const [hours, setHours] = useState<DayHours[]>(sampleHours);
  const [closures, setClosures] = useState(sampleClosures);
  const [adding, setAdding] = useState(false);
  const [closure, setClosure] = useState({ date: "", reason: "" });
  const [askOutside, setAskOutside] = useState(true);
  const setDay = (i: number, patch: Partial<DayHours>) => setHours((h) => h.map((d, j) => (j === i ? { ...d, ...patch } : d)));

  return (
    <>
      <Group
        title="Opening hours"
        description="The AI only offers times when you’re open."
        action={
          <button type="button" onClick={() => setHours((h) => h.map((d, i) => (i < 5 ? { ...h[0] } : d)))} className="cursor-pointer text-[13.5px] font-medium text-indigo hover:underline">
            Copy Monday to weekdays
          </button>
        }
      >
        {weekDays.map((day, i) => {
          const d = hours[i];
          return (
            <Row key={day} label={day}>
              {d.open ? (
                <span className="flex items-center gap-2">
                  <Input type="time" aria-label={`${day} opens at`} value={d.from} onChange={(e) => setDay(i, { from: e.target.value })} className="w-[132px]" />
                  <span className="text-[13px] text-subtle">to</span>
                  <Input type="time" aria-label={`${day} closes at`} value={d.to} onChange={(e) => setDay(i, { to: e.target.value })} className="w-[132px]" />
                </span>
              ) : (
                <span className="w-[284px] text-right text-[14px] text-subtle">Closed</span>
              )}
              <Switch checked={d.open} onChange={(v) => setDay(i, { open: v })} label={`Open on ${day}`} />
            </Row>
          );
        })}
      </Group>

      <Group title="Holidays and closures" description="The AI won’t book these days and tells people when you reopen." action={<RowButton icon="plus" onClick={() => setAdding(true)}>Add</RowButton>}>
        {closures.length === 0 && <Row label={<span className="text-subtle">No closures planned.</span>} />}
        {closures.map((c) => (
          <Row key={c.id} label={c.date} description={`${c.reason} · closed all day`}>
            <button
              type="button"
              aria-label={`Remove ${c.date}`}
              onClick={() => setClosures((cs) => cs.filter((x) => x.id !== c.id))}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger"
            >
              <Icon name="trash" size={15} />
            </button>
          </Row>
        ))}
      </Group>

      <Group title="Booking rules">
        <Row label="Time between bookings" description="A gap to get ready for the next person.">
          <Dropdown aria-label="Time between bookings" defaultValue="10" className="w-44">
            <option value="0">None</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
          </Dropdown>
        </Row>
        <Row label="Shortest notice" description="How soon before a visit people can book.">
          <Dropdown aria-label="Shortest notice" defaultValue="60" className="w-44">
            <option value="0">Any time</option>
            <option value="60">1 hour</option>
            <option value="180">3 hours</option>
            <option value="1440">1 day</option>
          </Dropdown>
        </Row>
        <Row label="Book up to">
          <Dropdown aria-label="Book up to" defaultValue="30" className="w-44">
            <option value="7">1 week ahead</option>
            <option value="30">1 month ahead</option>
            <option value="90">3 months ahead</option>
          </Dropdown>
        </Row>
        <Row label="Bookings at the same time">
          <Dropdown aria-label="Bookings at the same time" defaultValue="1" className="w-44">
            <option value="1">One at a time</option>
            <option value="2">Up to 2</option>
            <option value="3">Up to 3</option>
          </Dropdown>
        </Row>
        <Row label="Check with me outside opening hours" description="The customer hears “I’ll check and confirm shortly”.">
          <Switch checked={askOutside} onChange={setAskOutside} label="Check with me outside opening hours" />
        </Row>
      </Group>


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
                const label = new Date(closure.date).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
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
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Date</span>
            <Input type="date" value={closure.date} onChange={(e) => setClosure((c) => ({ ...c, date: e.target.value }))} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Reason (optional)</span>
            <Input value={closure.reason} onChange={(e) => setClosure((c) => ({ ...c, reason: e.target.value }))} placeholder="e.g. Diwali" />
            <span className="text-[12.5px] text-subtle">The AI tells customers this.</span>
          </label>
        </div>
      </Modal>
    </>
  );
}
