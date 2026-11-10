# Portfolio Claim Reconciliation and Proposed Action Plan

**Prepared:** 2026-10-14  
**Purpose:** Decision support for later portfolio edits; this report does not authorize or make those edits.

## Executive summary

The workbooks substantiate a limited set of the published sales figures, but several claims need correction or stronger evidence before they should be presented as verified:

- The tagged [README.md](./README.md) says the Starbucks figures are **2.7% of monthly income in Nepal** and **0.7% in the United States**. The audited workbook does not calculate either figure. Its only relevant calculation is **US$3.50 / US$1,535.9 = 0.2279%**, displayed as **0.23% of Nepal annual GDP per capita**. The price has no in-workbook source, the GDP-per-capita value is not linked to direct retrieval evidence, and GDP per capita is not monthly individual income.
- The README's **2011 2.88 million** and **2016 7.04 million** profit figures round from the raw `Date`-year totals in `Profit Loss Dashboard project.xlsx`. They are not in GBP on the evidence available. The exact change between those unrounded totals is **144.1934%**, or **144.2%**, rather than 144.4%.
- The stored annual pivot/dashboard does not agree with the raw-`Date` grouping for 2011 and 2012; the displayed 2011/2012 profit totals are switched relative to that grouping. A second, likely duplicate workbook copy has a plausible correction for the 1906 date anomaly, but retains the same stored pivot summary. This is corroboration, not proof of the intended original date or pivot source.
- The project website's `index.html` contains a malformed **113,0038-row** count and claims **48.2% revenue growth** and **33.2% gross-profit growth**. Neither percentage is reproduced by the unfiltered 2011-to-2016 raw-`Date` totals or found as a matching cached numeric result in either checked copy. Raw-date calculations instead give **97.5862% revenue growth** and **144.1934% `Profit` growth**. The `Profit` column's definition and the website metrics' intended basis remain unresolved.
- The same website's **37.8% margin** and **72.5% Bikes revenue share** are reproducible to rounding from the workbook's data/dashboard, with qualifications about the meaning of `Profit`, date remediation, and source currency. Its 2016 revenue-decline observation is also supported versus 2015; the recommended actions remain hypotheses to test, not demonstrated business outcomes.

**Recommended publication posture:** hold or explicitly mark the Starbucks monthly-affordability figures and the unreconciled 48.2%/33.2% figures as unverified; do not label the sales values GBP without currency provenance; resolve date/year, duplicate, and pivot issues before calling the sales series definitive. No README, dashboard, source workbook, or portfolio content was edited.

## Scope, working context, and files

### Repository and target identification

- Active VS Code workspace and Git root: `C:\Users\thaka\OneDrive\ドキュメント\GitHub\subash-portfolio`, branch `main`. Its `README.md` is a 20-byte stub and is **not** the tagged README.
- Exact user-tagged README: `C:\Users\thaka\Downloads\subash-portfolio\README.md` (338 lines). This is in a separate Git clone rooted at `C:\Users\thaka\Downloads\subash-portfolio`, also on branch `main`. This report treats that file as the intended portfolio README and did not alter it.
- The four previously audited workbook files are in the Downloads clone. The active OneDrive Git root is a distinct, similarly named repository; it is not used as a substitute for the tagged README.
- A fifth workbook, `COUNTRY SALES.xlsx`, is also present in Downloads. It was not one of the four original audit targets. It was inspected read-only only as a candidate duplicate copy because it has a `Raw Data` sheet with a plausible alternate value for the anomalous date. No comprehensive audit of that workbook was performed.

### Files inspected

