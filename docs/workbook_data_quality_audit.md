# Workbook Data-Quality Audit

Audit date: 2026-10-14

Read-only inspection using pandas and openpyxl. Each source was opened read-only and not saved. Formula expressions were read with `data_only=False` and cached values with `data_only=True`; formulas were not recalculated. Missing caches are reported as unavailable, not treated as proof of incorrect calculations.

## STARBUCKS_MARKETENTRY_ANALYIS.xlsx

Sheets: Overview, Starbucks, Nepal, Strategy, Sources, _calc, Starbucks Financial data, 2_Nepal_Macroeconomic, 3_Nepal_Coffee, 4_Hofstede, 5_RBV_VRIN, 6_OLI, 7_Entry_Mode, 8_FITTA_FDI, 9_SDG_Data, 10_Citation_Audit, 11_Derived_Calcs, 12_Verification_Exceptions

### Sheet `Overview`
- Worksheet dimensions: `A1:AO59` (openpyxl `59` rows x `41` columns); pandas first-row-header shape `(58, 41)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 58, "Unnamed: 1": 58, "Unnamed: 2": 58, "Unnamed: 3": 58, "Unnamed: 4": 58, "Unnamed: 5": 58, "Unnamed: 6": 58, "Unnamed: 7": 58, "Unnamed: 8": 58, "Unnamed: 9": 58, "Unnamed: 10": 58, "Unnamed: 11": 58, "Unnamed: 12": 58, "Unnamed: 13": 58, "Unnamed: 14": 58, "Unnamed: 15": 58, "Unnamed: 16": 58, "Unnamed: 17": 58, "Unnamed: 18": 58, "Unnamed: 19": 58, "Unnamed: 20": 58, "Unnamed: 21": 58, "Unnamed: 22": 58, "Unnamed: 23": 58, "Unnamed: 24": 58, "Unnamed: 25": 58, "Unnamed: 26": 58, "Unnamed: 27": 58, "Unnamed: 28": 58, "Unnamed: 29": 58, "Unnamed: 30": 58, "Unnamed: 31": 58, "Unnamed: 32": 58, "Unnamed: 33": 58, "Unnamed: 34": 58, "Unnamed: 35": 58, "Unnamed: 36": 58, "Unnamed: 37": 58, "Unnamed: 38": 58, "Unnamed: 39": 58, "Unnamed: 40": 58}`
- Exact duplicate dataframe rows: 57.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Starbucks`
- Worksheet dimensions: `A1:AO59` (openpyxl `59` rows x `41` columns); pandas first-row-header shape `(58, 41)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 58, "Unnamed: 1": 58, "Unnamed: 2": 58, "Unnamed: 3": 58, "Unnamed: 4": 58, "Unnamed: 5": 58, "Unnamed: 6": 58, "Unnamed: 7": 58, "Unnamed: 8": 58, "Unnamed: 9": 58, "Unnamed: 10": 58, "Unnamed: 11": 58, "Unnamed: 12": 58, "Unnamed: 13": 58, "Unnamed: 14": 58, "Unnamed: 15": 58, "Unnamed: 16": 58, "Unnamed: 17": 58, "Unnamed: 18": 58, "Unnamed: 19": 58, "Unnamed: 20": 58, "Unnamed: 21": 58, "Unnamed: 22": 58, "Unnamed: 23": 58, "Unnamed: 24": 58, "Unnamed: 25": 58, "Unnamed: 26": 58, "Unnamed: 27": 58, "Unnamed: 28": 58, "Unnamed: 29": 58, "Unnamed: 30": 58, "Unnamed: 31": 58, "Unnamed: 32": 58, "Unnamed: 33": 58, "Unnamed: 34": 58, "Unnamed: 35": 58, "Unnamed: 36": 58, "Unnamed: 37": 58, "Unnamed: 38": 58, "Unnamed: 39": 58, "Unnamed: 40": 58}`
- Exact duplicate dataframe rows: 57.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Nepal`
- Worksheet dimensions: `A1:AO59` (openpyxl `59` rows x `41` columns); pandas first-row-header shape `(58, 41)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 58, "Unnamed: 1": 58, "Unnamed: 2": 58, "Unnamed: 3": 58, "Unnamed: 4": 58, "Unnamed: 5": 58, "Unnamed: 6": 58, "Unnamed: 7": 58, "Unnamed: 8": 58, "Unnamed: 9": 58, "Unnamed: 10": 58, "Unnamed: 11": 58, "Unnamed: 12": 58, "Unnamed: 13": 58, "Unnamed: 14": 58, "Unnamed: 15": 58, "Unnamed: 16": 58, "Unnamed: 17": 58, "Unnamed: 18": 58, "Unnamed: 19": 58, "Unnamed: 20": 58, "Unnamed: 21": 58, "Unnamed: 22": 58, "Unnamed: 23": 58, "Unnamed: 24": 58, "Unnamed: 25": 58, "Unnamed: 26": 58, "Unnamed: 27": 58, "Unnamed: 28": 58, "Unnamed: 29": 58, "Unnamed: 30": 58, "Unnamed: 31": 58, "Unnamed: 32": 58, "Unnamed: 33": 58, "Unnamed: 34": 58, "Unnamed: 35": 58, "Unnamed: 36": 58, "Unnamed: 37": 58, "Unnamed: 38": 58, "Unnamed: 39": 58, "Unnamed: 40": 58}`
- Exact duplicate dataframe rows: 57.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Strategy`
- Worksheet dimensions: `A1:AO59` (openpyxl `59` rows x `41` columns); pandas first-row-header shape `(58, 41)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 58, "Unnamed: 1": 58, "Unnamed: 2": 58, "Unnamed: 3": 58, "Unnamed: 4": 58, "Unnamed: 5": 58, "Unnamed: 6": 58, "Unnamed: 7": 58, "Unnamed: 8": 58, "Unnamed: 9": 58, "Unnamed: 10": 58, "Unnamed: 11": 58, "Unnamed: 12": 58, "Unnamed: 13": 58, "Unnamed: 14": 58, "Unnamed: 15": 58, "Unnamed: 16": 58, "Unnamed: 17": 58, "Unnamed: 18": 58, "Unnamed: 19": 58, "Unnamed: 20": 58, "Unnamed: 21": 58, "Unnamed: 22": 58, "Unnamed: 23": 58, "Unnamed: 24": 58, "Unnamed: 25": 58, "Unnamed: 26": 58, "Unnamed: 27": 58, "Unnamed: 28": 58, "Unnamed: 29": 58, "Unnamed: 30": 58, "Unnamed: 31": 58, "Unnamed: 32": 58, "Unnamed: 33": 58, "Unnamed: 34": 58, "Unnamed: 35": 58, "Unnamed: 36": 58, "Unnamed: 37": 58, "Unnamed: 38": 58, "Unnamed: 39": 58, "Unnamed: 40": 58}`
- Exact duplicate dataframe rows: 57.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Sources`
- Worksheet dimensions: `A1:AO59` (openpyxl `59` rows x `41` columns); pandas first-row-header shape `(58, 41)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 58, "Unnamed: 1": 58, "Unnamed: 2": 58, "Unnamed: 3": 58, "Unnamed: 4": 58, "Unnamed: 5": 58, "Unnamed: 6": 58, "Unnamed: 7": 58, "Unnamed: 8": 58, "Unnamed: 9": 58, "Unnamed: 10": 58, "Unnamed: 11": 58, "Unnamed: 12": 58, "Unnamed: 13": 58, "Unnamed: 14": 58, "Unnamed: 15": 58, "Unnamed: 16": 58, "Unnamed: 17": 58, "Unnamed: 18": 58, "Unnamed: 19": 58, "Unnamed: 20": 58, "Unnamed: 21": 58, "Unnamed: 22": 58, "Unnamed: 23": 58, "Unnamed: 24": 58, "Unnamed: 25": 58, "Unnamed: 26": 58, "Unnamed: 27": 58, "Unnamed: 28": 58, "Unnamed: 29": 58, "Unnamed: 30": 58, "Unnamed: 31": 58, "Unnamed: 32": 58, "Unnamed: 33": 58, "Unnamed: 34": 58, "Unnamed: 35": 58, "Unnamed: 36": 58, "Unnamed: 37": 58, "Unnamed: 38": 58, "Unnamed: 39": 58, "Unnamed: 40": 58}`
- Exact duplicate dataframe rows: 57.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `_calc`
- Worksheet dimensions: `A1:D48` (openpyxl `48` rows x `4` columns); pandas first-row-header shape `(47, 4)`.
- Column names: `["Stores (text)", "40,990", "Unnamed: 2", "Unnamed: 3"]`
- pandas dtypes: `{"Stores (text)": "str", "40,990": "object", "Unnamed: 2": "float64", "Unnamed: 3": "str"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Stores (text)": 7, "40,990": 10, "Unnamed: 2": 37, "Unnamed: 3": 46}`
- Exact duplicate dataframe rows: 6.
- First nonblank rows for header/layout context:
  - row 1: 1=Stores (text) | 2=40,990
  - row 2: 1=Revenue (text) | 2=US$37.2bn
  - row 3: 1=Margin (text) | 2=7.9%
  - row 4: 1=Margin sub | 2=▼ 710 bps contraction
  - row 5: 1=US+China share (text) | 2=61%
  - row 6: 1=Population (text) | 2=29.6m
  - row 7: 1=GDP per capita (text) | 2=US$1,536
  - row 8: 1=Affordability sub | 2=Beverage ≈ 0.23% of GDP p.c.
- Formula cells: 50; cached result available: 50; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `B1` `=TEXT('Starbucks Financial data'!B4,"#,##0")` => `40,990`
  - `B2` `="US$"&TEXT('Starbucks Financial data'!B5,"0.0")&"bn"` => `US$37.2bn`
  - `B3` `=TEXT('Starbucks Financial data'!B6,"0.0")&"%"` => `7.9%`
  - `B4` `="▼ "&'Starbucks Financial data'!B7&" bps contraction"` => `▼ 710 bps contraction`
  - `B5` `=TEXT(('Starbucks Financial data'!B10+'Starbucks Financial data'!B11)/'Starbucks Financial data'!B4,"0%")` => `61%`
  - `B6` `=TEXT('2_Nepal_Macroeconomic'!B4/1000000,"0.0")&"m"` => `29.6m`
  - `B7` `="US$"&TEXT('2_Nepal_Macroeconomic'!B5,"#,##0")` => `US$1,536`
  - `B8` `="Beverage ≈ "&TEXT(3.5/'2_Nepal_Macroeconomic'!B5,"0.00%")&" of GDP p.c."` => `Beverage ≈ 0.23% of GDP p.c.`
  - `B9` `=TEXT('2_Nepal_Macroeconomic'!B7,"0.0")&"%"` => `4.4%`
  - `B10` `="FY2026 projection "&TEXT('2_Nepal_Macroeconomic'!B8,"0.0")&"%"` => `FY2026 projection 2.3%`
  - `B11` `=TEXT('3_Nepal_Coffee'!B4-'3_Nepal_Coffee'!B5,"#,##0")&" t"` => `1,214 t`
  - `B14` `='3_Nepal_Coffee'!B4` => `1800`
  - `B15` `='3_Nepal_Coffee'!B5` => `586`
  - `B16` `='3_Nepal_Coffee'!B6` => `1200`
  - `C16` `='3_Nepal_Coffee'!B7-'3_Nepal_Coffee'!B6` => `200`
  - `A20` `='4_Hofstede'!A4` => `Power distance`
  - `B20` `='4_Hofstede'!B4` => `65`
  - `C20` `='4_Hofstede'!C4` => `40`
  - `A21` `='4_Hofstede'!A5` => `Individualism`
  - `B21` `='4_Hofstede'!B5` => `30`
  - `C21` `='4_Hofstede'!C5` => `91`
  - `A22` `='4_Hofstede'!A6` => `Motivation towards achievement`
  - `B22` `='4_Hofstede'!B6` => `40`
  - `C22` `='4_Hofstede'!C6` => `62`
  - `A23` `='4_Hofstede'!A7` => `Uncertainty avoidance`
  - `B23` `='4_Hofstede'!B7` => `40`
  - `C23` `='4_Hofstede'!C7` => `46`
  - `B26` `='Starbucks Financial data'!B10` => `16864`
  - `B27` `='Starbucks Financial data'!B11` => `8011`
  - `B28` `='Starbucks Financial data'!B4-'Starbucks Financial data'!B10-'Starbucks Financial data'!B11` => `16115`
  - `B32` `=TEXT('Starbucks Financial data'!B17,"#,##0")&" stores"` => `20,000 stores`
  - `B33` `=TEXT('Starbucks Financial data'!B8,"0")&"%"` => `-1%`
  - `B34` `=TEXT('Starbucks Financial data'!B9,"0")&"%"` => `-2%`
  - `B35` `="US$"&'Starbucks Financial data'!B13&"m"` => `US$500m`
  - `B36` `=TEXT('Starbucks Financial data'!B14,"#,##0")` => `230,000`
  - `B37` `='Starbucks Financial data'!B8` => `-1`
  - `B38` `='Starbucks Financial data'!B9` => `-2`
  - `B39` `='Starbucks Financial data'!B15` => `60`
  - `B40` `='Starbucks Financial data'!B16` => `40`
  - `B41` `="US$"&TEXT('2_Nepal_Macroeconomic'!B6,"0.0")&"bn"` => `US$45.5bn`
  - `B42` `=TEXT('2_Nepal_Macroeconomic'!B13,"0.0")&"%"` => `10.5%`
  - `B43` `=TEXT('2_Nepal_Macroeconomic'!B14,"0")&"% of GDP"` => `26% of GDP`
  - `B44` `=TEXT('2_Nepal_Macroeconomic'!B18/1000000,"0.00")&"m"` => `1.16m`
  - `B45` `='2_Nepal_Macroeconomic'!B16&" MW"` => `385 MW`
  - `B46` `='2_Nepal_Macroeconomic'!B7` => `4.4`
  - `C46` `='2_Nepal_Macroeconomic'!B10` => `4.1`
  - `B47` `='2_Nepal_Macroeconomic'!B8` => `2.3`
  - `C47` `='2_Nepal_Macroeconomic'!B11` => `4.3`
  - `B48` `='2_Nepal_Macroeconomic'!B9` => `4.4`
  - `C48` `='2_Nepal_Macroeconomic'!B12` => `5.1`
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[('Unnamed: 2', 1, [(16, '200')])]`.

### Sheet `Starbucks Financial data`
- Worksheet dimensions: `A1:I19` (openpyxl `19` rows x `9` columns); pandas first-row-header shape `(18, 9)`.
- Column names: `["Starbucks Corporation — FY2025 Financial Data", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Starbucks Corporation — FY2025 Financial Data": "str", "Unnamed: 1": "object", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Starbucks Corporation — FY2025 Financial Data": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 18, "Unnamed: 5": 18, "Unnamed: 6": 18, "Unnamed: 7": 18, "← Back to Overview": 18}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Starbucks Corporation — FY2025 Financial Data | 9=← Back to Overview
  - row 3: 1=Metric | 2=Value | 3=Unit | 4=Source
  - row 4: 1=Total stores globally | 2=40990 | 3=stores | 4=Starbucks (2025a)
  - row 5: 1=Net revenue | 2=37.2 | 3=US$ billion | 4=Starbucks (2025a)
  - row 6: 1=GAAP operating margin | 2=7.9 | 3=% | 4=Starbucks (2025a)
  - row 7: 1=Margin contraction | 2=710 | 3=basis points | 4=Starbucks (2025a)
  - row 8: 1=Global comparable store sales | 2=-1 | 3=% change | 4=Starbucks (2025a)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `2_Nepal_Macroeconomic`
