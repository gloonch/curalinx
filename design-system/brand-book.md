**Clean medical precision + connected health data + soft human technology.**

Curalinx connects patients, their health data and their doctors. Every screen should read as precise, calm and trustworthy: mostly white, set in navy, with blue and teal used on purpose. It should not look like a generic SaaS template, a hospital site, a wellness app or a sci‑fi AI product.

The whole system comes from the logo: a rounded geometric wordmark in **Curalinx Navy** (`navy-900`, #000064) and a DNA "X" in **Curalinx Blue** (`blue-600`, #296fe1). **Curalinx Teal** (`teal-500`) is the third brand colour. It is not in the logo; it carries interaction and the patient side.

## Design principles

1. **Clarity first.** Every element has a job. Remove anything that is only decoration.
2. **Trust through restraint.** Use white space generously, keep surfaces flat and let navy type do the work.
3. **Connection is the story.** Where possible, show **Patient → Health Data → Curalinx → Doctor** with nodes, curved paths and the Ribbon.
4. **Precise, not cold.** Use soft radii from the logo's rounded strokes and calm motion. Nothing bounces.
5. **Accessible by default.** Text contrast is 4.5:1 or more in every theme, focus is always visible and tap targets are at least 44px.

## Content fundamentals

- **English only.** Every user-facing string is English: headings, labels, placeholders, validation messages and the footer. Requirements may be written in Persian, but the product is not.
- **Voice:** calm, expert and human. Address the reader as **you** and speak as **we**. Use short sentences. Don't use hype words ("revolutionary", "AI-powered magic"), exclamation marks or emoji.
- **Casing:** navigation, CTAs and section titles use Title Case as the brand writes them: "Why Curalinx", "Request a Demo", "Send Message", "Stay Updated with Curalinx". Body copy, hints and validation messages use sentence case.
- **Fixed labels:** nav items are `Why Curalinx · Plans · About Us · Contact Us` and the CTA is `Request a Demo`. The tabs read `I’m a Patient` / `I’m a Doctor` (curly apostrophe).
- **Validation copy** says what to do, not what went wrong: "Enter a valid email address, like name@example.com." / "Select Doctor or Patient." / "Email address is required."
- **Numbers** use tabular figures (`font-variant-numeric: tabular-nums`) in metrics and prices.

## Logo

- Use the supplied artwork only (`assets/Logos`). Never redraw, recolour or re-letter it, and never separate the DNA mark from the wordmark, except as `curalinx-mark.png` for a favicon or avatar.
- **On white** use `curalinx-logo.png` (navy + blue). **On `surface-inverse`** (the navy footer) use `curalinx-logo-reversed.png` (white + blue). Use `curalinx-logo-white.png` only on photos or gradients.
- Keep clear space equal to the height of the "l" on every side. Minimum width is 96px on screen.
- The logo appears **once** per view. On the landing page it starts in the Hero and travels into the Navbar (see *Logo morph*). On every other page it sits in the Navbar from the start.

## Colour

The page is **mostly white**. As a rough budget, about 80% is `bg-page` / `bg-subtle`, 15% is navy type and surfaces, and 5% is blue and teal accents.

| Role | Token | Use it for |
|---|---|---|
| Primary brand | `navy-900` → `text-heading`, `action-primary`, `surface-inverse` | Headings, navigation, the primary CTA and the footer |
| Interactive / patient accent | `teal-500` (graphics), `teal-700` (text & fills) → `accent-patient` | Selected states, the "I’m a Patient" accent, patient visuals |
| Data / technology accent | `blue-600` (graphics & fills), `blue-700` (text) → `accent-doctor`, `data-neutral` | Charts, the "I’m a Doctor" accent, focus ring, links |
| Backgrounds | `white`, `off-white` (`bg-subtle`), `blue-050` (`bg-blue-tint`), `teal-050` (`bg-teal-tint`) | Alternate sections; tints behind conversion sections |
| Text | `text-primary` (dark gray `gray-900`, never pure black), `text-secondary`, `text-tertiary` | Body, support text, meta and placeholders |
| Borders | `border-default`, `border-strong`, `border-control` | Card hairlines, dividers, input borders |
| Semantic | `status-success` (green), `status-warning` (amber), `status-critical` (red) | Validation and health status. **Teal never means success.** |

Rules:
- Set headings in `text-heading` and body in `text-primary`, on `bg-page`, `bg-subtle` or `surface-card`.
- Teal text is always `teal-700` (5.0:1). `teal-500` is for graphics, icons and strokes only.
- Blue text is always `blue-700` (6.3:1). `blue-600` is for fills with white text (4.7:1), charts and the focus ring.
- Every status colour comes with an icon or a word: `circle-check` / "In range", `triangle-alert` / "Borderline", `circle-alert` / "Critical". Colour alone never carries a status.

### The signature gradient: Navy → Blue → Teal

`--clx-gradient` (in `components/bundle.css`): `navy-900 → blue-600 → teal-500`. Use it **only** for:
the Ribbon strokes, the nav link underline, the featured pricing card border, the "Most popular" badge, thin decorative rules and data-flow connectors.
Never use it on large backgrounds, body text, buttons or more than one element per viewport, and never use purple or pink stops.

## Typography

**Manrope** (Google Fonts, 400–800), with Plus Jakarta Sans as fallback. Its rounded geometric forms match the wordmark. The stack is `font-sans`.

| Style | Size / line | Weight | Use |
|---|---|---|---|
| `display-hero` | 104 / 0.98, −3.5% | 800 | Hero main heading only |
| `display` | 64 / 1.04 | 800 | About page title "The Team Behind Curalinx" |
| `h1` | 48 / 1.1 | 700 | Section titles ("Why Curalinx", "Plans") |
| `h2` | 36 / 1.15 | 700 | Sub-sections, form panel titles |
| `h3` · `h4` | 24 · 18 | 700 | Card titles, plan names, footer headings |
| `body-lg` · `body` · `body-sm` | 18 · 16 · 14, 1.55–1.65 | 400 | Intros · body · descriptions |
| `label` · `caption` · `eyebrow` | 14 · 12 · 12 (+14% tracking, uppercase) | 600 · 500 · 700 | Labels/buttons · meta · section kicker |
| `metric-lg` · `metric-sm` | 44 · 20 | 800 · 700 | Prices and health metrics |

- Headings are tight (−1% to −3.5% tracking) and set in `text-heading`. Body is `text-primary` at a line height of 1.6.
- **Hero rule:** the hero heading's font size is **0.4 × the hero logo width**, which makes its lowercase letters about **1.5×** the logo's (the logo's x-height is 0.142 × its width; Manrope's is about 0.53em). Desktop: 260px logo → 104px heading. Mobile: 160px logo → 64px heading.
- Scale on mobile: `display-hero` 64, `display` 40, `h1` 34, `h2` 28. Body sizes stay the same.

## Shape, surfaces and depth

- **Radii:** `radius-md` (12) for buttons and inputs, `radius-lg` (16) for cards, `radius-xl` (20) for pricing cards and team photos, and `radius-2xl` (24) for large containers. Use `radius-full` only for truly round things (avatars, dots, nodes). **Buttons are never pills.**
- **Surfaces** are flat white `surface-card` with a 1px `border-default` hairline and `shadow-sm`. There is no glow and no heavy drop shadow.
- **Card hover** (250ms): lift 3px, border to `blue-200` (or `teal-300` on patient cards), shadow to `shadow-md`.
- The Navbar gets `shadow-nav` and a 12px backdrop blur once the page scrolls.

## Brand motifs

1. **The Curalinx Ribbon** (`Ribbon`): two crossing sine strands, an abstraction of the DNA "X". Use it as a hero background (opacity `motif-faint`, 3–6%), a section divider (`motif-soft`), the footer backdrop, the team photo placeholder and the loader (`RibbonLoader`). Don't place the literal DNA icon anywhere except the logo. Add rungs only as faint hints.
2. **Connected data lines** (`DataFlow`): nodes joined by curved, dotted paths with a travelling pulse, telling **Patient → Health Data → Curalinx → Doctor**. Curalinx is the solid navy core node. Use it in feature illustrations and diagrams, as faint background paths, and in the demo section.
3. **Navy → Blue → Teal accent:** the gradient, used as described above.

In the Hero background you may combine three things, all at 3–6% visual opacity: a 28px dot grid in `blue-600`, one Ribbon, and a soft radial white wash that keeps the centre clean.

## Iconography

- Use **Lucide** (lucide.dev) only: outline, 24px grid, **2px stroke**, round caps and joins. Never mix in filled icons.
- `Icon` ships the subset in `assets/Icons`. Import any other Lucide icon with the same settings.
- Icons inherit `currentColor`: `text-heading` by default, `accent-patient` / `accent-doctor` in role contexts, status colours in messages.
- Preferred concepts: activity, database, timeline, file-text, share-2, shield-check, lock, link, calendar, user, user-check, chart-column, trending-up, bell.
- **Avoid medical clichés:** no crosses, hearts or stethoscopes. Use `user-check` for doctors and `user` for patients.

## Motion

Motion is calm and precise. It uses ease-out curves and no spring or bounce. The variables live in `bundle.css`.

| Interaction | Duration | Easing |
|---|---|---|
| Buttons, links, inputs (`--clx-dur-button`) | 180ms | `--clx-ease` cubic-bezier(.2,0,0,1) |
| Tabs, segmented controls, nav underline (`--clx-dur-tab`) | 240ms | `--clx-ease` |
| Cards, menus (`--clx-dur-card`) | 250ms | `--clx-ease` |
| Section reveal, panel swap (`--clx-dur-reveal`) | 500ms, 16px rise + fade | `--clx-ease-out` cubic-bezier(.16,1,.3,1) |
| Hero → Navbar logo (`--clx-dur-hero`) | scroll-linked, or 850ms when triggered | ease-in-out cubic |

- Section content fades up with `Reveal` (16px, 500ms, once, on entering the viewport). Stagger grid reveals by 60ms per item, with a maximum of 5 steps. Reveals must never delay content: nothing waits on scroll to become readable.
- Under `prefers-reduced-motion`, every duration drops to 0, the logo docks without travelling and loops stop.

## Layout and responsive

- The container is `container-max` (1200px) with a 32px gutter on desktop and 16px on mobile. Forms and intros use `container-narrow` (760px).
- Sections are padded `space-32` (desktop) / `space-24` (tablet) / `space-20` (mobile). Sections alternate `bg-page` / `bg-subtle`, and the Demo section sits on `bg-blue-tint`.
- Breakpoints are `bp-md` 768 (two-column forms), `bp-lg` 900 (inline nav ↔ hamburger) and `bp-xl` 1200 (three-column pricing and team).
- Mobile gets its own design, not a shrunken desktop: a hamburger sheet, single-column forms, stacked pricing (featured plan first), full-width tabs, 44px or larger targets and the scaled type above.

## Landing page blueprint

Order: **Hero → Why Curalinx → Plans → Request a Demo → Newsletter → Contact Us → Footer.** Section ids are `#why-curalinx`, `#plans`, `#request-demo` and `#contact`. The nav links and the CTA scroll smoothly to them with a **header offset** (`scrollToSection`): each section's title lands 16px below the sticky Navbar, never behind it. Every `[id]` also carries a matching `scroll-margin-top` for direct `#hash` links. "About Us" goes to a separate page. The Navbar stays sticky on every page.

**Navbar** (`Navbar`): three zones, with the logo slot on the left, links centred and `Request a Demo` (the primary button, sm) on the right. At the top of the landing page the logo slot is empty (`logoHidden`) because the logo is in the Hero. Below 900px it becomes the logo, a compact **Request a Demo** button (hidden under 360px) and a hamburger. The hamburger opens a sheet with the links and a full-width CTA.

**Logo morph** (`useLogoMorph`, demo: *LogoMorph*): **one** logo element travels. Don't cross-fade two logos.
1. At scroll 0 the logo is centred in the Hero at `logo-hero-width` (260px; mobile 160–180px).
2. As the visitor scrolls (the first ~280px), it shrinks to `logo-nav-width`, moves up, and arcs left into the Navbar slot. The horizontal movement leads slightly, so the path curves rather than cutting diagonally.
3. Meanwhile the Hero heading fades and lifts 24px, so the logo never visibly crosses text.
4. At progress 1 the Navbar gains its scrolled state and the logo is docked.
5. Scrolling back to the very top reverses the path exactly.
To implement it, the logo is a `position: fixed; transform-origin: 0 0` element on `z-logo-morph`. Measure the Hero slot and Navbar slot rects and interpolate `translate()` and `scale()` inside `requestAnimationFrame`. Re-measure on resize.

**Hero:** about one viewport tall and minimal. Stack it as follows: main heading (`display-hero`, `text-heading`, up to 2 lines, placeholder for now), then the logo slot, then one `body-lg` support line. The background motifs stay at 3–6%.

**Why Curalinx** (`AudienceTabs` + `AudiencePanel`, demo: *SectionReset*): the title "Why Curalinx" sits above two tabs, **I’m a Patient** and **I’m a Doctor**. **Nothing is selected on entry.** A short hint invites a choice and the content area stays empty. Choosing a tab reveals a panel with the same structure for both roles (heading, intro, three feature cards). Only the accent and the copy change: Patient is teal (`accent-patient`, `accent-patient-soft`) and Doctor is blue/navy (`accent-doctor`, `accent-doctor-soft`). Panels swap with a 500ms fade-rise and no reload.
**Reset rule** (`useResetWhenLeftAbove`): the selection persists while the visitor continues **down**. When the section fully leaves the viewport through its **top boundary** (the visitor scrolled back up above it), the selection clears, so re-entering from above shows no selection again.

**Plans** (`PricingCard` ×3), titled "Plans" or "Choose Your Plan": one row on desktop, two columns on tablet and a single stack on mobile. Each card has a plan name, price, billing period, short description, feature list and CTA. One card can be `featured` (gradient border, "Most popular" badge, primary CTA), and the others use secondary CTAs.

**Request a Demo** (demo: *DemoRequestSection*): the strongest conversion block. It sits on `bg-blue-tint` with a faint Ribbon. On the left are an eyebrow, an `h1` and three reassurance points. On the right is a `radius-2xl` form panel with `shadow-md`. The fields are Full Name*, Email Address*, I am a* (`RoleSelect`: Doctor / Patient), Organization (Optional), Phone Number (Optional) and Message*. The submit button is **Request a Demo** (primary, lg, full width). On success the panel swaps in place to a confirmation.

**Newsletter** (`NewsletterSignup`): separate and lightweight. It has the title "Stay Updated with Curalinx", one line of support copy, an email field and a **Subscribe** button. It is never merged with the demo form.

**Contact Us** (demo: *ContactSection*): contact details with teal icon tiles on the left and the form on the right. The fields are Name, Email Address (required), Phone Number (Optional), Subject (`Select`) and Message, and the button is **Send Message**. Validate the email on blur and every field on submit, show a message under each field, and focus the first invalid field.

**Footer** (`Footer`): a `surface-inverse` navy ground with the reversed logo and tagline, social links, then Company / Product / Contact columns. The bottom bar holds the copyright, Privacy Policy and Terms of Service. A faint inverse Ribbon sits in the corner.

## About Us page

It uses the same Navbar (logo docked from the start, with `About Us` as `aria-current`), tokens and Footer, but **no logo morph**. The title is **"The Team Behind Curalinx"** (`display`), followed by a `body-lg` introduction to Curalinx, its mission, vision and team (max 760px).
**Team** (`TeamMemberCard` ×5): on desktop, row 1 has **2 cards centred** at the same card width as row 2, and row 2 has **3 cards**. On tablet use 2 columns; on mobile, 1. The photo is dominant (4:5, `radius-xl`), followed by the name (`h3`), the role (eyebrow style in `accent-doctor`) and a short bio. Until photos exist, the placeholder shows a faint Ribbon and initials.

## Forms and validation

- The label sits above the field (`label`, `text-heading`). Required fields get a red asterisk, and optional fields get a gray **Optional** tag instead.
- Inputs are 48px tall with a 1.5px `border-control` and `radius-md`. Focus shows a `blue-600` border plus a 4px blue halo, and hover darkens the border.
- **Error:** a `status-critical` border and a message with `circle-alert` below, announced with `role="alert"`. **Success:** a `status-success` border and a message with `circle-check`. **Disabled:** `surface-sunken`.
- Submit buttons show `RibbonLoader` while sending, then the whole form swaps in place to a confirmation.

## Data visualisation

These colours never change meaning. `data-primary` (navy) is the primary metric, `data-neutral` (blue) a neutral medical metric and `data-secondary` (teal) a secondary branded health metric. `data-positive`, `data-warning` and `data-critical` are status only. Gridlines use `data-grid`, and axis text uses `data-axis`.
Use a 2–2.5px line and a 3.5px end-dot, with an area fill at 8% of the series colour. Target ranges are bands of `data-neutral` at 7%. Pair status marks with `Badge` icons and words. The dark theme gives light equivalents of the same roles for dashboards.

## Accessibility

- The focus ring is a 2px solid `focus-ring` with a 2px offset on every interactive element, and it is at least 3:1 on all surfaces.
- Tabs follow the ARIA tabs pattern (arrow keys switch), and the role picker is a radiogroup. The mobile menu uses `aria-expanded`.
- Decorative motifs are `aria-hidden`, and DataFlow has a text label.
- Motion respects `prefers-reduced-motion`.
