"use client";

import { useState } from "react";
import { useToast } from "../../kit";
import { Dropdown, Group, Row, RowButton } from "./parts";

// Who changed what in the account. Sample entries until the backend exists.

const entries = [
  { who: "You", what: "Changed opening hours for Saturday", when: "Today, 9:12 AM", kind: "Settings" },
  { who: "R. Kumar", what: "Took over a chat with +91 98•• ••• 210", when: "Today, 8:20 AM", kind: "Inbox" },
  { who: "You", what: "Invited S. Das as Front desk", when: "Yesterday, 6:05 PM", kind: "Team" },
  { who: "S. Das", what: "Exported 42 contacts", when: "Yesterday, 11:40 AM", kind: "Contacts" },
  { who: "You", what: "Submitted template review_request", when: "2 days ago", kind: "Settings" },
  { who: "You", what: "Created API key “Website booking widget”", when: "12 Oct 2026", kind: "Developers" },
];

export function ActivityLog() {
  const toast = useToast();
  const [kind, setKind] = useState("All");
  const shown = entries.filter((e) => kind === "All" || e.kind === kind);
  return (
    <Group
      title="Activity"
      description="Sample entries. Kept for 1 year."
      action={
        <>
          <Dropdown aria-label="Filter activity" value={kind} onChange={(e) => setKind(e.target.value)} className="w-36">
            {["All", "Settings", "Inbox", "Team", "Contacts", "Developers"].map((k) => (
              <option key={k}>{k}</option>
            ))}
          </Dropdown>
          <RowButton icon="download" onClick={() => toast("Activity exported (demo)")}>Export</RowButton>
        </>
      }
    >
      {shown.map((e) => (
        <Row key={e.what} label={e.what} description={`${e.who} · ${e.kind}`}>
          <span className="text-[13px] text-subtle">{e.when}</span>
        </Row>
      ))}
    </Group>
  );
}