- Worksheet dimensions: `A1:I20` (openpyxl `20` rows x `9` columns); pandas first-row-header shape `(19, 9)`.
- Column names: `["Nepal — Macroeconomic Indicators", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Nepal — Macroeconomic Indicators": "str", "Unnamed: 1": "object", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "str", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Nepal — Macroeconomic Indicators": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 19, "Unnamed: 6": 19, "Unnamed: 7": 19, "← Back to Overview": 19}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Nepal — Macroeconomic Indicators | 9=← Back to Overview
  - row 3: 1=Indicator | 2=Value | 3=Unit | 4=Period | 5=Source
  - row 4: 1=Population | 2=29618118 | 3=people | 4=2025 | 5=World Bank (2025)
  - row 5: 1=GDP per capita | 2=1535.9 | 3=US$ | 4=2025 | 5=World Bank (2025)
  - row 6: 1=GDP | 2=45.49 | 3=US$ billion | 4=2025 | 5=World Bank (2025)
  - row 7: 1=GDP growth | 2=4.4 | 3=% | 4=2025 | 5=World Bank (2025)
  - row 8: 1=GDP growth projection | 2=2.3 | 3=% | 4=FY2026 | 5=World Bank (2026)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `3_Nepal_Coffee`
- Worksheet dimensions: `A1:I13` (openpyxl `13` rows x `9` columns); pandas first-row-header shape `(12, 9)`.
- Column names: `["Nepal — Coffee Supply, Demand and Constraints", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Nepal — Coffee Supply, Demand and Constraints": "str", "Unnamed: 1": "object", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Nepal — Coffee Supply, Demand and Constraints": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 12, "Unnamed: 5": 12, "Unnamed: 6": 12, "Unnamed: 7": 12, "← Back to Overview": 12}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Nepal — Coffee Supply, Demand and Constraints | 9=← Back to Overview
  - row 3: 1=Metric | 2=Value | 3=Unit | 4=Source / Note
  - row 4: 1=Domestic consumption | 2=1800 | 3=metric tons/year | 4=Lamichhane and Malla (2025)
  - row 5: 1=Domestic production | 2=586 | 3=metric tons (2024–25) | 4=Lamichhane and Malla (2025)
  - row 6: 1=Imports (low estimate) | 2=1200 | 3=metric tons/year | 4=Lamichhane and Malla (2025)
  - row 7: 1=Imports (high estimate) | 2=1400 | 3=metric tons/year | 4=Lamichhane and Malla (2025)
  - row 8: 1=Supply gap (author's calc) | 2=1214 | 3=metric tons | 4=Author's calculation: 1800 − 586
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `4_Hofstede`
- Worksheet dimensions: `A1:I11` (openpyxl `11` rows x `9` columns); pandas first-row-header shape `(10, 9)`.
- Column names: `["Hofstede Cultural Dimensions — Nepal vs United States", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Hofstede Cultural Dimensions — Nepal vs United States": "str", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "str", "Unnamed: 5": "str", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Hofstede Cultural Dimensions — Nepal vs United States": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 3, "Unnamed: 6": 10, "Unnamed: 7": 10, "← Back to Overview": 10}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Hofstede Cultural Dimensions — Nepal vs United States | 9=← Back to Overview
  - row 3: 1=Dimension | 2=Nepal | 3=United States | 4=Gap (Nepal − US) | 5=Available | 6=Source
  - row 4: 1=Power distance | 2=65 | 3=40 | 4=25 | 5=Yes | 6=Culture Factor Group (2026)
  - row 5: 1=Individualism | 2=30 | 3=91 | 4=-61 | 5=Yes | 6=Culture Factor Group (2026)
  - row 6: 1=Motivation towards achievement | 2=40 | 3=62 | 4=-22 | 5=Yes | 6=Culture Factor Group (2026)
  - row 7: 1=Uncertainty avoidance | 2=40 | 3=46 | 4=-6 | 5=Yes | 6=Culture Factor Group (2026)
  - row 8: 1=Long-term orientation | 2=n/a | 3=50 | 4=— | 5=No published score for Nepal | 6=Culture Factor Group (2026)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `5_RBV_VRIN`
- Worksheet dimensions: `A1:I11` (openpyxl `11` rows x `9` columns); pandas first-row-header shape `(10, 9)`.
- Column names: `["Resource-Based View (VRIN) — Transferability to Nepal", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Resource-Based View (VRIN) — Transferability to Nepal": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "str", "Unnamed: 5": "str", "Unnamed: 6": "str", "Unnamed: 7": "str", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Resource-Based View (VRIN) — Transferability to Nepal": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 3, "Unnamed: 6": 3, "Unnamed: 7": 3, "← Back to Overview": 10}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Resource-Based View (VRIN) — Transferability to Nepal | 9=← Back to Overview
  - row 3: 1=Resource | 2=Valuable | 3=Rare | 4=Costly to Imitate | 5=Non-substitutable | 6=Transfers to Nepal? | 7=Rationale | 8=Source
  - row 4: 1=Brand and 'third place' | 2=✓ | 3=✓ | 4=✓ | 5=✓ | 6=YES | 7=Socially complex, causally ambiguous; no premium incumbent | 8=Barney (1991)
  - row 5: 1=Partner capability | 2=✓ | 3=✓ | 4=✓ | 5=✓ | 6=YES | 7=Training and culture are non-purchasable | 8=Starbucks (2025b; 2025c)
  - row 6: 1=Roasting craft | 2=✓ | 3=✓ | 4=✓ | 5=✓ | 6=YES | 7=Codified knowledge; travels with the firm | 8=Barney (1991)
  - row 7: 1=Digital ecosystem | 2=✓ | 3=✓ | 4=✓ | 5=✓ | 6=PARTIAL | 7=Depends on smartphone and card penetration | 8=Author's assessment
  - row 8: 1=Scale supply chain | 2=✓ | 3=✗ | 4=✗ | 5=✓ | 6=NO | 7=Value depends on store density Nepal cannot supply | 8=Barney (1991)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `6_OLI`
- Worksheet dimensions: `A1:I8` (openpyxl `8` rows x `9` columns); pandas first-row-header shape `(7, 9)`.
- Column names: `["Dunning's OLI Paradigm — Applied to Starbucks in Nepal", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Dunning's OLI Paradigm — Applied to Starbucks in Nepal": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Dunning's OLI Paradigm — Applied to Starbucks in Nepal": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 7, "Unnamed: 5": 7, "Unnamed: 6": 7, "Unnamed: 7": 7, "← Back to Overview": 7}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Dunning's OLI Paradigm — Applied to Starbucks in Nepal | 9=← Back to Overview
  - row 3: 1=OLI Component | 2=Starbucks' Position | 3=Evidence | 4=Source
  - row 4: 1=Ownership (O) | 2=Brand equity, roasting technology, store operating systems, digital platform | 3=40,990 stores; US$37.2bn revenue FY2025 | 4=Starbucks (2025a)
  - row 5: 1=Location (L) | 2=29.6m consumers, high-altitude Arabica, 385 MW hydropower added H1FY2026 | 3=Population 29,618,118; 385 MW added | 4=World Bank (2025; 2026)
  - row 6: 1=Internalisation (I) | 2=Greater control over brand standards, IP and operating processes | 3=US$500m invested in partner labour hours; 40% stake in China JV | 4=Starbucks (2025c; 2026a)
  - row 8: 1=OLI justifies equity entry without dictating its form. Internalisation is a matter of degree, not necessity.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `7_Entry_Mode`
- Worksheet dimensions: `A1:I9` (openpyxl `9` rows x `9` columns); pandas first-row-header shape `(8, 9)`.
- Column names: `["Entry-Mode Assessment — Control vs Exposure", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Entry-Mode Assessment — Control vs Exposure": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "str", "Unnamed: 5": "str", "Unnamed: 6": "str", "Unnamed: 7": "str", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Entry-Mode Assessment — Control vs Exposure": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 3, "Unnamed: 6": 3, "Unnamed: 7": 3, "← Back to Overview": 8}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Entry-Mode Assessment — Control vs Exposure | 9=← Back to Overview
  - row 3: 1=Entry Mode | 2=Control | 3=Capability Transfer | 4=Local Knowledge | 5=Risk Sharing | 6=Capital Exposure | 7=Verdict | 8=Source
  - row 4: 1=Wholly owned | 2=High | 3=High | 4=Low | 5=Low | 6=High | 7=Rejected: concentrates institutional risk | 8=Author's assessment
  - row 5: 1=Joint venture | 2=Shared | 3=High | 4=High | 5=High | 6=Medium | 7=RECOMMENDED: balances control, capability and risk | 8=Fischer and Roy (2017); Starbucks (2026a)
  - row 6: 1=Franchise | 2=Low | 3=Medium | 4=High | 5=Medium | 6=Low | 7=Fallback: fastest footprint, weak control | 8=Author's assessment
  - row 7: 1=Exporting | 2=— | 3=Low | 4=Low | 5=Low | 6=Low | 7=Rejected: cannot deliver 'third place' | 8=Author's assessment
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `8_FITTA_FDI`
- Worksheet dimensions: `A1:I11` (openpyxl `11` rows x `9` columns); pandas first-row-header shape `(10, 9)`.
- Column names: `["Nepal — Foreign Investment Regulatory Framework", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Nepal — Foreign Investment Regulatory Framework": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Nepal — Foreign Investment Regulatory Framework": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 10, "Unnamed: 5": 10, "Unnamed: 6": 10, "Unnamed: 7": 10, "← Back to Overview": 10}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Nepal — Foreign Investment Regulatory Framework | 9=← Back to Overview
  - row 3: 1=Item | 2=Detail | 3=Status | 4=Source
  - row 4: 1=Governing legislation | 2=FITTA 2019; Industrial Enterprises Act 2020 | 3=Current | 4=Department of Industries (2026)
  - row 5: 1=Retail restriction | 2=Retail business restricted, BUT excludes international chain retail trading in ≥2 countries | 3=Current | 4=Department of Industries (2026)
  - row 6: 1=Local catering | 2=Closed to foreign equity | 3=Current | 4=Department of Industries (2026)
  - row 7: 1=Automatic route expansion | 2=102 industry areas; NPR 500m ceiling removed | 3=Feb 2026 (Gazette 2082/11/04) | 4=Nepal Gazette (2026)
  - row 8: 1=Required documents | 2=Project report, JVA (if >1 investor), home-bank Financial Credibility Certificate | 3=Current | 4=Department of Industries (2026)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `9_SDG_Data`
- Worksheet dimensions: `A1:I12` (openpyxl `12` rows x `9` columns); pandas first-row-header shape `(11, 9)`.
- Column names: `["UN Sustainable Development Goals — Starbucks Data", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"UN Sustainable Development Goals — Starbucks Data": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "str", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"UN Sustainable Development Goals — Starbucks Data": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 11, "Unnamed: 6": 11, "Unnamed: 7": 11, "← Back to Overview": 11}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=UN Sustainable Development Goals — Starbucks Data | 9=← Back to Overview
  - row 3: 1=SDG | 2=Target | 3=Starbucks Metric | 4=Value | 5=Source
  - row 4: 1=SDG 8 | 2=8.5, 8.6 | 3=Bean Stock recipients | 4=230,000+ partners (2024) | 5=Starbucks (2025b)
  - row 5: 1=SDG 8 | 2=8.5, 8.6 | 3=Green Apron training | 4=US$500m invested in partner labour hours | 5=Starbucks (2025c)
  - row 6: 1=SDG 12 | 2=12.3, 12.5 | 3=Reusable cup increase | 4=+77% when customers sit and stay | 5=Starbucks (2025b)
  - row 7: 1=SDG 12 | 2=12.3, 12.5 | 3=Stores verified for energy/water/waste | 4=13,000+ coffeehouses | 5=Starbucks (2025b)
  - row 8: 1=SDG 13 | 2=13.2, 13.3 | 3=Total emissions vs FY2019 baseline | 4=+7% (Scope 1, 2 and 3) | 5=Starbucks (2025b)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `10_Citation_Audit`
- Worksheet dimensions: `A1:I20` (openpyxl `20` rows x `9` columns); pandas first-row-header shape `(19, 9)`.
- Column names: `["Citation and Reference Audit — Full Mapping", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Citation and Reference Audit — Full Mapping": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "str", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Citation and Reference Audit — Full Mapping": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 19, "Unnamed: 6": 19, "Unnamed: 7": 19, "← Back to Overview": 19}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Citation and Reference Audit — Full Mapping | 9=← Back to Overview
  - row 3: 1=In-text Citation | 2=Reference List Entry | 3=Source Type | 4=Verified | 5=Notes
  - row 4: 1=Barney (1991) | 2=Barney, J. (1991) 'Firm resources and sustained competitive advantage', Journal of Management, 17(1), pp. 99–120. | 3=Peer-reviewed | 4=Yes | 5=Primary RBV source
  - row 5: 1=Culture Factor Group (2026) | 2=Culture Factor Group (2026) Country comparison tool: Nepal and United States. | 3=Secondary database | 4=Yes | 5=Hofstede scores verified live
  - row 6: 1=Department of Industries (2026) | 2=Department of Industries (2026) Foreign investment. Government of Nepal. | 3=Government | 4=Yes | 5=Primary regulatory source
  - row 7: 1=DiMaggio and Powell (1983) | 2=DiMaggio, P.J. and Powell, W.W. (1983) 'The iron cage revisited', ASR, 48(2), pp. 147–160. | 3=Peer-reviewed | 4=Yes | 5=Primary institutional theory source
  - row 8: 1=Dunning (1988) | 2=Dunning, J.H. (1988) 'The eclectic paradigm of international production', JIBS, 19(1), pp. 1–31. | 3=Peer-reviewed | 4=Yes | 5=Primary OLI source
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `11_Derived_Calcs`
- Worksheet dimensions: `A1:I9` (openpyxl `9` rows x `9` columns); pandas first-row-header shape `(8, 9)`.
- Column names: `["Derived Calculations — Transparent Methodology", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Derived Calculations — Transparent Methodology": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "str", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Derived Calculations — Transparent Methodology": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 3, "Unnamed: 5": 8, "Unnamed: 6": 8, "Unnamed: 7": 8, "← Back to Overview": 8}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Derived Calculations — Transparent Methodology | 9=← Back to Overview
  - row 3: 1=Calculation | 2=Formula | 3=Inputs | 4=Result | 5=Label
  - row 4: 1=Coffee supply gap | 2=Consumption − Production | 3=1,800 t − 586 t | 4=1,214 t | 5=Author's calculation
  - row 5: 1=Beverage affordability | 2=Price / GDP per capita × 100 | 3=US$3.50 / US$1,535.9 × 100 | 4=0.23% | 5=Author's calculation; indicative only
  - row 6: 1=US + China portfolio share | 2=(US stores + China stores) / Total stores × 100 | 3=(16,864 + 8,011) / 40,990 × 100 | 4=61% | 5=Author's calculation from Starbucks (2025a)
  - row 7: 1=Import dependence | 2=Imports / Consumption × 100 | 3=1,200–1,400 / 1,800 × 100 | 4=67–78% | 5=Author's calculation from Lamichhane and Malla (2025)
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `12_Verification_Exceptions`
- Worksheet dimensions: `A1:I12` (openpyxl `12` rows x `9` columns); pandas first-row-header shape `(11, 9)`.
- Column names: `["Verification Exceptions — Disclosed Uncertainties", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "← Back to Overview"]`
- pandas dtypes: `{"Verification Exceptions — Disclosed Uncertainties": "str", "Unnamed: 1": "str", "Unnamed: 2": "str", "Unnamed: 3": "str", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "← Back to Overview": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Verification Exceptions — Disclosed Uncertainties": 2, "Unnamed: 1": 3, "Unnamed: 2": 3, "Unnamed: 3": 3, "Unnamed: 4": 11, "Unnamed: 5": 11, "Unnamed: 6": 11, "Unnamed: 7": 11, "← Back to Overview": 11}`
- Exact duplicate dataframe rows: 1.
- First nonblank rows for header/layout context:
  - row 1: 1=Verification Exceptions — Disclosed Uncertainties | 9=← Back to Overview
  - row 3: 1=Claim | 2=Status | 3=Treatment in Report | 4=Notes
  - row 4: 1=Coffee supply gap 1,214 t | 2=Author's calculation | 3=Labelled as calculation in figure and Appendix C | 4=Derived from cited figures
  - row 5: 1=US$3.50 = 0.23% GDP per capita | 2=Author's calculation | 3=Indicative affordability comparison only | 4=GDP per capita ≠ disposable income
  - row 6: 1=Feb 2026 FDI expansion | 2=Secondary source | 3=Disclosed in Appendix C | 4=Gazette notification via legal commentary; primary text not accessed
  - row 7: 1=Hofstede LTO & Indulgence (Nepal) | 2=Unavailable | 3=Excluded rather than estimated | 4=No published score
  - row 8: 1=Starbucks Australia A$105m | 2=Removed | 3=Disclosed in Appendix C | 4=Currency not independently verified
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Starbucks: `11_Derived_Calcs` input/formula trace

- Match `A5` value `Beverage affordability`; data-only cache `Beverage affordability`; neighborhood:
  - A3=Calculation / B3=Formula / C3=Inputs
  - A4=Coffee supply gap / B4=Consumption − Production / C4=1,800 t − 586 t
  - A5=Beverage affordability / B5=Price / GDP per capita × 100 / C5=US$3.50 / US$1,535.9 × 100
  - A6=US + China portfolio share / B6=(US stores + China stores) / Total stores × 100 / C6=(16,864 + 8,011) / 40,990 × 100
  - A7=Import dependence / B7=Imports / Consumption × 100 / C7=1,200–1,400 / 1,800 × 100
- Match `B5` value `Price / GDP per capita × 100`; data-only cache `Price / GDP per capita × 100`; neighborhood:
  - A3=Calculation / B3=Formula / C3=Inputs / D3=Result
  - A4=Coffee supply gap / B4=Consumption − Production / C4=1,800 t − 586 t / D4=1,214 t
  - A5=Beverage affordability / B5=Price / GDP per capita × 100 / C5=US$3.50 / US$1,535.9 × 100 / D5=0.23%
  - A6=US + China portfolio share / B6=(US stores + China stores) / Total stores × 100 / C6=(16,864 + 8,011) / 40,990 × 100 / D6=61%
  - A7=Import dependence / B7=Imports / Consumption × 100 / C7=1,200–1,400 / 1,800 × 100 / D7=67–78%
- Formula reference strings in derived sheet:
External links recorded: 0.
## Profit Loss Dashboard project.xlsx

Sheets: Sheet1, Pivot, Country Performance, Dashboard, Calender, Finance, Raw Data, Sheet5, Performance, INSIGHTS

### Sheet `Sheet1`
- Worksheet dimensions: `A1:AQ1385` (openpyxl `1385` rows x `43` columns); pandas first-row-header shape `(1384, 43)`.
- Column names: `["Financial Pivot ", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41", "Unnamed: 42"]`
- pandas dtypes: `{"Financial Pivot ": "str", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "str", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "str", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "str", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "str", "Unnamed: 40": "object", "Unnamed: 41": "object", "Unnamed: 42": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Financial Pivot ": 1376, "Unnamed: 1": 1376, "Unnamed: 2": 1361, "Unnamed: 3": 1364, "Unnamed: 4": 1355, "Unnamed: 5": 1355, "Unnamed: 6": 1371, "Unnamed: 7": 1371, "Unnamed: 8": 1371, "Unnamed: 9": 1371, "Unnamed: 10": 1371, "Unnamed: 11": 1376, "Unnamed: 12": 1384, "Unnamed: 13": 1384, "Unnamed: 14": 1347, "Unnamed: 15": 1341, "Unnamed: 16": 1338, "Unnamed: 17": 1340, "Unnamed: 18": 1353, "Unnamed: 19": 1366, "Unnamed: 20": 1366, "Unnamed: 21": 1368, "Unnamed: 22": 1384, "Unnamed: 23": 1372, "Unnamed: 24": 1372, "Unnamed: 25": 1356, "Unnamed: 26": 1360, "Unnamed: 27": 1356, "Unnamed: 28": 1356, "Unnamed: 29": 1371, "Unnamed: 30": 1369, "Unnamed: 31": 1383, "Unnamed: 32": 1377, "Unnamed: 33": 1376, "Unnamed: 34": 1377, "Unnamed: 35": 1377, "Unnamed: 36": 1384, "Unnamed: 37": 1384, "Unnamed: 38": 1384, "Unnamed: 39": 1380, "Unnamed: 40": 1380, "Unnamed: 41": 1380, "Unnamed: 42": 1380}`
- Exact duplicate dataframe rows: 1311.
- First nonblank rows for header/layout context:
  - row 1: 1=Financial Pivot 
  - row 3: 1=Row Labels | 2=Sum of Profit | 3=Sum of Revenue | 5=Sum of Cost | 6=Column Labels
  - row 4: 1=2013 | 2=5959208 | 3=15240037 | 5=Row Labels | 6=2013 | 7=2014 | 8=2015 | 9=2016 | 10=2011 | 11=2012 | 12=Grand Total | 15=Countries | 16=2011 | 17=2012
  - row 5: 1=2014 | 2=5864087 | 3=14152724 | 5=Australia | 6=2767650 | 7=1807369 | 8=3909993 | 9=2380149 | 10=1841420 | 11=1819448 | 12=14526029
  - row 6: 1=2015 | 2=7528563 | 3=20023991 | 5=Canada | 6=727385 | 7=733386 | 8=903574 | 9=852231 | 10=515562 | 11=486304 | 12=4218442 | 15=Australia | 16=1841420 | 17=1819448
  - row 7: 1=2016 | 2=7035948 | 3=17713385 | 5=France | 6=917013 | 7=889401 | 8=1228631 | 9=1165992 | 10=682302 | 11=669251 | 12=5552590 | 15=Canada | 16=515562 | 17=486304
  - row 8: 1=2011 | 2=2951993 | 3=9175983 | 5=Germany | 6=897526 | 7=1017319 | 8=1214589 | 9=1362144 | 10=563908 | 11=563115 | 12=5618601 | 15=France | 16=682302 | 17=669251
- Formula cells: 31; cached result available: 31; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `AE24` `=GETPIVOTDATA("[Measures].[Sum of Profit]",$Z$21)/GETPIVOTDATA("[Measures].[Sum of Revenue]",$Z$21)*100%` => `0.377867000235`
  - `AD28` `=TEXT(GETPIVOTDATA("[Measures].[Sum of Profit]",$Z$21),"£0,0,""M""")` => `£32,221M`
  - `AE28` `=TEXT(GETPIVOTDATA("[Measures].[Sum of Revenue]",$Z$21),"£#0,0,""M""")` => `£85,271M`
  - `AF28` `=TEXT(GETPIVOTDATA("[Measures].[Sum of Cost]",$Z$21),"£0,0,""M""")` => `£53,050M`
  - `S48` `=TEXT(GETPIVOTDATA("Sum of Revenue",$R$48),"£#,##0.00,, ""M""")` => `#REF!`
  - `T48` `=GETPIVOTDATA("[Measures].[Sum of Cost]",$O$29)` => `53049908`
  - `U48` `=GETPIVOTDATA("[Measures].[Sum of Profit]",$O$29)` => `32221100`
  - `AE58` `=SUM(AC58:AD58)` => `9175983`
  - `AE59` `=SUM(AC59:AD59)` => `17713385`
  - `AC60` `=SUM(AC58:AC59)` => `9987941`
  - `AD60` `=SUM(AD58:AD59)` => `16901427`
  - `AE60` `=SUM(AC60:AD60)` => `26889368`
  - `S71` `=SUM(Table7[[#This Row],[Sum of Cost]:[Sum of Profit]])` => `9175983`
  - `S72` `=SUM(Table7[[#This Row],[Sum of Cost]:[Sum of Profit]])` => `8964888`
  - `S73` `=SUM(Table7[[#This Row],[Sum of Cost]:[Sum of Profit]])` => `15240037`
  - `S74` `=SUM(Table7[[#This Row],[Sum of Cost]:[Sum of Profit]])` => `14152724`
  - `AH74` `=(AO65/GETPIVOTDATA("[Measures].[Sum of Sum of Revenue]",$AQ$65,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2011]")*100%)` => `0.321708638737`
  - `AI74` `=(GETPIVOTDATA("[Measures].[Sum of Sum of Cost]",$AP$65,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2011]")/GETPIVOTDATA("[Measures].[Sum of Sum of Revenue]",$AQ$65,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2011]")*100%)` => `0.678291361263`
  - `AJ74` `=GETPIVOTDATA("[Measures].[Sum of Sum of Revenue]",$AN$64,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2011]")/GETPIVOTDATA("[Measures].[Sum of Revenue]",$O$29)*100%` => `0.107609646177`
  - `S75` `=SUM(Table7[[#This Row],[Sum of Cost]:[Sum of Profit]])` => `20023991`
  - `AH75` `=(GETPIVOTDATA("[Measures].[Sum of Sum of Profit]",$AO$66,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2016]")/GETPIVOTDATA("[Measures].[Sum of Sum of Revenue]",$AQ$66,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2016]")*100%)` => `0.397210809792`
  - `AI75` `=(GETPIVOTDATA("[Measures].[Sum of Sum of Cost]",$AP$66,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2016]")/GETPIVOTDATA("[Measures].[Sum of Sum of Revenue]",$AQ$66,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2016]")*100%)` => `0.602789190208`
  - `AJ75` `=GETPIVOTDATA("[Measures].[Sum of Sum of Revenue]",$AN$64,"[Table5].[Row Labels]","[Table5].[Row Labels].&[2016]")/GETPIVOTDATA("[Measures].[Sum of Revenue]",$C$39)*100%` => `0.207730451597`
  - `S76` `=SUM(Table7[[#This Row],[Sum of Cost]:[Sum of Profit]])` => `17713385`
  - `Q77` `=S77-R81` => `53049908`
  - `R77` `=S77-Q77` => `32221100`
  - `S77` `=SUM(S71:S76)` => `85271008`
  - `Q81` `=SUM(Q71:Q76)` => `53049908`
  - `Q83` `=(Q77/S77)*100` => `62.2132999765`
  - `R83` `=(R77/S77)*100` => `37.7867000235`
  - `S83` `=(S77/S77)*100` => `100`
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Pivot`
- Worksheet dimensions: `A1:CZ10105` (openpyxl `10105` rows x `104` columns); pandas first-row-header shape `(10104, 104)`.
- Column names: `["Dimension", "Metrices", "Unnamed: 2", "Revenue & Profit Section", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41", "Unnamed: 42", "Unnamed: 43", "Unnamed: 44", "Unnamed: 45", "Unnamed: 46", "Unnamed: 47", "Unnamed: 48", "Unnamed: 49", "Unnamed: 50", "Unnamed: 51", "Unnamed: 52", "Unnamed: 53", "Unnamed: 54", "Unnamed: 55", "Unnamed: 56", "Unnamed: 57", "Unnamed: 58", "Unnamed: 59", "Unnamed: 60", "Unnamed: 61", "Unnamed: 62", "Unnamed: 63", "Unnamed: 64", "Unnamed: 65", "Unnamed: 66", "Unnamed: 67", "Unnamed: 68", "Unnamed: 69", "Unnamed: 70", "Unnamed: 71", "Unnamed: 72", "Unnamed: 73", "Unnamed: 74", "Unnamed: 75", "Unnamed: 76", "Unnamed: 77", "Unnamed: 78", "Unnamed: 79", "Unnamed: 80", "Unnamed: 81", "Unnamed: 82", "Unnamed: 83", "Unnamed: 84", "Unnamed: 85", "Unnamed: 86", "Unnamed: 87", "Unnamed: 88", "Unnamed: 89", "Unnamed: 90", "Unnamed: 91", "Unnamed: 92", "Unnamed: 93", "Unnamed: 94", "Unnamed: 95", "Unnamed: 96", "Unnamed: 97", "Unnamed: 98", "Unnamed: 99", "Unnamed: 100", "Unnamed: 101", "Unnamed: 102", "Unnamed: 103"]`
- pandas dtypes: `{"Dimension": "str", "Metrices": "object", "Unnamed: 2": "object", "Revenue & Profit Section": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object", "Unnamed: 41": "object", "Unnamed: 42": "object", "Unnamed: 43": "str", "Unnamed: 44": "object", "Unnamed: 45": "object", "Unnamed: 46": "object", "Unnamed: 47": "object", "Unnamed: 48": "str", "Unnamed: 49": "object", "Unnamed: 50": "object", "Unnamed: 51": "object", "Unnamed: 52": "object", "Unnamed: 53": "object", "Unnamed: 54": "object", "Unnamed: 55": "object", "Unnamed: 56": "object", "Unnamed: 57": "object", "Unnamed: 58": "object", "Unnamed: 59": "object", "Unnamed: 60": "object", "Unnamed: 61": "object", "Unnamed: 62": "object", "Unnamed: 63": "object", "Unnamed: 64": "object", "Unnamed: 65": "object", "Unnamed: 66": "object", "Unnamed: 67": "object", "Unnamed: 68": "object", "Unnamed: 69": "object", "Unnamed: 70": "object", "Unnamed: 71": "object", "Unnamed: 72": "object", "Unnamed: 73": "object", "Unnamed: 74": "object", "Unnamed: 75": "object", "Unnamed: 76": "object", "Unnamed: 77": "object", "Unnamed: 78": "object", "Unnamed: 79": "object", "Unnamed: 80": "object", "Unnamed: 81": "object", "Unnamed: 82": "object", "Unnamed: 83": "object", "Unnamed: 84": "object", "Unnamed: 85": "object", "Unnamed: 86": "object", "Unnamed: 87": "object", "Unnamed: 88": "object", "Unnamed: 89": "object", "Unnamed: 90": "object", "Unnamed: 91": "object", "Unnamed: 92": "object", "Unnamed: 93": "object", "Unnamed: 94": "object", "Unnamed: 95": "object", "Unnamed: 96": "object", "Unnamed: 97": "object", "Unnamed: 98": "object", "Unnamed: 99": "object", "Unnamed: 100": "object", "Unnamed: 101": "object", "Unnamed: 102": "object", "Unnamed: 103": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Dimension": 10010, "Metrices": 10010, "Unnamed: 2": 9964, "Revenue & Profit Section": 10034, "Unnamed: 4": 10036, "Unnamed: 5": 9954, "Unnamed: 6": 9962, "Unnamed: 7": 9962, "Unnamed: 8": 10046, "Unnamed: 9": 9976, "Unnamed: 10": 9977, "Unnamed: 11": 9855, "Unnamed: 12": 9820, "Unnamed: 13": 9921, "Unnamed: 14": 9936, "Unnamed: 15": 9937, "Unnamed: 16": 9961, "Unnamed: 17": 9956, "Unnamed: 18": 10070, "Unnamed: 19": 9941, "Unnamed: 20": 10088, "Unnamed: 21": 10081, "Unnamed: 22": 10073, "Unnamed: 23": 10078, "Unnamed: 24": 9960, "Unnamed: 25": 9944, "Unnamed: 26": 9961, "Unnamed: 27": 9941, "Unnamed: 28": 9949, "Unnamed: 29": 9960, "Unnamed: 30": 9965, "Unnamed: 31": 9947, "Unnamed: 32": 9936, "Unnamed: 33": 10070, "Unnamed: 34": 10077, "Unnamed: 35": 10052, "Unnamed: 36": 10031, "Unnamed: 37": 10034, "Unnamed: 38": 10079, "Unnamed: 39": 10086, "Unnamed: 40": 10104, "Unnamed: 41": 10104, "Unnamed: 42": 10104, "Unnamed: 43": 10049, "Unnamed: 44": 10049, "Unnamed: 45": 10104, "Unnamed: 46": 10104, "Unnamed: 47": 10104, "Unnamed: 48": 10049, "Unnamed: 49": 10049, "Unnamed: 50": 10104, "Unnamed: 51": 10104, "Unnamed: 52": 10104, "Unnamed: 53": 10104, "Unnamed: 54": 10104, "Unnamed: 55": 10104, "Unnamed: 56": 10104, "Unnamed: 57": 10104, "Unnamed: 58": 10104, "Unnamed: 59": 10104, "Unnamed: 60": 10104, "Unnamed: 61": 10104, "Unnamed: 62": 10104, "Unnamed: 63": 10104, "Unnamed: 64": 10104, "Unnamed: 65": 10104, "Unnamed: 66": 10104, "Unnamed: 67": 10104, "Unnamed: 68": 10104, "Unnamed: 69": 10104, "Unnamed: 70": 10104, "Unnamed: 71": 10104, "Unnamed: 72": 10104, "Unnamed: 73": 10104, "Unnamed: 74": 10104, "Unnamed: 75": 10104, "Unnamed: 76": 10104, "Unnamed: 77": 10104, "Unnamed: 78": 10104, "Unnamed: 79": 10104, "Unnamed: 80": 10104, "Unnamed: 81": 10104, "Unnamed: 82": 10104, "Unnamed: 83": 10104, "Unnamed: 84": 10104, "Unnamed: 85": 10104, "Unnamed: 86": 10104, "Unnamed: 87": 10104, "Unnamed: 88": 10104, "Unnamed: 89": 10104, "Unnamed: 90": 10104, "Unnamed: 91": 10104, "Unnamed: 92": 10104, "Unnamed: 93": 10104, "Unnamed: 94": 10104, "Unnamed: 95": 10104, "Unnamed: 96": 10104, "Unnamed: 97": 10104, "Unnamed: 98": 10104, "Unnamed: 99": 10104, "Unnamed: 100": 10104, "Unnamed: 101": 10104, "Unnamed: 102": 10104, "Unnamed: 103": 10104}`
- Exact duplicate dataframe rows: 9716.
- First nonblank rows for header/layout context:
  - row 1: 1=Dimension | 2=Metrices | 4=Revenue & Profit Section
  - row 2: 1=Revenue  | 2=YoY
  - row 3: 1=Revenue | 2=By Product Category  | 4=Row Labels | 5=Sum of Revenue | 7=Row Labels | 8=Sum of Profit | 10=Row Labels | 11=Sum of Profit | 13=Row Labels | 14=Sum of Revenue | 18=Revenue by demographic | 19=Column Labels | 23=Countries and States | 24=Sum of Revenue
  - row 4: 1=Gross Profit | 2=By Product Category  | 4=Accessories | 5=15117992 | 7=Accessories | 8=8862377 | 10=Accessories | 11=0.2750488654949707 | 13=Accessories | 14=0.17729345946045344 | 18=Row Labels | 19=F | 20=M | 21=Grand Total
  - row 5: 1=Gross Margin | 2=Gross profit-Rev | 4=Bikes | 5=61782134 | 7=Bikes | 8=20519276 | 10=Bikes | 11=0.6368272963989435 | 13=Bikes | 14=0.7245385676688612 | 18=Adults (35-64) | 19=21269149 | 20=21315004 | 21=42584153
  - row 6: 1=Unit Price | 2=Unit price column by product | 4=Clothing | 5=8370882 | 7=Clothing | 8=2839447 | 10=Clothing | 11=0.08812383810608576 | 13=Clothing | 14=0.09816797287068543 | 18=Seniors (64+) | 19=130050 | 20=177992 | 21=308042
  - row 7: 1=Average Order Value | 2=Average function, Order id/price | 4=Grand Total | 5=85271008 | 6=£85.27 M | 7=Grand Total | 8=32221100 | 9=£32.22 M | 10=Grand Total | 11=1 | 12=1 | 13=Grand Total | 14=1 | 15=1
  - row 8: 1=Revenue by Country | 2=Country/Rev | 18=Youth (<25) | 19=5342158 | 20=6381041 | 21=11723199 | 23=United Kingdom | 24=10646196 | 26=False | 27=France | 28=8432872 | 29=2880282 | 30=0.08939117534783107 | 44=Bayern
- Formula cells: 252; cached result available: 252; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `Z6` `=AA6=Dashboard!$AI$2` => `False`
  - `F7` `=TEXT(GETPIVOTDATA("Revenue",$D$3),"£#,##0.00,, ""M""")` => `£85.27 M`
  - `I7` `=TEXT(GETPIVOTDATA("Profit",$G$3),"£#,##0.00,, ""M""")` => `£32.22 M`
  - `L7` `=GETPIVOTDATA("Profit",$J$3)` => `1`
  - `O7` `=GETPIVOTDATA("Revenue",$M$3)` => `1`
  - `Z7` `=AA7=Dashboard!$AI$2` => `False`
  - `Z8` `=AA8=Dashboard!$AI$2` => `False`
  - `Z9` `=AA9=Dashboard!$AI$2` => `False`
  - `Z10` `=AA10=Dashboard!$AI$2` => `True`
  - `Z11` `=AA11=Dashboard!$AI$2` => `False`
  - `AG14` `=Z14=Dashboard!$AI$2` => `False`
  - `X15` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `AG15` `=Z15=Dashboard!$AI$2` => `False`
  - `X16` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `AG16` `=Z16=Dashboard!$AI$2` => `False`
  - `X17` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `AG17` `=Z17=Dashboard!$AI$2` => `False`
  - `O18` `=GETPIVOTDATA("Order_Quantity",$M$14)` => `#REF!`
  - `X18` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `AG18` `=Z18=Dashboard!$AI$2` => `True`
  - `X19` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `True`
  - `AG19` `=Z19=Dashboard!$AI$2` => `False`
  - `X20` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `AG20` `=Z20=Dashboard!$AI$2` => `False`
  - `X21` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `M153` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI2` => `False`
  - `M154` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI3` => `False`
  - `M155` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI4` => `False`
  - `M156` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI5` => `False`
  - `M157` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI6` => `False`
  - `M158` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI7` => `False`
  - `M159` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI8` => `False`
  - `M160` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI9` => `False`
  - `M161` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI10` => `False`
  - `M162` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI11` => `False`
  - `M163` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI12` => `False`
  - `M164` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI13` => `False`
  - `M165` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI14` => `False`
  - `M166` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI15` => `False`
  - `M167` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI16` => `False`
  - `M168` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI17` => `False`
  - `M169` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI18` => `False`
  - `M170` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI19` => `False`
  - `M171` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI20` => `False`
  - `AD171` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `M172` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI21` => `False`
  - `AD172` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `M173` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI22` => `False`
  - `AD173` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `M174` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI23` => `False`
  - `AD174` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
  - `M175` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI24` => `False`
  - `M176` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI25` => `False`
  - `M177` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI26` => `False`
  - `M178` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI27` => `False`
  - `M179` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI28` => `False`
  - `M180` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI29` => `False`
  - `M181` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI30` => `False`
  - `M182` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI31` => `False`
  - `M183` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI32` => `False`
  - `M184` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI33` => `False`
  - `M185` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI34` => `False`
  - `M186` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI35` => `False`
  - `M187` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI36` => `False`
  - `M188` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI37` => `False`
  - `M189` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI38` => `False`
  - `M190` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI39` => `False`
  - `M191` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI40` => `False`
  - `M192` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI41` => `False`
  - `M193` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI42` => `False`
  - `M194` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI43` => `False`
  - `M195` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI44` => `False`
  - `M196` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI45` => `False`
  - `M197` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI46` => `False`
  - `M198` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI47` => `False`
  - `M199` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI48` => `False`
  - `M200` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI49` => `False`
  - `M201` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI50` => `False`
  - `M202` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI51` => `False`
  - `M203` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI52` => `False`
  - 172 more formula cells not expanded here.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Country Performance`
- Worksheet dimensions: `A1:BA89` (openpyxl `89` rows x `53` columns); pandas first-row-header shape `(88, 53)`.
- Column names: `["Profit Depart", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Revenue Depart", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41", "Unnamed: 42", "Unnamed: 43", "Unnamed: 44", "Unnamed: 45", "Unnamed: 46", "Unnamed: 47", "Unnamed: 48", "Unnamed: 49", "Unnamed: 50", "Unnamed: 51", "Unnamed: 52"]`
- pandas dtypes: `{"Profit Depart": "str", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "str", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "str", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Revenue Depart": "str", "Unnamed: 18": "str", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "str", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "str", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "str", "Unnamed: 36": "object", "Unnamed: 37": "str", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object", "Unnamed: 41": "str", "Unnamed: 42": "object", "Unnamed: 43": "object", "Unnamed: 44": "str", "Unnamed: 45": "object", "Unnamed: 46": "object", "Unnamed: 47": "object", "Unnamed: 48": "object", "Unnamed: 49": "object", "Unnamed: 50": "object", "Unnamed: 51": "object", "Unnamed: 52": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Profit Depart": 79, "Unnamed: 1": 80, "Unnamed: 2": 80, "Unnamed: 3": 88, "Unnamed: 4": 88, "Unnamed: 5": 80, "Unnamed: 6": 80, "Unnamed: 7": 80, "Unnamed: 8": 88, "Unnamed: 9": 88, "Unnamed: 10": 88, "Unnamed: 11": 80, "Unnamed: 12": 80, "Unnamed: 13": 80, "Unnamed: 14": 88, "Unnamed: 15": 88, "Unnamed: 16": 88, "Revenue Depart": 87, "Unnamed: 18": 80, "Unnamed: 19": 79, "Unnamed: 20": 80, "Unnamed: 21": 88, "Unnamed: 22": 80, "Unnamed: 23": 74, "Unnamed: 24": 74, "Unnamed: 25": 88, "Unnamed: 26": 88, "Unnamed: 27": 62, "Unnamed: 28": 68, "Unnamed: 29": 68, "Unnamed: 30": 88, "Unnamed: 31": 88, "Unnamed: 32": 88, "Unnamed: 33": 88, "Unnamed: 34": 88, "Unnamed: 35": 87, "Unnamed: 36": 88, "Unnamed: 37": 45, "Unnamed: 38": 52, "Unnamed: 39": 52, "Unnamed: 40": 60, "Unnamed: 41": 80, "Unnamed: 42": 79, "Unnamed: 43": 80, "Unnamed: 44": 68, "Unnamed: 45": 69, "Unnamed: 46": 70, "Unnamed: 47": 70, "Unnamed: 48": 70, "Unnamed: 49": 70, "Unnamed: 50": 70, "Unnamed: 51": 70, "Unnamed: 52": 80}`
- Exact duplicate dataframe rows: 32.
- First nonblank rows for header/layout context:
  - row 1: 1=Profit Depart | 18=Revenue Depart
  - row 4: 1=Row Labels | 2=Sum of Profit | 3=Sum of Cost | 6=Row Labels | 7=Sum of Unit_Cost | 8=Sum of Unit_Price | 12=Row Labels | 13=Sum of Unit_Cost | 14=Sum of Unit_Price | 19=Row Labels | 20=Sum of Unit_Cost | 21=Sum of Revenue | 23=Row Labels | 24=Sum of Cost
  - row 5: 1=Australia | 2=6776030 | 3=14526029 | 6=Australia | 7=8714208 | 8=14651442 | 12=Australia | 13=8714208 | 14=14651442 | 19=Australia | 20=8714208 | 21=21302059 | 23=Australia | 24=14526029
  - row 6: 1=Canada | 2=3717296 | 3=4218442 | 6=Canada | 7=1894558 | 8=3242396 | 12=Canada | 13=1894558 | 14=3242396 | 19=Canada | 20=1894558 | 21=7935738 | 23=Canada | 24=4218442
  - row 7: 1=France | 2=2880282 | 3=5552590 | 6=France | 7=3213340 | 8=5416258 | 12=France | 13=3213340 | 14=5416258 | 19=France | 20=3213340 | 21=8432872 | 23=France | 24=5552590
  - row 8: 1=Germany | 2=3359995 | 3=5618601 | 6=Germany | 7=3339196 | 8=5637392 | 12=Germany | 13=3339196 | 14=5637392 | 19=Germany | 20=3339196 | 21=8978596 | 23=Germany | 24=5618601
- Formula cells: 15; cached result available: 15; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `T13` `=GETPIVOTDATA("[Measures].[Sum of Cost]",$W$4)-GETPIVOTDATA("[Measures].[Sum of Unit_Cost]",$S$4)` => `22835796`
  - `BA52` `=AS52=Performance!$AI$2` => `False`
  - `BA53` `=AS53=Performance!$AI$2` => `False`
  - `BA54` `=AS54=Performance!$AI$2` => `False`
  - `BA55` `=AS55=Performance!$AI$2` => `False`
  - `BA56` `=AS56=Performance!$AI$2` => `False`
  - `BA57` `=AS57=Performance!$AI$2` => `True`
  - `BA58` `=AS58=Performance!$AI$2` => `False`
  - `AO76` `=Table14[[#This Row],[Row Labels]]=Performance!AI2` => `False`
  - `AO77` `=Table14[[#This Row],[Row Labels]]=Performance!AI3` => `False`
  - `AO78` `=Table14[[#This Row],[Row Labels]]=Performance!AI4` => `False`
  - `AO79` `=Table14[[#This Row],[Row Labels]]=Performance!AI5` => `False`
  - `AO80` `=Table14[[#This Row],[Row Labels]]=Performance!AI6` => `False`
  - `AO81` `=Table14[[#This Row],[Row Labels]]=Performance!AI7` => `False`
  - `AO82` `=Table14[[#This Row],[Row Labels]]=Performance!AI8` => `False`
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Dashboard`
- Worksheet dimensions: `A2:AP5` (openpyxl `5` rows x `42` columns); pandas first-row-header shape `(4, 42)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "str", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object", "Unnamed: 41": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 4, "Unnamed: 1": 4, "Unnamed: 2": 4, "Unnamed: 3": 4, "Unnamed: 4": 4, "Unnamed: 5": 4, "Unnamed: 6": 4, "Unnamed: 7": 4, "Unnamed: 8": 4, "Unnamed: 9": 4, "Unnamed: 10": 4, "Unnamed: 11": 4, "Unnamed: 12": 4, "Unnamed: 13": 4, "Unnamed: 14": 4, "Unnamed: 15": 4, "Unnamed: 16": 4, "Unnamed: 17": 4, "Unnamed: 18": 4, "Unnamed: 19": 4, "Unnamed: 20": 4, "Unnamed: 21": 4, "Unnamed: 22": 4, "Unnamed: 23": 4, "Unnamed: 24": 4, "Unnamed: 25": 4, "Unnamed: 26": 4, "Unnamed: 27": 4, "Unnamed: 28": 4, "Unnamed: 29": 4, "Unnamed: 30": 4, "Unnamed: 31": 4, "Unnamed: 32": 4, "Unnamed: 33": 4, "Unnamed: 34": 3, "Unnamed: 35": 4, "Unnamed: 36": 4, "Unnamed: 37": 4, "Unnamed: 38": 4, "Unnamed: 39": 4, "Unnamed: 40": 4, "Unnamed: 41": 4}`
- Exact duplicate dataframe rows: 2.
- First nonblank rows for header/layout context:
  - row 2: 35=United Kingdom
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Calender`
- Worksheet dimensions: `E7:AK17` (openpyxl `17` rows x `37` columns); pandas first-row-header shape `(16, 37)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "str", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "str", "Unnamed: 22": "float64", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "str"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 16, "Unnamed: 1": 16, "Unnamed: 2": 16, "Unnamed: 3": 16, "Unnamed: 4": 8, "Unnamed: 5": 16, "Unnamed: 6": 9, "Unnamed: 7": 16, "Unnamed: 8": 9, "Unnamed: 9": 16, "Unnamed: 10": 9, "Unnamed: 11": 16, "Unnamed: 12": 9, "Unnamed: 13": 16, "Unnamed: 14": 9, "Unnamed: 15": 16, "Unnamed: 16": 9, "Unnamed: 17": 16, "Unnamed: 18": 15, "Unnamed: 19": 14, "Unnamed: 20": 16, "Unnamed: 21": 15, "Unnamed: 22": 14, "Unnamed: 23": 16, "Unnamed: 24": 16, "Unnamed: 25": 16, "Unnamed: 26": 16, "Unnamed: 27": 16, "Unnamed: 28": 16, "Unnamed: 29": 16, "Unnamed: 30": 16, "Unnamed: 31": 16, "Unnamed: 32": 16, "Unnamed: 33": 16, "Unnamed: 34": 16, "Unnamed: 35": 16, "Unnamed: 36": 15}`
- Exact duplicate dataframe rows: 6.
- First nonblank rows for header/layout context:
  - row 7: 20=12 | 23=3
- Formula cells: 45; cached result available: 45; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `E9` `=TEXT(DATE(W9,T7,1),"MMMM")&" "&W9` => `December 2028`
  - `T9` `=TEXT(DATE(2026,T7,1),"MMMM")` => `December`
  - `W9` `=2025+W7` => `2028`
  - `E11` `=DATE(W9,T7,1)-WEEKDAY(DATE(W9,T7,1),1)+1` => `2028-11-26T00:00:00`
  - `G11` `=E11+1` => `2028-11-27T00:00:00`
  - `I11` `=G11+1` => `2028-11-28T00:00:00`
  - `K11` `=I11+1` => `2028-11-29T00:00:00`
  - `M11` `=K11+1` => `2028-11-30T00:00:00`
  - `O11` `=M11+1` => `2028-12-01T00:00:00`
  - `Q11` `=O11+1` => `2028-12-02T00:00:00`
  - `E12` `=Q11+1` => `2028-12-03T00:00:00`
  - `G12` `=E12+1` => `2028-12-04T00:00:00`
  - `I12` `=G12+1` => `2028-12-05T00:00:00`
  - `K12` `=I12+1` => `2028-12-06T00:00:00`
  - `M12` `=K12+1` => `2028-12-07T00:00:00`
  - `O12` `=M12+1` => `2028-12-08T00:00:00`
  - `Q12` `=O12+1` => `2028-12-09T00:00:00`
  - `E13` `=Q12+1` => `2028-12-10T00:00:00`
  - `G13` `=E13+1` => `2028-12-11T00:00:00`
  - `I13` `=G13+1` => `2028-12-12T00:00:00`
  - `K13` `=I13+1` => `2028-12-13T00:00:00`
  - `M13` `=K13+1` => `2028-12-14T00:00:00`
  - `O13` `=M13+1` => `2028-12-15T00:00:00`
  - `Q13` `=O13+1` => `2028-12-16T00:00:00`
  - `E14` `=Q13+1` => `2028-12-17T00:00:00`
  - `G14` `=E14+1` => `2028-12-18T00:00:00`
  - `I14` `=G14+1` => `2028-12-19T00:00:00`
  - `K14` `=I14+1` => `2028-12-20T00:00:00`
  - `M14` `=K14+1` => `2028-12-21T00:00:00`
  - `O14` `=M14+1` => `2028-12-22T00:00:00`
  - `Q14` `=O14+1` => `2028-12-23T00:00:00`
  - `E15` `=Q14+1` => `2028-12-24T00:00:00`
  - `G15` `=E15+1` => `2028-12-25T00:00:00`
  - `I15` `=G15+1` => `2028-12-26T00:00:00`
  - `K15` `=I15+1` => `2028-12-27T00:00:00`
  - `M15` `=K15+1` => `2028-12-28T00:00:00`
  - `O15` `=M15+1` => `2028-12-29T00:00:00`
  - `Q15` `=O15+1` => `2028-12-30T00:00:00`
  - `E16` `=Q15+1` => `2028-12-31T00:00:00`
  - `G16` `=E16+1` => `2029-01-01T00:00:00`
  - `I16` `=G16+1` => `2029-01-02T00:00:00`
  - `K16` `=I16+1` => `2029-01-03T00:00:00`
  - `M16` `=K16+1` => `2029-01-04T00:00:00`
  - `O16` `=M16+1` => `2029-01-05T00:00:00`
  - `Q16` `=O16+1` => `2029-01-06T00:00:00`
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Finance`
- Worksheet dimensions: `A14:AH41` (openpyxl `41` rows x `34` columns); pandas first-row-header shape `(40, 34)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 40, "Unnamed: 1": 40, "Unnamed: 2": 40, "Unnamed: 3": 40, "Unnamed: 4": 40, "Unnamed: 5": 40, "Unnamed: 6": 40, "Unnamed: 7": 40, "Unnamed: 8": 40, "Unnamed: 9": 40, "Unnamed: 10": 40, "Unnamed: 11": 40, "Unnamed: 12": 40, "Unnamed: 13": 40, "Unnamed: 14": 40, "Unnamed: 15": 40, "Unnamed: 16": 40, "Unnamed: 17": 40, "Unnamed: 18": 40, "Unnamed: 19": 40, "Unnamed: 20": 40, "Unnamed: 21": 40, "Unnamed: 22": 40, "Unnamed: 23": 40, "Unnamed: 24": 40, "Unnamed: 25": 40, "Unnamed: 26": 40, "Unnamed: 27": 40, "Unnamed: 28": 40, "Unnamed: 29": 40, "Unnamed: 30": 40, "Unnamed: 31": 40, "Unnamed: 32": 40, "Unnamed: 33": 40}`
- Exact duplicate dataframe rows: 39.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Raw Data`
- Worksheet dimensions: `A1:R113039` (openpyxl `113039` rows x `18` columns); pandas first-row-header shape `(113038, 18)`.
- Column names: `["Date", "Day", "Month", "Year", "Customer_Age", "Age_Group", "Customer_Gender", "Country", "State", "Product_Category", "Sub_Category", "Product", "Order_Quantity", "Unit_Cost", "Unit_Price", "Profit", "Cost", "Revenue"]`
- pandas dtypes: `{"Date": "datetime64[us]", "Day": "float64", "Month": "str", "Year": "object", "Customer_Age": "float64", "Age_Group": "str", "Customer_Gender": "str", "Country": "str", "State": "str", "Product_Category": "str", "Sub_Category": "str", "Product": "str", "Order_Quantity": "float64", "Unit_Cost": "float64", "Unit_Price": "float64", "Profit": "float64", "Cost": "float64", "Revenue": "float64"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Date": 2, "Day": 2, "Month": 2, "Year": 2, "Customer_Age": 2, "Age_Group": 2, "Customer_Gender": 2, "Country": 2, "State": 2, "Product_Category": 2, "Sub_Category": 2, "Product": 2, "Order_Quantity": 2, "Unit_Cost": 2, "Unit_Price": 2, "Profit": 2, "Cost": 2, "Revenue": 2}`
- Exact duplicate dataframe rows: 1001.
- First nonblank rows for header/layout context:
  - row 1: 1=Date | 2=Day | 3=Month | 4=Year | 5=Customer_Age | 6=Age_Group | 7=Customer_Gender | 8=Country | 9=State | 10=Product_Category | 11=Sub_Category | 12=Product | 13=Order_Quantity | 14=Unit_Cost
  - row 2: 1=1906-09-02T00:00:00 | 2=26 | 3=November | 4=2013 | 5=19 | 6=Youth (<25) | 7=M | 8=Canada | 9=British Columbia | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=8 | 14=45
  - row 3: 1=2015-11-26T00:00:00 | 2=26 | 3=November | 4=2015 | 5=19 | 6=Youth (<25) | 7=M | 8=Canada | 9=British Columbia | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=8 | 14=45
  - row 4: 1=2014-03-23T00:00:00 | 2=23 | 3=March | 4=2014 | 5=49 | 6=Adults (35-64) | 7=M | 8=Australia | 9=New South Wales | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=23 | 14=45
  - row 5: 1=2016-03-23T00:00:00 | 2=23 | 3=March | 4=2016 | 5=49 | 6=Adults (35-64) | 7=M | 8=Australia | 9=New South Wales | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=20 | 14=45
  - row 6: 1=2014-05-15T00:00:00 | 2=15 | 3=May | 4=2014 | 5=47 | 6=Adults (35-64) | 7=F | 8=Australia | 9=New South Wales | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=4 | 14=45
  - row 7: 1=2016-05-15T00:00:00 | 2=15 | 3=May | 4=2016 | 5=47 | 6=Adults (35-64) | 7=F | 8=Australia | 9=New South Wales | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=5 | 14=45
  - row 8: 1=2014-05-22T00:00:00 | 2=22 | 3=May | 4=2014 | 5=47 | 6=Adults (35-64) | 7=F | 8=Australia | 9=Victoria | 10=Accessories | 11=Bike Racks | 12=Hitch Rack - 4-Bike | 13=4 | 14=45
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Date/year-like `Date`: dtype `datetime64[us]`, nonblank 113036, examples `['1906-09-02T00:00:00', '2015-11-26T00:00:00', '2014-03-23T00:00:00', '2016-03-23T00:00:00', '2014-05-15T00:00:00', '2016-05-15T00:00:00', '2014-05-22T00:00:00', '2016-05-22T00:00:00', '2014-02-22T00:00:00', '2016-02-22T00:00:00', '2013-07-30T00:00:00', '2015-07-30T00:00:00']`.
  - Parsed range 1906-09-02 00:00:00 through 2016-07-31 00:00:00, years `{1906.0: 1, 2011.0: 2677, 2012.0: 2677, 2013.0: 24442, 2014.0: 29398, 2015.0: 24443, 2016.0: 29398}`, unparseable nonblank 0.
- Date/year-like `Year`: dtype `object`, nonblank 113036, examples `['2013', '2015', '2014', '2016', '2014', '2016', '2014', '2016', '2014', '2016', '2013', '2015']`.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[('Customer_Age', 534, [(126, '67'), (127, '67'), (136, '87'), (137, '87'), (814, '84'), (815, '84'), (982, '68'), (983, '68')]), ('Unit_Cost', 25984, [(49306, '1912'), (49307, '1912'), (49308, '1912'), (49309, '1912'), (49310, '1912'), (49311, '1912'), (49312, '1912'), (49313, '1912')]), ('Unit_Price', 25984, [(49306, '3400'), (49307, '3400'), (49308, '3400'), (49309, '3400'), (49310, '3400'), (49311, '3400'), (49312, '3400'), (49313, '3400')]), ('Profit', 10021, [(4, '1366'), (5, '1188'), (10, '1096'), (11, '1046'), (32, '1476'), (33, '1624'), (34, '1771'), (35, '1697')]), ('Cost', 18179, [(34, '1080'), (38, '1125'), (54, '1260'), (55, '1215'), (92, '1350'), (93, '1215'), (96, '1260'), (97, '1305')]), ('Revenue', 14765, [(4, '2401'), (5, '2088'), (10, '2086'), (11, '1991'), (32, '2376'), (33, '2614'), (34, '2851'), (35, '2732')])]`.

### Sheet `Sheet5`
- Worksheet dimensions: `A1:A1` (openpyxl `1` rows x `1` columns); pandas first-row-header shape `(0, 0)`.
- Column names: `[]`
- pandas dtypes: `{}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{}`
- Exact duplicate dataframe rows: 0.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Performance`
- Worksheet dimensions: `A2:AP5` (openpyxl `5` rows x `42` columns); pandas first-row-header shape `(4, 42)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "str", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object", "Unnamed: 41": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 4, "Unnamed: 1": 4, "Unnamed: 2": 4, "Unnamed: 3": 4, "Unnamed: 4": 4, "Unnamed: 5": 4, "Unnamed: 6": 4, "Unnamed: 7": 4, "Unnamed: 8": 4, "Unnamed: 9": 4, "Unnamed: 10": 4, "Unnamed: 11": 4, "Unnamed: 12": 4, "Unnamed: 13": 4, "Unnamed: 14": 4, "Unnamed: 15": 4, "Unnamed: 16": 4, "Unnamed: 17": 4, "Unnamed: 18": 4, "Unnamed: 19": 4, "Unnamed: 20": 4, "Unnamed: 21": 4, "Unnamed: 22": 4, "Unnamed: 23": 4, "Unnamed: 24": 4, "Unnamed: 25": 4, "Unnamed: 26": 4, "Unnamed: 27": 4, "Unnamed: 28": 4, "Unnamed: 29": 4, "Unnamed: 30": 4, "Unnamed: 31": 4, "Unnamed: 32": 4, "Unnamed: 33": 4, "Unnamed: 34": 3, "Unnamed: 35": 4, "Unnamed: 36": 4, "Unnamed: 37": 4, "Unnamed: 38": 4, "Unnamed: 39": 4, "Unnamed: 40": 4, "Unnamed: 41": 4}`
- Exact duplicate dataframe rows: 2.
- First nonblank rows for header/layout context:
  - row 2: 35=United States
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `INSIGHTS`
- Worksheet dimensions: `A14:A41` (openpyxl `41` rows x `1` columns); pandas first-row-header shape `(40, 1)`.
- Column names: `["Unnamed: 0"]`
- pandas dtypes: `{"Unnamed: 0": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 40}`
- Exact duplicate dataframe rows: 39.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

## First Sales Dashboard - Copy.xlsx

Sheets: Raw, Pivot,  Dashboard, DASHBOARD & Insights, RAW2, PIVOT2, Monthly Dashboard

### Sheet `Raw`
- Worksheet dimensions: `A1:T1202` (openpyxl `1202` rows x `20` columns); pandas first-row-header shape `(1201, 20)`.
- Column names: `["OrderID", "Date", "CustomerID", "Product", "Quantity", "UnitPrice", "ShippingAddress", "PaymentMethod", "OrderStatus", "TrackingNumber", "ItemsInCart", "CouponCode", "ReferralSource", "TotalPrice", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19"]`
- pandas dtypes: `{"OrderID": "str", "Date": "datetime64[us]", "CustomerID": "str", "Product": "str", "Quantity": "int64", "UnitPrice": "float64", "ShippingAddress": "str", "PaymentMethod": "str", "OrderStatus": "str", "TrackingNumber": "object", "ItemsInCart": "int64", "CouponCode": "str", "ReferralSource": "str", "TotalPrice": "float64", "Unnamed: 14": "object", "Unnamed: 15": "str", "Unnamed: 16": "str", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"OrderID": 1, "Date": 1, "CustomerID": 1, "Product": 1, "ShippingAddress": 1, "PaymentMethod": 1, "OrderStatus": 1, "CouponCode": 310, "ReferralSource": 1, "Unnamed: 14": 1201, "Unnamed: 15": 1199, "Unnamed: 16": 1199, "Unnamed: 17": 1201, "Unnamed: 18": 1201, "Unnamed: 19": 1201}`
- Exact duplicate dataframe rows: 0.
- First nonblank rows for header/layout context:
  - row 1: 1=OrderID | 2=Date | 3=CustomerID | 4=Product | 5=Quantity | 6=UnitPrice | 7=ShippingAddress | 8=PaymentMethod | 9=OrderStatus | 10=TrackingNumber | 11=ItemsInCart | 12=CouponCode | 13=ReferralSource | 14=TotalPrice
  - row 2: 1=ORD200000 | 2=2023-01-04T00:00:00 | 3=C72649 | 4=Monitor | 5=5 | 6=570.62 | 7=928 Main St | 8=Debit Card | 9=Shipped | 10=TRK37947903 | 11=7 | 12=SAVE10 | 13=Instagram | 14=2853.1
  - row 3: 1=ORD200001 | 2=2024-08-23T00:00:00 | 3=C75739 | 4=Phone | 5=2 | 6=151.35 | 7=823 Main St | 8=Online | 9=Shipped | 10=TRK91186779 | 11=3 | 12=SAVE10 | 13=Referral | 14=302.7
  - row 4: 1=ORD200002 | 2=2024-02-27T00:00:00 | 3=C81728 | 4=Tablet | 5=5 | 6=550.68 | 7=512 Main St | 8=Credit Card | 9=Cancelled | 10=TRK42903982 | 11=8 | 12=FREESHIP | 13=Email | 14=2753.4
  - row 5: 1=ORD200003 | 2=2023-10-15T00:00:00 | 3=C33540 | 4=Chair | 5=1 | 6=273.19 | 7=275 Main St | 8=Debit Card | 9=Returned | 10=TRK62788070 | 11=5 | 12=SAVE10 | 13=Facebook | 14=273.19
  - row 6: 1=ORD200004 | 2=2025-05-08T00:00:00 | 3=C81840 | 4=Printer | 5=4 | 6=626.01 | 7=668 Main St | 8=Online | 9=Delivered | 10=TRK29241424 | 11=8 | 12=SAVE10 | 13=Email | 14=2504.04
  - row 7: 1=ORD200005 | 2=2023-10-23T00:00:00 | 3=C37249 | 4=Phone | 5=2 | 6=245.86 | 7=934 Main St | 8=Credit Card | 9=Shipped | 10=TRK72976927 | 11=4 | 12=SAVE10 | 13=Instagram | 14=491.72
  - row 8: 1=ORD200006 | 2=2025-06-17T00:00:00 | 3=C83492 | 4=Laptop | 5=1 | 6=664.42 | 7=986 Main St | 8=Gift Card | 9=Returned | 10=TRK96417362 | 11=6 | 12=SAVE10 | 13=Facebook | 14=664.42
- Formula cells: 6; cached result available: 6; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `Q12` `=_xlfn.XLOOKUP(Q11,J2:J1201,I2:I1201)` => `Returned`
  - `E1202` `=SUBTOTAL(109,Table1[Quantity])` => `3535`
  - `F1202` `=SUM(F1:F1201)` => `427695.3`
  - `J1202` `=SUBTOTAL(103,Table1[TrackingNumber])` => `1200`
  - `K1202` `=SUM(K1:K1201)` => `6582`
  - `N1202` `=SUM(N1:N1201)` => `1264761.96`
- Date/year-like `Date`: dtype `datetime64[us]`, nonblank 1200, examples `['2023-01-04T00:00:00', '2024-08-23T00:00:00', '2024-02-27T00:00:00', '2023-10-15T00:00:00', '2025-05-08T00:00:00', '2023-10-23T00:00:00', '2025-06-17T00:00:00', '2023-05-12T00:00:00', '2025-04-02T00:00:00', '2023-11-21T00:00:00', '2023-12-29T00:00:00', '2024-02-17T00:00:00']`.
  - Parsed range 2023-01-01 00:00:00 through 2025-06-30 00:00:00, years `{2023.0: 510, 2024.0: 459, 2025.0: 231}`, unparseable nonblank 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[('Quantity', 1, [(1202, '3535')]), ('UnitPrice', 1, [(1202, '427695.3')]), ('ItemsInCart', 1, [(1202, '6582')]), ('TotalPrice', 8, [(109, '3353.75'), (328, '3352.4'), (330, '3370.2'), (471, '3384.9'), (634, '3390.8'), (791, '3456.4'), (1124, '3390.95'), (1202, '1264761.96')])]`.

### Sheet `Pivot`
- Worksheet dimensions: `A1:BL149` (openpyxl `149` rows x `64` columns); pandas first-row-header shape `(148, 64)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Gross Revenue", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41", "Unnamed: 42", "Unnamed: 43", "Unnamed: 44", "Unnamed: 45", "Unnamed: 46", "Unnamed: 47", "Unnamed: 48", "Unnamed: 49", "Unnamed: 50", "Unnamed: 51", "Unnamed: 52", "Unnamed: 53", "Unnamed: 54", "Unnamed: 55", "Unnamed: 56", "Unnamed: 57", "Unnamed: 58", "Unnamed: 59", "Unnamed: 60", "Unnamed: 61", "Unnamed: 62", "Unnamed: 63"]`
- pandas dtypes: `{"Unnamed: 0": "str", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "str", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Gross Revenue": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "str", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object", "Unnamed: 41": "object", "Unnamed: 42": "object", "Unnamed: 43": "object", "Unnamed: 44": "object", "Unnamed: 45": "object", "Unnamed: 46": "object", "Unnamed: 47": "object", "Unnamed: 48": "object", "Unnamed: 49": "object", "Unnamed: 50": "object", "Unnamed: 51": "object", "Unnamed: 52": "object", "Unnamed: 53": "object", "Unnamed: 54": "object", "Unnamed: 55": "object", "Unnamed: 56": "object", "Unnamed: 57": "object", "Unnamed: 58": "object", "Unnamed: 59": "object", "Unnamed: 60": "object", "Unnamed: 61": "object", "Unnamed: 62": "object", "Unnamed: 63": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 128, "Unnamed: 1": 128, "Unnamed: 2": 148, "Unnamed: 3": 148, "Unnamed: 4": 73, "Unnamed: 5": 61, "Unnamed: 6": 71, "Unnamed: 7": 116, "Unnamed: 8": 90, "Gross Revenue": 72, "Unnamed: 10": 104, "Unnamed: 11": 122, "Unnamed: 12": 141, "Unnamed: 13": 148, "Unnamed: 14": 148, "Unnamed: 15": 87, "Unnamed: 16": 87, "Unnamed: 17": 148, "Unnamed: 18": 148, "Unnamed: 19": 148, "Unnamed: 20": 148, "Unnamed: 21": 148, "Unnamed: 22": 148, "Unnamed: 23": 148, "Unnamed: 24": 148, "Unnamed: 25": 148, "Unnamed: 26": 148, "Unnamed: 27": 148, "Unnamed: 28": 148, "Unnamed: 29": 148, "Unnamed: 30": 148, "Unnamed: 31": 148, "Unnamed: 32": 148, "Unnamed: 33": 148, "Unnamed: 34": 148, "Unnamed: 35": 148, "Unnamed: 36": 148, "Unnamed: 37": 148, "Unnamed: 38": 148, "Unnamed: 39": 148, "Unnamed: 40": 148, "Unnamed: 41": 148, "Unnamed: 42": 148, "Unnamed: 43": 148, "Unnamed: 44": 148, "Unnamed: 45": 148, "Unnamed: 46": 148, "Unnamed: 47": 148, "Unnamed: 48": 148, "Unnamed: 49": 148, "Unnamed: 50": 148, "Unnamed: 51": 148, "Unnamed: 52": 148, "Unnamed: 53": 148, "Unnamed: 54": 148, "Unnamed: 55": 148, "Unnamed: 56": 148, "Unnamed: 57": 148, "Unnamed: 58": 148, "Unnamed: 59": 148, "Unnamed: 60": 148, "Unnamed: 61": 148, "Unnamed: 62": 148, "Unnamed: 63": 148}`
- Exact duplicate dataframe rows: 3.
- First nonblank rows for header/layout context:
  - row 1: 10=Gross Revenue
  - row 2: 1=Total Products | 7=Revenue from each Unit | 10=Row Labels | 11=Sum of TotalPrice
  - row 3: 1=Row Labels | 2=Sum of Quantity | 5=Voucher Used | 7=Row Labels | 8=Sum of UnitPrice | 10=Chair | 11=195620.11000000002
  - row 4: 1=Chair | 2=0.158981612446959 | 5=Row Labels | 6=Count of OrderID | 7=Tablet | 8=65814.55999999997 | 10=Printer | 11=195612.60999999996
  - row 5: 1=Desk | 2=0.1437057991513437 | 5=FREESHIP | 6=313 | 7=Printer | 8=63660.400000000045 | 10=Laptop | 11=192126.55999999994
  - row 6: 1=Laptop | 2=0.15134370579915135 | 5=SAVE10 | 6=286 | 7=Chair | 8=63307.52999999999 | 10=Tablet | 11=186568.95000000007
  - row 7: 1=Monitor | 2=0.13578500707213578 | 5=WINTER15 | 6=292 | 7=Laptop | 8=61883.319999999985 | 10=Monitor | 11=175651.40999999997
  - row 8: 1=Phone | 2=0.11626591230551626 | 5=Grand Total | 6=891 | 7=Phone | 8=58533.94000000002 | 10=Desk | 11=167459.93
- Formula cells: 9; cached result available: 9; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `K11` `=TEXT(GETPIVOTDATA("TotalPrice",$J$2),"£#,##0.00")` => `£1,264,761.96`
  - `B12` `=GETPIVOTDATA("Quantity",$A$3)` => `1`
  - `H12` `=TEXT(GETPIVOTDATA("UnitPrice",$G$3),"£#,##0.00")` => `£427,695.30`
  - `B25` `=TEXT(GETPIVOTDATA("Quantity",$A$16),"#####")` => `3535`
  - `H25` `=TEXT(GETPIVOTDATA("TotalPrice",$G$16),"£#,##0.00")` => `£1,053.97`
  - `K25` `=TEXT(GETPIVOTDATA("Sum of TotalPrice",$J$15),"£#,#0#0.00")` => `£242,600.32`
  - `L25` `=GETPIVOTDATA("Sum of Quantity",$J$15)` => `690`
  - `F28` `=GETPIVOTDATA("CustomerID",$E$10,"OrderStatus","Delivered")` => `0.483263598326`
  - `F29` `=GETPIVOTDATA("CustomerID",$E$10,"OrderStatus","Returned")` => `0.516736401674`
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet ` Dashboard`
- Worksheet dimensions: `AF1:AJ56` (openpyxl `56` rows x `36` columns); pandas first-row-header shape `(55, 36)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 55, "Unnamed: 1": 55, "Unnamed: 2": 55, "Unnamed: 3": 55, "Unnamed: 4": 55, "Unnamed: 5": 55, "Unnamed: 6": 55, "Unnamed: 7": 55, "Unnamed: 8": 55, "Unnamed: 9": 55, "Unnamed: 10": 55, "Unnamed: 11": 55, "Unnamed: 12": 55, "Unnamed: 13": 55, "Unnamed: 14": 55, "Unnamed: 15": 55, "Unnamed: 16": 55, "Unnamed: 17": 55, "Unnamed: 18": 55, "Unnamed: 19": 55, "Unnamed: 20": 55, "Unnamed: 21": 55, "Unnamed: 22": 55, "Unnamed: 23": 55, "Unnamed: 24": 55, "Unnamed: 25": 55, "Unnamed: 26": 55, "Unnamed: 27": 55, "Unnamed: 28": 55, "Unnamed: 29": 55, "Unnamed: 30": 55, "Unnamed: 31": 55, "Unnamed: 32": 55, "Unnamed: 33": 55, "Unnamed: 34": 55, "Unnamed: 35": 55}`
- Exact duplicate dataframe rows: 54.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `DASHBOARD & Insights`
- Worksheet dimensions: `A1:AR56` (openpyxl `56` rows x `44` columns); pandas first-row-header shape `(55, 44)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25", "Unnamed: 26", "Unnamed: 27", "Unnamed: 28", "Unnamed: 29", "Unnamed: 30", "Unnamed: 31", "Unnamed: 32", "Unnamed: 33", "Unnamed: 34", "Unnamed: 35", "Unnamed: 36", "Unnamed: 37", "Unnamed: 38", "Unnamed: 39", "Unnamed: 40", "Unnamed: 41", "Unnamed: 42", "Unnamed: 43"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object", "Unnamed: 26": "object", "Unnamed: 27": "object", "Unnamed: 28": "object", "Unnamed: 29": "object", "Unnamed: 30": "object", "Unnamed: 31": "object", "Unnamed: 32": "object", "Unnamed: 33": "object", "Unnamed: 34": "object", "Unnamed: 35": "object", "Unnamed: 36": "object", "Unnamed: 37": "object", "Unnamed: 38": "object", "Unnamed: 39": "object", "Unnamed: 40": "object", "Unnamed: 41": "object", "Unnamed: 42": "object", "Unnamed: 43": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 55, "Unnamed: 1": 55, "Unnamed: 2": 55, "Unnamed: 3": 55, "Unnamed: 4": 55, "Unnamed: 5": 55, "Unnamed: 6": 55, "Unnamed: 7": 55, "Unnamed: 8": 55, "Unnamed: 9": 55, "Unnamed: 10": 55, "Unnamed: 11": 55, "Unnamed: 12": 55, "Unnamed: 13": 55, "Unnamed: 14": 55, "Unnamed: 15": 55, "Unnamed: 16": 55, "Unnamed: 17": 55, "Unnamed: 18": 55, "Unnamed: 19": 55, "Unnamed: 20": 55, "Unnamed: 21": 55, "Unnamed: 22": 55, "Unnamed: 23": 55, "Unnamed: 24": 55, "Unnamed: 25": 55, "Unnamed: 26": 55, "Unnamed: 27": 55, "Unnamed: 28": 55, "Unnamed: 29": 55, "Unnamed: 30": 55, "Unnamed: 31": 55, "Unnamed: 32": 55, "Unnamed: 33": 55, "Unnamed: 34": 55, "Unnamed: 35": 55, "Unnamed: 36": 55, "Unnamed: 37": 55, "Unnamed: 38": 55, "Unnamed: 39": 55, "Unnamed: 40": 55, "Unnamed: 41": 55, "Unnamed: 42": 55, "Unnamed: 43": 55}`
- Exact duplicate dataframe rows: 54.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `RAW2`
- Worksheet dimensions: `A1:I1202` (openpyxl `1202` rows x `9` columns); pandas first-row-header shape `(1201, 9)`.
- Column names: `["OrderID", "Date", "CustomerID", "Product", "Quantity", "UnitPrice", "PaymentMethod", "TrackingNumber", "TotalPrice"]`
- pandas dtypes: `{"OrderID": "object", "Date": "datetime64[us]", "CustomerID": "str", "Product": "str", "Quantity": "float64", "UnitPrice": "float64", "PaymentMethod": "str", "TrackingNumber": "object", "TotalPrice": "float64"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"OrderID": 1, "Date": 2, "CustomerID": 2, "Product": 2, "Quantity": 1, "UnitPrice": 1, "PaymentMethod": 2, "TrackingNumber": 1, "TotalPrice": 1}`
- Exact duplicate dataframe rows: 0.
- First nonblank rows for header/layout context:
  - row 1: 1=OrderID | 2=Date | 3=CustomerID | 4=Product | 5=Quantity | 6=UnitPrice | 7=PaymentMethod | 8=TrackingNumber | 9=TotalPrice
  - row 3: 1=ORD200001 | 2=2024-08-23T00:00:00 | 3=C75739 | 4=Phone | 5=2 | 6=151.35 | 7=Online | 8=TRK91186779 | 9=302.7
  - row 4: 1=ORD200002 | 2=2024-02-27T00:00:00 | 3=C81728 | 4=Tablet | 5=5 | 6=550.68 | 7=Credit Card | 8=TRK42903982 | 9=2753.4
  - row 5: 1=ORD200003 | 2=2023-10-15T00:00:00 | 3=C33540 | 4=Chair | 5=1 | 6=273.19 | 7=Debit Card | 8=TRK62788070 | 9=273.19
  - row 6: 1=ORD200004 | 2=2025-05-08T00:00:00 | 3=C81840 | 4=Printer | 5=4 | 6=626.01 | 7=Online | 8=TRK29241424 | 9=2504.04
  - row 7: 1=ORD200005 | 2=2023-10-23T00:00:00 | 3=C37249 | 4=Phone | 5=2 | 6=245.86 | 7=Credit Card | 8=TRK72976927 | 9=491.72
  - row 8: 1=ORD200006 | 2=2025-06-17T00:00:00 | 3=C83492 | 4=Laptop | 5=1 | 6=664.42 | 7=Gift Card | 8=TRK96417362 | 9=664.42
- Formula cells: 5; cached result available: 5; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `A1202` `=SUBTOTAL(103,Table3[OrderID])` => `1199`
  - `E1202` `=SUBTOTAL(109,Table3[Quantity])` => `3530`
  - `F1202` `=SUBTOTAL(109,Table3[UnitPrice])` => `427124.68`
  - `H1202` `=SUBTOTAL(103,Table3[TrackingNumber])` => `1199`
  - `I1202` `=SUBTOTAL(109,Table3[TotalPrice])` => `1261908.86`
- Date/year-like `Date`: dtype `datetime64[us]`, nonblank 1199, examples `['2024-08-23T00:00:00', '2024-02-27T00:00:00', '2023-10-15T00:00:00', '2025-05-08T00:00:00', '2023-10-23T00:00:00', '2025-06-17T00:00:00', '2023-05-12T00:00:00', '2025-04-02T00:00:00', '2023-11-21T00:00:00', '2023-12-29T00:00:00', '2024-02-17T00:00:00', '2024-10-15T00:00:00']`.
  - Parsed range 2023-01-01 00:00:00 through 2025-06-30 00:00:00, years `{2023.0: 509, 2024.0: 459, 2025.0: 231}`, unparseable nonblank 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[('Quantity', 1, [(1202, '3530')]), ('UnitPrice', 1, [(1202, '427124.68')]), ('TotalPrice', 9, [(109, '3353.75'), (328, '3352.4'), (330, '3370.2'), (471, '3384.9'), (634, '3390.8'), (791, '3456.4'), (1067, '3334'), (1124, '3390.95')])]`.

