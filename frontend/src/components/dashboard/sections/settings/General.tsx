"use client";

import { useRef, useState } from "react";
import { CountrySelect } from "@/components/ui/CountrySelect";
import { countryById, exampleNational, zoneForCountry, timeZoneLabel } from "@/lib/countries";
import type { OnboardingState } from "@/lib/onboarding";
import { getLocaleState } from "@/lib/locale";
import { Dropdown, Group, Input, Row, RowButton, TextArea } from "./parts";

// Business profile, region, contact numbers and tax details. Name, about,
// country and the owner's WhatsApp number save to the same state as
// onboarding as you type.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

export function General({ state, update }: Props) {
  const [logo, setLogo] = useState<string | null>(null);
  const file = useRef<HTMLInputElement>(null);
  const b = state.business;
  const dial = countryById(b.country)?.dial ?? "";
  const zone = zoneForCountry(b.country);
  const india = b.country === "IN";
  const setBusiness = (patch: Partial<OnboardingState["business"]>) => update((s) => ({ ...s, business: { ...s.business, ...patch } }));

  return (
    <>
      <Group title="Business profile">
        <Row label="Logo" description="Shown on your booking link and invoices.">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-indigo text-body-lg font-bold text-white">
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
          <CountrySelect value={b.country} onChange={(country) => setBusiness({ country })} className="w-64" />
        </Row>
        <Row label="Time zone">
          <span className="text-body text-text-2">{zone ? timeZoneLabel(zone, getLocaleState().locale) : "Local time"}</span>
        </Row>
      </Group>

      <Group title="Contact">
        <Row label="Your WhatsApp number" description="Morning reports and urgent handovers come here.">
          <span className="flex w-64 gap-1.5">
            <span className="flex h-9 flex-none items-center rounded-md border border-line-strong bg-panel px-2.5 text-body text-ink">{dial}</span>
            <Input aria-label="Your WhatsApp number" type="tel" value={state.ownerPhone} onChange={(e) => update((s) => ({ ...s, ownerPhone: e.target.value }))} placeholder={exampleNational(b.country) || "Phone number"} />
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
          <TextArea aria-label="Billing address" rows={2} placeholder={india ? "Street, city, PIN code" : "Street, city, postal code"} />
        </Row>
      </Group>
    </>
  );
}
