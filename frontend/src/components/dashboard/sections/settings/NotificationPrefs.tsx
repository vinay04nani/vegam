"use client";

import { useState } from "react";
import { notificationEvents } from "@/content/settings";
import { Dropdown, Group, Row } from "./parts";

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
  const [prefs, setPrefs] = useState(defaults);
  const toggle = (id: string, c: Channel) => setPrefs((p) => ({ ...p, [id]: p[id].includes(c) ? p[id].filter((x) => x !== c) : [...p[id], c] }));

  return (
    <>
      <Group title="Alerts" description="Choose where each alert reaches you.">
        <div className="relative overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-[14px]">
            <thead>
              <tr className="text-[12.5px] text-subtle">
                <th scope="col" className="py-3 pr-4 text-left font-medium">
                  <span className="sr-only">Alert</span>
                </th>
                {channels.map((c) => (
                  <th key={c} scope="col" className="w-20 px-2 py-3 text-center font-medium whitespace-nowrap">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {notificationEvents.map((e) => (
                <tr key={e.id} className="border-t border-line">
                  <th scope="row" className="py-3.5 pr-4 text-left font-normal text-ink">
                    {e.label}
                  </th>
                  {channels.map((c) => (
                    <td key={c} className="px-2 py-3.5 text-center">
                      <input type="checkbox" aria-label={`${e.label}: ${c}`} checked={prefs[e.id].includes(c)} onChange={() => toggle(e.id, c)} className="h-4 w-4 cursor-pointer accent-[#23243A]" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Group>

      <Group title="Reports">
        <Row label="Morning report" description="Yesterday in short, and what needs you today, on WhatsApp.">
          <Dropdown aria-label="Morning report time" defaultValue="8" className="w-36">
            <option value="7">7:00 AM</option>
            <option value="8">8:00 AM</option>
            <option value="9">9:00 AM</option>
            <option value="off">Off</option>
          </Dropdown>
        </Row>
        <Row label="Weekly summary" description="What Vegam handled for you this week.">
          <Dropdown aria-label="Weekly summary" defaultValue="mon" className="w-36">
            <option value="mon">Mondays</option>
            <option value="sun">Sundays</option>
            <option value="off">Off</option>
          </Dropdown>
        </Row>
      </Group>
    </>
  );
}
