"use client";

import { useState } from "react";
import { notificationEvents } from "@/content/settings";
import { useToast } from "../../kit";
import { SaveBar, SettingsSection } from "../../ui";
import { Dropdown, Label, Panel } from "./parts";

// Which alerts reach the owner, and where: in the app, by email or on WhatsApp.
// Demo: kept in this component.

const channels = ["In app", "Email", "WhatsApp"] as const;
type Channel = (typeof channels)[number];

const defaults: Record<string, Channel[]> = {
  handover: ["In app", "WhatsApp"],
  booking: ["In app"],
  cancel: ["In app", "Email"],
  callback: ["In app", "WhatsApp"],
  report: ["WhatsApp"],
  usage: ["In app", "Email"],
};

export function NotificationPrefs() {
  const toast = useToast();
  const [prefs, setPrefs] = useState(defaults);
  const [dirty, setDirty] = useState(false);
  const toggle = (id: string, c: Channel) => {
    setPrefs((p) => ({ ...p, [id]: p[id].includes(c) ? p[id].filter((x) => x !== c) : [...p[id], c] }));
    setDirty(true);
  };

  return (
    <>
      <Panel>
        <SettingsSection title="Your alerts" description="Choose where each alert reaches you. Handovers on WhatsApp are the fastest way to reply to a customer who asked for a person.">
          <div className="relative overflow-x-auto rounded-[14px] border border-line">
            <table className="w-full min-w-[480px] border-collapse text-[14px]">
              <thead className="bg-[#FAFAFC]">
                <tr>
                  <th scope="col" className="px-4 py-2.5 text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">
                    Alert
                  </th>
                  {channels.map((c) => (
                    <th key={c} scope="col" className="w-24 px-3 py-2.5 text-center text-[12.5px] font-semibold tracking-[0.04em] whitespace-nowrap text-muted uppercase">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {notificationEvents.map((e) => (
                  <tr key={e.id} className="border-t border-line">
                    <th scope="row" className="px-4 py-3 text-left font-normal text-ink">
                      {e.label}
                    </th>
                    {channels.map((c) => (
                      <td key={c} className="px-3 py-3 text-center">
                        <input type="checkbox" aria-label={`${e.label}: ${c}`} checked={prefs[e.id].includes(c)} onChange={() => toggle(e.id, c)} className="h-4 w-4 cursor-pointer accent-[#23243A]" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SettingsSection>

        <SettingsSection title="Morning report" description="A short summary of yesterday and what needs you today, on WhatsApp.">
          <div className="grid gap-4 sm:grid-cols-2" onChange={() => setDirty(true)}>
            <Label label="Send at">
              <Dropdown defaultValue="8">
                <option value="7">7:00 AM</option>
                <option value="8">8:00 AM</option>
                <option value="9">9:00 AM</option>
              </Dropdown>
            </Label>
            <Label label="Weekly summary">
              <Dropdown defaultValue="mon">
                <option value="mon">Every Monday</option>
                <option value="sun">Every Sunday</option>
                <option value="off">Don’t send</option>
              </Dropdown>
            </Label>
          </div>
        </SettingsSection>
      </Panel>
      {dirty && (
        <SaveBar
          inDialog
          onDiscard={() => {
            setPrefs(defaults);
            setDirty(false);
          }}
          onSave={() => {
            setDirty(false);
            toast("Notification settings saved");
          }}
        />
      )}
    </>
  );
}