### Sheet `PIVOT2`
- Worksheet dimensions: `A1:H49` (openpyxl `49` rows x `8` columns); pandas first-row-header shape `(48, 8)`.
- Column names: `["Row Labels", "Sum of Quantity", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7"]`
- pandas dtypes: `{"Row Labels": "str", "Sum of Quantity": "object", "Unnamed: 2": "object", "Unnamed: 3": "str", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "str", "Unnamed: 7": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Row Labels": 22, "Sum of Quantity": 26, "Unnamed: 2": 48, "Unnamed: 3": 3, "Unnamed: 4": 15, "Unnamed: 5": 48, "Unnamed: 6": 9, "Unnamed: 7": 15}`
- Exact duplicate dataframe rows: 0.
- First nonblank rows for header/layout context:
  - row 1: 1=Row Labels | 2=Sum of Quantity
  - row 2: 1=Chair | 2=562
  - row 3: 1=Desk | 2=508 | 7=Row Labels | 8=Sum of Quantity
  - row 4: 1=Laptop | 2=535 | 4=Row Labels | 5=Sum of TotalPrice | 7=Chair | 8=562
  - row 5: 1=Monitor | 2=475 | 4=2023 | 7=Desk | 8=508
  - row 6: 1=Phone | 2=411 | 4=Qtr1 | 7=Laptop | 8=535
  - row 7: 1=Printer | 2=542 | 4=Jan | 5=5316.9800000000005 | 7=Monitor | 8=480
  - row 8: 1=Tablet | 2=497 | 4=Feb | 5=2901.42 | 7=Phone | 8=411
