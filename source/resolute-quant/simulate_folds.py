"""Numbers for the Resolute Quant 3D chart: the planned evaluation, run on simulated returns only.

    python simulate_folds.py

Simulates hourly returns from a GARCH(1,1) process with a fixed seed, then scores two simple
24-hour volatility forecasts over 12 walk-forward folds. It demonstrates the method. It uses no
market data, and its numbers say nothing about any real market or model.
"""
import json

import numpy as np

rng = np.random.default_rng(16)
HOURS, FOLDS, DAY = 24 * 90 * 13, 12, 24
omega, alpha, beta = 2e-7, 0.08, 0.90
r, var = np.zeros(HOURS), omega / (1 - alpha - beta)
for t in range(HOURS):
    r[t] = np.sqrt(var) * rng.standard_normal()
    var = omega + alpha * r[t] ** 2 + beta * var

sq = r ** 2
ewma = np.zeros(HOURS)
ewma[0] = sq[:DAY].mean()
for t in range(1, HOURS):
    ewma[t] = 0.97 * ewma[t - 1] + 0.03 * sq[t - 1]

# Decision hours once a day. Each forecast uses only returns before the decision hour.
origins = np.arange(DAY * 90, HOURS - DAY, DAY)
realised = np.array([sq[t:t + DAY].sum() for t in origins])
previous = np.array([sq[t - DAY:t].sum() for t in origins])
smoothed = np.array([ewma[t] * DAY for t in origins])


def qlike(actual, forecast):
    return float(np.mean(actual / forecast - np.log(actual / forecast) - 1))


annual = lambda daily_variance: float(np.sqrt(daily_variance.mean() * 365) * 100)
parts = np.array_split(np.arange(len(origins)), FOLDS)
out = {
    "note": "Simulated GARCH(1,1) returns, seed 16. Method demonstration only.",
    "folds": [f"F{i + 1:02d}" for i in range(FOLDS)],
    "qlike_previous": [round(qlike(realised[p], previous[p]), 3) for p in parts],
    "qlike_ewma": [round(qlike(realised[p], smoothed[p]), 3) for p in parts],
    "vol_forecast": [round(annual(smoothed[p]), 1) for p in parts],
    "vol_realised": [round(annual(realised[p]), 1) for p in parts],
}
print(json.dumps(out))
