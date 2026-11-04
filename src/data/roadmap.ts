// The roadmap for /roadmap: what's being worked on, what's planned next and
// bigger ideas for later. No dates and no promises. Written from the user's
// side; sources are the app repo's docs/roadmap.md and the backlog in
// .project/PLAN.md.

export interface RoadmapGroup {
  id: string;
  title: string;
  note: string;
  items: { title: string; text: string }[];
}

export const roadmap: RoadmapGroup[] = [
  {
    id: 'now',
    title: 'Now',
    note: 'Being worked on.',
    items: [
      { title: 'Open source', text: 'Making the code public under MIT and Apache 2.0, and welcoming contributors.' },
      { title: 'Emaki 1.0', text: 'The first stable release, after the current preview builds.' },
      {
        title: 'Very large projects',
        text: 'Projects with thousands of layers that render, play smoothly and export, without slow frames.',
      },
      {
        title: 'Tested on more Linux machines',
        text: 'Clipboard, input methods, the eyedropper and Wayland on more distributions and graphics cards.',
      },
    ],
  },
  {
    id: 'next',
    title: 'Next',
    note: 'Planned for the releases after that.',
    items: [
      { title: 'macOS and Windows', text: 'Builds for Mac (Apple silicon and Intel) and 64-bit Windows.' },
      { title: 'One design, every format', text: 'Story, square and landscape versions of an artboard in one step.' },
      { title: 'Shared brand kits', text: 'Keep brand kits in a synced folder, so a team stays on the same colours and type.' },
      { title: 'Data-driven templates', text: 'Load a spreadsheet and export one video per row.' },
      { title: 'Auto captions', text: 'Turn speech in a video into animated subtitles.' },
      { title: 'Audio-driven motion', text: 'Snap keyframes to the beat, or let loudness drive any property.' },
      { title: 'Richer motion', text: '3D rotation and perspective, a shape repeater, wiggly paths and simple particles.' },
      { title: 'Wiggle, loop and time remap', text: 'Switch them on for any property, without writing expressions.' },
      { title: 'Parenting', text: 'Link a layer to another, and use controller layers to drive whole groups.' },
      { title: 'Shape tools', text: 'Combine shapes (union, subtract, intersect) and smooth their corners.' },
      { title: 'More export formats', text: 'Animated WebP, APNG, dotLottie and SVG animation for the web.' },
      { title: 'Audio editing', text: 'Fades, several tracks and waveform editing.' },
      { title: 'Lottie import', text: 'Open Lottie files as editable animations.' },
      {
        title: 'Figma plugin in the Community',
        text: 'Install the plugin from inside Figma instead of as a development plugin.',
      },
      { title: 'Previews everywhere', text: 'Effects, looks, transitions and fonts shown on your layer as you hover them.' },
    ],
  },
  {
    id: 'later',
    title: 'Later',
    note: 'Bigger ideas, still being thought through.',
    items: [
      {
        title: 'AI help, on your terms',
        text: 'Ask for an animation in plain words. Off by default, every change undoable, with a model on your own computer or your own key.',
      },
      { title: 'Background removal for photos', text: 'An optional model that runs on your computer; nothing is uploaded.' },
      { title: 'Templates library', text: 'A larger set of editable templates that pick up your brand kit.' },
      {
        title: 'Sync and collaboration you host',
        text: 'Your own server for backup across computers, review links and, in time, working together live.',
      },
      { title: 'Plugins and scripting', text: 'Custom presets and batch exports.' },
    ],
  },
];