1. `C:\Users\thaka\Downloads\subash-portfolio\workbook_data_quality_audit.md` — existing audit report, read before this analysis.
2. `C:\Users\thaka\Downloads\subash-portfolio\README.md` — exact tagged target, all 338 lines.
3. `C:\Users\thaka\Downloads\subash-portfolio\index.html` — project entries and relevant Sales Analytics claims.
4. `C:\Users\thaka\Downloads\subash-portfolio\main.js` and `pages.yml` — site behavior/navigation context; no numerical evidence for the audited claims.
5. `C:\Users\thaka\Downloads\subash-portfolio\STARBUCKS_MARKETENTRY_ANALYIS.xlsx` — read-only check of the cited calculation/input cells in `11_Derived_Calcs`, `_calc`, and `2_Nepal_Macroeconomic`.
6. `C:\Users\thaka\Downloads\subash-portfolio\Profit Loss Dashboard project.xlsx` — read-only check of `Raw Data`, annual summary cells, and the two cached formula-error cells; pandas calculations use the actual `Date` field.
7. `C:\Users\thaka\Downloads\subash-portfolio\First Sales Dashboard - Copy.xlsx` — existing audit findings reviewed to distinguish its separate `Raw` sheet/time period from the 2011–2016 Sales Analytics source.
8. `C:\Users\thaka\Downloads\subash-portfolio\DMAIC Gateways.xlsx` — existing audit findings reviewed for whether it supports a published project claim.
9. `C:\Users\thaka\Downloads\subash-portfolio\COUNTRY SALES.xlsx` — limited read-only candidate-copy check of `Raw Data!A2`, `Year`, annual `Sheet1!A4:C10` summary, and relevant cached percentage values.
10. `C:\Users\thaka\OneDrive\ドキュメント\GitHub\subash-portfolio\README.md` — read to confirm the active repository's README is a 20-byte stub, not the tagged target.

### Method and limits

The raw-data checks used pandas with `openpyxl` to read `Raw Data`, parse `Date` using `pd.to_datetime(errors="coerce")`, group numeric `Profit` and `Revenue` by `Date.dt.year`, and compare `Product_Category` sums. No rows were deduplicated, date-corrected, or excluded except that annual calculations explicitly selected actual-date years 2011–2016. The source workbooks were opened read-only and not saved.

Formula expressions and cached results were read separately. They were **not recalculated**. Cached values establish stored workbook state, not the result of a fresh Excel calculation. `openpyxl` also warned that some Excel drawing/conditional-formatting/data-validation extensions are unsupported when read; the files were not saved, so no such features were rewritten.

## Verified findings and unresolved issues

### Starbucks affordability

Observed in `STARBUCKS_MARKETENTRY_ANALYIS.xlsx`:

- `11_Derived_Calcs!A5:E5` contains text: `Price / GDP per capita × 100`, inputs `US$3.50 / US$1,535.9 × 100`, and result `0.23%`. This row itself is not an Excel formula.
- `2_Nepal_Macroeconomic!B5` is `1,535.9`, with adjacent workbook fields identifying US dollars, year 2025, and the source note `World Bank (2025)`.
- `_calc!B8` contains the formula `="Beverage ≈ "&TEXT(3.5/'2_Nepal_Macroeconomic'!B5,"0.00%")&" of GDP p.c."`; the cached result is `Beverage ≈ 0.23% of GDP p.c.`.
- Independent arithmetic: `100 × 3.50 / 1,535.9 = 0.2278794%`, displayed as 0.23% to two decimal places.
- No matching US 0.7% calculation or US income input was found in the workbook. No workbook calculation reproduces the README's Nepal 2.7% monthly-income figure. As arithmetic only, at a price of $3.50, 2.7% implies a same-basis denominator of about $129.63; 0.7% implies $500. Neither denominator is supplied or validated.
- The `Sources` sheet is empty. The GDP-per-capita cell has a citation note but no direct indicator URL or retrieval record in the workbook. The cappuccino price is hard-coded and lacks a cited source, size, location, date, or currency evidence.

**Interpretation:** annual GDP per capita is national output per resident averaged over a year. It does not measure an individual's or household's monthly income, disposable income, income distribution, household size, or purchasing power. The workbook's ratio can be reported only as an explicitly qualified macroeconomic proxy—not as a person's monthly affordability burden.

### Sales Analytics data integrity and totals

Observed and independently reproduced from `Profit Loss Dashboard project.xlsx`:

