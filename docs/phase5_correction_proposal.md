# Phase 5 — Correction Proposal for Approval

**Prepared:** 2026-10-14  
**Status:** Proposal only — no portfolio changes are authorized or made in this phase.  
**Target repository:** `C:\Users\thaka\Downloads\subash-portfolio` (the tagged README/workbook clone). The active OneDrive clone is a separate repository and is not the target of this proposal.

## Executive summary

The evidence supports proposing removal or explicit qualification of several claims pending source decisions. In particular:

- The README’s Nepal 2.7% and US 0.7% monthly affordability results and their 3.86× comparison are not supported by the tracked Starbucks workbook. The workbook calculates a different, weakly sourced annual-GDP-per-capita proxy of 0.23%; that proxy must not be represented as monthly affordability.
- The README’s 144.4% increase is reproducible only as arithmetic on its rounded displayed endpoints (£2.88m and £7.04m). Actual-date raw totals produce 144.193439%, or 144.2% to one decimal, before resolving the currency, `Profit` definition, date anomaly, duplicates, mixed `Year`, and cached-pivot disagreements.
- The website’s 48.2% revenue and 33.2% “gross profit” increases have no located source calculation. Do not substitute alternative percentages or infer the original methodology.
- The website row-count text `113,0038-row` is malformed. The workbook has 113,036 nonblank records after the header and 113,038 worksheet rows below the header, including two blank rows. The intended definition should be selected before a replacement count is published.
- Other website metrics (37.8% margin and 72.5% Bikes revenue share) reproduce under a stated raw-date calculation but need field-definition and source-unit qualifications. The 2016 decline is descriptive evidence; associated inventory/cross-selling actions remain proposals, not proven business outcomes.
- README statements that required workbooks are “not in this repository” need repository-specific wording: the workbook files are present in the Downloads clone, but their presence does not validate the missing model behind affordability claims or establish what is published remotely.

This report separates confirmed workbook observations, reproducible arithmetic, evidence-based inferences, and unknowns. Every proposed portfolio wording change is subject to approval.

## Evidence categories

### Confirmed observations

- `Profit Loss Dashboard project.xlsx` → `Raw Data` contains 113,036 nonblank records and two fully blank trailing worksheet rows. The `Year` column has 5,354 date-typed values; there are 5,355 `Date`-year/`Year` mismatches. `Raw Data!A2` has actual date `1906-09-02`, while separate day/month/year fields read 26 / November / 2013.
- A full-row equality scan found 1,000 repeated nonblank records beyond their first occurrence. Without a transaction key or data-owner rule, this does not establish that those records are erroneous duplicates.
- The stored annual pivot has 2011/2012 values that are switched relative to raw grouping by actual `Date` year. Its 2013 total includes the anomalous row's 590 `Profit` and 950 `Revenue`; 2016 agrees. The candidate `COUNTRY SALES.xlsx` has a different `Raw Data!A2` date but retains the same cached pivot values. No pivot was refreshed or recalculated in this phase.
- No currency field or source-currency documentation was found in raw transaction rows. Pound-sign formatting is not proof of GBP. Raw field `Profit` is not, by itself, proof that its economic definition is gross profit.
- The Starbucks workbook’s `11_Derived_Calcs!A5:E5` text describes US$3.50 / US$1,535.9; `_calc!B8` stores the formula for a 0.23% GDP-per-capita ratio. The denominator is identified as Nepal 2025 GDP per capita with a `World Bank (2025)` note. No documented price source, US input, or monthly income input was found.
- The Downloads clone has the five workbooks in its tracked checkout. That fact does not prove which workbook versions or data files are published at the remote URL.

### Reproducible calculations

All sales calculations below use `Profit Loss Dashboard project.xlsx` → `Raw Data`; parse `Date` with `pandas.to_datetime(errors="coerce")`; coerce `Profit` and `Revenue` to numeric; group by actual `Date` year; retain valid rows; apply no filters, date correction, or deduplication. Amounts are source units, not proven currency.