- Formula cells: 2; cached result available: 2; cached result unavailable/blank: 0.
- Formula inventory (up to 80 cells; each includes exact formula and cache):
  - `H12` `=GETPIVOTDATA("Quantity",$G$3)` => `3535`
  - `E49` `=TEXT(GETPIVOTDATA("TotalPrice",$D$4),"£#,#0#0.00")` => `£242,600.32`
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Monthly Dashboard`
- Worksheet dimensions: `A1:A1` (openpyxl `1` rows x `1` columns); pandas first-row-header shape `(0, 0)`.
- Column names: `[]`
- pandas dtypes: `{}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{}`
- Exact duplicate dataframe rows: 0.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

**Unresolved:** `Raw Data` is absent.
## DMAIC Gateways.xlsx

Sheets: Sheet1 (2), About, About1, About3, About2, Define, Define 1, Define 2, Define 3, Measure, Analyze, Improve, Control, Insights, Form1

### Sheet `Sheet1 (2)`
- Worksheet dimensions: `A1:A1` (openpyxl `1` rows x `1` columns); pandas first-row-header shape `(0, 0)`.
- Column names: `[]`
- pandas dtypes: `{}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{}`
- Exact duplicate dataframe rows: 0.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `About`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `About1`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `About3`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `About2`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Define`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Define 1`
- Worksheet dimensions: `G8:N36` (openpyxl `36` rows x `14` columns); pandas first-row-header shape `(35, 14)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "str", "Unnamed: 7": "str", "Unnamed: 8": "str", "Unnamed: 9": "str", "Unnamed: 10": "str", "Unnamed: 11": "str", "Unnamed: 12": "str", "Unnamed: 13": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 35, "Unnamed: 1": 35, "Unnamed: 2": 35, "Unnamed: 3": 35, "Unnamed: 4": 35, "Unnamed: 5": 35, "Unnamed: 6": 34, "Unnamed: 7": 34, "Unnamed: 8": 34, "Unnamed: 9": 34, "Unnamed: 10": 34, "Unnamed: 11": 34, "Unnamed: 12": 34, "Unnamed: 13": 35}`
- Exact duplicate dataframe rows: 33.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Define 2`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Define 3`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Measure`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Analyze`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Improve`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Control`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Insights`
- Worksheet dimensions: `Z18:Z18` (openpyxl `18` rows x `26` columns); pandas first-row-header shape `(17, 26)`.
- Column names: `["Unnamed: 0", "Unnamed: 1", "Unnamed: 2", "Unnamed: 3", "Unnamed: 4", "Unnamed: 5", "Unnamed: 6", "Unnamed: 7", "Unnamed: 8", "Unnamed: 9", "Unnamed: 10", "Unnamed: 11", "Unnamed: 12", "Unnamed: 13", "Unnamed: 14", "Unnamed: 15", "Unnamed: 16", "Unnamed: 17", "Unnamed: 18", "Unnamed: 19", "Unnamed: 20", "Unnamed: 21", "Unnamed: 22", "Unnamed: 23", "Unnamed: 24", "Unnamed: 25"]`
- pandas dtypes: `{"Unnamed: 0": "object", "Unnamed: 1": "object", "Unnamed: 2": "object", "Unnamed: 3": "object", "Unnamed: 4": "object", "Unnamed: 5": "object", "Unnamed: 6": "object", "Unnamed: 7": "object", "Unnamed: 8": "object", "Unnamed: 9": "object", "Unnamed: 10": "object", "Unnamed: 11": "object", "Unnamed: 12": "object", "Unnamed: 13": "object", "Unnamed: 14": "object", "Unnamed: 15": "object", "Unnamed: 16": "object", "Unnamed: 17": "object", "Unnamed: 18": "object", "Unnamed: 19": "object", "Unnamed: 20": "object", "Unnamed: 21": "object", "Unnamed: 22": "object", "Unnamed: 23": "object", "Unnamed: 24": "object", "Unnamed: 25": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"Unnamed: 0": 17, "Unnamed: 1": 17, "Unnamed: 2": 17, "Unnamed: 3": 17, "Unnamed: 4": 17, "Unnamed: 5": 17, "Unnamed: 6": 17, "Unnamed: 7": 17, "Unnamed: 8": 17, "Unnamed: 9": 17, "Unnamed: 10": 17, "Unnamed: 11": 17, "Unnamed: 12": 17, "Unnamed: 13": 17, "Unnamed: 14": 17, "Unnamed: 15": 17, "Unnamed: 16": 17, "Unnamed: 17": 17, "Unnamed: 18": 17, "Unnamed: 19": 17, "Unnamed: 20": 17, "Unnamed: 21": 17, "Unnamed: 22": 17, "Unnamed: 23": 17, "Unnamed: 24": 17, "Unnamed: 25": 17}`
- Exact duplicate dataframe rows: 16.
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

