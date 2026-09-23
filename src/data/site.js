// ===================================================================
// ST. JOHN'S HACKS — CENTRAL CONTENT SOURCE
// Organizers: update this file to change site content. No code edits needed.
// ===================================================================

// --- Brand / Social ---
export const site = {
  name: "St. John's Hacks",
  wordmark: "ST. JOHN'S HACKS",
  compactMark: "{ STJ }",
  university: "St. John's University",
  location: "Queens, New York",
  // Official St. John's Hacks logo (Johnny Thunderbird + braces + wordmark).
  // Use selectively: About, footer, brand/history, social sharing. Do not recolor.
  logo: "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/5b184fd12_OfficialLogo.png",
  // Standalone Johnny Thunderbird PNG (without wordmark) — upload when available.
  mascotImage: "",
  socials: {
    instagram: "https://www.instagram.com/stjhacks/",
    linkedin: "https://linkedin.com/company/stjohnshacks",
    discord: "https://discord.gg/3GDFszAswT",
    devpost: "https://devpost.com/stjohnshacks",
    acm: "https://stjohns.edu/acm",
  },
  contactEmail: "team@stjohnshacks.com",
  footerNote: "{ built with caffeine, curiosity & questionable sleep schedules }",
};

// --- Current Event (2027) ---
// status: "open" | "soon" | "closed" | "waitlist"
export const currentEvent = {
  year: 2027,
  title: "ST. JOHN'S HACKS '27",
  season: "SPRING 2027",
  dateLabel: "SPRING 2027",
  datesComingSoon: true,
  venue: "St. John's University",
  location: "Queens, New York",
  duration: "MULTI-DAY",
  applicationStatus: "soon",
  applicationUrl: "",
  techLine: "{ the next chapter }",
  overview:
    "St. John's Hacks '27 is the next chapter of St. John's University's student-led hackathon — a multi-day experience built for students who want to experiment, collaborate, and ship something real.",
  format: [
    { day: "FRIDAY", label: "Opening night — check-in, kickoff, team formation" },
    { day: "SATURDAY", label: "Hacking, workshops, mentorship, sponsors, food" },
    { day: "SUNDAY", label: "Final pushes, judging, demos, awards" },
  ],
  experience: [
    "Workshops",
    "Hacking",
    "Mentorship",
    "Sponsors",
    "Prizes",
    "Community",
    "Judging",
    "Demos",
  ],
  tracksAnnounced: false,
};

// --- Schedule (editable) ---
export const schedule = {
  days: ["FRIDAY", "SATURDAY", "SUNDAY"],
  // Times are placeholders — organizers confirm final times.
  items: [
    { day: "FRIDAY", start: "6:00 PM", end: "7:00 PM", title: "Check-in", category: "Ceremony", location: "DAC Ballroom", description: "Arrive, check in, grab your swag." },
    { day: "FRIDAY", start: "7:00 PM", end: "7:45 PM", title: "Opening Ceremony", category: "Ceremony", location: "DAC Ballroom", description: "Welcome, rules, and kickoff." },
    { day: "FRIDAY", start: "7:45 PM", end: "8:30 PM", title: "Team Formation", category: "Social", location: "DAC Ballroom", description: "Find teammates and brainstorm." },
    { day: "FRIDAY", start: "8:30 PM", end: "9:00 PM", title: "Hacking Begins", category: "Hacking", location: "Hacking Floor", description: "The clock starts. Build something real." },
    { day: "SATURDAY", start: "9:00 AM", end: "10:00 AM", title: "Breakfast", category: "Food", location: "Dining Area", description: "Fuel up." },
    { day: "SATURDAY", start: "10:00 AM", end: "11:00 AM", title: "Workshop: Intro to APIs", category: "Workshop", location: "Room 1", description: "Hands-on intro for beginners." },
    { day: "SATURDAY", start: "11:00 AM", end: "1:00 PM", title: "Mentorship Hours", category: "Mentorship", location: "Hacking Floor", description: "1:1 help from engineers and mentors." },
    { day: "SATURDAY", start: "1:00 PM", end: "2:00 PM", title: "Lunch", category: "Food", location: "Dining Area", description: "Refuel mid-build." },
    { day: "SATURDAY", start: "2:00 PM", end: "3:00 PM", title: "Sponsor Challenge Pitch", category: "Sponsor", location: "Main Stage", description: "Sponsors present their challenges." },
    { day: "SATURDAY", start: "3:00 PM", end: "4:00 PM", title: "Workshop: AI + ML Basics", category: "Workshop", location: "Room 2", description: "Get started with machine learning." },
    { day: "SATURDAY", start: "6:00 PM", end: "7:00 PM", title: "Dinner", category: "Food", location: "Dining Area", description: "Evening meal." },
    { day: "SATURDAY", start: "9:00 PM", end: "10:00 PM", title: "Mini-Event", category: "Social", location: "Lounge", description: "Take a break and recharge." },
    { day: "SUNDAY", start: "9:00 AM", end: "10:00 AM", title: "Breakfast", category: "Food", location: "Dining Area", description: "Final day fuel." },
    { day: "SUNDAY", start: "12:00 PM", end: "12:30 PM", title: "Hacking Ends", category: "Deadline", location: "Hacking Floor", description: "Submissions due." },
    { day: "SUNDAY", start: "1:00 PM", end: "3:00 PM", title: "Judging", category: "Judging", location: "Hacking Floor", description: "Judges review projects." },
    { day: "SUNDAY", start: "3:30 PM", end: "5:00 PM", title: "Demos + Awards", category: "Presentation", location: "Main Stage", description: "Top demos and closing ceremony." },
  ],
};

