"""Simulated backend for the Resolute Quant portfolio screenshots. Standard library only.

    python demo_server.py <path to Resolute-Quant checkout> [port]

It serves the terminal's real front end, but every instrument is fictional and every price is
generated here, so the screenshots show the interface without showing market data. Provider
names are replaced with "Simulated", and a banner marks the page, so a screenshot cannot be
mistaken for real prices. Nothing here contacts a provider.
"""
import json
import math
import queue
import random
import sys
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(sys.argv[1])
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 8795
BANNER = "SIMULATED DATA. Fictional instruments and generated prices, not real market data."
CRYPTO = {"ALPHA-USD": 1240.0, "BRAVO-USD": 86.4, "CEDAR-USD": 14.72, "DELTA-USD": 3.18, "EMBER-USD": 0.642, "FJORD-USD": 212.5}
MARKETS = {"ATLAS": 182.4, "BOREAL": 64.15, "CORVUS": 318.9, "^SIM500": 5120.0, "SIMFX=X": 1.2840}
SECONDS = {"1M": 60, "5M": 300, "15M": 900, "1H": 3600, "4H": 14400, "1D": 86400, "1W": 604800, "1MO": 2592000}

TEXT_SWAPS = [
    ("Coinbase Exchange", "Simulated exchange"), ("Coinbase", "Simulated"), ("COINBASE", "SIMULATED"),
    ("Yahoo Finance via yfinance, personal use, may be delayed", "simulated"), ("Yahoo Finance", "Simulated"),
    ("YAHOO FINANCE", "SIMULATED"), ("YAHOO STREAM", "SIM STREAM"), ("YAHOO PAUSED", "SIM PAUSED"), ("YAHOO 90S", "SIM 90S"),
    ("YAHOO", "SIMULATED"), ("Yahoo", "Simulated"), ("alternative.me", "simulated"),
]


def swapped(text):
    for old, new in TEXT_SWAPS:
        text = text.replace(old, new)
    return text


def page():
    html = swapped((ROOT / "terminal.html").read_text(encoding="utf-8"))
    html = html.replace('<div class="alertbar" id="alertbar" hidden><span id="alerttext"></span><button id="alertclose">Dismiss</button></div>',
                        f'<div class="alertbar" id="alertbar"><span id="alerttext">{BANNER}</span><button id="alertclose" hidden>Dismiss</button></div>')
    assert BANNER in html, "banner markup not found"
    return html.encode()


def walk(seed, price, steps, step_seconds):
    """Oldest-to-newest bars from a seeded random walk whose volatility clusters."""
    rng = random.Random(seed)
    vol = min(0.0016 * math.sqrt(step_seconds / 60), 0.012)
    base = vol
    now = int(time.time()) // step_seconds * step_seconds
    bars, level = [], price
    closes = []
    for _ in range(steps):
        vol = max(base * 0.4, min(base * 3, vol * (0.96 + rng.random() * 0.08) + base * 0.005))
        change = rng.gauss(0.00004, vol)
        closes.append(change)
    level = price / math.exp(sum(closes))
    for i, change in enumerate(closes):
        opened = level
        level *= math.exp(change)
        spread = abs(change) + vol * rng.random() * 0.7
        bars.append({"time": now - (steps - 1 - i) * step_seconds, "open": opened, "high": max(opened, level) * (1 + spread * 0.4),
                     "low": min(opened, level) * (1 - spread * 0.4), "close": level, "volume": round(rng.uniform(20, 240) * (1 + 40 * abs(change)), 2)})
    return bars


class Feed:
    def __init__(self):
        self.clients = set()
        self.book = None
        self.rng = random.Random(16)
        self.prices = {**CRYPTO, **MARKETS}
        self.trade = 1000

    def publish(self, message):
        data = json.dumps(message)
        for client in list(self.clients):
            try:
                client.put_nowait(data)
            except queue.Full:
                self.clients.discard(client)

    def quote(self, symbol, tick=False):
        price = self.prices[symbol]
        base = MARKETS[symbol]
        return {"type": "q", "id": symbol, "price": price, "prev": base * 0.994, "high": base * 1.012, "low": base * 0.989, "vol": 18400000,
                "yearHigh": base * 1.31, "yearLow": base * 0.74, "cap": base * 2.4e8, "cur": "USD", "state": "REGULAR", "delay": 0,
                "name": f"{symbol} (fictional)", "exchange": "Simulated", "spark": [base * (1 + 0.012 * math.sin(i / 3)) for i in range(24)],
                "time": int(time.time() * 1000), "tick": tick, "regular": True}

    def run(self):
        last_book = 0.0
        while True:
            time.sleep(0.12)
            symbol = self.rng.choice(list(CRYPTO))
            self.prices[symbol] *= math.exp(self.rng.gauss(0, 0.00035))
            price = self.prices[symbol]
            self.trade += 1
            base = CRYPTO[symbol]
            self.publish({"type": "ct", "id": symbol, "price": price, "time": int(time.time() * 1000), "open": base * 0.982, "high": base * 1.031,
                          "low": base * 0.971, "vol": 18650.0, "bid": price * 0.9999, "ask": price * 1.0001, "size": round(self.rng.uniform(0.002, 3.2), 4),
                          "trade": self.trade, "side": self.rng.choice(("buy", "buy", "sell"))})
            if self.rng.random() < 0.3:
                market = self.rng.choice(list(MARKETS))
                self.prices[market] *= math.exp(self.rng.gauss(0, 0.00018))
                self.publish(self.quote(market, tick=True))
            if self.book and time.time() - last_book > 0.25:
                last_book = time.time()
                mid = self.prices[self.book]
                self.publish({"type": "cb", "id": self.book, "time": int(time.time() * 1000), "depth": 12480, "crossed": False,
                              "bids": [[mid * (1 - 0.0001 * (i + 1)), round(self.rng.uniform(0.05, 2.4), 4)] for i in range(10)],
                              "asks": [[mid * (1 + 0.0001 * (i + 1)), round(self.rng.uniform(0.05, 2.4), 4)] for i in range(10)]})
                self.publish({"type": "cs", "connected": True, "lastMessage": int(time.time() * 1000), "retryIn": 0, "reconnects": 0, "rejected": 0})
                self.publish({"type": "s", "stream": True, "limited": False, "snapshot": time.time()})


