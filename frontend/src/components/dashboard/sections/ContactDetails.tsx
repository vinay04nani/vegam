"use client";

import { useState } from "react";
import { channelLabel, optInLabel, sampleTags, type Contact, type ContactChannel, type ContactEvent, type OptIn } from "@/content/contacts";
import { Icon, type IconName } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { inputClass } from "@/components/setup/fields";
import { Avatar, Badge, Button, Drawer, useToast, type BadgeTone } from "../kit";

// One customer's profile: details, tags, messaging consent, notes and history.
// Used by the Contacts drawer, and later by the Inbox side panel.
// Demo: changes are kept by the Contacts page only.

const eventIcon: Record<ContactEvent["kind"], IconName> = {
  chat: "message",
  booking: "calendar",
  call: "phone",
  optin: "check",
  optout: "close",
  note: "note",
  campaign: "megaphone",
};

export const optInTone: Record<OptIn, BadgeTone> = { "opted-in": "success", "opted-out": "danger", "not-asked": "neutral" };

export function lastVisitText(days: number | null) {
  if (days === null) return "Not yet";
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 14) return `${days} days ago`;
  if (days < 60) return `${Math.round(days / 7)} weeks ago`;
  return `${Math.round(days / 30)} months ago`;
}

/** A channel mark: the brand's logo where it has one, otherwise a plain icon tile. */
export function ChannelMark({ channel, size = 22 }: { channel: ContactChannel; size?: number }) {
  if (channel === "whatsapp" || channel === "instagram" || channel === "messenger") return <BrandLogo brand={channel} size={size} />;
  return (
    <span role="img" aria-label={channelLabel[channel]} title={channelLabel[channel]} className="inline-flex flex-none items-center justify-center border border-line bg-white text-muted" style={{ width: size, height: size, borderRadius: size * 0.28 }}>
      <Icon name={channel === "website" ? "globe" : "phone"} size={size * 0.55} />
    </span>
  );
}

