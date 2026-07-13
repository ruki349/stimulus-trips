const PH = "assets/";
const JOURNEYS = [{
  id: "explorer",
  title: "Explorer Pack",
  mode: "Bike · Lake · Scenic Rail",
  modes: ["cycling", "lake", "rail"],
  days: "5 days",
  price: "from CHF 2,500",
  img: PH + "photo-cows-train.png",
  blurb: "Five active days across the country — by e-bike, by lake ferry, and by panoramic rail, from Lucerne to the Matterhorn.",
  lead: "Our most hands-on journey: pedal the valley floors, cross the water by ferry, and let the panoramic line carry you the rest of the way — Zurich to Lucerne to Interlaken to Zermatt, and home.",
  itin: [["01", "Arrive · Lucerne", "A slow afternoon on the lake to begin. The Swiss Origins audio companion sets the scene as the light turns gold."], ["02", "Ride to Interlaken", "E-bike from Lucerne toward Brienz, then a ferry — or the panoramic train — on to Interlaken. Your luggage travels ahead to the hotel."], ["03", "Interlaken & Lauterbrunnen", "Into the valley of waterfalls beneath the Jungfrau — a day among the most dramatic scenery in the Alps."], ["04", "Zermatt · car-free", "The scenic line to car-free Zermatt. E-bike up to Sunnegga, then the Gornergrat railway for the great Matterhorn view."], ["05", "Zurich finale", "A last leg north to Zurich. The Gold, Chocolate & Secrets audio walk closes the journey before you fly home."]],
  gallery: [PH + "photo-cows-train.png", PH + "photo-hikers-trail.png", PH + "photo-hero-valley.png"]
}, {
  id: "boutique",
  title: "Boutique Pack",
  mode: "Scenic Rail · Culture",
  modes: ["rail"],
  days: "5 days",
  price: "from CHF 4,500",
  img: PH + "photo-hero-valley.png",
  blurb: "Switzerland through culture, design and alpine identity — five days from St. Moritz to Basel by scenic rail.",
  lead: "A slower, more cultural line through the country: alpine glamour, lakeside architecture and a city of art, stitched together by Switzerland's most beautiful trains.",
  itin: [["01", "Arrive · St. Moritz", "From Zurich straight up into the Engadin. The Badrutt's & Winter Tourism audio companion tells how alpine tourism was born here."], ["02", "St. Moritz", "A scenic alpine day in the birthplace of winter tourism — high light, still lakes, and time to do less."], ["03", "St. Moritz → Lucerne", "A scenic transition west. Lake and architecture, and the Swiss Origins audio walk along the water."], ["04", "Lucerne → Basel", "The cultural heart of the journey — a city of art and design, and the day most travellers remember."], ["05", "Basel → Zurich", "A final cultural morning before the easy ride back to Zurich."]],
  gallery: [PH + "photo-hero-valley.png", PH + "photo-rest-meadow.png", PH + "photo-cows-train.png"]
}, {
  id: "signature",
  title: "Signature Pack",
  mode: "Scenic Rail · Signature",
  modes: ["rail", "cycling"],
  days: "8 days",
  price: "from CHF 4,500",
  img: PH + "photo-glacier-walker.png",
  blurb: "The Grand Alpine Journey — Switzerland deeply experienced, over eight days from Zurich to the Matterhorn and back.",
  lead: "Our finest journey, and the one we're proudest of: eight days that move from the modern city into the authentic Alps, with a signature Stimulus experience at its heart.",
  itin: [["01", "Arrive · Zurich", "A modern introduction to Switzerland. The first audio companion eases you into the journey ahead."], ["02", "Zurich → St. Moritz", "The scenic train climbs into alpine grandeur and the glamour of the Engadin."], ["03", "St. Moritz", "Nature and the history of alpine tourism — an unhurried, restorative day."], ["04", "St. Moritz → Andermatt", "A transition into the authentic, less-travelled heart of the Alps."], ["05", "Andermatt · the key day", "The signature Stimulus experience — history, hidden bunkers and the high mountains. Hiking or e-bike optional."], ["06", "Andermatt → Zermatt", "One of the most spectacular alpine rail routes there is, pass after pass."], ["07", "Zermatt", "The Matterhorn day — a premium picnic, a private guide, and the peak at sunset."], ["08", "Zermatt → Zurich", "The scenic line home, and a quiet close to the grand journey."]],
  gallery: [PH + "photo-glacier-walker.png", PH + "photo-hero-skiers.png", PH + "photo-hikers-trail.png"]
}];
const WAYS = [{
  icon: "train",
  num: "01",
  name: "Scenic Rail Journeys",
  text: "Switzerland's legendary panoramic railways and quiet alpine lines — the country unspooling at window height.",
  long: "We build journeys around the trains the world comes here to ride — and the lines only locals know. Lunch served as the scenery turns; no transfers to manage; nothing to do but watch the country pass."
}, {
  icon: "boat",
  num: "02",
  name: "Lake Crossings",
  text: "Historic ferries and scenic boat routes across the great lakes, between one shore and the next.",
  long: "There is a slower, older way to cross Switzerland — by water. Paddle-steamers and small ferries link lake-side villages, funiculars, and trailheads into one unhurried, sensory line."
}, {
  icon: "bike",
  num: "03",
  name: "Alpine Cycling",
  text: "Valley and mountain routes for every level, including e-bike stages — luggage carried ahead, café stops known.",
  long: "From flat valley floors to high passes, on your own bike or an e-bike when the climbs ask for it. Your luggage travels ahead; a guide who knows every café travels with you."
}];

