// ===================================================================
// ST. JOHN'S HACKS — CENTRALIZED EVENT-PHOTO REGISTRY
// -------------------------------------------------------------------
// Every event photograph is listed here exactly ONCE with a single
// assigned section. The duplicate check at the bottom of this file
// logs a console warning if any photo src is reused across sections.
//
// To add a new photo: append an entry with its year, category and the
// ONE section it belongs to. Do not assign the same src to two sections.
//
// Reusable brand assets (Official Logo, social icons, sponsor logos)
// are NOT event photos and do not belong here.
// ===================================================================

const PHOTO_BASE = "https://base44.app/api/apps/6ab416dccb1b0eada1dceb29/files/mp/public/6ab416dccb1b0eada1dceb29/";
const MEDIA_BASE = "https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/";

const p = (file) => PHOTO_BASE + file;
const m = (file) => MEDIA_BASE + file;

export const photoRegistry = [
  // ===================== 2026 =====================
  { id: "DSC_0037", src: p("df7d9621f_DSC_0037_copy.JPG"), year: 2026, category: "hero", section: "hero", alt: "St. John's Hacks 2026 kickoff" },
  { id: "DSC_0371", src: p("9578129b7_DSC_0371_copy.JPG"), year: 2026, category: "card", section: "homepage-card", alt: "Johnny Thunderbird with attendees at St. John's Hacks 2026" },
  { id: "DSC_0504", src: p("f4272e292_DSC_0504_copy.JPG"), year: 2026, category: "homepage-hero", section: "homepage-hero", alt: "Students building at St. John's Hacks 2026", wide: true },

  { id: "DSC_0189", src: p("fd3e8ecc6_DSC_0189_copy.JPG"), year: 2026, category: "workshops", section: "workshops", alt: "Students at a workshop during St. John's Hacks 2026" },
  { id: "DSC_0201", src: p("9039e892f_DSC_0201_copy.JPG"), year: 2026, category: "workshops", section: "workshops", alt: "Workshop session at St. John's Hacks 2026" },
  { id: "DSC_0211", src: p("2ec45e75f_DSC_0211_copy.JPG"), year: 2026, category: "workshops", section: "workshops", alt: "Event atmosphere at St. John's Hacks 2026" },

  { id: "DSC_0394", src: p("9432071a0_DSC_0394_copy.JPG"), year: 2026, category: "johnny", section: "johnny", alt: "Johnny Thunderbird rallying students at St. John's Hacks 2026" },

  { id: "DSC_0308", src: p("f436204f4_DSC_0308_copy.JPG"), year: 2026, category: "community", section: "teams-community", alt: "Students collaborating at St. John's Hacks 2026" },
  { id: "DSC_0493", src: p("24a62ddbb_DSC_0493_copy.JPG"), year: 2026, category: "community", section: "teams-community", alt: "A team at St. John's Hacks 2026" },
  { id: "DSC_0499", src: p("ba37bd3c7_DSC_0499_copy.JPG"), year: 2026, category: "community", section: "teams-community", alt: "Presentations at St. John's Hacks 2026" },

  { id: "DSC_0121", src: p("26b52a370_DSC_0121_copy.JPG"), year: 2026, category: "organizers", section: "organizers", alt: "Organizers at St. John's Hacks 2026" },

  { id: "DSC_0495", src: p("4e32be285_DSC_0495_copy.JPG"), year: 2026, category: "winners", section: "winners", alt: "AdaptIQ project at St. John's Hacks 2026" },
  { id: "slidegenAIwinners", src: m("73419f18c_slidegenAIwinners.jpeg"), year: 2026, category: "winners", section: "winners", alt: "SlideGen AI — ToltIQ Track winners at St. John's Hacks 2026" },
  { id: "repoifywinners", src: m("843277813_repoifywinners.jpeg"), year: 2026, category: "winners", section: "winners", alt: "Repofy — Headstarter Track winners at St. John's Hacks 2026" },
  { id: "githirewinners", src: m("36b26baea_githirewinners.jpeg"), year: 2026, category: "winners", section: "winners", alt: "GitHire — Headstarter Track winners at St. John's Hacks 2026" },
  { id: "fanfavoritetrack", src: m("bc204cd67_fanfavoritetrack.JPG"), year: 2026, category: "winners", section: "winners", alt: "Fan Favorite winners at St. John's Hacks 2026" },
  { id: "headstartertrack", src: m("5cc5673bf_headstartertrack.JPG"), year: 2026, category: "track-group", section: "winners", alt: "Headstarter Track winners group at St. John's Hacks 2026" },

  { id: "DSC_0025", src: p("b8a2a3b6c_DSC_0025_copy.JPG"), year: 2026, category: "gallery", section: "gallery", alt: "St. John's Hacks 2026" },
  { id: "DSC_0027", src: p("5285901eb_DSC_0027_copy.JPG"), year: 2026, category: "gallery", section: "gallery", alt: "St. John's Hacks 2026" },
  { id: "DSC_0516", src: p("954de7478_DSC_0516_copy.JPG"), year: 2026, category: "gallery", section: "gallery", alt: "St. John's Hacks 2026" },
  { id: "DSC_0519", src: p("3ad17a956_DSC_0519_copy.JPG"), year: 2026, category: "gallery", section: "gallery", alt: "St. John's Hacks 2026", wide: true },
  { id: "DSC_0525", src: p("505d32102_DSC_0525_copy.JPG"), year: 2026, category: "gallery", section: "gallery", alt: "St. John's Hacks 2026" },

  // ===================== 2025 =====================
  { id: "IMG_8590", src: p("fd7a12ed8_IMG_8590_copy.JPG"), year: 2025, category: "hero", section: "hero", alt: "Students gathered at the inaugural St. John's Hacks in 2025" },
  { id: "IMG_8583", src: p("5f33727e1_IMG_8583_copy.JPG"), year: 2025, category: "card", section: "homepage-card", alt: "Large group photo from St. John's Hacks 2025", wide: true },

  { id: "IMG_2568", src: p("7ffca2e38_IMG_2568_copy.JPG"), year: 2025, category: "presentations", section: "presentations", alt: "Students at a presentation at St. John's Hacks 2025" },
  { id: "IMG_2585", src: p("a8fd05954_IMG_2585_copy.JPG"), year: 2025, category: "presentations", section: "presentations", alt: "Participants at St. John's Hacks 2025" },
  { id: "IMG_2638", src: p("9b1cfeb16_IMG_2638_copy.JPG"), year: 2025, category: "presentations", section: "presentations", alt: "Event atmosphere at St. John's Hacks 2025" },

  { id: "maspethwinners", src: m("76d25e95d_maspethwinners.JPG"), year: 2025, category: "winners", section: "winners", alt: "Maspeth Federal Savings track winning team at St. John's Hacks 2025" },
  { id: "stjohnstrack", src: m("8e624b5ae_stjohnstrack.JPG"), year: 2025, category: "winners", section: "winners", alt: "St. John's University track winning team at St. John's Hacks 2025" },

  // 2025 gallery — every remaining photo not assigned above (no duplicates)
  { id: "IMG_2676", src: p("c1208f9ff_IMG_2676_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "A team presenting their project at St. John's Hacks 2025" },
  { id: "IMG_2680", src: p("1fff69d4d_IMG_2680_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "Students collaborating at St. John's Hacks 2025" },
  { id: "IMG_2681", src: p("47a79885e_IMG_2681_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "Hackathon participants at St. John's Hacks 2025", wide: true },
  { id: "IMG_2685", src: p("0fb3fc9f3_IMG_2685_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "Project showcase at St. John's Hacks 2025" },
  { id: "IMG_2687", src: p("6e69a6b95_IMG_2687_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "Teams at St. John's Hacks 2025" },
  { id: "IMG_2567", src: p("4e3e228c4_IMG_2567_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_5139", src: p("3254c2379_IMG_5139_copy.jpg"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_5151", src: p("01a22674a_IMG_5151_copy.jpg"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_5187", src: p("9e724026b_IMG_5187_copy.jpg"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_5211", src: p("b4f5f35ba_IMG_5211_copy.jpg"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_5230", src: p("c983d4eb2_IMG_5230_copy.jpg"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_5233", src: p("916fd4ebb_IMG_5233_copy.jpg"), year: 2025, category: "gallery", section: "gallery", alt: "Community moment at St. John's Hacks 2025" },
  { id: "IMG_2571", src: p("102369f0e_IMG_2571_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "St. John's Hacks 2025" },
  { id: "IMG_2577", src: p("bab6dcdde_IMG_2577_copy.JPG"), year: 2025, category: "gallery", section: "gallery", alt: "St. John's Hacks 2025" },
];

// --- helpers -------------------------------------------------------
export const photosFor = (year, category) => photoRegistry.filter((ph) => ph.year === year && ph.category === category);
export const photoBy = (year, category) => photoRegistry.find((ph) => ph.year === year && ph.category === category);
export const getHeroPhoto = (year) => photoBy(year, "hero");
export const getCardPhoto = (year) => photoBy(year, "card");

// --- duplicate check (development helper, not shown to visitors) ----
export function checkDuplicatePhotos() {
  const seen = new Map();
  const dupes = [];
  for (const photo of photoRegistry) {
    if (seen.has(photo.src)) {
      dupes.push({ dup: photo, first: seen.get(photo.src) });
    } else {
      seen.set(photo.src, photo);
    }
  }
  if (dupes.length > 0 && typeof console !== "undefined" && import.meta.env?.DEV) {
    console.warn("Duplicate event image(s) detected in photoRegistry:");
    dupes.forEach((d) =>
      console.warn(`  Duplicate event image detected: ${d.dup.id} (${d.dup.year} / ${d.dup.section}) also used by ${d.first.id} (${d.first.year} / ${d.first.section})`)
    );
  }
  return dupes;
}

checkDuplicatePhotos();