| Calculation | Inputs | Result |
|---|---|---:|
| 2011–2016 `Profit` endpoint change | `(7,035,948 / 2,881,301 - 1) × 100` | 144.193439% (144.2% to one decimal) |
| 2011–2016 `Revenue` endpoint change | `(17,713,385 / 8,964,888 - 1) × 100` | 97.586239% |
| Overall `Profit`/`Revenue` ratio for 2011–2016 | `32,220,510 / 85,270,058 × 100` | 37.786429% (37.8%) |
| Bikes revenue share for 2011–2016 | `61,782,134 / 85,270,058 × 100` | 72.454664% (72.5%) |
| 2016 vs. 2015 Revenue change | `(17,713,385 / 20,023,991 - 1) × 100` | -11.539188% |
| 2016 vs. 2015 `Profit` change | `(7,035,948 / 7,528,563 - 1) × 100` | -6.543281% |
| Starbucks stored-input proxy | `100 × US$3.50 / US$1,535.9` | 0.2278794% (0.23%) of stated annual Nepal GDP per capita |
| Affordability ratio arithmetic only | `2.7 / 0.7` | 3.8571× (about 3.86×); inputs and comparability are not validated |

README rounded-endpoint arithmetic:

```text
((7.04 - 2.88) / 2.88) * 100 = 144.444444...% → 144.4% to one decimal
```

Compared with the unrounded rounded-endpoint result, the exact actual-date result is **0.251005 percentage points lower**. Compared with the displayed 144.4%, the exact actual-date result is **0.206561 percentage points lower**. The difference does not establish which date basis, duplicate policy, or profit definition is intended.

### Inferences supported, but not conclusive

- The existing annual pivot likely groups by the inconsistent `Year` field and/or preserves stale cache values: its swapped 2011/2012 totals and the 2013 anomalous-row addition align with those data issues. The exact cause cannot be established from cached output without validating source records and then refreshing a working copy.
- The old README SVG `+48.2%` captioned “Revenue change (sample analysis)” could be related to later site text, but no calculation or record links them. It is not evidence of the 2011–2016 website metric’s source.
- The 0.23% macroeconomic ratio can serve only as an explicitly labelled illustration based on stored inputs; it is not a personal or household monthly affordability measure.

### Unknowns

- Whether the source sales currency is GBP or another currency; whether `Profit` means gross profit, net profit, or another measure; whether any filters or different date basis produced the website percentages.
- Whether the 1906 date is a data-entry error and, if so, what authoritative date should replace it; whether the mixed `Year` values are corrupted or reflect another source convention.
- Whether the repeated rows are valid repeated transactions or duplicates; no authoritative transaction key or source rule was supplied.
- Whether the stored pivot/chart is stale, groups by `Year`, applies other filters, or combines causes; no refresh was performed.
- For 2.7%/0.7%: source price(s), drink size, store/location, observation date, currency/exchange rate, income measures and denominators, period, source citations, and original formulas.
- Whether README-listed workbook files are present in the intended public remote repository at the point of publication.

## Claim-by-claim status and publication risk

Risk indicates the consequence of publishing the statement as established fact without the qualifications/evidence shown.

