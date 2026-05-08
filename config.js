/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         IMLBB CONTESTANT HANDBOOK  —  ANNUAL CONFIG           ║
 * ║                                                              ║
 * ║  Update ONLY this file each year.                           ║
 * ║  Do not edit index.html, src/, or style files.              ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  CHECKLIST FOR A NEW YEAR
 *  ─────────────────────────
 *  [ ] 1.  Update IML_NUMBER, IML_YEAR
 *  [ ] 2.  Update VENUE (hotel name, address, city)
 *  [ ] 3.  Update CONTESTANTS_SHEET_ID  (Google Sheet → Share → copy ID)
 *  [ ] 4.  Update TEAM_SHEET_ID         (Handler/Team Shine form responses sheet)
 *  [ ] 5.  Update WELCOME_LETTER        (from current titleholder or Den Daddy)
 *  [ ] 6.  Update FIRST_WIVES_LETTER    (partners letter)
 *  [ ] 7.  Update EVENTS                (dates, venues, times — 13 events)
 *  [ ] 8.  Update TEAM_MEMBERS          (names, roles, bios, Google Drive file IDs)
 *  [ ] 9.  Replace IMLLogo.jpg          (if logo changes)
 *  [ ] 10. Update CLOSING_QUOTE         (optional)
 */

/* ─────────────────────────────────────────────
   1.  EDITION
───────────────────────────────────────────── */
const IML_NUMBER  = 48;         // IML edition number  → "IML #48"
const IMBB_NUMBER = 34;         // IMBB edition number → "IMBB #34"
const IML_YEAR    = 2026;       // 4-digit year

/* ─────────────────────────────────────────────
   2.  VENUE
───────────────────────────────────────────── */
const VENUE = {
  name:    'The Congress Plaza Hotel',
  address: '520 S Michigan Ave',
  city:    'Chicago',
  state:   'Illinois',
  zip:     '60605',
  country: 'United States',
  // OpenStreetMap embed bbox [west, south, east, north] and marker [lat, lon]
  mapBbox:   '-87.6260,41.8700,-87.6215,41.8740',
  mapMarker: '41.8719,-87.6237',
  googleMapsUrl: 'https://maps.google.com/?q=Congress+Plaza+Hotel+520+S+Michigan+Ave+Chicago',
  // Airport transit note shown in venue section
  airportNote: 'You can travel via the subway Blue Line or via taxi. The subway route could take an hour and a taxi around 30 minutes.',
  amenitiesNote: 'The hotel has several amenities including a barbershop and restaurant. The hotel is situated next to several shops, cafes, restaurants and fast food outlets. There are several gyms nearby.',
  northTowerTip: true,   // show "request North Tower" tip?
};

/* ─────────────────────────────────────────────
   3.  GOOGLE SHEETS  (contestants)
   Get the Sheet ID from the URL:
   docs.google.com/spreadsheets/d/SHEET_ID/edit
───────────────────────────────────────────── */
const CONTESTANTS_SHEET_ID  = '1wPGSfDhd3Tb5a1skEeOiM0MXIbxhBzEnyzDUYkNEm6Q';
const CONTESTANTS_SHEET_TAB = 'Sheet1';   // tab name inside the spreadsheet

/* ─────────────────────────────────────────────
   4.  GOOGLE SHEETS  (IMLBB team / handlers)
───────────────────────────────────────────── */
const TEAM_SHEET_ID  = '1BNZIcmptlW_jNNtsVXrhyJ6UFhHJLq7ysVo5IPAsZTY';
const TEAM_SHEET_TAB = 'Form Responses 1';

