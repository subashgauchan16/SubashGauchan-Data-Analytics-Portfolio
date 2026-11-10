# Phase 4 — Metric Provenance and Source History

**Prepared:** 2026-10-14  
**Purpose:** Trace the available local Git history, workbook copies, and portfolio files for the origin of disputed published metrics. This report records provenance evidence and its limits; it does not change or approve portfolio claims.

## Executive summary

- The sales website’s **48.2% revenue growth** and **33.2% gross-profit growth** first appear in the current project description in `index.html` at commit `46ef950b3ff8e6a48b0a3ea7fadbca4890b1ef89` (2026-10-13). That edit replaced an earlier text description of workbook totals—113,038 rows, £85.27m revenue, £32.22m gross profit, 37.8% margin, and 72.5% Bikes share—with growth percentages and a malformed row count. No formula, cell reference, input series, filter, or calculation method accompanies 48.2% or 33.2%.
- A **48.2%** number predates that website sentence in a README SVG added at `49262cf660249f058b5f633a4b2359bf22183118`, labeled “Revenue change (sample analysis).” It is a visual label, not a calculation record, and local history does not connect it to the workbook metric or establish the number’s basis. No earlier README text containing **33.2%** was found.
- The README’s **144.4%** originates as prose about the 2011 and 2016 endpoints in commit `fd4252832e16d64194114df08d0d9f19da6afb50`. The explicit formula appears in `README.md` at commit `6181335d7f8497e1d4920aa136c851f040180257`: `((7.04 − 2.88) / 2.88) × 100`. It is arithmetic on rounded million-unit endpoints, yielding 144.4444% and rounding to 144.4%; exact actual-date raw totals previously reproduced from the workbook yield 144.1934% (144.2% to one decimal). The exact raw-data result is 0.2510 percentage points below the unrounded rounded-endpoint result, or 0.2066 points below the displayed 144.4%.
- The README’s **2.7% Nepal** and **0.7% US** figures first appear in commit `fd425...`. The README gives no prices, income denominators, periods, citations, formulas, or workbook cells for them. In the next relevant README revision, `6181335...`, the text itself states that their model workbook and inputs are awaiting validation. The tracked Starbucks workbook was added later at `6f62b1f0d31e3dee51072e535ed6142889193edd`, but it does not calculate either monthly-income figure. Its distinct 0.23% metric is US$3.50 divided by stated Nepal 2025 GDP per capita of US$1,535.9.
- The available Downloads clone has only one committed version in `main` of each inspected workbook, all introduced in commit `6f62b1f...`. The only located alternate sales copy is `COUNTRY SALES.xlsx`; its plausible `Raw Data!A2` date is not an original calculation for the published growth percentages and its cached summary matches the primary workbook’s summary. No original calculation model for 48.2%, 33.2%, 2.7%, or 0.7% was found.
- **Provenance status:** 144.4% is traced to an explicit README calculation using rounded displayed endpoints. The other four contested percentages remain **unresolved as original calculations**. Their numeric coincidences or possible implied bases must not be substituted for provenance.

## Scope, repository identity, and limits

### Repositories and local history inspected

- **Tagged README and source workbook clone:** `C:\Users\thaka\Downloads\subash-portfolio`
  - Git root: `C:/Users/thaka/Downloads/subash-portfolio`
  - Branch: `main`; `origin/main` points to the same HEAD, `6f62b1f0d31e3dee51072e535ed6142889193edd`.
  - Remote configured locally: `origin` → `https://github.com/denilthaks/subash-portfolio`.
  - `git branch -a` shows `main`, `origin/main`, and `origin/HEAD` only. No tags were present. `git log main` and `git log --all` were searched. The latter also sees local agent checkpoint refs, which are not published branches or tags; they did not reveal a source calculation.
- **Active OneDrive repository:** `C:\Users\thaka\OneDrive\ドキュメント\GitHub\subash-portfolio`
  - Git root: `C:/Users/thaka/OneDrive/ドキュメント/GitHub/subash-portfolio`
  - Branch `main`, HEAD `d489fac34f09c6ffb3641217a5e59e622b27df9d`; no additional branch or tag was listed.
  - Its README is a short stub and it contains none of the audited workbooks. It is not the tagged README/source clone.