| # | Claim and exact current location | Evidence available | Validation status | Risk as written |
|---:|---|---|---|---|
| 1 | README “Key analytical finding” and affordability table, lines 77–78 and 90–93: cappuccino is **2.7% of monthly income in Nepal**. | No matching formula or monthly income denominator in the workbook. Workbook computes only the distinct annual GDP-per-capita proxy. | **Unverified**; not reproduced. | **High** — a specific personal affordability result without identifiable price, denominator, period, or citation. |
| 2 | README “Key analytical finding” and affordability table, lines 77–78 and 90–93: same cappuccino is **0.7% of monthly income in the US**. | No US price, income denominator, period, source, or calculation in the workbook. | **Unverified**. | **High** — same comparison risk, plus no evidence the US basis matches Nepal’s. |
| 3 | README line 79: Nepal relative income burden is **about 3.86×** the US. | The arithmetic `2.7 ÷ 0.7` yields 3.8571×. Neither input has been validated or shown comparable. | **Supported with qualification as arithmetic only**; not supported as an affordability conclusion. | **High** if presented as a measured cross-country burden; **low** if clearly described as conditional arithmetic on unverified figures. |
| 4 | README line 81 and table/evidence notes around lines 93 and 326–327: affordability model/workbook inputs are “not present in this repository” / “not in repo.” | Tracked Starbucks project workbook exists in the Downloads clone but does not contain inputs or formulas for 2.7%/0.7%. The active OneDrive clone is separate; remote publication was not checked. | **Partly stale/ambiguous**; accurate only if “model/input source for these two figures” is intended, not if it refers to any Starbucks workbook. | **Medium** — readers could be misled about which files exist and what they validate. |
| 5 | README line 149: **144.4%** increase from £2.88m (2011) to £7.04m (2016). | Explicit README formula reproduces 144.4% from rounded endpoints. Actual-Date `Profit` totals reproduce 144.193439%; pivot disagrees for 2011. Currency and `Profit` definition unresolved. | **Supported with qualification as rounded-endpoint arithmetic**; not exact raw-data growth or validated GBP/gross-profit statement. | **High** as an exact/source-verified GBP profit result; **medium** if explicitly identified as arithmetic on rounded reported endpoints. |
| 6 | README lines 142–147: **£2.88m (2011)** and **£7.04m (2016)** profit endpoints. | Actual-Date raw totals are 2,881,301 and 7,035,948 source units, which round to 2.88m and 7.04m. Cached pivot has 2011 = 2,951,993. No raw currency field. | **Supported with qualification** for rounded actual-Date source-unit totals; 2011 conflicts with stored pivot; GBP and profit definition unverified. | **High** if pound denomination and dashboard reconciliation are implied; **medium** if labelled provisional source-unit totals with basis. |
| 7 | `index.html` line 60: **113,0038-row** transaction dataset. | Raw sheet: 113,036 nonblank records; worksheet has 113,038 rows below header including two blank rows. | **Contradicted as written**; malformed count and undefined count basis. | **High** for basic portfolio accuracy; readily correctable after count basis approval. |
| 8 | `index.html` line 60: **48.2% revenue increase** over six years. | No source calculation found. Actual-Date raw endpoints give 97.586239%; no evidence establishes intended filters/period/denominator. Earlier SVG label “sample analysis” is unlinked. | **Unverified**; not reproduced by available raw-date method. | **High** — exact performance claim has no traceable method. |
| 9 | `index.html` line 60: **33.2% gross profit increase** over six years. | No source calculation found. Raw `Profit` column actual-Date endpoints give 144.193439%; cached pivot endpoints give 138.3457%; neither establishes “gross profit.” | **Unverified**; published value and measure definition unsupported. | **High** — both growth value and gross-profit interpretation lack traceable evidence. |
| 10 | `index.html` line 60: **37.8% gross margin**. | Raw-Date aggregate `Profit / Revenue` is 37.786429%; cached dashboard ratio is approximately 0.377867. Raw field definition is not established. | **Supported with qualification** as a `Profit`/`Revenue` ratio rounded to 37.8%; “gross margin” remains unverified. | **Medium** — arithmetic matches, but terminology implies a measure not established by the raw data. |
| 11 | `index.html` line 60: **Bikes contributed about 72.5% of revenue**. | Bikes revenue 61,782,134 / total revenue 85,270,058 = 72.454664% over actual-Date 2011–2016 rows. | **Supported with qualification** for this category share and period; currency/source validity caveats remain. | **Low–medium** — numerical support exists, but period and source units are unstated. |
| 12 | `index.html` line 60: **2016 revenue decline**, recommend investigate before increasing inventory, and explore cross-selling. | Raw-Date Revenue down 11.539188% from 2015; `Profit` down 6.543281%. Workbook does not establish cause, stock outcome, or cross-sell demand. | **Supported with qualification** for the decline; the recommended actions are proposals, not outcomes. | **Medium** if recommendations read as proven business conclusions; lower if clearly framed as questions to test. |
| 13 | README evidence section, lines 326–327: sales totals/workbook/data “not present in this repository.” | Sales workbook and dataset are in the Downloads clone and tracked there; the active OneDrive clone and remote/public status differ. | **Repository-dependent and ambiguous**; not globally accurate for the inspected Downloads checkout. | **Medium** — creates an inaccurate provenance impression unless repository and publication status are named. |
| 14 | README Green Motion/DMAIC project narrative; no precise numeric claim identified. | `DMAIC Gateways.xlsx` shows DMAIC workflow structure, but audited sheets contain no measured result formulas or outcome data. | **Supported only as a framework/workbook description**; any implied productivity improvement is unverified. | **Medium** if the narrative implies demonstrated measured improvement; lower when framed as coursework/process proposal. |
| 15 | README Sales Analytics description of Excel/Power BI work; associated numeric summaries and charts. | Excel workbook is available. No Power BI project artifact or reproducible Power BI evidence was identified in the audited files. | **Partly evidenced** for Excel workbook analysis; **unverified** for a specific Power BI implementation. | **Medium** if readers infer a functioning Power BI artifact that cannot be inspected. |

