"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Badge, useToast } from "../../kit";
import { Dropdown, Group, Row, RowButton, Switch } from "./parts";

// Taking deposits and payments through links in chat. Razorpay in India,
// Stripe elsewhere. Demo: nothing is connected.

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
      <Group title="Payment links">
        <Row label="Remind people who haven’t paid" description="A polite WhatsApp after 1 day and 3 days.">
          <Switch checked={remind} onChange={setRemind} label="Payment reminders" />
        </Row>
      </Group>
    </>
  );
}
