const SIGNATURE = {
  hero: {
    photo: "assets/signature-summer-hero.jpg",
    photoPos: "50% 80%",
    eyebrow: "Summer",
    journey: "Signature",
    title: "A journey that doesn't exist yet",
    lead: "No route, no fixed days, no template. Signature starts with a conversation and ends with a journey that has been written for one group of travellers only.",
    meta: ["Duration and shape defined around you.", "Pricing created around your journey"],
    cta: "Start a conversation \u2192",
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
    eyebrow: "How Signature begins",
    title: "Four conversations, one journey",
    items: [
      { num: "01", name: "We listen", text: "Who you are, why you're travelling and how you want the journey to feel." },
      { num: "02", name: "We create", text: "We design the first version of your journey." },
      { num: "03", name: "We shape it together", text: "Places, rhythm, stays and experiences evolve around you." },
      { num: "04", name: "You travel", text: "We take care of the journey from beginning to end." }
    ]
  },
  shaped: {
    title: ["Curated by us.", "Shaped around you."],
    lead: "In Signature there is no default version to depart from. Every element is a choice made together.",
    items: [
      ["Places", "Anywhere in Switzerland \u2014 and beyond when the journey calls for it."],
      ["Stays", "Hotels, private houses, mountain retreats and remarkable places to stay."],
      ["People", "Guides, chefs, historians, makers and specialists chosen for the journey."],
      ["Rhythm", "Full days, slow days and everything in between."]
    ],
    support: "\u201CThe only fixed element is that it belongs to you.\u201D"
  },
  pricing: {
    eyebrow: "Signature",
    /* Signature is created individually — no starting price is shown. */
    amount: "",
    headline: "Pricing created around your journey",
    meta: "Duration and shape defined around you.",
    note: "Every Signature journey is created individually. Pricing reflects the duration, accommodation and experiences we design around you.",
    cta: "Start a conversation \u2192"
  },
  final: {
    title: "A journey that could only belong to you.",
    body: "We create the journey around why you are travelling, how you want the days to feel, and the people and places that can make it extraordinary.",
    cta: "Start a conversation \u2192",
    support: "Every Stimulus journey begins with a conversation."
  }
};
Object.assign(window, { SIGNATURE });