const COPY = {
  poetic: {
    heroEyebrow: "Swiss Alpine Travel Designer",
    heroTitle: ["Curated", "alpine", "journeys"],
    heroLead: "Designed by locals who know Switzerland beyond the guidebooks — by train, ferry, and bicycle.",
    meaningEyebrow: "Why we exist",
    meaningQuote: ["Today's traveller doesn't want more. They want more ", "meaning", "."],
    meaningBody: ["We believe travel should be felt, not just seen. So we don't sell trips — we design journeys, around the way you want to feel.", "We're not an agency — we're your insiders in Switzerland. The best moments are rarely on the itinerary, so we leave room for them."],
    waysEyebrow: "Three ways to travel",
    waysTitle: ["Train + Lake +", "Mountain + Bike"],
    spotEyebrow: "From Zurich, into the Alps",
    spotTitle: ["Rooted in Zurich.", "At home in the mountains."],
    spotBody: ["Stimulus is based in Zurich now — but our heart is in the high country, the alpine routes we return to season after season.", "We know which trail is empty at golden hour, which terrace catches the last light, and which morning the mountain shows itself. That's not on a map. It's why people travel with us."],
    quoteBand: ["Not faster.", "Not more.", "Just ", "better", "."],
    quoteSub: "Refined, never loud. Always natural, always relaxed.",
    journeysEyebrow: "Curated journeys",
    journeysTitle: ["We don't sell trips.", "We design journeys."],
    inquiryEyebrow: "Plan a journey",
    inquiryTitle: ["Tell us how you", "want to feel."],
    inquiryLead: "Share a few details and we'll design something around you — no fixed packages, ever.",
    aboutEyebrow: "The studio",
    aboutTitle: ["Travel that", "awakens the senses"],
    aboutLead: "Stimulus Trips is a boutique Swiss alpine travel studio. We design connected, multi-modal journeys — train, lake, mountain, bike — for travellers who want meaning, not a checklist."
  },
  direct: {
    heroEyebrow: "Swiss Alpine Travel Designer",
    heroTitle: ["Curated", "Swiss", "journeys"],
    heroLead: "Custom alpine trips designed by locals — connecting scenic trains, lake ferries, and cycling routes across Switzerland.",
    meaningEyebrow: "Our approach",
    meaningQuote: ["We design trips around how you want to travel — not around fixed ", "packages", "."],
    meaningBody: ["Every journey is built for you: the pace, the routes, the places to stay. Nothing is off-the-shelf.", "We're not an agency — we're your insiders in Switzerland, with the local knowledge that makes a trip work."],
    waysEyebrow: "Three ways to travel",
    waysTitle: ["Train, Lake,", "Mountain & Bike"],
    spotEyebrow: "From Zurich, into the Alps",
    spotTitle: ["Based in Zurich,", "at home in the Alps"],
    spotBody: ["We're based in Zurich, with the whole of the Swiss Alps within easy reach — the regions we know best, season after season.", "We'll point you to the right trail at the right hour, the best terrace at sunset, and the clearest morning for the peak. Local knowledge you can't get from a guidebook."],
    quoteBand: ["Not faster.", "Not more.", "Just ", "better", "."],
    quoteSub: "Refined, understated travel — designed with care, never oversold.",
    journeysEyebrow: "Our journeys",
    journeysTitle: ["Custom trips,", "designed end to end."],
    inquiryEyebrow: "Plan a journey",
    inquiryTitle: ["Tell us what", "you're after."],
    inquiryLead: "Send us a few details and we'll put together a custom proposal — no fixed packages.",
    aboutEyebrow: "About us",
    aboutTitle: ["A boutique Swiss", "alpine travel studio"],
    aboutLead: "Stimulus Trips designs custom, multi-modal journeys across Switzerland — combining scenic trains, lake ferries, and alpine cycling for experience-driven travellers."
  }
};
const VALUES = [["Meaning over more", "We measure a journey by how it felt, not by how much it contained."], ["Insiders, not an agency", "Local knowledge earned on the ground — the right trail, the right hour, never boastful."], ["Designed, not packaged", "Every journey is shaped around one traveller. Nothing is off-the-shelf."]];
Object.assign(window, {
  JOURNEYS,
  WAYS,
  COPY,
  VALUES,
  PH
});
