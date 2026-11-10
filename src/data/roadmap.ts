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
    note: 'Being worked on',
    items: [
      { title: 'Open source', text: 'Making the code public under MIT and Apache 2.0, and welcoming contributors.' },
      { title: 'Emaki 1.0', text: 'The first stable release, after the current preview builds.' },
      {
        title: 'Very large projects',
        text: 'Projects with thousands of layers that render, play smoothly and export, without slow frames.',
      },
    ],
  },
  {
    id: 'next',
    title: 'Next',
    note: 'Planned for the releases after that',
    items: [
      { title: 'macOS and Windows', text: 'Builds for Mac (Apple silicon and Intel) and 64-bit Windows.' },
      { title: 'One design, every format', text: 'Story, square and landscape versions of an artboard in one step.' },
      { title: 'Audio-driven motion', text: 'Snap keyframes to the beat, or let loudness drive any property.' },
      { title: 'Audio editing', text: 'Fades, several tracks, waveform editing and free music to use.' },
      {
        title: 'Figma plugin in the Community',
        text: 'Install the plugin from inside Figma instead of as a development plugin.',
      },
      { title: 'Handles on the canvas', text: 'Drag a gradient’s start and end, or a shadow’s offset, right on your layer.' },
    ],
  },
  {
    id: 'later',
    title: 'Later',
    note: 'Bigger ideas, still being thought through',
    items: [
      {
        title: 'Describe an animation',
        text: 'Type what you want to happen and an optional assistant builds it. Off by default, every change can be undone, and it uses a model on your computer or your own key.',
      },
      {
        title: 'Connect an AI assistant',
        text: 'Let an assistant you already use build and edit projects. Off by default, only on your computer, and every change can be undone.',
      },
      { title: 'Templates library', text: 'A larger set of editable templates that pick up your brand kit.' },
      {
        title: 'Sync and collaboration you host',
        text: 'Your own server for backup across computers, review links and, in time, working together live.',
      },
      { title: 'Automatic updates', text: 'New versions arrive without downloading them again by hand.' },
      { title: 'Mobile companion', text: 'Preview projects and make quick edits on your phone.' },
    ],
  },
];