### Sheet `Form1`
- Worksheet dimensions: `A1:E2` (openpyxl `2` rows x `5` columns); pandas first-row-header shape `(1, 5)`.
- Column names: `["ID", "Start time", "Completion time", "Email", "Name"]`
- pandas dtypes: `{"ID": "object", "Start time": "object", "Completion time": "object", "Email": "object", "Name": "object"}`
- Missing counts by column (pandas parsed cached values, header row excluded): `{"ID": 1, "Start time": 1, "Completion time": 1, "Email": 1, "Name": 1}`
- Exact duplicate dataframe rows: 0.
- First nonblank rows for header/layout context:
  - row 1: 1=ID | 2=Start time | 3=Completion time | 4=Email | 5=Name
- Formula cells: 0; cached result available: 0; cached result unavailable/blank: 0.
- Numeric IQR outlier candidates (1.5 x IQR; screening only): `[]`.

## Reproducible calculation method

For sales totals, parse the true date field with `pd.to_datetime(raw[date_col], errors="coerce")`; parse profit with `pd.to_numeric(raw[profit_col], errors="coerce")`; include only rows where both parse; group profit by `parsed_date.dt.year` and sum. Count missing/unparseable date and profit rows separately. These are workbook units, not a declared currency.

For formula inspection, pair coordinates from `load_workbook(file, data_only=False)` and `load_workbook(file, data_only=True)`. openpyxl reads stored cached values but does not calculate formulas. Where cache is blank, use Excel/LibreOffice recalculation or independently reproduce the calculation before reaching a conclusion.

