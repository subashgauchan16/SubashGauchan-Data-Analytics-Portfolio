# Phase 3 — Evidence Validation and Portfolio Claim Reconciliation

**Purpose:** Resolve the highest-priority evidence gaps in the existing workbook audit and claim reconciliation. This report is a read-only evidence record and proposal for later review; it does not authorize edits to the portfolio claims.

## Executive summary

- The site’s **48.2% revenue increase** and **33.2% gross profit increase** are hard-coded in `index.html`. No calculation or source for those figures was found in the inspected website files or workbook formula/cache scans. Grouping the primary workbook’s raw records by the actual `Date` field gives **97.5862% revenue growth** and **144.1934% growth in the column named `Profit`** from 2011 to 2016. The latter is not established as gross profit. The differences do not identify the source of the published percentages.
- The raw-date calculations use all valid 2011–2016 source rows without filtering or deduplication. The source has two fully blank trailing rows, 1,000 nonblank full-row duplicate occurrences beyond the first, 5,354 date-typed entries in `Year`, and a single 1906 date anomaly. The companion `Year`, duplicate key, and anomalous date require source-owner validation.
- The cached annual summary does not consistently match raw-date grouping: its 2011 and 2012 `Profit` totals are assigned to the opposite years, and its 2013 totals include the 1906 row whose companion `Year` says 2013. The cached 2016 figures agree. A candidate workbook copy has a different `Raw Data!A2` date but the same cached summary. These facts establish a reconciliation problem, not the precise cause; neither workbook was refreshed or saved.
- The README’s **144.4%** profit change is reproducible from its rounded endpoints (£7.04m and £2.88m), but the unrounded actual-date `Profit` totals produce **144.1934%** (144.2% to one decimal). The source does not establish GBP or the definition of `Profit`.
- The Starbucks workbook reproduces only **0.2278794%**, rounded to **0.23%**, as US$3.50 divided by Nepal’s stated 2025 annual GDP per capita of US$1,535.9. It does not reproduce the README’s **2.7% Nepal** or **0.7% US monthly-income** figures. The cappuccino price is not sourced in the workbook, and no US price or income denominator is supplied.
- Other site Sales Analytics metrics checked against the actual-date records are **37.7864% `Profit`/Revenue** (rounds to 37.8%) and **72.4547% Bikes revenue share** (rounds to 72.5%). The 2016 versus 2015 raw-date totals show revenue down **11.5392%** and `Profit` down **6.5433%**. These calculations support the arithmetic, but the source currency, `Profit` meaning, duplicate validity, and date treatment remain unresolved; recommendations about inventory or cross-selling are proposals, not proven outcomes.

No README, website, dashboard, workbook, source code, or prior report was modified. No records were removed or corrected, and no formulas or pivot tables were recalculated.

## Scope and exact files investigated

The tagged portfolio copy is the Downloads clone, not the active OneDrive repository’s README stub.

### Portfolio documentation and code

- `C:\Users\thaka\Downloads\subash-portfolio\README.md` — exact tagged README; reviewed the Starbucks affordability statements, Sales Analytics endpoint claim, and status notes.
- `C:\Users\thaka\Downloads\subash-portfolio\index.html` — located the Sales Analytics website claims at the project entry (line 60 in the inspected copy).
- `C:\Users\thaka\Downloads\subash-portfolio\main.js` and `C:\Users\thaka\Downloads\subash-portfolio\pages.yml` — reviewed in the preceding reconciliation work for site behavior/navigation; no metric-producing calculation path was identified.
- `C:\Users\thaka\Downloads\subash-portfolio\workbook_data_quality_audit.md` — existing audit, read before this investigation; focused findings include the mixed `Year` column, date anomaly, cached annual summary, and Starbucks formula trace.
- `C:\Users\thaka\Downloads\subash-portfolio\portfolio_claim_reconciliation_action_plan.md` — existing claim reconciliation and proposed corrections, read before this investigation.
- `C:\Users\thaka\OneDrive\ドキュメント\GitHub\subash-portfolio\README.md` — confirmed separately as a 20-byte stub; not substituted for the tagged README.

