"use client";

import { useState } from "react";
import { overage, planLimits, plans } from "@/content/pricing";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { downloadPdf } from "@/lib/pdf";
import { Badge, Progress, useToast } from "../../kit";
import { Group, Row, RowButton, Switch } from "./parts";
import { Icon } from "@/components/ui/Icon";

// Your Vegam plan, usage, payment method and invoice history. Invoices are
// sample data; "Download PDF" makes a real (sample) PDF in the browser.

type Props = { state: OnboardingState; onOpen: (view: string) => void };

export function Billing({ state, onOpen }: Props) {
  const toast = useToast();
  const currency = currencyFor(state);
  const india = currency === "INR";
  const plan = plans.find((p) => p.id === (state.plan ?? "growth"))!;
  const base = plan.price?.[currency].monthly ?? (india ? 4999 : 99);
  const tax = india ? Math.round(base * 0.18) : 0;
  const [method, setMethod] = useState<string | null>("Visa •••• 4242 · expires 08/29");
  const [alerts, setAlerts] = useState(true);
  const limits = planLimits[plan.id];
  const rates = overage[currency];
  const usage = [
    { label: "AI conversations", used: Math.round(limits.conversations * 0.84), max: limits.conversations, rate: `${formatMoney(rates.conversation, currency)} each after that` },
    ...(limits.minutes ? [{ label: "AI call minutes", used: Math.round(limits.minutes * 0.71), max: limits.minutes, rate: `${formatMoney(rates.minute, currency)} a minute after that` }] : []),
  ];
  const near = usage.find((u) => u.used / u.max >= 0.8);

  const invoices = [
    { id: "VG-2026-0003", date: "1 Oct 2026", period: "Oct 2026", amount: base + tax, status: "Paid" as const, wa: india ? 412 : 9 },
    { id: "VG-2026-0002", date: "1 Sep 2026", period: "Sep 2026", amount: base + tax, status: "Paid" as const, wa: india ? 365 : 8 },
    { id: "VG-2026-0001", date: "1 Aug 2026", period: "Aug 2026 · pilot", amount: 0, status: "Free pilot" as const, wa: 0 },
  ];

  const pdf = (inv: (typeof invoices)[number]) =>
    downloadPdf(`${inv.id}.pdf`, [
      { text: "VEGAM", size: 20, bold: true },
      { text: india ? "Tax invoice (sample)" : "Invoice (sample)", size: 13, gap: 26 },
      { text: `Invoice ${inv.id}    Date ${inv.date}`, gap: 30 },
      { text: `Billed to: ${state.business.name || "Nila & Co"}` },
      { text: `${plan.name} plan - ${inv.period}`, gap: 34 },
      { text: `Plan: ${formatMoney(inv.amount ? base : 0, currency)}` },
      ...(india ? [{ text: `GST 18%: ${formatMoney(inv.amount ? tax : 0, currency)}` }] : []),
      { text: `WhatsApp fees passed on at cost: ${formatMoney(inv.wa, currency)}` },
      { text: `Total: ${formatMoney(inv.amount + inv.wa, currency)}`, bold: true, size: 13, gap: 28 },
      { text: `Status: ${inv.status}`, gap: 24 },
      { text: "This is sample data from the Vegam demo.", size: 9, gap: 60 },
    ]);

  return (
    <>
      <Group title="Plan">
        <Row label={`${plan.name} plan`} description={`${formatMoney(base, currency)}/month${india ? " + GST" : ""} · renews 1 Nov 2026`}>
          <RowButton onClick={() => onOpen("settings:plans")}>Change plan</RowButton>
        </Row>
        <Row label="Usage this month" description="Resets on 1 Nov." stacked>
          <div className="flex flex-col gap-4">
            {near && (
              <p className="m-0 flex items-start gap-2.5 rounded-[12px] bg-[#FFF6E5] px-3.5 py-3 text-[13.5px] text-[#7A4A00]">
                <Icon name="bell" size={16} className="mt-0.5 flex-none" />
                <span>
                  You’ve used {Math.round((near.used / near.max) * 100)}% of your {near.label}. Nothing stops if you go over: extra ones cost {near.rate.replace(" after that", "")}.{" "}
                  {plan.id !== "pro" && (
                    <button type="button" onClick={() => onOpen("settings:plans")} className="cursor-pointer font-semibold underline underline-offset-2">
                      See bigger plans
                    </button>
                  )}
                </span>
              </p>
            )}
            {usage.map((u) => (
              <div key={u.label} className="flex flex-col gap-1">
                <span className="flex justify-between gap-3 text-[13px]">
                  <span className="text-ink-soft">{u.label}</span>
                  <span className="text-subtle tabular-nums">
                    {u.used.toLocaleString()} of {u.max.toLocaleString()}
                  </span>
                </span>
                <Progress value={u.used} max={u.max} label={u.label} />
                <span className="text-[12px] text-subtle">{u.rate}</span>
              </div>
            ))}
            <div className="flex items-start justify-between gap-3 border-t border-line pt-3">
              <span className="flex flex-col">
                <span className="text-[13.5px] text-ink-soft">WhatsApp fees so far</span>
                <span className="text-[12px] text-subtle">318 reminders and confirmations, 94 campaign messages. Meta’s fees, passed on at cost on your next invoice.</span>
              </span>
              <span className="text-[14px] font-semibold text-ink tabular-nums">{formatMoney(india ? 412 : 9, currency)}</span>
            </div>
          </div>
        </Row>
        <Row label="Usage alerts" description="A WhatsApp and email when you reach 80% and 100% of an allowance.">
          <Switch checked={alerts} onChange={setAlerts} label="Usage alerts" />
        </Row>
      </Group>

      <Group title="Payment method">
        <Row label={method ?? "No payment method"} description={method ? "Charged through Stripe on the 1st of each month." : "Add a card through Stripe before your pilot ends."}>
          {method && <RowButton tone="danger" onClick={() => { setMethod(null); toast("Payment method removed"); }}>Remove</RowButton>}
          <RowButton tone={method ? "default" : "primary"} onClick={() => { setMethod("Visa •••• 4242 · expires 08/29"); toast("Opens Stripe’s secure checkout (demo)", "info"); }}>
            {method ? "Change" : "Add"}
          </RowButton>
        </Row>
      </Group>

      <Group title="Invoices" description="Sample data.">
        {invoices.map((inv) => (
          <Row key={inv.id} label={inv.period} description={`${inv.id} · ${inv.date}`}>
            <span className="w-24 text-right text-[14px] text-ink tabular-nums">{formatMoney(inv.amount + inv.wa, currency)}</span>
            <Badge tone={inv.status === "Paid" ? "success" : "neutral"}>{inv.status}</Badge>
            <RowButton icon="download" ariaLabel={`Download ${inv.id} as PDF`} onClick={() => pdf(inv)}>
              PDF
            </RowButton>
          </Row>
        ))}
      </Group>
    </>
  );
}
