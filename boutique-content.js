const BOUTIQUE = {
  hero: {
    photo: "assets/chapter-boutique.jpg",
    eyebrow: "Boutique",
    title: "Discover Switzerland through its character",
    lead: "Stay longer in four places with genuinely different characters \u2014 an Alpine valley, a city of collectors, a lakeside town and a working metropolis \u2014 and look closer at what makes each one itself.",
    meta: ["7 days \u00B7 6 nights", "From CHF 4,480 per person"],
    cta: "Plan my Boutique journey \u2192",
    quote: "\u201CDiscover what gives a place its character\u201D"
  },
  journey: {
    eyebrow: "The places",
    title: "The Boutique journey",
    stops: ["Z\u00FCrich", "St. Moritz", "Basel", "Lucerne", "Z\u00FCrich"],
    legs: ["rail", "rail", "rail", "rail"],
    duration: "7 days \u00B7 6 nights",
    modes: "Rail \u00B7 On foot \u00B7 Lake boat",
    note: "This is our reference Boutique journey. The places, the encounters and the time spent in each are shaped around what interests you most.",
    highlights: [
      ["Z\u00FCrich", "Contemporary Switzerland"],
      ["Engadin", "Alpine light and craft"],
      ["Basel", "Art, architecture and the Rhine"],
      ["Lucerne", "Lake, old town and water"]
    ]
  },
  moments: [
    { num: "01", title: "The light of the Engadin", text: "Sgraffito houses, a mountain studio, and the lakes that made this valley what it is.", photo: "assets/moment-engadin-light.jpg" },
    { num: "02", title: "Makers in Z\u00FCrich", text: "Workshops, roasters and small kitchens behind the banks and the lake.", photo: "assets/moment-makers-kitchen.jpg" },
    { num: "03", title: "Art and architecture in Basel", text: "Contemporary architecture and a world-class collection on the edge of the city.", photo: "assets/moment-basel-art.jpg" }
  ],
  shaped: {
    title: ["Curated by us", "Shaped around you"],
    lead: "Boutique has a carefully curated foundation, but the emphasis is yours to choose.",
    items: [
      ["Pace", "Stay longer in one place, or move at a fuller rhythm."],
      ["Stays", "From design hotels to historic and family-run houses."],
      ["Gastronomy", "Chef's tables, markets, producers and wine."],
      ["Experiences", "More time with makers, curators and guides."]
    ],
    support: "We shape the emphasis around how you want to travel."
  },
  conversion: {
    eyebrow: "Your Boutique",
    duration: "7 days \u00B7 6 nights",
    included: "Accommodation \u00B7 Breakfast \u00B7 Rail \u00B7 Private transfers \u00B7 Guided art and architecture morning \u00B7 Lake crossing \u00B7 Maker encounters \u00B7 Restaurant reservations \u00B7 Journey planning \u00B7 Stimulus support",
    amount: "From CHF 4,480 per person",
    basis: "Based on two travellers sharing.",
    cta: "Plan my Boutique journey \u2192",
    support: "Every Stimulus journey begins with a conversation.",
    notIncluded: "Not included: flights, most lunches and dinners, travel insurance and personal expenses."
  }
};
Object.assign(window, { BOUTIQUE });
