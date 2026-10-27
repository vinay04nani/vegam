"use client";

import { useState } from "react";
import { plans } from "@/content/pricing";
import { currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { downloadPdf } from "@/lib/pdf";
import { Badge, Progress, useToast } from "../../kit";
import { Group, Row, RowButton } from "./parts";

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
          <RowButton onClick={() => onOpen("plan")}>Change plan</RowButton>
        </Row>
        <Row label="Usage this month" description="Resets on 1 Nov." stacked>
          <div className="flex flex-col gap-3">
            {[
              { label: "AI conversations", used: 1640, max: 2000 },
              { label: "AI call minutes", used: 212, max: 500 },
            ].map((u) => (
              <div key={u.label} className="flex flex-col gap-1">
                <span className="flex justify-between text-[13px]">
                  <span className="text-ink-soft">{u.label}</span>
                  <span className="text-subtle tabular-nums">
                    {u.used.toLocaleString()} / {u.max.toLocaleString()}
                  </span>
                </span>
                <Progress value={u.used} max={u.max} label={u.label} />
              </div>
            ))}
          </div>
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
