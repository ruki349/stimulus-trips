const EXPLORER = {
  hero: {
    photo: "assets/chapter-explorer.jpg",
    eyebrow: "Explorer",
    title: "Discover Switzerland through movement",
    lead: "Travel across the country by rail, e-bike, ferry and mountain railway, following carefully curated routes where the journey itself becomes part of the experience.",
    meta: ["8 days \u00B7 7 nights", "From CHF 3,690 per person"],
    cta: "Plan my Explorer journey \u2192",
    quote: "\u201CThe journey is part of the destination\u201D"
  },
  journey: {
    eyebrow: "The route",
    title: "The Explorer journey",
    stops: ["Z\u00FCrich", "St. Moritz", "Chur", "Disentis", "Andermatt", "Lucerne", "Z\u00FCrich"],
    legs: ["rail", "rail", "bike", "bike", "water", "rail"],
    duration: "8 days \u00B7 7 nights",
    modes: "Rail \u00B7 Panoramic rail \u00B7 E-bike \u00B7 Ferry",
    note: "This is our reference Explorer journey. The pace, stays and individual stages are shaped around you.",
    highlights: [
      ["Engadin", "Above the lakes"],
      ["Graub\u00FCnden", "Cross by panoramic rail"],
      ["Rhine Valley", "Follow the river by e-bike"],
      ["Oberalp", "Cross the Alps"],
      ["Lake Lucerne", "Arrive by water"]
    ]
  },
  moments: [
    { num: "01", title: "Cross Graub\u00FCnden by rail", text: "Panoramic rail through one of Switzerland's defining railway landscapes.", photo: "assets/moment-rhaetian-rail.jpg" },
    { num: "02", title: "Follow the Rhine", text: "Leave Chur by e-bike and move deeper into the Alps.", photo: "assets/moment-rhine-ebike.jpg" },
    { num: "03", title: "From the Alps to the lake", text: "Cross the Oberalp before reaching Lake Lucerne and changing rhythm completely.", photo: "assets/moment-lake-boat.jpg" }
  ],
  shaped: {
    title: ["Curated by us", "Shaped around you"],
    lead: "Explorer has a carefully curated foundation, but it isn't a rigid itinerary.",
    items: [
      ["Pace", "Longer or shorter, at your rhythm."],
      ["Cycling", "Full stages, or combined with rail."],
      ["Stays", "Chosen to match your preferences."],
      ["Experiences", "Gastronomy, culture or mountain moments."]
    ],
    support: "We shape the emphasis around how you want to travel."
  },
  conversion: {
    eyebrow: "Your Explorer",
    duration: "8 days \u00B7 7 nights",
    included: "Accommodation \u00B7 Breakfast \u00B7 Rail \u00B7 Panoramic rail \u00B7 E-bike \u00B7 Luggage transfers \u00B7 Ferry \u00B7 Journey planning \u00B7 Stimulus support",
    amount: "From CHF 3,690 per person",
    basis: "Based on two travellers sharing.",
    cta: "Plan my Explorer journey \u2192",
    support: "Every Stimulus journey begins with a conversation.",
    notIncluded: "Not included: flights, most lunches and dinners, travel insurance and personal expenses."
  }
};
Object.assign(window, { EXPLORER });
