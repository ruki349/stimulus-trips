const EXPLORER_CONTENT = {
  summer: {
    hero: {
      photo: "assets/chapter-explorer.jpg",
      eyebrow: "Summer",
      journey: "Explorer",
      tag: "Sample journey \u00B7 Shaped with you",
      title: "Discover Switzerland through movement",
      lead: "Eight days from Lake Lucerne to the Lauterbrunnen valley, by rail, boat, e-bike and on foot. The way between places is part of the journey.",
      meta: ["8 days · 7 nights", "Pricing shaped around your journey"],
      cta: "Plan my Explorer journey →",
      quote: "“The route is fixed. The intensity is not.”"
    },
    journey: {
      eyebrow: "The route",
      title: "Lake to valley",
      stops: ["Zürich", "Lucerne", "Lungern", "Brienz", "Lauterbrunnen", "Zürich"],
      nights: ["Arrival", "1 night", "1 night", "2 nights", "2 nights", "1 night"],
      legs: ["rail", "move", "move", "move", "rail"],
      duration: "8 days · 7 nights",
      modes: "Rail · Boat · E-bike · On foot",
      requirements: "Moderate fitness. Some stages by e-bike; full requirements are shared with your proposal.",
      note: "Not a cycling tour. The route is the same for everyone. How much of it you ride, walk or travel by rail and boat is shaped around you."
    },
    stages: [
      { place: "Lucerne", meta: "1 night", text: "The journey begins. An evening by the lake, at your own pace." },
      { place: "Lungern", meta: "1 night", text: "The first day in motion. A village above the lake, and the people who live from the land." },
      { place: "Brienz", meta: "2 nights", text: "Over the Brünig into the Bernese Oberland. Then a day on the lake with nothing fixed." },
      { place: "Lauterbrunnen", meta: "2 nights", text: "Arrive in the valley of waterfalls. A morning with someone who knows the alps." },
      { place: "Zürich", meta: "1 night", text: "A last morning in the mountains. A quiet evening in the city." }
    ],
    shaped: {
      title: ["Curated by us.", "Shaped around you."],
      lead: "Everyone travels the same route. No two people travel it the same way.",
      items: [
        ["Movement", "More riding, or more rail and boat. Decided with you before you leave."],
        ["Rhythm", "Days in motion, and days when nothing needs to happen."],
        ["Stays", "An old town, a village, a lakeshore, a valley. Each night feels like the place."],
        ["People", "A few encounters that matter, not a visit every day."]
      ],
      support: "The route is fixed. The intensity is not."
    },
    conversion: {
      eyebrow: "Explorer",
      duration: "8 days · 7 nights",
      included: "Accommodation · Breakfast · Rail and boat between stages · E-bike for the riding stages · Selected local encounters · Journey planning · Stimulus support during the journey",
      amount: "",
      headline: "Pricing shaped around your journey",
      note: "Final pricing depends on travel dates, accommodation and how we shape the journey around you.",
      cta: "Plan my Explorer journey →",
      support: "Every Stimulus journey begins with a conversation.",
      notIncluded: "Not included: flights, most lunches and dinners, travel insurance and personal expenses."
    },
    final: {
      title: "Tell us how you like to move.",
      body: "When you're travelling, who is coming and how active you want the days to be. We'll shape the route from there.",
      cta: "Plan my Explorer journey →",
      support: "Every Stimulus journey begins with a conversation."
    }
  },
  winter: {
    hero: {
      photo: "assets/winter-explorer-hero.jpg",
      photoPos: "30% 100%",
      eyebrow: "Winter",
      journey: "Explorer",
      tag: "Sample journey \u00B7 Shaped with you",
      title: "Discover Switzerland through winter movement.",
      lead: "Seven nights in Zermatt, most of them spent on the mountain. The days on snow follow the weather, the intensity follows you, and the rest of the week belongs to the village and the people who live beneath the Matterhorn.",
      meta: ["8 days \u00B7 7 nights", "Pricing shaped around your journey"],
      cta: "Plan your Explorer journey \u2192",
      quote: "\u201CThe place is fixed. The intensity is not.\u201D"
    },
    idea: {
      title: ["Winter isn't something to watch.", "It's something to move through."],
      body: [
        "Explorer is built around time on the mountain: around four of every five hours you spend in Zermatt are meant for the snow.",
        "We don't fix which day is the big day. The strongest mountain days go where the weather is best.",
        "Skiing is at the centre, but it is not the only way through the week. Non-skiers travel the same journey with their own winter days.",
        "It is not a hotel and a lift pass. It is one week of Swiss winter, prepared around you."
      ]
    },
    route: {
      eyebrow: "The route",
      title: ["One mountain.", "Many ways to live winter."],
      stops: ["Z\u00FCrich", "Zermatt", "Z\u00FCrich"],
      legs: ["rail", "rail"],
      duration: "8 days \u00B7 7 nights",
      modes: "Ski \u00B7 Snowboard \u00B7 Winter walking \u00B7 Alpine rail",
      note: "This is our reference Winter Explorer journey. Ski days, pace and stay are shaped around you."
    },
    moments: [
      { num: "01", title: "Find your level on day one.", text: "Your first morning on the snow is with a local instructor who learns how you ski and helps us shape the rest of the week.", photo: "assets/winter-moment-zermatt.jpg" },
      { num: "02", title: "The mountain on its best days.", text: "The strongest days are placed where the weather and snow are best, not where a calendar puts them.", photo: "assets/winter-moment-rail.jpg" },
      { num: "03", title: "Zermatt beyond the slopes.", text: "An evening with people who live beneath the mountain, and time in the village at your own pace.", photo: "assets/winter-moment-andermatt.jpg" },
      { num: "04", title: "A week that adapts.", text: "Snowfall, wind or closed lifts change the plan, not the quality of the week. Every day has a prepared alternative.", photo: "assets/winter-moment-lucerne.jpg" }
    ],
    statement: "The place is fixed. The intensity is not.",
    stages: [
      { place: "Arrive and find your level", meta: "Days 1\u20132", text: "Arrival, equipment fitting and a first morning on the snow with a local instructor." },
      { place: "On the mountain", meta: "Days 3\u20136", text: "Four days on skis or snowboard. The strongest days follow the best weather, with one slower afternoon in the village." },
      { place: "Close the week", meta: "Days 7\u20138", text: "A last morning on the snow or a quiet one, a final table, and the train home." }
    ],
    daysHeading: "Eight days beneath the Matterhorn",
    days: [
      { num: "01", route: "Z\u00FCrich \u2192 Zermatt", title: "Arrive.", text: "Travel by rail to Zermatt, settle in, collect your equipment and find the village." },
      { num: "02", route: "Zermatt", title: "Find your level.", text: "A morning with a local instructor, then the afternoon on the mountain at your own pace." },
      { num: "03", route: "Zermatt", title: "A mountain window.", text: "A full day on the snow, placed on the best day of the week." },
      { num: "04", route: "Zermatt", title: "Snow, then slow.", text: "Morning on the slopes, afternoon in the village and an evening with local people." },
      { num: "05", route: "Zermatt", title: "Your day.", text: "Ski, snowshoe, a winter walk, or nothing at all." },
      { num: "06", route: "Zermatt", title: "A second mountain window.", text: "Another strong day on the snow, on different terrain from the first." },
      { num: "07", route: "Zermatt", title: "Close.", text: "A last morning on the mountain or a quiet one, and a final table." },
      { num: "08", route: "Zermatt \u2192 Z\u00FCrich", title: "Depart.", text: "Rail back to Z\u00FCrich, timed around your onward travel." }
    ],
    shaped: {
      title: ["Curated by us.", "Shaped around you."],
      lead: "Winter Explorer has a fixed place and a clear rhythm, but the intensity is personal.",
      items: [
        ["Your level", "Confident beginner to advanced."],
        ["Your sport", "Ski or snowboard."],
        ["Your group", "Skiers and non-skiers travel together."],
        ["Your equipment", "Rent with us or bring your own."]
      ],
      closing: "The place is fixed. The intensity is not."
    },
    included: {
      title: "A journey like this can include",
      items: [
        "7 nights in carefully selected accommodation in Zermatt",
        "Breakfast",
        "Rail from and to Z\u00FCrich",
        "Zermatt ski pass for your days on the snow",
        "Ski or snowboard rental, boots and helmet (deducted if you bring your own)",
        "A morning with a local instructor on your first day",
        "Winter walking or snowshoe alternatives for non-skiers",
        "One evening with local people",
        "Weather alternatives prepared for every day",
        "Stimulus journey planning and curation",
        "Digital itinerary and practical travel information",
        "Stimulus support during the journey"
      ],
      notIncluded: "Flights, most lunches and dinners, travel insurance, technical clothing, additional lessons, mountain guides, off-piste and optional experiences unless specifically included."
    },
    price: {
      eyebrow: "Explorer",
      amount: "",
      headline: "Pricing shaped around your journey",
      meta: "8 days \u00B7 7 nights",
      note: "Final pricing depends on travel dates, accommodation, equipment and how we shape the journey around you.",
      cta: "Plan my Explorer journey \u2192"
    },
    final: {
      title: "Ready to experience Swiss winter differently?",
      body: "Tell us when you're travelling, your snow-sport level and who is coming with you. We'll shape the week from there.",
      cta: "Plan my Explorer journey \u2192",
      support: "Every Stimulus journey begins with a conversation."
    }
  }
};
const EXPLORER = EXPLORER_CONTENT.summer;
Object.assign(window, { EXPLORER, EXPLORER_CONTENT });