### Workbooks

- `C:\Users\thaka\Downloads\subash-portfolio\Profit Loss Dashboard project.xlsx` — detailed read-only analysis of `Raw Data`, cached `Sheet1` annual summary, and stored formula errors.
- `C:\Users\thaka\Downloads\subash-portfolio\COUNTRY SALES.xlsx` — limited read-only comparison of `Raw Data!A2` and the cached annual summary; treated only as a candidate copy, not an authoritative correction.
- `C:\Users\thaka\Downloads\subash-portfolio\STARBUCKS_MARKETENTRY_ANALYIS.xlsx` — detailed read-only inspection of `11_Derived_Calcs!A5:E5`, `2_Nepal_Macroeconomic!A5`, `_calc!B8`, formula/cached values, and source evidence.
- `C:\Users\thaka\Downloads\subash-portfolio\First Sales Dashboard - Copy.xlsx` and `C:\Users\thaka\Downloads\subash-portfolio\DMAIC Gateways.xlsx` — included in a limited formula/cached-number scan for the disputed figures; no claim-specific calculation was identified. They were not re-audited.

Workbook inspection used pandas/openpyxl reads and, for the targeted formula/cache search, read-only inspection of workbook XML parts. Formula expressions and stored cached results were inspected, not recalculated. The XML scan looked for the disputed percentages as both displayed values and decimal fractions; no matching stored values or chart text were found in the five listed workbooks. A missing cache match does not prove that an Excel calculation is incorrect or that a metric never existed.

## Reproducible findings

### Sales Analytics source data

`Profit Loss Dashboard project.xlsx` → `Raw Data` has 18 columns and 113,036 nonblank records when read with pandas. The worksheet data range extends through row 113,039, leaving two trailing fully blank rows. There are 1,000 repeated nonblank full-row records beyond the first matching occurrence; without a validated transaction key, these are not treated as errors or removed.

Observed date/year issues:

- `Year` contains 107,682 integer values and 5,354 Excel date-typed values (2,677 each rendered as `2026-11-20` and `2026-12-20`). Comparing normalized `Year` values with the year parsed from actual `Date` gives 5,355 mismatches, including the anomalous first record. Therefore `Year` is not a dependable grouping field.
- `Raw Data!A2` stores `1906-09-02`; its separate Day/Month/Year fields read 26 / November / 2013, and its `Profit`/`Revenue` are 590 / 950. `2013-11-26` is a plausible reconstruction, not a verified correction.
- No date correction, row deletion, filtering, or duplicate removal was applied.

The independently grouped totals below use `Date` parsed with `pandas.to_datetime(errors="coerce")`, numeric `Profit` and `Revenue`, and no filters. The 1906 record is shown separately; the 2011–2016 endpoint comparison is based only on actual-date years 2011–2016. Amounts are **source units**; currency is not established.

| Actual `Date` year | Rows | `Profit` total | `Revenue` total |
|---:|---:|---:|---:|
| 1906 | 1 | 590 | 950 |
| 2011 | 2,677 | 2,881,301 | 8,964,888 |
| 2012 | 2,677 | 2,951,993 | 9,175,983 |
| 2013 | 24,442 | 5,958,618 | 15,239,087 |
| 2014 | 29,398 | 5,864,087 | 14,152,724 |
| 2015 | 24,443 | 7,528,563 | 20,023,991 |
| 2016 | 29,398 | 7,035,948 | 17,713,385 |

Reproducible method:

```python
import pandas as pd

path = r"C:\Users\thaka\Downloads\subash-portfolio\Profit Loss Dashboard project.xlsx"
raw = pd.read_excel(path, sheet_name="Raw Data", engine="openpyxl")

actual_date = pd.to_datetime(raw["Date"], errors="coerce")
profit = pd.to_numeric(raw["Profit"], errors="coerce")
revenue = pd.to_numeric(raw["Revenue"], errors="coerce")
by_date_year = (
    pd.DataFrame({"year": actual_date.dt.year, "Profit": profit, "Revenue": revenue})
    .dropna(subset=["year", "Profit", "Revenue"])
    .groupby("year")[["Profit", "Revenue"]]
    .agg(["count", "sum"])
)
period = by_date_year.loc[2011:2016]
profit_growth_pct = (period.loc[2016, ("Profit", "sum")] /
                     period.loc[2011, ("Profit", "sum")] - 1) * 100
revenue_growth_pct = (period.loc[2016, ("Revenue", "sum")] /
                      period.loc[2011, ("Revenue", "sum")] - 1) * 100
```