- `Raw Data` has worksheet dimensions `A1:R113039`: 113,038 rows below the header, of which **113,036 contain records and two trailing rows are blank**. Pandas omits the trailing all-blank rows when loading the sheet, so the loaded data shape is `(113036, 18)`.
- There are **1,000 nonblank full-row duplicates beyond the first occurrence**. The two trailing blank rows add one more repeated blank row if duplicate detection is run over the entire 113,038-row worksheet data range. No transaction identifier is present to establish whether repeated rows are duplicate transactions or valid repeated facts; do not remove them automatically.
- The `Year` field contains 107,682 integer values and 5,354 date-typed values which represent November/December 2026 dates. Comparing the converted `Year` values to `Date.dt.year` yields **5,355 mismatches**: the 5,354 date-typed values plus the 1906 date anomaly below.
- `Raw Data!A2` in the audited file is `1906-09-02`; the companion fields say day 26, month November, year 2013, and `Profit` 590. The alternate `COUNTRY SALES.xlsx` copy has `Raw Data!A2 = 2013-11-26`, consistent with those companion fields. The two copies have matching annual pivot values. This makes 2013-11-26 a stronger candidate for investigation, but does not prove it is the authoritative date; no original transaction source was checked.
- Parsing the actual `Date` and grouping all valid date/profit rows without deduplication or correction gives:

| `Date` year | Records | `Profit` sum | `Revenue` sum |
|---:|---:|---:|---:|
| 1906 | 1 | 590 | 950 |
| 2011 | 2,677 | 2,881,301 | 8,964,888 |
| 2012 | 2,677 | 2,951,993 | 9,175,983 |
| 2013 | 24,442 | 5,958,618 | 15,239,087 |
| 2014 | 29,398 | 5,864,087 | 14,152,724 |
| 2015 | 24,443 | 7,528,563 | 20,023,991 |
| 2016 | 29,398 | 7,035,948 | 17,713,385 |

For the 2011–2016 actual-date rows, unrounded `Profit` totals are 2,881,301 and 7,035,948 at the endpoints. The exact endpoint change is `(7,035,948 / 2,881,301 - 1) × 100 = 144.1934%`. Revenue totals change from 8,964,888 to 17,713,385, or **97.5862%**. Revenue in 2016 is **11.5392% lower** than 2015; `Profit` is **6.5433% lower**.

- The stored annual summary on `Sheet1!A4:C10` includes 2011 `Profit` 2,951,993 and 2012 `Profit` 2,881,301—the reverse of the actual-date grouping. Its 2013 cached `Profit` is 5,959,208, 590 above the original raw-date grouping and equal to the anomalous row's `Profit`. The second workbook copy also stores this pivot summary even though its `A2` date is 2013-11-26. The 2016 cached `Profit` and `Revenue` agree with actual-date grouping. The mismatch source (field selection, mixed `Year` types, and/or stale pivot cache) cannot be resolved without controlled remediation and refresh in a separate working copy.
- `Sheet1!S48` caches `#REF!`; its stored formula is a `GETPIVOTDATA`-based revenue label. `Pivot!O18` caches `#REF!` for a `GETPIVOTDATA` quantity formula. Neither was recalculated.
- No currency column or source-currency documentation exists in `Raw Data`. The workbook's pound-sign number format and dashboard labels are presentation evidence, not proof of GBP.
- The `Profit` column is reported generically in raw data, while the pivot labels a summary `Gross Profit`. The arithmetic can reproduce a margin-like ratio, but the source's formal definition of `Profit` was not established.

### Other audited workbooks

- `First Sales Dashboard - Copy.xlsx` uses a distinct `Raw` sheet with a 2023–2025 order dataset; its `Raw Data` sheet is absent. It does not substantiate the 2011–2016 Sales Analytics figures.
- `DMAIC Gateways.xlsx` contains Define/Measure/Analyze/Improve/Control-style workbook sheets, but the existing audit found no formula cells in those sheets. It can support the existence of a DMAIC-structured workbook, not measured productivity improvement or an outcome claim.
- No README claim was traced to the `First Sales Dashboard - Copy.xlsx` workbook or to measured results from `DMAIC Gateways.xlsx`. The README's Green Motion and AI workflow narratives are not verified by these four spreadsheets and should not be attributed to them.

