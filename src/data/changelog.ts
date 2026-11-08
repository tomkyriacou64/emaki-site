// Release notes for /changelog, newest first. To add a release, put a new
// entry at the top (see README.md). Text in `backticks` shows as code.

export interface Release {
  version: string;
  /** Release date, YYYY-MM-DD. */
  date: string;
  summary: string;
  sections: { title: string; items: string[] }[];
}

export const releases: Release[] = [
  {
    version: '0.9.5',
    date: '2026-11-08',
    summary: 'Image editing arrives: fix, cut out and adjust pictures right inside Emaki, without leaving the canvas.',
    sections: [
      {
        title: 'New',
        items: [
          'Edit image. Double-click a picture, or press Edit image in the Image section, to edit it in place. Every edit stays separate and can be changed or taken off later: Revert takes them all off, and holding Compare shows the original.',
          'Paint, clone and heal, with soft brushes and an eraser that only takes off paint.',
          'Selections: rectangle, ellipse, lasso, polygon, magic wand and smart select, with add, subtract, grow, shrink, invert and smooth edges. Move or transform a selection, or copy and cut it to a new layer.',
          'Adjustments limited to a selection: exposure, contrast, colour and more, each animatable.',
          'Remove (`R`): brush over something to take it out of the photo. Fill fills a selection from its surroundings.',
          'Remove background and Select subject in one click.',
          'Find whole objects: smart select picks out a whole object under the pointer.',
          'Perspective and straighten (`P`): drag four corners onto a menu, a shop front or a screen shot at an angle and it comes out square.',
          'Copy and paste edits onto many pictures at once with Copy style and Paste style (`Ctrl+Alt+C`, `Ctrl+Alt+V`). Background removal runs again on each picture.',
          'The AI tools run on your computer. Each downloads its model once, the first time you use it, and works offline after that.',
        ],
      },
      {
        title: 'Improved',
        items: [
          'Empty sections like Stroke or Effects show just their title and +, with nothing to fold.',
          'Clearer buttons for Compare and Revert.',
          'Dragging files in works on Wayland.',
        ],
      },
      {
        title: 'Known limits',
        items: ['Linux AppImage only. Mac and Windows come later.'],
      },
    ],
  },
  {
    version: '0.9.3',
    date: '2026-11-04',
    summary: 'A fresh look: new colour themes, new sample content and a cleaner interface.',
    sections: [
      {
        title: 'New',
        items: [
          'Four colour themes in Settings: Graphite (neutral charcoal, the default), Osaka (ink black with amber), Mist (light grey) and Washi (warm paper with indigo). Dark becomes Graphite and Light becomes Mist.',
          'A new demo project and reworked templates: Social post, Logo reveal, Vertical story, Mask reveal, Variable weight, Emaki logo and Limited offer.',
          'The eyedropper shows a magnifier with the pixels under the pointer, the colour and its hex value.',
        ],
      },
      {
        title: 'Improved',
        items: [
          'A smaller pen cursor with a thin outline.',
          'Timeline rows match the Layers panel and line up with it.',
          'Switches that are just on, like loop and snapping, no longer use the highlight colour.',
          'Graph editor values are easier to read, all Add animation tabs fit, and Export uses one kind of choice for format and size.',
          'The FFmpeg notice on Home wraps properly and shows its install commands clearly.',
          'Tidier spacing and shorter hints throughout.',
        ],
      },
    ],
  },
  {
    version: '0.9.2',
    date: '2026-11-03',
    summary: 'Stability and performance release, after a full audit of the app.',
    sections: [
      {
        title: 'Fixed',
        items: [
          'If autosave failed, Emaki also stopped keeping the copies it uses to bring your work back after a crash. It now always keeps them.',
          'Fixed several ways work could be lost: adding a kit’s font to its own kit emptied the font, version snapshots moved media out of the project, relinking to a different file of the same size didn’t copy it, and a damaged settings file reset every setting (the damaged file is now set aside instead of lost).',
          'Make slideshow no longer deletes layers that aren’t pictures or videos, and Paste to replace no longer deletes the targets when nothing was pasted.',
          'Fixed crashes when dragging slides or gradient stops, cutting out an empty image, and with very large style or animation-group numbers.',
          'Exports can’t hang any more: if FFmpeg stops responding the export gives up after a while, and Cancel always works. A video that can’t be read now stops the export with a message instead of exporting blank frames. Reading sound has a time limit too, and a full disk gets a plain message.',
          'Lottie export of long, busy projects uses far less memory: 20 seconds of a 1000-layer project took 6.7 GB and now takes 0.9 GB, with the same result.',
          'Some animations stopped short of where they should end: chained fills, Change on a counter and Fade in. They now finish on the right values. Text styling that starts partway through a letter now styles that whole letter.',
          'Error messages read as sentences.',
        ],
      },
      {
        title: 'Faster',
        items: [
          'Projects with many blurred, shadowed or glowing layers use much less memory: a 1000-layer project needs 0.37 GB instead of 1.9 GB, and a 5000-layer project now plays in about 400 MB instead of running out of memory.',
        ],
      },
      {
        title: 'Changed',
        items: ['New projects are saved as `.emaki`. Existing `.motion` projects keep their names and open as before.'],
      },
      {
        title: 'Known limits',
        items: [
          'Scenes with more than about 2000 layers (about 3000 with effects) are too complex to render or export.',
          'Very busy projects can show the occasional slow frame (about half a second) at certain points on the timeline.',
          'Exporting from the command line (`emaki --export`) can’t be cancelled; if a video won’t play back, it waits until the time limit runs out.',
        ],
      },
    ],
  },
  {
    version: '0.9.1',
    date: '2026-11-02',
    summary: 'Security fixes, so projects and media from other people can’t harm your computer.',
    sections: [
      {
        title: 'Fixed',
        items: [
          'Saving a project someone else made can no longer write through hidden links planted in its folder (which could overwrite files elsewhere), and tidying unused media only ever touches the project’s own `assets` folder.',
          'Project media must be ordinary files inside the project; links to files outside it, devices and pipes are treated as missing.',
          'SVGs can no longer make Emaki read other files on your computer.',
          'FFmpeg only ever reads local files (never URLs) when opening, previewing or exporting projects.',
          'The bundled FFmpeg is now one fixed build, checked against its known fingerprint (SHA-256) before packaging.',
          'Reading a video’s details times out instead of freezing the window; cancelling an export can no longer hang.',
          'Very deeply nested project files and oversized version snapshots are refused instead of crashing.',
        ],
      },
    ],
  },
  {
    version: '0.9.0',
    date: '2026-11-02',
    summary: 'First preview release of Emaki, a native motion-graphics editor for Linux. FFmpeg is bundled for video export.',
    sections: [
      {
        title: 'Highlights',
        items: [
          'Design on a GPU canvas with artboards, shapes, text boxes, images, video and audio; animate on a timeline with presets, keyframes and a graph editor.',
          'Export to MP4, WebM, ProRes, GIF, Lottie and PNG; export all artboards at once.',
          'Home with folders, tags, templates (including ten menu boards) and device mockups.',
          'Colour adjustments for layers, images and artboards (also applied in exports).',
          'Light, Dark and the new Graphite theme.',
        ],
      },
      {
        title: 'Recent changes',
        items: [
          'Group X/Y measured from the artboard or frame; typing W/H on a group scales its children.',
          'Smoother scrubbing on heavy scenes (lower resolution only while dragging the playhead).',
          'Exporting all artboards asks before replacing files; GIFs play at 50 fps at most.',
          'Asks before scaling down images over 4096 px; clear message when dropping a file Emaki can’t open.',
          'Missing projects stay on Home with Locate… and Remove from list.',
          'Reset all shortcuts asks first; leftover partial export files are cleared.',
          'Sharper logo and app icon; tidier Typography section.',
        ],
      },
    ],
  },
];
