function PageIntro({ eyebrow, title, lead }) {
  return React.createElement("section", { style: { padding: "clamp(56px,8vw,104px) 0 8px" } }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 880 } },
      React.createElement(Eyebrow, null, eyebrow),
      React.createElement("h1", { className: "st-section-title" }, lines(title)),
      lead && React.createElement("p", { className: "st-lead", style: { marginTop: 8, maxWidth: 720 } }, lead))));
}

function HomePage({ c, onNav }) {
  return React.createElement(React.Fragment, null,
    React.createElement(Hero, { c, onNav }),
    React.createElement(MeaningBand, { c }),
    React.createElement(WhyStimulus, { onNav }),
    React.createElement(Spotlight, { c }),
    React.createElement(CTABand, { eyebrow: c.finalEyebrow, title: c.finalTitle, lead: c.finalLead, cta: "Plan a journey \u2192", onClick: () => onNav("plan"), dark: true }));
}

function PlanPage({ c, journey }) {
  const [sent, setSent] = React.useState(PREVIEW_THANKS);
  return React.createElement(React.Fragment, null,
    !sent && React.createElement(PageIntro, { eyebrow: c.planEyebrow, title: c.planTitle, lead: c.planLead }),
    !sent && React.createElement(PlanSteps, null),
    React.createElement(PlanForm, { journey, sent, onSent: () => setSent(true) }));
}

function JourneysIntro({ c }) {
  return React.createElement("section", { style: { padding: "clamp(56px,8vw,96px) 0 0" } }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 820 } },
      React.createElement(Eyebrow, null, "Curated journeys"),
      React.createElement("h1", { className: "st-section-title" }, c.journeysHeroTitle),
      React.createElement("p", { className: "st-principle" }, c.journeysPrinciple))));
}

function JourneysPage({ c, onNav }) {
  return React.createElement(React.Fragment, null,
    React.createElement(JourneysIntro, { c }),
    React.createElement(JourneyOverview, { journeys: JOURNEY_OVERVIEW, onNav }),
    React.createElement(JourneyFit, { c, onNav }),
    React.createElement(FlexLine, { c }),
    React.createElement(EscapeBand, { c, onNav }));
}

const ABOUT_STEPS = [
  ["01", "We go there.", "We experience the places, routes and connections ourselves before they enter a journey."],
  ["02", "We build the right network.", "Guides, hosts, makers, hoteliers, chefs and specialists bring local knowledge, context and access."],
  ["03", "We connect the journey.", "Stimulus brings everything together \u2014 route, rhythm, stays, people and experiences \u2014 around the traveller."]
];

const FOUNDER_STORY = [
  "Switzerland was part of my life before it was part of my work. My mother is Swiss, I went to the Swiss School in Barcelona, and holidays meant my grandparents\u2019 farm. At twenty I spent my first winter in Grindelwald. Since then I\u2019ve lived, studied and worked across Grindelwald, Andermatt, Zermatt, Lucerne and Basel. Today I live in the Z\u00FCrich region.",
  "I started out guiding in Barcelona. What held my attention was never the sight itself but everything around it \u2014 the people you meet, the table you sit at, the way a place is entered. I moved from showing places to building experiences, working across travel, hospitality and gastronomy. After guiding in Switzerland, I built Stimulus around the country I know best and the kind of experiences I care most about creating.",
  "The conviction underneath it is simple: the experience is what matters. That isn\u2019t something one person delivers alone. It takes the guides, hosts, chefs and hoteliers we work with \u2014 Stimulus is how they come together."
];

function AboutFounder() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const img = new Image();
    img.onload = () => setReady(true);
    img.src = "assets/founder-alex.jpg";
    return () => { img.onload = null; };
  }, []);
  if (!ready) return null;
  return React.createElement("section", { className: "ab-founder", "data-screen-label": "About \u00B7 Alex" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "ab-founder-grid" },
      React.createElement("figure", { className: "ab-founder-fig" }, React.createElement("div", { className: "ab-founder-img" }, React.createElement("img", { src: "assets/founder-alex.jpg", alt: "Alex Ruiz", loading: "lazy", decoding: "async" }))),
      React.createElement("div", { className: "ab-founder-body" },
        React.createElement(Eyebrow, null, "Behind Stimulus"),
        React.createElement("h2", { className: "ab-founder-title" }, "I\u2019m Alex Ruiz."),
        FOUNDER_STORY.map((p, i) => React.createElement("p", { key: i, className: "ab-founder-text" }, p)),
        React.createElement("p", { className: "ab-founder-note" }, "Your enquiry comes to me. I read it, I reply, and I stay with your journey as it takes shape \u2014 with the network building it alongside me.")))));
}

