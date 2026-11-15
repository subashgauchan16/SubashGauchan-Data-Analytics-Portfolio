"""Simulated backend for public screenshots of the Resolute Quant workspace.

    python demo_workspace.py <ResoluteQuant-Private checkout> [port]

It serves the terminal's real front end and runs the terminal's real workspace code, but every company is
fictional and every price is generated here from a seeded random walk. Saved research results, keys and
settings are never read: an audit hook refuses to open them, and the research folders point at an empty
temporary folder. Panels that need saved results say they are unavailable, or show invented placeholders
that are marked as such. A banner marks every page. Nothing here contacts a provider.
"""
import json
import math
import os
import queue
import random
import sys
import tempfile
import threading
import time
from datetime import date, datetime, timedelta
from datetime import time as dtime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(sys.argv[1]).resolve()
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 8799
sys.path.insert(0, str(ROOT))
os.environ["PYTHONDONTWRITEBYTECODE"] = "1"
sys.dont_write_bytecode = True

import market_data as md  # noqa: E402
import research_status as rs  # noqa: E402

# ---------------------------------------------------------------- nothing real is read
EMPTY = Path(tempfile.mkdtemp(prefix="rq-demo-"))
REFUSED = [p.resolve() for p in (ROOT / "data", ROOT / "research_reports", ROOT / "erp" / "data", Path(rs._data_folder()) / "data",
                                 Path(rs.research_market_folder()))]
REFUSED_NAMES = (".env", "terminal.config.json", "credentials", "vault")


def guard(event, args):
    if event != "open" or not args or not isinstance(args[0], (str, bytes, os.PathLike)):
        return
    try:
        path = Path(os.fsdecode(args[0])).resolve()
    except (OSError, ValueError):
        return
    if any(path == r or r in path.parents for r in REFUSED) or any(n in path.name.lower() for n in REFUSED_NAMES):
        raise PermissionError(f"The demo never opens {path.name}.")


sys.addaudithook(guard)
rs._data_folder = lambda: EMPTY
rs.research_market_folder = lambda: EMPTY / "market"
rs._ledger_path = lambda: EMPTY / "ledger.sqlite"

import workspace as ws  # noqa: E402

for name in ("_intraday_folder", "_volatility_folder"):
    setattr(ws.Workspace, name, lambda self, n=name: EMPTY / n)

BANNER = "SIMULATED DATA. Fictional companies and generated prices, not real market data or real model results."
CAL = md.us_calendar()
COMPANIES = {"ATLAS": ("Atlas Holdings", 182.4), "BOREAL": ("Boreal Foods", 64.15), "CORVUS": ("Corvus Systems", 318.9),
             "DRAKE": ("Drake Energy", 47.8), "ELDER": ("Elder Health", 121.3), "FERRO": ("Ferro Materials", 88.6),
             "GALE": ("Gale Retail", 23.9), "HALO": ("Halo Networks", 412.0)}
TEXT_SWAPS = [("Alpaca", "Simulated"), ("alpaca", "simulated"), ("ALPACA", "SIMULATED"), ("Coinbase Exchange", "Simulated exchange"),
              ("Coinbase", "Simulated"), ("COINBASE", "SIMULATED"), ("coinbase", "simulated"), ("Yahoo Finance", "Simulated"), ("YAHOO", "SIMULATED"), ("Yahoo", "Simulated"), ("IEX", "SIM")]
STEP = {"1M": 60_000, "5M": 300_000, "15M": 900_000, "1H": 3_600_000}


def swapped(text):
    for old, new in TEXT_SWAPS:
        text = text.replace(old, new)
    return text


def walk(seed, price, n):
    rng = random.Random(seed)
    vol, out = 0.012, []
    for _ in range(n):
        vol = max(0.006, min(0.03, vol * (0.95 + rng.random() * 0.1) + 0.0004 * rng.gauss(0, 1)))
        out.append(rng.gauss(0.0003, vol))
    level = price / math.exp(sum(out))
    rows = []
    for change in out:
        opened = level
        level *= math.exp(change)
        wick = abs(change) * 0.5 + 0.004 * rng.random()
        rows.append((opened, max(opened, level) * (1 + wick), min(opened, level) * (1 - wick), level, rng.uniform(2e5, 9e5) * (1 + 30 * abs(change))))
    return rows


