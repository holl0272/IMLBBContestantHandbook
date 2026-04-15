/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SECTION: EVENTS                                         ║
 * ║  Owner:   IML Events / Logistics team                   ║
 * ║  Update:  Every year — dates, times, venues change       ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  REQUIRED: exactly 13 events (one per PDF page).
 *  Each event must have all fields below.
 *
 *  Fields:
 *    id          — unique, kebab-case, matches HTML anchor (event-01 … event-13)
 *    number      — display number string ("01" … "13")
 *    title       — short event name
 *    day         — day/period string (e.g. "Thursday Evening")
 *    time        — time or location string
 *    venue       — venue / room name
 *    badge       — "MANDATORY" or "OPTIONAL"
 *    description — one paragraph describing the event
 *    rememberText — short "Remember:" tip for contestants
 *    yourNotes   — leave blank ("") — contestants fill this in
 */

const EVENTS = [
  {
    id: 'event-01',
    number: '01',
    title: 'Registration',
    day: 'Wednesday Evening',
    time: '7:00 PM \u2013 10:00 PM',
    venue: 'Congress Plaza Hotel \u2014 Photo Room',
    badge: 'OPTIONAL',
    description: 'Pick up your IML contestant packet, which includes your badge, schedule, contestant number, and any materials prepared for you. You will have your official contestant photo taken during this time. This is also a great opportunity to meet your handlers and fellow contestants in a relaxed setting before the weekend officially begins.',
    rememberText: 'Bring a valid government-issued photo ID. Wear something that represents you \u2014 this is your first impression on your handlers and classmates.',
    yourNotes: '',
  },
  {
    id: 'event-02',
    number: '02',
    title: 'Contestant Orientation & Check-In',
    day: 'Tuesday \u2013 Wednesday',
    time: 'Ongoing',
    venue: 'Congress Plaza Hotel \u2014 Photo Room',
    badge: 'MANDATORY',
    description: 'Formal orientation session for all contestants. You will receive your complete weekend schedule, meet the IML team, and be briefed on competition rules, expectations, and logistics. Attendance is required.',
    rememberText: 'Bring your confirmation email and a valid photo ID. Arrive on time \u2014 orientation sets the tone for the entire weekend.',
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
    description: 'Your first official public appearance as an IML 2026 contestant. You will be introduced to the IML community in a cocktail-party format. Dress to impress in your finest leather.',
    rememberText: 'This is your first impression on the judges and the community. Be present, be social, be yourself.',
    yourNotes: '',
  },
  {
    id: 'event-04',
    number: '04',
    title: 'Contestant Judging \u2014 Leather',
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
    title: 'IML Vendor Fair',
    day: 'Friday',
    time: 'Exhibition Hall',
    venue: 'Exhibition Hall',
    badge: 'OPTIONAL',
    description: "One of the world's largest leather and fetish vendor fairs. Hundreds of vendors from across the globe selling leather gear, toys, art, books, and more. A great place to meet community members and support the Leather ecosystem.",
    rememberText: 'Bring your spending money. Have fun meeting community members \u2014 especially with fans and potential supporters.',
    yourNotes: '',
  },
  {
    id: 'event-06',
    number: '06',
    title: 'Contestant Interview',
    day: 'Thursday\u2013Saturday',
    time: 'Photo Room',
    venue: 'Photo Room',
    badge: 'MANDATORY',
    description: "One-on-one interview with the judging panel. This is your primary opportunity to articulate your vision for leather community service, your personal story, and why you are the right person to hold the IML title.",
    rememberText: "Prepare, but don't over-rehearse. The judges want to meet you, not a performance of you.",
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
    description: "Contestants participate in a hands-on community service project, reinforcing IML's commitment to giving back. Projects vary by year.",
    rememberText: 'Show up with energy and genuine engagement. This is an important part of the IML ethos.',
    yourNotes: '',
  },
  {
    id: 'event-08',
    number: '08',
    title: 'Contestant Judging \u2014 Uniform / Fantasy',
    day: 'Saturday',
    time: 'Main Stage',
    venue: 'Main Stage',
    badge: 'MANDATORY',
    description: 'Uniform and/or Fantasy presentation judging. Contestants are evaluated on a second look \u2014 a uniform, fantasy leather outfit, rubber, or another alternative look.',
    rememberText: 'This is your chance to show range and creativity. Be intentional about every detail of your look.',
    yourNotes: '',
  },
  {
    id: 'event-09',
    number: '09',
    title: "First Wives' Club Brunch",
    day: 'Saturday Morning',
    time: 'Congress Plaza Hotel',
    venue: 'Congress Plaza Hotel',
    badge: 'OPTIONAL',
    description: 'A beloved IML tradition \u2014 a brunch gathering for the partners, spouses, and significant others of contestants. A space for support, laughter, and community away from the competition floor.',
    rememberText: 'Your support network matters. The people who travel with you are part of your IML story. Make sure they feel included in the weekend.',
    yourNotes: '',
  },
  {
    id: 'event-10',
    number: '10',
    title: 'Play Spaces & Social Events',
    day: 'Tuesday\u2013Saturday',
    time: 'Various',
    venue: 'Various',
    badge: 'OPTIONAL',
    description: 'Throughout the weekend, IML hosts and partners with various play spaces, social mixers, and parties across the hotel and the city. Check your printed schedule for locations and times.',
    rememberText: 'Pace yourself. Have fun. Consent is mandatory at all IML events and venues.',
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
    description: 'A private dinner exclusively for contestants, handlers, and IML staff. A chance to connect, relax, and prepare for the final day together.',
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
    description: 'The culminating event of the IML weekend. Finalists are announced, the new International Mr. Leather is crowned, and the leather community celebrates its newest titleholder.',
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
    description: 'The unofficial close of IML weekend. Celebrations, parties, and gatherings across the hotel and the city. A moment to celebrate the new titleholder and reflect on an incredible weekend.',
    rememberText: 'Exchange contacts before people check out. The friendships made this weekend last a lifetime.',
    yourNotes: '',
  },
];

if (typeof module !== 'undefined') module.exports = { EVENTS };
