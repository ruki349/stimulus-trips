function lines(arr) { return arr.map((l, i) => React.createElement(React.Fragment, { key: i }, l, i < arr.length - 1 ? React.createElement("br", null) : null)); }

function Hero({ c, onNav }) {
  return React.createElement("section", { className: "st-hero" },
    React.createElement("div", { className: "st-hero-photo" }, React.createElement("image-slot", { id: "hero-photo", shape: "rect", placeholder: "Full-bleed alpine landscape" })),
    React.createElement("div", { className: "st-hero-scrim" }),
    React.createElement("div", { className: "st-hero-inner" },
      React.createElement(Eyebrow, { className: "st-hero-eyebrow" }, c.heroEyebrow),
      React.createElement("h1", { className: "st-hero-title" }, lines(c.heroTitle)),
      React.createElement("p", { className: "st-hero-lead" }, c.heroLead),
      React.createElement("div", { className: "st-hero-cta" }, React.createElement(Button, { variant: "lime", onClick: () => onNav("journeys") }, "Explore journeys"))));
}

function MeaningBand({ c }) {
  const [pre, em, post] = c.moreQuote;
  return React.createElement("section", { className: "st-meaning" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-meaning-grid" },
      React.createElement("blockquote", { className: "st-meaning-quote" }, pre, React.createElement("em", null, em), post),
      React.createElement("div", { className: "st-meaning-body" }, React.createElement(Eyebrow, null, c.moreEyebrow), c.moreBody.map((p, i) => React.createElement("p", { key: i }, p))))));
}

function ThreeWays({ c }) {
  return React.createElement("section", { className: "st-ways" }, React.createElement("div", { className: "st-wrap" },
    React.createElement("div", { className: "st-section-head" }, React.createElement(Eyebrow, null, c.whyEyebrow), React.createElement("h2", { className: "st-section-title" }, lines(c.whyTitle))),
    React.createElement("div", { className: "st-ways-grid" }, WAYS.map(w => React.createElement(Reveal, { as: "div", key: w.icon, className: "st-way" },
      React.createElement("div", { className: "st-way-icon" }, React.createElement(Icon, { name: w.icon, size: 26 })),
      React.createElement("span", { className: "st-way-num" }, w.num),
      React.createElement("h3", { className: "st-way-name" }, w.name),
      React.createElement("p", { className: "st-way-text" }, w.text))))));
}

function Spotlight({ c, flip = false }) {
  return React.createElement("section", { className: `st-spot ${flip ? "flip" : ""}` }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-spot-grid" },
      React.createElement("div", { className: "st-spot-body" },
        React.createElement(Eyebrow, null, c.placeEyebrow),
        React.createElement("h2", { className: "st-section-title" }, lines(c.placeTitle)),
        React.createElement("p", null, c.placeBody)),
      React.createElement("div", { className: "st-spot-visual" }, React.createElement("image-slot", { id: "spotlight-photo", shape: "rect", placeholder: "A place worth experiencing" })))));
}

function CTABand({ eyebrow, title, lead, cta, onClick, dark = false }) {
  return React.createElement("section", { className: `st-cta ${dark ? "dark" : ""}` }, React.createElement("div", { className: "st-wrap st-cta-in" },
    React.createElement(Eyebrow, { style: dark ? { color: "rgba(246,241,232,.6)" } : null }, eyebrow),
    React.createElement("h2", { className: "st-section-title" }, lines(title)),
    lead && React.createElement("p", { className: "st-lead" }, lead),
    React.createElement(Button, { variant: dark ? "lime" : "primary", onClick }, cta)));
}

function JourneyGrid({ c, onNav }) {
  return React.createElement("section", { className: "st-journeys" }, React.createElement("div", { className: "st-wrap" },
    React.createElement("div", { className: "st-section-head" }, React.createElement(Eyebrow, null, c.journeysEyebrow), React.createElement("h2", { className: "st-section-title" }, lines(c.journeysTitle))),
    React.createElement("div", { className: "st-jgrid" }, JOURNEYS.map((j, i) => React.createElement(Reveal, { as: "article", key: j.id, className: "st-jcard" },
      React.createElement("div", { onClick: () => onNav("journeys") },
        React.createElement("div", { className: "st-jcard-ph" }, React.createElement("image-slot", { id: `jcard-${j.id}`, shape: "rect", placeholder: j.title })),
        React.createElement("div", { className: "st-jcard-body" }, React.createElement("h3", { className: "st-jcard-title" }, j.title), React.createElement("p", { className: "st-jcard-meta" }, j.mode)))))),
    React.createElement("div", { className: "st-jgrid-more" }, React.createElement(TextLink, { onClick: () => onNav("journeys") }, "View all journeys"))));
}