## Proposed change table — approval required before implementation

No text below is being applied now. Proposed language is illustrative and may be revised after approval.

| Exact file/location | Current wording or metric | Proposed wording/action | Rationale | Approval required |
|---|---|---|---|---|
| `README.md`, Starbucks “Key analytical finding” and affordability table (lines 77–79, 90–93) | 2.7% Nepal, 0.7% US, 3.86× relative burden | **Remove until evidence is recovered**; alternatively retain only with a conspicuous “unverified estimate; original inputs unavailable” notice. Do not substitute 0.23%. | Inputs and comparability are unknown; 3.86× merely divides unsupported inputs. | Approve remove vs. visibly qualify; approve a later evidence search scope. |
| `README.md`, Starbucks evidence-status text (lines 81, 93, 326–327) | “workbook and model inputs … not present in this repository” / “not in repo” | **Qualify** as: “The Starbucks project workbook is included in this Downloads repository copy; the original inputs and calculation supporting the 2.7%/0.7% monthly-income estimates are not available here.” Confirm remote publication wording separately. | Accurately distinguishes an existing project workbook from the missing claim model and avoids conflating the two repository clones. | Approve wording and whether the note should describe local checkout, Git-tracked state, or remote publication. |
| `README.md`, selected performance table/formula (lines 142–149) | £2.88m and £7.04m, 144.4% endpoint profit increase | **Investigate further** before replacing. If retaining the existing arithmetic, qualify as 144.4% calculated from rounded reported endpoints, with currency and measure unverified. If approved after data-source decisions, replace with exact raw-Date result 144.2% in source units and identify it as the `Profit` column—not “gross profit” absent confirmation. | Rounded endpoints reproduce the displayed percentage; exact raw totals differ, and the 2011 pivot/date/duplicate/currency issues remain unresolved. | Approve whether to retain qualified rounded arithmetic, hold the claim, or use the raw-Date result only after evidence gates pass. |
| `index.html`, Sales Analytics paragraph (line 60), row count | “113,0038-row transaction dataset” | **Replace only after count basis approval**; candidate wording: “113,036 nonblank transaction records (plus two blank worksheet rows).” | This distinguishes actual records from the 113,038 worksheet rows below the header. | Approve record-count definition and whether to mention blank rows publicly. |
| `index.html`, Sales Analytics paragraph (line 60), 48.2% revenue | “The workbook reports a 48.2% revenue increase” | **Remove until the original method and source are recovered.** Do not replace with 97.6% in this proposal. | 48.2% is not reproduced and no source method was found; 97.6% is a different, still caveated raw-Date calculation. | Approve holding/removing; or provide original workbook/calculation evidence for investigation. |
| `index.html`, Sales Analytics paragraph (line 60), 33.2% gross profit | “The workbook reports a 33.2% gross profit increase” | **Remove until evidence is recovered.** Do not infer that `Profit` is gross profit and do not replace with 144.2% or cached-pivot growth without source-owner approval. | Neither the stated percentage nor metric definition is supported by available data. | Approve holding/removing; or provide source calculation and formal measure definition. |
| `index.html`, Sales Analytics paragraph (line 60), 37.8% | “37.8% gross margin” | **Retain with qualification** as a “37.8% aggregate `Profit`-to-`Revenue` ratio for 2011–2016 using actual `Date` year” if the data basis is approved; otherwise hold. Avoid “gross margin” pending definition. | Ratio reproduces to rounding; the raw `Profit` field does not prove gross-profit semantics. | Approve measure label, period, and whether provisional source-unit data may be described. |
| `index.html`, Sales Analytics paragraph (line 60), 72.5% | “Bikes contributed about 72.5% of revenue” | **Retain with qualification**: identify it as category revenue share for actual-Date 2011–2016 rows, in source units, after source-quality decisions. | Independently reproduces to rounding; date and currency context are currently omitted. | Approve qualification and publication before data-source issues are closed. |
| `index.html`, Sales Analytics paragraph (line 60), recommendation | 2016 revenue decline; investigate before inventory increase; explore cross-selling | **Retain as a proposed investigation only**, explicitly state the 2016-vs-2015 observed revenue decline and do not imply a causal diagnosis or established cross-sell opportunity. | The decline reproduces; recommendations have not been tested as outcomes. | Approve keeping recommendation as a hypothesis and approve the stated comparison basis. |
| README Green Motion/DMAIC narrative | Process-improvement framing based on DMAIC workbook | **Qualify** as a structured framework/coursework or proposed investigation; do not imply measured productivity improvement without baseline/after data. | The workbook demonstrates structure, not measured impact. | Approve if this narrative is to be included or strengthened. |
| README or project metadata describing Power BI | Power BI listed in Sales Analytics tools | **Investigate further**; retain only if an artifact or reproducible implementation evidence can be supplied. | Audited workbook proves Excel-related work but no Power BI artifact was identified. | Approve whether Power BI claim remains pending evidence or is narrowed to verified tools. |

