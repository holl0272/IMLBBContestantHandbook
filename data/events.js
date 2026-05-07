/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SECTION: EVENTS                                             ║
 * ║  Owner:   IMLBB Events / Logistics team                        ║
 * ║  Update:  Every year — dates, times, venues change           ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Each entry produces:
 *    • One card in the Section 6 experience overview grid
 *    • One full-page detail block in the Section 7 events section
 *
 *  To add an event: copy any entry, give it a new id, fill all
 *  fields, add to the array.  No HTML changes needed.
 *
 *  To remove an event: delete its entry from the array.
 *
 *  To reorder events: move entries within the array.
 *
 *  After any change: python validate.py && python build.py
 *
 *  ─────────────────────────────────────────────────────────────
 *  TOP-LEVEL FIELDS
 *  ─────────────────────────────────────────────────────────────
 *  id          Unique anchor id ("event-1" … "event-N").
 *              Used as href in nav, TOC, and overview cards.
 *  number      Zero-padded display number: "01" … "16"
 *  title       Short event name shown in the card and page header
 *  cardMeta    One-line summary shown in the overview card
 *              (e.g. "Friday · Main Stage")
 *  day         Day / period shown in the detail page header
 *  time        Time range shown in the detail page header
 *              (e.g. "7:00 PM – 10:00 PM")
 *  callTime    Override the auto-computed call time shown in the detail header.
 *              Leave as '' to auto-compute (always 30 min before `time` start).
 *              Set to any string to display it verbatim, e.g. 'See your handler'
 *              or '10:00 AM'. Set to 'NONE' to suppress the call-time row entirely.
 *  venue       Venue / room shown in the detail page header
 *  badge       "OPTIONAL" or "MANDATORY"
 *  contest     Which contest this event applies to:
 *                "IML"  — International Mr. Leather contestants only
 *                "IMBB" — International Mr. Bootblack contestants only
 *                "BOTH" — all contestants (shown as IML + IMBB tags)
 *              Change this field each year if the programme changes.
 *
 *  COLUMN CONTENT
 *  ─────────────────────────────────────────────────────────────
 *  leftCol     Array   Sections rendered in the left column
 *  rightCol    Array   Sections rendered in the right column
 *
 *  Each section is an object with a "type" field plus type-specific fields:
 *
 *  { type: 'qa', q: 'Question?', a: 'Answer text.' }
 *    → A bold question label followed by a paragraph answer.
 *
 *  { type: 'checklist', q: 'Question?', items: ['item 1', 'item 2'], note: 'Optional note.' }
 *    → A bold question label, a bullet list, and an optional italic note.
 *    → Omit `note` (or set to '') if not needed.
 *
 *  { type: 'callout', label: 'Remember', text: 'Tip text.' }
 *    → A dark callout box. Use label "Remember" or "Good to know".
 *
 *  { type: 'tip', text: 'Tip text.' }
 *    → A blue "Top Tip" callout box.
 *
 *  { type: 'textarea', q: 'Your prep notes', placeholder: 'Hint text…', rows: 3 }
 *    → A labelled textarea for contestant notes.
 *    → `rows` is optional; defaults to 3.
 *
 *  ADDING A NEW EVENT
 *  ─────────────────────────────────────────────────────────────
 *  1. Copy an existing event object below as a template.
 *  2. Assign the next id ("event-17"), number ("17"), and fill all fields.
 *  3. Run: python validate.py   — to confirm everything passes.
 *
 *  NOTE: The build system only checks that at least one event exists.
 *  You may add or remove events freely — no count needs updating in build.py.
 */

