"use client";

import { useState } from "react";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { Icon } from "@/components/ui/Icon";
import { Group, Input, Row, RowButton, Switch } from "./parts";

// What customers can book: name, length and price. The AI quotes these and
// books the right length of slot. Saves to the same list as onboarding.

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
  const set = (next: typeof services) => update((s) => ({ ...s, assistant: { ...s.assistant, services: next } }));
  const edit = (i: number, patch: Partial<(typeof services)[number]>) => set(services.map((x, j) => (j === i ? { ...x, ...patch } : x)));

  return (
    <>
      <Group title="Services" description="The AI quotes these prices and books the right length of slot." action={<RowButton icon="plus" onClick={() => set([...services, { name: "", minutes: 30, price: 0 }])}>Add</RowButton>}>
        {services.map((sv, i) => (
          <div key={i} className="flex flex-wrap items-center gap-2 py-3">
            <Input aria-label="Service name" value={sv.name} onChange={(e) => edit(i, { name: e.target.value })} placeholder="Service name" className="min-w-0 flex-1 basis-[200px]" />
            <span className="flex items-center gap-1.5">
              <Input aria-label={`${sv.name || "Service"} length in minutes`} type="number" min={5} step={5} value={sv.minutes} onChange={(e) => edit(i, { minutes: Number(e.target.value) })} className="w-20" />
              <span className="text-[13px] text-subtle">min</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[13px] text-subtle">{currency === "INR" ? "₹" : "$"}</span>
              <Input aria-label={`${sv.name || "Service"} price`} type="number" min={0} value={sv.price} onChange={(e) => edit(i, { price: Number(e.target.value) })} className="w-24" />
            </span>
            <button type="button" aria-label={`Remove ${sv.name || "service"}`} onClick={() => set(services.filter((_, j) => j !== i))} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] text-muted hover:bg-panel hover:text-danger">
              <Icon name="trash" size={15} />
            </button>
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
    </>
  );
}
