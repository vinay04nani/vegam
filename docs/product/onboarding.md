# Onboarding: from sign-up to a live front desk

> The flow a new business follows to sign up, pick a plan and go live, and what they see afterwards. A clickable demo of it is on the website at `/onboarding/` and `/app/` (see "Built so far").

**Goal:** a new business is answering real customers within 15 minutes, with slow approvals (Meta) finishing in the background.

**Principles**
- Every step saves as they go, so they can stop and come back to the same step later.
- Only WhatsApp is needed to go live. Everything else can wait for the setup checklist.
- "Set it up for me" is always one click away, because the plans promise setup is done for the customer.
- The pilot needs no card. A payment method is asked for by day 25.
- Plain words, any business, any country. Never assume an industry.

## The flow

```
Pricing page "Start free pilot" (?plan=growth)
        │
① Create account ── ② Your business ── ③ Choose plan ── ④ Teach your assistant
                                                                 │
⑧ Dashboard ◄── ⑦ Go live ◄── ⑥ Test it ◄── ⑤ Connect channels ◄─┘
   + "Finish setting up" checklist
```

| # | Step | What they enter | Needed to continue |
|---|---|---|---|
| ① | Create account | Email, phone or Google/Microsoft/Apple, a one-time code, and acceptance of the terms (recorded) | A verified email or phone |
| ② | Your business | Business name, "What does your business do?" in their own words, country (sets currency, time zone and tax), languages, locations, team size | Business name |
| ③ | Choose plan | Starter, Growth or Pro, monthly or annual. The plan that fits ② is marked "Fits you"; a plan picked on the pricing page is already selected. | A plan |
| ④ | Teach your assistant | A website, Google profile or Instagram link, or a price list (PDF or photo). The AI fills in services, prices, hours and FAQs, and the owner corrects them. Assistant name and tone are optional. | One service and opening hours |
| ⑤ | Connect channels | WhatsApp via Meta's sign-up, keeping their current number or getting a new one. Missed-call forwarding code and a test call. Website snippet. Growth: AI call answering, Instagram and Messenger. Pro: ad lead forms. Channels from a higher plan show "Switch to …". | WhatsApp started (it may still be waiting for Meta) |
| ⑥ | Test it | A live chat with their assistant, with suggested questions. It should hand over what it doesn't know. They also enter the owner's WhatsApp number for the 8 AM report, and can send themselves a test message. | Owner's number |
| ⑦ | Go live | A summary with Edit links, and how the pilot works: week 1 baseline, weeks 2–4 Vegam runs the front desk, decision on day 30. | — |

**Pro with two or more locations:** they set up the first location in the wizard; after go-live we book a call to add the rest and confirm the price.

**Invited team members** skip ② to ⑦ and land in the Inbox.

## Wizard layout

- **Desktop:** two columns.
  - Left: a step rail drawn as a kolam. Each finished step's dot joins the next with an orange loop.
  - Right: the current step.
  - The Back and Continue buttons sit in a bar fixed to the bottom. When Continue is disabled, the bar says why.
- **Phones:** a thin progress bar under the header and one column.
- Step ⑥ shows a chat panel where the owner talks to the assistant as a customer.

## After go-live: the dashboard

**Navigation:** Home, Inbox, Calendar, Leads, Calls (Growth+), Campaigns (Pro), Reports, Assistant, Settings.
- Desktop: a left sidebar, with sections from higher plans shown with a lock.
- Phones: bottom tabs for Home, Inbox, Calendar and Leads, plus More.

**Home**, top to bottom:
1. "You're live" welcome (first visit only).
2. A notice while WhatsApp waits for Meta's approval.
3. Pilot progress: day N of 30, with week 1 marked as the baseline.
4. **Finish setting up** checklist with a progress ring. It is replaced by "Setup complete" when everything is done.
5. Needs you: handed-over chats, callbacks, and questions the assistant couldn't answer.
6. Yesterday's numbers, today's bookings, and recent conversations, each marked AI or Team.

## Finish setting up (checklist)

| Priority | Task | Plan |
|---|---|---|
| Must | WhatsApp approval (Meta display name and business review; we track it) | All |
| Must | Approve reminder and follow-up message templates | All |
| Must | Answer the questions the assistant couldn't answer in the first days | All |
| Should | Share the booking link and QR code (Instagram bio, Google profile, website, counter) | All |
| Should | Invite the team; set handover rules and quiet hours | All |
| Should | Import existing customers who agreed to hear from you | All |
| Should | Connect Google Calendar or Calendly | Growth+ |
| Should | Add other locations; turn on payment links | Pro |
| Before day 25 | Add a payment method (Razorpay in India, Stripe elsewhere) | All |

**Nudges:**
- Someone who leaves the wizard gets a WhatsApp or email after 1 hour and after 24 hours: "Your assistant is 70% ready".
- The morning report mentions the top unfinished task.

## Account states

`signed_up` → `onboarding` (with the current step) → `live_pilot` → `active` (paying) / `pilot_ended` / `cancelled`

## Decisions

- **No card at sign-up.** We pay WhatsApp template fees during the pilot, capped (proposed: 300 template messages).
- **Plan buttons on the pricing page start sign-up** (`/signup/?plan=…`). "Book a demo" stays for people who'd rather talk to someone.

## Built so far (website demo)

Everything below runs in the browser with no backend:
- The flow from the pricing page through sign-up, the six wizard steps, and the dashboard Home.
- Answers are saved in the browser, so a reload resumes at the same step.
- Channel buttons change status but don't connect anything.
- "Read it" fills in sample services.
- The test chat uses simple rules that answer only from the owner's details and hand over otherwise.
- Dashboard numbers are labelled sample data. The other dashboard sections describe what they will hold.

**Still to do in the product:**
- Real auth (Supabase).
- Meta Embedded Signup and template approval.
- Phone numbers and call forwarding.
- AI import from a link or file.
- The real assistant.
- Billing.
- Nudges.
- The other dashboard sections.

The code marks each of these with `TODO(backend)`, `TODO(auth)` or `TODO(contact)`.
