/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SECTION: IML TEAM MEMBERS (Handlers & Team Shine)          ║
 * ║  Owner:   IML Operations / Handlers coordinator             ║
 * ║  Update:  Every year — team roster changes annually         ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Each entry produces:
 *    • One cell in the "Your IMLBB Team" photo grid page
 *    • One profile card in the handler bios section
 *
 *  To add a member:   copy any entry, fill all fields, add to array.
 *  To remove a member: delete their entry from the array.
 *  To reorder members: move entries within the array.
 *    — Order in the array = order in the photo grid and bio section.
 *
 *  After any change: python validate.py && python build.py
 *
 *  ─────────────────────────────────────────────────────────────
 *  FIELDS
 *  ─────────────────────────────────────────────────────────────
 *  name     Display name shown on the photo grid and bio card.
 *
 *  role     Controls which group heading the bio card appears under.
 *           Common values:
 *             'Contestant Handler'
 *             'Team Shine'
 *             'Den Daddy'
 *             'Handler Coach'
 *           Any string is valid — new values create a new group.
 *
 *  bio      Short bio paragraph (1–3 sentences).
 *           Shown on the bio profile card.
 *           Leave as '' if the person has no bio.
 *
 *  fileId   Google Drive file ID of the headshot photo.
 *           How to get it:
 *             1. Upload the photo to Google Drive.
 *             2. Right-click → Share → "Anyone with the link" → copy link.
 *             3. The ID is the long string between /d/ and /view:
 *                drive.google.com/file/d/ >>>FILEID<<< /view
 *           Leave as '' if no photo is available — a placeholder shows instead.
 *
 *  rotate   (optional) Rotate the photo clockwise by this many degrees.
 *           Use when a photo was uploaded sideways.
 *           Valid values: 90, 180, 270  (omit or set 0 for no rotation)
 *
 *  ─────────────────────────────────────────────────────────────
 *  PHOTO GRID LAYOUT  (TEAM_GRID_COLS)
 *  ─────────────────────────────────────────────────────────────
 *  TEAM_GRID_COLS controls the number of columns in the printed
 *  photo grid page.  Rows are calculated automatically from
 *  member count:  rows = ceil(member count / TEAM_GRID_COLS)
 *
 *  The grid always fills exactly one printed page.  Choose a
 *  column count where cols × rows ≈ your total team size:
 *
 *    12 members → cols 4, rows 3  (4 × 3 = 12)
 *    15 members → cols 5, rows 3  (5 × 3 = 15)
 *    20 members → cols 5, rows 4  (5 × 4 = 20)
 *    24 members → cols 6, rows 4  (6 × 4 = 24)
 *    25 members → cols 5, rows 5  (5 × 5 = 25)
 *
 *  Tip: square-ish photos look best at 3–5 columns.
 *  Portrait photos (taller than wide) look best at 5–6 columns.
 */

const TEAM_GRID_COLS = 5;   /* columns in the printed photo grid page */

