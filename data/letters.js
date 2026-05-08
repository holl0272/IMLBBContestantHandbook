/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SECTION: LETTERS, PARTNER LETTER & CLOSING QUOTE           ║
 * ║  Owner:   IMLBB Communications team                           ║
 * ║  Update:  Every year — new titleholder, new leadership       ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  LETTERS array
 *  ─────────────────────────────────────────────────────────────
 *  Each entry produces one full-page letter in the handbook,
 *  printed in the order listed here.
 *
 *  Fields:
 *    id         — unique string, used as the HTML section id
 *                 (e.g. "letter-imlbb"). Used for anchor links —
 *                 update href="#letter-imlbb" in nav/TOC if you
 *                 change the first entry's id.
 *    photo      — Google Drive file ID of the author's portrait photo.
 *                 Copy the ID from the share link: drive.google.com/file/d/FILE_ID/view
 *                 PHOTOS_BASE_URL in data/meta.js is prepended automatically.
 *                 Leave as '' to show a placeholder box (same fixed size).
 *                 Full https:// URLs are also accepted and used as-is.
 *    title      — Author's name or role shown large next to the photo.
 *                 Leave as '' to show no title line (eyebrow only).
 *    eyebrow    — small uppercase label shown above the title
 *                 (e.g. "A message from your International Mr. Leather 2025")
 *    paragraphs — array of strings; each becomes one <p> tag.
 *                 First paragraph is typically the salutation.
 *                 HTML entities (&#39; &amp; etc.) are allowed.
 *    signature  — sign-off line shown in italic below the body
 *
 *  ADDING A LETTER
 *  ─────────────────────────────────────────────────────────────
 *  1. Copy an existing entry block as a template.
 *  2. Give it a new unique id (e.g. "letter-president").
 *  3. Fill in eyebrow, paragraphs, and signature.
 *  4. Add it to the LETTERS array in the desired print order.
 *  5. Run: python validate.py && python build.py
 *
 *  REMOVING A LETTER
 *  Delete its entry from the array and rebuild.
 *
 *  REORDERING LETTERS
 *  Move entries within the array — order = print order.
 *
 *  Use \u2014 for em-dash (—) and \u2019 for right single quote (').
 */

const LETTERS = [

  /* ─── 1. Letter from the current International Mr. Leather ─── */
  {
    id: 'letter-imlbb',
    photo: 'https://drive.google.com/file/d/1TmIULjaDsSk4hW8qxgCQlvCrJuJ_rBeC/view?usp=drive_link',
    title: 'Rene Hebert',
    eyebrow: 'A message from your International Mr. Leather 2025',
    paragraphs: [
      'To the IMLBB class of 2026:',

      'You&#39;ve written your speeches, you&#39;ve planned out what you&#39;re wearing,you&#39;ve curated your applications. You&#39;ve gone over every detail over, and over, and over. And now... you&#39;re here. Regardless of how this weekend pans out, you&#39;re already part of eclectic family we call the IML and IMBB brotherhood. So with that said, I want you to really hear me when I tell you that you belong here, every single one of you. Each of you has a story to tell, and it&#39;s worth sharing. So I implore you, as you move through this weekend, don&#39;t worry about who you “should” be while you&#39;re here. All of us are unpolished in our own ways. One of the great joys of weekends like this is we get to embrace ourselves exactly as we are, and showcase ourselves publicly and authentically. Allow me a bootblacking analogy. When a bootblack is brought a pair of boots that have dings, scratches, and marks... the goal is not to try and cover up every imperfection to mask that they were ever there. It&#39;s to embrace those imperfections as part of the boot&#39;s history and not have it shine despite it, but because of it. Those dings, scuffs, and “imperfections” are what make those boots special, unique, and lived in. So please... don&#39;t show us what you think we want to see. Show us you as you are, authentically and unashamed, and allow yourselves to really shine. At the end of this marathon (and it IS a marathon, make sure you rest and drink your water. And no, coffee and energy drinks alone won&#39;t cut it), only one of you will walk away with each the IML and IMBB titles. But as far as I&#39;m concerned, all of you are winners just by being here. Welcome to the family, I can&#39;t wait to meet you.\n      With love,\n      Rene Hebert\n      International Mr. Leather 2025',
    ],
    signature: '\u2014 Rene Hebert, International Mr. Leather 2025',
  },

  /* ─── 2. Letter from the Den Daddy ─── */
  {
    id: 'letter-den-daddy',
    photo: 'https://drive.google.com/file/d/1HUnMazEVrBcb56m6AQ-YkgkeF74PoXoF/view?usp=drive_link',   // paste Google Drive file ID here once uploaded
    title: 'Miguel Torres',
    eyebrow: 'A message from your Den Daddy',
    paragraphs: [
      'To the IMLBB 2026 Class,',

      'Welcome to International Mr Leather! You made it! You are here because you deserve to be here. You are about to embark on an experience that has shaped my life in ways I couldn\u2019t possibly imagine when I went through it 10 years ago. Let go of your insecurities, your fears, and embrace the experience fully. Represent yourself unapologetically, showcase your wonderful community, support each other.',

      'We often say to not look at this as you\u2019re competing against your classmates, but you are going through this experience together. Only one of you will have the golden medallion around your neck, but the relationships and connections you will make with your classmates is the real prize.',

      'You as the IMLBB 2026 class have a unique opportunity to show the world that we can support each other, that we can be each other\u2019s cheerleaders without taking anyone or anything down, that we can be celebrated in all shapes and sizes, that we respect and value our bootblacks, and bring this positive energy back into your communities. Change is long and hard, but the hardest part is to begin, and you\u2019ve done that already.',

      'I\u2019m immensely humbled and honored to have this class as my very first class as the IMLBB Den Daddy. Myself and my team of incredible handlers and Team Shine know what you are experiencing, and will be there to support you at every step. I want each and every one of you to have an incredibly fulfilling experience regardless of your placement, and I will do everything I can to make that happen. I hope that I make you proud.',
    ],
    signature: '\u2014 Your Den Daddy Miguel',
  },

  /* ─── 3. Letter from the IMLBB Executive Director ─── */
  {
    id: 'letter-imlbb-ed',
    photo: '',
    title: 'David',
    eyebrow: 'A message from the IMLBB Executive Director',
    paragraphs: [
      'To the IMLBB 2026 Class,',

      'A message from David will go here',
    ],
    signature: '\u2014 IMLBB Executive Director',
  },

  /* ─── 4. Letter from the IMBB Executive Director ─── */
  {
    id: 'letter-imbb-ed',
    photo: '',
    title: 'Becky',
    eyebrow: 'A message from the IMBB Executive Director',
    paragraphs: [
      'To the IMLBB 2026 Class,',

      'A message from Becky will go here.',
    ],
    signature: '\u2014 IMBB Executive Director',
  },

];


/* ─────────────────────────────────────────────────────────────
   FIRST WIVES' CLUB LETTER
   Owner: First Wives team / IMLBB Communications
   Shown in the dedicated First Wives' Club section.
   ───────────────────────────────────────────────────────────── */
const FIRST_WIVES_LETTER = {
  intro: 'A letter to the partners, spouses, and significant others of IMLBB 2026 contestants \u2014',

  paragraphs: [
    'Welcome. You are here because someone you love is brave enough to stand on one of leather\u2019s biggest stages and say \u201cThis is who I am.\u201d This takes the kind of courage that is only possible with the right people behind it. That means you.',

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


/* ─────────────────────────────────────────────────────────────
   CLOSING QUOTE
   Shown on the final page of the handbook.
   ───────────────────────────────────────────────────────────── */
const CLOSING_QUOTE = {
  text:        'Leather is not what you wear. It is how you love \u2014 boldly, honestly, and without apology.',
  attribution: '\u2014 IMLBB Community',
};


if (typeof module !== 'undefined') module.exports = { LETTERS, FIRST_WIVES_LETTER, CLOSING_QUOTE };
