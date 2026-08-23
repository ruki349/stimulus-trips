function ExHero({ d, onNav, journey }) {
  return React.createElement("section", { className: "st-exhero" },
    React.createElement("div", { className: "st-hero-photo" }, React.createElement("img", Object.assign(imgAttrs(d.photo, 2000, "100vw"), { alt: "", fetchpriority: "high", decoding: "sync", style: { width: "100%", height: "100%", objectFit: "cover" } }))),
    React.createElement("div", { className: "st-hero-scrim" }),
    React.createElement("div", { className: "st-exhero-inner" },
      React.createElement(Eyebrow, { className: "st-hero-eyebrow" }, d.eyebrow),
      React.createElement("h1", { className: "st-exhero-title" }, d.title),
      React.createElement("p", { className: "st-exhero-lead" }, d.lead),
      React.createElement("div", { className: "st-exhero-meta" }, d.meta.map(m => React.createElement("span", { key: m }, m))),
      React.createElement("div", { className: "st-exhero-cta" }, React.createElement(Button, { variant: "lime", onClick: () => onNav("plan", journey) }, d.cta)),
      React.createElement("p", { className: "st-exhero-quote" }, d.quote)));
}

function ExIdea({ d }) {
  return React.createElement("section", { className: "st-exidea" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-exidea-grid" },
      React.createElement("h2", { className: "st-section-title" }, lines(d.title)),
      React.createElement("div", { className: "st-exidea-body" }, d.body.map((p, i) => React.createElement("p", { key: i }, p))))));
}

function ExRoute({ d }) {
  return React.createElement("section", { className: "st-exroute" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, d.eyebrow || "The route"),
      React.createElement("h2", { className: "st-section-title" }, d.title)),
    React.createElement("div", { className: "st-exroute-grid" },
      React.createElement("div", { className: `st-exroute-map ${window.RouteMap && d.stops ? "has-map" : ""}` },
        window.RouteMap && d.stops ? React.createElement(RouteMap, { stops: d.stops, legs: d.legs }) : (d.mapNote || "Route map \u2014 visual to be added")),
      React.createElement("div", { className: "st-exroute-body" },
        React.createElement("ol", { className: "st-exroute-stops" }, d.stops.map((s, i) => React.createElement("li", { key: i }, React.createElement("span", { className: "st-exroute-dot" }), s))),
        React.createElement("div", { className: "st-exroute-facts" },
          React.createElement("span", null, d.duration),
          React.createElement("span", null, d.modes)),
        React.createElement("p", { className: "st-exroute-note" }, d.note)))));
}

function ExMoments({ moments, heading }) {
  return React.createElement("section", { className: "st-exmoments" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720, marginBottom: 8 } },
      React.createElement(Eyebrow, null, "Signature moments"),
      React.createElement("h2", { className: "st-section-title" }, heading || "Four moments that define the journey")),
    moments.map((m, i) => React.createElement("div", { key: m.num, className: `st-exmoment ${i % 2 === 1 ? "flip" : ""}` },
      React.createElement(Reveal, { className: "st-exmoment-grid" },
        React.createElement("div", { className: "st-exmoment-visual" }, m.photo
          ? React.createElement("img", Object.assign(imgAttrs(m.photo, 1400, "(max-width: 900px) 100vw, 50vw"), { alt: m.title, loading: "lazy", style: { width: "100%", height: "100%", objectFit: "cover" } }))
          : React.createElement("span", { className: "st-moment-mark" }, m.num)),
        React.createElement("div", { className: "st-exmoment-body" },
          React.createElement("span", { className: "st-exmoment-num" }, "Moment " + m.num),
          React.createElement("h3", { className: "st-exmoment-title" }, m.title),
          React.createElement("p", { className: "st-exmoment-text" }, m.text)))))));
}

function ExDays({ days, heading }) {
  return React.createElement("section", { className: "st-exdays" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, "The journey"),
      React.createElement("h2", { className: "st-section-title" }, heading || "Eight days, one continuous movement")),
    React.createElement("div", { className: "st-exdays-list" }, days.map(day => React.createElement("div", { key: day.num, className: "st-exday" },
      React.createElement("span", { className: "st-exday-num" }, "Day " + day.num),
      React.createElement("div", { className: "st-exday-body" },
        React.createElement("p", { className: "st-exday-route" }, day.route),
        React.createElement("h3", { className: "st-exday-title" }, day.title),
        React.createElement("p", { className: "st-exday-text" }, day.text)))))));
}

function ExShaped({ d }) {
  return React.createElement("section", { className: "st-exshaped" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement("h2", { className: "st-section-title" }, lines(d.title)),
      React.createElement("p", { className: "st-lead", style: { marginTop: 6 } }, d.lead)),
    React.createElement("div", { className: "st-exshaped-list" }, d.items.map(([t, x]) => React.createElement("div", { key: t, className: "st-exshaped-row" },
      React.createElement("h3", null, t),
      React.createElement("p", null, x)))),
    React.createElement("p", { className: "st-exshaped-closing" }, d.closing)));
}

function ExIncluded({ d }) {
  return React.createElement("section", { className: "st-exincl" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, "What's included"),
      React.createElement("h2", { className: "st-section-title" }, d.title)),
    React.createElement("div", { className: "st-exincl-list" }, d.items.map(it => React.createElement("p", { key: it, className: "st-exincl-item" }, it))),
    React.createElement("div", { className: "st-exincl-not" },
      React.createElement(Eyebrow, null, "Not included"),
      React.createElement("p", null, d.notIncluded))));
}