The history review used local Git data only; no fetch or remote history refresh was performed. Results therefore describe the currently available local refs, not any remote commits or files absent from this clone.

### Reports read before the search

- `C:\Users\thaka\Downloads\subash-portfolio\workbook_data_quality_audit.md`
- `C:\Users\thaka\Downloads\subash-portfolio\portfolio_claim_reconciliation_action_plan.md`
- `C:\Users\thaka\Downloads\subash-portfolio\phase3_evidence_validation_report.md`

The prior findings were used as leads. This phase did not repeat the data-quality audits or recalculate the annual sales series, except for independently checking the two already-documented 144.4% arithmetic bases.

### Portfolio files and available workbook copies searched

- `C:\Users\thaka\Downloads\subash-portfolio\README.md`
- `C:\Users\thaka\Downloads\subash-portfolio\index.html`
- `C:\Users\thaka\Downloads\subash-portfolio\Profit Loss Dashboard project.xlsx`
- `C:\Users\thaka\Downloads\subash-portfolio\COUNTRY SALES.xlsx`
- `C:\Users\thaka\Downloads\subash-portfolio\STARBUCKS_MARKETENTRY_ANALYIS.xlsx`
- `C:\Users\thaka\Downloads\subash-portfolio\First Sales Dashboard - Copy.xlsx`
- `C:\Users\thaka\Downloads\subash-portfolio\DMAIC Gateways.xlsx`
- `C:\Users\thaka\Downloads\subash-portfolio\main.js` and `pages.yml` were previously searched for a site calculation route; no metric-producing path was identified.

A filename-focused recursive inventory under `C:\Users\thaka\Downloads` found the five workbook files listed above and no additional matching workbook, affordability, or sales/profit source file. This is a bounded filename search, not proof that no other source exists elsewhere on the machine, in cloud storage, in a removed file, or outside local Git history.

## Claim provenance findings

### Sales website: 48.2% revenue growth and 33.2% profit growth

| Item | Evidence found | Provenance conclusion |
|---|---|---|
| Current website claim | `index.html:60` in the tagged Downloads clone states a 48.2% revenue increase and 33.2% gross-profit increase. | The site presents these as workbook-reported values but does not provide the calculation. |
| First claim-bearing project description in reachable history | Commit `46ef950b3ff8e6a48b0a3ea7fadbca4890b1ef89`, `index.html` (2026-10-13), introduced the current metrics. The parent revision described a 113,038-row dataset and £85.27m revenue, £32.22m gross profit, 37.8% gross margin, and 72.5% Bikes revenue share. The edited revision instead states “113,0038-row” and 48.2%/33.2%, while retaining 37.8% and 72.5%. | History establishes when the wording changed, not how the two percentage claims were calculated. The change has no accompanying formula or source-cell mapping. |
| Earlier 48.2% text | Commit `49262cf660249f058b5f633a4b2359bf22183118`, `README.md` embedded SVG, displays `+48.2%` with caption “Revenue change (sample analysis).” | This is the earliest located literal 48.2% in the README history. It is explicitly presented as a sample-analysis graphic; no arithmetic, year span, denominator, data source, or link to the later workbook claim is present. It is a lead only, not proof of the website metric’s origin. |
| Earlier 33.2% text | No earlier README occurrence found. It first appears in the `index.html` change at `46ef950...`; no formula or prior output was found. | Original 33.2% source and calculation are unresolved. |
| Workbook and source data history | `Profit Loss Dashboard project.xlsx` and `COUNTRY SALES.xlsx` are each added as binary files in commit `6f62b1f0d31e3dee51072e535ed6142889193edd` (“Add files via upload,” 2026-10-13). `git log main -- <workbook>` shows no earlier version of either file in reachable `main`. | These files permit current workbook inspection but do not preserve an earlier workbook revision containing the website’s 48.2%/33.2% calculations. |
| Current workbook checks already documented | `Profit Loss Dashboard project.xlsx`, `Raw Data` and cached `Sheet1!A4:C10`, as recorded in the Phase 3 report. Actual-`Date` endpoints reproduce 97.5862% Revenue growth and 144.1934% growth in the `Profit` field; cached annual pivot endpoints yield 138.3457% `Profit` growth. Targeted workbook formula/cache and chart scans did not find 48.2% or 33.2%. | Neither the published values nor their definitions are supported by the available workbook artifacts. The scans do not prove that a separate former workbook or untracked calculation was never used. |