// --- Tracks (flexible categories) ---
export const tracks = [
  {
    name: "AI + MACHINE LEARNING",
    sponsor: "",
    announced: false,
    description: "Build with artificial intelligence and machine learning — models, agents, and intelligent systems.",
    challenge: "Coming soon.",
    prize: "",
  },
  {
    name: "CYBERSECURITY",
    sponsor: "",
    announced: false,
    description: "Tackle security challenges, tooling, and defensive or offensive builds.",
    challenge: "Coming soon.",
    prize: "",
  },
  {
    name: "SOFTWARE + FULL STACK",
    sponsor: "",
    announced: false,
    description: "Ship a complete application — front end, back end, and everything in between.",
    challenge: "Coming soon.",
    prize: "",
  },
  {
    name: "OPEN INNOVATION",
    sponsor: "",
    announced: false,
    description: "No constraints. Build whatever you're passionate about.",
    challenge: "Coming soon.",
    prize: "",
  },
  {
    name: "SPONSOR CHALLENGES",
    sponsor: "",
    announced: false,
    description: "Sponsor-backed challenges with dedicated prizes. Announced as partners confirm.",
    challenge: "Coming soon.",
    prize: "",
  },
];

// --- Past Events ---
export const pastEvents = [
  {
    year: 2026,
    title: "ST. JOHN'S HACKS '26",
    tagline: "WE WENT BIGGER.",
    techLine: "{ we went bigger }",
    dateLabel: "FEBRUARY 7–8, 2026",
    location: "St. John's University",
    venue: "St. Augustine Hall",
    duration: "30 HOURS",
    attendance: "60+",
    days: "2 DAYS",
    teamSize: "2–4",
    recapUrl: "https://www.stjohns.edu/news-media/news/2026-02-23/hackathon-invites-st-johns-students-build-code-and-innovate",
    heroImage: "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/5f0d83d50_generated_493bca06.jpg",
    gallery: [
      "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/7790d8128_generated_e2ed93db.jpg",
      "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/f91aa07eb_generated_179ffd14.jpg",
      "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/a011dd93c_generated_01a1aa62.jpg",
      "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/5f0d83d50_generated_493bca06.jpg",
    ],
    recap:
      "The second annual St. John's Hacks grew from a one-day event into a two-day, 30-hour build at St. Augustine Hall. More than 60 undergraduates, graduate students, and recent alumni — across all experience levels, including first-time builders — collaborated on projects spanning artificial intelligence, cybersecurity, machine learning, and software development. The weekend paired hands-on building with workshops, mentorship, sponsor challenges, presentations, judging, and prizes, plus a visit from Johnny Thunderbird.",
    stats: [
      { value: "60+", label: "STUDENTS" },
      { value: "30", label: "HOURS" },
      { value: "2", label: "DAYS" },
      { value: "2–4", label: "PER TEAM" },
    ],
    // Project photo filenames (upload pending): AdaptIQ=DSC_0495, SlideGen/ToltIQ=IMG_6931, Repofy=IMG_6942, GitHire=IMG_6959
    winners: [
      { track: "TOLTIQ TRACK", place: "1st", project: "SlideGen AI", team: "", tech: "", devpost: "", image: "" },
      { track: "TOLTIQ TRACK", place: "2nd", project: "Sliders", team: "", tech: "", devpost: "", image: "" },
      { track: "TOLTIQ TRACK", place: "3rd", project: "AdaptIQ", team: "", tech: "", devpost: "", image: "" },
      { track: "HEADSTARTER TRACK", place: "1st", project: "Repofy", team: "", tech: "", devpost: "", image: "" },
      { track: "HEADSTARTER TRACK", place: "2nd", project: "GitProfile", team: "", tech: "", devpost: "", image: "" },
      { track: "HEADSTARTER TRACK", place: "3rd", project: "GitHire", team: "", tech: "", devpost: "", image: "" },
      { track: "FAN FAVORITE", place: "", project: "GitHire", team: "", tech: "", devpost: "", image: "" },
    ],
    sponsors: [
      { name: "ToltIQ", year: 2026 },
      { name: "Headstarter", year: 2026 },
      { name: "St. John's University", year: 2026 },
      { name: "The Lesley H. and William L. Collins College of Professional Studies", year: 2026 },
    ],
    devpost: "",
    instagram: "",
  },
  {
    year: 2025,
    title: "ST. JOHN'S HACKS '25",
    tagline: "WHERE IT STARTED.",
    techLine: "{ the beginning }",
    dateLabel: "APRIL 26, 2025",
    location: "St. John's University",
    venue: "St. Augustine Hall",
    duration: "12 HOURS",
    attendance: "",
    days: "1 DAY",
    heroImage: "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/a011dd93c_generated_01a1aa62.jpg",
    gallery: [
      "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/a011dd93c_generated_01a1aa62.jpg",
      "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/7790d8128_generated_e2ed93db.jpg",
    ],
    recap:
      "2025 marked the inaugural St. John's Hacks — a 12-hour, student-led hackathon at St. Augustine Hall focused on technical building and innovation. Beginner-friendly, with workshops, projects, mentors, judging, and prizes. The beginning of something bigger.",
    stats: [
      { value: "12", label: "HOURS" },
      { value: "1", label: "DAY" },
      { value: "01", label: "THE FIRST ST. JOHN'S HACKS" },
    ],
    winners: [],
    sponsors: [
      { name: "Headstarter", year: 2025 },
      { name: "Maspeth Federal Savings", year: 2025 },
      { name: "St. John's University", year: 2025 },
    ],
    devpost: "",
    instagram: "",
  },
];