function JourneyChapter({ journey, index, onNav }) {
  const flip = index % 2 === 1;
  return React.createElement("section", { className: `st-chapter ${flip ? "flip" : ""}` }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-chapter-grid" },
      React.createElement("div", { className: "st-chapter-visual" }, React.createElement("image-slot", { id: `chapter-${journey.id}`, shape: "rect", placeholder: journey.title })),
      React.createElement("div", { className: "st-chapter-body" },
        React.createElement(Eyebrow, null, journey.mode),
        React.createElement("h2", { className: "st-chapter-title" }, journey.title),
        React.createElement("p", { className: "st-chapter-lead" }, journey.lead),
        React.createElement("p", { className: "st-chapter-text" }, journey.body),
        React.createElement("div", { className: "st-chapter-arc" }, journey.arc.map((p, i) => React.createElement(React.Fragment, { key: p }, React.createElement("span", null, p), i < journey.arc.length - 1 && React.createElement("i", null)))),
        React.createElement("span", { className: "st-chapter-days" }, journey.days),
        React.createElement("div", null, React.createElement(TextLink, { onClick: () => onNav("contact") }, "Enquire about this journey"))))));
}

function Inquiry({ c }) {
  const [sent, setSent] = React.useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = k => (fd.get(k) || "").toString().trim() || "\u2014";
    const txt = "Hi Stimulus Trips! I'd like to plan a journey.\n\nName: " + v("name") + "\nTravellers: " + v("travellers") + "\nWhere to: " + v("where") + "\nWhen: " + v("when") + "\nWhat awakens me: " + v("about");
    window.open("https://wa.me/" + WHATSAPP.number + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
    setSent(true);
  };
  return React.createElement("section", { className: "st-inquiry" }, React.createElement("div", { className: "st-inquiry-grid" },
    React.createElement("div", { className: "st-inquiry-left" },
      React.createElement(Eyebrow, null, c.contactEyebrow),
      React.createElement("h2", { className: "st-section-title" }, lines(c.contactTitle)),
      React.createElement("p", { className: "st-inquiry-lead" }, c.contactLead),
      React.createElement("div", { className: "st-inquiry-detail" },
        React.createElement("div", null, React.createElement(Icon, { name: "whatsapp", size: 17 }), React.createElement("b", null, WHATSAPP.display)),
        React.createElement("div", null, React.createElement(Icon, { name: "pin", size: 17 }), React.createElement("span", null, "Bahnhofstrasse \u00B7 8001 Z\u00FCrich \u00B7 Switzerland")))),
    React.createElement("form", { className: "st-form", onSubmit },
      sent ? React.createElement("div", { className: "st-form-done" },
        React.createElement("h3", null, "Opening WhatsApp\u2026"),
        React.createElement("p", null, "We'll continue the conversation there. If it didn't open, message us directly at ", WHATSAPP.display, "."))
        : React.createElement(React.Fragment, null,
          React.createElement("div", { className: "st-form-row" },
            React.createElement("label", null, "Name", React.createElement("input", { name: "name", placeholder: "Your name" })),
            React.createElement("label", null, "Travellers", React.createElement("input", { name: "travellers", placeholder: "2 guests" }))),
          React.createElement("label", null, "Where to", React.createElement("input", { name: "where", placeholder: "Zermatt, Lake Lucerne, Engadin\u2026" })),
          React.createElement("label", null, "When", React.createElement("input", { name: "when", placeholder: "Roughly which month?" })),
          React.createElement("label", null, "What awakens you", React.createElement("textarea", { name: "about", rows: "3", placeholder: "Movement, quiet, food, views\u2026" })),
          React.createElement(Button, { variant: "primary" }, "Send via WhatsApp")))));
}
Object.assign(window, { Hero, MeaningBand, ThreeWays, Spotlight, CTABand, JourneyGrid, JourneyChapter, Inquiry, lines });