/* ─────────────────────────────────────────────
   5.  WELCOME LETTER
   Shown on the opening page.
   Each string in the array becomes a <p> tag.
───────────────────────────────────────────── */
const WELCOME_LETTER = {
  eyebrow: 'A message from your International Mr. Leather 2025',
  paragraphs: [
    'To the IMLBB 2026 Class,',
    'Welcome to International Mr Leather! You made it! You are here because you deserve to be here. You are about to embark on an experience that has shaped my life in ways I couldn\u2019t possibly imagine when I went through it 10 years ago. Let go of your insecurities, your fears, and embrace the experience fully. Represent yourself unapologetically, showcase your wonderful community, support each other.',
    'We often say to not look at this as you\u2019re competing against your classmates, but you are going through this experience together. Only one of you will have the golden medallion around your neck, but the relationships and connections you will make with your classmates is the real prize.',
    'You as the IMLBB 2026 class have a unique opportunity to show the world that we can support each other, that we can be each other\u2019s cheerleaders without taking anyone or anything down, that we can be celebrated in all shapes and sizes, that we respect and value our bootblacks, and bring this positive energy back into your communities. Change is long and hard, but the hardest part is to begin, and you\u2019ve done that already.',
    'I\u2019m immensely humbled and honored to have this class as my very first class as the IMLBB Den Daddy. Myself and my team of incredible handlers and Team Shine know what you are experiencing, and will be there to support you at every step. I want each and every one of you to have an incredibly fulfilling experience regardless of your placement, and I will do everything I can to make that happen. I hope that I make you proud.',
  ],
  signature: '\u2014 Your Den Daddy Miguel',
};

/* ─────────────────────────────────────────────
   6.  FIRST WIVES' CLUB LETTER
───────────────────────────────────────────── */
const FIRST_WIVES_LETTER = {
  intro: 'A letter to the partners, spouses, and significant others of IMLBB 2026 contestants \u2014',
  paragraphs: [
    'We came. You are here because someone you love is brave enough to stand on one of leather\u2019s biggest stages and say \u201cThis is who I am.\u201d This takes the kind of courage that is only possible with the right people behind it. That means you.',
    'IMLBB weekend can feel overwhelming from the outside. Your person will be busy, distracted, stretched thin, and running on adrenaline. There will be moments where you feel like a spectator in an event that revolves entirely around someone else. That feeling is real, and it is valid \u2014 and it is also temporary.',
    'The First Wives\u2019 Club exists because we know the weekend is only possible because of the people who show up for the contestants. So enjoy morning brunch in your space \u2014 a room full of people who understand exactly where you are sitting right now.',
    'Thank you for being here. Thank you for making this possible. The leather community honours your sacrifice, your support, and your love.',
    '\u2014 The IMLBB Team',
  ],
  questions: [
    'What does your partner most need from you this weekend?',
    'How will you signal to each other if one of you needs a break?',
    'What will you do together to celebrate after Finals \u2014 regardless of outcome?',
    'What do you want to remember most about this weekend?',
  ],
};

