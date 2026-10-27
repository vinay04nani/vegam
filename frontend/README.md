# Vegam frontend

The Vegam landing page (and, later, the dashboard).

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4**, with Vegam design tokens in `src/app/globals.css`
- Fonts: Figtree (body), Newsreader (headlines), JetBrains Mono (tags), loaded through `next/font`
- Builds to static HTML in `out/` (`output: "export"`), so it can be hosted on any static host or CDN

## Run it

```bash
cd frontend
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # TypeScript check
pnpm build        # static site in out/
```

## Deploy

The site builds to static files, so it runs anywhere: a static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront) or the Docker image below.

**Docker** (Node builds the site, nginx serves it on port 8080):

```bash
docker compose up --build        # from the repo root, then open http://localhost:8080
# or
docker build -t vegam-frontend ./frontend
docker run -p 8080:8080 vegam-frontend
```

The image (about 76 MB) includes:
- gzip, one-year caching for hashed assets, `no-cache` for pages
- security headers (`nosniff`, `DENY` framing, referrer and permissions policies)
- the real 404 page, `/login` → `/login/` redirects
- a `/healthz` endpoint used by the container health check

**GitHub Pages (live site):** `.github/workflows/pages.yml` publishes the site to https://vinay04nani.github.io/vegam/ on every push to `main`, so merging `dev` into `main` releases the UI. The build sets `NEXT_PUBLIC_BASE_PATH=/vegam` because Pages serves the site from that sub-path. Use `withBase()` from `src/lib/paths.ts` for any new link that starts with `/`. If a custom domain is added later, the base path becomes empty automatically.

**Static host:** run `pnpm build` and publish the `out/` folder. Use Node 22 (`.nvmrc`) and pnpm 10.28 (`packageManager` in `package.json`).

**CI:** `.github/workflows/frontend.yml` runs on every push and pull request that touches `frontend/`. It installs with the lockfile, type-checks, builds, then builds the Docker image and smoke-tests every page.

The build downloads the Google fonts once (`next/font`) and serves them from the site itself, so the build machine needs internet access, but visitors never contact Google.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx          # fonts, metadata
│  ├─ page.tsx            # landing page: sections in order
│  ├─ login/, signup/     # auth pages (pixel scene + sign-in form)
│  ├─ pricing/            # pricing page (picker, plans, comparison, FAQ)
│  ├─ onboarding/         # two-screen onboarding: about you, pick a plan (or skip)
│  ├─ app/                # dashboard: setup guide until live, then Home, task pages
│  ├─ contact/            # contact page (glyph field + two-step form)
│  ├─ careers/, support/, press/  # "coming soon" pages, each with its own pixel scene
│  └─ globals.css         # design tokens, signature gradients, animations
├─ content/
│  ├─ site.ts             # landing copy, links, demo data and placeholders
│  ├─ pricing.ts          # plans and prices, picker, feature table, FAQ
│  ├─ onboarding.ts       # countries, channels, "Grow with Vegam" tasks, dashboard nav
│  └─ dashboard.ts        # sample data for Home and every dashboard section
├─ lib/
│  ├─ onboarding.ts       # saved onboarding and setup state (browser for now), helpers
│  └─ demoAssistant.ts    # rule-based stand-in for the AI in the test chat
└─ components/
   ├─ ui/                 # Button, Heading, Icon, Reveal (scroll fade-in),
   │                      # Kolam (ornament, Vegam mark, ripple + lattice patterns),
   │                      # ArtTile (grain gradient tiles, frosted icons)
   ├─ sections/           # Navbar, Hero, ProductPreview (phone mockups), Features,
   │                      # ChatDemo, Languages, Trust, Plans, FinalCta, Footer
   ├─ auth/               # AuthShell, AuthForm, BrandIcons
   ├─ pricing/            # PricingPage, PlanPicker, PlanCards, ComparisonTable, Faq
   ├─ contact/            # ContactForm, GlyphField
   ├─ phone/              # Phone, Bubble, Chip (chat-app phone mockup)
   ├─ onboarding/         # Onboarding (the two screens)
   ├─ setup/              # PlanChooser, AssistantSetup, ChannelSetup, TestChat, form fields
   ├─ dashboard/          # Dashboard shell, SetupHome (guide), LiveHome, TaskPages, ui
   │  ├─ kit.tsx          # shared controls: SegmentedControl, Button, Badge, Avatar, StatCard, Drawer, Modal
   │  └─ sections/        # Inbox, Calendar (+ CalendarGrid, MiniMonth), Leads (+ LeadDrawer), Calls, Campaigns, Reports, Settings
   └─ pixel/              # pixel scenes (coast, sunrise, lighthouse, kites), PixelBackdrop, ComingSoon