**Decision:** Keep both website percentages marked unresolved unless the original analysis file, exact cells/formulas, start/end values, filters, period, and definition of “gross profit” can be provided. Do not treat the old “sample analysis” SVG label as calculation evidence or replace the claims with another metric without approval.

### README: 144.4% endpoint change

| Evidence | Finding |
|---|---|
| First README statement | Commit `fd4252832e16d64194114df08d0d9f19da6afb50` introduces the 2011 £2.88m and 2016 £7.04m endpoints and describes an approximately 144.4% increase. |
| Explicit calculation | Commit `6181335d7f8497e1d4920aa136c851f040180257`, README selected-performance comparison, states `((7.04 − 2.88) / 2.88) × 100 = 144.4%`. The current tagged README shows that formula at line 149 and endpoints at line 142. |
| Reproduction from rounded displayed endpoints | `((7.04 - 2.88) / 2.88) * 100 = 144.444444...%`, which rounds to **144.4%** to one decimal. Thus the published calculation is reproducible as arithmetic on rounded displayed millions. |
| Reproduction from actual-date raw totals | From the existing Phase 3 raw-data result, `(7,035,948 / 2,881,301 - 1) * 100 = 144.193439...%`, or **144.2%** to one decimal. This is 0.251005 percentage points below the unrounded calculation on displayed values and 0.206561 points below the displayed “144.4%”. |
| Limit | The README formula explains the published percentage’s arithmetic source, but it does not independently establish the source of the endpoints, currency, profit definition, or validity of the date/pivot basis. README history itself says the figures await reconciliation. |

**Decision:** If the endpoint arithmetic is retained, label 144.4% as calculated from the rounded README endpoint amounts. If an approved actual-date raw-data basis is later selected, recalculate from unrounded values and resolve the conflicting pivot/date/currency evidence before publication. Do not present the rounded-endpoint calculation as the original workbook’s native growth formula.

### Starbucks README: 2.7% Nepal and 0.7% US affordability

| Item | Evidence found | Provenance conclusion |
|---|---|---|
| First README introduction | Commit `fd4252832e16d64194114df08d0d9f19da6afb50`, README Starbucks section, introduces a cappuccino as 2.7% of monthly income in Nepal and 0.7% in the US. It also states 3.86× as the ratio of those values. | The history preserves the assertion and relative arithmetic, not its source model. No prices, denominators, periods, citations, formula cells, or underlying workbook reference accompany the new wording. |
| Validation wording in README history | Commit `6181335d7f8497e1d4920aa136c851f040180257` labels both inputs “Awaiting validation” and says the workbook/model inputs are not present in that repository. | This documents that the figures were already acknowledged as unvalidated at that revision; it does not supply provenance. |
| Workbook addition and current README mismatch | The named Starbucks workbook is added to tracked `main` later in commit `6f62b1f0d31e3dee51072e535ed6142889193edd`. Current README lines 81 and 97–98 still say the workbook/model inputs are not in the repository. | The project workbook is now present and tracked in the tagged Downloads clone; however, this workbook is not evidence for the 2.7% or 0.7% calculations. The statement should distinguish the existing project workbook from the missing model that produced those particular results. |
| What the tracked workbook actually calculates | `STARBUCKS_MARKETENTRY_ANALYIS.xlsx`, `11_Derived_Calcs!A5:E5`, `2_Nepal_Macroeconomic!B5`, and `_calc!B8` record US$3.50 divided by Nepal 2025 GDP per capita US$1,535.9, yielding 0.2278794% (displayed 0.23%). | This is a different ratio from a monthly-income affordability share. The workbook has no matching calculation for either README percentage and no US price or monthly-income denominator. |
| Missing source particulars | No workbook entry or README history evidence identifies the price source, drink size, location/store, date, tax treatment, monthly income measure, geography of the income statistic, reference period, or citation for either percentage. The workbook’s `$3.50` price lacks a documented source; the GDP input has a “World Bank (2025)” note but the workbook does not include a populated source sheet/direct retrieval record. | All original inputs, calculation basis, and citations for 2.7% and 0.7% remain unresolved. No alternative denominator or price was inferred. |

