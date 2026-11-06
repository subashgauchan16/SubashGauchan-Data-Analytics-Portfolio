/* Captures the portfolio screenshots from the simulated backend, using headless Edge.
 *
 *   node capture.mjs <python.exe> <Resolute-Quant checkout> <output folder>
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const [python, checkout, out] = process.argv.slice(2);
const PORT = 8795, DEBUG = 9335;
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const HERE = dirname(fileURLToPath(import.meta.url));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
mkdirSync(out, { recursive: true });

const SEED = `
try{
  localStorage.setItem('subash.mlist',JSON.stringify(['ATLAS','BOREAL','CORVUS','^SIM500','SIMFX=X']));
  localStorage.setItem('subash.list',JSON.stringify(['ALPHA-USD','BRAVO-USD','CEDAR-USD','DELTA-USD','EMBER-USD','FJORD-USD']));
  if(!localStorage.getItem('subash.sel'))localStorage.setItem('subash.sel',JSON.stringify('ALPHA-USD'));
  if(!localStorage.getItem('subash.gran'))localStorage.setItem('subash.gran','300');
  sessionStorage.setItem('rq.introSeen','1');
}catch(e){}`;

const server = spawn(python, [join(HERE, "demo_server.py"), checkout, String(PORT)], { stdio: "ignore", env: { ...process.env, PYTHONDONTWRITEBYTECODE: "1" } });
const profile = mkdtempSync(join(tmpdir(), "rq-capture-"));
spawn(EDGE, ["--headless=new", `--remote-debugging-port=${DEBUG}`, `--user-data-dir=${profile}`, "--no-first-run", "--disable-extensions", "--window-size=1600,1000", "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
let id = 0, ws;
const pending = new Map();
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const key = ++id;
  pending.set(key, { resolve, reject });
  ws.send(JSON.stringify({ id: key, method, params }));
});
const run = async (code) => {
  const r = await send("Runtime.evaluate", { expression: `(async()=>{${code}})()`, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
  return r.result.value;
};
const shot = async (name) => {
  const { data } = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(join(out, `${name}.png`), Buffer.from(data, "base64"));
  console.log("saved", name);
};
const CMD = `const cmd=async(v,ms)=>{const i=document.getElementById('cmd');i.value=v;i.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));await new Promise(r=>setTimeout(r,ms))};`;

async function main() {
  await sleep(4000);
  const target = (await (await fetch(`http://127.0.0.1:${DEBUG}/json/list`)).json()).find((x) => x.type === "page");
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => { ws.onopen = r; });
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      const p = pending.get(m.id);
      pending.delete(m.id);
      m.error ? p.reject(new Error(m.error.message)) : p.resolve(m.result);
    }
  };
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 1600, height: 1000, deviceScaleFactor: 1, mobile: false });
  await send("Page.addScriptToEvaluateOnNewDocument", { source: SEED });
  await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/` });
  await sleep(16000);
  const state = await run(`return {pair:document.getElementById('pair').textContent,status:document.getElementById('statustext').textContent,asks:document.getElementById('asks').childElementCount,tape:document.getElementById('tape').childElementCount,banner:!document.getElementById('alertbar').hidden}`);
  console.log(JSON.stringify(state));
  await shot("terminal-crypto");
  await run(`${CMD} await cmd('ATLAS',6000);await cmd('1D',4000);return 1`);
  await shot("terminal-markets");
  await run(`${CMD} await cmd('ALPHA',2500);await cmd('15M',2500);const a=document.getElementById('alerttext').textContent;return a`);
  await run(`${CMD} await cmd('ALERT 1300',800);return 1`);
  server.kill();
  await sleep(5000);
  console.log(JSON.stringify(await run(`return {note:document.getElementById('ynote').hidden?null:document.getElementById('ynote').textContent,crypto:document.getElementById('statustext').textContent,y:document.getElementById('ystatustext').textContent}`)));
  await shot("terminal-offline");
}

main().catch((e) => console.error(e)).finally(async () => {
  try { server.kill(); } catch { /* already stopped */ }
  spawnSync("powershell", ["-NoProfile", "-Command", `Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like '*${profile}*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }`]);
  await sleep(1500);
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* still held */ }
  process.exit(0);
});