```

## Editing content

Change text, links and demo conversations in `src/content/site.ts`, and plans and prices in `src/content/pricing.ts` (the home page and pricing page both read them); layout code doesn't need to change. The sample business in the demos is "Nila & Co". Fill in these placeholders before launch:

| Placeholder | Where |
|---|---|
| Demo booking link (e.g. Calendly or Cal.com) | `links.demo` |
| `[Company legal name]` | `companyLegalName` |
| Login, privacy, terms, social links | `links`, `socials`, `footerColumns` |
| Contact form endpoint (nothing is sent until set) | `forms.contactEndpoint` |
| Careers, support, press pages (currently "coming soon") | `src/app/careers`, `support`, `press` |

## Not wired yet

- **Log in / sign up** validate input and show the "check your email / phone" screen, but no email or code is sent. Connect Supabase Auth in `src/components/auth/AuthForm.tsx` (marked `TODO(auth)`). Google, Microsoft and Apple buttons show a "coming soon" note.
- **Onboarding and dashboard** are a clickable demo. Answers are kept in the browser (`localStorage`; Settings → "Start over" clears them), channel buttons only change their status, "Read it" fills in sample services, the test chat uses `src/lib/demoAssistant.ts`, and the dashboard and its sections show labelled sample data (actions there change the screen only). Plan limits are switched off while the app is built (`gating` in `src/content/onboarding.ts`). Each spot is marked `TODO(backend)`. The flow is described in `docs/product/onboarding.md`.
- **Contact form** shows the thank-you screen but sends nothing until `forms.contactEndpoint` is set (marked `TODO(contact)`).

## Design rules

- Never name an industry in the copy; Vegam is for any business.
- Never invent testimonials or numbers. The figures in the demo panels are illustrative sample data.
- All motion respects `prefers-reduced-motion`.
- Visual motifs come from kolam (muggu): dots joined by one looping line. Dots are customers; the loop is Vegam. Use the `Kolam` components rather than borrowing other brands' ornaments.
- Pixel art (`src/lib/pixel.ts`) uses limited colour ramps, ordered (Bayer) dithering only at band edges, stepped glows and value noise for organic shapes. Never add random per-pixel noise; it reads as static.
- One art style per job, so pages feel like one product:
  - **Surfaces and cards:** kolam line art over a soft gradient with film grain (`ArtTile`, `bg-hero`, `bg-banner`). Tile palettes are brand only: periwinkle, indigo, saffron, mist.
  - **Full-bleed backgrounds only:** pixel scenes (`PixelBackdrop`) behind the auth and "coming soon" pages. Never inside cards.
  - **Icons:** the line icons in `Icon`, on a soft periwinkle chip or a frosted glyph. No pixel icons.
  - **Dark panels:** the ink gradient `#1B1C2E → #22233A → #2E2220` (pricing hero, contact, dark plan card).
- Text contrast is at least 4.5:1. The lightest grey for text is `text-faint` (`#6b6d7c`), and only on white or the page background.
- Premium surfaces stack three layers: a soft gradient, faint line art, and film grain (`bg-grain`), with frosted white glyphs on top.