function ExPrice({ d }) {
  return React.createElement("section", { className: "st-chprice" }, React.createElement("div", { className: "st-wrap st-chprice-in" },
    React.createElement(Eyebrow, null, d.eyebrow),
    React.createElement("p", { className: "st-chprice-amount" }, d.amount),
    React.createElement("p", { className: "st-chprice-from" }, d.meta),
    React.createElement("p", { className: "st-chprice-note" }, d.basis),
    React.createElement("p", { className: "st-chprice-note" }, d.note)));
}

function ExFinal({ d, onNav, journey }) {
  return React.createElement("section", { className: "st-exfinal" }, React.createElement("div", { className: "st-wrap st-exfinal-in" },
    React.createElement("h2", { className: "st-section-title" }, d.title),
    React.createElement("p", { className: "st-lead" }, d.body),
    React.createElement(Button, { variant: "primary", onClick: () => onNav("plan", journey) }, d.cta),
    React.createElement("p", { className: "st-exfinal-support" }, d.support)));
}
function ExJourneyMap({ d }) {
  return React.createElement("section", { className: "st-exjourney" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, d.eyebrow),
      React.createElement("h2", { className: "st-section-title" }, d.title)),
    React.createElement("div", { className: `st-exjourney-map ${window.RouteMap && d.stops ? "has-map" : ""}` },
      window.RouteMap && d.stops ? React.createElement(RouteMap, { stops: d.stops, legs: d.legs }) : (d.mapNote || "Route map")),
    React.createElement("div", { className: "st-exjourney-highlights" }, d.highlights.map(([n, t]) => React.createElement("div", { key: n, className: "st-exjourney-hl" },
      React.createElement("h4", null, n), React.createElement("p", null, t)))),
    React.createElement("div", { className: "st-exjourney-facts" },
      React.createElement("span", null, d.duration),
      React.createElement("span", null, d.modes)),
    React.createElement("p", { className: "st-exjourney-note" }, d.note)));
}

function ExMomentsCompact({ moments }) {
  const [dom, ...rest] = moments;
  return React.createElement("section", { className: "st-exmc" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720, marginBottom: 8 } },
      React.createElement(Eyebrow, null, "Defining moments"),
      React.createElement("h2", { className: "st-section-title" }, "Three moments that define the journey")),
    React.createElement(Reveal, { className: "st-exmc-grid" },
      React.createElement("figure", { className: "st-exmc-dom" },
        React.createElement("img", Object.assign(imgAttrs(dom.photo, 1200, "(max-width: 900px) 100vw, 55vw"), { alt: dom.title, loading: "lazy" })),
        React.createElement("figcaption", null,
          React.createElement("span", { className: "st-exmoment-num" }, "Moment " + dom.num),
          React.createElement("h3", null, dom.title),
          React.createElement("p", null, dom.text))),
      React.createElement("div", { className: "st-exmc-side" }, rest.map(m => React.createElement("figure", { key: m.num, className: "st-exmc-sm" },
        React.createElement("img", Object.assign(imgAttrs(m.photo, 900, "(max-width: 900px) 100vw, 30vw"), { alt: m.title, loading: "lazy" })),
        React.createElement("figcaption", null,
          React.createElement("span", { className: "st-exmoment-num" }, "Moment " + m.num),
          React.createElement("h3", null, m.title),
          React.createElement("p", null, m.text))))))));
}

function ExShapedCompact({ d }) {
  return React.createElement("section", { className: "st-exsc" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement("h2", { className: "st-section-title" }, lines(d.title)),
      React.createElement("p", { className: "st-lead", style: { marginTop: 6 } }, d.lead)),
    React.createElement("div", { className: "st-exsc-list" }, d.items.map(([t, x]) => React.createElement("div", { key: t, className: "st-exsc-item" },
      React.createElement("h3", null, t),
      React.createElement("p", null, x)))),
    React.createElement("p", { className: "st-exsc-support" }, d.support)));
}

function ExConversion({ d, onNav, journey }) {
  return React.createElement("section", { className: "st-exconv" }, React.createElement("div", { className: "st-wrap st-exconv-in" },
    React.createElement(Eyebrow, { style: { color: "var(--lime)" } }, d.eyebrow),
    React.createElement("h2", { className: "st-exconv-duration" }, d.duration),
    React.createElement("div", { className: "st-exconv-incl" },
      React.createElement(Eyebrow, { style: { color: "rgba(246,241,232,.6)" } }, "Included"),
      React.createElement("p", null, d.included)),
    React.createElement("p", { className: "st-exconv-amount" }, d.amount),
    React.createElement("p", { className: "st-exconv-basis" }, d.basis),
    d.note && React.createElement("p", { className: "st-exconv-note" }, d.note),
    React.createElement("p", { className: "st-exconv-reassure" }, "Enquiring is free and commits you to nothing. Final pricing is confirmed in writing before anything is booked."),
    React.createElement(Button, { variant: "lime", onClick: () => onNav("plan", journey) }, d.cta),
    React.createElement("p", { className: "st-exconv-support" }, d.support),
    React.createElement("p", { className: "st-exconv-not" }, d.notIncluded)));
}

Object.assign(window, { ExHero, ExIdea, ExRoute, ExMoments, ExDays, ExShaped, ExIncluded, ExPrice, ExFinal, ExJourneyMap, ExMomentsCompact, ExShapedCompact, ExConversion });
