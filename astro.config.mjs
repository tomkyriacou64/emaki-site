// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL to the address the site will live at, so the social card
// (og:image) and canonical link are absolute. See README.md.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://emaki.example',
  build: { inlineStylesheets: 'always' },
});