## Interpretive limits and unresolved questions

- Structural summaries use the first row as headers for pandas; first rows are reported so non-tabular/dashboard sheets are not mistaken for clean data tables.
- IQR outliers are candidates only and require business context.
- Pivot cache/display values may be stale; openpyxl does not refresh pivot tables.
- No source workbook or README was changed.

## Focused findings and reconciliation

### Starbucks affordability trace

- `11_Derived_Calcs!A5:E5` records the metric as `Price / GDP per capita x 100`, with input text `US$3.50 / US$1,535.9 x 100` and result `0.23%`. The derived-calculation row itself contains no Excel formula; its method, inputs, and result are stored as text.
- `_calc!B8` is the linked formula `="Beverage ≈ "&TEXT(3.5/'2_Nepal_Macroeconomic'!B5,"0.00%")&" of GDP p.c."`; its stored cached result is `Beverage ≈ 0.23% of GDP p.c.`. The workbook value is 0.2279% before formatting, which rounds to 0.23%.
- The denominator is `2_Nepal_Macroeconomic!B5` = 1,535.9 US dollars, period 2025, source note `World Bank (2025)`. The citation audit maps that citation to `World Bank (2025) Nepal country data`; the `Sources` sheet has no populated cells and the workbook gives no direct indicator URL or retrieval evidence.
- The cappuccino/coffee price is not source-traceable in the workbook: `3.50` is hard-coded in `_calc!B8` and `11_Derived_Calcs!C5` writes `$3.50`; no price citation, product-size/store/date basis, or cell-linked price input was found. There is no `Cappuccino` source entry.
- A workbook-wide search found no US `0.7%` result, no US income/GDP-per-capita input, and no corresponding calculation. The figure therefore cannot be reproduced from this workbook. At a $3.50 price, 0.7% would imply a denominator of $500 on the same period/basis; that income value and period are not supplied. Nor does this workbook reproduce the README's Nepal 2.7% monthly-income figure: it calculates 0.23% of annual GDP per capita. These are different measures, not rounding differences.
- GDP per capita is an average national output per resident, not a measured individual or household income. It does not describe income distribution, disposable income after taxes/transfers, household size, or the consumer's purchasing power; dividing a one-drink price by an annual GDP-per-capita figure yields only an indicative macro ratio, not a person's share of monthly income.

