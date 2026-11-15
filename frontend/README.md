# Vegham frontend

The Vegham website and app: an AI voice agent that answers calls and messages and remembers every person.

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- Pages are ported one-to-one from the design boards in `design/canvas/project/`, so they match the designs exactly
- Fonts: Inter (body) and Inter Tight (headlines), loaded through `next/font`
- Builds to static HTML in `out/` (`output: "export"`), so it can be hosted on any static host or CDN
- Front end only for now: every person, number and conversation is sample data, and nothing is saved

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
│  ├─ layout.tsx, globals.css   # fonts, metadata, a few overrides
│  ├─ page.tsx                  # landing page: sections in order
│  ├─ login/, login/code/, signup/, contact/
│  ├─ setup/                    # four set-up steps after sign-up
│  └─ app/                      # the app after log in (layout.tsx wraps pages in the shell)
├─ components/
│  ├─ site/                     # header, footer, landing sections, auth pages
│  ├─ setup/                    # set-up steps
│  └─ app/                      # AppShell (sidebar, profile menu, settings), NavLink, pages/
├─ styles/design.css            # styles taken from the design boards
└─ lib/paths.ts                 # base-path helper
```

## Where pages come from

Files that start with `// Ported from design board …` are generated. To change one, change the design board and run, from the repo root:

```bash
python3 design/tools/port.py
```

The script converts each board's HTML into a React component and rebuilds `src/styles/design.css`. Hand-written files (`layout.tsx`, `NavLink.tsx`, `ShellEffects.tsx`, `globals.css`) are not touched.

The app shell keeps the boards' mechanism for menus, the settings pop-up, the theme and the collapsed sidebar: hidden radio inputs and CSS. `ShellEffects.tsx` closes menus on navigation and remembers the theme. Replace this with React state when the pages are wired to real data.

## Routes

| Route | Page |
|---|---|
| `/` | Landing page |
| `/login/`, `/login/code/`, `/signup/` | Log in, code, sign up |
| `/contact/` | Contact |
| `/setup/`, `/setup/voice/`, `/setup/test-call/`, `/setup/go-live/` | Set-up steps |
| `/app/`, `/app/welcome/` | Home, first-login Home |
| `/app/conversations/`, `/app/conversations/chat/` | A call, a WhatsApp hand-over |
| `/app/people/`, `/app/people/rohan-mehra/` | People, one person's memory |
| `/app/follow-ups/`, `/app/insights/` | Follow-ups, Insights |
| `/app/agent/` + `languages/`, `memory/`, `knowledge/`, `test-call/` | Your agent |
