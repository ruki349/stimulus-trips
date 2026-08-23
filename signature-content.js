const SIGNATURE = {
  hero: {
    photo: "assets/hero-photo.jpg",
    eyebrow: "Signature",
    title: "A journey that doesn't exist yet",
    lead: "No route, no fixed days, no template. Signature starts with a conversation and ends with a journey that has been written for one group of travellers only.",
    meta: ["Length defined by you", "From CHF 6,200 per person"],
    cta: "Start a Signature journey \u2192",
    quote: "\u201CWe don't adapt a journey to you. We write one with you\u201D"
  },
  idea: {
    title: ["Don't choose a journey", "Create one"],
    body: [
      "Explorer begins with a route. Boutique begins with a collection of places. Signature begins with you.",
      "We create the journey around why you are travelling, how you want the days to feel, and the people and places that can make it extraordinary."
    ]
  },
  steps: {
    eyebrow: "How it works",
    title: "Four conversations, one journey",
    items: [
      { num: "01", name: "We listen", text: "Who you are, why you're travelling and how you want the journey to feel." },
      { num: "02", name: "We create", text: "We design the first version of your journey." },
      { num: "03", name: "We shape it together", text: "Places, rhythm, stays and experiences evolve around you." },
      { num: "04", name: "You travel", text: "We take care of the journey from beginning to end." }
    ]
  },
  shaped: {
    title: ["Nothing is standard", "Everything is decided"],
    lead: "In Signature there is no default version to depart from. Every element is a choice made together.",
    items: [
      ["Places", "Anywhere in Switzerland \u2014 and beyond when the journey calls for it."],
      ["Stays", "Hotels, private houses, mountain retreats and remarkable places to stay."],
      ["People", "Guides, chefs, historians, makers and specialists chosen for the journey."],
      ["Rhythm", "Full days, slow days and everything in between."]
    ],
    support: "\u201CThe only fixed element is that it belongs to you.\u201D"
  },
  conversion: {
    eyebrow: "Signature journeys",
    duration: "Length and shape defined by you",
    included: "Journey design \u00B7 Accommodation \u00B7 Transportation \u00B7 Private guides and specialists \u00B7 Experiences and reservations \u00B7 Stimulus support throughout",
    amount: "From CHF 6,200 per person",
    basis: "Based on two travellers sharing a room.",
    note: "The final price depends on the journey we create together.",
    cta: "Start a Signature journey \u2192",
    support: "Every Stimulus journey begins with a conversation.",
    notIncluded: "Not included: flights, travel insurance and personal expenses."
  }
};
Object.assign(window, { SIGNATURE });
