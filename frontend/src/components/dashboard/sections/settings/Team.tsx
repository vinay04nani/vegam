"use client";

import { useState } from "react";
import { sampleTeam } from "@/content/dashboard";
import { permissions, roles, staffMembers, type Role, type StaffMember } from "@/content/settings";
import { planLimits, plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { Avatar, Badge, Button, Menu, Modal, Progress, useToast } from "../../kit";
import { Dropdown, Group, Input, Row, RowButton, Switch } from "./parts";

// Team members, invitations and what each role can do.
// Demo: invites are not sent.

type Member = { name: string; role: Role; contact: string; status: "Active" | "Invited" };

export function Team({ plan = "growth", onOpen }: { plan?: PlanId; onOpen: (view: string) => void }) {
  const toast = useToast();
  const [team, setTeam] = useState<Member[]>(sampleTeam.map((m) => ({ ...m, role: m.role as Role, status: "Active" })));
  const [inviting, setInviting] = useState(false);
  const [invite, setInvite] = useState({ contact: "", role: "Front desk" as Role });
  const [staff, setStaff] = useState<StaffMember[]>(staffMembers);
  const [pick, setPick] = useState(true);
  const [editing, setEditing] = useState<StaffMember | null>(null);
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const fmt = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return `${((h + 11) % 12) + 1}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`;
  };
  const daysText = (d: string[]) => (d.length === 7 ? "Every day" : week.filter((x) => d.includes(x)).join(", "));

  const seats = planLimits[plan].seats;
  const full = team.length >= seats;
  const planName = plans.find((p) => p.id === plan)?.name;

  return (
    <>
      <Group title="Seats">
        <Row
          label={seats === Infinity ? `${team.length} people · unlimited seats` : `${team.length} of ${seats} seats used`}
          description={seats === Infinity ? `${planName} includes unlimited seats.` : full ? `${planName} includes ${seats} seats. Remove someone or move to a bigger plan to invite more.` : `${planName} includes ${seats} seats.`}
        >
          {seats !== Infinity && (
            <span className="flex w-40 flex-col gap-1">
              <Progress value={team.length} max={seats} label="Seats used" />
            </span>
          )}
          {full && plan !== "pro" && <RowButton onClick={() => onOpen("settings:plans")}>Upgrade</RowButton>}
        </Row>
      </Group>

      <Group
        title="Members"
        description="Everyone here sees the inbox and calendar and can take over any chat."
        action={
          <RowButton tone="primary" icon="plus" onClick={() => (full ? toast(`All ${seats} seats are in use. Upgrade or remove someone first.`, "info") : setInviting(true))}>
            Invite
          </RowButton>
        }
      >
        {team.map((m, i) => (
          <Row
            key={`${m.contact}-${i}`}
            label={
              <span className="flex items-center gap-3">
                <Avatar name={m.status === "Invited" ? m.contact : m.name} size={32} />
                <span className="flex min-w-0 flex-col">
                  <span className="flex items-center gap-2">
                    {m.status === "Invited" ? m.contact : m.name}
                    {m.status === "Invited" && <Badge tone="warning">Invited</Badge>}
                  </span>
                  <span className="truncate text-[13px] text-subtle">{m.status === "Invited" ? "Invitation sent" : m.contact}</span>
                </span>
              </span>
            }
          >
            {m.role === "Owner" ? (
              <span className="w-40 px-3 text-[14px] text-subtle">Owner</span>
            ) : (
              <Dropdown
                aria-label={`Role for ${m.name}`}
                value={m.role}
                onChange={(e) => {
                  setTeam((t) => t.map((x, j) => (j === i ? { ...x, role: e.target.value as Role } : x)));
                  toast(`${m.name} is now ${e.target.value}`);
                }}
                className="w-40"
              >
                <option>Manager</option>
                <option>Front desk</option>
              </Dropdown>
            )}
            {m.role !== "Owner" ? (
              <Menu
                label={`More for ${m.name}`}
                items={[
                  ...(m.status === "Invited" ? [{ label: "Resend invitation", onSelect: () => toast("Invitation sent again") }] : []),
                  {
                    label: m.status === "Invited" ? "Cancel invitation" : "Remove from team",
                    onSelect: () => {
                      setTeam((t) => t.filter((_, j) => j !== i));
                      toast(m.status === "Invited" ? "Invitation cancelled" : `${m.name} removed`);
                    },
                  },
                ]}
              />
            ) : (
              <span className="w-7" />
            )}
          </Row>
        ))}
      </Group>

      <Group title="Bookings" description="Who customers can be booked with, and when each person works. The AI only offers times when that person is free.">
        <Row label="Customers can choose who they see" description="The AI asks “Anyone in particular?” Otherwise it books whoever is free.">
          <Switch checked={pick} onChange={setPick} label="Customers can choose who they see" />
        </Row>
        {staff.map((m) => (
          <Row
            key={m.id}
            label={
              <span className="flex items-center gap-3">
                <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: m.color }} />
                <span className="flex min-w-0 flex-col">
                  {m.name}
                  <span className="text-[13px] text-subtle">{m.bookable ? `${daysText(m.days)} · ${fmt(m.from)} – ${fmt(m.to)}` : "Not taking bookings"}</span>
                </span>
              </span>
            }
          >
            <RowButton onClick={() => setEditing(m)} ariaLabel={`Working hours for ${m.name}`}>
              Hours
            </RowButton>
            <Switch
              checked={m.bookable}
              onChange={(v) => {
                setStaff((all) => all.map((x) => (x.id === m.id ? { ...x, bookable: v } : x)));
                toast(v ? `${m.name} takes bookings again` : `${m.name} won’t be offered to customers`);
              }}
              label={`${m.name} takes bookings`}
            />
          </Row>
        ))}
      </Group>

      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing ? `Working hours · ${editing.name}` : ""}
        footer={
          <>
            <Button variant="ghost" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!editing?.days.length}
              onClick={() => {
                if (!editing) return;
                setStaff((all) => all.map((x) => (x.id === editing.id ? editing : x)));
                setEditing(null);
                toast("Working hours saved");
              }}
            >
              Save
            </Button>
          </>
        }
      >
        {editing && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-medium text-ink">Days</span>
              <div className="flex flex-wrap gap-2">
                {week.map((d) => {
                  const on = editing.days.includes(d);
                  return (
                    <button
                      key={d}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setEditing({ ...editing, days: on ? editing.days.filter((x) => x !== d) : [...editing.days, d] })}
                      className={`min-h-9 min-w-12 cursor-pointer rounded-full border px-3 text-[13.5px] font-medium ${on ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink"}`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">From</span>
                <Input type="time" value={editing.from} onChange={(e) => setEditing({ ...editing, from: e.target.value })} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-ink">Until</span>
                <Input type="time" value={editing.to} onChange={(e) => setEditing({ ...editing, to: e.target.value })} />
              </label>
            </div>
            <p className="m-0 text-[13px] text-subtle">Time off and holidays: block the time in the Calendar.</p>
          </div>
        )}
      </Modal>

      <Group title="Roles" description="What each role can do.">
        <div className="relative overflow-x-auto">
          <table className="w-full min-w-[460px] border-collapse text-[14px]">
            <thead>
              <tr className="text-left text-[12.5px] text-subtle">
                <th scope="col" className="py-3 pr-4 font-medium">
                  <span className="sr-only">Permission</span>
                </th>
                {roles.map((r) => (
                  <th key={r} scope="col" className="w-24 px-2 py-3 text-center font-medium whitespace-nowrap">
                    {r}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {permissions.map((p) => (
                <tr key={p.label} className="border-t border-line">
                  <th scope="row" className="py-3 pr-4 text-left font-normal text-ink">
                    {p.label}
                  </th>
                  {roles.map((r) => (
                    <td key={r} className="px-2 py-3 text-center">
                      {p.allowed.includes(r) ? <Icon name="check" size={15} className="inline text-ink" /> : <span className="text-faint">–</span>}
                      <span className="sr-only">{p.allowed.includes(r) ? "Allowed" : "Not allowed"}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Group>

      <Modal
        open={inviting}
        onClose={() => setInviting(false)}
        title="Invite people"
        footer={
          <>
            <Button variant="ghost" onClick={() => setInviting(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={invite.contact.trim().length < 5}
              onClick={() => {
                setTeam((t) => [...t, { name: invite.contact.trim(), contact: invite.contact.trim(), role: invite.role, status: "Invited" }]);
                setInvite({ contact: "", role: "Front desk" });
                setInviting(false);
                toast("Invitation sent");
              }}
            >
              Send invitation
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Email or WhatsApp number</span>
            <Input value={invite.contact} onChange={(e) => setInvite((v) => ({ ...v, contact: e.target.value }))} placeholder="name@business.com or +91 98765 43210" autoFocus />
            <span className="text-[12.5px] text-subtle">They get a link to join. It expires in 7 days.</span>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Role</span>
            <Dropdown value={invite.role} onChange={(e) => setInvite((v) => ({ ...v, role: e.target.value as Role }))}>
              <option>Front desk</option>
              <option>Manager</option>
            </Dropdown>
          </label>
        </div>
      </Modal>
    </>
  );
}