def sessions(days):
    out, day = [], date.today()
    while len(out) < days:
        if CAL.session(day):
            out.append(day)
        day -= timedelta(days=1)
    return out[::-1]


class Simulated:
    """A price source with the same shape as the real ones. Every bar is invented."""
    name, feed, feed_label, currency, adjustment = "simulated", "demo", "simulated", "USD", "split"
    persist_allowed, model_allowed, always_open = False, True, True

    def supports(self, symbol):
        return symbol in COMPANIES

    def bars(self, symbol, interval, start_ms=None, end_ms=None):
        base = COMPANIES[symbol][1]
        if interval == "1D":
            days = sessions(400)
            rows = walk(f"{symbol}-1D", base, len(days))
            stamp = [int(datetime.combine(d, dtime(0), CAL.zone).timestamp() * 1000) for d in days]
        else:
            step = STEP.get(interval, 300_000)
            stamp = []
            for d in sessions(6)[::-1]:
                s = CAL.session(d)
                stamp += list(range(s.open_ms, min(s.close_ms, int(time.time() * 1000)), step))[::-1]
                if len(stamp) > 400:
                    break
            stamp = sorted(stamp[:400])
            rows = walk(f"{symbol}-{interval}", base, len(stamp))
        bars = [{"time_ms": t, "open": o, "high": h, "low": l, "close": c, "volume": v} for t, (o, h, l, c, v) in zip(stamp, rows)]
        return [b for b in bars if (start_ms is None or b["time_ms"] >= start_ms) and (end_ms is None or b["time_ms"] <= end_ms)]

    def status(self):
        return {"source": "simulated"}


SIM = Simulated()
market = md.MarketData([SIM], calendar=CAL)
space = ws.Workspace(market, md.LiveFeed(md.AlpacaSource(load=lambda: None), lambda m: None),
                     ledger=EMPTY / "ledger.sqlite", raw_store=EMPTY / "raw.sqlite", service_file=EMPTY / "service.json")
space.snapshots = EMPTY / "snapshots.sqlite"
for attr in ("regime_file", "montecarlo_file", "portfolio_record_file", "candidates_file", "barrier_file", "env_file", "vault"):
    setattr(space, attr, EMPTY / f"{attr}.none")
space.model_fetch = lambda *a, **k: (_ for _ in ()).throw(RuntimeError("No model is called in the demo."))

UNAVAILABLE = {"available": False, "reason": "Not part of this simulation: it needs saved research results."}


def dial(symbol):
    rng = random.Random(symbol + "dial")
    colour, headline = [("green", "Calm and steady"), ("amber", "Calm but turning"), ("red", "Stressed")][sum(map(ord, symbol)) % 3]
    p = [rng.random() for _ in range(3)]
    p = [x / sum(p) for x in p]
    g = [rng.random() for _ in range(3)]
    g = [x / sum(g) for x in g]
    now = int(time.time() * 1000)
    states = [{"volatility_ratio": r, "annual_volatility": 0.2 * r, "volatility_level": lvl, "autocorrelation": rng.uniform(-0.08, 0.08),
               "autocorrelation_error": 0.03, "continuation_rate": 0.5 + rng.uniform(-0.04, 0.04), "behaviour": "No clear tendency",
               "annual_mean_return": rng.uniform(-0.1, 0.15)} for r, lvl in ((0.7, "Low"), (1.0, "Normal"), (1.6, "High"))]
    return {"available": True, "symbol": symbol, "state": "ok", "market": "closed", "colour": colour, "headline": headline,
            "reasons": ["Simulated reading on generated prices. Not a model result."],
            "hmm": {"most_likely_state": p.index(max(p)), "confidence": max(p), "probabilities": p,
                    "states": states,
                    "expected_bars": [18.0, 11.5, 6.2], "bars_in_state": 7, "filtered_agrees_with_smoothed": 0.9},
            "gmm": {"most_likely_cluster": g.index(max(g)), "probabilities": g, "clusters": states,
                    "measured_transition": [[0.8, 0.15, 0.05], [0.2, 0.7, 0.1], [0.1, 0.3, 0.6]]},
            "unusual_day": False, "liquidity": "Not measured in the demo",
            "volatility": {"level": "Normal", "realised_20d_annual": 0.18 + rng.random() * 0.15},
            "trend": {"trend_20": rng.uniform(-1, 1), "behaviour": "No clear tendency", "state_autocorrelation": rng.uniform(-0.05, 0.05), "recent_60d_autocorrelation": rng.uniform(-0.05, 0.05)},
            "last_observation_day": date.today().isoformat(), "inference_ms": now, "feed": "simulated", "model_version": "demo",
            "fitted_through_ms": now - 86_400_000 * 30, "claim": "Unproven: shown to demonstrate the screen."}