const TEAM_MEMBERS = [

  /* ── Contestant Handlers ─────────────────────────────────── */

  {
    name: 'Mark Branson',
    role: 'Contestant Handler',
    bio: 'Mark (any pronouns) was Mr. GNI Leather 2019. This is their 4th year as a handler. Their advice to you is to treasure every moment, don\u2019t be afraid to be yourself, and make sure you have the key for any and all locks.',
    fileId: '16_p0hohmsJpGCDxSnSbussTMLJpEL1MH',
  },
  {
    name: 'Pixie Mary',
    role: 'Contestant Handler',
    bio: 'This is my second year on the Handling Team. As International Ms. Olympus Leather 2017, I look forward to coating you all in magical pixie dust! Take a breath, enjoy the weekend, and embrace the experience. I can\u2019t wait to get to know you all better. I\u2019m originally from SoCal, but I now live in Paris. \u00c0 bient\u00f4t!',
    fileId: '1LR_b_6xqQwRDpPP6KMyHp0rl2tYqUA37',
  },
  {
    name: 'Dave Barnett',
    role: 'Contestant Handler',
    bio: 'With experience as both an IML contestant and a handler, I bring a grounded, people-first approach to supporting competitors. I understand the pressure of the stage and use that insight to mentor with clarity, calm, and respect.',
    fileId: '1jxE9yMGXgvFQzwBSp1tIK-1z4GMN74Yi',
  },
  {
    name: 'Robert Johnson',
    role: 'Contestant Handler',
    bio: 'Bob is Mr Los Angeles Leather 2006, a founding member of the Los Angeles Band of Brothers, founding member and first President of the Michigan Band of Brothers and a founder of The Mavericks Leather Social Club in Detroit. He\u2019s been an emcee for over 50 contests and has been a proud member of the IML Handling family since 2014.',
    fileId: '1QXVgZ4tBw0rFiBWGsbGFvOiyHQyaqYng',
  },
  {
    name: 'Jawn Marques',
    role: 'Contestant Handler',
    bio: 'I\u2019m the 1st Runner-Up at IML 42, and this is my fifth year serving as a Handler. I love this role because it allows me to support competitors who show up for our community with purpose, heart, and courage.',
    fileId: '1-aeP37GuuF3hACqYsjw45dpNU75MM-mm',
  },
  {
    name: 'Pusckatt',
    role: 'Contestant Handler',
    bio: 'From Fort Lauderdale, Florida, Pusckatt ONYX has emerged as a powerful force within the global fetish community.',
    fileId: '1YLcwCjrJ5jOKntXLRliXNCzywP2BOwi4',
  },
  {
    name: 'Richard Hubley',
    role: 'Contestant Handler',
    bio: 'Richard Hubley, Class of IML30, is Mr Leather Ottawa 2008, from Ottawa, Ontario, Canada. He has volunteered at IML every year since and has been a contestant handler for 10 years.',
    fileId: '14GPThvwxwgiXIhNgxjzrzDsJ3U4I6Eba',
  },
  {
    name: 'Thomas Seggie',
    role: 'Contestant Handler',
    bio: 'G\u2019day IML 2026 Class, Seggie here \u2014 an Aussie kinkster from Sydney currently living in London. Part of the IML 44 class, returning for a second year as a handler.',
    fileId: '1D8UBmBFl0U4xUZf8KfXrjkTCP0HJKhoN',
  },
  {
    name: 'Elimination',
    role: 'Contestant Handler',
    bio: 'Elimination Onyx is the current American Leatherman 2025, a resident of Fort Lauderdale, Florida. He has been a contestant handler for 4 years.',
    fileId: '1RAfC2GdteR2BwlmprxkZYODvcKZ9pIWy',
  },
  {
    name: 'Dragon (Ashley Scott)',
    role: 'Contestant Handler',
    bio: 'Hiya! My name is Dragon and I\u2019m an Eastern Dragon. This is my 4th year as handler. I specifically wanted to be a face for Non-binary and Trans masculine contestants.',
    fileId: '1tFIwQN7LsY_ZgyqxhCShunY83XSa0NOG',
  },
  {
    name: 'Freddie Rasheed',
    role: 'Contestant Handler',
    bio: 'Freddie Rasheed is a former Mr. Olympus Leather 2005 and Mr. Chicago Leather 2008. He has been involved in the leather community for over 25 years and has volunteered for the last 22 years at IML as a contestant handler.',
    fileId: '1dpa0gTh9mFKnpN_pDEw-m-kqg6JILBQI',
  },
  {
    name: 'Josh Fortuna',
    role: 'Contestant Handler',
    bio: 'Josh Fortuna, Mr Michigan Leather 2015, has been an IML Contestant Handler since 2016. His best advice: be your TRUE, AUTHENTIC and RAW self.',
    fileId: '1DkzkSVxi_LI24a7mv6hzk_aRpFGWOTzz',
  },
  {
    name: 'Michael Tattersall',
    role: 'Contestant Handler',
    bio: 'From Toronto \u2014 a masso-physio-personal trainer and Pro Dom. Competed in 2010 as Mr. Leather Ottawa 2010, then joined the Handler Team in 2011.',
    fileId: '1tO7C6lqS1CxV3Q-5oDZnVK6slYuwlbVM',
  },
  {
    name: 'Keron Woodrow',
    role: 'Contestant Handler',
    bio: 'Keron (Mr. Mayhem Leather 2023\u20132024) is a scientist-manager by day and a kinkster Switch by night. Part of IML Class 46, this is his first year on the Handlers Team.',
    fileId: '1YRIfbjm6VjlxQODX8WquW64xdmmrv0oa',
  },

  /* ── Team Shine ───────────────────────────────────────────── */

  {
    name: 'Leslie Anderson',
    role: 'Team Shine',
    bio: 'This is my 21st year as a handler/Captain of Team Shine.',
    fileId: '1G-Vy8IA9qlrAo-LOxO8dBgncUdWE91Jx',
  },
  {
    name: 'Briar Wood',
    role: 'Team Shine',
    bio: 'Briar (She/They/Captain) has been part of the IML universe since 2015 and joined Leslie\u2019s Team Shine in 2019. Now in her 6th year, she serves on Team Shine alongside Handlers who return year after year.',
    fileId: '1rZMvAhGrjk0Q5RTKRYTky0dOXuIuea0-',
  },
  {
    name: 'Douglas Ambrose',
    role: 'Team Shine',
    bio: 'Bootblack since 2014 and Team Shine since 2017. You focus on making yourself shine \u2014 we\u2019ve got the rest!',
    fileId: '1Qrj_unB5uCb3vI8OCANmaQpSZaNYw2p_',
    rotate: 90,   /* degrees clockwise — photo was uploaded sideways */
  },
  {
    name: 'Boi Debney',
    role: 'Team Shine',
    bio: 'Boi is a bootblack, leather boy and identifies as a switch. Dedicated to the historical aspects but obsessed with the technical, Boi has a spit shine seen \u2019round the world.',
    fileId: '1hov_sCbdiqHV0YlbHy8DIobs0jmbkjd7',
  },
  {
    name: 'Christopher Petrat',
    role: 'Team Shine',
    bio: 'Christopher Petrat (Michigan Community Bootblack 2023) comes from the Motor City \u2014 Detroit, MI. He has been an advocate for the LGBTQ+ community for 12 years.',
    fileId: '1SigUQB6lyln2csDa2m3tBR-uX4lCCecF',
  },
  {
    name: 'Andrew',
    role: 'IMBB Coordinator',
    bio: 'Andrew \u201cBootdog\u201d Johnson is International Mr. Bootblack 2008. He\u2019s been bootblacking publicly for over 25 years and produced IMBB from 2012 to 2017.',
    fileId: '19PtxLFX0b-kdrxaqqvYHpS2wgPDiMKyX',
  },

];

if (typeof module !== 'undefined') module.exports = { TEAM_MEMBERS, TEAM_GRID_COLS };
