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

The links live in `src/config.ts`. Each one is empty for now, and an empty
link hides whatever it drives, so the page never points at something that
isn't there yet.

- **Notify link (`NOTIFY_URL`):** the sign-up page of a mailing list
  service, for "Get notified when it's out". There is no backend and no
  form on the site; the button is a plain link. While it is empty, the call
  to action reads "Coming soon: free and open source", with no button.
- **Download link (`APPIMAGE_URL`):** the real AppImage URL (for example a
  GitHub release asset). Set it and a "Download for Linux" button appears
  in the hero and in Get Emaki.
- **Source code (`GITHUB_URL`):** the public repository, once it is open.
  Set it and the page gains the GitHub, releases, licence and Figma plugin
  links, plus "Contribute on GitHub" in the story. Keep it empty while the
  repository is private.
- **Site address:** build with `SITE_URL=https://your-domain npm run build`
  (or change the fallback in `astro.config.mjs`). It makes the canonical
  link and the social card (`og:image`) absolute. The placeholder is
  `https://emaki.example`.

## Pages

- `/` (`src/pages/index.astro`): the landing page.
- `/changelog` (`src/pages/changelog.astro`): release notes from
  `src/data/changelog.ts`.
- `/roadmap` (`src/pages/roadmap.astro`): Now / Next / Later from
  `src/data/roadmap.ts`. No dates and no promises; write items from the
  user's side.

The header and footer are `SiteHeader.astro` and `SiteFooter.astro`.

### Adding a release to the changelog

Add an entry at the **top** of `releases` in `src/data/changelog.ts`:

```ts
{
  version: '1.0.0',
  date: '2026-12-01',            // YYYY-MM-DD
  summary: 'One or two sentences.',
  sections: [
    { title: 'Fixed', items: ['…'] },
    { title: 'Faster', items: ['…'] },
    { title: 'Changed', items: ['…'] },
    { title: 'Known limits', items: ['…'] },
  ],
},
```

Copy the notes from the GitHub release (`gh release view v1.0.0 -R
tomkyriacou64/emaki --json body,publishedAt`), leaving out the download
line and the "Generated with" footer. Text in `backticks` shows as code.
Each release gets an anchor, such as `/changelog#v1.0.0`.

## The hero

`src/components/HeroScroll.astro` draws a handscroll that unrolls right to
left on load, with a small animated scene on an artboard and a timeline
under it. One `requestAnimationFrame` clock drives the scene, the playhead
and the timecode; it pauses off screen and in hidden tabs, and the play
button pauses it for good. The markup is the composed still frame, which is
what visitors see without JavaScript or when they prefer reduced motion
(they can still press play).

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
