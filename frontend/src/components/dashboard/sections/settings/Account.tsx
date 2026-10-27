"use client";

import { useState } from "react";
import { plans } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { clearOnboarding, currencyFor, formatMoney, type OnboardingState } from "@/lib/onboarding";
import { withBase } from "@/lib/paths";
import { Button, Modal, useToast } from "../../kit";
import { SettingsSection } from "../../ui";
import { Input, Label, Panel } from "./parts";

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
      <Panel>
        <SettingsSection title="Plan" description="Change plans any time. Invoices, usage and payment methods are on the Billing page.">
          <div className="flex flex-wrap items-center gap-4 rounded-[14px] border border-line p-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[12px] bg-ink text-accent">
              <Icon name="sparkle" size={19} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-[15.5px] font-semibold text-ink">{plan ? `${plan.name} plan` : "No plan yet"}</span>
              <span className="text-[13.5px] text-subtle">
                {plan
                  ? `${state.liveAt ? "Free pilot" : "Pilot starts when you go live"}${price !== undefined ? `, then ${plan.from ? "from " : ""}${formatMoney(price, currency)}/month` : ""}`
                  : "Choose a plan to start your free 30-day pilot."}
              </span>
            </span>
            <span className="flex gap-2">
              <Button onClick={() => onOpen("plan")}>{plan ? "Change plan" : "Choose a plan"}</Button>
              <Button variant="primary" onClick={() => onOpen("billing")}>
                Billing
              </Button>
            </span>
          </div>
        </SettingsSection>

        <SettingsSection title="Export your data" description="Your contacts, chats and bookings belong to you. Download them any time.">
          <span className="flex flex-wrap gap-2">
            <Button icon="download" onClick={() => toast("We’ll email a download link within a few minutes (demo)", "info")}>
              Export everything
            </Button>
            <Button variant="ghost" icon="users" onClick={() => onOpen("contacts")}>
              Export contacts only
            </Button>
          </span>
        </SettingsSection>

        <SettingsSection title="Danger zone" description="These can’t be undone.">
          <div className="flex flex-col divide-y divide-line overflow-hidden rounded-[14px] border border-[#F7CFCF]">
            <div className="flex flex-wrap items-center gap-3 p-4">
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14.5px] font-semibold text-ink">Start over</span>
                <span className="text-[13px] text-subtle">Clears this demo and takes you back to sign-up.</span>
              </span>
              <Button
                variant="danger"
                onClick={() => {
                  clearOnboarding();
                  window.location.href = withBase("/onboarding/");
                }}
              >
                Start over
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 p-4">
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14.5px] font-semibold text-ink">Close account</span>
                <span className="text-[13px] text-subtle">Stops your assistant, cancels your plan and deletes your data after 30 days.</span>
              </span>
              <Button variant="danger" onClick={() => setClosing(true)}>
                Close account
              </Button>
            </div>
          </div>
        </SettingsSection>
      </Panel>

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
          <Label label={`Type “${name}” to confirm`}>
            <Input value={typed} onChange={(e) => setTyped(e.target.value)} autoFocus />
          </Label>
        </div>
      </Modal>
    </>
  );
}
