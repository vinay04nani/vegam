"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button, Toggle, useToast } from "../../kit";
import { SaveBar, SettingsSection } from "../../ui";
import { Dropdown, Input, Label, Panel, TextArea } from "./parts";

// Consent, opt-outs, AI and recording disclosure, data retention and
// requests from customers about their data (e.g. India's DPDP Act).
// Demo: kept in this component.

export function Privacy({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [dirty, setDirty] = useState(false);
  const touch = () => setDirty(true);

  return (
    <>
      <Panel>
        <div onChange={touch}>
          <SettingsSection title="AI disclosure" description="Customers are always told they’re talking to an AI assistant. You can change the wording, not turn it off.">
            <Toggle checked onChange={() => undefined} disabled label="Say it’s an AI in the first message and at the start of every call" description="Always on." />
            <Label label="How the assistant introduces itself">
              <TextArea rows={2} defaultValue="Hi! I’m the AI assistant for {business}. I can answer questions and book visits, or pass you to the team." />
            </Label>
          </SettingsSection>

          <SettingsSection title="Opt-outs" description="Anyone who sends one of these words stops getting reminders and campaigns straight away. They can still message you.">
            <Label label="Stop words" hint="Separate with commas. Not case-sensitive.">
              <Input defaultValue="STOP, UNSUBSCRIBE, रुकें" />
            </Label>
            <Label label="Reply when someone opts out">
              <Input defaultValue="You won’t get reminders or offers from us any more. Reply START to undo." />
            </Label>
            <span>
              <Button icon="users" onClick={() => onOpen("contacts")}>
                See consent for each contact
              </Button>
            </span>
          </SettingsSection>

          <SettingsSection title="Recordings and transcripts" description="How long Vegam keeps conversations. Shorter is safer; longer helps your AI learn.">
            <div className="grid gap-4 sm:grid-cols-2">
              <Label label="Keep chats">
                <Dropdown defaultValue="365">
                  <option value="90">90 days</option>
                  <option value="365">1 year</option>
                  <option value="1095">3 years</option>
                </Dropdown>
              </Label>
              <Label label="Keep call recordings">
                <Dropdown defaultValue="90">
                  <option value="0">Don’t record calls</option>
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                  <option value="365">1 year</option>
                </Dropdown>
              </Label>
            </div>
            <Toggle checked onChange={touch} label="Hide card numbers and ID numbers in transcripts" description="Recommended. Masked before anything is stored." />
          </SettingsSection>

          <SettingsSection title="Data requests" description="Customers can ask what you hold about them, or ask you to delete it. You have 30 days to reply.">
            <Label label="Where customers send requests" hint="Shown in your privacy notice and given by the AI when asked.">
              <Input type="email" placeholder="privacy@yourbusiness.com" />
            </Label>
            <p className="m-0 flex items-center gap-2 rounded-[12px] bg-[#E8F3EA] px-3.5 py-2.5 text-[13.5px] text-success">
              <Icon name="check" size={15} />
              No open requests.
            </p>
            <span className="flex flex-wrap gap-2">
              <Button icon="download" onClick={() => toast("Consent log downloaded (demo)")}>
                Download consent log
              </Button>
            </span>
          </SettingsSection>
        </div>
      </Panel>
      {dirty && (
        <SaveBar
          onDiscard={() => setDirty(false)}
          onSave={() => {
            setDirty(false);
            toast("Privacy settings saved");
          }}
        />
      )}
    </>
  );
}
