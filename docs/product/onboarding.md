# Onboarding: from sign-up to a live front desk

> How a new business signs up, gets into the dashboard and goes live, and what they see afterwards. A clickable demo is on the website at `/onboarding/` and `/app/` (see "Built so far").

**Goal:** a new business is in its dashboard about a minute after signing up, and has its assistant live within about 10 minutes. Slow approvals (Meta) finish in the background.

**Principles**
- **Minimal onboarding.** Ask only what the dashboard needs to greet them. Everything else is set up from the dashboard, one small task at a time.
- **The plan can wait.** People can skip picking a plan, explore the dashboard, and choose one when they're ready. They need a plan only to go live.
- **Live means four things:** a plan, the assistant taught, WhatsApp connected (or waiting for Meta), and one test chat. Everything else waits until after go-live.
- **Saved as they go.** People can stop at any point and come back.
- **"Set it up for me" is always one click away,** because the plans promise setup is done for the customer.
- **No card for the pilot.** A payment method is asked for by day 25.
- **Plain words, any business, any country.** Never assume an industry.

## The flow

```
Sign up ──► ① About you ──► ② Pick a plan ──► Dashboard: setup guide ──► Go live ──► Dashboard: Home
                               │  or "Skip for now"      ▲
                               └─────────────────────────┘  (choose the plan from the guide later)
```

**Onboarding** is two short screens, each one centred column:

| Screen | Asks | Notes |
|---|---|---|
| ① About you | Business name, country, the owner's WhatsApp number (optional) | Country sets currency and time zone. The number receives the 8 AM report. |
| ② Pick a plan | Starter, Growth or Pro; monthly or annual | A plan chosen on the pricing page is already selected. "Start free pilot" or "Skip for now, explore the dashboard". |

**Setup guide (dashboard Home before go-live):** "Get your assistant live", with a progress ring.

| # | Task | Page | Done when |
|---|---|---|---|
| 1 | Create your account | — | Always done |
| 2 | Choose a plan | Plan page (all three plans with their main features) | A plan is chosen |
| 3 | Teach your assistant | Paste a link or upload a price list; check services, prices and hours; optional questions, name and tone | At least one service and opening hours, then Save |
| 4 | Connect WhatsApp | Current or new number, then "Connect with Meta" | Connected or waiting for Meta |
| 5 | Try it yourself | Test chat with suggested questions | At least one message sent, then "Looks good" |

- **Next task:** it is highlighted and shows an estimate of the minutes left.
- **Go live:** the button unlocks once all five are done, and the 30-day pilot starts that day.
- **Exploring:** beside the guide, "Explore while you set up" offers a preview of Home with sample data, all channels, and plans and prices.
- **Help:** a dark card offers "Set it up for me".
- **Plan status:** until a plan is chosen, the sidebar shows "No plan yet · not live" and a "Choose a plan" button. Nothing in the dashboard is locked, so everything can be explored.

**Pro with two or more locations:** they set up the first location; after go-live we book a call to add the rest and confirm the price.

**Invited team members** skip onboarding and the guide, and land in the Inbox.

## After go-live: the dashboard

**Navigation:** Home, Inbox, Calendar, Leads, Calls (Growth+), Campaigns (Pro), Reports, Assistant, Settings.
- Desktop: a left sidebar, with sections from higher plans shown with a lock.
- Phones: bottom tabs for Home, Inbox, Calendar and Leads, plus More.
- **Assistant** opens the same page as the setup task, for edits.
- **Settings** links to plan and billing, channels and the assistant.

**Home**, top to bottom:
1. "You're live" welcome (once).
2. A notice while WhatsApp waits for Meta's approval.
3. Pilot progress: day N of 30, with week 1 marked as the baseline.
4. **Grow with Vegam:** optional tasks with a progress ring (below).
5. Needs you: handed-over chats, callbacks, and questions the assistant couldn't answer.
6. Yesterday's numbers, today's bookings, and recent conversations, each marked AI or Team.

## Grow with Vegam (after go-live)

| Priority | Task | Plan |
|---|---|---|
| Must | WhatsApp approval (Meta display name and business review; we track it) | All |
| Must | Approve reminder and follow-up message templates | All |
| Must | Answer the questions the assistant couldn't answer in the first days | All |
| Should | Connect more channels: missed calls, website, AI calls, Instagram and Messenger, ad leads (opens the Channels page) | By plan |
| Should | Share the booking link and QR code (Instagram bio, Google profile, website, counter) | All |
| Should | Invite the team; set handover rules and quiet hours | All |
| Should | Import existing customers who agreed to hear from you | All |
| Should | Connect Google Calendar or Calendly | Growth+ |
| Should | Add other locations; turn on payment links | Pro |
| Before day 25 | Add a payment method (Razorpay in India, Stripe elsewhere) | All |

**Nudges:**
- Someone who leaves before going live gets a WhatsApp or email after 1 hour and after 24 hours: "Your assistant is 2 steps from live".
- After go-live, the morning report mentions the top unfinished task.

## Account states

`signed_up` → `onboarded` (in the dashboard; plan optional) → `live_pilot` (plan chosen, went live) → `active` (paying) / `pilot_ended` / `cancelled`

## Decisions

- **No card at sign-up.** We pay WhatsApp template fees during the pilot, capped (proposed: 300 template messages).
- **Plan buttons on the pricing page start sign-up** (`/signup/?plan=…`). "Book a demo" stays for people who'd rather talk to someone.
- **The plan is optional at onboarding** and required to go live.

## Built so far (website demo)

Everything below runs in the browser with no backend:
- Pricing page → sign-up → two onboarding screens → setup guide → task pages → go live → Home.
- Answers are saved in the browser, so a reload resumes where they left off.
- "Connect" buttons change status but don't connect anything.
- "Read it" fills in sample services.
- The test chat uses simple rules that answer only from the owner's details and hand over otherwise.
- Home's numbers are labelled sample data. Other sections describe what they will hold.
- Settings has "Start over" to clear the demo.

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
