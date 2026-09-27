# Curalinx website

Marketing website for **Curalinx**, a health technology platform that connects patients, health data and doctors.

Built with **React**, **Vite**, **Tailwind CSS v4** and **React Router**.

## Run it locally

You need **Node.js 20 or newer** (check with `node -v`; get it from https://nodejs.org).

```bash
git clone https://github.com/gloonch/curalinx.git
cd curalinx
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

Other commands:

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally to check it |

## Pages and routes

| Path | Page |
|---|---|
| `/` | Landing page: Hero → Why Curalinx → Plans → Request a Demo → Newsletter → Contact Us → Footer |
| `/about` | About Us: "The Team Behind Curalinx" and the team (2 + 3 layout) |
| `/privacy`, `/terms` | Placeholder legal pages |
| anything else | "Page not found" |

Navbar items **Why Curalinx**, **Plans**, **Contact Us** and **Request a Demo** smooth-scroll to their section on the landing page, with a header offset so titles never sit behind the sticky navbar. From another page they route to `/#section` and scroll on arrival. **About Us** is a separate route.

> **Hosting note:** because routes use the browser's history API, the production host must serve `index.html` for unknown paths (a "SPA fallback"). Vercel and Netlify do this with a one-line rewrite.

## Key interactions

- **Hero → Navbar logo** (`src/hooks/useLogoMorph.js`): one logo element shrinks and arcs from the Hero into the navbar as you scroll, and reverses at the top. The heading fades as it passes. It works on mobile too. The About page has no animation; the logo is simply in the navbar.
- **Why Curalinx reset** (`src/hooks/useResetWhenLeftAbove.js`): no tab is selected on entry. The choice stays while you scroll down and resets when you scroll back up above the section.
- **Forms** (`src/sections/RequestDemo.jsx`, `Contact.jsx`, `components/NewsletterSignup.jsx`): client-side validation with messages under each field. They are **not connected to a backend yet**; look for the `TODO` comments where the submit should call your API.

## Where to change things

| To change | Edit |
|---|---|
| Any text (headings, plans, team, contact details) | `src/content/site.js` |
| Team photos | Put images in `public/team/` and add `photo: '/team/name.jpg'` to each member in `src/content/site.js` |
| Colours, fonts, radii, shadows | The `@theme` block in `src/index.css` |
| Logo | `src/assets/logo.png` (navbar/hero) and `src/assets/logo-reversed.png` (footer) |

## Project structure

```
src/
  main.jsx            # entry: BrowserRouter + App
  App.jsx             # routes
  index.css           # Tailwind v4 + Curalinx design tokens
  layouts/SiteLayout  # Navbar + page + Footer
  pages/              # Home, About, SimplePage
  sections/           # landing page sections
  components/         # Button, Field, AudienceTabs, PricingCard, Navbar, Footer, Ribbon, DataFlow…
  hooks/              # useLogoMorph, useResetWhenLeftAbove, useScrolled
  content/site.js     # all copy
design-system/        # brand book, tokens and assets (reference)
```

All user-facing text is in English.
