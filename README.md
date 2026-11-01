# Emaki website

A one-page static site for Emaki, built with [Astro](https://astro.build).
No UI framework; plain `.astro` components and a little CSS. Light and dark
follow the visitor's system setting.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # static site in dist/ (also regenerates public/og.png)
npm run preview   # serve dist/ locally
```

Upload the contents of `dist/` to any static host.

## Before publishing

- **Download link:** set `APPIMAGE_URL` in `src/config.ts` to the real
  AppImage URL (for example a GitHub release asset). Until then the
  download buttons jump to the download section (`#download`).
- **Site address:** build with `SITE_URL=https://your-domain npm run build`
  (or change the fallback in `astro.config.mjs`). It makes the canonical
  link and the social card (`og:image`) absolute. The placeholder is
  `https://emaki.example`.
- Other links (GitHub, releases, licence, Figma plugin folder) are in
  `src/config.ts` too.

## Screenshots

Screenshots live in `src/assets/shots/` as full-size PNGs (1440 px wide).
Astro turns each into AVIF and WebP at 480/800/1200/1440 px at build time,
so commit the originals and don't resize them by hand.

To update one, replace the PNG with a new light-mode screenshot under the
same name (or add a file and import it in `src/pages/index.astro`). Current
sources, from the app repo's `target/shots/`:

| File | Source |
| --- | --- |
| `hero-editor.png` | `final-audit/10-curved-motion-path.png` |
| `artboards.png` | `final-audit/00-all-artboards.png` |
| `graph-editor.png` | `final-audit/25-graph-editor.png` |
| `mockups.png` | `mockups/mockups-07-in-sync.png` |
| `colour.png` | `colour/80-adjust-look-applied.png` |
| `templates.png` | `export/13c-home-templates.png` |
| `export.png` | `export/27-export.png` |

Remember to update the `alt` text in `index.astro` when a picture changes.

## Brand files

- `src/assets/brand/logo-horizontal.svg`: inlined by `Logo.astro`, which
  colours the wordmark with the text colour and draws the ribbons on
  (skipped when the visitor prefers reduced motion).
- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`: from the
  app's `assets/`.
- `public/og.png` (1200×630): made by `scripts/og-image.mjs` from
  `scripts/logo-stacked.svg`; `npm run og` rebuilds it on its own.

Fonts are self-hosted from `@fontsource` (Inter and Outfit, both SIL OFL).
