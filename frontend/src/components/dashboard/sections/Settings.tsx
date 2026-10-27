"use client";

import { useState, type FormEvent } from "react";
import { countries } from "@/content/onboarding";
import { sampleTeam } from "@/content/dashboard";
import { plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { Field, Select, TextInput } from "@/components/setup/fields";
import { clearOnboarding, currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { Card, PageTitle, SampleTag } from "../ui";

// Business details, team, plan and billing, and data. Business details save
// to the same state as onboarding. Demo: invites and exports are not sent.

type Props = { state: OnboardingState; update: (fn: (s: OnboardingState) => OnboardingState) => void; onOpen: (view: string) => void };

export function Settings({ state, update, onOpen }: Props) {
  const [team, setTeam] = useState(sampleTeam);
  const [invite, setInvite] = useState("");
  const [note, setNote] = useState<{ at: "billing" | "data"; text: string } | null>(null);
  const b = state.business;
  const dial = countries.find((c) => c.id === b.country)?.dial ?? "+";
  const plan = plans.find((p) => p.id === state.plan);
  const currency = currencyFor(state);
  const price = plan?.price?.[currency][state.billing];

  const sendInvite = (e: FormEvent) => {
    e.preventDefault();
    if (invite.trim().length < 5) return;
    setTeam((t) => [...t, { name: "Invited", role: "Front desk", contact: invite.trim() }]);
    setInvite("");
  };

  return (
    <div className="flex max-w-[860px] flex-col gap-6">
      <PageTitle title="Settings" body="Business details, team, plan and billing, and your data." />

      <Card title="Business">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Business name">
            <TextInput value={b.name} onChange={(e) => update((s) => ({ ...s, business: { ...s.business, name: e.target.value } }))} />
          </Field>
          <Field label="Country" hint="Sets your currency and time zone.">
            <Select value={b.country} onChange={(e) => update((s) => ({ ...s, business: { ...s.business, country: e.target.value as typeof b.country } }))}>
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Select>
          </Field>
        </div>
        <Field label="Your WhatsApp number" hint="Your 8 AM morning report goes here.">
          <span className="flex gap-2">
            <span className="flex min-h-13 items-center rounded-[14px] border border-line-strong bg-panel px-4 text-base text-ink">{dial}</span>
            <TextInput type="tel" value={state.ownerPhone} onChange={(e) => update((s) => ({ ...s, ownerPhone: e.target.value }))} placeholder="98765 43210" />
          </span>
        </Field>
        <p className="m-0 flex items-center gap-1.5 text-[13.5px] text-subtle">
          <Icon name="check" size={15} className="text-success" />
          Changes save as you type.
        </p>
      </Card>

      <Card title="Team" extra={<SampleTag />}>
        <ul className="m-0 flex list-none flex-col p-0">
          {team.map((m, i) => (
            <li key={`${m.contact}-${i}`} className="flex items-center gap-3 border-t border-line py-3 first:border-t-0">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-periwinkle-soft text-[14px] font-bold text-brand">{m.name[0]}</span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[15px] font-semibold text-ink">{m.name}</span>
                <span className="truncate text-[13.5px] text-subtle">{m.contact}</span>
              </span>
              <span className="rounded-full bg-panel px-2.5 py-1 text-[12.5px] font-semibold text-muted">{m.role}</span>
            </li>
          ))}
        </ul>
        <form onSubmit={sendInvite} className="flex flex-col gap-2 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">Email or phone to invite</span>
            <TextInput value={invite} onChange={(e) => setInvite(e.target.value)} placeholder="Email or phone number" />
          </label>
          <button type="submit" disabled={invite.trim().length < 5} className="min-h-13 cursor-pointer rounded-full bg-ink px-5 text-[15px] font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#E4E6F0] disabled:text-muted">
            Invite
          </button>
        </form>
        <p className="m-0 text-[13.5px] text-subtle">Team members see the inbox and calendar, and can take over any chat.</p>
      </Card>

      <Card title="Plan and billing">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] bg-panel p-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[16px] font-semibold text-ink">{plan ? `${plan.name} plan` : "No plan yet"}</span>
            <span className="text-[14px] text-subtle">
              {plan
                ? `${state.liveAt ? "Free pilot" : "Pilot starts when you go live"}${price !== undefined ? `, then ${plan.from ? "from " : ""}${formatMoney(price, currency)}/month` : ""}`
                : "Choose a plan to start your free 30-day pilot."}
            </span>
          </div>
          <button type="button" onClick={() => onOpen("plan")} className="min-h-10 cursor-pointer rounded-full border border-line-strong bg-white px-4 text-[14px] font-semibold text-ink hover:border-subtle">
            {plan ? "Change plan" : "Choose a plan"}
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="flex flex-col">
            <span className="text-[15px] font-semibold text-ink">Payment method</span>
            <span className="text-[14px] text-subtle">Not added. Add one by day 25 of your pilot to keep going.</span>
          </span>
          <button
            type="button"
            onClick={() => setNote({ at: "billing", text: "Payments are not connected in this demo. In the product this opens Razorpay in India or Stripe elsewhere." })}
            className="min-h-10 cursor-pointer rounded-full bg-ink px-4 text-[14px] font-semibold text-white"
          >
            Add payment method
          </button>
        </div>
        <p className="m-0 text-[14px] text-subtle">Invoices: none yet. Your pilot is free.</p>
        {note?.at === "billing" && (
          <p role="status" className="m-0 rounded-[14px] bg-periwinkle-soft px-4 py-3 text-[14px] text-brand">
            {note.text}
          </p>
        )}
      </Card>

      <Card title="Your front desk">
        <div className="flex flex-col gap-1">
          {[
            { icon: "sparkle" as const, label: "Assistant: services, hours and answers", view: "assistant" },
            { icon: "globe" as const, label: "Channels", view: "channels" },
          ].map((x) => (
            <button key={x.view} type="button" onClick={() => onOpen(x.view)} className="-mx-2 flex cursor-pointer items-center gap-3 rounded-[14px] p-2.5 text-left hover:bg-panel">
              <Icon name={x.icon} size={20} className="text-indigo" />
              <span className="flex-1 text-[15.5px] font-medium text-ink">{x.label}</span>
              <Icon name="chevron-right" size={18} className="text-subtle" />
            </button>
          ))}
        </div>
      </Card>

      <Card title="Your data">
        <p className="m-0 text-[14.5px] text-subtle">Your contacts and conversations belong to you. Export them any time, or delete your account and data.</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setNote({ at: "data", text: "Exports are not connected in this demo. In the product you get a download link by email." })}
            className="min-h-10 cursor-pointer rounded-full border border-line-strong bg-white px-4 text-[14px] font-semibold text-ink hover:border-subtle"
          >
            Export contacts and chats
          </button>
          <button
            type="button"
            onClick={() => {
              clearOnboarding();
              window.location.href = withBase("/onboarding/");
            }}
            className="min-h-10 cursor-pointer rounded-full px-4 text-[14px] font-semibold text-danger hover:bg-[#FDECEC]"
          >
            Start over (clears this demo)
          </button>
        </div>
        {note?.at === "data" && (
          <p role="status" className="m-0 rounded-[14px] bg-periwinkle-soft px-4 py-3 text-[14px] text-brand">
            {note.text}
          </p>
        )}
      </Card>

    </div>
  );
}
