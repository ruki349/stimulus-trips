const PH = "assets/";
const JOURNEYS = [
  { id: "explorer", title: "Explorer", mode: "Bike · Lake · Scenic Rail", days: "5 days",
    arc: ["Lucerne", "Interlaken", "Zermatt", "Zurich"],
    lead: "Five active days across the country — by e-bike, by lake ferry, and by panoramic rail, from Lucerne to the Matterhorn.",
    body: "Our most hands-on journey: pedal the valley floors, cross the water by ferry, and let the panoramic line carry you the rest of the way." },
  { id: "boutique", title: "Boutique", mode: "Scenic Rail · Culture", days: "5 days",
    arc: ["St. Moritz", "Lucerne", "Basel", "Zurich"],
    lead: "Switzerland through culture, design and alpine identity — five days by scenic rail.",
    body: "A slower, more cultural line through the country: alpine glamour, lakeside architecture and a city of art, stitched together by Switzerland's most beautiful trains." },
  { id: "signature", title: "Signature", mode: "Scenic Rail · Signature", days: "8 days",
    arc: ["Zurich", "St. Moritz", "Andermatt", "Zermatt"],
    lead: "The Grand Alpine Journey — Switzerland deeply experienced, over eight days from Zurich to the Matterhorn and back.",
    body: "Our finest journey, and the one we're proudest of: eight days that move from the modern city into the authentic Alps, with a signature Stimulus experience at its heart." }
];
const WAYS = [
  { icon: "train", num: "01", name: "Scenic Rail", text: "Switzerland's legendary panoramic railways and quiet alpine lines — the country unspooling at window height." },
  { icon: "boat", num: "02", name: "Lake Crossings", text: "Historic ferries across the great lakes, a slower and older way to move between one shore and the next." },
  { icon: "bike", num: "03", name: "Alpine Cycling", text: "Valley and mountain routes for every level, luggage carried ahead, a guide who knows every café." }
];
const VALUES = [
  ["Meaning over more", "We measure a journey by how it felt, not by how much it contained."],
  ["Insiders, not an agency", "Local knowledge earned on the ground — the right trail, the right hour, never boastful."],
  ["Designed, not packaged", "Every journey is shaped around one traveller. Nothing is off-the-shelf."]
];
const COPY = {
  heroEyebrow: "Swiss Alpine Travel Designer",
  heroTitle: ["Curated", "alpine", "journeys"],
  heroLead: "We connect remarkable people to create remarkable journeys through Switzerland.",
  moreEyebrow: "More than a trip",
  moreQuote: ["Today's traveller doesn't want more. They want more ", "meaning", "."],
  moreBody: ["We believe travel should be felt, not just seen. So we don't sell trips — we design journeys, around the way you want to feel.", "We're not an agency — we're a network of people who know Switzerland beyond the guidebooks."],
  whyEyebrow: "Why travel with Stimulus",
  whyTitle: ["Three ways to", "move through Switzerland"],
  journeysEyebrow: "Curated journeys",
  journeysTitle: ["We don't sell trips.", "We design journeys."],
  journeysLead: "Three starting points, each reshaped around how you want to travel, where, and at what pace.",
  placeEyebrow: "Places worth experiencing",
  placeTitle: ["Rooted in Zurich.", "At home in the mountains."],
  placeBody: "We know which trail is empty at golden hour, which terrace catches the last light, and which morning the mountain shows itself. More places, after our expedition.",
  finalEyebrow: "Plan a journey",
  finalTitle: ["Tell us how you", "want to feel."],
  finalLead: "No fixed packages — just a conversation about the journey you have in mind.",
  aboutEyebrow: "The philosophy",
  aboutTitle: ["Travel that", "awakens the senses"],
  aboutLead: "Stimulus is a network of people creating extraordinary journeys through Switzerland — not a travel agency, a curated travel brand focused on meaning.",
  valuesTitle: ["Not faster. Not more.", "Just better."],
  contactEyebrow: "Contact",
  contactTitle: ["Start a", "conversation."],
  contactLead: "Tell us a little about the journey you have in mind. We'll reply within two days — never with an off-the-shelf package."
};
Object.assign(window, { JOURNEYS, WAYS, COPY, VALUES, PH });
