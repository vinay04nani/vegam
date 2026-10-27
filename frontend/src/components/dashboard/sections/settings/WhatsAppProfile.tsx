"use client";

import { Badge, useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, TextArea } from "./parts";

// The WhatsApp Business profile customers see, and the health of the number
// as Meta reports it. Sample values until WhatsApp is connected.

export function WhatsAppProfile({ name, onOpen }: { name: string; onOpen: (view: string) => void }) {
  const toast = useToast();
  return (
    <>
      <Group title="Number">
        <Row label="+91 98•• ••• 210" description="Connected through Meta · sample">
          <Badge tone="success" dot>Connected</Badge>
          <RowButton onClick={() => onOpen("channels")}>Manage</RowButton>
        </Row>
        <Row label="Quality rating" description="Meta’s view of how customers react to your messages. Low quality limits sending.">
          <Badge tone="success">High</Badge>
        </Row>
        <Row label="Daily limit" description="New people you can message first each day. It grows as you send good messages.">
          <span className="text-[14px] text-ink">1,000 / day</span>
        </Row>
      </Group>
      <Group title="Business profile" description="What people see when they tap your name in WhatsApp. Changes are reviewed by Meta.">
        <Row label="Display name" description="Must match your business name or signage.">
          <Input aria-label="Display name" defaultValue={name || "Nila & Co"} className="w-64" />
        </Row>
        <Row label="About" description="Up to 139 characters." stacked>
          <TextArea aria-label="About" rows={2} maxLength={139} defaultValue="Appointments and walk-ins. Book any time on WhatsApp." />
        </Row>
        <Row label="Category">
          <Dropdown aria-label="Category" defaultValue="Professional services" className="w-56">
            <option>Professional services</option>
            <option>Health</option>
            <option>Beauty, spa and salon</option>
            <option>Education</option>
            <option>Retail</option>
            <option>Other</option>
          </Dropdown>
        </Row>
        <Row label="Address and email" stacked>
          <span className="grid gap-2 sm:grid-cols-2">
            <Input aria-label="Address" placeholder="Address" />
            <Input aria-label="Profile email" type="email" placeholder="Email" />
          </span>
        </Row>
        <Row label="Submit changes to Meta">
          <RowButton tone="primary" onClick={() => toast("Sent to Meta for review (demo)")}>Submit</RowButton>
        </Row>
      </Group>
    </>
  );
}
