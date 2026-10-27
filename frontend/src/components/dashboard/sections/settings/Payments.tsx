"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { downloadPdf } from "@/lib/pdf";
import { Badge, useToast, type BadgeTone } from "../../kit";
import { Dropdown, Group, Row, RowButton, Switch } from "./parts";

// Taking deposits and payments through links in chat. Razorpay in India,
// Stripe elsewhere. Demo: nothing is connected.

const received = [
  { id: "pay_8KQ2", who: "M. D’Souza", what: "Standard appointment", amount: 1200, usd: 40, when: "Today, 11:42 AM", status: "Paid" },
  { id: "pay_8KP9", who: "V. Reddy", what: "Deposit · First visit", amount: 100, usd: 3, when: "Yesterday, 6:10 PM", status: "Paid" },
  { id: "pay_8KN4", who: "G. Nair", what: "Follow-up", amount: 300, usd: 10, when: "2 days ago", status: "Pending" },
  { id: "pay_8KM1", who: "S. Menon", what: "Standard appointment", amount: 1200, usd: 40, when: "5 days ago", status: "Refunded" },
];
const tone: Record<string, BadgeTone> = { Paid: "success", Pending: "warning", Refunded: "neutral" };

export function Payments({ india }: { india: boolean }) {
  const toast = useToast();
  const [deposit, setDeposit] = useState(false);
  const [remind, setRemind] = useState(true);
  return (
    <>
      <Group title="Payment provider">
        <Row label={<span className="flex items-center gap-3"><BrandLogo brand={india ? "razorpay" : "stripe"} size={28} />{india ? "Razorpay" : "Stripe"}</span>} description={india ? "UPI, cards and netbanking. Money goes straight to your bank." : "Cards and wallets. Money goes straight to your bank."}>
          <Badge>Not connected</Badge>
          <RowButton tone="primary" onClick={() => toast("Opens the provider’s sign-up (demo)", "info")}>Connect</RowButton>
        </Row>
      </Group>
      <Group title="Deposits" description="Cut no-shows by taking part of the price when people book.">
        <Row label="Ask for a deposit">
          <Switch checked={deposit} onChange={setDeposit} label="Ask for a deposit" />
        </Row>
        <Row label="Deposit amount">
          <Dropdown aria-label="Deposit amount" disabled={!deposit} defaultValue="20" className="w-44">
            <option value="10">10% of price</option>
            <option value="20">20% of price</option>
            <option value="50">50% of price</option>
            <option value="100">Full price</option>
          </Dropdown>
        </Row>
        <Row label="If they cancel late">
          <Dropdown aria-label="Late cancellation" disabled={!deposit} defaultValue="keep" className="w-44">
            <option value="keep">Keep the deposit</option>
            <option value="credit">Turn it into credit</option>
            <option value="refund">Refund it</option>
          </Dropdown>
        </Row>
      </Group>
      <Group title="Payments received" description="Sample data. Money from deposits and payment links, straight to your bank.">
        {received.map((p) => {
          const amount = india ? `₹${p.amount.toLocaleString("en-IN")}` : `$${p.usd}`;
          return (
            <Row key={p.id} label={p.who} description={`${p.what} · ${p.when}`}>
              <span className="w-20 text-right text-[14px] text-ink tabular-nums">{amount}</span>
              <Badge tone={tone[p.status]}>{p.status}</Badge>
              <RowButton
                icon="download"
                ariaLabel={`Download receipt for ${p.who}`}
                onClick={() =>
                  downloadPdf(`receipt-${p.id}.pdf`, [
                    { text: "Payment receipt (sample)", size: 16, bold: true },
                    { text: `Receipt ${p.id}    ${p.when}`, gap: 30 },
                    { text: `Received from: ${p.who}` },
                    { text: `For: ${p.what}` },
                    { text: `Amount: ${amount}`, bold: true, size: 13, gap: 28 },
                    { text: `Status: ${p.status}` },
                    { text: "This is sample data from the Vegam demo.", size: 9, gap: 60 },
                  ])
                }
              >
                Receipt
              </RowButton>
            </Row>
          );
        })}
      </Group>
      <Group title="Payment links">
        <Row label="Remind people who haven’t paid" description="A polite WhatsApp after 1 day and 3 days.">
          <Switch checked={remind} onChange={setRemind} label="Payment reminders" />
        </Row>
      </Group>
    </>
  );
}
