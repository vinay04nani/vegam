"use client";

import { useState } from "react";
import { draftsFor, googleTotals, sampleFeedback, sampleRequests, sampleReviews, type FeedbackStatus, type RequestOutcome, type Review } from "@/content/reviews";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { useBranch } from "../branch";
import { Avatar, Badge, Button, EmptyState, SegmentedControl, Tabs, useToast, type BadgeTone } from "../kit";
import { PageTitle, SampleTag } from "../ui";
import { Dropdown, Switch } from "./settings/parts";

// Reviews (Growth): Google reviews with replies the AI drafts for you to
// approve, review requests after each visit (happy customers are sent to
// Google, unhappy ones reach you privately first), and that private
// feedback. Demo: sample reviews; nothing is posted to Google.

type Tab = "reviews" | "requests" | "feedback";
type Filter = "all" | "reply" | "good" | "low";

const business = "Nila & Co";

export function Stars({ value, size = 15, label = true }: { value: number; size?: number; label?: boolean }) {
  return (
    <span className="inline-flex items-center gap-px" role={label ? "img" : undefined} aria-label={label ? `${value} out of 5 stars` : undefined} aria-hidden={label ? undefined : true}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon key={i} name="star" size={size} strokeWidth={1.4} className={i <= Math.round(value) ? "fill-accent text-accent" : "fill-line text-line-strong"} />
      ))}
    </span>
  );
}

const ago = (d: number) => (d === 0 ? "Today" : d === 1 ? "Yesterday" : `${d} days ago`);

