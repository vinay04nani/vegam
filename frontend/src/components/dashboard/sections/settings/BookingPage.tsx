"use client";

import { useState } from "react";
import { useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch, TextArea } from "./parts";

// The public booking link customers use from Instagram, Google and WhatsApp,
// plus the cancellation policy the AI explains. Demo: kept here.

const colors = ["#23243A", "#4F46E5", "#0F766E", "#B4531A", "#BE185D"];

export function BookingPage({ name }: { name: string }) {
  const toast = useToast();
  const slug = (name || "nila-co").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const [color, setColor] = useState(colors[0]);
  const [phone, setPhone] = useState(true);
  const [notes, setNotes] = useState(false);
  const link = `vegam.app/${slug}`;

  return (
    <>
      <Group title="Booking link">
        <Row label="Your link" description={link}>
          <RowButton icon="copy" onClick={() => { navigator.clipboard?.writeText(`https://${link}`).catch(() => undefined); toast("Link copied"); }}>Copy</RowButton>
          <RowButton icon="download" onClick={() => toast("QR code downloaded (demo)")}>QR code</RowButton>
        </Row>
        <Row label="Accent colour" description="Used for buttons on your booking page.">
          <span className="flex gap-1.5">
            {colors.map((c) => (
              <button key={c} type="button" aria-label={`Colour ${c}`} aria-pressed={color === c} onClick={() => setColor(c)} className={`h-7 w-7 cursor-pointer rounded-full ring-offset-2 ${color === c ? "ring-2 ring-ink" : ""}`} style={{ background: c }} />
            ))}
          </span>
        </Row>
      </Group>
      <Group title="What we ask">
        <Row label="Phone number" description="Needed for WhatsApp reminders.">
          <Switch checked={phone} onChange={setPhone} label="Ask for phone number" />
        </Row>
        <Row label="A note from the customer" description="“Anything we should know?”">
          <Switch checked={notes} onChange={setNotes} label="Ask for a note" />
        </Row>
      </Group>
      <Group title="Cancellations">
        <Row label="Free cancellation until">
          <Dropdown aria-label="Free cancellation until" defaultValue="24" className="w-44">
            <option value="0">Any time</option>
            <option value="2">2 hours before</option>
            <option value="24">24 hours before</option>
            <option value="48">48 hours before</option>
          </Dropdown>
        </Row>
        <Row label="Policy" description="The AI explains this when someone cancels or asks." stacked>
          <TextArea aria-label="Cancellation policy" rows={2} defaultValue="Please cancel or move your visit at least 24 hours before, so we can offer the time to someone else." />
        </Row>
        <Row label="Booking page message" description="Shown above the times." stacked>
          <Input aria-label="Booking page message" placeholder="e.g. Free parking next to the entrance." />
        </Row>
      </Group>
    </>
  );
}
