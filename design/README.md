# Vegham design files

UI designs for the Vegham website, sign-up, onboarding and app. These are design boards, not production code.

- `canvas/project/` — every board on the design canvas as a standalone `.dc.html` file, plus `canvas.json` (board positions and titles). Boards load `./support.js` from the canvas tool, so they render fully only inside the canvas.
  - `LandingV2`, `Product`, `HowItWorks`, `Pricing`, `Company` and friends: website pages
  - `Login`, `Signup`, `Otp`, `Ob*`: account and onboarding
  - `App*`: the app after log in (calls, WhatsApp and memory)
  - `Wf*`: wireframes
- `generators/` — the Python scripts that produced the boards. `app25.py` then `app26.py` rebuild the app boards; `land3.py` rebuilds the landing page. Paths inside them point at the original working folder and need adjusting before a re-run.
- `tools/` — `port.py` turns the boards into the Next.js pages in `frontend/src` (see `frontend/README.md`); `html2tsx.py` is the HTML-to-JSX converter it uses.
- `vegham-video-plan.md` — pitch, storyboard and shot prompts for the launch film.

All people, numbers and conversations shown in the boards are sample data.
