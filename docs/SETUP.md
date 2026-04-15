# IML Contestant Handbook — Annual Update Guide

## Overview

The handbook is split into **section data files** (one per topic) so different
team members can update their section independently.  
The handbook engine (`index.html`) and the build system (`build.py`) are stable
year-to-year and rarely need editing.

---

## File Structure

```
IML Handbook project/
├── data/               ← EDIT THESE every year
│   ├── meta.js         ← Edition number + year
│   ├── sheets.js       ← Google Sheet IDs
│   ├── venue.js        ← Hotel, map, nearby spots
│   ├── welcome.js      ← Welcome letter
│   ├── letters.js      ← First Wives' Club letter + closing quote
│   ├── events.js       ← All 13 events (one per PDF page)
│   └── team.js         ← Handlers & Team Shine
│
├── index.html          ← Handbook template (rarely changed)
├── build.py            ← Assembles dist/ from data/ + index.html
├── validate.py         ← Data completeness + page-height audit
├── serve.py            ← Local dev server
├── IMLLogo.jpg         ← Replace if logo changes
├── .github/
│   └── workflows/
│       └── build.yml   ← CI/CD: validates + deploys on push to main
└── docs/
    └── SETUP.md        ← This file
```

---

## Section Ownership

| File | Owner | What to update |
|------|-------|----------------|
| `data/meta.js` | Logistics / Comms | IML number + year |
| `data/sheets.js` | Registration / Data | Google Sheet IDs |
| `data/venue.js` | Operations / Venue | Hotel details, nearby spots |
| `data/welcome.js` | Current IML titleholder / Den Daddy | Welcome letter |
| `data/letters.js` | Comms / First Wives team | Partner letter + closing quote |
| `data/events.js` | Events / Logistics | All 13 events (dates, times, venues) |
| `data/team.js` | Operations / Handlers coordinator | Handler + Team Shine bios + photos |

---

## Annual Update Checklist

1. **`data/meta.js`** — Bump `IML_NUMBER` and `IML_YEAR`

2. **`data/sheets.js`** — Update both Google Sheet IDs
   - Open the Google Sheet → copy the ID from the URL:  
     `docs.google.com/spreadsheets/d/`**`SHEET_ID`**`/edit`
   - Sheet must be shared: *Anyone with the link → Viewer*

3. **`data/venue.js`** — Update hotel name, address, map coordinates, notes
   - If the venue city changes, also update `NEARBY_SPOTS`

4. **`data/welcome.js`** — New letter from the titleholder or Den Daddy
   - Each string in `paragraphs` becomes a `<p>` tag

5. **`data/letters.js`** — Update First Wives' Club letter if needed
   - `CLOSING_QUOTE` is optional — change or keep as-is

6. **`data/events.js`** — Update dates, times, venues for all 13 events
   - **Must remain exactly 13 events** — each becomes one PDF page
   - `badge` must be either `"MANDATORY"` or `"OPTIONAL"`

7. **`data/team.js`** — Update handler and Team Shine bios + photo IDs
   - `fileId` = the long ID from a Google Drive file URL:  
     `drive.google.com/file/d/`**`FILE_ID`**`/view`
   - The Drive file must be shared: *Anyone with the link → Viewer*

8. **`IMLLogo.jpg`** — Replace if the IML logo changes

---

## Workflow: Making Updates

### Option A — Direct push (small, confident edits)

```bash
git clone https://github.com/YOUR_ORG/iml-handbook.git
cd iml-handbook

# Edit your section file
nano data/events.js

# Preview locally
python serve.py       # opens at http://localhost:8000

# Validate
python validate.py

# Commit and push — CI/CD builds + deploys automatically
git add data/events.js
git commit -m "IML 49: update events schedule"
git push origin main
```

### Option B — Pull Request (recommended for larger changes)

```bash
git checkout -b update/iml-49-team
# ... edit data/team.js ...
git add data/team.js
git commit -m "IML 49: update handler team roster"
git push origin update/iml-49-team
# Open a PR on GitHub → CI validates automatically
# Merge to main → auto-deploys
```

---

## Building Locally

```bash
# Validate data files (no output written)
python validate.py

# Full build → writes dist/index.html
python build.py

# Open in Chrome and export to PDF
start dist/index.html        # Windows
open dist/index.html         # macOS
```

### Exporting to PDF

1. Open `dist/index.html` in **Chrome** or **Edge**
2. Click **Export PDF** button (top-right of the page), or press `Ctrl+P` / `Cmd+P`
3. Settings:
   - Destination: **Save as PDF**
   - Paper size: **Letter** (8.5 × 11 in)
   - Margins: **None**
   - ☑ Background graphics

---

## PDF Page Precision

Every named page container in the handbook has `height: 11in; overflow: hidden`
in `@media print` CSS. This means:

- Content that overflows a page is **clipped** (not pushed to the next page)
- Run `python validate.py` to audit all page containers before building
- If content is being clipped, reduce font size or shorten content in the data file

Page containers and their content limits:

| Container | Section | Content owner |
|-----------|---------|---------------|
| `.letter-page` | Welcome letter | `data/welcome.js` |
| `#cover` | Cover | `data/meta.js` + `data/venue.js` |
| `#class-grid` | Class photo grid | Contestant sheet |
| `.page-block` (×N) | Contestant profiles | Contestant sheet |
| `.event-block` (×13) | Events | `data/events.js` |
| `.coc-sub` (×5) | Code of Conduct | `index.html` (static) |
| `#first-wives` | Partner letter | `data/letters.js` |
| `#closing` | Closing page | `data/letters.js` |

---

## CI/CD (GitHub Actions)

On every push to `main` (or merged PR):
1. **Validate** — runs `python build.py --validate`, fails if data errors exist
2. **Build** — runs `python build.py`, produces `dist/`
3. **Deploy** — publishes `dist/` to GitHub Pages

Enable Pages once: *GitHub repo → Settings → Pages → Source: GitHub Actions*.

---

## Troubleshooting

**`EVENTS must have exactly 13 entries`**  
Count your events in `data/events.js`. Each entry `{ … }` counts as one.

**Team/contestant photos not loading**  
Open the file in Google Drive → Share → *Anyone with the link → Viewer*.  
Confirm `fileId` matches the string between `/d/` and `/view` in the Drive URL.

**Map not showing in PDF**  
Chrome needs internet access when printing. The maps use OpenStreetMap's  
render API. If offline, the map area will be blank — this is expected.

**Build fails: `Could not find the main <script> block`**  
The `const SHEET_CSV` marker in `index.html` was removed or renamed.  
Check that `index.html`'s main `<script>` block still starts with that line.
