/* ── Section 3: IMLBB Judges ─────────────────────────────────────────────────
   Edit this file each year to update judge names, titles, bios and photos.
   photo  — direct image URL (Wix fill URLs work well at w_400,h_600)
   url    — full profile page on internationalmrleather.com (shown on screen)
   flag   — country name string (used by getFlagHtml() for SVG flag display)
   title  — their title or role label shown beneath the name
   location — city / country (optional)
   bio    — paragraph shown in the profile
──────────────────────────────────────────────────────────────────────────── */

const JUDGES = [
  {
    name:     'Rene Hebert',
    flag:     'Canada',
    title:    'International Mr. Leather 2025',
    location: 'Montreal, Quebec, Canada',
    bio:      'Your Friendly Neighborhood Bootblack and International Mr. Leather 2025. Rene is a versatile switch who prioritizes connected experiences in play. An accomplished bootblack and kink educator with over 14 years at the stand — the first bootblack to win the IML title. He has taught leather care and kink workshops at events including Palm Springs Leather Order of the Desert and Northwest Leather Celebration. When not bootblacking he can be found nerding out over card and video games, telling bad jokes, and singing along with showtunes in his car.',
    photo:    'https://static.wixstatic.com/media/dc9023_481133f2631248febc20c634d632096b~mv2.png/v1/fill/w_400,h_600,al_c,q_85/Rene_Hebert.png',
    url:      'https://www.internationalmrleather.com/judges/rene-hebert',
  },
  {
    name:     'Antoin',
    flag:     'Germany',
    title:    '2026 IML Judge',
    location: 'Hamburg, Germany',
    bio:      'Brand Manager and Events Producer for Recon, a proud rubber man of colour well-known in the global fetish community for nearly two decades. Through producing Recon\'s worldwide play parties and hosting the Recon Podcast, he has strengthened and supported the global kink and fetish community. He has served on juries internationally — including ILSB, German Mr Leather, Mr Leather France, Mr Fetish Gran Canaria, Mr Leather Spain, and Mexico Rubber — and empowers everyone he meets to be their authentic selves.',
    photo:    'https://static.wixstatic.com/media/dc9023_c667d97025094d11b4936ec1b85e7781~mv2.png/v1/fill/w_400,h_600,al_c,q_85/Antoin.png',
    url:      'https://www.internationalmrleather.com/judges/antoin',
  },
  {
    name:     'Master Dart',
    flag:     'United States',
    title:    '2026 IML Judge',
    location: 'Virginia Beach, Virginia, United States',
    bio:      'An experienced leather Dominant and educator with over three decades in the community. Describing himself as "New Guard," he emphasizes consent, balance, and relevance over rigid tradition. His background spans both submission and authority roles, with expertise in bondage and transformation play. He has presented at international venues across North America and Europe, maintains affiliations with various leather organizations, and is married to Sir Bart.',
    photo:    'https://static.wixstatic.com/media/dc9023_de44bc254730498e8e2a0715cfb02455~mv2.png/v1/fill/w_400,h_600,al_c,q_85/MasterDart.png',
    url:      'https://www.internationalmrleather.com/judges/master-dart',
  },
  {
    name:     'Issa Arden',
    flag:     'United States',
    title:    '2026 IML Judge',
    location: 'Hartford, Vermont, United States',
    bio:      'Issa Arden has been in leather and rubber for over 25 years. She serves on the Executive Committee and as head of Education for MIR, and curated exhibitions for the Leather Archives & Museum, including "Excavating Experience: The Presence of LGBTQ People of Color in Cook County." Their involvement spans ABW board service, IML social media team, Leather Hall of Fame staff, two Louisiana leather titles, and judging roles at International Ms. Leather, International Puppy and Trainer, Mr. Midwest Rubber, and Mr. Ebony Leather.',
    photo:    'https://static.wixstatic.com/media/dc9023_4e52d22fdb14446d8a1c93cb61bf68ce~mv2.jpg/v1/fill/w_400,h_600,al_c,q_85/Issa_Arden.jpg',
    url:      'https://www.internationalmrleather.com/judges/issa-arden',
  },
  {
    name:     'Lascivious Jane',
    flag:     'United States',
    title:    'International Ms. Leather 2016',
    location: 'West Chester, Pennsylvania, United States',
    bio:      'International Ms. Leather 2016 and Ms. Philadelphia Leather 2015. A power-femme switch, kinky burlesQueer, and sexologist — creator of Liberty City Kings Drag and Burlesque. Over two decades she has worked across North American stages as a multi-award-winning performer and producer in leather, drag, and burlesque communities. She holds a PhD and dedicates her professional life to educating and empowering at-risk youth.',
    photo:    'https://static.wixstatic.com/media/dc9023_ebef99d575f347cfb2939d6f7ae837d4~mv2.png/v1/fill/w_400,h_600,al_c,q_85/Lascivious_Jane.png',
    url:      'https://www.internationalmrleather.com/judges/lascivious-jane',
  },
  {
    name:     'Jody Anderson',
    flag:     'Australia',
    title:    '2026 IML Judge',
    location: 'Adelaide, South Australia, Australia',
    bio:      'A non-binary, transmasc butch leather daddy and inaugural Ms Adelaide Leather 2018. Jody creates spaces for queer women, trans, and non-binary communities and co-coordinates Risqgay, a queer kink and fetish social. They have taught consent and kink education through C.A.K.E. for over eight years and serve on the SA Pups & Handlers committee. With broad judging experience across leather, pup, rubber, and bootblack competitions internationally, their guiding philosophy is: "you can\'t be what you can\'t see."',
    photo:    'https://static.wixstatic.com/media/dc9023_18ab3b73264943048425302f73bc6008~mv2.png/v1/fill/w_400,h_600,al_c,q_85/Jody_Anderson.png',
    url:      'https://www.internationalmrleather.com/judges/jody-anderson',
  },
  {
    name:     'Leonardo Iriarte',
    flag:     'United States',
    title:    'Mr. Los Angeles Leather 2011',
    location: 'Los Angeles, California, United States',
    bio:      'A prominent figure in the leather community since the early 2000s, Leonardo became the first Latino Mr. Los Angeles Leather in 2011. He co-founded Payasos LA, an organization for Latin leather men, and co-founded the Encuerado Los Angeles Latin Fetish Weekend. His interests encompass discipline, uniforms, boots, and impact play, and he DJs for several nightclubs across Los Angeles.',
    photo:    'https://static.wixstatic.com/media/dc9023_a71df1d3e8c241349daab0cb588e876e~mv2.png/v1/fill/w_400,h_600,al_c,q_85/Leonardo_Iriarte.png',
    url:      'https://www.internationalmrleather.com/judges/leonardo-iriarte',
  },
  {
    name:     'Michael Byrne',
    flag:     'Ireland',
    title:    'Mr. Dublin Leather 2001',
    location: 'Dublin, Ireland',
    bio:      'A queer activist for over three decades and Den Daddy Mr. Dublin Leather. Michael co-founded L.U.B.E. Ireland (Leather Uniform Bear Encounter) and has been active with Dublin Pride, Outhouse, Marriage Equality, Dublin Bears, Béar Féile, and Mr Bear Ireland. He co-produces Dublin Leather Weekend and competed at IML as Mr. Dublin Leather 2001. Now commemorating his 25th anniversary as an IML Judge, he continues to mentor a new generation of leathermen worldwide.',
    photo:    'https://static.wixstatic.com/media/dc9023_a14309277be94b56bb016ef6927eed67~mv2.jpg/v1/fill/w_400,h_600,al_c,q_85/Michael_Byrne.jpg',
    url:      'https://www.internationalmrleather.com/judges/michael-byrne',
  },
  {
    name:     'Vince Andrews',
    flag:     'United States',
    title:    '2026 IML Judge',
    location: 'Glen Burnie, Maryland, United States',
    bio:      'A legal professional, educator, and community activist with a master\'s degree in legal studies and over 25 years of activism. Former President of NLA-International, where he directed organizational reform and expanded membership initiatives. As co-owner of Adynaton Publishing, he supports emerging writers and engages in archival digitization of queer history. His work spans nonprofit governance, cultural preservation, and creating platforms for underrepresented voices in the leather community.',
    photo:    'https://static.wixstatic.com/media/dc9023_a6696bae701a49d7a2823c905c66826e~mv2.png/v1/fill/w_400,h_600,al_c,q_85/Vince_Andrews.png',
    url:      'https://www.internationalmrleather.com/judges/vince-andrews',
  },
];
