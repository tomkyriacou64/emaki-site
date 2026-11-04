import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
const [url, out, n] = process.argv.slice(2);
const port = 9800 + Math.floor(Math.random() * 100);
const profile = mkdtempSync(join(process.env.SCRATCH, 'chr-'));
const chrome = spawn('chromium', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws;
for (let i = 0; i < 50; i++) { try { const l = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); ws = new WebSocket(l.find((t) => t.type === 'page').webSocketDebuggerUrl); break; } catch { await sleep(200); } }
await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true })).result?.result?.value;
await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 720, deviceScaleFactor: 1, mobile: false });
await send('Page.enable');
await send('Page.navigate', { url });
await sleep(1500);
console.log('points t0', JSON.stringify(await ev('[toScreen(1540,900,0), toScreen(1661,1188,0), toScreen(1300,650,0)]')));
for (let i = 0; i < Number(n); i++) {
  await ev(`setT(${i / 30}); new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))`);
  const s = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(join(out, `f${String(i).padStart(4, '0')}.png`), Buffer.from(s.result.data, 'base64'));
}
chrome.kill(); process.exit(0);