For clarity, where the result columns are read separately rather than through the multi-index above, the endpoint formulas are:

- `Profit`: `(7,035,948 / 2,881,301 - 1) × 100 = 144.193439%`.
- `Revenue`: `(17,713,385 / 8,964,888 - 1) × 100 = 97.586239%`.

The `Profit`/Revenue ratio over the same valid-date 2011–2016 rows is `32,220,510 / 85,270,058 × 100 = 37.786429%`. The Bikes share is `Bikes Revenue / all valid 2011–2016 Revenue × 100 = 72.454664%`. In 2016 versus 2015, revenue changes by `(17,713,385 / 20,023,991 - 1) × 100 = -11.539188%`; `Profit` changes by `(7,035,948 / 7,528,563 - 1) × 100 = -6.543281%`.

Deduplicating exact nonblank full rows solely as a sensitivity check changes the 2011–2016 endpoint growth to 143.3705% for `Profit` and 97.0270% for `Revenue`. Those figures still do not reproduce 33.2% or 48.2%. This sensitivity is not evidence that the repeated records should be removed.

### Stored pivot/dashboard reconciliation

The stored `Sheet1!A4:C10` annual summary reports:

- 2011 `Profit` 2,951,993 and `Revenue` 9,175,983 — equal to the raw actual-date **2012** totals.
- 2012 `Profit` 2,881,301 and `Revenue` 8,964,888 — equal to the raw actual-date **2011** totals.
- 2013 `Profit` 5,959,208 and `Revenue` 15,240,037 — 590 and 950 above the actual-date 2013 values; those increments equal `Raw Data!A2`'s `Profit` and `Revenue`, while that row's companion `Year` says 2013.
- 2016 `Profit` 7,035,948 and `Revenue` 17,713,385 — exact match to actual-date grouping.

The annual pivot's cached 2011-to-2016 `Profit` change is 138.3457%, not 33.2%. The chart cache refers to the annual summary cells. `Sheet1!S48` and `Pivot!O18` contain stored `#REF!` results. Cached results are not a live refresh.

The alternate `COUNTRY SALES.xlsx` stores `2013-11-26` at `Raw Data!A2`, but its cached pivot still matches the primary workbook’s pivot values. This shows that the stored pivot result does not resolve the disagreement between the candidate copy’s raw date and its cached summary. It does not establish which date is authentic, whether the pivot is stale, or what its full effective grouping/filter logic was. A separately stored pivot result cannot safely be treated as current raw-data aggregation without refreshing against a source-owner-approved dataset; refresh-and-save was explicitly out of scope.

### Starbucks–Nepal affordability

Observed in `STARBUCKS_MARKETENTRY_ANALYIS.xlsx`:

- `11_Derived_Calcs!A5:E5` contains text describing `US$3.50 / US$1,535.9 × 100` and result `0.23%`; this row is not a formula.
- `2_Nepal_Macroeconomic!B5` stores `1,535.9`; adjacent fields state US dollars, 2025, and the source note `World Bank (2025)`.
- `_calc!B8` uses `="Beverage ≈ "&TEXT(3.5/'2_Nepal_Macroeconomic'!B5,"0.00%")&" of GDP p.c."`; the stored cached result reads `Beverage ≈ 0.23% of GDP p.c.`.
- Independent arithmetic is `100 × 3.50 / 1,535.9 = 0.227879419%`, displayed to two decimal places as `0.23%`.
- No source sheet entry, product size, store/location, price date, direct price citation, or directly retrievable indicator reference is provided in the workbook. The workbook supplies no matching US product price, US income, or 0.7% formula. It does not calculate the README’s Nepal 2.7% monthly-income claim.