### Sales Analytics (`Profit Loss Dashboard project.xlsx`, `Raw Data`)

- `Raw Data` has 113,038 worksheet rows below its header range, of which 113,036 contain data and two rows are fully blank. Those two blank rows account for the reported missing `Date`, `Year`, and `Profit` cells. Pandas reports 1,001 exact full-row duplicate occurrences including one duplicate all-blank row; excluding fully blank rows, there are 1,000 repeated nonblank full-row records. Without a transaction key, investigate rather than automatically remove them.
- The `Year` column is mixed type: 107,682 integer values and 5,354 date values (2,677 each rendered as `2026-11-20` and `2026-12-20`). Across rows where both fields are populated, 5,355 actual `Date` year vs stored `Year` mismatches are observed. The date values occur on actual `Date` years 2011 and 2012 respectively. This is inconsistent with a year field; grouping by it is not a reliable substitute for the actual `Date` column.
- The only actual-date year anomaly is source row 2 (`Raw Data!A2`): actual Date `1906-09-02`, while Day/Month/Year columns say 26 / November / 2013. `2013-11-26` is a plausible reconstruction from the companion fields, not a verified correction. Its profit is 590. There are no other nonblank unparseable dates; the two blank rows above are the only missing dates.
- Independently grouped `Profit` by parsed `Date` year (all rows with valid date and numeric profit; no currency inferred):

