function SigProcess({ d }) {
  return React.createElement("section", { className: "st-exdays" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, d.eyebrow),
      React.createElement("h2", { className: "st-section-title" }, d.title)),
    React.createElement("div", { className: "st-exdays-list" }, d.steps.map(s => React.createElement("div", { key: s.num, className: "st-exday" },
      React.createElement("span", { className: "st-exday-num" }, "Step " + s.num),
      React.createElement("div", { className: "st-exday-body" },
        React.createElement("p", { className: "st-exday-route" }, s.route),
        React.createElement("h3", { className: "st-exday-title" }, s.title),
        React.createElement("p", { className: "st-exday-text" }, s.text)))))));
}

function SigPossible({ d }) {
  return React.createElement("section", { className: "st-exmoments" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720, marginBottom: 8 } },
      React.createElement(Eyebrow, null, d.eyebrow),
      React.createElement("h2", { className: "st-section-title" }, d.title),
      React.createElement("p", { className: "st-exroute-note", style: { marginTop: 14 } }, d.note)),
    d.items.map((m, i) => React.createElement("div", { key: m.num, className: `st-exmoment ${i % 2 === 1 ? "flip" : ""}` },
      React.createElement(Reveal, { className: "st-exmoment-grid" },
        React.createElement("div", { className: "st-exmoment-visual" }, m.photo
          ? React.createElement("img", Object.assign(imgAttrs(m.photo, 1400, "(max-width: 900px) 100vw, 50vw"), { alt: m.title, loading: "lazy", style: { width: "100%", height: "100%", objectFit: "cover" } }))
          : React.createElement("span", { className: "st-moment-mark" }, m.num)),
        React.createElement("div", { className: "st-exmoment-body" },
          React.createElement("span", { className: "st-exmoment-num" }, "Journey " + m.num),
          React.createElement("h3", { className: "st-exmoment-title" }, m.title),
          React.createElement("p", { className: "st-exmoment-text" }, m.text)))))));
}
function SigSteps({ d }) {
  return React.createElement("section", { className: "st-sigsteps" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, d.eyebrow),
      React.createElement("h2", { className: "st-section-title" }, d.title)),
    React.createElement("div", { className: "st-sigsteps-grid" }, d.items.map(s => React.createElement("div", { key: s.num, className: "st-sigsteps-item" },
      React.createElement("span", { className: "st-sigsteps-num" }, "Step " + s.num),
      React.createElement("h3", null, s.name),
      React.createElement("p", null, s.text))))));
}
Object.assign(window, { SigProcess, SigPossible, SigSteps });