const EVENTS = [

  /* ─── 01 · Wednesday ─── */
  {
    id: 'event-1',
    number: '01',
    title: 'Contestant Registration',
    cardMeta: 'Wednesday · Florentine Room',
    day: 'Wednesday',
    time: '7:00 PM \u2013 10:00 PM',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel \u2014 Florentine Room',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What is it?',
        a: 'By attending this event, you can confirm registration and technical details, complete all of the necessary paperwork and schedule your official IMLBB photo shoot prior to Thursday\u2019s Orientation. Upon arrival, a Contestant Handler will assist you in confirming your application information used in making your contestant badge, the contest program insert, and contestant address list.',
      },
      {
        type: 'qa',
        q: 'What\u2019s it like?',
        a: 'This gives you your first taste of IMLBB in a casual and relaxed atmosphere. You can meet the IMLBB team, other contestants and your handlers for the competition. It also ensures you are all set for the coming days.',
      },
      {
        type: 'qa',
        q: 'Is it judged?',
        a: 'This event isn\u2019t judged. However, please note you must be fully registered by 12:00 noon the following day if you do not attend this event.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'What should I wear or bring?',
        items: [
          'At least one piece of legal photo ID (driver\u2019s licence, passport)',
          'Any information needed for changes to your application',
          'Your Chicago contact details \u2014 hotel name and room number',
        ],
        note: 'Feel free to dress casually for this event.',
      },
      {
        type: 'qa',
        q: 'How long will it be?',
        a: 'Confirming your details should take no more than a few minutes \u2014 come in anytime from 7\u201310pm.',
      },
      {
        type: 'qa',
        q: 'Can my partner attend?',
        a: 'Yes!',
      },
      {
        type: 'callout',
        label: 'Good to know',
        text: 'If you can\u2019t attend this event, you will have the option to confirm your details at the start of Orientation the following day.',
      },
    ],
  },

  /* ─── 02 · Thursday ─── */
  {
    id: 'event-2',
    number: '02',
    title: 'Contestant Orientation',
    cardMeta: 'Thursday · Florentine Room',
    day: 'Thursday',
    time: '12:00 PM \u2013 3:00 PM',
    callTime: '',
    venue: 'Congress Plaza Hotel \u2014 Florentine Room',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'This is the first time all contestants will officially gather along with the handlers, judges and the rest of the IML team. It is an incredibly important and powerful experience that will set you up for success for the rest of the week. You will be introduced to each judge and various IMLBB staff members and your Contestant Handlers. You will meet the IMLBB photographer and make a photo shoot appointment with him.',
      },
      {
        type: 'qa',
        q: 'Is it judged?',
        a: 'This event isn\u2019t judged. However, the judges will be present during portions of this event.',
      },
      {
        type: 'checklist',
        q: 'What to bring',
        items: [
          'Government-issued photo ID',
          'Completed contestant forms (if not already submitted)',
          'Comfortable leather (clean, polished, ready)',
          'Any medical information your team should know',
        ],
        note: '',
      },

    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 4,
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'This is your first impression on the IMLBB team and on your fellow contestants. Arrive on time, be present, and introduce yourself warmly.',
      },
      {
        type: 'tip',
        text: 'Learn your handler\u2019s name and their number immediately. They are your lifeline for the entire weekend.',
      },
    ],
  },

  /* ─── 03 · Thursday & Friday ─── */
  {
    id: 'event-3',
    number: '03',
    title: 'Poster Signing',
    cardMeta: 'Thursday and Friday',
    day: 'Thursday and Friday',
    time: 'Various',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel - Victorian and Columbus',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'All contestants are asked to sign IMLBB 2026 commemorative posters, and will receive one on Monday',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'There are over 150 posters to sign. Don\u2019t rush. This is a moment to connect with the history of the contest and the community. Sign with care and intention.',
      },
    ],
    rightCol: [
      {
        type: 'tip',
        text: 'Pick a spot on the poster and stick with it.',
      },
    ],
  },

  /* ─── 04 · Thursday Evening ─── */
  {
    id: 'event-4',
    number: '04',
    title: 'Opening Ceremonies',
    cardMeta: 'Thursday · Florentine Room',
    day: 'Thursday',
    time: '7:00 PM \u2013 09:00 PM',
    callTime: '5:00 PM',
    venue: 'Congress Plaza Hotel \u2014 Florentine Room',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The Opening Ceremony is the first public event of IMLBB. The purpose of this event is to introduce the judges and the contestants to the public. During the Opening Ceremonies you will be lined up alphabetically by country or US state, you will be introduced and then you will select your contestant number for IMBB and IML.',
      },
      {
        type: 'checklist',
        q: 'What to wear',
        items: [
          'Leather or uniform gear \u2014 this is a leather event',
          'Contestant badge / sash if provided',
          'Comfortable footwear (you\u2019ll be on your feet)',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Judges are observing from the moment they see you. Be genuine, gracious, and present.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'Talking points to prepare',
        items: [
          'Your title and home community',
          'Why IMLBB matters to you personally',
          'One thing you hope to learn this weekend',
        ],
        note: '',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Learn two or three other contestants\u2019 names before the night is over. The camaraderie you build here lasts a lifetime.',
      },
    ],
  },

  /* ─── 05 · Thursday Evening (late) ─── */
  {
    id: 'event-5',
    number: '05',
    title: 'First Shine @ Spit Shine',
    cardMeta: 'Thursday Evening',
    day: 'Thursday Evening',
    time: '10:00 PM \u2013 11:00 PM',
    callTime: '9:30 PM',
    venue: 'Congress Plaza Hotel',
    badge: 'MANDATORY',
    contest: 'IMBB',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The First Shine is a traditional official bootblacking event held Thursday evening at the Spit Shine social, immediately following the Last Shine of the outgoing titleholder. This is your first opportunity to demonstrate your craft in competition and sets the tone for your stand work throughout the weekend.',
      },
      {
        type: 'qa',
        q: 'How is it scored?',
        a: 'The First Shine is judged as part of your overall Bootblack Stand Time score. Judges evaluate three key areas: your skill in the craft, the quality of your client interaction, and your demonstrated passion for bootblacking.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Your score here contributes directly to your Stand Time total. Arrive focused and treat this shine with the same care and intentionality you would bring to any judged stand.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'What to wear',
        items: [
          'Wear what you would normally wear to work a stand',
          'No specific attire requirement \u2014 dress for function and confidence',
        ],
        note: '',
      },
      {
        type: 'qa',
        q: 'Will I have support?',
        a: 'Yes. Staff will guide you from the assembly area to and from the stands, and a staff member will be present for the duration of your shine.',
      },
      {
        type: 'qa',
        q: 'When will I know my assembly time and location?',
        a: 'Specific assembly times and locations are provided during Thursday Orientation.',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
    ],
  },

  /* ─── 06 · Friday & Saturday ─── */
  {
    id: 'event-6',
    number: '06',
    title: 'Contestant Interviews',
    cardMeta: 'Friday and Saturday',
    day: 'Friday and Saturday',
    time: 'Main Stage',
    callTime: '',
    venue: 'Congress Plaza Hotel - Judges Room',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The first stage of judging. Each contestant has a 8-minute private interview with a panel of judges. You will be asked about your leather background, your community involvement, and your vision for the IMLBB title. This is your chance to show the judges who you are beyond the stage.',
      },
      {
        type: 'checklist',
        q: 'Scoring criteria',
        items: [
          'Quality and condition of leather gear',
          'Stage presence and confidence',
          'Overall presentation and grooming',
          'How authentically you embody the leather aesthetic',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'The judges want to see you \u2014 your authentic leather self. Don\u2019t perform; inhabit.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'Gear checklist',
        items: [
          'Leather polished and conditioned',
          'All hardware shined',
          'Boots \u2014 spit-polished or mirror-finish',
          'Sash / title badge secured',
          'Backup boot laces / snap repair kit',
        ],
        note: '',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Practice your walk. Find your pace. Slow is confident. Rushed is nervous.',
      },
    ],
  },

  /* ─── 07 · Friday & Saturday ─── */
  {
    id: 'event-7',
    number: '07',
    title: 'Bootblack Stand Time',
    cardMeta: 'Friday & Saturday',
    day: 'Friday & Saturday',
    time: '12:00 PM \u2013 4:00 PM',
    callTime: '',
    venue: '',
    badge: 'MANDATORY',
    contest: 'IMBB',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Contestants work the bootblacking stands for several hours on both Friday and Saturday, with the majority of stand time on Saturday. This is the core judged craft event of the IMBB competition \u2014 your longest sustained opportunity to demonstrate skill, client care, and authentic passion for bootblacking.',
      },
      {
        type: 'checklist',
        q: 'Judging criteria',
        items: [
          'Bootblacking skill and technique',
          'Quality of client interaction',
          'Passion and engagement demonstrated throughout',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Stand Time is where contests are won. Every shine counts \u2014 whether judges are watching or not. Be consistent, be present, and let your love for the craft show in every interaction.',
      },
    ],
    rightCol: [
      {
        type: 'qa',
        q: 'What should I wear?',
        a: 'There is no mandatory dress code. Wear what you would normally use when working a stand professionally \u2014 choose whatever lets you work freely and represent yourself well.',
      },
      {
        type: 'qa',
        q: 'When will I know my schedule?',
        a: 'Exact stand hours are communicated at least two weeks in advance. Specific assembly times and locations are also confirmed during Thursday Orientation.',
      },
      {
        type: 'qa',
        q: 'Will I have support?',
        a: 'Staff will guide you from assembly areas to and from the stands. A staff member remains present for the full duration of your stand time.',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Pace yourself across Friday and Saturday. Rest between sessions, stay hydrated, and keep your kit organised. A tired bootblack is a distracted one.',
      },
    ],
  },

  /* ─── 08 · All Weekend ─── */
  {
    id: 'event-8',
    number: '08',
    title: 'IMLBB Photoshoot',
    cardMeta: 'Needs to be scheduled',
    day: 'all weekend',
    time: 'Congress Plaza Hotel',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Each contestant has a 15-minute private photoshoot with the official IMLBB photographer. This is your chance to create the iconic images that will represent your IMLBB journey for years to come. You can choose to shoot in leather, uniform, or fantasy gear \u2014 whatever best represents your personal leather identity.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'These photos are part of your IMLBB legacy. Approach this shoot with the same care and intentionality as you would a major professional photoshoot. Communicate clearly with the photographer about your vision.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Bring any specific gear or accessories you want to be included in your photoshoot. This is your moment to shine \u2014 make sure you have everything you need to look and feel your best.',
      },
    ],
  },

  /* ─── 09 · Friday Evening ─── */
  {
    id: 'event-9',
    number: '09',
    title: 'Physique and Stage Presence',
    cardMeta: 'Friday · The Riviera Theater',
    day: 'Friday',
    time: '8:00 PM \u2013 11:00 PM',
    callTime: '5:00 PM',
    venue: 'The Riviera Theater',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'A public stage event scored on your physique, stage presence, and public speaking ability. All contestants appear three times: first walking on stage in numerical order and holding position until everyone is assembled; second entering by preliminary judging group with freedom of movement while being introduced from your contestant profile; and third returning to the stage as a full group to close the event.',
      },
      {
        type: 'checklist',
        q: 'What to wear',
        items: [
          'Wear whatever shows your physique to its full advantage',
          'Choose something you feel comfortable and confident in',
          'You may change attire up to three times \u2014 changes are optional',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'This event is open to the public. The audience sees everything \u2014 how you carry yourself between appearances matters as much as your time centre-stage.',
      },
    ],
    rightCol: [
      {
        type: 'qa',
        q: 'How is it judged?',
        a: 'Performance is scored on physique, stage presence, and public speaking ability according to the published IML scoring system.',
      },
      {
        type: 'qa',
        q: 'Will I have support?',
        a: 'Yes. Staff will guide you to the event, assist with preparation before each stage appearance, and be available as you exit.',
      },
      {
        type: 'qa',
        q: 'When will I know my assembly time and location?',
        a: 'Specific assembly time and location are provided at Thursday Orientation.',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Outfit ideas, stage walk notes, talking points\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Rehearse your walk for each of the three appearances separately \u2014 the energy and purpose of each is different. First is composed arrival; second is confident presence under introduction; third is a triumphant return.',
      },
    ],
  },

  /* ─── 10 · Saturday ─── */
  {
    id: 'event-10',
    number: '10',
    title: 'Educational Presentation',
    cardMeta: 'Saturday',
    day: 'Saturday',
    time: '',
    callTime: '',
    venue: '',
    badge: 'MANDATORY',
    contest: 'IMBB',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'You deliver a fifteen-minute educational presentation on any bootblacking skill of your choosing, open to the public. This is followed by up to five minutes of questions from judges and audience members. Setup takes five minutes before your slot; teardown takes five minutes after.',
      },
      {
        type: 'qa',
        q: 'How is it judged?',
        a: 'Judges evaluate your confidence and ability to convey information clearly to an audience, as well as your ability to engage the audience and handle questions thoughtfully.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Choose a topic you know deeply \u2014 your confidence will show. The judges are not just assessing what you know, they are assessing how well you teach it.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'What to prepare',
        items: [
          'A focused 15-minute presentation on a bootblacking skill of your choice',
          'Any materials, tools, or props you need \u2014 no AV equipment is provided',
          'Prepare for up to 5 minutes of questions from judges and the audience',
          'Allow 5 minutes before and after for setup and teardown',
        ],
        note: '',
      },
      {
        type: 'qa',
        q: 'What should I wear?',
        a: 'There is no attire requirement. Choose something you feel comfortable and confident in for a public presentation.',
      },
      {
        type: 'qa',
        q: 'When will I know my slot time and location?',
        a: 'Specific assembly times and locations are provided during Thursday Orientation.',
      },
      {
        type: 'textarea',
        q: 'Presentation topic \u2014 your notes',
        placeholder: 'What skill will you present? Key points, structure, materials needed\u2026',
        rows: 4,
      },
      {
        type: 'tip',
        text: 'Practise your presentation out loud at full length before the weekend. Fifteen minutes feels long in rehearsal and short on stage \u2014 know your pacing.',
      },
    ],
  },

  /* ─── 11 · Sunday Evening ─── */
  {
    id: 'event-11',
    number: '11',
    title: 'IMLBB Contest Finals',
    cardMeta: 'Sunday · The Riviera Theater',
    day: 'Sunday',
    time: '6:00 PM \u2013 09:00 PM',
    callTime: '12:00 PM',
    venue: 'The Riviera Theater',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Every contestant participates in individual introductions and is on stage for the finalist announcement. Contestants announced as finalists then continue with three additional scored rounds: Leather Image, a 90-second speech on a topic of their choice, and a physique round. No preliminary scores are carried forward \u2014 all finalists are judged fresh, three times during the contest.',
      },
      {
        type: 'checklist',
        q: 'What all contestants do',
        items: [,
          'Individual introduction \u2014 leather attire including sash, medal, or title vest recommended',
          'Finalist announcement \u2014 remain on stage in leather',
          'Top 20 finalists for IML and top 3 finalists for IMBB are announced on stage',
        ],
        note: '',
      },
      {
        type: 'checklist',
        q: 'Finalists additionally',
        items: [
          'Leather Image round \u2014 immediately after finalist announcement',
          '90-second speech on a topic of your choice \u2014 wear what represents your message',
          'Physique round \u2014 erotic wear, jock, shorts, etc.',
          'Winners announcement \u2014 leather recommended for press and photography',
        ],
        note: 'A digital countdown timer is visible on stage. The microphone cuts off automatically at 91 seconds.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Bring all planned gear and clothing at Call time \u2014 you will not return to your room until late Sunday evening. Pack everything you might need for the full day.',
      },
    ],
    rightCol: [
      {
        type: 'qa',
        q: 'What should I prepare if I become a finalist?',
        a: 'Prepare a 90-second speech on any topic that matters to you. Time yourself \u2014 the mic cuts at 91 seconds. Non-English speakers receive an additional 90 seconds for interpreter translation. No personal assistants are permitted on stage, but translators and interpreters are allowed.',
      },
      {
        type: 'qa',
        q: 'What are the venue logistics?',
        a: 'Dressing rooms will be on custom shipping containers right outside the stage door. Contact your Den Daddy before the event if you need accessibility accommodations. A Meal and water will be provided backstage \u2014 you are encouraged to bring additional food, beverages, and any medications.',
      },
      {
        type: 'qa',
        q: 'What if I am not announced as a finalist?',
        a: 'Non-finalists have a premium reserved seating area and may sit elsewhere if preferred. Transportation back to the hotel is provided for all contestants after the contest; winners are transported separately.',
      },
      {
        type: 'textarea',
        q: 'Speech prep \u2014 your notes',
        placeholder: 'Topic, key points, opening line, closing line\u2026',
        rows: 4,
      },
      {
        type: 'tip',
        text: 'A full contest rehearsal at the theater will walk you through stage placements and each appearance. Use it. Know where you are standing before the night begins.',
      },
    ],
  },

  /* ─── 12 · Sunday Night ─── */
  {
    id: 'event-12',
    number: '12',
    title: 'The Victory Party',
    cardMeta: 'Sunday Evening · House of Blues',
    day: 'Sunday Evening',
    time: '9:00 PM \u2013 4:00 AM',
    callTime: 'NONE',
    venue: 'House of Blues Chicago \u2014 329 N. Dearborn Street',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The official IML closing night party \u2014 bigger, darker, and hotter than ever. Come early, stay late. DJs Alejandro Alvarez and Shane Stiel spin through the night. Proceeds benefit the Leather Archives & Museum.',
      },
      {
        type: 'checklist',
        q: 'Good to know',
        items: [
          'Clothes check available',
          'Proceeds go directly to the Leather Archives \u0026 Museum',
          'DJs: Alejandro Alvarez and Shane Stiel',
        ],
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'This is your night to celebrate \u2014 come early, stay late, and enjoy the community you just spent the weekend representing.',
      },
    ],
    rightCol: [
      {
        type: 'callout',
        label: 'TOP Tip',
        text: 'Contestants and their partners will have a reserved VIP balcony area',
      },
    ],
  },

  /* ─── 13 · Monday ─── */
  {
    id: 'event-13',
    number: '13',
    title: 'Contestant Scores & Poster Pickup',
    cardMeta: 'Monday Morning',
    day: 'Monday',
    time: '10:00 AM \u2013 01:00 PM',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The second stage judging event. You may appear in uniform (military, police, fire, or other), fetish gear, or fantasy leather. This category celebrates the full breadth of leather and kink expression. You have more creative freedom here \u2014 use it.',
      },
      {
        type: 'checklist',
        q: 'Outfit checklist',
        items: [
          'Outfit chosen and fitted in advance',
          'All pieces clean and pressed / polished',
          'Footwear appropriate and secured',
          'Any props or accessories tested',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Fantasy does not mean costume. Whatever you wear, commit to it with full conviction. Authenticity reads from the back row.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Describe your outfit concept\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Rehearse how you\u2019ll walk in this outfit specifically. Uniform boots walk differently than leather boots. Know your gear.',
      },
    ],
  },

  /* ─── 14 · Monday ─── */
  {
    id: 'event-14',
    number: '14',
    title: 'Contestant Speeches',
    cardMeta: 'Monday · Congress Plaza Hotel',
    day: 'Monday',
    time: '10:00 AM \u2013 01:00 PM',
    callTime: '',
    venue: 'Congress Plaza Hotel',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'A beloved IMLBB tradition \u2014 a brunch gathering for the partners, spouses, and significant others of contestants. A space for support, laughter, and community away from the competition floor. See the dedicated section of this handbook for full details.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Your support network matters. The people who travel with you are part of your IMLBB story. Make sure they feel included in the weekend.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Notes for your partner / support person\u2026',
        rows: 3,
      },
    ],
  },

  /* ─── 15 · Monday Night ─── */
  {
    id: 'event-15',
    number: '15',
    title: 'Geartunes',
    cardMeta: 'Monday Night · Sidetrack',
    day: 'Monday Night',
    time: '9:00 PM \u2013 2:00 AM',
    callTime: 'NONE',
    venue: 'Sidetrack Bar',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Geartunes is a Monday night celebration bringing leather, showtunes, and community together to close out IMLBB weekend. A great way to unwind, connect with fellow contestants, and soak in the last hours of the weekend.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'You came. You competed. You represented your community on one of leather\u2019s greatest stages. End the weekend the way it deserves \u2014 with your people.',
      },
    ],
    rightCol: [
      {
        type: 'tip',
        text: 'Sing and let go. The Weekend is over, the pressure is off, and this is your time to celebrate. Don\u2019t hold back.',
      },
    ],
  },

  /* ─── 16 · Monday Night ─── */
  {
    id: 'event-16',
    number: '16',
    title: 'The Black and Blue Ball',
    cardMeta: 'Monday Night',
    day: 'Monday Night',
    time: '9:00 PM \u2013 4:00 AM',
    callTime: 'NONE',
    venue: 'Jackhammer Bar, Chicago',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'After the crowning, Chicago\u2019s leather venues host celebratory events across the weekend\u2019s closing night. Time to decompress, celebrate with your fellow contestants, and enjoy the community you\u2019ve spent the weekend building. Details are shared at the Finals.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'You came. You competed. You represented your community on one of leather\u2019s greatest stages. That is worth celebrating \u2014 full stop.',
      },
    ],
    rightCol: [
      {
        type: 'tip',
        text: 'Exchange contacts with the contestants you\u2019ve connected with. Your IMLBB class is your family now \u2014 stay in touch.',
      },
    ],
  },

];

if (typeof module !== 'undefined') module.exports = { EVENTS };
