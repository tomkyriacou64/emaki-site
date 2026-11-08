// Links used across the page (see README.md). An empty string hides whatever
// the link would drive, so the page never points at something that isn't there
// yet. NOTIFY_URL and APPIMAGE_URL can also come from the build environment
// (GitHub repository variables in the Pages workflow).
const env = (name: string) => (typeof process !== 'undefined' && process.env[name]) || '';

/**
 * Where "Get notified when it's out" goes: a sign-up page on a mailing list
 * service, opened in the same tab. While it is empty the call to action reads
 * "Coming soon to Linux", with no button.
 */
export const NOTIFY_URL = env('NOTIFY_URL');

/**
 * Direct link to the latest Linux AppImage, for example a GitHub release asset:
 * https://github.com/tomkyriacou64/emaki/releases/latest/download/Emaki-x86_64.AppImage
 * While it is empty there is no download button.
 */
export const APPIMAGE_URL = env('APPIMAGE_URL');

/**
 * The public source repository, once it is open, for example
 * https://github.com/tomkyriacou64/emaki. While it is empty there are no
 * GitHub, releases, licence or Figma plugin links.
 */
export const GITHUB_URL = '';

export const RELEASES_URL = GITHUB_URL && `${GITHUB_URL}/releases`;
export const FIGMA_PLUGIN_URL = GITHUB_URL && `${GITHUB_URL}/tree/main/figma-plugin`;
export const LICENCE_URL = GITHUB_URL && `${GITHUB_URL}/blob/main/LICENSE`;