## Claim-by-claim reconciliation

| # | Exact claim and location | Evidence in audited source(s) | Verification | Recommended treatment |
|---:|---|---|---|---|
| 1 | README lines 77, 97–98: cappuccino is **2.7% of monthly income in Nepal** and **0.7% in the US**. | Starbucks workbook `11_Derived_Calcs!A5:E5`, `_calc!B8`, and `2_Nepal_Macroeconomic!B5`. Only 0.23% of annual GDP per capita is calculated; there is no US input/calculation. | **Contradicted as a result attributed to the audited workbook; underlying monthly-income claim unverified.** | **Remove or mark unverified** pending documented, symmetric monthly-income inputs; do not substitute the GDP proxy. |
| 2 | README line 79: relative burden is **approximately 3.86 times**. | Arithmetic `2.7 / 0.7 = 3.8571…`. | **Supported conditionally as arithmetic only.** The two input rates are unverified. | **Qualify** as conditional arithmetic only, or omit until both input rates are established. |
| 3 | Workbook `11_Derived_Calcs!A5:E5`: US$3.50 is **0.23% of GDP per capita**. | Formula/cache in `_calc!B8`; denominator in `2_Nepal_Macroeconomic!B5`; independent result 0.2278794%. No price citation; only an indirect World Bank source note. | **Supported with qualification** as an arithmetic calculation on the stored inputs. | **Retain only as an indicative annual-GDP-per-capita ratio** after source, period, size, location and currency for the price and direct GDP source are documented. |
| 4 | README lines 142–147: **£2.88m in 2011** and **£7.04m in 2016**. | `Profit Loss Dashboard project.xlsx`, `Raw Data!A1:R113039`, grouped by parsed `Date`; sums 2,881,301 and 7,035,948. Cached `Sheet1!A4:C10` has a different 2011 figure. No raw currency field. | **Supported with qualification** for rounded source-unit profit totals under actual-date grouping; GBP is unverified and the stored pivot conflicts for 2011. | **Qualify/recalculate** in source units; resolve date and pivot basis and establish currency before publishing currency labels. |
| 5 | README line 149: endpoint change is **144.4%**. | From rounded displayed values 2.88 and 7.04: 144.444…%, which rounds to 144.4%. From exact raw-date `Profit` totals: 144.1934%, or 144.2%. | **Supported with qualification** only as arithmetic on rounded displayed numbers; not the exact raw-data result. | **Recalculate** from unrounded values and report 144.2% (source units), if the actual-date basis is approved. |
| 6 | README lines 81, 151, 326–327: calculation workbooks/data are not present in the repository. | Active OneDrive Git root contains only its stub README and `.gitattributes`; Downloads is a separate Git clone whose working folder contains the four workbooks and whose Git index tracks them. The tagged README is in this Downloads clone. | **Supported only when “repository” means the active OneDrive repo; not true of the inspected Downloads working copy.** The Downloads workbooks are present in its Git checkout, but that does not by itself establish what is published remotely. | **Qualify** the evidence status by naming the relevant repository/commit and whether the data files are actually published. |
| 7 | `index.html` line 60: **113,0038-row** transaction dataset. | Sales `Raw Data` dimensions and pandas row count: 113,036 nonblank records and two trailing blank rows (113,038 rows below header). | **Contradicted** as written: the number is malformed and does not equal the nonblank record count. | **Correct** to a clearly defined count, e.g. nonblank records, after deciding whether blank rows count. |
| 8 | `index.html` line 60: **48.2% revenue increase** and **33.2% gross profit increase** over the full six-year period. | Raw actual-`Date` endpoint calculations: Revenue 97.5862%; `Profit` 144.1934%. Stored summary values do not reproduce the two website percentages; neither value was found as a matching cached numeric result in the two checked sales-workbook copies. | **Contradicted under unfiltered 2011–2016 actual-date endpoint aggregation; original basis unverified.** | **Investigate or remove** until metric definition, dates, filters and source cells are identified; do not replace with a guessed denominator or different period. |
| 9 | `index.html` line 60: **37.8% gross margin**. | Raw-date 2011–2016 `Profit` sum / `Revenue` sum = 37.7864%; cached dashboard values include 0.377867 and 0.378. | **Supported with qualification.** The rounded figure reproduces, but formal `Profit` definition and currency remain unknown. | **Retain with definition and source-unit caveats**; call it gross margin only if the source owner confirms `Profit` means gross profit. |
| 10 | `index.html` line 60: **Bikes contributed about 72.5% of revenue**. | `Raw Data` grouped by `Product_Category`: Bikes revenue 61,782,134 / total 85,270,058 = 72.4547%. Cached `Pivot!N5` = 0.7245386. | **Supported with qualification.** | **Retain** with period, aggregation basis and source-unit/currency qualification. |
| 11 | `index.html` line 60: **2016 revenue decline**, and recommendation to investigate before increasing inventory / consider cross-selling. | Actual-date `Revenue` is down 11.5392% from 2015 to 2016; `Profit` is down 6.5433%. The workbook alone does not establish a cause, inventory decision, or incremental cross-selling demand. | **Supported with qualification** as an observed decline and a proposed investigation; commercial outcomes are unverified. | **Retain as a question/proposal**, not as a demonstrated driver or outcome. |
| 12 | README project/tool claims; `First Sales Dashboard - Copy.xlsx` and `DMAIC Gateways.xlsx`. | First Sales `Raw` is a separate 2023–2025 set; DMAIC sheets show workflow structure but no audited formulas/results. No Power BI project file was inspected or found in the Downloads listing. | **Unverified as to the specific project/authoring claims; unrelated to the 2011–2016 measures.** | **Investigate further** only if these projects/tools are to be described as evidenced outputs; do not use these files to support Sales Analytics figures. |