If—and only if—the same US$3.50 price were assumed, 2.7% would algebraically imply a monthly denominator of about US$129.63 and 0.7% would imply US$500. These are reverse-calculated implications, not source evidence. They do not establish that either denominator was used or that the comparisons share a product, date, currency, geography, or income definition.

Annual GDP per capita is annual national output divided by population, not measured monthly individual earnings, household income, or disposable income. It masks distribution and household differences. The 0.23% workbook metric is therefore a rough macroeconomic ratio, not a defensible individual affordability share. It is not interchangeable with a monthly income denominator.

## Claim-by-claim reconciliation

Verification labels apply to the cited evidence, not to whether a claim might be true from some unavailable source.

| Claim and location | Workbook/code evidence | Result | Recommended treatment |
|---|---|---|---|
| README: cappuccino costs 2.7% of monthly income in Nepal (`README.md`, Starbucks “Key analytical finding” and affordability table). | Starbucks workbook `11_Derived_Calcs!A5:E5` and `_calc!B8` calculate only 0.23% of stated annual Nepal GDP per capita; there is no monthly income denominator or price provenance. | **Unverified**; workbook does not reproduce it. | **Investigate further**; do not present as workbook-validated. Obtain the original price and monthly-income model inputs and calculations. |
| README: the same cappuccino costs 0.7% of monthly income in the US. | No US price/income input or corresponding result/formula in the Starbucks workbook; no matching stored workbook value was found in the targeted scan. | **Unverified**. | **Investigate further**; obtain comparable US price and monthly-income evidence. |
| README: relative burden `2.7 ÷ 0.7 ≈ 3.86×`. | Arithmetic from the two stated figures reproduces 3.8571×, but neither input is validated. | **Supported with qualification** as arithmetic only; not as an evidenced cross-country affordability conclusion. | **Qualify** or hold pending validation of both inputs and their comparability. |
| Starbucks workbook: 0.23% beverage/GDP-per-capita proxy. | `11_Derived_Calcs!A5:E5`, `2_Nepal_Macroeconomic!B5`, `_calc!B8`; independent result 0.2278794%. | **Supported with qualification** as workbook arithmetic and stored formula text. Input price provenance and direct GDP source retrieval are incomplete; it is not monthly personal affordability. | **Qualify** as an illustrative annual-GDP-per-capita proxy; do not describe it as monthly income affordability. |
| `index.html:60`: “113,0038-row” transaction dataset. | `Raw Data` has 113,036 nonblank records after header; worksheet range includes two blank trailing rows. | **Contradicted** as written; malformed count. | **Correct** only after choosing the intended count basis and define whether blank rows are excluded. |
| `index.html:60`: 48.2% revenue increase over 2011–2016. | Actual-date revenue endpoints reproduce 97.586239% with no filters; pivot/chart do not establish 48.2%. No source calculation for 48.2% located in inspected site files or targeted workbook scans. | **Unverified**; not reproduced by the available raw-date basis. | **Investigate/recalculate** from an approved, documented metric definition and source; do not substitute 97.6% until dates, duplicates, filters, and provenance are approved. |
| `index.html:60`: 33.2% “gross profit” increase over 2011–2016. | Actual-date `Profit` column endpoints produce 144.193439%; cached pivot endpoints produce 138.3457%. Neither reproduces 33.2%; the workbook does not establish that its `Profit` column means gross profit. | **Unverified**; published metric and source definition unavailable. | **Investigate/recalculate**; verify gross/net profit definition, basis, filters, and pivot freshness. |
| README: 2011 £2.88m and 2016 £7.04m profit; 144.4% increase. | Actual-date `Profit` values are 2,881,301 and 7,035,948 source units. Rounded endpoints yield 144.4%; exact endpoints yield 144.193439%. | **Supported with qualification** for endpoint arithmetic and approximate amounts; **currency and profit definition unverified**. | **Qualify** units as source units and report exact 144.2% only after resolving source-quality issues. |
| `index.html:60`: 37.8% gross margin. | The workbook’s actual-date 2011–2016 `Profit` sum / `Revenue` sum is 37.786429%. The stored `Profit` name does not itself prove gross-profit definition. | **Supported with qualification** for the arithmetic rounded to 37.8%; “gross margin” definition and units remain unverified. | **Qualify** as `Profit`/Revenue ratio unless gross-profit provenance is established. |
| `index.html:60`: Bikes contribute about 72.5% of revenue. | Actual-date rows for 2011–2016 give Bikes revenue / all revenue = 72.454664%. | **Supported with qualification** for arithmetic on the source categories and revenue field. | **Retain with qualification** that this is the workbook’s category share and source units; validate source/date treatment before stronger business conclusions. |
| `index.html:60`: 2016 revenue decline; recommendation to investigate before raising inventory. | Actual-date raw totals show 2016 revenue down 11.539188% versus 2015. The action is a recommendation, not an observed result. | **Supported with qualification** as a dataset trend; causality and business response are **unverified**. | **Retain** the decline as a descriptive observation with data caveats; label inventory action as a proposal to investigate. |
| `index.html:60`: explore cross-selling in smaller categories. | Category revenue shares are calculable from `Raw Data`, but no customer-level/basket analysis or cross-sell outcome was validated in this phase. | **Unverified** as an expected business outcome; acceptable only as a hypothesis to test. | **Qualify** explicitly as a proposed analysis, not a demonstrated opportunity or result. |

