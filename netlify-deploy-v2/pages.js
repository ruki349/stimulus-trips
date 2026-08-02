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
    React.createElement(ThreeWays, { c }),
    React.createElement(JourneyGrid, { c, onNav }),
    React.createElement(Spotlight, { c }),
    React.createElement(CTABand, { eyebrow: c.finalEyebrow, title: c.finalTitle, lead: c.finalLead, cta: "Start planning your journey", onClick: () => onNav("contact"), dark: true }));
}

function JourneysPage({ c, onNav }) {
  return React.createElement(React.Fragment, null,
    React.createElement(PageIntro, { eyebrow: c.journeysEyebrow, title: c.journeysTitle, lead: c.journeysLead }),
    JOURNEYS.map((j, i) => React.createElement(JourneyChapter, { key: j.id, journey: j, index: i, onNav })),
    React.createElement(CTABand, { eyebrow: c.finalEyebrow, title: c.finalTitle, lead: c.finalLead, cta: "Let's plan your journey", onClick: () => onNav("contact") }));
}

function AboutPage({ c, onNav }) {
  return React.createElement(React.Fragment, null,
    React.createElement(PageIntro, { eyebrow: c.aboutEyebrow, title: c.aboutTitle, lead: c.aboutLead }),
    React.createElement(Spotlight, { c, flip: true }),
    React.createElement("section", { style: { padding: "clamp(48px,7vw,96px) 0", background: "var(--paper-cool)" } }, React.createElement("div", { className: "st-wrap" },
      React.createElement(Reveal, { className: "st-section-head", style: { marginBottom: 48 } }, React.createElement("h2", { className: "st-section-title" }, lines(c.valuesTitle))),
      React.createElement("div", { className: "st-ways-grid" }, VALUES.map(([t, d], i) => React.createElement(Reveal, { key: t, className: "st-way" },
        React.createElement("div", { className: "st-way-icon" }, React.createElement(Icon, { name: ["leaf", "star", "check"][i], size: 24 })),
        React.createElement("h3", { className: "st-way-name" }, t),
        React.createElement("p", { className: "st-way-text" }, d)))))),
    React.createElement(MeaningBand, { c }),
    React.createElement(CTABand, { eyebrow: c.finalEyebrow, title: c.finalTitle, lead: c.finalLead, cta: "Start planning your journey", onClick: () => onNav("contact"), dark: true }));
}

function ContactPage({ c }) {
  return React.createElement(React.Fragment, null,
    React.createElement(PageIntro, { eyebrow: c.contactEyebrow, title: c.contactTitle, lead: c.contactLead }),
    React.createElement(Inquiry, { c }));
}
Object.assign(window, { HomePage, JourneysPage, AboutPage, ContactPage, PageIntro });
