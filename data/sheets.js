/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SECTION: GOOGLE SHEETS                                  ║
 * ║  Owner:   IML Registration / Data team                  ║
 * ║  Update:  When registration spreadsheets change          ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  How to find the Sheet ID:
 *  Open the Google Sheet → look at the URL:
 *  docs.google.com/spreadsheets/d/SHEET_ID/edit
 *                                  ^^^^^^^^
 *  The long alphanumeric string is the Sheet ID.
 *
 *  The sheet must be published or shared with "Anyone with the link can view".
 */

// Contestants registration spreadsheet
const CONTESTANTS_SHEET_ID  = '1wPGSfDhd3Tb5a1skEeOiM0MXIbxhBzEnyzDUYkNEm6Q';
const CONTESTANTS_SHEET_TAB = 'Sheet1';   // exact tab name inside the spreadsheet

// Handlers & Team Shine form-responses spreadsheet
const TEAM_SHEET_ID  = '1BNZIcmptlW_jNNtsVXrhyJ6UFhHJLq7ysVo5IPAsZTY';
const TEAM_SHEET_TAB = 'Form Responses 1';

if (typeof module !== 'undefined') module.exports = {
  CONTESTANTS_SHEET_ID, CONTESTANTS_SHEET_TAB,
  TEAM_SHEET_ID, TEAM_SHEET_TAB,
};
