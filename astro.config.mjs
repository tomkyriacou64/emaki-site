// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL to the address the site will live at, so the social card
// (og:image) and canonical link are absolute. See README.md.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://emaki.example',
  build: { inlineStylesheets: 'always' },
  // Compressing drops the line break between a word and an inline tag on the
  // next line ("See<a>Contributing</a>"), so keep the whitespace as written.
  compressHTML: false,
});
