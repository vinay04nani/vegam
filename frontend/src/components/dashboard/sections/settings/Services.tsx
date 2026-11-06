"use client";

import { useState } from "react";
import { staffMembers } from "@/content/settings";
import { currencyFor, formatMoney, type OnboardingState, type Service } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Button, Drawer, useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch, TextArea } from "./parts";

// What customers can book: name, length and price, plus details for each
// service (who does it, buffer time, group sessions, add-ons, online booking).
// The AI quotes these and books the right length of slot with the right
// person. Saves to the same list as onboarding.

const categories = ["Visits", "Packages", "Consultations", "Group sessions", "Other"];

/** One line summing up a service's details. */
function summary(sv: Service) {
  const who = sv.staff?.length
    ? sv.staff
        .map((id) => staffMembers.find((m) => m.id === id)?.name)
        .filter(Boolean)
        .join(", ")
    : "Anyone on the team";
  return [
    who,
    sv.buffer ? `${sv.buffer} min buffer` : "",
    (sv.capacity ?? 1) > 1 ? `group of up to ${sv.capacity}` : "",
    sv.addOns?.length ? `${sv.addOns.length} add-on${sv.addOns.length === 1 ? "" : "s"}` : "",
    sv.online === false ? "request only" : "",
  ]
    .filter(Boolean)
    .join(" · ");
}

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export function Services({ state, update }: Props) {
  const currency = currencyFor(state);
  const services = state.assistant.services.length
    ? state.assistant.services
    : [
        { name: "First visit", minutes: 30, price: currency === "INR" ? 500 : 15 },
        { name: "Standard appointment", minutes: 60, price: currency === "INR" ? 1200 : 40 },
        { name: "Follow-up", minutes: 20, price: currency === "INR" ? 300 : 10 },
      ];
  const [showPrices, setShowPrices] = useState(true);
  const [online, setOnline] = useState(true);
  const toast = useToast();
  const [detail, setDetail] = useState<{ i: number; sv: Service } | null>(null);
  const set = (next: typeof services) => update((s) => ({ ...s, assistant: { ...s.assistant, services: next } }));
  const edit = (i: number, patch: Partial<(typeof services)[number]>) => set(services.map((x, j) => (j === i ? { ...x, ...patch } : x)));

  return (
    <>
      <Group
        title="Services"
        description="The AI quotes these prices and books the right length of slot."
        action={
          <RowButton icon="plus" onClick={() => set([...services, { name: "", minutes: 30, price: 0 }])}>
            Add
          </RowButton>
        }
      >
        {services.map((sv, i) => (
          <div key={i} className="flex flex-col gap-1.5 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <Input aria-label="Service name" value={sv.name} onChange={(e) => edit(i, { name: e.target.value })} placeholder="Service name" className="min-w-0 flex-1 basis-[200px]" />
              <span className="flex items-center gap-1.5">
                <Input aria-label={`${sv.name || "Service"} length in minutes`} type="number" min={5} step={5} value={sv.minutes} onChange={(e) => edit(i, { minutes: Number(e.target.value) })} className="w-20" />
                <span className="text-[13px] text-subtle">min</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[13px] text-subtle">{currency === "INR" ? "₹" : "$"}</span>
                <Input aria-label={`${sv.name || "Service"} price`} type="number" min={0} value={sv.price} onChange={(e) => edit(i, { price: Number(e.target.value) })} className="w-24" />
              </span>
              <RowButton onClick={() => setDetail({ i, sv: { ...sv } })} ariaLabel={`Details for ${sv.name || "service"}`}>
                Details
              </RowButton>
              <button
                type="button"
                aria-label={`Remove ${sv.name || "service"}`}
                onClick={() => set(services.filter((_, j) => j !== i))}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger"
              >
                <Icon name="trash" size={15} />
              </button>
            </div>
            <span className="text-[12.5px] text-subtle">{summary(sv)}</span>
          </div>
        ))}
      </Group>
      <Group title="How prices are shared">
        <Row label="Tell customers the price" description={`e.g. “A first visit is ${formatMoney(services[0]?.price ?? 0, currency)} and takes ${services[0]?.minutes ?? 30} minutes.”`}>
          <Switch checked={showPrices} onChange={setShowPrices} label="Tell customers the price" />
        </Row>
        <Row label="Bookable online" description="Off means the AI takes a request and your team confirms.">
          <Switch checked={online} onChange={setOnline} label="Bookable online" />
        </Row>
      </Group>

      <Drawer
        open={!!detail}
        onClose={() => setDetail(null)}
        title={detail ? detail.sv.name || "Service details" : ""}
        footer={
          <>
            <Button variant="ghost" onClick={() => setDetail(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (!detail) return;
                set(services.map((x, j) => (j === detail.i ? detail.sv : x)));
                setDetail(null);
                toast("Service saved");
              }}
            >
              Save
            </Button>
          </>
        }
      >
        {detail && (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Category</span>
                <Dropdown value={detail.sv.category ?? "Visits"} onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, category: e.target.value } })}>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Dropdown>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Buffer after</span>
                <Dropdown value={String(detail.sv.buffer ?? 0)} onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, buffer: Number(e.target.value) } })}>
                  {[0, 5, 10, 15, 30].map((m) => (
                    <option key={m} value={m}>
                      {m ? `${m} minutes` : "No buffer"}
                    </option>
                  ))}
                </Dropdown>
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[14px] font-medium text-ink">Description</span>
              <TextArea rows={2} value={detail.sv.description ?? ""} onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, description: e.target.value } })} placeholder="What’s included. The AI uses this to answer questions." />
            </label>

            <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
              <legend className="mb-1 p-0 text-[14px] font-medium text-ink">Who does it</legend>
              <span className="text-[12.5px] text-subtle">Leave everyone unticked if anyone on the team can.</span>
              {staffMembers.map((m) => {
                const on = detail.sv.staff?.includes(m.id) ?? false;
                return (
                  <label key={m.id} className="flex cursor-pointer items-center gap-2.5 text-[14px] text-ink">
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => setDetail({ ...detail, sv: { ...detail.sv, staff: on ? (detail.sv.staff ?? []).filter((x) => x !== m.id) : [...(detail.sv.staff ?? []), m.id] } })}
                      className="h-4 w-4 accent-ink"
                    />
                    {m.name}
                    <span className="text-[12.5px] text-subtle">{m.role}</span>
                  </label>
                );
              })}
            </fieldset>

            <div className="flex flex-col gap-2 rounded-[12px] border border-line p-3.5">
              <span className="flex items-center justify-between gap-3">
                <span className="flex flex-col">
                  <span className="text-[14px] font-medium text-ink">Group session</span>
                  <span className="text-[12.5px] text-subtle">Several customers book the same time, up to a limit.</span>
                </span>
                <Switch checked={(detail.sv.capacity ?? 1) > 1} onChange={(v) => setDetail({ ...detail, sv: { ...detail.sv, capacity: v ? 6 : 1 } })} label="Group session" />
              </span>
              {(detail.sv.capacity ?? 1) > 1 && (
                <label className="flex items-center gap-2 text-[14px] text-ink">
                  Up to
                  <Input
                    type="number"
                    min={2}
                    max={100}
                    value={detail.sv.capacity}
                    onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, capacity: Math.max(2, Number(e.target.value)) } })}
                    className="w-20"
                    aria-label="Places per session"
                  />
                  people per session
                </label>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center justify-between">
                <span className="text-[14px] font-medium text-ink">Add-ons</span>
                <button
                  type="button"
                  onClick={() => setDetail({ ...detail, sv: { ...detail.sv, addOns: [...(detail.sv.addOns ?? []), { name: "", price: 0, minutes: 0 }] } })}
                  className="inline-flex cursor-pointer items-center gap-1 text-[13.5px] font-semibold text-ink-soft hover:text-ink"
                >
                  <Icon name="plus" size={14} />
                  Add
                </button>
              </span>
              {(detail.sv.addOns ?? []).length === 0 && <span className="text-[13px] text-subtle">Extras customers can add when they book, like a longer session.</span>}
              {(detail.sv.addOns ?? []).map((a, k) => (
                <span key={k} className="grid grid-cols-[minmax(0,1fr)_72px_84px_32px] items-center gap-2">
                  <Input
                    aria-label={`Add-on ${k + 1} name`}
                    value={a.name}
                    onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, addOns: detail.sv.addOns!.map((x, j) => (j === k ? { ...x, name: e.target.value } : x)) } })}
                    placeholder="e.g. Extra 15 minutes"
                  />
                  <Input
                    aria-label={`Add-on ${k + 1} minutes`}
                    inputMode="numeric"
                    value={a.minutes || ""}
                    onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, addOns: detail.sv.addOns!.map((x, j) => (j === k ? { ...x, minutes: Number(e.target.value.replace(/\D/g, "")) || 0 } : x)) } })}
                    placeholder="min"
                  />
                  <Input
                    aria-label={`Add-on ${k + 1} price`}
                    inputMode="numeric"
                    value={a.price || ""}
                    onChange={(e) => setDetail({ ...detail, sv: { ...detail.sv, addOns: detail.sv.addOns!.map((x, j) => (j === k ? { ...x, price: Number(e.target.value.replace(/\D/g, "")) || 0 } : x)) } })}
                    placeholder={currency === "INR" ? "₹" : "$"}
                  />
                  <button
                    type="button"
                    onClick={() => setDetail({ ...detail, sv: { ...detail.sv, addOns: detail.sv.addOns!.filter((_, j) => j !== k) } })}
                    aria-label={`Remove add-on ${k + 1}`}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger"
                  >
                    <Icon name="trash" size={15} />
                  </button>
                </span>
              ))}
            </div>

            <span className="flex items-center justify-between gap-3">
              <span className="flex flex-col">
                <span className="text-[14px] font-medium text-ink">Customers can book it online</span>
                <span className="text-[12.5px] text-subtle">Off: the AI takes a request and your team confirms the time.</span>
              </span>
              <Switch checked={detail.sv.online !== false} onChange={(v) => setDetail({ ...detail, sv: { ...detail.sv, online: v } })} label="Customers can book it online" />
            </span>
          </div>
        )}
      </Drawer>
    </>
  );
}
