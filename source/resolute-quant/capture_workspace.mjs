/* Captures the workspace screenshots from the simulated backend (demo_workspace.py), using headless Edge.
 *
 *   node capture_workspace.mjs <python.exe> <ResoluteQuant-Private checkout> <output folder>
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const [python, checkout, out] = process.argv.slice(2);
const PORT = 8796, DEBUG = 9336;
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const HERE = dirname(fileURLToPath(import.meta.url));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
mkdirSync(out, { recursive: true });

const SEED = `
try{
  localStorage.setItem('subash.wsSymbol',JSON.stringify('ATLAS'));
  localStorage.setItem('subash.wsInterval2',JSON.stringify('1D'));
  localStorage.setItem('subash.mlist',JSON.stringify(['ATLAS','BOREAL','CORVUS','DRAKE','ELDER','FERRO']));
  localStorage.setItem('subash.sel',JSON.stringify('ATLAS'));
  localStorage.setItem('subash.chartStyle',JSON.stringify('heikin'));
  sessionStorage.setItem('rq.introSeen','1');
}catch(e){}`;

const server = spawn(python, [join(HERE, "demo_workspace.py"), checkout, String(PORT)], { stdio: "ignore", env: { ...process.env, PYTHONDONTWRITEBYTECODE: "1" } });
const profile = mkdtempSync(join(tmpdir(), "rq-capture-"));
spawn(EDGE, ["--headless=new", `--remote-debugging-port=${DEBUG}`, `--user-data-dir=${profile}`, "--no-first-run", "--disable-extensions", "--window-size=1600,1000", "--hide-scrollbars", "--enable-unsafe-swiftshader", "about:blank"], { stdio: "ignore" });
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
const go = async (hash, wait) => { await run(`location.hash='${hash}';return 1`); await sleep(wait); };

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
  await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/#overview` });
  await sleep(14000);
  await shot("workspace-overview");
  await go("risk", 9000);
  await shot("workspace-risk");
  await go("bots", 9000);
  await shot("workspace-bots");
  await go("markets", 6000);
  await run(`const i=document.getElementById('cmd');i.value='ATLAS';i.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));await new Promise(r=>setTimeout(r,3000));i.value='1D';i.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));await new Promise(r=>setTimeout(r,3000));return 1`);
  await shot("markets-heikin-ashi");
}

main().catch((e) => console.error(e)).finally(async () => {
  try { server.kill(); } catch { /* already stopped */ }
  spawnSync("powershell", ["-NoProfile", "-Command", `Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like '*${profile}*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }`]);
  await sleep(1500);
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* still held */ }
  process.exit(0);
});
