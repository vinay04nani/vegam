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

## Structure

```
src/
├─ app/
│  ├─ layout.tsx          # fonts, metadata
│  ├─ page.tsx            # landing page: sections in order
│  ├─ login/, signup/     # auth pages (pixel coast + sign-in form)
│  ├─ contact/            # contact page (glyph field + two-step form)
│  └─ globals.css         # design tokens, signature gradients, animations
├─ content/
│  └─ site.ts             # ALL copy, links, demo data and placeholders
└─ components/
   ├─ ui/                 # Button, Heading, Icon, Reveal (scroll fade-in),
   │                      # Kolam (ornament, Vegam mark, ripple + lattice patterns),
   │                      # ArtTile (grain gradient tiles, frosted icons)
   ├─ sections/           # Navbar, Hero, ProductShowcase, Features, ChatDemo,
   │                      # Languages, Trust, Plans, SeeItInAction, FinalCta, Footer
   ├─ auth/               # AuthShell, AuthForm, PixelScene, PixelIcon, BrandIcons
   └─ contact/            # ContactForm, GlyphField
```

## Editing content

Change text, links and demo conversations in `src/content/site.ts`; layout code doesn't need to change. Fill in these placeholders before launch:

| Placeholder | Where |
|---|---|
| Demo booking link (e.g. Calendly or Cal.com) | `links.demo` |
| `$[XX]`, `$[XXX]` plan prices | `plans` |
| `[Company legal name]` | `companyLegalName` |
| `[Your business]` in sample chats | `chatTabs` |
| Login, privacy, terms, social links | `links`, `socials`, `footerColumns` |
| Contact form endpoint (nothing is sent until set) | `forms.contactEndpoint` |
| Careers, support, press links | `contactCards` |

## Not wired yet

- **Log in / sign up** validate input and show the "check your email / phone" screen, but no email or code is sent. Connect Supabase Auth in `src/components/auth/AuthForm.tsx` (marked `TODO(auth)`). Google, Microsoft and Apple buttons show a "coming soon" note.
- **Contact form** shows the thank-you screen but sends nothing until `forms.contactEndpoint` is set (marked `TODO(contact)`).

## Design rules

- Never name an industry in the copy; Vegam is for any business.
- Never invent testimonials or numbers. The figures in the demo panels are illustrative sample data.
- All motion respects `prefers-reduced-motion`.
- Visual motifs come from kolam (muggu): dots joined by one looping line. Dots are customers; the loop is Vegam. Use the `Kolam` components rather than borrowing other brands' ornaments.
- Premium surfaces stack three layers: a soft gradient, faint line art, and film grain (`bg-grain`), with frosted white glyphs on top.