The `3.86×` statement can be reproduced as arithmetic (`2.7 / 0.7 = 3.8571...`), but without the two source rates and comparable definitions, it is not evidence of a verified relative affordability burden.

**Decision:** Do not publish 2.7%/0.7% as established results until the underlying model or contemporaneous inputs and citations are recovered. If the underlying source cannot be found, retain them only as explicitly unverified historical estimates or remove them; do not infer the missing prices or income denominators.

## Search record and evidence boundaries

Read-only history and source checks included:

- `git status --short --branch`, `git rev-parse --show-toplevel`, `git rev-parse HEAD`, branch/tag/ref listing, `git log main`, and `git log --all` in both repositories.
- Literal/string-history searches (`git log -S` and `git log -G`) for 48.2%, 33.2%, 144.4%, 2.7%, 0.7%, and related claim terms in `README.md` and `index.html`.
- Inspection of the parent/current `index.html` text around the edit introducing 48.2%/33.2%, and the relevant historical README text around the affordability and 144.4% additions.
- Workbook-path history for all five tracked `.xlsx` files; filename-focused recursive inventory of Downloads; text search through portfolio documents; workbook formula/cache and relevant cell checks previously recorded in the read audit and Phase 3 report.

Limitations:

- Git’s local history can show when a text claim entered the tracked files, not who calculated it or what unpublished source they used.
- Workbook binaries were added to tracked history as uploads, with no earlier committed versions on `main`; uncommitted original source files, cloud versions, email, or other local directories are outside the evidence inspected.
- No remote fetch was performed. The report makes no claim about objects or branches unavailable in this local clone.
- The historical README SVG’s “sample analysis” label does not tie its 48.2% to the later dashboard description.
- The Excel workbooks’ cached values were not recalculated or saved in this phase. Prior reports supply the raw-data arithmetic used here.

## Recommended decisions

1. **48.2% and 33.2%:** Treat as unresolved, not as workbook-verified. Request the original calculation workbook/version or exact source values and definitions, including gross-profit definition, period, filters, and date/duplicate policy.
2. **144.4%:** The current README’s formula is known: it calculates from rounded £ millions. Decide whether to retain this as rounded-endpoint arithmetic, or defer to a later approved recalculation from reconciled exact totals. Currency and profit definition still need verification either way.
3. **2.7% and 0.7%:** Request the original affordability model or contemporaneous documentation identifying both drink prices, dates, sizes/locations, income measures/denominators, periods, currencies/conversion, and citations. If unavailable, do not present as validated.
4. **README evidence-status sentence:** Decide whether to clarify that the portfolio contains a Starbucks workbook but not the model/input source for the 2.7%/0.7% figures.
5. **Scope of further search:** If these original files may exist outside the Downloads clone, identify an approved additional directory or source to search. The current findings cover the two known repositories and filename-matched files in Downloads only.

## Git status and change record

Status immediately before creating this report:

- Downloads/tagged clone: `main`, HEAD `6f62b1f0d31e3dee51072e535ed6142889193edd`, up to date with `origin/main`; untracked `phase3_evidence_validation_report.md`, `portfolio_claim_reconciliation_action_plan.md`, and `workbook_data_quality_audit.md`.
- Active OneDrive clone: `main`, HEAD `d489fac34f09c6ffb3641217a5e59e622b27df9d`; pre-existing untracked `.vscode/`.

This report is intended to be the only new file. No README, website, workbook, source code, or existing report was changed. Nothing was staged, committed, pushed, installed, or fetched.
