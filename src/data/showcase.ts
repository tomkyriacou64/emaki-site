// Clips for /showcase, all made in Emaki: built-in templates exported with
// Emaki 0.9.3's `emaki --export` (the menu boards with 0.9.2), plus the price
// tag made with motion tracking, re-encoded small for the web. Files are in public/showcase/<file>.mp4 with a poster
// frame at <file>.webp. See README.md for how to make more.

export interface Clip {
  file: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  /** What it's good for, for the use-case tags. */
  use: 'Signage' | 'Social' | 'Brand' | 'Events' | 'Tracking';
}

export const clips: Clip[] = [
  {
    file: 'morning-coffee',
    title: 'Morning coffee',
    caption: 'A landscape menu board for a café screen, with prices and a featured deal that changes every few seconds.',
    width: 1280,
    height: 720,
    use: 'Signage',
  },
  {
    file: 'noodle-bar',
    title: 'Noodle bar',
    caption: 'A portrait menu board for a screen turned on its side, with signature bowls and prices.',
    width: 720,
    height: 1280,
    use: 'Signage',
  },
  {
    file: 'social-post',
    title: 'Social post',
    caption: 'A square post for a spring makers market: the title, the date and the button land in turn, with a vase beside them.',
    width: 960,
    height: 960,
    use: 'Social',
  },
  {
    file: 'vertical-story',
    title: 'Vertical story',
    caption: 'A 9:16 weekend sale story for an outfitters: the 40% off sticker pops in over the sale card.',
    width: 720,
    height: 1280,
    use: 'Social',
  },
  {
    file: 'logo-reveal',
    title: 'Logo reveal',
    caption: 'A dot turns into a diamond, and the name Northwind rises in letter by letter.',
    width: 1280,
    height: 720,
    use: 'Brand',
  },
  {
    file: 'mask-reveal',
    title: 'Mask reveal',
    caption: 'A title card for a woodblock print exhibition: a circle mask opens the card and a wipe uncovers the dates.',
    width: 1280,
    height: 720,
    use: 'Events',
  },
  {
    // Not a template: a project built with Emaki's motion tracking (see README).
    file: 'price-tag-tracking',
    title: 'Price tag',
    caption: 'A price tag pinned to a cup and spoon with motion tracking, over a drawn café table and a handheld camera.',
    width: 1280,
    height: 720,
    use: 'Tracking',
  },
];

/**
 * The wall on /showcase, row by row; each row is hung at one height, so every
 * clip keeps its own shape. Kinetic type is left off: its template still reads
 * as placeholder copy.
 */
export const showcaseRows = [
  ['noodle-bar', 'morning-coffee'],
  ['social-post', 'logo-reveal', 'vertical-story'],
  ['mask-reveal', 'price-tag-tracking'],
];

export const byFile = (file: string) => clips.find((c) => c.file === file)!;
