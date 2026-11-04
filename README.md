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
- `/showcase`, `/use-cases`, `/get-started`, `/faq`: clips made in Emaki,
  what it's for, how to start, short answers.
- `/roadmap` and `/changelog`: from `src/data/roadmap.ts` and
  `src/data/changelog.ts`. The roadmap has no dates and no promises; write
  items from the user's side.
- `/privacy`, `/licence`, `/contributing`. Keep the privacy page's list of
  network use in step with the app (grep the app for `ureq`).

Inner pages use `src/layouts/Page.astro`. The header and footer are `SiteHeader.astro` and `SiteFooter.astro`.

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

## Showcase clips

Clips live in `public/showcase/` as `<name>.mp4` (H.264, no sound) with a
poster frame `<name>.webp`, and are listed in `src/data/showcase.ts`. Only
use clips really made in Emaki. The current ones are built-in templates,
exported with the released AppImage (0.9.2) in a throwaway profile:

```sh
export XDG_DATA_HOME=/tmp/emk/data XDG_CONFIG_HOME=/tmp/emk/config XDG_CACHE_HOME=/tmp/emk/cache
Emaki.AppImage --template "Morning coffee" morning-coffee.emaki
Emaki.AppImage --export morning-coffee.emaki raw.mp4 --width 1280 --height 720 --fps 30
ffmpeg -i raw.mp4 -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p -movflags +faststart -an public/showcase/morning-coffee.mp4
ffmpeg -ss 10 -i raw.mp4 -frames:v 1 -c:v libwebp -quality 80 public/showcase/morning-coffee.webp
```

Portrait clips are 720 × 1280, square ones 960 × 960. Each clip plays
muted and looped while on screen, with a pause button; with reduced motion
it shows the poster until the visitor presses play.

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
same name (or add a file and import it). The current ones were taken on
4 November 2026 from the app's screenshot tests, run from the app repo with
`MS_UI_LIGHT=1 MS_UI_SNAPSHOTS=<dir>`:

```sh
MS_UI_LIGHT=1 MS_UI_SNAPSHOTS=$PWD/target/shots/site-2026-11-04 target/emaki-cargo.sh \
  test -p motion-ui --test ui_snapshots -- editor_screenshots keyframes_screenshot \
  effects_media_and_motion_path_screenshots text_on_a_path_and_variable_weight_screenshot \
  colour_section_screenshots
XDG_DATA_HOME=$PWD/target/gate-xdg MS_UI_LIGHT=1 MS_UI_SNAPSHOTS=$PWD/target/shots/site-2026-11-04/app \
  target/emaki-cargo.sh test -p motion-app -- mockup_screenshots home_templates_screenshot app_screenshots
```

| File | Source (in `target/shots/site-2026-11-04/`) |
| --- | --- |
| `hero-editor.png` | `10-curved-motion-path.png` |
| `artboards.png` | `00-all-artboards.png` |
| `graph-editor.png` | `25-graph-editor.png` |
| `text-path.png` | `40-text-on-a-path.png` |
| `colour.png` | `82-colour-look-popover.png` |
| `mockups.png` | `app/mockups-07-in-sync.png` |
| `templates.png` | `app/13c-home-templates.png` |
| `export.png` | `app/27-export.png` |
| `signage-tv.png` | `app/mockups-04-tv.png` |

Remember to update the `alt` text where a picture is used when it changes.

## Brand files

- `src/assets/brand/logo-horizontal.svg`: inlined by `Logo.astro`, which
  colours the wordmark with the text colour and draws the ribbons on
  (skipped when the visitor prefers reduced motion).
- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`: from the
  app's `assets/`.
- `public/og.png` (1200×630): made by `scripts/og-image.mjs` from
  `scripts/logo-stacked.svg`; `npm run og` rebuilds it on its own.

Fonts are self-hosted from `@fontsource` (Inter and Outfit, both SIL OFL).