export function ContactDetails({ contact, onChange, onOpen }: { contact: Contact; onChange: (c: Contact) => void; onOpen: (view: string) => void }) {
  const toast = useToast();
  const [note, setNote] = useState("");
  const [adding, setAdding] = useState(false);
  const c = contact;
  const log = (e: ContactEvent) => [e, ...c.timeline];

  const setOptIn = (optIn: OptIn, text: string, consent: string) => {
    onChange({ ...c, optIn, consent, timeline: log({ at: "Just now", kind: optIn === "opted-out" ? "optout" : "optin", text }) });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar name={c.name} size={56} />
        <div className="flex min-w-0 flex-col gap-1">
          <p className="m-0 truncate text-[20px] font-semibold text-ink">{c.name}</p>
          <p className="m-0 text-[14px] text-subtle">
            {c.phone}
            {c.email && ` · ${c.email}`}
          </p>
          <span className="flex items-center gap-1.5">
            {c.channels.map((ch) => (
              <ChannelMark key={ch} channel={ch} size={22} />
            ))}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="primary" icon="message" onClick={() => onOpen("inbox")}>
          Message
        </Button>
        <Button icon="calendar" onClick={() => onOpen("calendar")}>
          Book a visit
        </Button>
      </div>

      <dl className="m-0 grid grid-cols-3 gap-2 rounded-[14px] bg-panel p-3">
        <div>
          <dt className="text-[12px] text-subtle">Bookings</dt>
          <dd className="m-0 text-[17px] font-bold text-ink">{c.bookings}</dd>
        </div>
        <div>
          <dt className="text-[12px] text-subtle">Last visit</dt>
          <dd className="m-0 text-[15px] font-bold text-ink">{lastVisitText(c.lastVisitDays)}</dd>
        </div>
        <div>
          <dt className="text-[12px] text-subtle">No-shows</dt>
          <dd className={`m-0 text-[17px] font-bold ${c.noShows > 1 ? "text-warning" : "text-ink"}`}>{c.noShows}</dd>
        </div>
      </dl>

      {/* Tags */}
      <section className="flex flex-col gap-2.5">
        <h3 className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">Tags</h3>
        <div className="flex flex-wrap items-center gap-2">
          {c.tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-periwinkle-soft py-1 pr-1 pl-3 text-[13px] font-semibold text-brand">
              {t}
              <button type="button" aria-label={`Remove tag ${t}`} onClick={() => onChange({ ...c, tags: c.tags.filter((x) => x !== t) })} className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full hover:bg-white">
                <Icon name="close" size={12} />
              </button>
            </span>
          ))}
          {adding ? (
            <label className="relative">
              <span className="sr-only">Add a tag</span>
              <select
                autoFocus
                value=""
                onBlur={() => setAdding(false)}
                onChange={(e) => {
                  if (e.target.value) onChange({ ...c, tags: [...c.tags, e.target.value] });
                  setAdding(false);
                }}
                className="min-h-8 cursor-pointer rounded-full border border-line-strong bg-white px-3 text-[13px] font-semibold text-ink"
              >
                <option value="">Choose a tag…</option>
                {sampleTags
                  .filter((t) => !c.tags.includes(t))
                  .map((t) => (
                    <option key={t}>{t}</option>
                  ))}
              </select>
            </label>
          ) : (
            <button type="button" onClick={() => setAdding(true)} className="inline-flex min-h-7 cursor-pointer items-center gap-1 rounded-full border border-dashed border-line-strong px-3 text-[13px] font-semibold text-muted hover:text-ink">
              <Icon name="plus" size={13} />
              Add tag
            </button>
          )}
        </div>
      </section>

      {/* Consent */}
      <section className="flex flex-col gap-2.5">
        <h3 className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">WhatsApp messages</h3>
        <div className="flex flex-col gap-3 rounded-[14px] border border-line p-4">
          <span className="flex items-center justify-between gap-3">
            <Badge tone={optInTone[c.optIn]} dot>
              {optInLabel[c.optIn]}
            </Badge>
            <Icon name="shield" size={16} className="text-faint" />
          </span>
          <p className="m-0 text-[14px] leading-snug text-ink-soft">{c.consent}</p>
          <p className="m-0 text-[13px] text-subtle">
            {c.optIn === "opted-in"
              ? "Gets reminders, follow-ups and campaigns. Replying STOP removes them straight away."
              : c.optIn === "opted-out"
                ? "Only replies to messages they send. No reminders or campaigns."
                : "Gets replies to their own messages. Ask before sending reminders or campaigns."}
          </p>
          <div className="flex flex-wrap gap-2">
            {c.optIn === "not-asked" && (
              <Button
                icon="send"
                onClick={() => {
                  onChange({ ...c, timeline: log({ at: "Just now", kind: "chat", text: "Asked if they’d like WhatsApp reminders" }) });
                  toast("Opt-in question sent (demo)");
                }}
              >
                Ask on WhatsApp
              </Button>
            )}
            {c.optIn === "opted-in" && (
              <Button
                variant="danger"
                onClick={() => {
                  setOptIn("opted-out", "Opt-out recorded by your team", "Opted out at their request, recorded by your team just now.");
                  toast("Opt-out recorded");
                }}
              >
                Record an opt-out
              </Button>
            )}
            {c.optIn !== "opted-in" && (
              <Button
                variant="ghost"
                onClick={() => {
                  setOptIn("opted-in", "Opt-in recorded by your team", "Agreed in person; recorded by your team just now.");
                  toast("Opt-in recorded");
                }}
              >
                They agreed in person
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="flex flex-col gap-2.5">
        <h3 className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">Notes</h3>
        {c.note && <p className="m-0 rounded-[12px] bg-[#FFF8E1] px-3.5 py-2.5 text-[14px] text-ink-soft">{c.note}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!note.trim()) return;
            onChange({ ...c, note: note.trim(), timeline: log({ at: "Just now", kind: "note", text: `Note: ${note.trim()}` }) });
            setNote("");
            toast("Note saved");
          }}
          className="flex gap-2"
        >
          <label className="flex-1">
            <span className="sr-only">Add a note</span>
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note only your team sees" className={`${inputClass} min-h-10 rounded-[10px] text-[14.5px]`} />
          </label>
          <Button type="submit" disabled={!note.trim()}>
            Save
          </Button>
        </form>
      </section>

      {/* History */}
      <section className="flex flex-col gap-2.5">
        <h3 className="m-0 text-[13px] font-semibold tracking-[0.04em] text-muted uppercase">History</h3>
        <ol className="m-0 flex list-none flex-col p-0">
          {c.timeline.map((e, i) => (
            <li key={`${e.at}-${i}`} className="relative flex gap-3 pb-4 last:pb-0">
              {i < c.timeline.length - 1 && <span aria-hidden="true" className="absolute top-8 bottom-0 left-[13px] w-px bg-line" />}
              <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full ${e.kind === "optout" ? "bg-[#FDECEC] text-danger" : e.kind === "optin" ? "bg-[#E8F3EA] text-success" : "bg-panel text-muted"}`}>
                <Icon name={eventIcon[e.kind]} size={14} />
              </span>
              <span className="flex flex-col pt-0.5">
                <span className="text-[14px] text-ink">{e.text}</span>
                <span className="text-[12.5px] text-subtle">{e.at}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export function ContactDrawer({ contact, onClose, onChange, onOpen }: { contact: Contact | null; onClose: () => void; onChange: (c: Contact) => void; onOpen: (view: string) => void }) {
  return (
    <Drawer open={contact !== null} onClose={onClose} title="Contact">
      {contact && <ContactDetails contact={contact} onChange={onChange} onOpen={onOpen} />}
    </Drawer>
  );
}
