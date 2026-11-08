# Emaki website

A one-page static site for Emaki, built with [Astro](https://astro.build).
No UI framework; plain `.astro` components and a little CSS. One fixed look:
a dark hero, then warm light bands (see "The look").

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
  to action reads "Coming soon to Linux", with no button.
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
exported with the released AppImage in a throwaway profile (Social post,
Vertical story, Logo reveal and Mask reveal with 0.9.3; the two menu boards
with 0.9.2). Kinetic type is left off while its template still reads "MAKE IT
MOVE TODAY.". For the poster, pick a moment after everything has landed:

```sh
export XDG_DATA_HOME=/tmp/emk-w/data XDG_CONFIG_HOME=/tmp/emk-w/config XDG_CACHE_HOME=/tmp/emk-w/cache
Emaki.AppImage --template "Morning coffee" morning-coffee.emaki
Emaki.AppImage --export morning-coffee.emaki raw.mp4 --width 1280 --height 720 --fps 30
ffmpeg -i raw.mp4 -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p -movflags +faststart -an public/showcase/morning-coffee.mp4
ffmpeg -ss 10 -i raw.mp4 -frames:v 1 -c:v libwebp -quality 80 public/showcase/morning-coffee.webp
```

Portrait clips are 720 × 1280, square ones 960 × 960. Each clip plays
muted and looped while on screen, with a pause button; with reduced motion
it shows the poster until the visitor presses play.

## The look

One fixed look, no light and dark switching: the page is a run of bands, each
setting its own background and text through a class in `global.css`
(`band band-sumi`, `band-paper`, `band-zoge`, `band-kachi`). The colours are
traditional Japanese ones: shiro-neri #FCFAF2 and zōge-iro #F8F4E6 for the
light bands, gofun-iro #FFFFFB for raised surfaces, warmed sumi #1C1A17 for
the hero and kachi-iro #08192D for the closing band. The one accent is the
logo's sun, beni-hi #E2483A, for marks only; where it carries text it is
akane-iro #B7282E. The hero shows the real editor screenshot (`mockups.png`).
The audit behind the layout is in `docs/overhaul-audit.md`.

## The tracking clip

`public/showcase/price-tag-tracking.mp4` was made with Emaki's own tracking
(`motion_ui::tracking::Session`, the same code as Right-click › Track motion),
not animated by hand. The footage is a drawn café table rendered frame by
frame in Chromium under a simulated handheld camera; a small harness built the
project (the video, a price-tag group, a two-point track from the cup handle
and the spoon), and the released AppImage exported it:

```sh
Emaki.AppImage --export price-tag.emaki raw.mp4 --width 1280 --height 720 --fps 30
```

## Screenshots

Screenshots live in `src/assets/shots/` as full-size PNGs (1440 px wide).
Astro turns each into AVIF and WebP at 480/800/1200/1440 px at build time,
so commit the originals and don't resize them by hand.

To update one, replace the PNG with a new light-mode screenshot under the
same name (or add a file and import it). The current ones were taken on
4 November 2026 (app main after task 068, the 0.9.3 look) from the app's
screenshot tests in the Washi theme, which matches the site's paper and
indigo. Run from the app repo, after any gate there has finished:

```sh
MS_UI_THEME=washi MS_UI_LIGHT=1 MS_UI_SNAPSHOTS=$PWD/target/shots/site-2026-11-04-washi target/emaki-cargo.sh \
  test -p motion-ui --test ui_snapshots -- editor_screenshots keyframes_screenshot \
  effects_media_and_motion_path_screenshots text_on_a_path_and_variable_weight_screenshot \
  colour_section_screenshots
XDG_DATA_HOME=$PWD/target/gate-xdg MS_UI_THEME=washi MS_UI_LIGHT=1 \
  MS_UI_SNAPSHOTS=$PWD/target/shots/site-2026-11-04-washi/app \
  target/emaki-cargo.sh test -p motion-app -- mockup_screenshots home_templates_screenshot app_screenshots
```

| File | Source (in `target/shots/site-2026-11-04-washi/`) | Used on |
| --- | --- | --- |
| `mockups.png` | `app/mockups-07-in-sync.png` | Home (the pinned editor, and a full-size crop of its canvas on phones), Use cases |
| `graph-editor.png` | `25-graph-editor.png` | Home, Animate (cropped to the graph editor) |
| `text-path.png` | `40-text-on-a-path.png` | Home, Type (cropped to the ring of text) |
| `colour.png` | `82-colour-look-popover.png` | Home, Colour |
| `hero-editor.png` | `10-curved-motion-path.png` | not used |
| `artboards.png` | `00-all-artboards.png` | not used |
| `templates.png` | `app/13c-home-templates.png` | not used (shows Kinetic type's "MAKE IT MOVE") |
| `export.png` | `app/27-export.png` | not used |
| `signage-tv.png` | `app/mockups-04-tv.png` | not used |

The crops are set in `src/pages/index.astro` (`<Crop x y zoom ratio>`), so
check them after a new screenshot moves things around.

Remember to update the `alt` text where a picture is used when it changes.

## Brand files

- `src/assets/brand/logo-horizontal.svg`: inlined by `Logo.astro`, which
  colours the wordmark with the text colour and draws the ribbons on
  (skipped when the visitor prefers reduced motion).
- The logo is indigo and vermilion: a back ribbon #9DB4D6 → #264D7E, a front
  ribbon #F6B39A → #EE7A52 → #D9442F and a vermilion droplet, with no gloss.
  The brand files, `scripts/logo-stacked.svg` and the favicons come from the
  app repo's logo (task 070), so keep the two in step.
- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`: from the
  app's logo files.
- `public/og.png` (1200×630): made by `scripts/og-image.mjs` from
  `scripts/logo-stacked.svg`; `npm run og` rebuilds it on its own.

Fonts are self-hosted: Inter and Outfit from `@fontsource` (SIL OFL).
