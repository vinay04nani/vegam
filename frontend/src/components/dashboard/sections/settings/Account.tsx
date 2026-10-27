"use client";

import { useState } from "react";
import { plans } from "@/content/pricing";
import { clearOnboarding, currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { Button, Modal, useToast } from "../../kit";
import { Group, Input, Row, RowButton } from "./parts";

// Plan summary (full details live on the Billing page), exporting data and
// closing the account. Demo: export and deletion are not connected.

type Props = { state: OnboardingState; onOpen: (view: string) => void };

export function Account({ state, onOpen }: Props) {
  const toast = useToast();
  const [closing, setClosing] = useState(false);
  const [typed, setTyped] = useState("");
  const plan = plans.find((p) => p.id === state.plan);
  const currency = currencyFor(state);
  const price = plan?.price?.[currency][state.billing];
  const name = state.business.name || "Nila & Co";

  return (
    <>
      <Group title="Plan">
        <Row
          label={plan ? `${plan.name} plan` : "No plan yet"}
          description={
            plan
              ? `${state.liveAt ? "Free pilot" : "Pilot starts when you go live"}${price !== undefined ? `, then ${plan.from ? "from " : ""}${formatMoney(price, currency)}/month` : ""}`
              : "Choose a plan to start your free 30-day pilot."
          }
        >
          <RowButton onClick={() => onOpen("plan")}>{plan ? "Change plan" : "Choose a plan"}</RowButton>
        </Row>
        <Row label="Billing and invoices" description="Payment method, usage and GST invoices.">
          <RowButton onClick={() => onOpen("billing")}>Open billing</RowButton>
        </Row>
      </Group>

      <Group title="Your data">
        <Row label="Export everything" description="Contacts, chats and bookings. We email you a download link.">
          <RowButton icon="download" onClick={() => toast("We’ll email a download link within a few minutes (demo)", "info")}>
            Export
          </RowButton>
        </Row>
      </Group>

      <Group title="Danger zone">
        <Row label="Start over" description="Clears this demo and takes you back to sign-up.">
          <RowButton
            tone="danger"
            onClick={() => {
              clearOnboarding();
              window.location.href = withBase("/onboarding/");
            }}
          >
            Start over
          </RowButton>
        </Row>
        <Row label="Close account" description="Stops your assistant and deletes your data after 30 days.">
          <RowButton tone="danger" onClick={() => setClosing(true)}>
            Close account
          </RowButton>
        </Row>
      </Group>

      <Modal
        open={closing}
        onClose={() => setClosing(false)}
        title="Close your account?"
        footer={
          <>
            <Button variant="ghost" onClick={() => setClosing(false)}>
              Keep my account
            </Button>
            <Button
              variant="danger"
              disabled={typed.trim() !== name}
              onClick={() => {
                setClosing(false);
                setTyped("");
                toast("Account closing is not connected in this demo", "info");
              }}
            >
              Close account
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <p className="m-0 text-[14.5px] text-ink-soft">Your assistant stops replying straight away and your WhatsApp number is released. Your data is deleted after 30 days; export it first if you need it.</p>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Type “{name}” to confirm</span>
            <Input value={typed} onChange={(e) => setTyped(e.target.value)} autoFocus />
          </label>
        </div>
      </Modal>
    </>
  );
}
