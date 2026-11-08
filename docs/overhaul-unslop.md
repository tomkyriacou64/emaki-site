# Unslop pass on the overhauled home page (2026-11-08)

Process from the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0.
Rendered the overhauled page (commit d5590f8) at 1440 and 400 wide, then went
through `references/signs.md`. Where the skill's defaults meet the user's brief,
the brief wins: one fixed look, a dark hero then warm light bands, traditional
Japanese colours, no theme toggle.

**Verdict: light slop.** The overhaul already removed the heavy signs (light and
dark switching, the drawn hero mock, the 4,000 px scroll band, four type
families). Polish mode: fix only what is listed, keep the palette, type,
layout and visuals.

## Audit, one line per sign

### Surfaces and colour
- Purple-blue or violet-pink gradients: none.
- Gradient text: none.
- Coloured glows: none. The hero screenshot has a soft neutral shadow (a window over a band), allowed.
- Radial washes or blobs: none.
- Neon borders: none; hairlines are text colour at 10 to 22%.
- Many tints for text: none; three roles per band (text, dim, muted).
- Everything highlighted: no. The red appears only on the `.mark` playheads and the focus ring.
- Glass cards: none. The plan card is a surface step with a hairline.
- Hero band edge (`.hero-view`) is written as a `linear-gradient` with a hard stop: reads as two flat bands, not a fade. Keep, noted.

### Type
- Heavy headings: none (500).
- Uppercase tracked labels: none.
- Too many sizes: yes. Small text used 15, 14, 13 and 12 px on one page (`index.astro` `.kind`, `.clip-meta`, `.caveat`, `.small`, `.tracked figcaption`, `.formats dt`, legend numbers 12 px; footer 14 and 13 px).
- Numbers in mixed formats: no; timecodes, sizes and pins are tabular. Legend circle numbers were not tabular.
- Negative tracking on small text: none (only on 22 px and larger headings).
- Italic for emphasis: none.

### Icons
- Emoji: none.
- Icons in several sizes and strokes: yes. Default 20 px with a 1.8 stroke (`Icon.astro`, CTA download and bell), 18 px elsewhere, 20 px in the header menu button.
- Sparkle: an unused `sparkle` icon exists in `Icon.astro`; not used on any page. Leave.

### Spacing
- Off-grid values: header menu button `margin-right: -10px` and `-6px` (icon off the gutter line), brand focus radius 6 px, `.formats dt` `padding-top: 6px`. `.mark` ruler 49 px wide is exact (six 8 px ticks plus a hairline): keep.
- Rows with different gaps: no.
- Groups closer to neighbours than to their own items: the "Runs on" heading sits 16 px above its list and the "Mac and Windows come later" line 16 px below it, so the line reads as part of the list. Separate it.
- Uneven card padding: the plan card grows to 40 px on desktop, more than the 20 to 32 px cards get.
- Big gap above, cramped below: the legend band starts 32 px under the screenshot and ends 64 to 112 px later. Fine; the screenshot and legend belong together.

### Copy
- Greeting headline: none.
- Exclamation marks: none.
- Hype words: none.
- Trailing periods on short strings: "Mac and Windows come later." (a one-line label).
- Fake data: none; screenshot and clip data are real exports.
- Unverifiable claims: "Plays almost anywhere" on the MP4 row is soft. Make it specific to what the row lists.
- Repetition: "Coming soon to Linux" shows in the hero and on the plan card. Kept on purpose: it is the call to action in both places, driven by `NOTIFY_URL` and `APPIMAGE_URL`.

### Components
- Glowing pills, badges: none.
- Everything a pill: no; buttons 10 px, cards and screenshots 12 px.
- Charts, stat cards: none.
- Equal cards side by side: "Also in the app" is an even 4 by 2 grid of plain text, not cards. Keep: concrete and short.
- Logo: real logo, kept as is.

### Landing page and hero
- Badge above the headline: none.
- Generic headline: no ("Design a scene, then give it a timeline").
- Stacked and centred hero: no; asymmetric split, real product view across the band edge.
- Three or more buttons: no; status line plus one secondary button.
- Social proof without a source: none.
- Parallax: none (the scroll section is gone).

### Visuals
- Filler: none. One real screenshot in the hero, real crops as evidence in the feature rows.
- Image that does not blend: the image-editing screenshot is the app's cooler Mist theme next to the warmer Washi shots. Left: it is the only shot of the unreleased tools, and the brief forbids building the app to retake it.

### Motion
- Looping decoration: none. Clips loop only while on screen, with a pause button: they are the product's output.
- `transition-all`, hover scale: none; named properties, press scales to 0.98.
- Bouncy springs: none.
- Several entrances on load: one, the logo draw-on on the home page, skipped with reduced motion.
- The logo draw-on uses its own in-out curve beside the site's `--ease`. Keep: it draws a stroke, and the logo is left as it is.

### Template look
- Grey page, Inter, brand colour on one button: no; warm bands, kachi-iro, beni-hi marks.
- Would the page fit another product with the name swapped: no; timeline ruler marks, real editor, real clips, signage and menu-board copy.

## Direction

- **Product.** A free Linux desktop app for designing and animating motion graphics for screens, menus and social posts, made by someone who makes signage.
- **Character.** Patient, exact, a little warm.
- **World.** The picture scroll the app is named after: washi paper, sumi ink, indigo cloth, one red seal, read a scene at a time.
- **Moments.** The real editor window lying across the edge of the dark hero; the strip of real exported clips.
- **Signature.** The small timeline ruler with a red playhead and a timecode before each section heading.

## Fixes, by pass

1. **Spacing.** Header menu button pulled to the gutter (`-12px`), brand focus radius 8, `.formats dt` 4 px, plan card padding 24 to 32, "Mac and Windows come later" set apart from the list.
2. **Colour.** Nothing to change.
3. **Icons.** One size and stroke: 18 px, 1.5 stroke, default in `Icon.astro`, header menu icons 18.
4. **Copy.** Dropped the period on the one-line platform note; the MP4 row now says "For signage players, phones and social posts".
5. **Type.** Small text on three sizes only: 15 (secondary), 13 (meta) and the 17 body. Legend numbers 13 and tabular. Footer 15 with a 13 px legal line.
6. **Layout.** Nothing to change.
7. **Details.** Nothing to change; radii already nest (10 controls, 12 cards).
8. **Visuals.** Nothing to change (see the image-editing note above).
9. **Motion.** Nothing to change.
