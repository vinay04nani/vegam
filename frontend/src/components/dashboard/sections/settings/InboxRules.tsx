"use client";

import { useState } from "react";
import { Dropdown, Group, Input, Row, Switch, TextArea } from "./parts";

// How chats are shared out and closed, and what customers hear while the
// team is away. Demo: kept here.

export function InboxRules() {
  const [away, setAway] = useState(true);
  const [csat, setCsat] = useState(false);
  return (
    <>
      <Group title="Assignment">
        <Row label="When the AI hands over a chat" description="Who gets it first.">
          <Dropdown aria-label="Assign handovers to" defaultValue="round" className="w-52">
            <option value="round">Take turns (round robin)</option>
            <option value="least">Whoever has fewest chats</option>
            <option value="owner">Always me</option>
            <option value="none">Leave unassigned</option>
          </Dropdown>
        </Row>
        <Row label="Reassign if no reply in" description="Passes the chat on if nobody answers.">
          <Dropdown aria-label="Reassign after" defaultValue="15" className="w-52">
            <option value="5">5 minutes</option>
            <option value="15">15 minutes</option>
            <option value="60">1 hour</option>
            <option value="0">Never</option>
          </Dropdown>
        </Row>
        <Row label="Close chats after" description="Inactive chats are resolved; a new message reopens them.">
          <Dropdown aria-label="Close chats after" defaultValue="24" className="w-52">
            <option value="4">4 hours</option>
            <option value="24">24 hours</option>
            <option value="72">3 days</option>
            <option value="0">Never</option>
          </Dropdown>
        </Row>
      </Group>
      <Group title="While you’re away">
        <Row label="Away message" description="Outside opening hours, when a person is needed.">
          <Switch checked={away} onChange={setAway} label="Away message" />
        </Row>
        {away && (
          <Row label="Message" stacked>
            <TextArea aria-label="Away message text" rows={2} defaultValue="Thanks for your message! Our team is back at 10 AM and will reply then. I can still help with bookings." />
          </Row>
        )}
      </Group>
      <Group title="Quality">
        <Row label="Ask for a rating" description="“How did we do?” after a chat with your team is resolved.">
          <Switch checked={csat} onChange={setCsat} label="Ask for a rating" />
        </Row>
        <Row label="Signature" description="Added to replies from your team, e.g. “– Priya”.">
          <Input aria-label="Signature" placeholder="– {first name}" className="w-52" />
        </Row>
      </Group>
    </>
  );
}
