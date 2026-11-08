# Landing page audit, round 2 (2026-11-08)

A product designer's review of the page as it stood after round 2 (warm bands,
commit 33f34bc), compared with the app itself, and the plan for round 3.

## The idea

**The page is a timeline you scrub by scrolling, laid out like an emaki.** An
emaki tells a story scene by scene along one long strip; Emaki's own editor
tells an animation the same way, along a timeline. So the page borrows the
editor's parts, not decoration: every section already carries a small ruler
with a red playhead and a timecode; the feature list becomes a timeline whose
line fills as you scroll past it, with a keyframe diamond for each feature; the
editor screenshot rises and flattens into view the way a canvas comes up when
you open a project; the clips play, because this is a motion app and stills
alone undersell it; and the name is told on a real picture scroll that unrolls
as you read. Ruler, playhead, keyframe, scroll: four parts of one idea, all
taken from the app.

## What the app is (from the screenshots, roadmap and UI guidelines)

- **Timeline first.** Every screenshot has the timeline across the bottom
  third; the red playhead (`#E2483A` timecode chip) is the one loud colour in
  the chrome. Animation is bars you drag, presets that unfold into keyframes,
  a graph editor.
- **Quiet, warm chrome.** The Washi theme is paper and cream with sumi text;
  the guidelines forbid glows, gradients in the interface, emoji, uppercase
  labels and decorative pulsing. Colour comes from the user's work.
- **Made for screens.** Templates are menu boards, café screens, sale stories;
  live phone, laptop and TV mockups sit beside the artboards; export sizes
  follow where the video plays.
- **Local first.** No account, plain project folders, autosave and version
  history; the network only for Google Fonts and Figma import; the AI image
  tools download a model once and run locally.
- **Image editing (unreleased branch).** Paint, select (lasso, wand, Select
  subject), adjustments, background and object removal, fill from the
  surroundings, perspective, upscale, copy and paste edits; each edit is a
  row with an eye toggle, the original kept underneath.
- **The name.** Emaki, the picture scroll, read a scene at a time: the same
  shape as a timeline.

## UX findings

| # | Finding | Fix |
| --- | --- | --- |
| U1 | A first-time visitor (a signage designer, a café owner, a motion designer) needs, in order: what it is and for whom, proof it makes good work, how it works, whether it fits their screens and machine, what it costs, how to get it. The page answers these, but "how it works" is spread over three bands with no thread between them | Make the feature bands read as one timeline: a running line with a keyframe per feature, and section timecodes that keep counting |
| U2 | It is a motion app, but above the fold everything is still. The first moving thing is the clip strip, a full screen down | Let the hero screenshot move with the scroll (it rises and flattens), and bring the clips up straight after the editor |
| U3 | The clip strip scrolls sideways and the fourth clip is cut off at 1440 px; visitors rarely scroll a strip sideways, so one clip in four is never seen | Hang all four clips in one justified row at one height (wraps on phones); nothing hidden off screen |
| U4 | The editor legend is a separate light band with four short notes; it reads as a footnote and splits the hero from the proof | Keep the legend, but tighten it to the screenshot (one band, less space) so the eye goes screenshot, legend, clips |
| U5 | Signage and menu boards are named once in the hero lede and once in the export copy; a signage visitor has to infer that the app suits them | Say it where it matters: the clips caption names menu boards and screen loops; the export band keeps "signage players" |
| U6 | The name and the story were cut; the user liked the scroll, and it explains the palette, the ruler marks and the name in one go | Bring the scroll back as its own band, complete on load, before "Get Emaki" |
| U7 | Image editing is a row among finished features with only a small label; it is easy to read as shipped | Keep it last in its band, labelled "Coming in the next release" beside its timecode |
| U8 | The call to action: "Coming soon to Linux" plus "See what it makes" in the hero, and again on the plan card. Clear and honest; no change, wiring untouched | None |
| U9 | Attention drops in the "Also in the app" grid: eight equal blocks after a long feature run | Keep it (it answers "does it do X"), but give it its own heading and a quieter, denser list |

## UI findings

| # | Finding | Fix |
| --- | --- | --- |
| I1 | Every feature band uses the same row (copy left, picture right, hairline between); six of them in a row feel the same | The first band becomes a timeline (copy and picture hung off a vertical ruler); the video band keeps rows but with the picture first; export stays a four-column table |
| I2 | Section heads are all the same size and layout, so bands only differ by colour | Keep the ruler marks (they are the signature) but let the timeline band and the scroll band have their own head layout |
| I3 | Crops on dark bands are light rectangles with a hairline; fine, but the graph-editor and text-on-path crops are very bright on dark | They now sit on light bands (the timeline band is shiro-neri); the dark video band holds the photo and video crops, which have their own colour |
| I4 | Type scale is fine (Outfit headings, Inter text, 13 / 15 / 17 body steps) | Keep; the scroll section brings back its brush face only for its Japanese characters, loaded only there |
| I5 | Density: hero lede, legend and plan copy are well measured; "Also in the app" is airy for what it is | Denser list for "Also in the app" |
| I6 | The footer is a light band after a light "Get" band in the new order | Footer becomes sumi, so the page opens and closes on ink |

## What's missing, compared with the app

- **Motion.** Fixed with the hero scroll animation, the filling timeline,
  the unrolling scroll and the clips row.
- **The playhead.** The app's one loud colour is its red playhead; the site
  uses it on each ruler. The timeline band now uses it as the line that fills.
- **Keyframes.** The app's diamond keys appear as the markers on the
  feature timeline.
- **Unchanged on purpose:** no new claims, no other apps' names, the Figma and
  Google Fonts naming and the one-line story stay as they are (open
  questions for the user).

## Aceternity UI patterns used (rebuilt in Astro, CSS and a little vanilla JS)

- **Container scroll animation** (3D rotate on scroll) for the hero editor
  screenshot: CSS scroll-driven animation, a small tilt only, flat with
  reduced motion or in browsers without scroll timelines.
- **Timeline** (sticky header and a line that fills on scroll) for "What's
  inside": a sticky label column, a vertical ruler and a beni-hi line that
  fills as you scroll, with a keyframe diamond per feature.
- **Hero section** pattern (asymmetric split, product view below) kept from
  round 2.
- Not used: bento grid, beams, spotlight, sparkles, parallax and particle
  backgrounds (glow and decoration; they do not fit the app's rules).

## Follow-up from the user (after round 3)

- **Get Emaki** reads in order: what it costs (the Free card, its checklist and
  the privacy note), where to get it (Linux, Mac and Windows, each with a
  button: Linux follows the call to action's links, a download once
  `APPIMAGE_URL` is set, else the notify sign-up; Mac and Windows offer the
  sign-up when `NOTIFY_URL` is set and otherwise show a quiet "Coming soon"
  that does nothing), then open source (the code will be open, the story line,
  the contributing link). The "Runs on" list (glibc, Vulkan, Wayland or X11)
  is gone from the home page; the same facts stay on Get started.
- **Export heading**: "Six formats, each for a job" became "Export to video,
  Lottie, GIF or stills".