def volatility(symbol):
    rng = random.Random(symbol)
    move = 0.009 + rng.random() * 0.02
    return {"available": True, "symbol": symbol, "target": "Next session", "as_of": date.today().isoformat(),
            "history": [{"v": move * (0.8 + 0.4 * math.sin(i / 4))} for i in range(30)],
            "scoreboard": {"scores_hidden": True, "issued": 0, "pending": 0},
            "models": [{"model": "har_company", "move": move, "forecast_annual": move * 15.9, "low_annual": move * 13, "high_annual": move * 19}]}


OVERRIDES = {
    "/api/research/status": lambda q: {k: {"available": False, "reason": "Not part of this simulation."} for k in ("plan", "forecasts", "run", "coverage")},
    "/api/workspace/regime-dial": lambda q: dial(q.get("symbol", "ATLAS")),
    "/api/workspace/volatility": lambda q: volatility(q.get("symbol", "ATLAS")),
    "/api/workspace/volatility_evaluation": lambda q: {"available": False, "reason": "Simulated: no evaluation is shown."},
    "/api/workspace/bot-connections": lambda q: {"bots": [], "note": "No keys exist in the demo."},
    "/api/workspace/live": lambda q: {"streaming": False, "symbols": [], "state": "demo"},
}


def quote(symbol):
    rows = SIM.bars(symbol, "1D")
    last, prev = rows[-1], rows[-2]
    return {"type": "q", "id": symbol, "price": last["close"], "prev": prev["close"], "high": last["high"], "low": last["low"], "vol": last["volume"],
            "yearHigh": max(r["high"] for r in rows[-252:]), "yearLow": min(r["low"] for r in rows[-252:]), "cap": last["close"] * 2.4e8, "cur": "USD",
            "state": "CLOSED", "delay": 0, "name": f"{COMPANIES[symbol][0]} (fictional)", "exchange": "Simulated",
            "spark": [r["close"] for r in rows[-24:]], "time": last["time_ms"], "tick": False, "regular": True}