/* ─────────────────────────────────────────────
   7.  EVENTS  (13 events)
   Fields: id, number, title, day, time,
           venue, badge (MANDATORY|OPTIONAL),
           description, rememberText, yourNotes (optional)
───────────────────────────────────────────── */
const EVENTS = [
  {
    id: 'event-01',
    number: '01',
    title: 'Registration',
    day: 'Wednesday Evening',
    time: '7:00 PM – 10:00 PM',
    venue: 'Congress Plaza Hotel — Photo Room',
    badge: 'OPTIONAL',
    description: 'Pick up your IMLBB contestant packet, which includes your badge, schedule, contestant number, and any materials prepared for you. You will have your official contestant photo taken during this time. This is also a great opportunity to meet your handlers and fellow contestants in a relaxed setting before the weekend officially begins.',
    rememberText: 'Bring a valid government-issued photo ID. Wear something that represents you — this is your first impression on your handlers and classmates.',
    yourNotes: '',
  },
  {
    id: 'event-02',
    number: '02',
    title: 'Contestant Orientation & Check-In',
    day: 'Tuesday – Wednesday',
    time: 'Ongoing',
    venue: 'Congress Plaza Hotel — Photo Room',
    badge: 'MANDATORY',
    description: 'Formal orientation session for all contestants. You will receive your complete weekend schedule, meet the IMLBB team, and be briefed on competition rules, expectations, and logistics. Attendance is required.',
    rememberText: 'Bring your confirmation email and a valid photo ID. Arrive on time — orientation sets the tone for the entire weekend.',
    yourNotes: '',
  },
  {
    id: 'event-03',
    number: '03',
    title: 'Welcome Cocktail Reception',
    day: 'Thursday Evening',
    time: 'Congress Plaza Hotel',
    venue: 'Main Stage',
    badge: 'MANDATORY',
    description: 'Your first official public appearance as an IMLBB 2026 contestant. You will be introduced to the IMLBB community in a cocktail-party format. Dress to impress in your finest leather.',
    rememberText: 'This is your first impression on the judges and the community. Be present, be social, be yourself.',
    yourNotes: '',
  },
  {
    id: 'event-04',
    number: '04',
    title: 'Contestant Judging — Leather',
    day: 'Thursday',
    time: 'Main Stage',
    venue: 'Main Stage',
    badge: 'MANDATORY',
    description: 'Leather presentation judging. Contestants are evaluated on the quality, creativity, and presentation of their leather attire. Judges score individually.',
    rememberText: 'Know your gear. Be prepared to talk about it. Confidence matters as much as the leather itself.',
    yourNotes: '',
  },
  {
    id: 'event-05',
    number: '05',
    title: 'IMLBB Vendor Fair',
    day: 'Friday',
    time: 'Exhibition Hall',
    venue: 'Exhibition Hall',
    badge: 'OPTIONAL',
    description: 'One of the world\'s largest leather and fetish vendor fairs. Hundreds of vendors from across the globe selling leather gear, toys, art, books, and more. A great place to meet community members and support the Leather ecosystem.',
    rememberText: 'Bring your spending money. Have fun meeting community members — especially with fans and potential supporters.',
    yourNotes: '',
  },
  {
    id: 'event-06',
    number: '06',
    title: 'Contestant Interview',
    day: 'Thursday–Saturday',
    time: 'Photo Room',
    venue: 'Photo Room',
    badge: 'MANDATORY',
    description: 'One-on-one interview with the judging panel. This is your primary opportunity to articulate your vision for leather community service, your personal story, and why you are the right person to hold the IMLBB title.',
    rememberText: 'Prepare, but don\'t over-rehearse. The judges want to meet you, not a performance of you.',
    yourNotes: '',
  },
  {
    id: 'event-07',
    number: '07',
    title: 'Community Service Project',
    day: 'Thursday Morning',
    time: 'Various',
    venue: 'Various',
    badge: 'OPTIONAL',
    description: 'Contestants participate in a hands-on community service project, reinforcing IMLBB\'s commitment to giving back. Projects vary by year.',
    rememberText: 'Show up with energy and genuine engagement. This is an important part of the IMLBB ethos.',
    yourNotes: '',
  },
  {
    id: 'event-08',
    number: '08',
    title: 'Contestant Judging — Uniform / Fantasy',
    day: 'Saturday',
    time: 'Main Stage',
    venue: 'Main Stage',
    badge: 'MANDATORY',
    description: 'Uniform and/or Fantasy presentation judging. Contestants present a second look to the judges — this can be a uniform, fantasy leather outfit, rubber, or another alternative look.',
    rememberText: 'This is your chance to show range and creativity. Be intentional about every detail of your look.',
    yourNotes: '',
  },
  {
    id: 'event-09',
    number: '09',
    title: 'First Wives\' Club Brunch',
    day: 'Saturday Morning',
    time: 'Congress Plaza Hotel',
    venue: 'Congress Plaza Hotel',
    badge: 'OPTIONAL',
    description: 'A beloved IMLBB tradition — a brunch gathering for the partners, spouses, and significant others of contestants. A space for support, laughter, and community away from the competition floor.',
    rememberText: 'Your support network matters. The people who travel with you are part of your IMLBB story. Make sure they feel included in the weekend.',
    yourNotes: '',
  },
  {
    id: 'event-10',
    number: '10',
    title: 'Play Spaces & Social Events',
    day: 'Tuesday–Saturday',
    time: 'Various',
    venue: 'Various',
    badge: 'OPTIONAL',
    description: 'Throughout the weekend, IMLBB hosts and partners with various play spaces, social mixers, and parties across the hotel and the city. Check your printed schedule for locations and times.',
    rememberText: 'Pace yourself. Have fun. Consent is mandatory at all IMLBB events and venues.',
    yourNotes: '',
  },
  {
    id: 'event-11',
    number: '11',
    title: 'Contestant Dinner',
    day: 'Saturday Evening',
    time: 'Private Venue',
    venue: 'Private Venue',
    badge: 'MANDATORY',
    description: 'A private dinner exclusively for contestants, handlers, and IMLBB staff. A chance to connect, relax, and prepare for the final day together.',
    rememberText: 'Be present. This is one of the last times the class will be together before Finals.',
    yourNotes: '',
  },
  {
    id: 'event-12',
    number: '12',
    title: 'Finals & Crowning Ceremony',
    day: 'Sunday',
    time: 'Main Stage',
    venue: 'Main Stage',
    badge: 'MANDATORY',
    description: 'The culminating event of the IMLBB weekend. Finalists are announced, the new International Mr. Leather is crowned, and the leather community celebrates its newest titleholder.',
    rememberText: 'Regardless of your placement, you earned your place in this class. Walk onto that stage with pride.',
    yourNotes: '',
  },
  {
    id: 'event-13',
    number: '13',
    title: 'Post-Contest Celebration',
    day: 'Sunday Night',
    time: 'Various',
    venue: 'Various',
    badge: 'OPTIONAL',
    description: 'The unofficial close of IMLBB weekend. Celebrations, parties, and gatherings across the hotel and the city. A moment to celebrate the new titleholder and reflect on an incredible weekend.',
    rememberText: 'Exchange contacts before people check out. The friendships made this weekend last a lifetime.',
    yourNotes: '',
  },
];

