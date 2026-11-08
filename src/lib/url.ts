// Internal links and public files, prefixed with the site's base path, so the
// same build works at a sub-path (GitHub Pages: /emaki-site/) or at the root
// of a custom domain (BASE_PATH=/). Pass paths as they look from the root:
// url('/showcase'), url('/#inside'), url('/favicon.svg').
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

/** The current page's path without the base, for "is this the page I'm on". */
export const pagePath = (pathname: string) => {
  const p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return p.replace(/\/$/, '') || '/';
};
