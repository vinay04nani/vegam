"use client";

import { useState } from "react";
import { useToast } from "../../kit";
import { Dropdown, Group, Row, RowButton, Switch } from "./parts";

// Account protection for the whole team, and signed-in devices.
// Demo: sessions are samples.

const sessions = [
  { device: "Chrome on Mac", place: "Bengaluru · this device", now: true },
  { device: "Safari on iPhone", place: "Bengaluru · 2 hours ago", now: false },
  { device: "Chrome on Windows", place: "Hyderabad · 3 days ago", now: false },
];

export function Security() {
  const toast = useToast();
  const [twoStep, setTwoStep] = useState(false);
  const [teamTwoStep, setTeamTwoStep] = useState(false);
  const [mask, setMask] = useState(true);
  const [list, setList] = useState(sessions);
  return (
    <>
      <Group title="Sign-in">
        <Row label="Two-step verification" description="A code from an authenticator app when you sign in.">
          <Switch checked={twoStep} onChange={(v) => { setTwoStep(v); toast(v ? "Two-step verification on (demo)" : "Two-step verification off"); }} label="Two-step verification" />
        </Row>
        <Row label="Require it for the whole team">
          <Switch checked={teamTwoStep} onChange={setTeamTwoStep} label="Require two-step for team" />
        </Row>
        <Row label="Sign out after" description="Of inactivity on shared computers.">
          <Dropdown aria-label="Sign out after" defaultValue="30" className="w-40">
            <option value="1">1 day</option>
            <option value="7">7 days</option>
            <option value="30">30 days</option>
          </Dropdown>
        </Row>
      </Group>
      <Group title="Team access">
        <Row label="Hide full phone numbers from front desk" description="They see +91 98•• ••• 210 and can still reply.">
          <Switch checked={mask} onChange={setMask} label="Hide full phone numbers" />
        </Row>
      </Group>
      <Group title="Signed-in devices" action={list.length > 1 ? <RowButton tone="danger" onClick={() => { setList(list.filter((s) => s.now)); toast("Signed out of other devices"); }}>Sign out others</RowButton> : undefined}>
        {list.map((s) => (
          <Row key={s.device} label={s.device} description={s.place}>
            {s.now ? <span className="text-[13px] text-subtle">Current</span> : <RowButton onClick={() => setList(list.filter((x) => x.device !== s.device))}>Sign out</RowButton>}
          </Row>
        ))}
      </Group>
    </>
  );
}
