/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SECTION: EDITION META                                   ║
 * ║  Owner:   IMLBB Logistics / Communications                 ║
 * ║  Update:  First thing — drives the title, footers, etc. ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const IMLBB_NUMBER = 48;    // e.g. 48 → "IMLBB #48"
const IMLBB_YEAR   = 2026;  // 4-digit year

/**
 * PHOTOS_BASE_URL — base URL for all letter author photos.
 *
 * How it works:
 *   • If a letter's `photo` field is a full https:// URL it is used as-is.
 *   • Otherwise PHOTOS_BASE_URL is prepended to the `photo` value.
 *
 * ── Google Drive setup (recommended) ──────────────────────────────
 *  1. Upload portrait photos to a Google Drive folder.
 *     Name each file clearly, e.g.  rene-hebert.jpg
 *  2. Right-click the file → Share → "Anyone with the link" → Copy link.
 *     The share URL looks like:
 *       https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *  3. Copy just the FILE_ID portion.
 *  4. Paste that FILE_ID as the `photo` value in data/letters.js.
 *
 *  Leave PHOTOS_BASE_URL set to the Google Drive thumbnail value below.
 *  The sz parameter controls the image size served (w=width, h=height).
 *
 * ── Other hosting ─────────────────────────────────────────────────
 *  Set PHOTOS_BASE_URL to your folder URL, e.g.:
 *    'https://yoursite.com/handbook-photos/'
 *  Then use plain filenames in the `photo` field, e.g. 'miguel.jpg'.
 *
 * ── Disable ───────────────────────────────────────────────────────
 *  Set to '' and use full https:// URLs directly in each `photo` field.
 */
const PHOTOS_BASE_URL = 'https://drive.google.com/thumbnail?sz=w400-h500&id=';

if (typeof module !== 'undefined') module.exports = { IMLBB_NUMBER, IMLBB_YEAR, PHOTOS_BASE_URL };