## Prioritised proposed corrections

### Priority 1 — Do not publish unsupported numeric interpretations

1. Hold the 2.7%/0.7% monthly-affordability comparison and its 3.86x interpretation as validated findings. The 3.86 arithmetic is reproducible, but the inputs are not.
2. Hold or remove the website's 48.2% and 33.2% growth figures unless their distinct, reproducible basis is located.
3. Do not attach a GBP label to the sales totals until currency is established from a source dataset or owner.

### Priority 2 — Resolve source data before refreshing sales outputs

4. Compare `Raw Data!A2` in both sales workbook copies with the authoritative original data. The alternate copy's 2013-11-26 value is a useful lead, not authorization to silently overwrite the anomalous date.
5. Decide how the 5,354 date-typed `Year` values should be represented, and verify the 5,355 mismatches against the actual date source.
6. Identify why there are 1,000 repeated nonblank full-row records and two trailing blank rows. Obtain a transaction/business key or source rule; do not automatically delete repeated records.
7. In a separate working copy, after source decisions, rebuild/refresh pivots and charts from an explicit, validated date field. Reconcile 2011–2013 and all annual values to raw data, then verify the resulting caches.
8. Diagnose `Sheet1!S48` and `Pivot!O18` `#REF!` formulas in that working copy. Do not treat their stored cache as a fresh recalculation.

### Priority 3 — Correct presentation and provenance once approved

9. Replace the malformed website row count with a defined count of records (not worksheet capacity or blank rows).
10. Recalculate percentages from unrounded totals and state whether “profit” means gross or net profit. Label all amounts as source units unless currency is documented.
11. Clarify in evidence-status text that workbook copies were supplied in Downloads and identify whether they are tracked/published in the intended repository. Keep the active OneDrive README and the tagged Downloads README distinct.
12. Only after the evidence choices above, update the relevant README/website statements. This report does not make or authorize those content changes.

