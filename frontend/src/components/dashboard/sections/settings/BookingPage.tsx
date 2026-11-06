"use client";

import { useState } from "react";
import { sampleImport } from "@/content/onboarding";
import { staffMembers } from "@/content/settings";
import type { Service } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch, TextArea } from "./parts";

// The public booking link customers use from Instagram, Google and WhatsApp,
// a live preview of the page they see, and the cancellation policy the AI
// explains. Demo: kept here.

const colors = ["#23243A", "#4F46E5", "#0F766E", "#B4531A", "#BE185D"];

/** What customers see at the booking link, drawn from these settings. */
function Preview({
  name,
  color,
  phone,
  notes,
  message,
  services,
  pickStaff,
}: {
  name: string;
  color: string;
  phone: boolean;
  notes: boolean;
  message: string;
  services: { name: string; minutes: number; price: number }[];
  pickStaff: boolean;
}) {
  const [service, setService] = useState(0);
  const [day, setDay] = useState(1);
  const [time, setTime] = useState("11:30");
  const days = ["Today", "Tomorrow", "Mon 9", "Tue 10", "Wed 11"];
  const times = ["10:00", "11:30", "1:00", "4:30", "6:00"];
  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[28px] border-[6px] border-[#1E1F2B] bg-white shadow-[0_20px_50px_rgb(30_31_43/0.18)]">
      <div className="flex items-center justify-center bg-[#F4F4F8] py-1.5 text-[10.5px] text-subtle">
        vegam.app/
        {name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") || "nila-co"}
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full text-[16px] font-bold text-white" style={{ background: color }}>
            {(name || "N")[0].toUpperCase()}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold text-ink">{name || "Nila & Co"}</span>
            <span className="text-[12px] text-subtle">Book a visit · replies on WhatsApp</span>
          </span>
        </div>
        {message && <p className="m-0 rounded-[10px] bg-[#F6F6F8] px-3 py-2 text-[12.5px] text-ink-soft">{message}</p>}
        <div className="flex flex-col gap-1.5">
          <span className="text-[12px] font-semibold tracking-[0.04em] text-subtle uppercase">Service</span>
          {services.slice(0, 3).map((sv, i) => (
            <button
              key={sv.name}
              type="button"
              onClick={() => setService(i)}
              className="flex cursor-pointer items-center justify-between rounded-[10px] border px-3 py-2 text-left text-[13px]"
              style={{ borderColor: service === i ? color : "#ECEDF2", boxShadow: service === i ? `0 0 0 1px ${color}` : undefined }}
            >
              <span className="font-medium text-ink">{sv.name}</span>
              <span className="text-subtle">
                {sv.minutes} min{sv.price ? ` · ₹${sv.price.toLocaleString("en-IN")}` : ""}
              </span>
            </button>
          ))}
        </div>
        {pickStaff && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[12px] font-semibold tracking-[0.04em] text-subtle uppercase">With</span>
            <div className="flex flex-wrap gap-1.5">
              {["Anyone", ...staffMembers.map((m) => m.name)].map((x, i) => (
                <span key={x} className="rounded-full border px-2.5 py-1 text-[12px]" style={{ borderColor: i === 0 ? color : "#E4E6F0", color: i === 0 ? color : "#3A3C4A" }}>
                  {x}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <span className="text-[12px] font-semibold tracking-[0.04em] text-subtle uppercase">When</span>
          <div className="flex gap-1.5 overflow-hidden">
            {days.map((d, i) => (
              <button
                key={d}
                type="button"
                onClick={() => setDay(i)}
                className="flex-none cursor-pointer rounded-[9px] px-2.5 py-1.5 text-[12px] font-medium"
                style={{ background: day === i ? color : "#F4F4F8", color: day === i ? "white" : "#3A3C4A" }}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {times.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTime(t)}
                className="cursor-pointer rounded-[9px] border py-1.5 text-[12.5px] font-medium"
                style={{ borderColor: time === t ? color : "#E4E6F0", color: time === t ? color : "#1E1F2B" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="rounded-[9px] border border-line px-3 py-2 text-[12.5px] text-faint">Your name</span>
          {phone && <span className="rounded-[9px] border border-line px-3 py-2 text-[12.5px] text-faint">WhatsApp number</span>}
          {notes && <span className="rounded-[9px] border border-line px-3 py-2 text-[12.5px] text-faint">Anything we should know?</span>}
        </div>
        <span className="flex items-center justify-center gap-1.5 rounded-[11px] py-2.5 text-[13.5px] font-semibold text-white" style={{ background: color }}>
          <Icon name="check" size={14} strokeWidth={2.6} className="[&_circle]:hidden" />
          Book {days[day].toLowerCase()} at {time}
        </span>
        <span className="text-center text-[11px] text-faint">Confirmation and a reminder on WhatsApp</span>
      </div>
    </div>
  );
}

export function BookingPage({ name, services: owned = [] }: { name: string; services?: Service[] }) {
  const toast = useToast();
  const slug = (name || "nila-co")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const [color, setColor] = useState(colors[0]);
  const [phone, setPhone] = useState(true);
  const [notes, setNotes] = useState(false);
  const [message, setMessage] = useState("Free parking next to the entrance.");
  const [pickStaff, setPickStaff] = useState(true);
  const services = owned.filter((x) => x.name.trim()).length ? owned.filter((x) => x.name.trim()) : sampleImport.services.map((x) => ({ name: x.name, minutes: x.minutes, price: x.price.INR }));
  const link = `vegam.app/${slug}`;

  return (
    <>
      <Group title="Preview" description="What customers see when they open your link. It changes as you edit below.">
        <div className="flex flex-col items-center gap-3 py-5">
          <Preview name={name} color={color} phone={phone} notes={notes} message={message} services={services} pickStaff={pickStaff} />
          <RowButton icon="external-link" onClick={() => toast("Opens your booking page in a new tab (demo)", "info")}>
            Open booking page
          </RowButton>
        </div>
      </Group>
      <Group title="Booking link">
        <Row label="Your link" description={link}>
          <RowButton
            icon="copy"
            onClick={() => {
              navigator.clipboard?.writeText(`https://${link}`).catch(() => undefined);
              toast("Link copied");
            }}
          >
            Copy
          </RowButton>
          <RowButton icon="download" onClick={() => toast("QR code downloaded (demo)")}>
            QR code
          </RowButton>
        </Row>
        <Row label="Accent colour" description="Used for buttons on your booking page.">
          <span className="flex gap-1.5">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`Colour ${c}`}
                aria-pressed={color === c}
                onClick={() => setColor(c)}
                className={`h-7 w-7 cursor-pointer rounded-full ring-offset-2 ${color === c ? "ring-2 ring-ink" : ""}`}
                style={{ background: c }}
              />
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
        <Row label="Let customers pick who they see" description="Shows your team; “Anyone” is the default.">
          <Switch checked={pickStaff} onChange={setPickStaff} label="Let customers pick who they see" />
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
          <Input aria-label="Booking page message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="e.g. Free parking next to the entrance." />
        </Row>
      </Group>
    </>
  );
}
