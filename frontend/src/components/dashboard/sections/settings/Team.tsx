"use client";

import { useState } from "react";
import { sampleTeam } from "@/content/dashboard";
import { permissions, roles, type Role } from "@/content/settings";
import { Icon } from "@/components/ui/Icon";
import { Avatar, Badge, Button, Menu, Modal, useToast } from "../../kit";
import { SampleTag, SettingsSection } from "../../ui";
import { Dropdown, Input, Label, List, Panel } from "./parts";

// Team members, invitations and what each role can do.
// Demo: invites are not sent.

type Member = { name: string; role: Role; contact: string; status: "Active" | "Invited" };

export function Team() {
  const toast = useToast();
  const [team, setTeam] = useState<Member[]>(sampleTeam.map((m) => ({ ...m, role: m.role as Role, status: "Active" })));
  const [inviting, setInviting] = useState(false);
  const [invite, setInvite] = useState({ contact: "", role: "Front desk" as Role });

  return (
    <>
      <Panel>
        <SettingsSection title="Members" description="Everyone on your team sees the inbox and calendar and can take over any chat.">
          <div className="flex items-center justify-between gap-3">
            <SampleTag />
            <Button variant="primary" icon="plus" onClick={() => setInviting(true)}>
              Invite people
            </Button>
          </div>
          <List>
            {team.map((m, i) => (
              <li key={`${m.contact}-${i}`} className="flex flex-wrap items-center gap-3 px-4 py-3">
                <Avatar name={m.status === "Invited" ? m.contact : m.name} size={36} />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="flex items-center gap-2 text-[14.5px] font-semibold text-ink">
                    {m.status === "Invited" ? m.contact : m.name === "You" ? "You" : m.name}
                    {m.status === "Invited" && <Badge tone="warning">Invited</Badge>}
                  </span>
                  <span className="truncate text-[13px] text-subtle">{m.status === "Invited" ? "Invitation sent just now" : m.contact}</span>
                </span>
                {m.role === "Owner" ? (
                  <span className="px-3 text-[14px] font-semibold text-ink-soft">Owner</span>
                ) : (
                  <label>
                    <span className="sr-only">Role for {m.name}</span>
                    <Dropdown
                      value={m.role}
                      onChange={(e) => {
                        setTeam((t) => t.map((x, j) => (j === i ? { ...x, role: e.target.value as Role } : x)));
                        toast(`${m.name} is now ${e.target.value}`);
                      }}
                      className="w-[150px]"
                    >
                      {roles
                        .filter((r) => r !== "Owner")
                        .map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                    </Dropdown>
                  </label>
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
              </li>
            ))}
          </List>
        </SettingsSection>

        <SettingsSection title="Roles" description="What each role can do. Owners can do everything.">
          <div className="relative overflow-x-auto rounded-[14px] border border-line">
            <table className="w-full min-w-[460px] border-collapse text-[14px]">
              <thead className="bg-[#FAFAFC] text-left">
                <tr>
                  <th scope="col" className="px-4 py-2.5 text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">
                    Permission
                  </th>
                  {roles.map((r) => (
                    <th key={r} scope="col" className="px-3 py-2.5 text-center text-[12.5px] font-semibold tracking-[0.04em] whitespace-nowrap text-muted uppercase">
                      {r}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissions.map((p) => (
                  <tr key={p.label} className="border-t border-line">
                    <th scope="row" className="px-4 py-2.5 text-left font-normal text-ink">
                      {p.label}
                    </th>
                    {roles.map((r) => (
                      <td key={r} className="px-3 py-2.5 text-center">
                        {p.allowed.includes(r) ? (
                          <Icon name="check" size={16} className="inline text-success" />
                        ) : (
                          <span className="text-faint" aria-hidden="true">
                            —
                          </span>
                        )}
                        <span className="sr-only">{p.allowed.includes(r) ? "Allowed" : "Not allowed"}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SettingsSection>
      </Panel>

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
          <Label label="Email or WhatsApp number" hint="They get a link to join. It expires in 7 days.">
            <Input value={invite.contact} onChange={(e) => setInvite((v) => ({ ...v, contact: e.target.value }))} placeholder="name@business.com or +91 98765 43210" autoFocus />
          </Label>
          <Label label="Role">
            <Dropdown value={invite.role} onChange={(e) => setInvite((v) => ({ ...v, role: e.target.value as Role }))}>
              <option>Front desk</option>
              <option>Manager</option>
            </Dropdown>
          </Label>
        </div>
      </Modal>
    </>
  );
}