feed = Feed()
TYPES = {".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".webp": "image/webp", ".png": "image/png"}


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

    def do_GET(self):
        url = urlparse(self.path)
        query = parse_qs(url.query)
        symbol = (query.get("symbol") or [""])[0].upper()
        if url.path == "/":
            return self.reply(page(), "text/html; charset=utf-8")
        if url.path.startswith("/assets/"):
            target = (ROOT / url.path.lstrip("/")).resolve()
            if not target.is_relative_to(ROOT.resolve()) or not target.is_file():
                return self.data({"error": "Not found."}, 404)
            kind = TYPES.get(target.suffix, "application/octet-stream")
            body = swapped(target.read_text(encoding="utf-8")).encode() if target.suffix in (".js", ".css") else target.read_bytes()
            return self.reply(body, kind)
        if url.path == "/api/stream":
            return self.stream()
        if url.path == "/api/health":
            return self.data({"service": "resolute-quant-demo", "fallback": False})
        if url.path == "/api/watch":
            return self.data({"quotes": [feed.quote(s) for s in MARKETS], "status": {"type": "s", "stream": True, "limited": False, "snapshot": time.time()}})
        if url.path == "/api/crypto/watch":
            return self.data({"watch": list(CRYPTO), "status": {"type": "cs", "connected": True, "retryIn": 0}})
        if url.path == "/api/crypto/book":
            feed.book = symbol if symbol in CRYPTO else None
            return self.data({"symbol": feed.book})
        if url.path == "/api/crypto/stats":
            if symbol not in CRYPTO:
                return self.data({"error": "Not listed in this simulation."}, 404)
            base = CRYPTO[symbol]
            return self.data({"last": feed.prices[symbol], "open": base * 0.982, "high": base * 1.031, "low": base * 0.971, "volume": 18650.0, "stale": False})
        if url.path == "/api/crypto/candles":
            step = int((query.get("granularity") or ["300"])[0])
            return self.data({"bars": walk(f"{symbol}{step}", feed.prices.get(symbol, 100.0), 300, step), "stale": False})
        if url.path == "/api/candles":
            name = (query.get("interval") or ["5M"])[0].upper()
            return self.data({"bars": walk(f"{symbol}{name}", feed.prices.get(symbol, 100.0), 300, SECONDS.get(name, 300)), "stale": False})
        if url.path == "/api/sentiment/feargreed":
            return self.data({"value": 54, "classification": "Simulated", "time": int(time.time()), "stale": False})
        if url.path == "/api/profile":
            return self.data({"name": f"{symbol} Holdings (fictional)", "exchange": "Simulated exchange", "sector": "Fictional sector", "industry": "Demonstration data",
                              "country": "None", "pe": 21.4, "forwardPe": 19.2, "eps": 8.52, "dividend": 1.2, "beta": 1.08, "avgVolume": 21000000, "cap": 4.4e10, "stale": False})
        if url.path == "/api/news":
            now = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            return self.data({"items": [{"title": f"Fictional headline {i}: placeholder text for this demonstration", "url": "https://example.invalid/", "time": now, "publisher": "Simulated feed"} for i in (1, 2, 3, 4, 5)], "stale": False})
        return self.data({"error": "Not found."}, 404)

    def stream(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Connection", "close")
        self.end_headers()
        self.close_connection = True
        client = queue.Queue(maxsize=500)
        feed.clients.add(client)
        client.put_nowait(json.dumps({"type": "s", "stream": True, "limited": False, "snapshot": time.time()}))
        client.put_nowait(json.dumps({"type": "cs", "connected": True, "lastMessage": int(time.time() * 1000), "retryIn": 0, "reconnects": 0, "rejected": 0}))
        try:
            while client in feed.clients:
                self.wfile.write(f"data: {client.get(timeout=10)}\n\n".encode())
                self.wfile.flush()
        except (OSError, queue.Empty):
            pass
        finally:
            feed.clients.discard(client)


if __name__ == "__main__":
    threading.Thread(target=feed.run, daemon=True).start()
    print(f"Simulated terminal at http://127.0.0.1:{PORT}")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