def candles(symbol, interval):
    name = {"5M": "5M", "15M": "15M", "1H": "1H", "1M": "1M"}.get(interval, "1D")
    return [{"time": r["time_ms"] // 1000, "open": r["open"], "high": r["high"], "low": r["low"], "close": r["close"], "volume": r["volume"]} for r in SIM.bars(symbol, name)]


def companies():
    return [{"symbol": s, "name": f"{n} (fictional)"} for s, (n, _) in COMPANIES.items()]


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, *args):
        pass

    def reply(self, body, kind="application/json; charset=utf-8", status=200):
        self.send_response(status)
        self.send_header("Content-Type", kind)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def data(self, value, status=200):
        self.reply(json.dumps(value).encode(), status=status)

    def do_POST(self):
        self.data({"error": "The demo saves nothing."}, 403)

    def do_GET(self):
        url = urlparse(self.path)
        query = parse_qs(url.query)
        flat = {k: v[0] for k, v in query.items()}
        if url.path in ("/", "/terminal.html"):
            html = swapped((ROOT / "terminal.html").read_text(encoding="utf-8"))
            html = html.replace('<div class="alertbar" id="alertbar" hidden><span id="alerttext"></span><button id="alertclose">Dismiss</button></div>',
                                f'<div class="alertbar" id="alertbar"><span id="alerttext">{BANNER}</span><button id="alertclose" hidden>Dismiss</button></div>')
            bar = '<div style="position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#2a1d00;color:#ffb000;border-top:1px solid #ffb000;text-align:center;font:600 13px/1.6 Consolas,monospace;padding:3px 8px">'
            html = html.replace("</body>", f"{bar}{BANNER}</div></body>", 1)
            assert BANNER in html
            return self.reply(html.encode(), "text/html; charset=utf-8")
        if url.path.startswith("/assets/"):
            target = (ROOT / url.path.lstrip("/")).resolve()
            if not target.is_relative_to(ROOT / "assets") or not target.is_file():
                return self.data({"error": "Not found."}, 404)
            kinds = {".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json"}
            body = swapped(target.read_text(encoding="utf-8")).encode() if target.suffix in (".js", ".css") else target.read_bytes()
            return self.reply(body, kinds.get(target.suffix, "application/octet-stream"))
        sym = flat.get("symbol", "").upper()
        if url.path == "/api/watch":
            return self.data({"quotes": [quote(s) for s in flat.get("symbols", "").upper().split(",") if s in COMPANIES], "status": {"type": "s", "stream": True, "limited": False, "snapshot": time.time()}})
        if url.path == "/api/candles":
            if sym not in COMPANIES:
                return self.data({"error": "Only the fictional companies exist in the demo."}, 404)
            return self.data({"bars": candles(sym, flat.get("interval", "1D").upper()), "stale": False})
        if url.path == "/api/resolve":
            return self.data({"symbol": sym, "name": COMPANIES.get(sym, ("Unknown",))[0] + " (fictional)", "kind": "equity"})
        if url.path == "/api/profile":
            return self.data({"name": f"{COMPANIES.get(sym, ('Fictional',))[0]} (fictional)", "exchange": "Simulated exchange", "sector": "Fictional sector", "industry": "Demonstration data",
                              "country": "None", "pe": 21.4, "forwardPe": 19.2, "eps": 8.52, "dividend": 1.2, "beta": 1.08, "avgVolume": 21000000, "cap": 4.4e10, "stale": False})
        if url.path == "/api/news":
            now = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            return self.data({"items": [{"title": f"Fictional headline {i}: placeholder text for this demonstration", "url": "https://example.invalid/", "time": now, "publisher": "Simulated feed"} for i in (1, 2, 3, 4)], "stale": False})
        if url.path == "/api/crypto/watch":
            return self.data({"watch": [], "status": {"type": "cs", "connected": False, "retryIn": 0}})
        if url.path == "/api/companies":
            return self.data(companies())
        if url.path == "/api/health":
            return self.data({"service": "resolute-quant-demo", "fallback": False, "code": "demo", "running": "demo"})
        if url.path == "/api/workspace/riskboard":
            return self.data({"available": False, "reason": "Not part of this simulation: the risk board needs saved 5-minute history."})
        if url.path == "/api/office-log":
            return self.data({"messages": []})
        if url.path in OVERRIDES:
            return self.data(OVERRIDES[url.path](flat))
        if url.path.startswith("/api/workspace/"):
            if flat.get("symbol") and flat["symbol"].upper() not in COMPANIES:
                return self.data({"error": "Only the fictional companies exist in the demo."}, 404)
            try:
                answer, status = space.handle(url.path, query)
            except PermissionError as refused:
                answer, status = {"available": False, "reason": str(refused)}, 200
            except Exception as error:  # a panel that needs saved results reports itself unavailable
                answer, status = {**UNAVAILABLE, "detail": type(error).__name__}, 200
            return self.data(json.loads(swapped(json.dumps(answer))), status)
        if url.path == "/api/stream":
            self.send_response(200)
            self.send_header("Content-Type", "text/event-stream")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Connection", "close")
            self.end_headers()
            self.close_connection = True
            try:
                while True:
                    self.wfile.write(b'data: {"type":"s","stream":true,"limited":false}\n\n')
                    self.wfile.flush()
                    time.sleep(10)
            except OSError:
                return
        return self.data(UNAVAILABLE)


if __name__ == "__main__":
    print(f"Simulated workspace at http://127.0.0.1:{PORT}/#overview", flush=True)
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