## Minimum additional evidence required before unresolved claims can be published

### Nepal 2.7%, US 0.7%, and 3.86× comparison

Minimum: the original calculation workbook/table or equivalent reproducible record showing, for both countries, the beverage price, product and size, location, observation date, currency and exchange-rate source if applicable; a consistent monthly income measure (individual or household, explicitly defined), source, geography, and period; exact formula; and citations/retrieval dates. For the 3.86× comparison, show that both component percentages use comparable definitions and periods.

The annual GDP-per-capita input only supports a separately labelled macroeconomic proxy after its price and direct GDP source are verified. It is not a substitute for the monthly-income calculation.

### 144.4%, endpoint amounts, and 2011–2016 trend

Minimum: authoritative source transaction data or owner-confirmed original; currency and conversion metadata; formal definition of `Profit` (including gross vs. net); approved treatment of `Raw Data!A2`; explanation/validation of the 5,354 date-typed `Year` cells and 5,355 year mismatches; transaction-key or business-rule decision for the repeated rows; explanation for the two blank rows; and a documented period/filter/date basis. After those decisions, refresh a separate working copy and reconcile each annual pivot/chart total (especially 2011–2013) to the approved raw-data basis, including stored `#REF!` formula resolution. Recalculate percentages from unrounded totals.