## Discrepancy table

Percentage-point difference is **reproduced value minus published value**. “Reproduced” uses the explicitly stated 2011–2016 actual-`Date` raw-data basis. It is a comparison, not proof that this was the intended basis for the site figure.

| Published figure | Reproduced figure | Difference | Evidence-supported explanation |
|---|---:|---:|---|
| 48.2% revenue increase | 97.5862% revenue increase | +49.3862 percentage points | No supported explanation found. The raw-date metric does not match; intended filters, duplicate treatment, date basis, or source are unknown. |
| 33.2% gross-profit increase | 144.1934% increase in the `Profit` column | +110.9934 percentage points | No supported explanation found. The workbook field is `Profit`; equivalence to “gross profit” is not established. |
| 144.4% README endpoint profit change | 144.1934% exact raw-date `Profit` change | -0.2066 percentage points | The README’s rounded £7.04m and £2.88m endpoints produce 144.4% when used as exact inputs. Exact raw-date totals produce 144.2% to one decimal. Currency remains unverified. |
| 2.7% Nepal monthly-income share | Not reproduced | N/A — no comparable monthly denominator in workbook | The workbook calculates a different metric: 0.23% of annual GDP per capita. |
| 0.7% US monthly-income share | Not reproduced | N/A — no US comparison inputs in workbook | No US price, denominator, or calculation was found. |

## Unresolved questions and evidence required

### Sales Analytics

1. **What is the transaction source and what do `Revenue`, `Profit`, and “gross profit” mean?** Obtain the original export/system documentation, field definitions, reporting currency, and any conversion basis.
2. **Are the 1,000 repeated nonblank full rows legitimate transactions?** Obtain a stable transaction/order-line key and source-system duplicate policy. Do not infer that equal rows are duplicates that should be discarded.
3. **What is the correct value for the record at `Raw Data!A2`?** Obtain the original transaction or source export and confirm date locale/time-zone interpretation. Day/Month/Year companion columns suggest a candidate date but do not prove it.
4. **Why is `Year` mixed-type, and which date/year basis was intended?** Obtain the original column-generation logic or an approved corrected data extract.
5. **Why do the pivot/cache values differ from actual-date aggregation?** With approved source data, inspect the pivot source field, filters, grouping, and refresh state in Excel; document the comparison without overwriting the original. The current cached values alone do not establish the mechanism.
6. **Where did 48.2% and 33.2% come from?** Obtain the calculation workbook/version, exact input cells or data extract, metric formulas, filters, start/end dates, and deduplication rules. None was found in the inspected website calculation paths or targeted workbook values.
7. **Is GBP the source currency?** Obtain source-system metadata or a documented conversion record; pound-sign formatting alone is insufficient.

