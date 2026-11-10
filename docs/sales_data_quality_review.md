# Sales data-quality review

This review is designed to preserve the source workbook and record candidate corrections separately. Do not overwrite source values automatically.

## Findings to validate

- 5,354 values in `Year` are date-typed rather than year numbers.
- 5,355 mismatches exist between the actual `Date` year and the stored `Year` field; the 1906 date contributes one mismatch.
- `Raw Data!A2` contains `1906-09-02`, while the companion fields indicate 26 November 2013. `2013-11-26` is a candidate, not a verified correction.
- There are 1,000 repeated nonblank full-row records beyond their first occurrence. Without a transaction key or owner rule, do not automatically delete them.

## Safe remediation workflow

1. Preserve an untouched copy of the workbook and record its filename/date.
2. Create a separate candidate `Year_Normalised` field from the parsed `Date` year. Compare it with the original `Year`; never replace the original column silently.
3. Flag `1906-09-02` and compare it with the companion day/month/year fields and an authoritative transaction source. Only correct it after confirmation.
4. Recalculate yearly totals from the validated date field and reconcile them against the stored pivot. Record differences before refreshing or replacing the pivot.
5. Review repeated rows against a transaction identifier or documented business rule. Repeated rows are not automatically errors.
6. Record before/after row counts, candidate changes, unresolved exceptions, and validation results.
7. Keep currency and the meaning of `Profit` explicitly unverified until supported by source documentation.

## Acceptance checks

- Source workbook remains unchanged.
- All proposed transformations are reproducible and documented.
- Year-level totals can be recalculated and reconciled.
- Every corrected anomaly has a stated evidence source; unresolved records remain flagged.
- No currency, gross-profit, or margin claim is made without supporting definitions.