## Evidence required before unresolved claims can be published

### Starbucks

- Original beverage price source, product size, store/location, observation date, currency and any exchange-rate source.
- Direct source and year for Nepal GDP per capita if retaining the proxy; distinguish it explicitly from monthly individual or household income.
- For a genuine monthly-income comparison, consistent, sourced Nepal and US monthly income measures for the same period and clearly stated individual/household basis, with calculation cells or reproducible table.
- A traceable calculation for the US 0.7%; if it cannot be supplied, remove it rather than infer a denominator.

### Sales Analytics

- Authoritative raw transaction source (including date and currency metadata), profit definition, and source-data lineage.
- Confirmation of the anomalous date and the mixed-type `Year` field against that source.
- Duplicate-key/business-rule review and explanation for blank rows.
- A refreshed output from a separate repaired working copy, with annual raw-data totals matched to pivot/chart summaries and both cached `#REF!` formulas resolved.
- A defined annual comparison period and unrounded calculation for every growth/margin figure, including the website-only 48.2% and 33.2%.
- Currency confirmation from source data or the data owner; number formats and symbols alone are insufficient.

### Project/tool descriptions

- If making a Power BI implementation claim, the relevant Power BI artifact or reproducible evidence of the work.
- If presenting DMAIC as an outcome project rather than a structured tracker/template, measured baseline and after-period data plus a method for attributing the change.
- If describing the workbook as coursework, independent work, or an implemented project, retain appropriate project provenance; spreadsheet contents alone do not establish authorship or external adoption.

## Factual errors vs presentation issues vs optional improvements

### Factual or reproducibility issues

- 113,0038 is malformed and not the number of nonblank source records.
- The two monthly-affordability percentages are not reproduced by the audited Starbucks workbook.
- The website's 48.2% revenue and 33.2% gross-profit growth are not reproduced by actual-date endpoint calculations or found in the stored numeric caches checked.
- The 2011/2012 stored pivot values conflict with raw actual-date grouping.
- GBP currency and formal `Profit` definition are unsupported by raw-data fields/source documentation.
- Two stored `#REF!` formula errors and unresolved date/year/duplicate issues remain.

### Presentation or qualification issues

- Separate an annual GDP-per-capita proxy from monthly personal affordability.
- Distinguish exact raw-data changes from changes calculated on rounded display values.
- Explicitly label source units and define the denominator/period in growth calculations.
- State whether “dataset rows” means nonblank records, worksheet rows below the header, or another count.
- Distinguish the active OneDrive Git repository from the tagged Downloads Git clone.

### Optional improvements

- Add a compact provenance note with workbook filename, sheet/range, period and exact calculation definition after the sources are settled.
- Keep uncertainty and proposed decisions visible instead of converting provisional interpretations into causal conclusions.
- Add supporting data or project artifacts to the intended public repository only after deciding whether they may be published and checking for sensitive or licensed material.

## Git status and change record

**At the first status check of this task**, the active OneDrive repository was on `main` with `git status --short --branch` showing only `## main` (clean). The Downloads clone's status was first checked later in the investigation; it showed `## main...origin/main` and `?? workbook_data_quality_audit.md`. A pre-task status snapshot for that separate clone is not available from this session.

The Python environment configuration created an untracked `.vscode/settings.json` under the active OneDrive repository during this task. It was left untouched and not staged. The requested action-plan report was added to the Downloads clone; the existing audit report remains untracked there. No commits, pushes, staging, discards, README edits, dashboard edits, or source workbook edits occurred.

**Final status after creating and verifying this report:**

```text
OneDrive active repository:
## main
?? .vscode/

Downloads tagged-README clone:
## main...origin/main
?? portfolio_claim_reconciliation_action_plan.md
?? workbook_data_quality_audit.md
```

The status commands used were:

```powershell
git -C 'C:\Users\thaka\OneDrive\ドキュメント\GitHub\subash-portfolio' status --short --branch
git -C 'C:\Users\thaka\Downloads\subash-portfolio' status --short --branch
```