For **144.4% as already written**, the arithmetic itself needs only the documented rounded endpoints, but publication as a validated source-data result still needs the source and label qualifications above.

### Website 48.2% revenue and 33.2% gross-profit growth

Minimum: original source workbook/version or contemporaneous calculation export identifying exact start/end values, years, formulas, field definitions, filters, duplicate handling, date basis, currency, and source cells. For 33.2%, explicitly define and document gross profit. If no original evidence is recovered, keep the figures removed/unverified; do not reverse-engineer a substitute.

### 37.8%, 72.5%, and business recommendations

Minimum for numerical publication: approve the actual-Date 2011–2016 basis and provide source currency/measure definition. For “gross margin,” source-owner confirmation that `Profit` means gross profit is also required. For inventory or cross-selling recommendations presented as opportunities rather than hypotheses, supply relevant demand, inventory, customer/basket, or outcome evidence and an analysis connecting it to the recommendation.

### Repository/data-availability statements and project/tool claims

Minimum: decide which repository is intended for public readers; verify the current remote-tracked/published file list for that repository; identify which workbook is the calculation source, not merely a related project workbook. For Power BI, supply the relevant project file/report or equivalent verifiable artifact. For a DMAIC outcome, provide baseline and after-period measures plus a credible method for attributing change.

## Prioritised approval decisions

1. Decide whether to hold/remove the four unresolved headline percentages (48.2%, 33.2%, 2.7%, 0.7%) pending evidence, rather than publish them with a weak caveat.
2. Decide whether the 144.4% figure should remain only as qualified rounded-endpoint arithmetic or be held until source-data reconciliation allows a precise replacement.
3. Decide whether to approve public wording for the 113,036 nonblank record count and the qualified 37.8%/72.5% figures.
4. Identify which repository is intended for the public portfolio and whether remote file publication should be checked before changing “not in repository” statements.
5. Provide or identify any original calculation files/source data for the sales percentages or Starbucks affordability model; otherwise keep those results unverified.
6. Decide whether to keep Power BI and DMAIC-related descriptions pending implementation/outcome evidence, or narrow them to claims supported by currently available artifacts.

## Change-control statement

This document is a proposal only. No README, website, workbook, source code, or existing report was edited. No data was modified or recalculated-and-saved. No changes were staged, committed, pushed, fetched, installed, or made to Git history. No proposal item should be implemented without explicit user approval.

## Approval checklist

- [ ] Hold/remove 48.2%, 33.2%, 2.7%, and 0.7% until their required evidence is supplied.
- [ ] Choose the publication treatment for 144.4% (qualified rounded endpoints, or hold pending exact reconciliation).
- [ ] Approve or defer the corrected website record-count definition.
- [ ] Approve qualified use of the 37.8% `Profit`/`Revenue` ratio and 72.5% Bikes revenue share.
- [ ] Confirm the intended public repository and treatment of data-availability statements.
- [ ] Decide whether Power BI and DMAIC descriptions remain pending evidence or are narrowed.

## Git status and files created

Immediately before this phase’s report creation:

- **Downloads/tagged README clone:** root `C:/Users/thaka/Downloads/subash-portfolio`, branch `main`, HEAD `6f62b1f0d31e3dee51072e535ed6142889193edd`, up to date with `origin/main`; pre-existing untracked files were `phase3_evidence_validation_report.md`, `phase4_metric_provenance_report.md`, `portfolio_claim_reconciliation_action_plan.md`, and `workbook_data_quality_audit.md`.
- **Active OneDrive clone:** root `C:/Users/thaka/OneDrive/ドキュメント/GitHub/subash-portfolio`, branch `main`, HEAD `d489fac34f09c6ffb3641217a5e59e622b27df9d`; pre-existing untracked path `.vscode/`.

After creating this report, the only new file in this phase is `phase5_correction_proposal.md` in the Downloads clone. The OneDrive status was unchanged.