| Actual Date year | Rows | Profit sum (source units) |
|---:|---:|---:|
| 1906 | 1 | 590 |
| 2011 | 2,677 | 2,881,301 |
| 2012 | 2,677 | 2,951,993 |
| 2013 | 24,442 | 5,958,618 |
| 2014 | 29,398 | 5,864,087 |
| 2015 | 24,443 | 7,528,563 |
| 2016 | 29,398 | 7,035,948 |

- The annual pivot on `Sheet1` and cached dashboard chart series (chart cache refers to `Sheet1!$A$4:$A$10` and `Sheet1!$B$4:$B$10`) show 2011 = 2,951,993 and 2016 = 7,035,948. The workbook pivot's 2011 value equals the independently grouped 2012 total; its 2012 label has 2,881,301, the actual 2011 total. The 2016 figure agrees exactly. For 2013, the pivot shows 5,959,208, which is 590 higher than actual-Date grouping, equal to the profit on the 1906 row whose separate `Year` field says 2013. This strongly indicates the summaries follow the inconsistent Year field and/or stored pivot cache; refreshing/recalculating after source validation is needed to establish the precise cause. Cached chart values are stored workbook evidence, not a live refresh.
- The README's 2011 2.88m and 2016 7.04m figures match the independently calculated actual-Date totals when rounded to 2 decimals, but 2011 does not match the existing pivot/chart's 2.952m. The exact raw-date change is 144.19%, not 144.4%; the README's 144.4% comes from its rounded 7.04 and 2.88 inputs.
- The workbook formats some summary amounts with `pound sign` and labels a dashboard KPI in pounds, but `Raw Data` has no currency field or source-currency documentation. Thus `pound sign` is presentation evidence, not proof of the source transactions' currency. Report these totals as source units until currency provenance is established.
- The workbook has two cached `#REF!` formula results: `Sheet1!S48` and `Pivot!O18`. Formula caches were read but not recalculated.

### Reproducible pandas calculation

```python
import pandas as pd

raw = pd.read_excel(
    r"C:\Users\thaka\Downloads\subash-portfolio\Profit Loss Dashboard project.xlsx",
    sheet_name="Raw Data",
    engine="openpyxl",
)
actual_date = pd.to_datetime(raw["Date"], errors="coerce")
profit = pd.to_numeric(raw["Profit"], errors="coerce")
valid = actual_date.notna() & profit.notna()
annual_profit = profit[valid].groupby(actual_date[valid].dt.year).sum().sort_index()
print(annual_profit)
```

This reproduces the raw-date yearly table above. The two entirely blank rows are excluded by `valid`; no deduplication or date correction is applied. For the Nepal ratio, `100 * 3.50 / 1,535.9` gives 0.2279%, formatted to two decimal places as 0.23%.

## Unresolved issues and required next steps before a README update

1. Confirm which income metric the Starbucks comparison is intended to represent (monthly individual/household income, disposable income, or a clearly labelled GDP-per-capita proxy) and use the same definition, units, and period for both countries.
2. Verify and cite the beverage price(s), size, store/location, price date, currency, and any exchange-rate conversion. Add a source for the $3.50 input; verify Nepal's GDP-per-capita indicator/value and add a direct source link/retrieval year. Locate or recalculate the US 0.7% from documented inputs; otherwise keep it marked unvalidated/remove it rather than infer a denominator.
3. Decide how to resolve `Raw Data!A2` (verify against source data before correcting), repair the 5,354 date-typed `Year` values, and confirm the two blank rows and 1,000 repeated nonblank full-row records (1,001 duplicate occurrences including the blank-row duplicate) against a source transaction key/business rule.
4. Refresh the annual pivot tables and dashboard chart caches only after the source-year/date decisions. Reconcile 2011, 2012, and 2013 (not just endpoints); confirm 2016 remains 7,035,948 and resolve `Sheet1!S48` and `Pivot!O18` (`#REF!`).
5. Establish currency provenance from the workbook owner/source dataset; the displayed pound-sign formatting alone does not confirm raw currency. Then update the README with numbers and labels that agree with the validated date basis, income definition, and currency evidence, and remove the current "not present in repository" evidence wording only if the workbook is intentionally added to the repository.

No README or source workbook was changed during this audit.

## Complete formula/cache appendix for the only truncated sheet inventory

The summary above listed the first 80 formulas on `Profit Loss Dashboard project.xlsx` / `Pivot`; this appendix enumerates all formula cells and their stored cached values for that sheet. openpyxl does not recalculate them.

Formula cells: 252; nonblank cached results: 252; cached errors: 1.

- `Z6` `=AA6=Dashboard!$AI$2` => `False`
- `F7` `=TEXT(GETPIVOTDATA("Revenue",$D$3),"£#,##0.00,, ""M""")` => `'£85.27 M'`
- `I7` `=TEXT(GETPIVOTDATA("Profit",$G$3),"£#,##0.00,, ""M""")` => `'£32.22 M'`
- `L7` `=GETPIVOTDATA("Profit",$J$3)` => `1`
- `O7` `=GETPIVOTDATA("Revenue",$M$3)` => `1`
- `Z7` `=AA7=Dashboard!$AI$2` => `False`
- `Z8` `=AA8=Dashboard!$AI$2` => `False`
- `Z9` `=AA9=Dashboard!$AI$2` => `False`
- `Z10` `=AA10=Dashboard!$AI$2` => `True`
- `Z11` `=AA11=Dashboard!$AI$2` => `False`
- `AG14` `=Z14=Dashboard!$AI$2` => `False`
- `X15` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG15` `=Z15=Dashboard!$AI$2` => `False`
- `X16` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG16` `=Z16=Dashboard!$AI$2` => `False`
- `X17` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG17` `=Z17=Dashboard!$AI$2` => `False`
- `O18` `=GETPIVOTDATA("Order_Quantity",$M$14)` => `'#REF!'`
- `X18` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG18` `=Z18=Dashboard!$AI$2` => `True`
- `X19` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `True`
- `AG19` `=Z19=Dashboard!$AI$2` => `False`
- `X20` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG20` `=Z20=Dashboard!$AI$2` => `False`
- `X21` `=Table11[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `M153` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI2` => `False`
- `M154` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI3` => `False`
- `M155` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI4` => `False`
- `M156` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI5` => `False`
- `M157` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI6` => `False`
- `M158` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI7` => `False`
- `M159` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI8` => `False`
- `M160` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI9` => `False`
- `M161` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI10` => `False`
- `M162` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI11` => `False`
- `M163` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI12` => `False`
- `M164` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI13` => `False`
- `M165` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI14` => `False`
- `M166` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI15` => `False`
- `M167` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI16` => `False`
- `M168` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI17` => `False`
- `M169` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI18` => `False`
- `M170` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI19` => `False`
- `M171` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI20` => `False`
- `AD171` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `M172` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI21` => `False`
- `AD172` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `M173` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI22` => `False`
- `AD173` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `M174` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI23` => `False`
- `AD174` `=T_1[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `M175` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI24` => `False`
- `M176` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI25` => `False`
- `M177` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI26` => `False`
- `M178` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI27` => `False`
- `M179` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI28` => `False`
- `M180` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI29` => `False`
- `M181` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI30` => `False`
- `M182` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI31` => `False`
- `M183` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI32` => `False`
- `M184` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI33` => `False`
- `M185` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI34` => `False`
- `M186` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI35` => `False`
- `M187` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI36` => `False`
- `M188` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI37` => `False`
- `M189` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI38` => `False`
- `M190` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI39` => `False`
- `M191` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI40` => `False`
- `M192` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI41` => `False`
- `M193` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI42` => `False`
- `M194` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI43` => `False`
- `M195` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI44` => `False`
- `M196` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI45` => `False`
- `M197` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI46` => `False`
- `M198` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI47` => `False`
- `M199` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI48` => `False`
- `M200` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI49` => `False`
- `M201` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI50` => `False`
- `M202` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI51` => `False`
- `M203` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI52` => `False`
- `M204` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI53` => `False`
- `M205` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI54` => `False`
- `M206` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI55` => `False`
- `M207` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI56` => `False`
- `M208` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI57` => `False`
- `M209` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI58` => `False`
- `M210` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI59` => `False`
- `M211` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI60` => `False`
- `M212` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI61` => `False`
- `M213` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI62` => `False`
- `M214` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI63` => `False`
- `M215` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI64` => `False`
- `M216` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI65` => `False`
- `M217` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI66` => `False`
- `M218` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI67` => `False`
- `M219` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI68` => `False`
- `M220` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI69` => `False`
- `M221` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI70` => `False`
- `M222` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI71` => `False`
- `M223` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI72` => `False`
- `M224` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI73` => `False`
- `M225` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI74` => `False`
- `M226` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI75` => `False`
- `M227` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI76` => `False`
- `M228` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI77` => `False`
- `M229` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI78` => `False`
- `M230` `=T_2[[#This Row],[Row Labels]]=Dashboard!AI79` => `False`
- `Q268` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q269` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q270` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q271` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q272` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `True`
- `Q273` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q274` `=Ta_2[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q303` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q304` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q305` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q306` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q307` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `True`
- `Q308` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `Q309` `=Table12[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG325` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG326` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG327` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG328` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG329` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG330` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG331` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG332` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG333` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG334` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG335` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG336` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG337` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG338` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG339` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG340` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG341` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG342` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG343` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG344` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG345` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG346` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG347` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG348` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG349` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG350` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG351` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG352` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG353` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG354` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG355` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG356` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG357` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG358` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG359` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG360` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG361` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG362` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG363` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG364` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG365` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG366` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG367` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG368` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG369` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG370` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG371` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG372` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG373` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG374` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG375` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG376` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG377` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG378` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG379` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG380` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG381` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG382` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG383` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG384` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG385` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG386` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG387` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG388` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG389` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG390` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG391` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG392` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG393` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG394` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG395` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG396` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG397` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG398` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG399` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG400` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG401` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG402` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG403` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG404` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG405` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG406` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG407` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG408` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG409` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG410` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG411` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG412` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG413` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG414` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG415` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG416` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG417` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG418` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG419` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG420` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG421` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG422` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG423` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG424` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG425` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG426` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG427` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG428` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG429` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG430` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG431` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG432` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG433` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG434` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG435` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG436` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG437` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG438` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG439` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG440` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG441` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG442` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG443` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG444` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG445` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG446` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG447` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG448` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG449` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG450` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG451` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG452` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG453` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG454` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`
- `AG455` `=Table13[[#This Row],[Row Labels]]=Dashboard!$AI$2` => `False`

Cached formula errors:
- `O18` `=GETPIVOTDATA("Order_Quantity",$M$14)` => `#REF!`
