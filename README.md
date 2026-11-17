# Ascencia Malta - Static UI (React)

A static, fully responsive redesign of three pages of the
[Ascencia Malta Business School](https://www.ascenciamalta.edu.mt/) website:
**Home**, **About Us** and **Contact**.

The new theme keeps the brand identity (crimson logo colour, dark ink, serif headings)
but presents it with a fresh editorial layout. UI only, no backend or API.

**Live demo:** https://ascencia-malta-tau.vercel.app/

## Tech stack

- React 18 (functional components) + Vite
- React Router (3 routes)
- Plain CSS with CSS custom properties (no UI frameworks)

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  data/            Page content (text, image paths) kept out of the components
    site.js        Shared: nav, contact info, footer, stats
    home.js
    about.js
  components/
    layout/        Header (with mobile menu), Footer, Layout (route shell)
    ui/            Small reusable pieces: Button, Icon, SectionHeading, PageBanner
    sections/      Sections shared by several pages: StatsBand, JoinCta
  pages/
    Home/          Home.jsx composes one component per section + Home.css
    About/
    Contact/       Includes ContactForm (client-side validation only)
  styles/
    variables.css  Design tokens: colours, fonts, spacing, radii
    global.css     Reset, base typography, layout helpers
public/images/     Images and logo from the live site
```

## Deployment

The project is a standard Vite SPA. SPA fallback rules are included for both hosts,
so deep links like `/about` work on refresh:

- **Vercel**: import the repo; framework preset "Vite" (uses `vercel.json`).
- **Netlify**: build command `npm run build`, publish directory `dist` (uses `public/_redirects`).

## Notes

- Text content and images are reused from the live website, as allowed by the brief.
- The contact form validates input and shows a confirmation, but does not send data.
- Breakpoints: 900px (tablet) and 560px (mobile), plus fluid type and spacing via `clamp()`.
