# AI-Assisted Financial Forecasting & Reporting

## Project overview

I applied a structured financial-reporting workflow I learned while exploring automated reporting with GPT to historical market data provided by Quantcept. I used Claude as an AI-assisted analysis and reporting tool, while defining the evaluation approach and reviewing whether the results supported the conclusions.

The aim was to demonstrate a repeatable forecasting and reporting workflow—not to present the output as investment advice or as a proven profitable trading strategy.

## Workflow

1. **Prepare the time series** and organise observations chronologically.
2. **Create a chronological training/testing split** to reduce the risk of using future information to predict the past.
3. **Establish a baseline** and compare it with a Ridge regression model.
4. **Evaluate forecasts** using mean absolute error (MAE), including a rolling-average approach for context.
5. **Review directional accuracy** as a separate metric from numerical forecast error.
6. **Summarise the results** in a report that distinguishes measured performance from assumptions and limitations.

The exploratory report used yearly walk-forward evaluation across 2015–2026 and a 20-trading-day forecast horizon. These design choices and the exact target alignment should be independently checked before the results are treated as a validated backtest.

## Preliminary results

| Metric | Baseline | Ridge regression |
|---|---:|---:|
| Return MAE | 0.0410 | 0.0409 |
| Directional accuracy | 57.68% | 52.94% |
| Price MAE | 251.9635 | 251.6687 |

These figures are preliminary outputs from the prototype report, not independently audited results. The small difference in reported MAE does not, by itself, establish a useful predictive advantage. The lower reported directional accuracy for Ridge also cautions against interpreting the model as a reliable market-direction signal.

## What I learned

- How to structure an automated financial report around a defined workflow rather than generating narrative alone.
- Why chronological train/test splits and walk-forward evaluation matter for time-series analysis.
- How MAE and directional accuracy answer different questions.
- Why baseline comparisons are necessary before claiming a model adds value.
- How to use an LLM to assist with analysis and communication while keeping conclusions evidence-led and appropriately qualified.

## Limitations and next validation steps

Before making stronger claims, I would verify:

- The exact definition and units of each target and metric.
- Sample sizes, missing observations, and target/forecast alignment.
- Whether rolling windows or forecast horizons overlap in ways that affect evaluation.
- The baseline definition and whether all models use identical test observations.
- The treatment of corporate actions, dividends, and adjusted versus unadjusted prices.
- The partial-year nature of 2026 data and the reproducibility of the walk-forward procedure.
- Performance against simple, clearly specified benchmarks across multiple market periods.

No claim of investment profitability, a validated predictive edge, or investment advice is made.

## Tools and methods

- **Data source:** Quantcept historical market data
- **AI-assisted workflow:** Claude; reporting framework explored through GPT-based automated financial reporting
- **Methods explored:** Chronological train/test split, rolling averages, Ridge regression, walk-forward evaluation, MAE, and directional accuracy

## Project status

**Exploratory prototype — further validation required.**

The main outcome is a documented financial-forecast reporting workflow and a critical comparison of model outputs, rather than a claim that the model can reliably predict or trade financial markets.
