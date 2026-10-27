"use client";

import { useMemo, useRef, useState } from "react";
import { optInLabel, sampleContacts, sampleTags, type Contact, type OptIn } from "@/content/contacts";
import { Icon } from "@/components/ui/Icon";
import { Select } from "@/components/setup/fields";
import { Avatar, Badge, Button, EmptyState, Modal, SegmentedControl, StatCard, useToast } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { ChannelMark, ContactDrawer, lastVisitText, optInTone } from "./ContactDetails";

// Every customer the business has talked to, with tags, visits and their
// WhatsApp consent. Import from a CSV, export what's on screen.
// Demo: edits and imports are kept in this component only; the CSV preview
// is a fixed sample, but Export really downloads the visible rows.

type Filter = "all" | OptIn;

const importColumns = [
  { csv: "Full name", field: "Name", sample: "L. Fernandes" },
  { csv: "Mobile", field: "Phone", sample: "+91 98•• ••• 377" },
  { csv: "E-mail", field: "Email", sample: "l.f•••@example.com" },
  { csv: "Group", field: "Tags", sample: "Regular" },
  { csv: "Last visit", field: "Don’t import", sample: "14/08/2026" },
];
const importFields = ["Name", "Phone", "Email", "Tags", "Don’t import"];
const importRows = [
  { name: "L. Fernandes", phone: "+91 98•• ••• 377", tag: "Regular" },
  { name: "T. Das", phone: "+91 90•• ••• 615", tag: "Family" },
  { name: "N. Agarwal", phone: "+91 97•• ••• 902", tag: "" },
];