/* ─────────────────────────────────────────────
   8.  IMLBB TEAM MEMBERS
   "fileId" = Google Drive file ID of their photo
   (the long string from drive.google.com/file/d/FILEID/view)
   Role options: "Contestant Handler" | "Team Shine"
───────────────────────────────────────────── */
const TEAM_MEMBERS = [
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
    name: 'Leslie Anderson',
    role: 'Team Shine',
    bio: 'This is my 21st year as a handler/Captain of Team Shine.',
    fileId: '1G-Vy8IA9qlrAo-LOxO8dBgncUdWE91Jx',
  },
  {
    name: 'Dave Barnett',
    role: 'Contestant Handler',
    bio: 'With experience as both an IMLBB contestant and a handler, I bring a grounded, people-first approach to supporting competitors. I understand the pressure of the stage and use that insight to mentor with clarity, calm, and respect.',
    fileId: '1jxE9yMGXgvFQzwBSp1tIK-1z4GMN74Yi',
  },
  {
    name: 'Robert Johnson',
    role: 'Contestant Handler',
    bio: 'Bob is Mr Los Angeles Leather 2006, a founding member of the Los Angeles Band of Brothers, founding member and first President of the Michigan Band of Brothers and a founder of The Mavericks Leather Social Club in Detroit. He\u2019s been an emcee for over 50 contests and has been a proud member of the IMLBB Handling family since 2014.',
    fileId: '1QXVgZ4tBw0rFiBWGsbGFvOiyHQyaqYng',
  },
  {
    name: 'Jawn Marques',
    role: 'Contestant Handler',
    bio: 'I\u2019m the 1st Runner-Up at IMLBB 42, and this is my fifth year serving as a Handler. I love this role because it allows me to support competitors who show up for our community with purpose, heart, and courage.',
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
    bio: 'Richard Hubley, Class of IML30, is Mr Leather Ottawa 2008, from Ottawa, Ontario, Canada. He has volunteered at IMLBB every year since and has been a contestant handler for 10 years.',
    fileId: '14GPThvwxwgiXIhNgxjzrzDsJ3U4I6Eba',
  },
  {
    name: 'Thomas Seggie',
    role: 'Contestant Handler',
    bio: 'G\u2019day IMLBB 2026 Class, Seggie here \u2014 an Aussie kinkster from Sydney currently living in London. Part of the IMLBB 44 class, returning for a second year as a handler.',
    fileId: '1D8UBmBFl0U4xUZf8KfXrjkTCP0HJKhoN',
  },
  {
    name: 'Briar Wood',
    role: 'Team Shine',
    bio: 'Briar (She/They/Captain) has been part of the IMLBB universe since 2015 and joined Leslie\u2019s Team Shine in 2019. Now in her 6th year, she serves on Team Shine alongside Handlers who return year after year.',
    fileId: '1rZMvAhGrjk0Q5RTKRYTky0dOXuIuea0-',
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
    name: 'Douglas Ambrose',
    role: 'Team Shine',
    bio: 'Bootblack since 2014 and Team Shine since 2017. You focus on making yourself shine \u2014 we\u2019ve got the rest!',
    fileId: '1Qrj_unB5uCb3vI8OCANmaQpSZaNYw2p_',
  },
  {
    name: 'Boi Debney',
    role: 'Team Shine',
    bio: 'Boi is a bootblack, leather boy and identifies as a switch. Dedicated to the historical aspects but obsessed with the technical, Boi has a spit shine seen \u2019round the world.',
    fileId: '1hov_sCbdiqHV0YlbHy8DIobs0jmbkjd7',
  },
  {
    name: 'Freddie Rasheed',
    role: 'Contestant Handler',
    bio: 'Freddie Rasheed is a former Mr. Olympus Leather 2005 and Mr. Chicago Leather 2008. He has been involved in the leather community for over 25 years and has volunteered for the last 22 years at IMLBB as a contestant handler.',
    fileId: '1dpa0gTh9mFKnpN_pDEw-m-kqg6JILBQI',
  },
  {
    name: 'Josh Fortuna',
    role: 'Contestant Handler',
    bio: 'Josh Fortuna, Mr Michigan Leather 2015, has been an IMLBB Contestant Handler since 2016. His best advice: be your TRUE, AUTHENTIC and RAW self.',
    fileId: '1DkzkSVxi_LI24a7mv6hzk_aRpFGWOTzz',
  },
  {
    name: 'Michael Tattersall',
    role: 'Contestant Handler',
    bio: 'From Toronto \u2014 a masso-physio-personal trainer and Pro Dom. Competed in 2010 as Mr. Leather Ottawa 2010, then joined the Handler Team in 2011.',
    fileId: '1tO7C6lqS1CxV3Q-5oDZnVK6slYuwlbVM',
  },
  {
    name: 'Christopher Petrat',
    role: 'Team Shine',
    bio: 'Christopher Petrat (Michigan Community Bootblack 2023) comes from the Motor City \u2014 Detroit, MI. He has been an advocate for the LGBTQ+ community for 12 years.',
    fileId: '1SigUQB6lyln2csDa2m3tBR-uX4lCCecF',
  },
  {
    name: 'Keron Woodrow',
    role: 'Contestant Handler',
    bio: 'Keron (Mr. Mayhem Leather 2023\u20132024) is a scientist-manager by day and a kinkster Switch by night. Part of IMLBB Class 46, this is his first year on the Handlers Team.',
    fileId: '1YRIfbjm6VjlxQODX8WquW64xdmmrv0oa',
  },
  {
    name: 'Andrew',
    role: 'Team Shine',
    bio: 'Andrew \u201cBootdog\u201d Johnson is International Mr. Bootblack 2008. He\u2019s been bootblacking publicly for over 25 years and produced IMBB from 2012 to 2017.',
    fileId: '19PtxLFX0b-kdrxaqqvYHpS2wgPDiMKyX',
  },
];

