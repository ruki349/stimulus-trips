const PH = "assets/";
const JOURNEYS = [
  { id: "explorer", title: "Explorer", mode: "Move through Switzerland differently", days: "",
    arc: ["Lucerne", "Lungern", "Brienz", "Lauterbrunnen"],
    lead: "Move through Switzerland differently.",
    body: "Rail, boat, e-bike and on foot, from Lake Lucerne to the Lauterbrunnen valley. The way between places is part of the journey." },
  { id: "boutique", title: "Boutique", mode: "See Switzerland through its culture", days: "",
    arc: ["Appenzell", "Lake Lucerne", "Zermatt", "Z\u00FCrich"],
    lead: "See Switzerland through its culture.",
    body: "Architecture, gastronomy, craftsmanship and thoughtfully selected experiences reveal another side of Switzerland." },
  { id: "signature", title: "Signature", mode: "Switzerland, shaped around you", days: "",
    arc: [],
    lead: "Switzerland, shaped around you.",
    body: "A journey shaped entirely around you \u2014 your interests, your time and your reason for travelling." }
];
const JOURNEY_OVERVIEW = [
  { id: "explorer", name: "Explorer", photo: "assets/chapter-explorer.jpg",
    prop: "Discover Switzerland through movement",
    tags: "Rail \u00B7 E-bike \u00B7 Ferry \u00B7 Mountain railway",
    desc: "For travellers who want the journey between places to become part of the experience.",
    quote: "\u201CThe route is fixed. The intensity is not.\u201D", cta: "Explore Explorer \u2192" },
  { id: "boutique", name: "Boutique", photo: "assets/jov-boutique.jpg",
    prop: "Fewer places. More depth.",
    tags: "Stays \u00B7 People \u00B7 Food \u00B7 Lake \u00B7 Mountains",
    desc: "For travellers who prefer to stay longer, look closer and meet the people who know each place.",
    quote: "\u201CStay longer. Look closer.\u201D", cta: "Explore Boutique \u2192" },
  { id: "signature", name: "Signature", photo: "assets/journeys-signature.jpg",
    prop: "A journey shaped entirely around you",
    tags: "People \u00B7 Interests \u00B7 Occasion \u00B7 Time",
    desc: "For travellers whose journey should begin with their own story rather than a predefined route.",
    quote: "\u201CWe don't adapt a journey to you. We write one with you.\u201D", cta: "Explore Signature \u2192" }
];
const SEASONS = [
  { id: "summer", label: "Summer",
    title: "Three ways to experience Switzerland",
    lead: "Curated journeys by rail, water and mountain, shaped around you." },
  { id: "winter", label: "Winter",
    title: "Winter in a different light",
    lead: "Ski and alpine journeys, shaped around you." }
];
const JOURNEY_COMPARE = {
  summer: [
    { id: "explorer", name: "Explorer", photo: "assets/chapter-explorer.jpg",
      prop: "Discover Switzerland through movement",
      route: "Lucerne \u00B7 Lungern \u00B7 Brienz \u00B7 Lauterbrunnen",
      desc: "Eight days from Lake Lucerne to the Lauterbrunnen valley, by rail, boat, e-bike and on foot. Not a cycling tour.",
      includes: ["Rail", "Boat", "E-bike", "On foot", "Selected stays", "Stimulus support"],
      quote: "\u201CThe route is fixed. The intensity is not.\u201D" },
    { id: "boutique", name: "Boutique", photo: "assets/hero-photo.jpg",
      prop: "Fewer places. More depth.",
      route: "Appenzell \u00B7 Lake Lucerne \u00B7 Zermatt \u00B7 Z\u00FCrich",
      desc: "Eight days, two nights in each place. Time with the people who know it, and no cycling between stages.",
      includes: ["Stays with character", "Local hosts", "Food and provenance", "Time on the lake", "Stimulus support"],
      quote: "\u201CStay longer. Look closer.\u201D" },
    { id: "signature", name: "Signature", photo: "assets/journeys-signature.jpg",
      prop: "Switzerland, shaped around you",
      route: "No fixed route",
      desc: "For travellers whose journey begins with their own story, not a predefined route. Your people, your interests, your occasion, your time.",
      includes: ["A journey written with you", "Private guiding", "Stays chosen for you", "Stimulus support from first conversation to last day"],
      quote: "\u201CWe don't adapt a journey to you. We write one with you.\u201D" }
  ],
  winter: [
    { id: "explorer", name: "Explorer",
      prop: "Discover Switzerland through winter movement.",
      route: "Zermatt \u00B7 7 nights",
      desc: ["One week beneath the Matterhorn, most of it on the snow, with the strongest days placed where the weather is best.",
        "Ski and snowboard are at the heart of the journey, with the intensity shaped around your level and the way you want to experience the mountains."],
      quote: "\u201CThe journey is part of the destination.\u201D",
      cta: "Discover Winter Explorer \u2192" },
    { id: "boutique", name: "Boutique",
      prop: "Discover Switzerland through its winter character.",
      route: "St. Moritz \u00B7 Zermatt",
      desc: ["Experience two of Switzerland's most distinctive Alpine worlds through their places, people, food, architecture and winter culture.",
        "A slower journey designed to understand what makes each place remarkable in winter."],
      quote: "\u201CDiscover what gives a place its character.\u201D",
      cta: "Discover Winter Boutique \u2192" },
    { id: "signature", name: "Signature",
      prop: "Winter, shaped entirely around you.",
      route: "Personal creation",
      desc: ["No fixed route. No predefined itinerary.",
        "We begin with your reason for travelling, your interests, your pace and the kind of winter you want to experience \u2014 then curate Switzerland around you."],
      quote: "\u201CA journey that could only belong to you.\u201D",
      cta: "Discover Winter Signature \u2192" }
  ]
};
/* WINTER — product paused (pilot only). Pick ONE mode; nothing else needs to change.
   "current"        = as published before rutas-v2 (Winter Explorer / Boutique / Signature pages)
   "hidden"         = no Summer | Winter selector; every ?season=winter URL falls back to summer
   "on-request"     = selector stays; Winter shows one panel that leads to the form (season=winter)
   "signature-only" = selector stays; Winter shows only Signature; Explorer/Boutique are summer-only */
