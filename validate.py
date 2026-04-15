#!/usr/bin/env python3
"""
IML Handbook — Standalone Validator
=====================================
Usage:
    python validate.py

Checks data/ section files and index.html print CSS without building.
Safe to run at any time — no files are written.

Exit codes:
    0  All checks pass (or warnings only)
    1  One or more errors found
"""

import sys
sys.exit(
    __import__('subprocess').run(
        [sys.executable, 'build.py', '--validate'],
        cwd=__file__[:__file__.rfind('/') + 1] or '.'
    ).returncode
)
