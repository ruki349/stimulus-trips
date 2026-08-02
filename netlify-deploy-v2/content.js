const PH = "assets/";
const JOURNEYS = [
  { id: "explorer", title: "Explorer", mode: "Move through Switzerland differently.", days: "",
    arc: ["Lucerne", "Interlaken", "Zermatt", "Zurich"],
    lead: "Move through Switzerland differently.",
    body: "Travel through Switzerland using panoramic trains, scenic ferries, bicycles and carefully selected routes, experiencing the country at a slower and more meaningful pace." },
  { id: "boutique", title: "Boutique", mode: "See Switzerland through its culture.", days: "",
    arc: ["St. Moritz", "Lucerne", "Basel", "Zurich"],
    lead: "See Switzerland through its culture.",
    body: "Architecture, gastronomy, craftsmanship and thoughtfully selected experiences reveal another side of Switzerland." },
  { id: "signature", title: "Signature", mode: "Switzerland, thoughtfully curated.", days: "",
    arc: ["Zurich", "St. Moritz", "Andermatt", "Zermatt"],
    lead: "Switzerland, thoughtfully curated.",
    body: "Our most complete journey, bringing together remarkable landscapes, culture and meaningful experiences." }
];
const WAYS = [
  { icon: "pin", num: "01", name: "Designed by locals", text: "" },
  { icon: "star", num: "02", name: "Thoughtfully curated", text: "" },
  { icon: "train", num: "03", name: "Travel at the right pace", text: "" },
  { icon: "leaf", num: "04", name: "Meaningful experiences", text: "" }
];
const VALUES = [
  ["Meaning over more", "We measure a journey by how it felt, not by how much it contained."],
  ["Insiders, not an agency", "Local knowledge earned on the ground — the right trail, the right hour, never boastful."],
  ["Designed, not packaged", "Every journey is shaped around one traveller. Nothing is off-the-shelf."]
];
const COPY = {
  heroEyebrow: "Switzerland",
  heroTitle: ["Feel", "Switzerland."],
  heroLead: "Curated journeys shaped by locals. Discover Switzerland through its people, landscapes and stories.",
  moreEyebrow: "More than a trip",
  moreQuote: "Switzerland is more than a destination. It is a country best understood through its landscapes, its people and the stories that connect them.",
  moreBody: ["Stimulus is a network of people creating extraordinary journeys through Switzerland.", "Every journey is thoughtfully curated to help you experience the country in a more personal, authentic and meaningful way."],
  whyEyebrow: "Why travel with Stimulus",
  whyTitle: ["Why travel", "with Stimulus"],
  journeysEyebrow: "Curated journeys",
  journeysTitle: ["Curated journeys for", "every way of travelling."],
  journeysLead: "Explorer, Boutique, Signature — three journeys, each thoughtfully curated.",
  placeEyebrow: "Places worth experiencing",
  placeTitle: ["Rooted in Zurich.", "At home in the mountains."],
  placeBody: "We know which trail is empty at golden hour, which terrace catches the last light, and which morning the mountain shows itself. More places, after our expedition.",
  finalEyebrow: "Plan a journey",
  finalTitle: ["Start planning", "your journey."],
  finalLead: "Every memorable journey begins long before you arrive.",
  aboutEyebrow: "About",
  aboutTitle: ["Our story begins", "with Switzerland."],
  aboutLead: "Stimulus is not a traditional travel agency. We connect remarkable people to create remarkable journeys. We believe travel should create understanding rather than simply ticking off destinations.",
  valuesTitle: ["Not faster. Not more.", "Just better."],
  contactEyebrow: "Contact",
  contactTitle: ["Your journey starts", "with a conversation."],
  contactLead: "Every memorable journey begins long before you arrive. Tell us what inspires you, and we'll help shape an experience that feels uniquely yours."
};
Object.assign(window, { JOURNEYS, WAYS, COPY, VALUES, PH });
