# Vegham

> **Never miss a customer again.**

Vegham is an AI voice agent for any business whose customers call or message it. It answers calls and chats in a natural voice, speaks the customer's language, and **remembers every person it talks to**, even months later.

Three things it does:

1. **It answers.** Every call and message, day or night.
2. **It remembers.** Who someone is, what they asked, and where the conversation was left.
3. **It is everywhere.** Phone calls, WhatsApp, Instagram, Messenger, Telegram, and a link that works in any browser.

---

## Status

**Front end only.** The website and the app are built from the design boards and run with sample data. Nothing is saved, no channel is connected and no call is answered yet; the backend is the next stage.

The earlier, broader "front desk" product (bookings, campaigns, payments, reviews) was removed from this branch. It remains in the history of `dev`.

---

## What is in this repository

| Folder | What it holds |
|---|---|
| [`frontend/`](frontend/README.md) | The Next.js website and app (static export) |
| [`design/`](design/README.md) | The design boards, the scripts that made them, and the script that ports them into `frontend/` |
| [`docs/product/`](docs/product/overview.md) | What the product is and which screens exist |
| [`docs/legal/`](docs/legal/README.md) | Draft policies and legal templates |

---

## Getting started

```bash
cd frontend
pnpm install
pnpm dev               # http://localhost:3000
```

Or run it the way it is deployed (Docker + nginx):

```bash
docker compose up --build   # http://localhost:8080
```

Useful entry points: `/` (landing page), `/signup/` then `/setup/` (set-up steps), `/app/` (the app).

---

## Open questions

- Plans and prices (the Pricing page shows placeholders)
- Telephony and voice providers per launch region, and which countries can have phone numbers at launch
- Real contact details, company address and founder note for the website
- Legal review of calling, recording, memory retention and data protection rules for each launch region

---

## License and ownership

Copyright (c) 2026 Vinay Kumar. All rights reserved.

Vegham is **proprietary software** owned by Vinay Kumar. It is not open source. No one may use, copy, modify or distribute any part of it without a written agreement signed by the owner. See [LICENSE](LICENSE).

Contributions are by invitation only and require a signed IP assignment agreement. See [CONTRIBUTING.md](CONTRIBUTING.md).

Draft customer-facing policies (terms, privacy, data processing, acceptable use, refunds, cookies) and internal legal templates are in [docs/legal](docs/legal/README.md).
