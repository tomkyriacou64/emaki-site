// Builds public/og.png (1200×630): the stacked colour logo on the site's washi paper.
// Runs before every `npm run build`; run on its own with `npm run og`.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const here = (p) => fileURLToPath(new URL(p, import.meta.url));
const W = 1200;
const H = 630;

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="#F7F1E6"/>
</svg>`);

const logoSvg = await readFile(here('./logo-stacked.svg'));
const logo = await sharp(logoSvg, { density: 300 }).resize({ height: 400 }).png().toBuffer();
const { width: lw, height: lh } = await sharp(logo).metadata();

await sharp(background)
  .composite([{ input: logo, left: Math.round((W - lw) / 2), top: Math.round((H - lh) / 2) }])
  .png({ compressionLevel: 9 })
  .toFile(here('../public/og.png'));

console.log('og.png written');
