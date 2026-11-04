// Clips for /showcase, all made in Emaki: each is one of the app's built-in
// templates, exported with Emaki 0.9.2's `emaki --export` and re-encoded
// small for the web. Files are in public/showcase/<file>.mp4 with a poster
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
    caption: 'A square announcement: the words and the button animate in on a soft gradient card.',
    width: 960,
    height: 960,
    use: 'Social',
  },
  {
    file: 'vertical-story',
    title: 'Vertical story',
    caption: 'A 9:16 sale story, with the text and soft shapes animating in.',
    width: 720,
    height: 1280,
    use: 'Social',
  },
  {
    file: 'kinetic-type',
    title: 'Kinetic type',
    caption: 'Words land line by line while the background changes colour.',
    width: 1280,
    height: 720,
    use: 'Events',
  },
  {
    file: 'logo-reveal',
    title: 'Logo reveal',
    caption: 'A glowing mark pops in and morphs into a new shape, then the name rises letter by letter.',
    width: 1280,
    height: 720,
    use: 'Brand',
  },
  {
    file: 'mask-reveal',
    title: 'Mask reveal',
    caption: 'Masks uncover each layer in its own way: the card wipes in, then the line beneath it.',
    width: 1280,
    height: 720,
    use: 'Brand',
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
 * clip keeps its own shape. Logo reveal and Mask reveal are left off for now:
 * they still show the old violet gradient card, and come back once they are
 * exported again in the new theme.
 */
export const showcaseRows = [
  ['noodle-bar', 'morning-coffee'],
  ['social-post', 'kinetic-type', 'vertical-story'],
];

export const byFile = (file: string) => clips.find((c) => c.file === file)!;