### Starbucks–Nepal affordability

1. **What exact drink and price were used?** Obtain product name, size, menu/source link, store/location, observation date, tax/tip treatment, and currency for each country.
2. **What are the 2.7% and 0.7% denominators?** Obtain the exact monthly-income measure, population/geography, reference period, source, and calculation cells for each figure.
3. **Are the two comparisons comparable?** Verify same product/size basis, dates, tax treatment, currency conversion, and consistent individual/household income definitions.
4. **What is the source behind Nepal GDP per capita 1,535.9?** The workbook notes “World Bank (2025)” but provides no populated Sources sheet, direct indicator retrieval URL, or archived retrieval record. Obtain the exact indicator, year, and source snapshot before publication.
5. **Is an annual macroeconomic proxy suitable for the intended audience?** Decide explicitly whether to publish a national-output proxy or an individual/household affordability analysis. These answer different questions.

## Prioritised proposed corrections

These are proposals for later approval, not edits made in this phase.

### Priority 1 — factual evidence gaps

1. Hold the 48.2% and 33.2% website claims until their source calculations and definitions are recovered or they are recalculated from approved, reconciled source data.
2. Do not label source workbook amounts as GBP until source currency provenance is available.
3. Resolve the 1906 date anomaly, mixed `Year` field, and duplicate-key policy with the data owner before declaring the pivot/dashboard series definitive.
4. Hold the Starbucks 2.7% and 0.7% affordability figures as unverified until both monthly denominators and both price inputs are documented on a comparable basis.

### Priority 2 — presentation accuracy

1. Correct the malformed `113,0038-row` wording only after deciding whether to state 113,036 nonblank records or another clearly defined count.
2. If retaining the README’s 144.4% figure, identify it as arithmetic from rounded endpoints; otherwise use 144.2% from exact raw-date endpoints, qualified as source units and contingent on data reconciliation.
3. If retaining the 37.8% margin wording, first verify the source meaning of `Profit`; otherwise call it the workbook’s `Profit`-to-`Revenue` ratio.
4. Keep the 2016 decline descriptive and distinguish the recommendation to investigate inventory from an evidenced causal finding.

### Priority 3 — optional improvements

1. Add an evidence note for the workbook’s 0.23% calculation that clearly calls it an annual GDP-per-capita proxy and identifies the hard-coded price as unsourced.
2. Preserve the audit trail for raw-date calculations and any later approved data corrections; do not overwrite the source workbook.
3. Once provenance is established, refresh/reconcile the relevant dashboard from a controlled copy and document its filters and date basis.

## Proposed wording for later review

**Sales Analytics (only after source-owner validation):** “Using the workbook’s `Date` field and the `Profit` and `Revenue` columns, unfiltered totals for 2011–2016 show [approved endpoint and change] in source currency [verified currency]. Results remain subject to the documented date and duplicate-record treatment.” Do not insert the bracketed values or currency until the unresolved evidence is closed.

**If describing current workbook calculations before validation:** “The workbook stores an illustrative ratio of US$3.50 to Nepal’s cited 2025 GDP per capita of US$1,535.9 (0.23%). This is an annual GDP-per-capita proxy, not an estimate of monthly individual or household affordability; the price source is not documented in the workbook.”

**Do not publish the 2.7%/0.7% comparison as validated** until the corresponding prices, income denominators, dates, and comparable calculation basis are supplied.

## Git and change controls

Status before report creation was checked for both repositories:

- Active OneDrive repository `C:\Users\thaka\OneDrive\ドキュメント\GitHub\subash-portfolio`, branch `main`: only pre-existing untracked `.vscode/`.
- Tagged Downloads clone `C:\Users\thaka\Downloads\subash-portfolio`, branch `main`, up to date with `origin/main`: pre-existing untracked `portfolio_claim_reconciliation_action_plan.md` and `workbook_data_quality_audit.md`.

The only intended new file is this report in the Downloads clone. Final Git status is to be checked after saving and verifying this file.
