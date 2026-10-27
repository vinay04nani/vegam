"use client";

import { useState } from "react";
import { Dropdown, Group, Row, Switch } from "./parts";

// Messages Vegam sends on its own around a booking. Each uses an approved
// template and only goes to people who can receive it.
// Demo: kept in this component.

type Rule = { id: string; title: string; body: string; on: boolean; timing?: { options: string[]; value: string } };

const initial: Rule[] = [
  { id: "confirm", title: "Booking confirmation", body: "As soon as a booking is made or changed.", on: true },
  { id: "reminder", title: "Reminder before the visit", body: "Customers reply YES to confirm or CHANGE to move it.", on: true, timing: { options: ["2 hours before", "The evening before", "24 hours before", "24 and 2 hours before"], value: "24 hours before" } },
  { id: "noshow", title: "No-show follow-up", body: "A kind note offering a new time.", on: true, timing: { options: ["15 minutes after", "1 hour after", "The next morning"], value: "1 hour after" } },
  { id: "review", title: "Review request", body: "Asks happy customers for a Google review.", on: false, timing: { options: ["2 hours after", "The next day", "3 days after"], value: "2 hours after" } },
  { id: "rebook", title: "Time to rebook", body: "Reminds regulars when it’s been a while.", on: false, timing: { options: ["After 4 weeks", "After 6 weeks", "After 8 weeks", "After 12 weeks"], value: "After 6 weeks" } },
  { id: "missed", title: "Missed-call WhatsApp", body: "Sends your booking link to callers you couldn’t answer.", on: true, timing: { options: ["Straight away", "After 1 minute"], value: "Straight away" } },
];

export function Automations() {
  const [rules, setRules] = useState(initial);
  const set = (id: string, patch: Partial<Rule>) => setRules((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  return (
    <>
      <Group title="Automatic messages" description="They stop as soon as a customer replies STOP.">
        {rules.map((r) => (
          <Row key={r.id} label={r.title} description={r.body}>
            {r.timing && (
              <Dropdown aria-label={`When to send: ${r.title}`} value={r.timing.value} disabled={!r.on} onChange={(e) => set(r.id, { timing: { ...r.timing!, value: e.target.value } })} className="w-48">
                {r.timing.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Dropdown>
            )}
            <Switch checked={r.on} onChange={(v) => set(r.id, { on: v })} label={r.title} />
          </Row>
        ))}
      </Group>

      <Group title="Quiet hours" description="Automatic messages wait until morning instead of going out late at night.">
        <Row label="Don’t send after">
          <Dropdown aria-label="Don’t send after" defaultValue="21" className="w-32">
            <option value="20">8 PM</option>
            <option value="21">9 PM</option>
            <option value="22">10 PM</option>
          </Dropdown>
        </Row>
        <Row label="Start again at">
          <Dropdown aria-label="Start again at" defaultValue="8" className="w-32">
            <option value="7">7 AM</option>
            <option value="8">8 AM</option>
            <option value="9">9 AM</option>
          </Dropdown>
        </Row>
      </Group>
    </>
  );
}
