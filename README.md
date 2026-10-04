# The Room That Remembers, website

Landing page for [The Room That Remembers](https://tomjnet.itch.io/the-room-that-remembers), a 15-minute puzzle adventure that plays free in the browser.

The page shows the [trailer](https://www.youtube.com/watch?v=oaJJ9T4YTi4&list=PLXlEyZGPL46M), the three rooms in their Reality and Dream versions, and how to play. It is a single static page built with [Astro](https://astro.build) and Tailwind CSS, with no client framework.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
```

The static site lands in `dist/`. `npm run preview` serves it locally.

## Deploy

`.github/workflows/pages.yml` builds the site and publishes it to GitHub Pages on every push to `main`. In the repository settings, set **Pages -> Source** to **GitHub Actions**. The workflow passes the origin and base path that Pages reports, so the site works at `https://<owner>.github.io/<repo>/` and on a custom domain without changes.

## Layout

| Path | What it is |
|---|---|
| `src/pages/index.astro` | The page, assembling the sections below |
| `src/components/Hero.astro` | Full-viewport hero with a crossfading slideshow and the play link |
| `src/components/TrailerSection.astro` | Embedded YouTube trailer |
| `src/components/WorldsSection.astro` | Reality / Dream comparison slider |
| `src/components/RoomsSection.astro` | The three rooms, hover to see the Dream |
| `src/components/HowToPlaySection.astro` | The character, the controls and the basics |
| `src/styles/global.css` | Tailwind, the Instrument Serif font, the `.liquid-glass` style and the scroll reveal |
| `src/lib/site.ts` | External links and the base-path helper for images |
| `public/images/` | Game artwork used on the page |

Game and site by TomJNET.
