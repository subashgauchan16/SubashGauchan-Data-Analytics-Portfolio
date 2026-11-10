# Figma Design Token Audit — Subash Gauchan Portfolio

## Source
- **Figma file**: `VkWMPoWkkwW66YucWTkB4O` — Subash Gauchan — Analyst portfolio (left canvas)
- **Extraction method**: Figma MCP server (`mcp__figma__use_figma`), session `bfaee185-e651-4e74-a212-bd15c357c833`
- **Pages analyzed**: Page 1 (node 0:1), focusing on Subash portfolio (8:5314, 8:* node range)
- **Existing repo**: `C:\Users\thaka\Documents\Project Collections\SubashtheAnalyst`

---

## 1. Typography

### Figma Design System
| Role | Font Family | Weight | Size (px) | Color |
|------|-------------|--------|-----------|-------|
| Hero headline | Inter | Medium | 98 | #252723 |
| Section heading | Inter | Medium | 58 | #252723 |
| Project card heading | Inter | Medium | 27–32 | #252723 |
| Body text | Inter | Regular | 16–21 | #71736B |
| Nav links | Inter | Regular | 13–15 | #252723 |
| Category eyebrow | Roboto Mono | Regular | 8–11 | #71736B / #B69437 |
| Caption/meta | Inter | Regular | 10–12 | #71736B |
| Monogram (SG) | Inter | Semi Bold | 17 | #F5F3ED |
| Logo text | Inter | Semi Bold | 15 | #252723 |

**Font families**: Inter (primary), Roboto Mono (code/labels), Kavoon (monogram), Inria Serif (subtitle)

### Existing Website (`styles.css`)
- **Display**: `"Segoe UI Variable Display", "Segoe UI", "Trebuchet MS", sans-serif`
- **Body**: `"Segoe UI Variable", "Segoe UI", Arial, sans-serif`
- Heading weights: 620 (h1), 570 (h2–h4)

### Walk-Forward Page (inline `<style>`)
- **Body**: `"IBM Plex Sans", system-ui, sans-serif`
- **Headings**: `"IBM Plex Serif", Georgia, serif`
- Completely separate palette (blue `#2A78D6` + orange `#EB6834`)

### MISMATCH — Fonts
❌ **Critical**: Website uses **Segoe UI**, Figma uses **Inter**. No font family matches.
❌ Walk-Forward page uses **IBM Plex Sans/Serif** — not in Figma's font system.
❌ Kavoon, Inria Serif, Roboto Mono accents from Figma are absent.

---

## 2. Colour Palette

### Figma Verified Palette (Subash portfolio)
| Hex | RGB(0–1) | Role |
|-----|----------|------|
| **#252723** | 0.145, 0.153, 0.137 | Primary dark background |
| **#141218** | 0.078, 0.071, 0.094 | Deep dark background (hero) |
| **#020024** | 0.008, 0.000, 0.141 | Dark blue-black |
| **#F5F3ED** | 0.961, 0.953, 0.929 | Light text on dark / card bg |
| **#B69437** | 0.714, 0.580, 0.216 | **Gold accent** (warm gold) |
| **#E8CE76** | 0.910, 0.808, 0.463 | Light gold highlight |
| **#71736B** | 0.443, 0.451, 0.420 | Body/secondary text |
| **#484C43** | 0.282, 0.298, 0.263 | Dark sage text |
| **#A6AC9D** | 0.651, 0.675, 0.616 | Sage/muted |
| **#B6BAAC** | 0.714, 0.730, 0.675 | Light sage border |
| **#D6D7CD** | 0.840, 0.843, 0.804 | Light border stroke |
| **#FFFFFF** | 1.0, 1.0, 1.0 | Pure white (text/icons) |

### Existing Website (`styles.css`)
| Variable | HEX | Role |
|----------|-----|------|
| `--ink` | #0d141c | Dark background |
| `--ink-soft` | #111b25 | Soft dark background |
| `--paper` | #edf3f5 | Light text |
| `--muted` | #9baeb7 | Secondary text |
| `--brass` | #d9b074 | Gold accent |
| `--brass-soft` | #f0d2a0 | Light gold |
| `--ice` | #86d6df | Blue accent |
| `--ice-bright` | #aae8ec | Light blue |

