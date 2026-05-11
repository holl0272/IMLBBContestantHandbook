#!/usr/bin/env python3
"""
IMLBB Contestant Handbook — Build Script
=======================================
Usage:
    python build.py              # build to dist/
    python build.py --validate   # validate only, no output

What it does:
  1. Reads data/*.js section files in load order
  2. Inlines them into index.html's <script> block
  3. Copies logo assets to dist/
  4. Writes a self-contained dist/index.html (no external .js needed)
  5. Runs a print-page audit to catch overflow/underflow issues

Section file owners (who edits what each year):
  data/meta.js     — IMLBB_NUMBER, IMLBB_YEAR
  data/sheets.js   — Google Sheet IDs
  data/venue.js    — Hotel, map, nearby spots
  data/welcome.js  — Welcome letter
  data/letters.js  — First Wives' Club letter, closing quote
  data/events.js   — All 13 events
  data/team.js     — Handlers & Team Shine
"""

import os
import re
import shutil
import sys
from pathlib import Path

# ── Configuration ─────────────────────────────────────────────────────────────
BASE      = Path(__file__).parent
DIST      = BASE / 'dist'
SRC       = BASE / 'index.html'
DATA_DIR  = BASE / 'data'
LOGO_EXTS = ['IMLBBLogo.jpg', 'IMLBBLogo.avif', 'IMLBBLogo.png', 'IMBBLogo_white.jpg',
             'founder_chuck.jpg', 'founder_dom.jpg']

# Ordered load sequence — must match the order <script> tags appear in index.html
DATA_FILES = [
    'meta.js',
    'sheets.js',
    'venue.js',
    'welcome.js',
    'letters.js',
    'events.js',
    'imbb_judges.js',
    'judges.js',
    'tallymasters.js',
    'team.js',
]

# ── Helpers ───────────────────────────────────────────────────────────────────
ERRORS   = []
WARNINGS = []

def err(msg):
    ERRORS.append(f'[ERROR]   {msg}')

def warn(msg):
    WARNINGS.append(f'[WARNING] {msg}')

def info(msg):
    print(f'[BUILD]   {msg}')

def die(msg):
    print(f'\n[FATAL]   {msg}', file=sys.stderr)
    sys.exit(1)


# ── Validate data files ───────────────────────────────────────────────────────
def extract_scalar(name, text):
    """Pull  const NAME = VALUE;  (numbers or quoted strings)."""
    m = re.search(rf"const\s+{name}\s*=\s*(['\"])(.+?)\1", text)
    if m:
        return m.group(2)
    m = re.search(rf"const\s+{name}\s*=\s*(\d+)", text)
    if m:
        return int(m.group(1))
    return None

