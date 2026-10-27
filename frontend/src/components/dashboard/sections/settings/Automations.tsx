"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Toggle, useToast } from "../../kit";
import { SaveBar, SettingsSection } from "../../ui";
import { Dropdown, Label, Panel } from "./parts";

// Messages Vegam sends on its own around a booking. Each one uses an
// approved template and only goes to people who can receive it.
// Demo: kept in this component.

type Rule = { id: string; icon: IconName; title: string; body: string; on: boolean; timing?: { label: string; options: string[]; value: string }; template: string };

const initial: Rule[] = [
  { id: "confirm", icon: "check", title: "Booking confirmation", body: "Sent as soon as a booking is made or changed.", on: true, template: "booking_confirmed", timing: undefined },
  { id: "reminder", icon: "bell", title: "Reminder before the visit", body: "Customers can reply YES to confirm or CHANGE to move it.", on: true, template: "appointment_reminder", timing: { label: "Send", options: ["2 hours before", "The evening before", "24 hours before", "24 hours and 2 hours before"], value: "24 hours before" } },
  { id: "noshow", icon: "clock", title: "No-show follow-up", body: "A kind note offering a new time if someone doesn’t turn up.", on: true, template: "missed_visit", timing: { label: "Send", options: ["15 minutes after", "1 hour after", "The next morning"], value: "1 hour after" } },
  { id: "review", icon: "sparkle", title: "Review request", body: "Asks happy customers for a Google review after their visit.", on: false, template: "review_request", timing: { label: "Send", options: ["2 hours after the visit", "The next day", "3 days after"], value: "2 hours after the visit" } },
  { id: "rebook", icon: "refresh", title: "Time to rebook", body: "Reminds regulars when it’s been a while since their last visit.", on: false, template: "rebooking_nudge", timing: { label: "After", options: ["4 weeks", "6 weeks", "8 weeks", "12 weeks"], value: "6 weeks" } },
  { id: "missed", icon: "missed", title: "Missed-call WhatsApp", body: "Anyone you couldn’t answer gets a WhatsApp with your booking link.", on: true, template: "missed_call_followup", timing: { label: "Send", options: ["Straight away", "After 1 minute"], value: "Straight away" } },
];

export function Automations() {
  const toast = useToast();
  const [rules, setRules] = useState(initial);
  const [dirty, setDirty] = useState(false);
  const set = (id: string, patch: Partial<Rule>) => {
    setRules((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));
    setDirty(true);
  };

  return (
    <>
      <Panel>
        <SettingsSection title="Automatic messages" description="Sent by Vegam around each booking. They stop as soon as a customer replies STOP, and never go out at night.">
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {rules.map((r) => (
              <li key={r.id} className={`flex flex-col gap-3 rounded-[14px] border p-4 transition ${r.on ? "border-line-strong" : "border-line bg-[#FAFAFC]"}`}>
                <div className="flex items-start gap-3">
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full ${r.on ? "bg-ink text-accent" : "bg-panel text-muted"}`}>
                    <Icon name={r.icon} size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <Toggle checked={r.on} onChange={(v) => set(r.id, { on: v })} label={r.title} description={r.body} />
                  </span>
                </div>
                {r.on && (
                  <div className="ml-12 flex flex-wrap items-end gap-3">
                    {r.timing && (
                      <Label label={r.timing.label} className="w-[220px]">
                        <Dropdown value={r.timing.value} onChange={(e) => set(r.id, { timing: { ...r.timing!, value: e.target.value } })}>
                          {r.timing.options.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </Dropdown>
                      </Label>
                    )}
                    <span className="flex min-h-10 items-center gap-1.5 text-[13px] text-subtle">
                      <Icon name="message" size={14} />
                      Template: <span className="font-mono text-ink-soft">{r.template}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </SettingsSection>

        <SettingsSection title="Quiet hours" description="Automatic messages wait until the morning if they would go out late at night.">
          <div className="grid gap-4 sm:grid-cols-2" onChange={() => setDirty(true)}>
            <Label label="Don’t send after">
              <Dropdown defaultValue="21">
                <option value="20">8 PM</option>
                <option value="21">9 PM</option>
                <option value="22">10 PM</option>
              </Dropdown>
            </Label>
            <Label label="Start again at">
              <Dropdown defaultValue="8">
                <option value="7">7 AM</option>
                <option value="8">8 AM</option>
                <option value="9">9 AM</option>
              </Dropdown>
            </Label>
          </div>
        </SettingsSection>
      </Panel>
      {dirty && (
        <SaveBar
          onDiscard={() => {
            setRules(initial);
            setDirty(false);
          }}
          onSave={() => {
            setDirty(false);
            toast("Automations saved");
          }}
        />
      )}
    </>
  );
}