function ReviewCard({ r, showLocation, locationName, onReply }: { r: Review; showLocation: boolean; locationName: string; onReply: (text: string) => void }) {
  const drafts = draftsFor(r, business);
  const [i, setI] = useState(0);
  const [text, setText] = useState(drafts[0]);
  return (
    <article className="flex flex-col gap-3 border-b border-line px-5 py-5 last:border-b-0">
      <header className="flex items-start gap-3">
        <Avatar name={r.who} size={36} />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="text-[14.5px] font-semibold text-ink">{r.who}</span>
            <Stars value={r.stars} size={14} />
          </span>
          <span className="text-[12.5px] text-subtle">
            {ago(r.days)}
            {r.requested && " · after a review request"}
            {showLocation && ` · ${locationName}`}
          </span>
        </div>
        {!r.reply && <Badge tone={r.stars <= 3 ? "danger" : "warning"}>Needs a reply</Badge>}
      </header>
      <p className="m-0 text-[14.5px] leading-[1.55] text-ink">{r.text}</p>

      {r.reply ? (
        <div className="ml-4 border-l-2 border-line pl-4">
          <p className="m-0 text-[12.5px] font-semibold text-subtle">Your reply · {ago(r.reply.days).toLowerCase()}</p>
          <p className="m-0 mt-1 text-[14px] leading-[1.5] text-ink-soft">{r.reply.text}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5 rounded-[14px] border border-line bg-[#FAFAFC] p-3.5">
          <span className="flex items-center gap-2 text-[12.5px] font-semibold text-subtle">
            <Icon name="sparkle" size={14} className="text-indigo" />
            Reply drafted by the AI
            {r.stars <= 3 && <span className="font-normal">· Low rating: it apologises and asks them to get in touch. A call from you first often helps.</span>}
          </span>
          <textarea
            aria-label={`Reply to ${r.who}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            className="w-full resize-y rounded-[10px] border border-line-strong bg-white px-3 py-2 text-[14px] leading-[1.5] text-ink outline-none focus:border-ink"
          />
          <span className="flex flex-wrap items-center gap-2">
            <Button variant="primary" icon="send" disabled={!text.trim()} onClick={() => onReply(text.trim())}>
              Post reply
            </Button>
            <Button
              variant="ghost"
              icon="refresh"
              onClick={() => {
                const n = (i + 1) % drafts.length;
                setI(n);
                setText(drafts[n]);
              }}
            >
              Another draft
            </Button>
            <span className="ml-auto text-[12px] text-subtle">Posted on Google as {business}</span>
          </span>
        </div>
      )}
    </article>
  );
}

const outcome: Record<RequestOutcome, { label: string; tone: BadgeTone }> = {
  google: { label: "Left a Google review", tone: "success" },
  rated: { label: "Rated, no review yet", tone: "brand" },
  private: { label: "Sent to you privately", tone: "warning" },
  waiting: { label: "Waiting", tone: "neutral" },
  none: { label: "No reply", tone: "neutral" },
};

export function Reviews({ onOpen }: { onOpen: (view: string) => void }) {
  const toast = useToast();
  const { branch, locations } = useBranch();
  const [tab, setTab] = useState<Tab>("reviews");
  const [filter, setFilter] = useState<Filter>("all");
  const [reviews, setReviews] = useState(sampleReviews);
  const [feedback, setFeedback] = useState(sampleFeedback);
  const [requestsOn, setRequestsOn] = useState(true);
  const here = <T extends { location: string }>(xs: T[]) => xs.filter((x) => branch === "all" || x.location === branch);
  const locName = (id: string) => locations.find((l) => l.id === id)?.name ?? "";

  const mine = here(reviews);
  const needReply = mine.filter((r) => !r.reply);
  const shown = mine.filter((r) => (filter === "reply" ? !r.reply : filter === "good" ? r.stars >= 4 : filter === "low" ? r.stars <= 3 : true));
  const requests = here(sampleRequests);
  const fb = here(feedback);
  const newFb = fb.filter((f) => f.status === "new").length;
  const rated = requests.filter((r) => r.rating);
  const happy = rated.filter((r) => (r.rating ?? 0) >= 4);
  const totalCount = googleTotals.distribution.reduce((a, d) => a + d.count, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageTitle title="Reviews" body="Your Google reviews, replies the AI drafts for you, and review requests after every visit." />
        <div className="flex flex-wrap items-center gap-2">
          <SampleTag />
          <span className="inline-flex min-h-9 items-center gap-2 rounded-[10px] border border-line-strong bg-white px-3 text-[13.5px] font-medium text-ink">
            <BrandLogo brand="google" size={20} />
            Google Business Profile
            <span className="h-2 w-2 rounded-full bg-success" aria-label="Connected" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <div className="flex flex-col gap-1.5 rounded-[16px] border border-line bg-white p-4">
          <span className="text-[13px] font-medium text-subtle">Google rating</span>
          <span className="flex items-center gap-2">
            <span className="text-[24px] leading-none font-semibold tracking-[-0.02em] text-ink">{branch === "all" ? googleTotals.rating : locations.find((l) => l.id === branch)?.rating}</span>
            <Stars value={googleTotals.rating} size={14} />
          </span>
          <span className="text-[12.5px] text-subtle">{googleTotals.count} reviews in total</span>
        </div>
        {[
          { label: "New this month", value: String(branch === "all" ? 14 : Math.round(14 * (locations.find((l) => l.id === branch)?.share ?? 1))), note: "Up from 6 before Vegam" },
          { label: "Replied to", value: `${Math.round(((mine.length - needReply.length) / Math.max(1, mine.length)) * 100)}%`, note: `${needReply.length} waiting for a reply` },
          { label: "Happy customers who reviewed", value: `${Math.round((requests.filter((r) => r.outcome === "google").length / Math.max(1, happy.length)) * 100)}%`, note: "of 4 and 5 star ratings" },
        ].map((s) => (
          <div key={s.label} className="flex min-w-0 flex-col gap-1.5 rounded-[16px] border border-line bg-white p-4">
            <span className="truncate text-[13px] font-medium text-subtle">{s.label}</span>
            <span className="text-[24px] leading-none font-semibold tracking-[-0.02em] text-ink">{s.value}</span>
            <span className="truncate text-[12.5px] text-subtle">{s.note}</span>
          </div>
        ))}
      </div>

      <Tabs
        label="Reviews"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "reviews", label: "Google reviews", count: needReply.length || undefined },
          { id: "requests", label: "Review requests" },
          { id: "feedback", label: "Private feedback", count: newFb || undefined },
        ]}
      />

      {tab === "reviews" && (
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
          <section aria-label="Google reviews" className="min-w-0 rounded-[18px] border border-line bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3">
              <SegmentedControl
                label="Show reviews"
                size="sm"
                value={filter}
                onChange={setFilter}
                options={[
                  { id: "all", label: "All" },
                  { id: "reply", label: `Needs a reply${needReply.length ? ` (${needReply.length})` : ""}` },
                  { id: "good", label: "4–5 stars" },
                  { id: "low", label: "1–3 stars" },
                ]}
              />
            </div>
            {shown.length === 0 ? (
              <div className="p-8">
                <EmptyState icon="check" title="All caught up" body="Every review here has a reply." />
              </div>
            ) : (
              shown.map((r) => (
                <ReviewCard
                  key={r.id}
                  r={r}
                  showLocation={branch === "all"}
                  locationName={locName(r.location)}
                  onReply={(text) => {
                    setReviews((rs) => rs.map((x) => (x.id === r.id ? { ...x, reply: { text, days: 0 } } : x)));
                    toast(`Reply posted to ${r.who}’s review`);
                  }}
                />
              ))
            )}
          </section>

          <aside className="flex flex-col gap-4">
            <section aria-label="Rating breakdown" className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-5">
              <h2 className="m-0 text-[15.5px] font-semibold text-ink">Rating breakdown</h2>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {googleTotals.distribution.map((d) => (
                  <li key={d.stars} className="grid grid-cols-[40px_minmax(0,1fr)_32px] items-center gap-2 text-[13px]">
                    <span className="flex items-center gap-1 text-ink-soft">
                      {d.stars}
                      <Icon name="star" size={12} className="fill-accent text-accent" />
                    </span>
                    <span className="h-2 overflow-hidden rounded-full bg-panel">
                      <span className="block h-full rounded-full bg-accent" style={{ width: `${(d.count / totalCount) * 100}%` }} />
                    </span>
                    <span className="text-right text-subtle tabular-nums">{d.count}</span>
                  </li>
                ))}
              </ul>
            </section>
            {branch === "all" && (
              <section aria-label="By location" className="flex flex-col gap-3 rounded-[18px] border border-line bg-white p-5">
                <h2 className="m-0 text-[15.5px] font-semibold text-ink">By location</h2>
                <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
                  {locations.map((l) => (
                    <li key={l.id} className="flex items-center justify-between gap-2 py-2 text-[14px]">
                      <span className="text-ink">{l.name}</span>
                      <span className="flex items-center gap-1.5 font-semibold text-ink">
                        {l.rating}
                        <Icon name="star" size={13} className="fill-accent text-accent" />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      )}

      {tab === "requests" && (
        <>
          <section aria-label="How review requests work" className="flex flex-col gap-5 rounded-[18px] border border-line bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="m-0 text-[15.5px] font-semibold text-ink">How review requests work</h2>
                <p className="m-0 mt-0.5 text-[13px] text-subtle">Happy customers are sent to Google. Anyone less happy reaches you privately first, so you can put it right.</p>
                <button type="button" onClick={() => onOpen("agent:reviews/setup")} className="mt-1.5 inline-flex cursor-pointer items-center gap-1 text-[13px] font-semibold text-ink-soft hover:text-ink">
                  Messages and timing are set on the Review agent
                  <Icon name="chevron-right" size={14} />
                </button>
              </div>
              <span className="flex items-center gap-2.5 text-[14px] font-medium text-ink">
                {requestsOn ? "On" : "Off"}
                <Switch
                  checked={requestsOn}
                  onChange={(v) => {
                    setRequestsOn(v);
                    toast(v ? "Review requests on" : "Review requests paused");
                  }}
                  label="Send review requests"
                />
              </span>
            </div>
            <ol className="m-0 grid list-none grid-cols-[minmax(0,1fr)] gap-3 p-0 md:grid-cols-3">
              <li className="flex flex-col gap-2 rounded-[14px] bg-panel p-4">
                <span className="text-[12px] font-semibold tracking-[0.06em] text-subtle uppercase">1 · After the visit</span>
                <span className="text-[14px] text-ink">A WhatsApp asks “How was your visit today? Tap 1 to 5.”</span>
                <Dropdown aria-label="When to ask" defaultValue="2h" className="mt-auto w-full">
                  <option value="2h">2 hours after the visit</option>
                  <option value="evening">The same evening</option>
                  <option value="next">The next morning</option>
                </Dropdown>
              </li>
              <li className="flex flex-col gap-2 rounded-[14px] bg-[#EEF7EF] p-4">
                <span className="text-[12px] font-semibold tracking-[0.06em] text-success uppercase">2a · Happy</span>
                <span className="text-[14px] text-ink">They get your Google review link with a thank-you.</span>
                <Dropdown aria-label="Stars that go to Google" defaultValue="4" className="mt-auto w-full">
                  <option value="4">4 and 5 stars go to Google</option>
                  <option value="5">Only 5 stars go to Google</option>
                </Dropdown>
              </li>
              <li className="flex flex-col gap-2 rounded-[14px] bg-[#FFF4EC] p-4">
                <span className="text-[12px] font-semibold tracking-[0.06em] text-warning uppercase">2b · Less happy</span>
                <span className="text-[14px] text-ink">They’re asked what went wrong. You get it here and on WhatsApp straight away.</span>
                <span className="mt-auto text-[12.5px] text-subtle">Google’s rules: everyone can still review you; we never block or filter reviews.</span>
              </li>
            </ol>
          </section>

          <section aria-label="Requests sent" className="min-w-0 rounded-[18px] border border-line bg-white">
            <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 pt-5 pb-3">
              <h2 className="m-0 text-[15.5px] font-semibold text-ink">Requests sent</h2>
              <span className="text-[13px] text-subtle">
                {requests.length} sent · {rated.length} rated · {requests.filter((r) => r.outcome === "google").length} Google reviews
              </span>
            </div>
            <div className="relative overflow-x-auto border-t border-line">
              <table className="w-full min-w-[620px] border-collapse text-[14px]">
                <thead>
                  <tr className="bg-[#FAFAFC] text-left text-[13px] text-subtle">
                    <th scope="col" className="h-10 pl-5 font-medium">
                      Customer
                    </th>
                    <th scope="col" className="font-medium">
                      Visit
                    </th>
                    <th scope="col" className="font-medium">
                      Sent
                    </th>
                    <th scope="col" className="font-medium">
                      Their rating
                    </th>
                    <th scope="col" className="pr-5 font-medium">
                      What happened
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((r) => (
                    <tr key={r.id} className="border-t border-line">
                      <td className="h-12 pl-5 font-medium text-ink">{r.who}</td>
                      <td className="text-ink-soft">{r.visit}</td>
                      <td className="text-ink-soft">{ago(r.days)}</td>
                      <td>{r.rating ? <Stars value={r.rating} size={13} /> : <span className="text-subtle">—</span>}</td>
                      <td className="pr-5">
                        <Badge tone={outcome[r.outcome].tone}>{outcome[r.outcome].label}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      {tab === "feedback" && (
        <section aria-label="Private feedback" className="min-w-0 rounded-[18px] border border-line bg-white">
          <div className="px-5 pt-5 pb-3">
            <h2 className="m-0 text-[15.5px] font-semibold text-ink">Private feedback</h2>
            <p className="m-0 mt-0.5 text-[13px] text-subtle">From customers who rated their visit 1 to 3. Only your team sees this.</p>
          </div>
          {fb.length === 0 ? (
            <div className="border-t border-line p-8">
              <EmptyState icon="check" title="No private feedback" body="Nobody has been unhappy here lately." />
            </div>
          ) : (
            <ul className="m-0 list-none border-t border-line p-0">
              {fb.map((f) => {
                const st: Record<FeedbackStatus, { label: string; tone: BadgeTone }> = { new: { label: "New", tone: "danger" }, called: { label: "Called back", tone: "warning" }, resolved: { label: "Resolved", tone: "success" } };
                return (
                  <li key={f.id} className="flex flex-col gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:flex-row sm:items-start">
                    <Avatar name={f.who} size={36} />
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[14.5px] font-semibold text-ink">{f.who}</span>
                        <Stars value={f.stars} size={13} />
                        <span className="text-[12.5px] text-subtle">
                          {ago(f.days)} · {f.phone}
                          {branch === "all" && ` · ${locName(f.location)}`}
                        </span>
                      </span>
                      <p className="m-0 text-[14.5px] leading-[1.5] text-ink">“{f.text}”</p>
                    </div>
                    <div className="flex flex-none flex-wrap items-center gap-2">
                      <Badge tone={st[f.status].tone} dot>
                        {st[f.status].label}
                      </Badge>
                      {f.status !== "resolved" && (
                        <>
                          <Button icon="message" onClick={() => onOpen("inbox")}>
                            Message
                          </Button>
                          <Button
                            variant="primary"
                            icon={f.status === "new" ? "phone" : "check"}
                            onClick={() => {
                              const next: FeedbackStatus = f.status === "new" ? "called" : "resolved";
                              setFeedback((all) => all.map((x) => (x.id === f.id ? { ...x, status: next } : x)));
                              toast(next === "called" ? `Marked ${f.who} as called back` : "Marked as resolved");
                            }}
                          >
                            {f.status === "new" ? "Called back" : "Resolved"}
                          </Button>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
