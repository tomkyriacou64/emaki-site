// Builds public/og.png (1200×630) from the stacked colour logo.
// Runs before every `npm run build`; run on its own with `npm run og`.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const here = (p) => fileURLToPath(new URL(p, import.meta.url));
const W = 1200;
const H = 630;

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="a" cx="0.15" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#FFB3C7" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#FFB3C7" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b" cx="0.9" cy="0.95" r="0.7">
      <stop offset="0" stop-color="#B8B3FF" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#B8B3FF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="c" cx="0.85" cy="0.05" r="0.5">
      <stop offset="0" stop-color="#A8E6CF" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#A8E6CF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#FFF6EA"/>
  <rect width="100%" height="100%" fill="url(#a)"/>
  <rect width="100%" height="100%" fill="url(#b)"/>
  <rect width="100%" height="100%" fill="url(#c)"/>
</svg>`);

const logoSvg = await readFile(here('./logo-stacked.svg'));
const logo = await sharp(logoSvg, { density: 300 }).resize({ height: 400 }).png().toBuffer();
const { width: lw, height: lh } = await sharp(logo).metadata();

await sharp(background)
  .composite([{ input: logo, left: Math.round((W - lw) / 2), top: Math.round((H - lh) / 2) }])
  .png({ compressionLevel: 9 })
  .toFile(here('../public/og.png'));

console.log('og.png written');