export const getEventByYear = (year) => pastEvents.find((e) => e.year === Number(year));

// --- Projects (notable past projects) ---
export const projects = [
  {
    title: "SlideGen AI",
    year: 2026,
    award: "ToltIQ Track Winner",
    team: "",
    tech: ["AI", "LLM", "Slides"],
    devpost: "",
    screenshot: "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/f91aa07eb_generated_179ffd14.jpg",
  },
  {
    title: "Repofy",
    year: 2026,
    award: "Headstarter Track Winner",
    team: "",
    tech: ["Full Stack", "GitHub API"],
    devpost: "",
    screenshot: "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/7790d8128_generated_e2ed93db.jpg",
  },
  {
    title: "GitHire",
    year: 2026,
    award: "Fan Favorite",
    team: "",
    tech: ["Full Stack", "Recruiting"],
    devpost: "",
    screenshot: "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/5f0d83d50_generated_493bca06.jpg",
  },
];

// --- Sponsors ---
// current: confirmed sponsors for the current (2027) event only
export const currentSponsors = [];

export const pastSupporters = [
  { name: "Headstarter", years: [2025, 2026] },
  { name: "ToltIQ", years: [2026] },
  { name: "Maspeth Federal Savings", years: [2025] },
  { name: "St. John's University", years: [2025, 2026] },
  { name: "The Lesley H. and William L. Collins College of Professional Studies", years: [2026] },
];

export const sponsorTiers = [
  { name: "TITLE PARTNER", sponsors: [] },
  { name: "GOLD", sponsors: [] },
  { name: "SILVER", sponsors: [] },
  { name: "COMMUNITY PARTNER", sponsors: [] },
];

// --- Team (current organizing team) ---
export const team = [
  { name: "Organizer Name", role: "Founder / Lead Organizer", bio: "", linkedin: "", portfolio: "", github: "", image: "" },
  { name: "Organizer Name", role: "Operations", bio: "", linkedin: "", portfolio: "", github: "", image: "" },
  { name: "Organizer Name", role: "Sponsorship", bio: "", linkedin: "", portfolio: "", github: "", image: "" },
  { name: "Organizer Name", role: "Marketing", bio: "", linkedin: "", portfolio: "", github: "", image: "" },
  { name: "Organizer Name", role: "Technology", bio: "", linkedin: "", portfolio: "", github: "", image: "" },
  { name: "Organizer Name", role: "Design", bio: "", linkedin: "", portfolio: "", github: "", image: "" },
];

