const BOUTIQUE_CONTENT = {
  summer: {
    hero: {
      photo: "assets/hero-photo.jpg",
      photoPos: "50% 50%",
      photoPosMobile: "62% 50%",
      eyebrow: "Summer",
      journey: "Boutique",
      tag: "Sample journey \u00B7 Shaped with you",
      title: "Fewer places. More depth.",
      lead: "Two nights in Appenzell, two on Lake Lucerne, two in Zermatt and a last night in Zürich. Time to stay, and to meet the people who know each place.",
      meta: ["8 days · 7 nights", "Pricing shaped around your journey"],
      cta: "Plan my Boutique journey →",
      quote: "“Stay longer. Look closer.”"
    },
    journey: {
      eyebrow: "The places",
      title: "Three places, two nights each",
      stops: ["Zürich", "Appenzell", "Lake Lucerne", "Zermatt", "Zürich"],
      nights: ["Arrival", "2 nights", "2 nights", "2 nights", "1 night"],
      legs: ["travel", "travel", "travel", "travel"],
      duration: "8 days · 7 nights",
      modes: "Rail · Road · Lake · On foot",
      note: "No cycling between places. The stays, the encounters and the time in each place are shaped around what interests you most."
    },
    stages: [
      { place: "Appenzell", meta: "2 nights", text: "People and tradition. Someone shows you their Switzerland." },
      { place: "Lake Lucerne", meta: "2 nights", text: "Water and stillness. Unhurried hours on the lake with someone who knows it." },
      { place: "Zermatt", meta: "2 nights", text: "The high Alps. The people who live beneath the mountain." },
      { place: "Zürich", meta: "1 night", text: "Back to contemporary Switzerland. A quiet last evening." }
    ],
    shaped: {
      title: ["Curated by us.", "Shaped around you."],
      lead: "The places are curated. What you do in each one is yours to choose.",
      items: [
        ["Your days", "A morning with a host. An afternoon left open."],
        ["Your stays", "Chosen for character and for the people who run them."],
        ["Your table", "Where food comes from, and who makes it."],
        ["Your pace", "A long walk or a long lunch. Nothing is programmed by the hour."]
      ],
      support: "Stay longer. Look closer."
    },
    conversion: {
      eyebrow: "Boutique",
      duration: "8 days · 7 nights",
      included: "Accommodation · Breakfast · Travel between places · Selected local encounters · Restaurant reservations · Journey planning · Stimulus support during the journey",
      amount: "",
      headline: "Pricing shaped around your journey",
      note: "Final pricing depends on travel dates, accommodation and the experiences we shape around you.",
      cta: "Plan my Boutique journey →",
      support: "Every Stimulus journey begins with a conversation.",
      notIncluded: "Not included: flights, most lunches and dinners, travel insurance and personal expenses."
    },
    final: {
      title: "Tell us what draws you to Switzerland.",
      body: "The places, the food, the people, the mountains. We'll shape the journey around what matters to you.",
      cta: "Plan my Boutique journey →",
      support: "Every Stimulus journey begins with a conversation."
    }
  },
  winter: {
    hero: {
      photo: "assets/winter-boutique-hero.jpg",
      photoPos: "0% 50%",
      photoPosMobile: "72% 50%",
      align: "center",
      eyebrow: "Winter",
      journey: "Boutique",
      tag: "Sample journey \u00B7 Shaped with you",
      title: "Discover Switzerland through its winter character.",
      lead: "Travel between two of Switzerland's most distinctive Alpine worlds and discover them through the people, places, food, architecture and traditions that give each one its character.",
      meta: ["8 days \u00B7 7 nights", "Pricing shaped around your journey"],
      cta: "Plan my Boutique journey \u2192",
      quote: "\u201CDiscover what gives a place its character.\u201D"
    },
    idea: {
      title: ["Winter looks different", "when you stay long enough to understand it."],
      body: [
        "Swiss winter is more than snow.",
        "It lives in the architecture of Alpine villages, in hotel traditions, local food, mountain culture and the people who have shaped these places over generations.",
        "Boutique slows the journey down.",
        "Rather than simply passing through remarkable destinations, we create the time and context to understand what makes them distinctive."
      ]
    },
    route: {
      eyebrow: "The places",
      title: ["Two Alpine worlds.", "Two distinct characters."],
      stops: ["Z\u00FCrich", "St. Moritz", "Zermatt", "Z\u00FCrich"],
      legs: ["rail", "rail", "rail"],
      duration: "8 days \u00B7 7 nights",
      modes: "Culture \u00B7 Gastronomy \u00B7 Architecture \u00B7 People",
      note: "This is our reference Winter Boutique journey. The experiences, accommodation and emphasis can be shaped around what interests you most."
    },
    moments: [
      { num: "01", title: "Discover the winter culture of the Engadin.", text: "Experience St. Moritz and the surrounding Engadin through the traditions, architecture and people that have shaped its relationship with winter.", photo: "assets/winter-boutique-engadin.jpg" },
      { num: "02", title: "Look beyond St. Moritz.", text: "Move beyond the resort itself and discover the villages, food, local culture and details that give the Engadin its distinctive identity.", photo: "assets/winter-boutique-stmoritz.jpg" },
      { num: "03", title: "Cross from one Alpine world to another.", text: "Travel from St. Moritz towards Zermatt and experience the changing landscapes and character of Switzerland along the way.", photo: "assets/winter-boutique-rail.jpg" },
      { num: "04", title: "Discover a village shaped by a mountain.", text: "Experience Zermatt through its relationship with the Matterhorn \u2014 its village, architecture, gastronomy, traditions and people.", photo: "assets/winter-boutique-zermatt.jpg" }
    ],
    statement: "Winter looks different when you stay long enough to understand it.",
    stages: [
      { place: "Z\u00FCrich", meta: "1 night", text: "Arrive in Switzerland and begin the journey at an unhurried pace." },
      { place: "St. Moritz / Engadin", meta: "3 nights", text: "Discover the traditions, architecture and people that shaped the region's relationship with winter." },
      { place: "Zermatt", meta: "3 nights", text: "A village shaped by the Matterhorn \u2014 its architecture, gastronomy and mountain culture." }
    ],
    daysHeading: "Eight days, one closer look",
    days: [
      { num: "01", route: "Z\u00FCrich", title: "A quiet beginning.", text: "Arrive in Switzerland and begin the journey at an unhurried pace." },
      { num: "02", route: "Z\u00FCrich \u2192 St. Moritz", title: "Into the Engadin.", text: "Travel towards one of Switzerland's most distinctive Alpine regions." },
      { num: "03", route: "St. Moritz / Engadin", title: "Winter culture.", text: "Discover the people, architecture, hospitality and traditions that have shaped the region." },
      { num: "04", route: "Engadin", title: "Look closer.", text: "Spend another day exploring beyond the obvious, shaped around your interests \u2014 from gastronomy and design to local culture and mountain life." },
      { num: "05", route: "St. Moritz \u2192 Zermatt", title: "Across Switzerland.", text: "Travel from one Alpine world to another as the landscape and character of the country change around you." },
      { num: "06", route: "Zermatt", title: "A village shaped by the Matterhorn.", text: "Discover the relationship between the mountain, the village and the people who live beneath it." },
      { num: "07", route: "Zermatt", title: "Your perspective.", text: "A second day shaped around what interests you most: gastronomy, architecture, mountain culture, local encounters or a day on the snow." },
      { num: "08", route: "Zermatt \u2192 Z\u00FCrich", title: "Full circle.", text: "Return to Z\u00FCrich and bring the journey to a close." }
    ],
    shaped: {
      title: ["Curated by us.", "Shaped around you."],
      lead: "Boutique begins with a carefully selected route, but what you discover along the way depends on what draws you to a place.",
      items: [
        ["Your interests", "Architecture, gastronomy, design, craftsmanship and local culture."],
        ["Your people", "Meet selected local hosts and people connected to the places you visit."],
        ["Your pace", "Stay longer where you want to look closer."],
        ["Your stays", "Accommodation selected for character and experience."]
      ],
      closing: "Stay longer. Look closer."
    },
    included: {
      title: "A journey like this can include",
      items: [
        "7 nights in carefully selected accommodation",
        "Breakfast",
        "Rail transport throughout the reference journey",
        "Panoramic rail experience where applicable",
        "Selected local encounters and experiences",
        "Included admissions where part of a curated experience",
        "Required reservations",
        "Stimulus journey planning and curation",
        "Selected restaurant and place recommendations",
        "Digital itinerary and practical travel information",
        "Stimulus support during the journey"
      ],
      notIncluded: "Flights, most lunches and dinners, travel insurance, ski passes, ski equipment and optional experiences unless specifically included."
    },
    price: {
      eyebrow: "Boutique",
      amount: "",
      headline: "Pricing shaped around your journey",
      meta: "8 days \u00B7 7 nights",
      note: "Final pricing depends on travel dates, accommodation and the experiences we shape around you.",
      cta: "Start a conversation \u2192"
    },
    final: {
      title: "Ready to discover Swiss winter differently?",
      body: "Tell us what draws you to Switzerland \u2014 the places, food, architecture, people or culture. We'll shape the journey around what matters to you.",
      cta: "Plan my Boutique journey \u2192",
      support: "Every Stimulus journey begins with a conversation."
    }
  }
};
const BOUTIQUE = BOUTIQUE_CONTENT.summer;
Object.assign(window, { BOUTIQUE, BOUTIQUE_CONTENT });
