"use client";

import { useRef, useState } from "react";
import { countries } from "@/content/onboarding";
import { Icon } from "@/components/ui/Icon";
import type { OnboardingState } from "@/lib/onboarding";
import { Button, useToast } from "../../kit";
import { SaveBar, SettingsSection } from "../../ui";
import { Dropdown, Input, Label, Panel, TextArea } from "./parts";

// Business profile, contact numbers and tax details. Name, country and the
// owner's WhatsApp number save to the same state as onboarding.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void };

const timeZones: Record<string, string> = { IN: "India (GMT+5:30)", US: "US Eastern (GMT−5)", GB: "London (GMT+0)", AE: "Dubai (GMT+4)", SG: "Singapore (GMT+8)", AU: "Sydney (GMT+11)", CA: "Toronto (GMT−5)", OTHER: "Your local time" };

export function General({ state, update }: Props) {
  const toast = useToast();
  const [draft, setDraft] = useState({ name: state.business.name, about: state.business.about, country: state.business.country, ownerPhone: state.ownerPhone });
  const [dirty, setDirty] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);
  const file = useRef<HTMLInputElement>(null);
  const dial = countries.find((c) => c.id === draft.country)?.dial ?? "+";
  const india = draft.country === "IN";
  const set = (patch: Partial<typeof draft>) => {
    setDraft((d) => ({ ...d, ...patch }));
    setDirty(true);
  };

  return (
    <>
      <Panel>
        <div onChange={() => setDirty(true)}>
          <SettingsSection title="Business profile" description="How your business appears to customers in chats, on your booking link and in reminders.">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-[16px] bg-indigo text-[24px] font-bold text-white">
                {logo ? <img src={logo} alt="Your logo" className="h-full w-full object-cover" /> : (draft.name || "N")[0].toUpperCase()}
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="flex gap-2">
                  <Button icon="upload" onClick={() => file.current?.click()}>
                    Upload logo
                  </Button>
                  {logo && (
                    <Button variant="ghost" onClick={() => setLogo(null)}>
                      Remove
                    </Button>
                  )}
                </span>
                <span className="text-[12.5px] text-subtle">Square PNG or JPG, at least 256 px.</span>
              </span>
              <input
                ref={file}
                type="file"
                accept="image/*"
                className="sr-only"
                aria-label="Logo file"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) {
                    setLogo(URL.createObjectURL(f));
                    setDirty(true);
                  }
                }}
              />
            </div>
            <Label label="Business name">
              <Input value={draft.name} onChange={(e) => set({ name: e.target.value })} placeholder="e.g. Nila & Co" />
            </Label>
            <Label label="What you do" hint="One or two lines. Your AI assistant uses this when people ask about you.">
              <TextArea rows={2} value={draft.about} onChange={(e) => set({ about: e.target.value })} placeholder="e.g. A family-run studio for appointments and walk-ins since 2015." />
            </Label>
            <Label label="Website">
              <Input type="url" placeholder="https://" defaultValue="" />
            </Label>
          </SettingsSection>

          <SettingsSection title="Region" description="Sets your currency, time zone and the phone number format.">
            <div className="grid gap-4 sm:grid-cols-2">
              <Label label="Country">
                <Dropdown value={draft.country} onChange={(e) => set({ country: e.target.value as typeof draft.country })}>
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Dropdown>
              </Label>
              <Label label="Time zone">
                <Dropdown value={draft.country} disabled onChange={() => undefined}>
                  <option value={draft.country}>{timeZones[draft.country]}</option>
                </Dropdown>
              </Label>
            </div>
          </SettingsSection>

          <SettingsSection title="Contact" description="Where Vegam reaches you. The morning report and urgent handovers go to your WhatsApp.">
            <Label label="Your WhatsApp number">
              <span className="flex gap-2">
                <span className="flex min-h-10 flex-none items-center rounded-[10px] border border-line-strong bg-panel px-3 text-[14.5px] text-ink">{dial}</span>
                <Input type="tel" value={draft.ownerPhone} onChange={(e) => set({ ownerPhone: e.target.value })} placeholder="98765 43210" />
              </span>
            </Label>
            <Label label="Email for invoices and alerts">
              <Input type="email" placeholder="you@business.com" />
            </Label>
          </SettingsSection>

          <SettingsSection title={india ? "GST and invoices" : "Tax details"} description={india ? "Add your GSTIN to get GST invoices you can claim input credit on." : "Shown on your invoices."}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Label label="Legal business name">
                <Input placeholder="As registered" />
              </Label>
              <Label label={india ? "GSTIN (optional)" : "Tax ID (optional)"} hint={india ? "15 characters, e.g. 29ABCDE1234F1Z5" : undefined}>
                <Input placeholder={india ? "29ABCDE1234F1Z5" : ""} maxLength={india ? 15 : 30} className="uppercase" />
              </Label>
            </div>
            <Label label="Billing address">
              <TextArea rows={2} placeholder="Street, city, PIN code" />
            </Label>
            <p className="m-0 flex items-center gap-1.5 text-[13px] text-subtle">
              <Icon name="shield" size={14} />
              Used only on invoices. Never shown to customers.
            </p>
          </SettingsSection>
        </div>
      </Panel>
      {dirty && (
        <SaveBar
          inDialog
          onDiscard={() => {
            setDraft({ name: state.business.name, about: state.business.about, country: state.business.country, ownerPhone: state.ownerPhone });
            setDirty(false);
          }}
          onSave={() => {
            update((s) => ({ ...s, business: { ...s.business, name: draft.name, about: draft.about, country: draft.country }, ownerPhone: draft.ownerPhone }));
            setDirty(false);
            toast("Business details saved");
          }}
        />
      )}
    </>
  );
}
