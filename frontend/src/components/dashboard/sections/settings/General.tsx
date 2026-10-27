"use client";

import { useRef, useState } from "react";
import { countries } from "@/content/onboarding";
import type { OnboardingState } from "@/lib/onboarding";
import { Dropdown, Group, Input, Row, RowButton, TextArea } from "./parts";

// Business profile, region, contact numbers and tax details. Name, about,
// country and the owner's WhatsApp number save to the same state as
// onboarding as you type.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

const timeZones: Record<string, string> = { IN: "India (GMT+5:30)", US: "US Eastern (GMT−5)", GB: "London (GMT+0)", AE: "Dubai (GMT+4)", SG: "Singapore (GMT+8)", AU: "Sydney (GMT+11)", CA: "Toronto (GMT−5)", OTHER: "Your local time" };

export function General({ state, update }: Props) {
  const [logo, setLogo] = useState<string | null>(null);
  const file = useRef<HTMLInputElement>(null);
  const b = state.business;
  const dial = countries.find((c) => c.id === b.country)?.dial ?? "+";
  const india = b.country === "IN";
  const setBusiness = (patch: Partial<OnboardingState["business"]>) => update((s) => ({ ...s, business: { ...s.business, ...patch } }));

  return (
    <>
      <Group title="Business profile">
        <Row label="Logo" description="Shown on your booking link and invoices.">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[10px] bg-indigo text-[16px] font-bold text-white">
            {logo ? <img src={logo} alt="Your logo" className="h-full w-full object-cover" /> : (b.name || "N")[0].toUpperCase()}
          </span>
          <RowButton onClick={() => file.current?.click()}>{logo ? "Change" : "Upload"}</RowButton>
          <input
            ref={file}
            type="file"
            accept="image/*"
            className="sr-only"
            aria-label="Logo file"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setLogo(URL.createObjectURL(f));
            }}
          />
        </Row>
        <Row label="Business name">
          <Input aria-label="Business name" value={b.name} onChange={(e) => setBusiness({ name: e.target.value })} placeholder="e.g. Nila & Co" className="w-64" />
        </Row>
        <Row label="What you do" description="Your AI assistant uses this when people ask about you." stacked>
          <TextArea aria-label="What you do" rows={2} value={b.about} onChange={(e) => setBusiness({ about: e.target.value })} placeholder="e.g. A family-run studio for appointments and walk-ins since 2015." />
        </Row>
        <Row label="Website">
          <Input aria-label="Website" type="url" placeholder="https://" className="w-64" />
        </Row>
      </Group>

      <Group title="Region">
        <Row label="Country" description="Sets your currency and phone number format.">
          <Dropdown aria-label="Country" value={b.country} onChange={(e) => setBusiness({ country: e.target.value as typeof b.country })} className="w-52">
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Dropdown>
        </Row>
        <Row label="Time zone">
          <span className="text-[14px] text-ink-soft">{timeZones[b.country]}</span>
        </Row>
      </Group>

      <Group title="Contact">
        <Row label="Your WhatsApp number" description="Morning reports and urgent handovers come here.">
          <span className="flex w-64 gap-1.5">
            <span className="flex h-9 flex-none items-center rounded-[8px] border border-line-strong bg-panel px-2.5 text-[14px] text-ink">{dial}</span>
            <Input aria-label="Your WhatsApp number" type="tel" value={state.ownerPhone} onChange={(e) => update((s) => ({ ...s, ownerPhone: e.target.value }))} placeholder="98765 43210" />
          </span>
        </Row>
        <Row label="Email" description="For invoices and account alerts.">
          <Input aria-label="Email" type="email" placeholder="you@business.com" className="w-64" />
        </Row>
      </Group>

      <Group title={india ? "GST and invoices" : "Tax details"} description={india ? "Add your GSTIN to get GST invoices you can claim input credit on." : "Shown on your invoices."}>
        <Row label="Legal business name">
          <Input aria-label="Legal business name" placeholder="As registered" className="w-64" />
        </Row>
        <Row label={india ? "GSTIN" : "Tax ID"} description="Optional">
          <Input aria-label={india ? "GSTIN" : "Tax ID"} placeholder={india ? "29ABCDE1234F1Z5" : ""} maxLength={india ? 15 : 30} className="w-64 uppercase" />
        </Row>
        <Row label="Billing address" stacked>
          <TextArea aria-label="Billing address" rows={2} placeholder="Street, city, PIN code" />
        </Row>
      </Group>
    </>
  );
}