function csvCell(v: string | number) {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function Contacts({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const [contacts, setContacts] = useState<Contact[]>(sampleContacts);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [tag, setTag] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [importing, setImporting] = useState<0 | 1 | 2>(0);
  const [fileName, setFileName] = useState("");
  const [consented, setConsented] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: contacts.length, "opted-in": 0, "opted-out": 0, "not-asked": 0 };
    contacts.forEach((x) => c[x.optIn]++);
    return c;
  }, [contacts]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return contacts.filter(
      (c) =>
        (filter === "all" || c.optIn === filter) &&
        (tag === "all" || c.tags.includes(tag)) &&
        (!q || `${c.name} ${c.phone} ${c.email ?? ""} ${c.tags.join(" ")}`.toLowerCase().includes(q)),
    );
  }, [contacts, query, filter, tag]);

  const open = contacts.find((c) => c.id === openId) ?? null;
  const update = (c: Contact) => setContacts((cs) => cs.map((x) => (x.id === c.id ? c : x)));
  const recent = contacts.filter((c) => c.lastVisitDays !== null && c.lastVisitDays <= 30).length;
  const lapsed = contacts.filter((c) => c.lastVisitDays !== null && c.lastVisitDays > 60).length;

  const exportCsv = () => {
    const rows = [["Name", "Phone", "Email", "Tags", "Bookings", "Last visit", "WhatsApp messages"], ...visible.map((c) => [c.name, c.phone, c.email ?? "", c.tags.join("; "), c.bookings, lastVisitText(c.lastVisitDays), optInLabel[c.optIn]])];
    const blob = new Blob([rows.map((r) => r.map(csvCell).join(",")).join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "vegam-contacts.csv";
    a.click();
    URL.revokeObjectURL(a.href);
    toast(`Exported ${visible.length} contacts`);
  };

  const closeImport = () => {
    setImporting(0);
    setFileName("");
    setConsented(false);
  };

  const finishImport = () => {
    const added: Contact[] = importRows.map((r, i) => ({
      id: `imp${Date.now()}${i}`,
      name: r.name,
      phone: r.phone,
      channels: ["whatsapp"],
      tags: r.tag ? [r.tag] : [],
      lastVisitDays: null,
      bookings: 0,
      noShows: 0,
      optIn: consented ? "opted-in" : "not-asked",
      consent: consented ? `Imported from ${fileName || "a CSV file"}; your team confirmed they agreed to hear from you.` : `Imported from ${fileName || "a CSV file"}. Not yet asked about WhatsApp messages.`,
      firstSeen: "Just now",
      timeline: [{ at: "Just now", kind: consented ? "optin" : "note", text: consented ? "Imported with consent confirmed by your team" : "Imported from a CSV file" }],
    }));
    setContacts((cs) => [...added, ...cs]);
    closeImport();
    toast(`${added.length} contacts imported`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Contacts" body="Everyone who has messaged, called or booked, in one list. Vegam only sends reminders and campaigns to people who agreed to hear from you." />
        <div className="flex flex-wrap items-center gap-2">
          <SampleTag />
          <Button icon="download" onClick={exportCsv}>
            Export
          </Button>
          <Button variant="primary" icon="upload" onClick={() => setImporting(1)}>
            Import CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Contacts" value={contacts.length} note="From every channel" icon="users" />
        <StatCard label="Opted in" value={`${Math.round((counts["opted-in"] / Math.max(1, contacts.length)) * 100)}%`} note={`${counts["opted-in"]} can get reminders`} icon="shield" />
        <StatCard label="Visited in 30 days" value={recent} note="At least one visit" icon="calendar" />
        <StatCard label="Lapsed" value={lapsed} note="No visit for 2 months" icon="refresh" />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-3 lg:flex-row lg:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search contacts</span>
          <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, number, email or tag"
            className="min-h-10 w-full rounded-[10px] border border-line-strong bg-white pr-3 pl-10 text-[14.5px] text-ink outline-none placeholder:text-faint focus:border-indigo focus:ring-4 focus:ring-indigo/10"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <SegmentedControl
            label="Filter by WhatsApp consent"
            size="sm"
            value={filter}
            onChange={setFilter}
            options={[
              { id: "all", label: `All ${counts.all}` },
              { id: "opted-in", label: `Opted in ${counts["opted-in"]}` },
              { id: "not-asked", label: `Not asked ${counts["not-asked"]}` },
              { id: "opted-out", label: `Opted out ${counts["opted-out"]}` },
            ]}
          />
          <label className="relative">
            <span className="sr-only">Tag</span>
            <select value={tag} onChange={(e) => setTag(e.target.value)} className="min-h-10 cursor-pointer appearance-none rounded-[10px] border border-line-strong bg-white pr-8 pl-3 text-[14px] font-medium text-ink">
              <option value="all">All tags</option>
              {sampleTags.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <Icon name="chevron-down" size={14} className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-subtle" />
          </label>
        </div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-line bg-white">
        {visible.length === 0 ? (
          <EmptyState icon="users" title="No contacts match" body="Try another filter or search." />
        ) : (
          <>
            <table className="hidden w-full border-collapse md:table">
              <thead className="border-b border-line bg-[#FAFAFC]">
                <tr className="text-left text-[12.5px] font-semibold tracking-[0.04em] text-muted uppercase">
                  <th scope="col" className="py-3 pl-4">
                    Contact
                  </th>
                  <th scope="col" className="hidden px-3 py-3 lg:table-cell">
                    Channels
                  </th>
                  <th scope="col" className="hidden px-3 py-3 xl:table-cell">
                    Tags
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Last visit
                  </th>
                  <th scope="col" className="px-3 py-3 text-right">
                    Bookings
                  </th>
                  <th scope="col" className="px-3 py-3">
                    WhatsApp
                  </th>
                  <th scope="col" className="w-10 pr-4">
                    <span className="sr-only">Open</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {visible.map((c) => (
                  <tr key={c.id} onClick={() => setOpenId(c.id)} className="cursor-pointer border-b border-line transition last:border-b-0 hover:bg-[#FAFAFC]">
                    <td className="py-3 pl-4">
                      <button type="button" onClick={() => setOpenId(c.id)} className="flex cursor-pointer items-center gap-3 text-left">
                        <Avatar name={c.name} size={34} />
                        <span className="flex min-w-0 flex-col">
                          <span className="truncate text-[14.5px] font-semibold text-ink">{c.name}</span>
                          <span className="text-[13px] whitespace-nowrap text-subtle">{c.phone}</span>
                        </span>
                      </button>
                    </td>
                    <td className="hidden px-3 py-3 lg:table-cell">
                      <span className="flex items-center gap-1">
                        {c.channels.map((ch) => (
                          <ChannelMark key={ch} channel={ch} size={24} />
                        ))}
                      </span>
                    </td>
                    <td className="hidden px-3 py-3 xl:table-cell">
                      <span className="flex flex-wrap gap-1">
                        {c.tags.length ? c.tags.map((t) => <Badge key={t}>{t}</Badge>) : <span className="text-[13px] text-faint">—</span>}
                      </span>
                    </td>
                    <td className={`px-3 py-3 text-[13.5px] whitespace-nowrap ${c.lastVisitDays !== null && c.lastVisitDays > 60 ? "font-semibold text-warning" : "text-ink-soft"}`}>{lastVisitText(c.lastVisitDays)}</td>
                    <td className="px-3 py-3 text-right text-[14px] font-semibold text-ink tabular-nums">{c.bookings}</td>
                    <td className="px-3 py-3">
                      <Badge tone={optInTone[c.optIn]} dot>
                        {optInLabel[c.optIn]}
                      </Badge>
                    </td>
                    <td className="pr-4 text-right">
                      <Icon name="chevron-right" size={18} className="text-faint" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="m-0 list-none p-0 md:hidden">
              {visible.map((c) => (
                <li key={c.id} className="border-b border-line last:border-b-0">
                  <button type="button" onClick={() => setOpenId(c.id)} className="flex w-full cursor-pointer items-start gap-3 p-4 text-left">
                    <Avatar name={c.name} size={38} />
                    <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <span className="flex items-center justify-between gap-2">
                        <span className="truncate text-[15px] font-semibold text-ink">{c.name}</span>
                        <Badge tone={optInTone[c.optIn]} dot>
                          {optInLabel[c.optIn]}
                        </Badge>
                      </span>
                      <span className="text-[13.5px] text-subtle">
                        {c.phone} · {c.bookings} {c.bookings === 1 ? "booking" : "bookings"} · {lastVisitText(c.lastVisitDays)}
                      </span>
                      <span className="flex items-center gap-1">
                        {c.channels.map((ch) => (
                          <ChannelMark key={ch} channel={ch} size={22} />
                        ))}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="m-0 border-t border-line bg-[#FAFAFC] px-4 py-2.5 text-[13px] text-subtle">
              Showing {visible.length} of {contacts.length} contacts
            </p>
          </>
        )}
      </div>

      <ContactDrawer key={open?.id ?? "none"} contact={open} onClose={() => setOpenId(null)} onChange={update} onOpen={onOpen} />

      <Modal
        open={importing > 0}
        onClose={closeImport}
        title={importing === 1 ? "Import contacts" : "Match your columns"}
        width={620}
        footer={
          importing === 1 ? (
            <Button variant="ghost" onClick={closeImport}>
              Cancel
            </Button>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setImporting(1)}>
                Back
              </Button>
              <Button variant="primary" onClick={finishImport}>
                Import {importRows.length} contacts
              </Button>
            </>
          )
        }
      >
        {importing === 1 ? (
          <div className="flex flex-col gap-4">
            <p className="m-0 text-[14.5px] text-ink-soft">Upload a CSV file from Excel, Google Sheets or your billing software. You’ll match the columns next.</p>
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="flex cursor-pointer flex-col items-center gap-2 rounded-[18px] border-2 border-dashed border-line-strong bg-[#FAFAFC] px-6 py-10 text-center hover:border-indigo"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-ink shadow-[0_1px_2px_rgb(30_31_43/0.08)]">
                <Icon name="upload" size={22} />
              </span>
              <span className="text-[15px] font-semibold text-ink">Choose a CSV file</span>
              <span className="text-[13px] text-subtle">Up to 10,000 rows. Names and phone numbers are enough.</span>
            </button>
            <input
              ref={fileInput}
              type="file"
              accept=".csv,text/csv"
              className="sr-only"
              aria-label="CSV file"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFileName(f.name);
                  setImporting(2);
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                setFileName("sample-contacts.csv");
                setImporting(2);
              }}
              className="w-fit cursor-pointer text-[14px] font-semibold text-brand underline-offset-4 hover:underline"
            >
              Try it with a sample file
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <p className="m-0 flex items-center gap-2 text-[14px] text-ink-soft">
              <Icon name="note" size={16} className="text-muted" />
              <span className="font-semibold text-ink">{fileName}</span> · {importRows.length} rows found
            </p>
            <div className="overflow-hidden rounded-[14px] border border-line">
              <table className="w-full border-collapse text-[14px]">
                <thead className="bg-[#FAFAFC] text-left text-[12px] font-semibold tracking-[0.04em] text-muted uppercase">
                  <tr>
                    <th scope="col" className="px-3 py-2.5">
                      Column in your file
                    </th>
                    <th scope="col" className="hidden px-3 py-2.5 sm:table-cell">
                      Example
                    </th>
                    <th scope="col" className="px-3 py-2.5">
                      Import as
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {importColumns.map((col) => (
                    <tr key={col.csv} className="border-t border-line">
                      <td className="px-3 py-2 font-semibold text-ink">{col.csv}</td>
                      <td className="hidden px-3 py-2 text-subtle sm:table-cell">{col.sample}</td>
                      <td className="px-3 py-2">
                        <label>
                          <span className="sr-only">Import {col.csv} as</span>
                          <Select defaultValue={col.field}>
                            {importFields.map((f) => (
                              <option key={f}>{f}</option>
                            ))}
                          </Select>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-[14px] bg-[#FFF8E1] p-4">
              <input type="checkbox" checked={consented} onChange={(e) => setConsented(e.target.checked)} className="mt-0.5 h-4 w-4 flex-none cursor-pointer accent-[#23243A]" />
              <span className="flex flex-col gap-1">
                <span className="text-[14.5px] font-semibold text-ink">These people agreed to hear from us on WhatsApp</span>
                <span className="text-[13px] text-ink-soft">WhatsApp’s rules and privacy law require it. If you’re not sure, leave this unticked: they’ll be marked “Not asked”, and Vegam asks them before sending any reminders.</span>
              </span>
            </label>
          </div>
        )}
      </Modal>
    </div>
  );
}
