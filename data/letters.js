/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SECTION: LETTERS, PARTNER LETTER & CLOSING QUOTE           ║
 * ║  Owner:   IML Communications team                           ║
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
 *                 (e.g. "letter-iml"). Used for anchor links —
 *                 update href="#letter-iml" in nav/TOC if you
 *                 change the first entry's id.
 *    eyebrow    — small uppercase label above the letter
 *                 (e.g. "A message from your International Mr. Leather 2025")
 *    paragraphs — array of strings; each becomes one <p> tag.
 *                 First paragraph is typically the salutation.
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
    id: 'letter-iml',
    eyebrow: 'A message from your International Mr. Leather 2025',
    paragraphs: [
      'To the IML 2026 Class,',

      'Welcome to International Mr. Leather. I know first-hand what it takes to get here \u2014 the work, the courage, the community that had to believe in you before you fully believed in yourself. You have earned your place in this room.',

      'This weekend will move fast. It will be exhilarating and exhausting and, at times, overwhelming. My advice: stay in the moment. Every handshake, every conversation on the floor, every second on that stage is something you will carry for the rest of your life. Do not spend it in your head.',

      'You are not competing against your classmates. You are going through something with them. When this weekend ends, the medallion goes to one of you \u2014 but the class belongs to all of you, forever.',

      'Represent your community with pride. Hold each other up. And enjoy every second of it.',
    ],
    signature: '\u2014 Rene Hebert, International Mr. Leather 2025',
  },

  /* ─── 2. Letter from the Den Daddy ─── */
  {
    id: 'letter-den-daddy',
    eyebrow: 'A message from your Den Daddy',
    paragraphs: [
      'To the IML 2026 Class,',

      'Welcome to International Mr Leather! You made it! You are here because you deserve to be here. You are about to embark on an experience that has shaped my life in ways I couldn\u2019t possibly imagine when I went through it 10 years ago. Let go of your insecurities, your fears, and embrace the experience fully. Represent yourself unapologetically, showcase your wonderful community, support each other.',

      'We often say to not look at this as you\u2019re competing against your classmates, but you are going through this experience together. Only one of you will have the golden medallion around your neck, but the relationships and connections you will make with your classmates is the real prize.',

      'You as the IML 2026 class have a unique opportunity to show the world that we can support each other, that we can be each other\u2019s cheerleaders without taking anyone or anything down, that we can be celebrated in all shapes and sizes, that we respect and value our bootblacks, and bring this positive energy back into your communities. Change is long and hard, but the hardest part is to begin, and you\u2019ve done that already.',

      'I\u2019m immensely humbled and honored to have this class as my very first class as the IML Den Daddy. Myself and my team of incredible handlers and Team Shine know what you are experiencing, and will be there to support you at every step. I want each and every one of you to have an incredibly fulfilling experience regardless of your placement, and I will do everything I can to make that happen. I hope that I make you proud.',
    ],
    signature: '\u2014 Your Den Daddy Miguel',
  },

  /* ─── 3. Letter from the IMLBB Executive Director ─── */
  {
    id: 'letter-imlbb-ed',
    eyebrow: 'A message from the IMLBB Executive Director',
    paragraphs: [
      'To the IML 2026 Class,',

      'On behalf of the International Mr. Leather/International Mr. Bear Board (IMLBB), welcome. This organisation has been the steward of this contest for over four decades, and every year we are reminded of why this work matters \u2014 when a new class of remarkable human beings walks through those doors.',

      'You represent leather communities from across the country and around the world. You carry the stories of your clubs, your cities, and the people who sent you here. That is a responsibility we do not take lightly, and neither should you.',

      'We have built this weekend to support you \u2014 from the moment you register to the moment the music plays on Finals night. Our team, our handlers, and our volunteers are here because they love this community and believe in what you are doing.',

      'Whatever happens this weekend, know that the leather community is better because you showed up. That is not a small thing.',
    ],
    signature: '\u2014 IMLBB Executive Director',
  },

  /* ─── 4. Letter from the IMBB Executive Director ─── */
  {
    id: 'letter-imbb-ed',
    eyebrow: 'A message from the IMBB Executive Director',
    paragraphs: [
      'To the IML 2026 Class,',

      'Welcome from International Mr. Bootblack. Our community and yours have been intertwined since the beginning of this contest, and we are proud to stand beside you again this year.',

      'Bootblacking is more than a craft \u2014 it is an act of service, connection, and care. The bootblacks who work this weekend bring that spirit to every chair, every brush, every shine they give. Let them take care of you. Let yourself be taken care of.',

      'As you move through this weekend, remember that the leather community is not only what happens on stage. It is the conversations in the hallway, the friendships formed over a polish rag, the quiet moments of solidarity in a room full of people who understand exactly who you are.',

      'We are proud of each of you. Good luck, and shine on.',
    ],
    signature: '\u2014 IMBB Executive Director',
  },

];


/* ─────────────────────────────────────────────────────────────
   FIRST WIVES' CLUB LETTER
   Owner: First Wives team / IML Communications
   Shown in the dedicated First Wives' Club section.
   ───────────────────────────────────────────────────────────── */
const FIRST_WIVES_LETTER = {
  intro: 'A letter to the partners, spouses, and significant others of IML 2026 contestants \u2014',

  paragraphs: [
    'Welcome. You are here because someone you love is brave enough to stand on one of leather\u2019s biggest stages and say \u201cThis is who I am.\u201d This takes the kind of courage that is only possible with the right people behind it. That means you.',

    'IML weekend can feel overwhelming from the outside. Your person will be busy, distracted, stretched thin, and running on adrenaline. There will be moments where you feel like a spectator in an event that revolves entirely around someone else. That feeling is real, and it is valid \u2014 and it is also temporary.',

    'The First Wives\u2019 Club exists because we know the weekend is only possible because of the people who show up for the contestants. So enjoy morning brunch in your space \u2014 a room full of people who understand exactly where you are sitting right now.',

    'Thank you for being here. Thank you for making this possible. The leather community honours your sacrifice, your support, and your love.',

    '\u2014 The IML Team',
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
  attribution: '\u2014 IML Community',
};


if (typeof module !== 'undefined') module.exports = { LETTERS, FIRST_WIVES_LETTER, CLOSING_QUOTE };