def count_array_items(name, text):
    """Count top-level object literals { … } in a const ARRAY = [ … ] declaration."""
    m = re.search(rf'const\s+{name}\s*=\s*\[', text)
    if not m:
        return 0
    start = m.end()
    depth = 1
    count = 0
    i = start
    in_str = False
    str_char = None
    while i < len(text) and depth > 0:
        c = text[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == str_char:
                in_str = False
        else:
            if c in ('"', "'", '`'):
                in_str = True
                str_char = c
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
            elif c == '{' and depth == 1:
                count += 1
        i += 1
    return count

def validate_data():
    """Check all required section files exist and have the right keys."""
    info('Validating data/ section files ...')

    if not DATA_DIR.exists():
        die('data/ directory not found. Run from the project root.')

    combined = ''
    for fname in DATA_FILES:
        fpath = DATA_DIR / fname
        if not fpath.exists():
            err(f'data/{fname} is missing')
        else:
            combined += fpath.read_text(encoding='utf-8') + '\n'

    if ERRORS:
        return combined  # report errors below

    # ── Scalar checks ──────────────────────────────────────────────
    for name in ('IMLBB_NUMBER', 'IMLBB_YEAR'):
        v = extract_scalar(name, combined)
        if v is None:
            err(f'{name} not found in data/meta.js')
        else:
            info(f'  {name} = {v}')

    for name in ('CONTESTANTS_SHEET_ID', 'TEAM_SHEET_ID'):
        v = extract_scalar(name, combined)
        if not v:
            err(f'{name} not found or empty in data/sheets.js')

    # ── Array length checks ────────────────────────────────────────
    letter_count = count_array_items('LETTERS', combined)
    if letter_count == 0:
        err('LETTERS array is empty in data/letters.js — add at least one letter.')
    else:
        info(f'  LETTERS = {letter_count}')

    event_count = count_array_items('EVENTS', combined)
    if event_count == 0:
        err('EVENTS array is empty in data/events.js — add at least one event.')
    else:
        info(f'  EVENTS = {event_count}')

    imbb_judge_count = count_array_items('IMBB_JUDGES', combined)
    if imbb_judge_count == 0:
        err('IMBB_JUDGES array is empty in data/imbb_judges.js — add at least one IMBB judge.')
    else:
        info(f'  IMBB_JUDGES = {imbb_judge_count}')

    judge_count = count_array_items('JUDGES', combined)
    if judge_count == 0:
        err('JUDGES array is empty in data/judges.js — add at least one judge.')
    else:
        info(f'  JUDGES = {judge_count}')

    tm_count = count_array_items('TALLYMASTERS', combined)
    if tm_count == 0:
        err('TALLYMASTERS array is empty in data/tallymasters.js — add at least one tallymaster.')
    else:
        info(f'  TALLYMASTERS = {tm_count}')

    team_count = count_array_items('TEAM_MEMBERS', combined)
    if team_count == 0:
        err('TEAM_MEMBERS is empty in data/team.js')
    else:
        info(f'  TEAM_MEMBERS = {team_count}')

    grid_cols = extract_scalar('TEAM_GRID_COLS', combined)
    if grid_cols is None:
        err('TEAM_GRID_COLS not found in data/team.js — add: const TEAM_GRID_COLS = 5;')
    elif not isinstance(grid_cols, int) or grid_cols < 1:
        err(f'TEAM_GRID_COLS must be a positive integer (got {grid_cols!r}) in data/team.js')
    else:
        rows = -(-team_count // grid_cols)  # ceiling division
        info(f'  TEAM_GRID_COLS = {grid_cols}  ->  grid will be {grid_cols} x {rows} ({grid_cols * rows} cells for {team_count} members)')

    nearby_count = count_array_items('NEARBY_SPOTS', combined)
    if nearby_count == 0:
        warn('NEARBY_SPOTS is empty in data/venue.js')
    else:
        info(f'  NEARBY_SPOTS = {nearby_count}')

    return combined


# ── Audit print page containers ────────────────────────────────────────────────
def audit_print_pages(html):
    """
    Check that every page container class used in @media print has
    both height: 11in and overflow: hidden.
    Warn (not error) on containers using only min-height.
    """
    info('Auditing print page-container CSS ...')

    # Extract @media print block(s) using brace-counting
    # (simple regex can't handle nested {} inside @media blocks)
    def extract_media_print(text):
        chunks = []
        for m in re.finditer(r'@media\s+print\s*\{', text):
            start = m.end()
            depth = 1
            i = start
            while i < len(text) and depth > 0:
                if text[i] == '{':
                    depth += 1
                elif text[i] == '}':
                    depth -= 1
                i += 1
            chunks.append(text[start:i-1])
        return '\n'.join(chunks)

    print_css = extract_media_print(html)

    # Selectors expected to be exact-height page containers
    # NOTE: #class-grid is intentionally excluded — it uses height:auto so that
    # the contestant photo grid can span multiple pages when the class grows
    # beyond 72 members (8 cols × 9 rows).  Row height is injected dynamically
    # by renderGrid() via a <style id="class-grid-print-style"> tag.
    REQUIRED_EXACT = [
        '#cover', '.page-block', '.event-block',
        '#first-wives', '#closing', '#experience',
        '.letter-page', '.coc-sub',
    ]
    ALLOWED_FLEX = ['#judges', '#tallymasters', '#imlbb-team', '#venue', '#nearby']

    for sel in REQUIRED_EXACT:
        # Collect all rule bodies for this selector (it may appear more than once)
        pattern = re.compile(
            r'(?:(?:^|\s)' + re.escape(sel) + r'\s*\{)([^}]*)\}',
            re.DOTALL | re.MULTILINE
        )
        matches = pattern.findall(print_css)
        if not matches:
            warn(f'Print CSS: no rule found for {sel}')
            continue
        rule = '\n'.join(matches)
        has_height    = bool(re.search(r'\bheight\s*:\s*11in', rule))
        has_overflow  = bool(re.search(r'\boverflow\s*:\s*hidden', rule))
        has_min_only  = bool(re.search(r'\bmin-height\s*:\s*11in', rule)) and not has_height

        if has_min_only:
            warn(f'Print CSS: {sel} uses min-height only (not height) -- pages may be variable length')
        elif not has_height:
            warn(f'Print CSS: {sel} missing height: 11in -- pages may be variable length')
        elif not has_overflow:
            warn(f'Print CSS: {sel} missing overflow: hidden -- content may bleed to next page')

    info('  Page container audit complete')


# ── Build ──────────────────────────────────────────────────────────────────────
def build(combined_data, html):
    """Inline data files into index.html and write dist/index.html."""

    # Strip individual <script src="data/..."> tags and the comment above them
    html = re.sub(
        r'\s*<!--\s*─+\s*Section data files.*?-->\s*\n'
        r'(?:\s*<script\s+src="data/[^"]+"></script>\s*\n)+',
        '\n',
        html,
        flags=re.DOTALL
    )

    # Build the inline config block
    header = (
        '/* ══ DATA — inlined by build.py ══════════════════════════════════\n'
        '   To edit, update data/*.js files and re-run: python build.py\n'
        '═══════════════════════════════════════════════════════════════ */\n'
    )
    config_block = header + combined_data + '/* ══ END DATA ══ */\n\n'

    # Find the main <script> block and insert the config before the first const
    main_script_re = re.compile(
        r'(<script>\s*)(.*?)(const SHEET_CSV)',
        re.DOTALL
    )
    if main_script_re.search(html):
        def _inject(m):
            return m.group(1) + config_block + m.group(3)
        html = main_script_re.sub(_inject, html, count=1)
        info('Inlined data/ section files into <script> block')
    else:
        die('Could not find the main <script> block in index.html to inject data')

    # Update <title>
    imlbb_number = extract_scalar('IMLBB_NUMBER', combined_data)
    imlbb_year   = extract_scalar('IMLBB_YEAR',   combined_data)
    html = re.sub(
        r'<title>.*?</title>',
        f'<title>IMLBB #{imlbb_number} // {imlbb_year} Contestant Handbook</title>',
        html
    )

    # Write output
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    # Copy logo assets
    for asset in LOGO_EXTS:
        src = BASE / asset
        if src.exists():
            shutil.copy2(src, DIST / asset)
            info(f'Copied {asset}')

    out = DIST / 'index.html'
    out.write_text(html, encoding='utf-8')
    info(f'Written -> {out}')
    return out


# ── Main ───────────────────────────────────────────────────────────────────────
validate_only = '--validate' in sys.argv

if not SRC.exists():
    die('index.html not found')

html_source = SRC.read_text(encoding='utf-8')
combined    = validate_data()

audit_print_pages(html_source)

# Print collected warnings/errors
for w in WARNINGS:
    print(w)
for e in ERRORS:
    print(e, file=sys.stderr)

if ERRORS:
    die(f'{len(ERRORS)} validation error(s) found. Fix data/ files and try again.')

if validate_only:
    print('\n[BUILD]   Validation passed OK')
    sys.exit(0)

out_path = build(combined, html_source)

print(f'\n[BUILD]   IMLBB #{extract_scalar("IMLBB_NUMBER", combined)} // '
      f'{extract_scalar("IMLBB_YEAR", combined)} built successfully')
print(f'[BUILD]   Deployable file: {out_path}')
print('[BUILD]   Open dist/index.html in Chrome, then File > Print > Save as PDF')