function AboutPage({ c, onNav }) {
  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "ab-open", "data-screen-label": "About \u00B7 Who we are" }, React.createElement("div", { className: "st-wrap" },
      React.createElement(Eyebrow, null, "About Stimulus"),
      React.createElement("h1", { className: "ab-open-title" }, "Switzerland, experienced from within"),
      React.createElement(Reveal, { className: "ab-open-grid" },
        React.createElement("blockquote", { className: "ab-statement" }, "Stimulus is a network of people creating ", React.createElement("em", null, "extraordinary journeys"), " through Switzerland."),
        React.createElement("div", { className: "ab-open-body" },
          React.createElement("p", null, "We design and coordinate every journey ourselves, bringing together places, routes and remarkable people into one coherent experience."))))),
    React.createElement("section", { className: "ab-proof", "data-screen-label": "About \u00B7 Why trust us" }, React.createElement("div", { className: "st-wrap" },
      React.createElement(Eyebrow, null, "How we work"),
      React.createElement("h2", { className: "ab-proof-title" }, "We go there before we send you there"),
      React.createElement("p", { className: "ab-proof-lead" }, "Stimulus learns the country by moving through it \u2014 season by season, and always with the right people alongside us."),
      React.createElement(Reveal, { as: "figure", className: "ab-figure" },
        React.createElement("div", { className: "ab-figure-img" }, React.createElement("img", Object.assign(imgAttrs("assets/moment-oberalp.jpg", 1600, "(max-width: 1200px) 100vw, 1120px"), { alt: "", loading: "lazy" })))),
      React.createElement("div", { className: "ab-steps" }, ABOUT_STEPS.map(([n, name, text]) => React.createElement(Reveal, { key: n, className: "ab-step" },
        React.createElement("div", { className: "ab-step-num" }, n),
        React.createElement("h3", { className: "ab-step-name" }, name),
        React.createElement("p", { className: "ab-step-text" }, text)))))),
    React.createElement(AboutFounder, null),
    React.createElement("section", { className: "ab-close", "data-screen-label": "About \u00B7 Conversation" }, React.createElement("div", { className: "st-wrap" },
      React.createElement(Eyebrow, { style: { color: "rgba(246,241,232,.6)" } }, "The network"),
      React.createElement("h2", { className: "ab-close-title" }, "We connect remarkable people to create remarkable journeys"),
      React.createElement("p", { className: "ab-close-body" }, "We bring together the right places, people and experiences around you."),
      React.createElement("p", { className: "ab-close-line" }, "Curated by us. Shaped around you."),
      React.createElement("div", { className: "ab-cta-row" },
        React.createElement(Button, { variant: "lime", onClick: () => onNav("plan") }, "Plan a journey \u2192"),
        React.createElement("a", { className: "ab-cta-mail", href: "mailto:" + EMAIL }, EMAIL)))));
}

function ContactPage({ c, onNav }) {
  return React.createElement(React.Fragment, null,
    React.createElement(PageIntro, { eyebrow: c.contactEyebrow, title: c.contactTitle }),
    React.createElement(ContactChannels, { onNav }));
}
function ExplorerPage({ onNav }) {
  const d = EXPLORER;
  return React.createElement(React.Fragment, null,
    React.createElement(ExHero, { d: d.hero, onNav, journey: "explorer" }),
    React.createElement(ExJourneyMap, { d: d.journey }),
    React.createElement(ExMomentsCompact, { moments: d.moments }),
    React.createElement(ExShapedCompact, { d: d.shaped }),
    React.createElement(ExConversion, { d: d.conversion, onNav, journey: "explorer" }));
}

function BoutiquePage({ onNav }) {
  const d = BOUTIQUE;
  return React.createElement(React.Fragment, null,
    React.createElement(ExHero, { d: d.hero, onNav, journey: "boutique" }),
    React.createElement(ExJourneyMap, { d: d.journey }),
    React.createElement(ExMomentsCompact, { moments: d.moments }),
    React.createElement(ExShapedCompact, { d: d.shaped }),
    React.createElement(ExConversion, { d: d.conversion, onNav, journey: "boutique" }));
}

function SignaturePage({ onNav }) {
  const d = SIGNATURE;
  return React.createElement(React.Fragment, null,
    React.createElement(ExHero, { d: d.hero, onNav, journey: "signature" }),
    React.createElement(ExIdea, { d: d.idea }),
    React.createElement(SigSteps, { d: d.steps }),
    React.createElement(ExShapedCompact, { d: d.shaped }),
    React.createElement(ExConversion, { d: d.conversion, onNav, journey: "signature" }));
}

function ChapterPage({ id, onNav }) {
  if (id === "boutique") return React.createElement(BoutiquePage, { onNav });
  if (id === "signature") return React.createElement(SignaturePage, { onNav });
  return React.createElement(ExplorerPage, { onNav });
}
Object.assign(window, { HomePage, JourneysPage, ChapterPage, ExplorerPage, BoutiquePage, SignaturePage, AboutPage, AboutFounder, ContactPage, PlanPage, PageIntro });
