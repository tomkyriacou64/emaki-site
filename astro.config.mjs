// @ts-check
import { defineConfig } from 'astro/config';

// The site lives on GitHub Pages as a project site, under a sub-path:
// https://tomkyriacou64.github.io/emaki-site/. For a custom domain later, build
// with SITE_URL=https://your-domain BASE_PATH=/ (see README.md). SITE_URL makes
// the social card (og:image) and canonical link absolute.
const base = process.env.BASE_PATH ?? '/emaki-site';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://tomkyriacou64.github.io',
  base,
  build: { inlineStylesheets: 'always' },
  // Compressing drops the line break between a word and an inline tag on the
  // next line ("See<a>Contributing</a>"), so keep the whitespace as written.
  compressHTML: false,
  // Showcase and Use cases are one page now.
  redirects: { '/use-cases': `${base.replace(/\/$/, '')}/showcase` },
});
