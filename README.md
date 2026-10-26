# Vegam

> **Front desk AI. Grow your business.**
> Never miss a customer again.

Vegam is an AI front desk for **any business, anywhere in the world**, whose customers call or message it. It answers every call and message in seconds, books appointments, follows up with leads, sends reminders, recovers missed calls, and gives the owner one clear report every morning, in the customer's own language, day and night.

Vegam does not create customers. It stops a business from losing the customers who already want to buy, then helps it bring them back and grow.

*"Vegam" means "speed" in Telugu and Sanskrit: the fastest reply wins the customer. The name is a working title.*

---

## Status

**Planning and early build.** The product vision and build specification are complete; the codebase scaffold is the next step. See [Roadmap](#roadmap).

---

## The problem

Businesses don't lack customers. They lack the time and systems to respond, follow up and close every customer who comes to them. Customers are lost at every step between the first enquiry and the final payment:

| Where customers are lost | What happens today | What Vegam does |
|---|---|---|
| Slow replies | Messages answered hours later, or never | AI replies in seconds, 24/7 |
| Missed calls | Calls during busy hours ring out | Caller gets a message within seconds; AI answers calls |
| No follow-up | People who don't book on first contact are forgotten | Automatic follow-ups until they respond or opt out |
| No qualification | Staff spend equal time on serious and casual enquiries | AI asks qualifying questions and scores each lead |
| No-shows | No reminders, paper diaries, double bookings | Calendar, reminders, confirm or reschedule by reply |
| Unpaid bills | Owner chases payments manually | Polite reminders with payment links *(later)* |
| Ignored reviews | Reviews go unanswered | Review requests and AI-drafted replies *(later)* |
| Owner blindness | Numbers scattered across chats, diaries and memory | One report every morning |

Existing tools solve one piece each (a messaging tool, a CRM, a call platform, a booking app). Most owners can't afford, set up or manage five tools, so they use none.

---

## Who it's for

- **Any business** whose customers reach it by messaging apps, social DMs, website or phone, and where losing a customer hurts: from a single owner-run shop to multi-branch companies.
- **Any country, any language, any currency.** The product never names or assumes an industry or a region; it adapts to each business through its setup, labels and knowledge base.
- **Roles inside a business:** Owner, Manager, Staff.
- **End customers never log in.** They talk to Vegam through the channels they already use.

**First launch market:** Visakhapatnam, India, with WhatsApp and English, Telugu and Hindi. This is where the first customers are won in person; it is a starting point, not a limit on the product.

---

## What Vegam does

**Conversations and messaging**
- Unified inbox: WhatsApp, Instagram DMs, Facebook Messenger, website chat (email later)
- AI replies grounded only in the business's own knowledge base
- Auto messages, follow-up sequences, quick replies and template management
- Human takeover: staff step in, and the AI pauses for that conversation

**Calls and voice**
- Missed call → instant message to the caller
- AI receptionist for incoming calls: answers, books, transfers to staff
- AI outbound calls to new leads, only where local law allows
- Recording, transcript, summary and outcome for every call

**Leads and sales**
- Lead capture from forms, ad lead forms, manual entry and imports
- Qualification questions set by each business; lead score 0–100; pipeline board

**Bookings and scheduling**
- Resources (people, rooms, equipment, visit slots), availability rules, holidays
- Booking by chat, call or link; reminders; confirm, reschedule or cancel by reply

**AI brain**
- Business profile and knowledge base: services, prices, timings, policies, FAQs
- Replies in the customer's language, including mixed languages
- Follows the business's brand voice and learns from staff corrections

**Reports**
- Daily owner report every morning (messaging app and email)
- Dashboard: enquiries, replies, bookings, calls, leads by stage and source, staff activity

**Later:** payments and reminders, review management, social media, retention campaigns, integrations, mobile app.

---

## How it works

```
Customer message / call / form
        │
        ▼
Channel adapter ── normalised event, verified signature, idempotency key
        │
        ▼
Contact resolver ── find or create the contact
        │
        ▼
Conversation router
   ├─ HUMAN mode ──► notify assigned staff, no AI reply
   └─ AI mode    ──► AI agent
                       ├─ reads business profile + knowledge + contact history
                       ├─ calls tools: get_availability, create_booking,
                       │   save_lead_answer, update_lead_stage,
                       │   handoff_to_human, record_opt_out
                       └─ replies in the customer's language
        │
        ▼
Outbound sender ── consent, opt-outs, messaging windows, templates, rate limits
        │
        ▼
Event log ──► Automation engine (follow-ups, reminders, alerts) ──► Job queue
        │
        ▼
Metrics ──► Dashboard + daily owner report
```

**Customer journey Vegam automates:** enquiry → instant reply → qualify → book → remind → visit → collect payment → ask for review, with every step summed up in the morning report.

---

## Principles

1. **Global by design.** No hard-coded country, language, currency, timezone or industry. Region-specific behaviour lives in configuration and adapters.
2. **The AI never invents.** It answers only from the business's data, and hands off to a human when unsure, on complaints, or when asked.
3. **Compliance is built in, not left to the customer.** Every outbound message and call passes one gate, `canContact()`, which applies the consent, opt-out and contact-window rules for the contact's region.
4. **Provider adapters everywhere.** Messaging channels, telephony, voice AI, LLM, email and payments each sit behind an interface, so providers can change by region, cost or quality.
5. **Prove value in the customer's own numbers.** Every metric a customer pays for appears in the daily report.
6. **One shared core.** Contacts, conversations, AI brain, channels, automations and events are reused by every future product.

---

## Architecture

Multi-tenant SaaS: every business is an **organization**, and all data is scoped by `org_id` with row-level security.

| Layer | Choice |
|---|---|
| Language | TypeScript (strict) everywhere |
| Monorepo | pnpm workspaces + Turborepo |
| Web app + landing page | Next.js (App Router), React, Tailwind CSS, shadcn/ui |
| Database, auth, storage | Supabase (Postgres) with row-level security |
| ORM / migrations | Drizzle ORM |
| Background jobs | pg-boss (Postgres-backed queue) in a worker service |
| LLM | Anthropic Claude API (models set by env var) |
| Messaging | Meta WhatsApp Cloud API, Instagram and Messenger via Graph API, website widget |
| Telephony | Regional providers behind an adapter (e.g. Exotel/Plivo in India; Twilio, Telnyx or similar elsewhere) |
| Voice AI | Managed voice-agent platforms behind an adapter, chosen per language |
| Payments *(later)* | Regional providers (e.g. Razorpay, Stripe) |
| Email | Resend or AWS SES |
| Validation / monitoring | zod, Sentry, pino |
| Tests | Vitest, Playwright |

**Data conventions:** money as integer minor units with an ISO currency code; phone numbers in E.164; times stored in UTC and shown in the business's timezone; data hosted in a region suited to each business's legal requirements.

---

## Repository structure (planned)

```
vegam/
├─ apps/
│  ├─ web/          # Next.js: landing page, dashboard, API routes, webhooks
│  ├─ worker/       # background jobs: follow-ups, reminders, reports, retries
│  └─ voice/        # voice gateway: telephony streams ↔ voice AI ↔ tools
├─ packages/
│  ├─ db/           # schema, migrations, RLS policies, seed data
│  ├─ core/         # contacts, conversations, leads, bookings, automations, compliance
│  ├─ ai/           # prompts, agent loop, tools, evals
│  ├─ channels/     # whatsapp, instagram, messenger, webchat, sandbox
│  ├─ telephony/    # regional telephony adapters
│  ├─ voice-ai/     # voice AI adapters
│  ├─ notify/       # email + staff alerts
│  ├─ ui/           # shared components + design tokens
│  └─ config/       # eslint, tsconfig, env schema
├─ docs/
│  ├─ handoff.md    # full build specification
│  └─ decisions/    # architecture decision records
└─ .github/workflows/
```

---

## Roadmap

**Version 1: first 2 weeks**

*Every enquiry gets an instant, correct AI reply, a booking if needed, a follow-up if they go quiet, and the owner sees it all every morning.*

- Login and business workspaces
- WhatsApp connection
- Business info and knowledge base
- AI auto-replies with human handoff
- Shared inbox with take over / hand back
- Contacts, simple booking, day-before reminder, one automatic follow-up
- Daily owner report
- Safety basics: opt-outs, alerts, backups, audit log
- Sandbox channel for testing without Meta

**v1 is done when** 3 real businesses use it daily for 2 weeks, the AI handles at least 80% of chats correctly without staff, and at least one business agrees to pay.

**Front Desk: weeks 3–8**

| Week | Ships |
|---|---|
| 3 | Instagram, Messenger, website chat; missed call → message |
| 4 | Lead capture, qualification, lead score, pipeline board |
| 5 | Full calendar, reschedule/cancel by reply, automation engine |
| 6 | AI receptionist for incoming calls |
| 7 | AI outbound calls to new leads (compliance-gated); AI setup from a website link; custom labels |
| 8 | Dashboard, improved report, polish |

**After Front Desk:** payments, reviews, social media, retention campaigns, self-serve signup and billing, integrations and public API, mobile app, then new AI departments: Sales, Marketing, Accounts, Customer Care, Operations, Team and Owner's Assistant.

---

## Getting started

The codebase has not been scaffolded yet. Once it is, setup will be:

```bash
pnpm install
cp .env.example .env   # fill in Supabase, Anthropic and channel credentials
pnpm dev               # runs the web app and worker
```

---

## Open questions

- Final product name and domain
- Pricing per region and plan, after pilots
- Telephony and voice AI providers per launch region
- Legal review of calling, recording and data protection rules for each launch region

---

## License and ownership

Copyright (c) 2026 Vinay Kumar. All rights reserved.

Vegam is **proprietary software** owned by Vinay Kumar. It is not open source. No one may use, copy, modify or distribute any part of it without a written agreement signed by the owner. See [LICENSE](LICENSE).

Contributions are by invitation only and require a signed IP assignment agreement. See [CONTRIBUTING.md](CONTRIBUTING.md).
