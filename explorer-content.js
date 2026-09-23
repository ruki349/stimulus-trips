const EXPLORER_CONTENT = {
  summer: {
    hero: {
      photo: "assets/chapter-explorer.jpg",
      eyebrow: "Summer",
      journey: "Explorer",
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
    stages: [
      { place: "Engadin", text: "Above the lakes." },
      { place: "Graub\u00FCnden", text: "Cross by panoramic rail." },
      { place: "Rhine Valley", text: "Follow the river by e-bike." },
      { place: "Oberalp", text: "Cross the Alps." },
      { place: "Lake Lucerne", text: "Arrive by water." }
    ],
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
      eyebrow: "Explorer",
      duration: "8 days \u00B7 7 nights",
      included: "Accommodation \u00B7 Breakfast \u00B7 Rail \u00B7 Panoramic rail \u00B7 E-bike \u00B7 Luggage transfers \u00B7 Ferry \u00B7 Journey planning \u00B7 Stimulus support",
      amount: "From CHF 3,690 per person",
      basis: "Based on two travellers sharing.",
      note: "Final pricing depends on travel dates, accommodation and how we shape the journey around you.",
      cta: "Plan my Explorer journey \u2192",
      support: "Every Stimulus journey begins with a conversation.",
      notIncluded: "Not included: flights, most lunches and dinners, travel insurance and personal expenses."
    },
    final: {
      title: "Ready to experience Switzerland differently?",
      body: "Tell us when you're travelling, what draws you to Switzerland and how you like to move.",
      cta: "Plan my Explorer journey \u2192",
      support: "Every Stimulus journey begins with a conversation."
    }
  },
  winter: {
    hero: {
      photo: "assets/winter-explorer-hero.jpg",
      photoPos: "30% 100%",
      eyebrow: "Winter",
      journey: "Explorer",
      title: "Discover Switzerland through winter movement.",
      lead: "Two mountain regions, four days on the snow and one continuous journey through the Swiss Alps, with the intensity shaped around your level and the way you want to experience the mountains.",
      meta: ["9 days \u00B7 8 nights", "From CHF 4,990 per person"],
      cta: "Plan your Explorer journey \u2192",
      quote: "\u201CThe journey is part of the destination.\u201D"
    },
    idea: {
      title: ["Winter isn't something to watch.", "It's something to move through."],
      body: [
        "Explorer brings together days on the mountain with the railway journeys that connect them.",
        "From the Matterhorn to Andermatt and onward towards Lake Lucerne, the landscape changes while the journey continues.",
        "Some days are spent on skis or a snowboard. Others are spent crossing the Alps by rail.",
        "The result is not a ski holiday in one resort. It is a journey through Swiss winter."
      ]
    },
    route: {
      eyebrow: "The route",
      title: ["Two mountains.", "One continuous journey."],
      stops: ["Z\u00FCrich", "Zermatt", "Andermatt", "Lucerne", "Z\u00FCrich"],
      legs: ["rail", "rail", "rail", "rail"],
      duration: "9 days \u00B7 8 nights",
      modes: "Ski \u00B7 Snowboard \u00B7 Alpine rail",
      note: "This is our reference Winter Explorer journey. Ski intensity, accommodation and selected experiences can be shaped around you."
    },
    moments: [
      { num: "01", title: "Ski beneath the Matterhorn.", text: "Spend two full days experiencing Zermatt's winter landscape on skis or snowboard.", photo: "assets/winter-moment-zermatt.jpg" },
      { num: "02", title: "Cross the Alps by rail.", text: "Leave Zermatt behind and continue through the mountains towards Andermatt. The transfer remains part of the experience.", photo: "assets/winter-moment-rail.jpg" },
      { num: "03", title: "Discover a different mountain.", text: "Spend two more days on the snow in Andermatt, adapted around your level and preferred intensity.", photo: "assets/winter-moment-andermatt.jpg" },
      { num: "04", title: "Leave the snow behind.", text: "Travel from Andermatt towards Lucerne and finish the journey beside the lake, slowing the rhythm before returning to Z\u00FCrich.", photo: "assets/winter-moment-lucerne.jpg" }
    ],
    statement: "Winter isn't something to watch. It's something to move through.",
    stages: [
      { place: "Zermatt", meta: "3 nights", text: "Two full days on skis or snowboard beneath the Matterhorn." },
      { place: "Andermatt", meta: "3 nights", text: "Two more days on the snow in a different Alpine environment." },
      { place: "Lucerne", meta: "2 nights", text: "Leave the mountains behind and slow the rhythm beside the lake." }
    ],
    daysHeading: "Nine days, one continuous movement",
    days: [
      { num: "01", route: "Z\u00FCrich \u2192 Zermatt", title: "Entering the mountains.", text: "Travel from Z\u00FCrich towards Zermatt and settle into the first Alpine base." },
      { num: "02", route: "Zermatt", title: "On the snow.", text: "First full ski or snowboard day." },
      { num: "03", route: "Zermatt", title: "Another day. Your intensity.", text: "A second full mountain day shaped around your level and preferred terrain." },
      { num: "04", route: "Zermatt \u2192 Andermatt", title: "Across the Alps.", text: "Leave one mountain world behind and travel through Switzerland towards Andermatt." },
      { num: "05", route: "Andermatt", title: "A different mountain.", text: "First full day skiing or snowboarding in Andermatt." },
      { num: "06", route: "Andermatt", title: "Your second day on the snow.", text: "Continue independently or add instruction or specialist guidance where appropriate." },
      { num: "07", route: "Andermatt \u2192 Lucerne", title: "Slow the rhythm.", text: "Leave the mountains and travel towards the lake." },
      { num: "08", route: "Lucerne", title: "A day away from the slopes.", text: "Experience Lucerne and the lake at your own pace." },
      { num: "09", route: "Lucerne \u2192 Z\u00FCrich", title: "Full circle.", text: "Return to Z\u00FCrich and bring the journey full circle." }
    ],
    shaped: {
      title: ["Curated by us.", "Shaped around you."],
      lead: "Winter Explorer has a carefully curated route, but the intensity is personal.",
      items: [
        ["Your level", "Beginner to advanced."],
        ["Your sport", "Ski or snowboard."],
        ["Your pace", "More or fewer days on the snow."],
        ["Your stay", "Accommodation selected around you."]
      ],
      closing: "The route is curated. The intensity is not."
    },
    included: {
      title: "The journey, taken care of.",
      items: [
        "8 nights in carefully selected accommodation",
        "Breakfast",
        "Rail transport throughout the reference journey",
        "2-day ski pass in Zermatt",
        "2-day ski pass in Andermatt",
        "Ski or snowboard equipment rental for the included snow days",
        "Boots and helmet",
        "Luggage logistics between key stages",
        "Required reservations for included elements",
        "Stimulus journey planning and curation",
        "Digital itinerary and practical travel information",
        "Selected recommendations along the route",
        "Stimulus support during the journey"
      ],
      notIncluded: "Flights, most lunches and dinners, travel insurance, technical clothing, private lessons, mountain guides and optional experiences unless specifically included."
    },
    price: {
      eyebrow: "Explorer",
      amount: "From CHF 4,990 per person",
      meta: "9 days \u00B7 8 nights",
      basis: "Based on two travellers sharing a room.",
      note: "Final pricing depends on travel dates, accommodation, equipment and how we shape the journey around you.",
      cta: "Plan my Explorer journey \u2192"
    },
    final: {
      title: "Ready to experience Swiss winter differently?",
      body: "Tell us when you're travelling, your snow-sport level and how you want to experience the mountains. We'll shape the journey from there.",
      cta: "Plan my Explorer journey \u2192",
      support: "Every Stimulus journey begins with a conversation."
    }
  }
};
const EXPLORER = EXPLORER_CONTENT.summer;
Object.assign(window, { EXPLORER, EXPLORER_CONTENT });