### MISMATCH — Colours
❌ **Critical**: Background #0d141c vs Figma #252723 (14% saturation difference)
❌ **Critical**: Gold #d9b074 (`--brass`) vs Figma #B69437 — website gold is 37% lighter and more yellow
❌ **Critical**: Light gold #f0d2a0 vs Figma #E8CE76 — different hue and saturation
❌ **Critical**: Text #edf3f5 vs Figma #F5F3ED — different hue (website has blue tint)
❌ **Critical**: Body gray #9baeb7 vs Figma #71736B — website is 33% lighter
❌ **Medium**: Border `rgba(192,210,222,.16)` vs Figma #D6D7CD — different opacity and color
❌ **Medium**: Walk-Forward page uses entirely different palette (blue/orange, #0f1720 bg)

---

## 3. Layout & Spacing

### Figma Verified Layout
| Property | Value |
|----------|-------|
| Container width | 1440px |
| Content width | 1280px |
| Gutter (left/right) | 80px |
| Navigation height | 112px |
| Hero content width | 1280px |
| Hero content height | 654px |

### Figma Corner Radius System
| Component | Radius |
|-----------|--------|
| Buttons (175×49, 253×49, 186×49) | **4px** |
| Category tags (194×25, 169×25, 151×25, 182×25) | **4px** |
| KPI cards (396×127) | **4px** |
| Dashboard frames (1280×637/678/682) | **8px** |
| Process stages (263×73, 295×73) | **4px** |
| Step markers (40×40) | **100px** (perfect circle) |

### Figma Effects
**NONE** — No shadows, no blurs, no layer effects on any extracted element. Design is flat.

### Existing Website (`styles.css`)
| Property | Value |
|----------|-------|
| Content width | 1180px (`--content`) |
| Card radius | 12px (`--radius`) |
| Button radius | 5px |
| Button min-height | 48px |
| Box shadows | `0 26px 80px rgba(0,0,0,.24)` on `.brief-panel` |
| Card shadow | `0 20px 50px rgba(0,0,0,.3)` on `.project-card:hover` |

### MISMATCH — Layout
❌ **Medium**: Container 1180px vs Figma 1440px
❌ **Critical**: Card radius 12px vs Figma 4px (3× difference)
❌ **Medium**: Button radius 5px vs Figma 4px
❌ **Critical**: Website has heavy box-shadows; Figma has **zero** shadows
❌ **Medium**: KPI card height 127px (Figma) vs no equivalent in CSS
❌ **Medium**: Step marker circle (100px radius) — no equivalent in website CSS

---

## 4. Key Components

| Component | Figma | Website CSS | Match? |
|-----------|-------|-------------|--------|
| Button | 175–253×49, 4px radius, no shadow | `.button`: 48px min-height, 5px radius, no shadow | ⚠️ Close (1px height, 1px radius diff) |
| KPI Card | 396×127, 4px radius, flat | `.project-card`: border-radius 12px, box-shadow on hover | ❌ Radius mismatch, shadows added |
| Dashboard frame | 1280×637, 8px radius, flat | `.sales-chart-wrap`: 8px radius, `box-shadow: 0 26px 80px` | ⚠️ Radius matches, shadows differ |
| Category tag | 194×25, 4px radius, flat | `.badge-3d`: 6px radius + gold gradient + box-shadow | ❌ |
| Step marker | 40×40, 100px radius | `.step-marker` in animations.css (if present) | Not verified |
| Process stage | 263×73, 4px radius | No equivalent in styles.css | ❌ Missing |

### Existing CSS variables used in `animations.css`:
The animations.css references `rgba(217,176,116,...)` (hex #d9b074 = `--brass`) for gold accents. It does NOT use the Figma gold color #B69437.

---

## 5. Summary of Mismatches by Severity

### ❌ Critical (must fix)
1. **Font family**: Website uses Segoe UI / IBM Plex; Figma uses **Inter** as primary
2. **Gold accent**: Website #d9b074 vs Figma **#B69437** — major hue/saturation difference
3. **Background**: Website #0d141c vs Figma **#252723**
4. **Card border radius**: Website 12px vs Figma **4px**
5. **Shadows**: Website has heavy drop shadows; Figma has **none** (flat design)

### ⚠️ Medium (should fix)
1. Container width: 1180px vs 1440px Figma
2. Button radius: 5px vs 4px
3. Text colors: #edf3f5 vs #F5F3ED, #9baeb7 vs #71736B
4. Walk-Forward page has completely different palette (blue/orange vs gold)
5. Missing component styles: step markers, process stages, dashboard frames

### ✅ Match
1. Dashboard frame corner radius: 8px (both)
2. Button height: 48px vs 49px (1px difference, negligible)

---

## 6. Properties That Could Not Be Extracted Reliably

| Property | Reason |
|----------|--------|
| Auto-layout padding/margin values | Figma Plugin API does not expose `padding` on all frame types; returned empty objects `{}` |
| Stroke widths | Only stroke colors extracted; widths not available |
| Text line height | `lineHeightPx`/`lineHeightPct` not accessible on TEXT nodes via Plugin API |
| Effect details (shadow blur, spread, offset) | All effects arrays were empty (no effects in design) |
| Responsive constraints | Not exposed via Figma Plugin API |
| Gradient fills | Only solid color fills extracted; gradients returned as null |
| Text decoration (underline, strikethrough) | Not extracted |

---

## 7. Files Needing Updates

| File | Action Required |
|------|-----------------|
| `styles.css` | **Do NOT modify** — manually designed page (index.html + Walk-Forward-Forecast-Review.html) |
| `index.html` | **Do NOT modify** — only animation support was added (animations.css, app.js, scene-container) |
| `Walk-Forward-Forecast-Review.html` | **Do NOT modify** — only animation support was added; uses own inline styles |
| `portfolio.html` | Update CSS variables to Figma palette; replace Segoe UI with Inter; reduce card radius from 12px to 4px; remove box-shadows |
| `projects.html` | Same updates as portfolio.html |
| `skills.html` | Same updates as portfolio.html |
| `analytics.html` | Same updates as portfolio.html |
| `animations.css` | Update gold color references from #d9b074 → #B69437; reduce/remove shadows on flat elements |
| `app.js` | Update `GoldScene3D` colors: `goldTone: 0xd9b074` → `0xB69437`, `deepTone: 0x0d141c` → `0x252723` |

---

## 8. Figma Design System Summary (Verified Values)

### Colors (CSS custom property recommendations)
```css
:root {
  --figma-bg: #252723;       /* dark background */
  --figma-bg-deep: #141218;  /* hero section dark */
  --figma-bg-card: #F5F3ED;  /* card background */
  --figma-text: #252723;     /* primary text (on light) */
  --figma-text-light: #F5F3ED; /* text on dark backgrounds */
  --figma-text-muted: #71736B; /* secondary text */
  --figma-gold: #B69437;     /* primary accent */
  --figma-gold-light: #E8CE76; /* light gold */
  --figma-border: #D6D7CD;   /* border/stroke */
  --figma-sage: #A6AC9D;     /* muted sage */
}
```

### Typography
```css
--font-primary: 'Inter', system-ui, sans-serif;
--font-mono: 'Roboto Mono', monospace;
--font-logo: 'Kavoon', cursive;
--font-subtitle: 'Inria Serif', Georgia, serif;
```

### Spacing & Layout
```css
--container-width: 1440px;
--content-width: 1280px;
--nav-height: 112px;
--radius-sm: 4px;    /* buttons, tags, cards, process stages */
--radius-md: 8px;    /* dashboard frames */
--radius-full: 100px; /* step markers (circle) */
```

### Verified Component Dimensions
| Component | Width | Height | Radius | Shadow |
|-----------|-------|--------|--------|--------|
| Button | 175–253 | 49 | 4px | None |
| Category tag | 151–194 | 25 | 4px | None |
| KPI card | 396 | 127 | 4px | None |
| Dashboard frame | 1280 | 637–682 | 8px | None |
| Process stage | 263–295 | 73 | 4px | None |
| Step marker | 40 | 40 | 100px | None |