/* ─────────────────────────────────────────────
   9.  NEARBY SPOTS
   Update if venue changes city / neighborhood.
───────────────────────────────────────────── */
const NEARBY_SPOTS = [
  { type: 'Museum',     name: 'Leather Archives & Museum' },
  { type: 'Bar',        name: 'Touché' },
  { type: 'Bar',        name: 'Jackhammer' },
  { type: 'Park',       name: 'Millennium Park' },
  { type: 'Museum',     name: 'Art Institute of Chicago' },
  { type: 'Aquarium',   name: 'Shedd Aquarium' },
  { type: 'Pier',       name: 'Navy Pier' },
  { type: 'Coffee',     name: 'Intelligentsia Coffee' },
];

/* ─────────────────────────────────────────────
   10. CLOSING QUOTE  (optional)
───────────────────────────────────────────── */
const CLOSING_QUOTE = {
  text: 'Leather is not what you wear. It is how you love \u2014 boldly, honestly, and without apology.',
  attribution: '\u2014 IMLBB Community',
};

/* ═══════════════════════════════════════════════════════════════
   DO NOT EDIT BELOW THIS LINE
   These exports make the config available to the handbook engine.
═══════════════════════════════════════════════════════════════ */
if (typeof module !== 'undefined') {
  // Node.js / build tool context
  module.exports = {
    IML_NUMBER, IML_YEAR, VENUE,
    CONTESTANTS_SHEET_ID, CONTESTANTS_SHEET_TAB,
    TEAM_SHEET_ID, TEAM_SHEET_TAB,
    WELCOME_LETTER, FIRST_WIVES_LETTER,
    EVENTS, TEAM_MEMBERS, NEARBY_SPOTS, CLOSING_QUOTE,
  };
}
