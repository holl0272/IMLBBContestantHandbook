/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SECTION: PARTNER LETTER & CLOSING QUOTE                 ║
 * ║  Owner:   IML Communications / First Wives team          ║
 * ║  Update:  When the letter content or quote changes       ║
 * ╚══════════════════════════════════════════════════════════╝
 */

// Letter shown in the First Wives' Club section
const FIRST_WIVES_LETTER = {
  intro: 'A letter to the partners, spouses, and significant others of IML 2026 contestants \u2014',

  paragraphs: [
    'We came. You are here because someone you love is brave enough to stand on one of leather\u2019s biggest stages and say \u201cThis is who I am.\u201d This takes the kind of courage that is only possible with the right people behind it. That means you.',

    'IML weekend can feel overwhelming from the outside. Your person will be busy, distracted, stretched thin, and running on adrenaline. There will be moments where you feel like a spectator in an event that revolves entirely around someone else. That feeling is real, and it is valid \u2014 and it is also temporary.',

    'The First Wives\u2019 Club exists because we know the weekend is only possible because of the people who show up for the contestants. So enjoy morning brunch in your space \u2014 a room full of people who understand exactly where you are sitting right now.',

    'Thank you for being here. Thank you for making this possible. The leather community honours your sacrifice, your support, and your love.',

    '\u2014 The IML Team',
  ],

  // Discussion prompts shown in the sidebar
  questions: [
    'What does your partner most need from you this weekend?',
    'How will you signal to each other if one of you needs a break?',
    'What will you do together to celebrate after Finals \u2014 regardless of outcome?',
    'What do you want to remember most about this weekend?',
  ],
};

// Quote displayed on the closing page
const CLOSING_QUOTE = {
  text:        'Leather is not what you wear. It is how you love \u2014 boldly, honestly, and without apology.',
  attribution: '\u2014 IML Community',
};

if (typeof module !== 'undefined') module.exports = { FIRST_WIVES_LETTER, CLOSING_QUOTE };
