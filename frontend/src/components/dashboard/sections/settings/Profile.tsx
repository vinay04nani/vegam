"use client";

import { useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { withBase } from "@/lib/paths";
import { Button, Modal, useToast } from "../../kit";
import { Group, Input, Row, RowButton } from "./parts";

// The signed-in person (not the business): photo, name, contact, sign-in
// methods, password and log out. Demo: sample account details, nothing is
// sent anywhere.

export function Profile({ name, business }: { name: string; business: string }) {
  const toast = useToast();
  const [photo, setPhoto] = useState<string | null>(null);
  const [google, setGoogle] = useState(true);
  const [changing, setChanging] = useState(false);
  const [pw, setPw] = useState({ now: "", next: "" });
  const file = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex items-center gap-4 border-b border-line pb-6">
        <span className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-full bg-ink text-[24px] font-bold text-white">
          {photo ? <img src={photo} alt="Your photo" className="h-full w-full object-cover" /> : name[0]}
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[17px] font-semibold text-ink">{name}</span>
          <span className="text-[13.5px] text-subtle">Owner · {business}</span>
        </span>
        <RowButton onClick={() => file.current?.click()}>{photo ? "Change photo" : "Add photo"}</RowButton>
        <input
          ref={file}
          type="file"
          accept="image/*"
          className="sr-only"
          aria-label="Profile photo"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) setPhoto(URL.createObjectURL(f));
          }}
        />
      </div>

      <div className="mt-8">
        <Group title="Your details">
          <Row label="Full name">
            <Input aria-label="Full name" defaultValue={name} className="w-64" />
          </Row>
          <Row label="Email" description="For sign-in, invoices and account alerts.">
            <Input aria-label="Email" type="email" defaultValue="owner@example.com" className="w-64" />
          </Row>
          <Row label="Mobile" description="Your WhatsApp for handovers and the morning report.">
            <Input aria-label="Mobile" type="tel" defaultValue="+91 98•• ••• 001" className="w-64" />
          </Row>
          <Row label="Role">
            <span className="text-[14px] text-subtle">Owner</span>
          </Row>
        </Group>
      </div>

      <div className="mt-9">
        <Group title="Sign-in">
          <Row label="Password" description="Last changed 3 months ago.">
            <RowButton onClick={() => setChanging(true)}>Change</RowButton>
          </Row>
          <Row
            label={
              <span className="flex items-center gap-2.5">
                <BrandLogo brand="google" size={24} />
                Google
              </span>
            }
            description={google ? "Signed in as owner@example.com" : "Sign in with your Google account."}
          >
            <RowButton
              tone={google ? "danger" : "default"}
              onClick={() => {
                setGoogle(!google);
                toast(google ? "Google disconnected" : "Google connected (demo)");
              }}
            >
              {google ? "Disconnect" : "Connect"}
            </RowButton>
          </Row>
        </Group>
      </div>

      <div className="mt-9">
        <Group>
          <Row label="Log out" description="On this device. To sign out everywhere, use Security.">
            <RowButton tone="danger" onClick={() => (window.location.href = withBase("/login/"))}>
              Log out
            </RowButton>
          </Row>
        </Group>
      </div>

      <Modal
        open={changing}
        onClose={() => setChanging(false)}
        title="Change password"
        footer={
          <>
            <Button variant="ghost" onClick={() => setChanging(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!pw.now || pw.next.length < 8}
              onClick={() => {
                setChanging(false);
                setPw({ now: "", next: "" });
                toast("Password changed (demo)");
              }}
            >
              Change password
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">Current password</span>
            <Input type="password" autoComplete="current-password" value={pw.now} onChange={(e) => setPw({ ...pw, now: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[14px] font-medium text-ink">New password</span>
            <Input type="password" autoComplete="new-password" value={pw.next} onChange={(e) => setPw({ ...pw, next: e.target.value })} />
            <span className="text-[12.5px] text-subtle">At least 8 characters.</span>
          </label>
        </div>
      </Modal>
    </>
  );
}