// --- FAQ ---
export const faq = [
  {
    category: "PARTICIPATION",
    questions: [
      { q: "Who can participate?", a: "St. John's Hacks is open to students who want to build. Policies on eligibility (including non-St. John's students and graduate students) are confirmed each year — check the current event page for the latest." },
      { q: "Do I need coding experience?", a: "No. St. John's Hacks is beginner-friendly. We provide workshops, mentors, and a welcoming community to help you ship your first project." },
      { q: "Can beginners participate?", a: "Absolutely. Beginners belong here. Many participants build their first real project at St. John's Hacks." },
      { q: "Can graduate students participate?", a: "Eligibility details are confirmed per event. Check the current event page for the most up-to-date policy." },
      { q: "Do I need to be a St. John's student?", a: "St. John's Hacks is hosted at St. John's University. Participation eligibility is confirmed each year — see the current event page." },
    ],
  },
  {
    category: "TEAMS",
    questions: [
      { q: "Do I need a team?", a: "No. You can compete solo or with a team. We also run a team-formation session at the start of the event." },
      { q: "How large can teams be?", a: "Team size limits are confirmed per event. Check the current event page for the latest rules." },
      { q: "Can I find teammates at the event?", a: "Yes. We host a team-formation session right after opening ceremony to help you find collaborators." },
    ],
  },
  {
    category: "APPLICATIONS",
    questions: [
      { q: "When do applications open?", a: "Applications for St. John's Hacks '27 open ahead of Spring 2027. Watch the 2027 page for the latest status." },
      { q: "Is participation free?", a: "St. John's Hacks is designed to be accessible. Participation details are confirmed per event." },
      { q: "How will I know if I was accepted?", a: "You'll receive an email confirmation after applying. Make sure to check the address you applied with." },
    ],
  },
  {
    category: "EVENT LOGISTICS",
    questions: [
      { q: "Where is St. John's Hacks held?", a: "At St. John's University in Queens, New York. The exact venue is confirmed per event." },
      { q: "What should I bring?", a: "Your laptop, charger, student ID, and anything you need to build. We'll handle food, space, and Wi-Fi." },
      { q: "Will food be provided?", a: "Yes. Meals and snacks are provided throughout the event for participants." },
      { q: "Can participants leave during the event?", a: "Yes, the venue is open. You're free to step out and return as needed." },
    ],
  },
  {
    category: "PROJECTS",
    questions: [
      { q: "Can I work on an existing project?", a: "Generally, projects should be started at the event. Specific rules are confirmed per event — check the current event page." },
      { q: "What technologies can I use?", a: "Anything. Web, mobile, AI/ML, hardware, game dev — whatever helps you build your idea." },
      { q: "How are projects submitted?", a: "Projects are submitted via Devpost before the deadline. We'll share the link and instructions at the event." },
    ],
  },
  {
    category: "JUDGING",
    questions: [
      { q: "How are projects judged?", a: "Judges evaluate projects on criteria like creativity, technical execution, impact, and presentation. Full criteria are shared per event." },
      { q: "Who are the judges?", a: "Judges include engineers, sponsors, faculty, and industry professionals. The lineup is announced closer to the event." },
      { q: "What prizes are available?", a: "Prizes include track awards, sponsor challenges, and fan favorite. Details are confirmed as sponsors sign on." },
    ],
  },
  {
    category: "ORGANIZERS",
    questions: [
      { q: "Can someone who helps organize the hackathon also compete?", a: "Organizer eligibility to compete is decided per event to keep judging fair. Check the current event page for the policy." },
    ],
  },
];

// --- Navigation ---
export const nav = [
  { label: "About", path: "/about" },
  { label: "2027", path: "/2027" },
  { label: "Schedule", path: "/schedule" },
  { label: "Tracks", path: "/tracks" },
  { label: "Past Events", path: "/past-events" },
  { label: "Sponsors", path: "/sponsors" },
];

export const navMore = [
  { label: "Team", path: "/team" },
  { label: "FAQ", path: "/faq" },
];

export const footerNav = [
  { label: "About", path: "/about" },
  { label: "2027", path: "/2027" },
  { label: "Schedule", path: "/schedule" },
  { label: "Tracks", path: "/tracks" },
  { label: "Past Events", path: "/past-events" },
  { label: "Sponsors", path: "/sponsors" },
  { label: "Team", path: "/team" },
  { label: "FAQ", path: "/faq" },
];