"use client";

import { useState } from "react";
import { useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch, TextArea } from "./parts";

// Consent, opt-outs, AI and recording disclosure, data retention and
// requests from customers about their data (e.g. India's DPDP Act).
// Demo: kept in this component.

export function Privacy({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [mask, setMask] = useState(true);

  return (
    <>
      <Group title="AI disclosure">
        <Row label="Say it’s an AI assistant" description="In the first message and at the start of every call. Always on.">
          <Switch checked disabled onChange={() => undefined} label="Say it’s an AI assistant" />
        </Row>
        <Row label="Introduction" description="How the assistant introduces itself." stacked>
          <TextArea aria-label="Introduction" rows={2} defaultValue="Hi! I’m the AI assistant for {business}. I can answer questions and book visits, or pass you to the team." />
        </Row>
      </Group>

      <Group title="Opt-outs" description="Anyone who sends a stop word stops getting reminders and campaigns at once. They can still message you.">
        <Row label="Stop words" description="Separated by commas.">
          <Input aria-label="Stop words" defaultValue="STOP, UNSUBSCRIBE, रुकें" className="w-64" />
        </Row>
        <Row label="Reply after opting out" stacked>
          <Input aria-label="Reply after opting out" defaultValue="You won’t get reminders or offers from us any more. Reply START to undo." />
        </Row>
        <Row label="Consent records" description="How and when each contact agreed to hear from you.">
          <RowButton onClick={() => onOpen("contacts")}>View contacts</RowButton>
        </Row>
      </Group>

      <Group title="Data retention">
        <Row label="Keep chats">
          <Dropdown aria-label="Keep chats" defaultValue="365" className="w-44">
            <option value="90">90 days</option>
            <option value="365">1 year</option>
            <option value="1095">3 years</option>
          </Dropdown>
        </Row>
        <Row label="Keep call recordings">
          <Dropdown aria-label="Keep call recordings" defaultValue="90" className="w-44">
            <option value="0">Don’t record</option>
            <option value="30">30 days</option>
            <option value="90">90 days</option>
            <option value="365">1 year</option>
          </Dropdown>
        </Row>
        <Row label="Hide card and ID numbers" description="Masked in transcripts before anything is stored.">
          <Switch checked={mask} onChange={setMask} label="Hide card and ID numbers" />
        </Row>
      </Group>

      <Group title="Data requests" description="Customers can ask what you hold about them or ask you to delete it. You have 30 days to reply.">
        <Row label="Requests go to" description="Given by the AI when someone asks.">
          <Input aria-label="Requests go to" type="email" placeholder="privacy@yourbusiness.com" className="w-64" />
        </Row>
        <Row label="Open requests" description="None right now.">
          <RowButton icon="download" onClick={() => toast("Consent log downloaded (demo)")}>
            Consent log
          </RowButton>
        </Row>
      </Group>
    </>
  );
}