const WINTER_MODE = "current";
const WINTER_ALT = {
  onRequest: { title: "Winter, shaped on request",
    lead: "Our winter journeys are not published yet. Tell us when you would like to travel and we'll shape one with you.",
    cta: "Plan a winter journey \u2192" },
  signatureOnly: { title: "Winter, shaped around you",
    lead: "Explorer and Boutique are summer journeys. In winter, every journey is written with you." }
};
const FIT = [
  { id: "explorer", want: "I want to move through Switzerland.", name: "Explorer" },
  { id: "boutique", want: "I want to understand Switzerland.", name: "Boutique" },
  { id: "signature", want: "I want Switzerland shaped around my story.", name: "Signature" }
];
const WHY = {
  eyebrow: "Why Stimulus",
  title: "We connect remarkable people to create remarkable journeys",
  intro: ["Switzerland is more than a collection of places.", "We bring together local knowledge, remarkable people and carefully chosen experiences to create journeys that go beyond the expected."],
  principles: [
    { num: "01", name: "We go beyond the obvious", text: "We look beyond the places everyone knows to find routes, stories and experiences worth travelling for." },
    { num: "02", name: "People open places", text: "Guides, hosts, makers, chefs and specialists bring Switzerland closer in ways a conventional itinerary cannot." },
    { num: "03", name: "We stay with you", text: "From the first conversation to the journey itself, Stimulus remains your point of contact." }
  ],
  brand: "Curated by us. Shaped around you.",
  cta: "Discover Stimulus"
};
const VALUES = [
  ["Meaning over more", "We measure a journey by how it felt, not by how much it contained."],
  ["Insiders, not an agency", "Local knowledge earned on the ground — the right trail, the right hour, never boastful."],
  ["Designed, not packaged", "Every journey is shaped around one traveller. Nothing is off-the-shelf."]
];
const COPY = {
  heroEyebrow: "Switzerland",
  heroTitle: ["Feel", "Switzerland"],
  heroLead: "Curated journeys shaped by locals. Discover Switzerland through its people, landscapes and stories.",
  moreEyebrow: "More than a trip",
  moreQuote: "Switzerland is more than a destination. It is a country best understood through its landscapes, its people and the stories that connect them.",
  moreBody: ["Stimulus is a network of people creating extraordinary journeys through Switzerland.", "Every journey is shaped to help you experience the country in a more personal, authentic and meaningful way."],
  journeysEyebrow: "Curated journeys",
  journeysTitle: ["Curated journeys for", "every way of travelling"],
  journeysLead: "Explorer, Boutique, Signature — three ways to experience Switzerland.",
  fitEyebrow: "Find your journey",
  fitTitle: "Which journey feels like you?",
  journeysHeroTitle: "Three ways to experience Switzerland",
  journeysPrinciple: "Curated by us. Shaped around you.",
  flexLine: "Three starting points. Never fixed packages. Every journey is shaped around you",
  escapeTitle: "Not sure which one fits you?",
  escapeBody: "Every Stimulus journey begins with a conversation.",
  escapeCta: "Start a conversation \u2192",
  placeEyebrow: "Places worth experiencing",
  placeTitle: ["Rooted in Zurich", "At home in the mountains"],
  placeBody: "We know which trail is empty at golden hour, which terrace catches the last light, and which morning the mountain shows itself. More places, after our expedition.",
  finalEyebrow: "Plan a journey",
  finalTitle: ["Ready to start?"],
  finalLead: "Tell us a little about the journey you have in mind. We'll take it from there.",
  planEyebrow: "Plan a journey",
  planTitle: ["Let's start with you"],
  planLead: "Tell us a little about the journey you have in mind. You don't need to have everything figured out \u2014 that's what we're here for.",
  aboutEyebrow: "About",
  aboutTitle: ["Our story begins", "with Switzerland"],
  aboutLead: "Stimulus is not a traditional travel agency. We connect remarkable people to create remarkable journeys. We believe travel should create understanding rather than simply ticking off destinations.",
  valuesTitle: ["Not faster. Not more", "Just better"],
  contactEyebrow: "Contact",
  contactTitle: ["Let's talk"],
  contactLead: ""
};
const EMAIL = "hi@stimulustrips.com";
Object.assign(window, { WINTER_MODE, WINTER_ALT, JOURNEYS, JOURNEY_OVERVIEW, SEASONS, JOURNEY_COMPARE, FIT, WHY, COPY, VALUES, PH, EMAIL });
