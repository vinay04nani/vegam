"use client";

import { useState } from "react";
import { sampleTeam } from "@/content/dashboard";
import type { Location } from "@/content/settings";
import { useBranch } from "../../branch";
import { Badge, Button, Drawer, useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch } from "./parts";

// Locations (Pro: multi-branch). Each location has its own address, number,
// manager, hours and services, in one inbox and calendar. Chats are routed
// to the right location, and the sidebar switcher shows one location or all.
// Demo: changes last for this visit.

const services = ["First visit", "Standard appointment", "Follow-up", "Extended session", "Consultation", "Package of 5"];

type Draft = { id?: string; name: string; address: string; phone: string; manager: string; hours: string; services: string[]; ownNumber: boolean };

export function Locations({ isPro }: { isPro: boolean }) {
  const toast = useToast();
  const { locations, setLocations, setBranch } = useBranch();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [routing, setRouting] = useState("number");
  const [ownLinks, setOwnLinks] = useState(true);

  const edit = (l?: Location) =>
    setDraft(
      l
        ? { id: l.id, name: l.name, address: l.address, phone: l.phone, manager: l.manager, hours: l.primary ? "own" : "l1", services, ownNumber: true }
        : { name: "", address: "", phone: "", manager: "You", hours: "l1", services, ownNumber: false },
    );

  const save = () => {
    if (!draft) return;
    if (draft.id) {
      setLocations((ls) => ls.map((l) => (l.id === draft.id ? { ...l, name: draft.name, address: draft.address, phone: draft.phone, manager: draft.manager } : l)));
      toast(`${draft.name} saved`);
    } else {
      const id = `l${Date.now()}`;
      setLocations((ls) => [...ls, { id, name: draft.name, address: draft.address, phone: draft.phone || "—", manager: draft.manager, share: 0, rating: 0 }]);
      toast(`${draft.name} added`);
    }
    setDraft(null);
  };

  return (
    <>
      <Group
        title="Your locations"
        description={`${locations.length} location${locations.length === 1 ? "" : "s"} in one inbox and calendar. Use the switcher at the top of the sidebar to see one at a time.`}
        action={
          <RowButton tone="primary" icon="plus" onClick={() => edit()}>
            Add location
          </RowButton>
        }
      >
        {locations.map((l) => (
          <Row
            key={l.id}
            label={
              <span className="flex min-w-0 flex-col">
                <span className="flex items-center gap-2">
                  {l.name}
                  {l.primary && <Badge tone="brand">Main</Badge>}
                </span>
                <span className="truncate text-[13px] font-normal text-subtle">
                  {l.address} · Manager: {l.manager}
                </span>
              </span>
            }
          >
            <RowButton onClick={() => setBranch(l.id)} ariaLabel={`Show only ${l.name}`}>
              Show only
            </RowButton>
            <RowButton onClick={() => edit(l)} ariaLabel={`Edit ${l.name}`}>
              Edit
            </RowButton>
          </Row>
        ))}
      </Group>

      <Group title="Routing" description="How each chat and call reaches the right location.">
        <Row label="Send chats to a location" description="The AI replies with that location’s hours, prices and free times.">
          <Dropdown aria-label="Send chats to a location" value={routing} onChange={(e) => setRouting(e.target.value)} className="w-64">
            <option value="number">By the number they contacted</option>
            <option value="ask">Ask the customer which one</option>
            <option value="nearest">Nearest by area or pin code</option>
          </Dropdown>
        </Row>
        <Row label="A booking link for each location" description="Each location gets its own link and QR code.">
          <Switch checked={ownLinks} onChange={setOwnLinks} label="A booking link for each location" />
        </Row>
        <Row label="Handovers" description="Go to the manager of the customer’s location first, then anyone free.">
          <span className="text-[14px] text-subtle">Location manager</span>
        </Row>
      </Group>

      <Group title="Plan">
        <Row label="Locations included" description={isPro ? "Pro includes up to 3 locations. Talk to us to add more." : "Extra locations are part of Pro."}>
          <span className="text-[14px] font-semibold text-ink">{locations.length} of 3</span>
        </Row>
      </Group>

      <Drawer
        open={!!draft}
        onClose={() => setDraft(null)}
        title={draft?.id ? `Edit ${draft.name || "location"}` : "Add a location"}
        footer={
          <>
            <Button variant="ghost" onClick={() => setDraft(null)}>
              Cancel
            </Button>
            <Button variant="primary" disabled={!draft?.name.trim() || !draft?.address.trim()} onClick={save}>
              {draft?.id ? "Save" : "Add location"}
            </Button>
          </>
        }
      >
        {draft && (
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Name</span>
              <Input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} placeholder="e.g. Indiranagar" autoFocus />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Address</span>
              <Input value={draft.address} onChange={(e) => setDraft({ ...draft, address: e.target.value })} placeholder="Street, area, city, pin code" />
            </label>
            <div className="flex flex-col gap-2">
              <span className="flex items-center justify-between gap-3">
                <span className="text-[14px] font-medium text-ink">Its own phone and WhatsApp number</span>
                <Switch checked={draft.ownNumber} onChange={(v) => setDraft({ ...draft, ownNumber: v })} label="Its own phone and WhatsApp number" />
              </span>
              {draft.ownNumber ? (
                <Input type="tel" value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} placeholder="+91" aria-label="Location phone number" />
              ) : (
                <span className="text-[13px] text-subtle">Uses your main number. The AI asks which location they want.</span>
              )}
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Manager</span>
              <Dropdown value={draft.manager} onChange={(e) => setDraft({ ...draft, manager: e.target.value })}>
                {sampleTeam.map((m) => (
                  <option key={m.name}>{m.name}</option>
                ))}
              </Dropdown>
              <span className="text-[12.5px] text-subtle">Gets this location’s handovers and morning report.</span>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Opening hours</span>
              <Dropdown value={draft.hours} onChange={(e) => setDraft({ ...draft, hours: e.target.value })}>
                {locations
                  .filter((l) => l.id !== draft.id)
                  .map((l) => (
                    <option key={l.id} value={l.id}>
                      Same as {l.name}
                    </option>
                  ))}
                <option value="own">Its own hours (set in Hours and bookings)</option>
              </Dropdown>
            </label>
            <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
              <legend className="mb-2 p-0 text-[14px] font-medium text-ink">Services offered here</legend>
              {services.map((s) => (
                <label key={s} className="flex cursor-pointer items-center gap-2.5 text-[14px] text-ink">
                  <input
                    type="checkbox"
                    checked={draft.services.includes(s)}
                    onChange={(e) => setDraft({ ...draft, services: e.target.checked ? [...draft.services, s] : draft.services.filter((x) => x !== s) })}
                    className="h-4 w-4 accent-ink"
                  />
                  {s}
                </label>
              ))}
            </fieldset>
          </div>
        )}
      </Drawer>
    </>
  );
}
