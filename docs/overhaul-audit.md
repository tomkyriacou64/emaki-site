# Landing page audit (overhaul, 2026-11-08)

Every section and element of the home page (`src/pages/index.astro`) before the
overhaul, what it was for, and what happens to it. A section stays only if it
answers a question a visitor has: what is it, what does it make, why use it,
does it run on my machine, what does it cost, how do I get it, what's next.

## Site-wide

| Element | What it was for | Verdict | Reason |
| --- | --- | --- | --- |
| Light and dark themes (`prefers-color-scheme` in `global.css`, two `theme-color` metas, `color-scheme: light dark`) | Follow the visitor's system | Cut | The user wants one designed look: a dark hero, then warm light bands |
| Four type families (Inter, Outfit, Newsreader, Yuji Syuku) | Body, headings, one pull quote, the scroll's brush lettering | Merge | Two are enough: Outfit for headings, Inter for text. Newsreader and Yuji only served the pull quote and the scroll, which go |
| Pastel tokens `--pink`, `--butter`, `--mint` | Colours for the drawn hero editor | Cut | Only the hero mock used them |
| Header (logo, Features, Showcase, Use cases, Roadmap, Changelog, Get started) | Navigation | Keep | Real pages; sits on the dark hero on the home page |
| Footer (logo, three link lists, licence line) | Navigation and legal | Keep, trim | "Story" and "The name" links pointed at sections that go |
| `.mark` timeline ruler with a timecode before each heading | The site's own signature: the page read as a timeline | Keep | Specific to a timeline app; quiet; the one detail that carries through |

## Home page sections

| # | Section / element | What it was for | Verdict | Reason |
| --- | --- | --- | --- | --- |
| 1 | Hero headline "Design a scene, then give it a timeline" | What it is | Keep | Plain and specific to the product |
| 1 | Hero lede | What it is, offline, no account | Keep, rewrite | Add who it's for (signage, menus, social) and the platform |
| 1 | Hero call to action (status line or notify/download, "See what it makes") | How to get it | Keep | Wiring untouched (`Cta.astro`, `NOTIFY_URL`, `APPIMAGE_URL`) |
| 1 | `HeroEditor` animated mock of the editor (825 lines) | Show the product | Cut | A drawn imitation of the app, not the app; its timeline labels shrink to ~10 px on phones (known open issue). Replaced by the real editor screenshot |
| 2 | "The editor": pinned screenshot with four numbered parts and a legend | What the window looks like | Merge into hero | The real screenshot becomes the hero visual; the four-part legend sits under it. Removes a second big screenshot section that said the same as the hero |
| 2 | "Everything sits where you can see it, and nothing opens in a separate app" | Reassurance | Cut | Vague claim |
| 3 | "Made in Emaki": strip of four template clips | What it makes | Keep | Real exported clips, real sizes; the only motion on the page |
| 4 | "What's inside": Design, Animate, Type, Track, Colour, Export rows | Real feature detail | Keep | Concrete and checkable, each with a real crop or list |
| 4 | Track row caption about the footage | Honesty about the demo clip | Keep, shorten | Useful, but long |
| 4 | "Also in the app" grid (masks, components, brand kits, version history, audio and video, effects, templates, Figma plugin) | Breadth | Keep | Short, factual |
| 4 | Figma plugin footnote | How the plugin is installed | Keep, shorten | Factual |
| 4 | Image editing | Coming feature | Add, small | Real screenshot from the unreleased branch, marked as coming in the next release; no claims beyond what exists |
| 5 | "The name": scroll-driven emakimono (843 lines, ~4,000 px tall, brush font) | The meaning of the name | Cut | Decoration: it answers no visitor question and is a long empty band when not scrolled live. The meaning survives as one line in the footer |
| 6 | "The story" | Who makes it and why | Merge into "Get Emaki" | Two sentences are enough. Cut the other apps' names and the "essentially X with animation" comparison (no other apps' names in copy) |
| 6 | Serif pull quote | Emphasis | Cut | Repeats "free" and "open source soon", already said twice |
| 7 | "Free, private and yours to keep" three terms | What it costs, privacy | Keep, merge | Becomes one plain plan card (free, offline, no account) in the closing dark band |
| 7 | "No telemetry and zero tracking or reporting: no sign-up, analytics or crash reports. Nothing about you or your work is sent anywhere." | Privacy | Keep, shorten | Said the same thing three ways |
| 7 | Caveat on when it goes online | Honesty | Keep | Factual and useful |
| 7 | "Linux now, with Mac and Windows on the way" | Platforms | Keep, fix | Contradicted the "Coming soon to Linux" status beside it. Now "Linux first; Mac and Windows later" |
| 7 | System needs (from Get started: 64-bit Linux, glibc 2.30+, Vulkan, Wayland or X11) | Does it run on my machine | Add | The page never said; facts copied from the Get started page |
| 7 | Get started, FAQ, Roadmap links | Next step | Keep | Real pages |
| 7 | "Next on the roadmap" line | What's next | Keep | From `docs/roadmap.md` (Next: work at scale) |

## Copy removed that the user may want back

- "Emaki is essentially Figma with animation, plus motion tracking." (names another app)
- "For years I made our content by designing in Figma, then animating it in Jitter. Jitter is good, but it was missing things I needed." (names other apps)
- "Everything sits where you can see it, and nothing opens in a separate app." (vague)
- The name told on the scroll ("Emaki means picture scroll", read right to left).
