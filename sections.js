function lines(arr) { return arr.map((l, i) => React.createElement(React.Fragment, { key: i }, l, i < arr.length - 1 ? React.createElement("br", null) : null)); }

function Hero({ c, onNav }) {
  return React.createElement("section", { className: "st-hero" },
    React.createElement("div", { className: "st-hero-photo" }, React.createElement("img", Object.assign(imgAttrs("assets/signature-hero.jpg", 2000, "100vw"), { alt: "", fetchpriority: "high", decoding: "sync", style: { width: "100%", height: "100%", objectFit: "cover" } }))),
    React.createElement("div", { className: "st-hero-scrim" }),
    React.createElement("div", { className: "st-hero-inner" },
      React.createElement(Eyebrow, { className: "st-hero-eyebrow" }, c.heroEyebrow),
      React.createElement("h1", { className: "st-hero-title" }, lines(c.heroTitle)),
      React.createElement("p", { className: "st-hero-lead" }, c.heroLead),
      React.createElement("div", { className: "st-hero-cta" }, React.createElement(Button, { variant: "lime", onClick: () => onNav("journeys") }, "Explore journeys"))));
}

function MeaningBand({ c }) {
  return React.createElement("section", { className: "st-meaning" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-meaning-grid" },
      React.createElement("blockquote", { className: "st-meaning-quote" }, c.moreQuote),
      React.createElement("div", { className: "st-meaning-body" }, React.createElement(Eyebrow, null, c.moreEyebrow), c.moreBody.map((p, i) => React.createElement("p", { key: i }, p))))));
}

function WhyStimulus({ onNav }) {
  return React.createElement("section", { className: "st-why", "data-screen-label": "Why Stimulus" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Eyebrow, { className: "st-why-eyebrow" }, WHY.eyebrow),
    React.createElement("div", { className: "st-why-head" },
      React.createElement("h2", { className: "st-why-title" }, WHY.title),
      React.createElement("div", { className: "st-why-intro" }, WHY.intro.map((p, i) => React.createElement("p", { key: i }, p)))),
    React.createElement("div", { className: "st-why-rule" }),
    React.createElement("div", { className: "st-why-grid" }, WHY.principles.map(p => React.createElement("div", { key: p.num, className: "st-why-item" },
      React.createElement("span", { className: "st-why-num" }, p.num),
      React.createElement("h3", { className: "st-why-name" }, p.name),
      React.createElement("p", { className: "st-why-text" }, p.text)))),
    React.createElement("div", { className: "st-why-foot" },
      React.createElement("p", { className: "st-why-brand" }, WHY.brand),
      React.createElement("button", { type: "button", className: "st-why-cta", onClick: () => onNav("about") }, WHY.cta, React.createElement("i", null, "\u2192")))));
}

function Spotlight({ c, flip = false }) {
  return React.createElement("section", { className: `st-spot ${flip ? "flip" : ""}` }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-spot-grid" },
      React.createElement("div", { className: "st-spot-body" },
        React.createElement(Eyebrow, null, c.placeEyebrow),
        React.createElement("h2", { className: "st-section-title" }, lines(c.placeTitle)),
        React.createElement("p", null, c.placeBody)),
      React.createElement("div", { className: "st-spot-visual" }, React.createElement("img", Object.assign(imgAttrs("assets/spotlight-terrace.jpg", 1400, "(max-width: 900px) 100vw, 42vw"), { alt: "", loading: "lazy", style: { width: "100%", height: "100%", objectFit: "cover" } }))))));
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
        React.createElement("div", { className: "st-jcard-ph" }, React.createElement("img", Object.assign(imgAttrs(({explorer:"assets/jcard-explorer.jpg",boutique:"assets/jcard-boutique.jpg",signature:"assets/jcard-signature.jpg"})[j.id], 900, "(max-width: 900px) 100vw, 30vw"), { alt: "", loading: "lazy", style: { width: "100%", height: "100%", objectFit: "cover" } }))),
        React.createElement("div", { className: "st-jcard-body" }, React.createElement("h3", { className: "st-jcard-title" }, j.title), React.createElement("p", { className: "st-jcard-meta" }, j.mode)))))),
    React.createElement("div", { className: "st-jgrid-more" }, React.createElement(TextLink, { onClick: () => onNav("journeys") }, "View all journeys"))));
}


function JourneyFit({ c, onNav }) {
  return React.createElement("section", { className: "st-fit" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-section-head", style: { maxWidth: 720 } },
      React.createElement(Eyebrow, null, c.fitEyebrow),
      React.createElement("h2", { className: "st-section-title" }, c.fitTitle)),
    React.createElement("div", { className: "st-fit-list" }, FIT.map(f => React.createElement("button", { key: f.id, type: "button", className: "st-fit-row", onClick: () => onNav("chapter", f.id) },
      React.createElement("span", { className: "st-fit-want" }, f.want),
      React.createElement("span", { className: "st-fit-name" }, f.name, React.createElement("i", null, "\u2192")))))));
}

function JourneyOverview({ journeys, onNav }) {
  return React.createElement("div", { className: "st-joverview" }, journeys.map((j, i) => React.createElement("section", { key: j.id, className: `st-chapter ${i % 2 === 1 ? "flip" : ""}` }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-chapter-grid st-jov-block", style: { cursor: "pointer" } },
      React.createElement("div", { className: "st-chapter-visual", onClick: () => onNav("chapter", j.id) },
        React.createElement("img", Object.assign(imgAttrs(j.photo, 1400, "(max-width: 900px) 100vw, 52vw"), { alt: j.name + " journey", loading: "lazy", style: { width: "100%", height: "100%", objectFit: "cover" } }))),
      React.createElement("div", { className: "st-chapter-body", onClick: () => onNav("chapter", j.id) },
        React.createElement("h2", { className: "st-chapter-title" }, j.name),
        React.createElement("p", { className: "st-chapter-lead" }, j.prop),
        j.tags && React.createElement("p", { className: "st-jov-tags" }, j.tags),
        React.createElement("p", { className: "st-chapter-text" }, j.desc),
        React.createElement("p", { className: "st-jov-quote" }, j.quote),
        React.createElement("div", { style: { marginTop: 6 } }, React.createElement(TextLink, { href: "/journeys/" + j.id, onClick: () => onNav("chapter", j.id) }, j.cta))))))));
}

function FlexLine({ c }) {
  return React.createElement("section", { className: "st-flexline" }, React.createElement("div", { className: "st-wrap" },
    React.createElement("p", { className: "st-flexline-text" }, c.flexLine)));
}

function FlexBand({ c }) {
  return React.createElement("section", { className: "st-flex" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-flex-in" },
      React.createElement("h2", { className: "st-section-title" }, c.flexTitle),
      React.createElement("p", null, c.flexBody1),
      React.createElement("p", null, c.flexBody2))));
}


function EscapeBand({ c, onNav }) {
  return React.createElement("section", { className: "st-escape" }, React.createElement("div", { className: "st-wrap st-escape-in" },
    React.createElement("h2", { className: "st-escape-title" }, c.escapeTitle),
    React.createElement("p", null, c.escapeBody),
    React.createElement(TextLink, { onClick: () => onNav("plan") }, c.escapeCta)));
}

function JourneyChapter({ journey, index, onNav }) {
  const flip = index % 2 === 1;
  return React.createElement("section", { id: `chapter-${journey.id}`, className: `st-chapter ${flip ? "flip" : ""}` }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Reveal, { className: "st-chapter-grid" },
      React.createElement("div", { className: "st-chapter-visual" }, React.createElement("img", Object.assign(imgAttrs(({explorer:"assets/chapter-explorer.jpg",boutique:"assets/chapter-boutique.jpg",signature:"assets/chapter-signature.jpg"})[journey.id], 1400, "(max-width: 900px) 100vw, 52vw"), { alt: "", loading: "lazy", style: { width: "100%", height: "100%", objectFit: "cover" } }))),
      React.createElement("div", { className: "st-chapter-body" },
        React.createElement(Eyebrow, null, journey.mode),
        React.createElement("h2", { className: "st-chapter-title" }, journey.title),
        React.createElement("p", { className: "st-chapter-lead" }, journey.lead),
        React.createElement("p", { className: "st-chapter-text" }, journey.body),
        React.createElement("div", null, React.createElement(TextLink, { onClick: () => onNav("contact") }, "Enquire about this journey"))))));
}

const JOURNEY_LABELS = { explorer: "Explorer", boutique: "Boutique", signature: "Signature" };

const PLAN_STEPS = [
  ["01", "Tell us what you\u2019re imagining", "Share what brings you to Switzerland, who you\u2019re travelling with and what you\u2019re looking for."],
  ["02", "We have a conversation", "We reply within 24 hours, Monday to Friday, and arrange a conversation."],
  ["03", "We shape the journey", "From that conversation, we create the first proposal around you."]
];

function PlanSteps() {
  return React.createElement("section", { className: "st-plansteps" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Eyebrow, null, "What happens next"),
    React.createElement("ol", { className: "st-ps-list" }, PLAN_STEPS.map(([n, t, d]) => React.createElement("li", { key: n, className: "st-ps-item" },
      React.createElement("span", { className: "st-ps-num" }, n),
      React.createElement("h2", { className: "st-ps-name" }, t),
      React.createElement("p", { className: "st-ps-text" }, d))))));
}

const PREVIEW_THANKS = (() => {
  try {
    if (/(^|\.)stimulustrips\.com$/.test(location.hostname)) return false;
    if (window.__previewThanks === true) return true;
    return new URLSearchParams(location.search).get("preview") === "thanks";
  } catch (e) { return false; }
})();

function PlanForm({ journey, sent, onSent }) {
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle");
  const started = React.useRef(false);
  const preset = JOURNEY_LABELS[journey] || "I'm not sure yet";
  React.useEffect(() => { if (sent) window.scrollTo({ top: 0, behavior: "smooth" }); }, [sent]);
  const onSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const val = k => (fd.get(k) || "").toString().trim();
    const errs = {};
    if (!val("name")) errs.name = "Please tell us your name.";
    const email = val("email");
    if (!email) errs.email = "Please add an email so we can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs.email = "Please check this email address.";
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) { const el = form.elements[first]; if (el && el.focus) el.focus(); return; }
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      fd.forEach((v, k) => body.append(k, v.toString()));
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setStatus("idle");
      onSent && onSent();
      window.track && window.track("Form: submit", { journey: val("journey") || preset });
    } catch (err) {
      setStatus("error");
    }
  };
  if (sent) return React.createElement(PlanThanks, null);
  const field = (name, label, input, hint) => React.createElement("div", { className: "st-field" },
    React.createElement("label", { htmlFor: "pf-" + name }, label),
    input,
    hint && React.createElement("span", { className: "st-field-hint" }, hint),
    errors[name] && React.createElement("p", { className: "st-field-err", id: "pf-" + name + "-err", role: "alert" }, errors[name]));
  const inputProps = name => ({ id: "pf-" + name, name, "aria-invalid": errors[name] ? "true" : undefined, "aria-describedby": errors[name] ? "pf-" + name + "-err" : undefined });
  const onFirstFocus = () => { if (!started.current) { started.current = true; window.track && window.track("Form: start", { journey: preset }); } };
  return React.createElement("section", { className: "st-plan", onFocus: onFirstFocus }, React.createElement("div", { className: "st-plan-grid" },
    React.createElement("div", { className: "st-plan-side" },
      React.createElement("p", { className: "st-plan-side-line" }, "Every Stimulus journey begins with a conversation \u2014 not a quote."),
      React.createElement("p", { className: "st-plan-side-note" }, "Enquiring is free and commits you to nothing."),
      React.createElement("div", { className: "st-plan-direct" },
        React.createElement("p", null, "Prefer to write to us directly?"),
        React.createElement("a", { className: "st-plan-wa", href: waLink(), target: "_blank", rel: "noopener" }, React.createElement(Icon, { name: "whatsapp", size: 17 }), "WhatsApp \u00B7 ", WHATSAPP.display),
        React.createElement("a", { className: "st-plan-mail", href: "mailto:" + EMAIL }, EMAIL))),
    React.createElement("form", { className: "st-form", name: "plan-a-journey", onSubmit, noValidate: true },
      React.createElement("input", { type: "hidden", name: "form-name", value: "plan-a-journey" }),
      React.createElement("p", { className: "st-form-hp" }, React.createElement("label", null, "Don\u2019t fill this out if you\u2019re human: ", React.createElement("input", { name: "bot-field", tabIndex: -1, autoComplete: "off" }))),
      React.createElement("div", { className: "st-form-row" },
        field("name", "Your name *", React.createElement("input", Object.assign({ type: "text", autoComplete: "name", placeholder: "Your name" }, inputProps("name")))),
        field("email", "Email *", React.createElement("input", Object.assign({ type: "email", autoComplete: "email", inputMode: "email", placeholder: "you@email.com" }, inputProps("email"))))),
      field("from", "Where are you travelling from?", React.createElement("input", Object.assign({ type: "text", placeholder: "City or country" }, inputProps("from")))),
      React.createElement("div", { className: "st-form-row" },
        field("when", "When would you like to travel?", React.createElement("input", Object.assign({ type: "text", placeholder: "e.g. June 2027" }, inputProps("when"))), null),
        field("travellers", "How many people are travelling?", React.createElement("input", Object.assign({ type: "number", min: "1", inputMode: "numeric", placeholder: "2" }, inputProps("travellers"))))),
      React.createElement("label", { className: "st-check" },
        React.createElement("input", { type: "checkbox", name: "flexible", value: "Dates are flexible" }),
        React.createElement("span", null, "My dates are still flexible")),
      field("journey", "Which journey are you considering?", React.createElement("select", Object.assign({ defaultValue: preset }, inputProps("journey")), ["Explorer", "Boutique", "Signature", "I'm not sure yet"].map(o => React.createElement("option", { key: o, value: o }, o)))),
      field("remarkable", "What would make this journey remarkable for you?", React.createElement("textarea", Object.assign({ rows: "5", placeholder: "An occasion, a landscape, a pace, an interest \u2014 anything is enough to begin." }, inputProps("remarkable")))),
      status === "error" && React.createElement("p", { className: "st-field-err", role: "alert" }, "We couldn\u2019t send that from here. Please try again, or write to us at ", React.createElement("a", { href: "mailto:" + EMAIL, style: { textDecoration: "underline" } }, EMAIL), "."),
      React.createElement(Button, { variant: "lime" }, status === "sending" ? "Sending\u2026" : "Start the conversation \u2192"))));
}

function PlanThanks() {
  const steps = [
    ["01", "We read your request.", "We look at your dates, interests and the kind of journey you\u2019re imagining."],
    ["02", "We get in touch.", "We reply within 24 hours, Monday to Friday, and arrange a conversation \u2014 not a template."],
    ["03", "We begin shaping the journey.", "If Stimulus feels right for you, we start building it together."]
  ];
  return React.createElement("section", { className: "st-thanks" }, React.createElement("div", { className: "st-wrap" },
    React.createElement(Eyebrow, null, "Plan a journey"),
    React.createElement("h1", { className: "st-section-title", style: { marginTop: 14 } }, "Your journey starts here"),
    React.createElement("p", { className: "st-lead", style: { marginTop: 16, maxWidth: 620 } }, "Thank you for getting in touch. We\u2019ll read what you\u2019ve shared and come back to you personally."),
    React.createElement("div", { className: "st-thanks-steps" }, steps.map(([n, t, d]) => React.createElement("div", { key: n, className: "st-thanks-step" },
      React.createElement("span", { className: "st-thanks-num" }, n),
      React.createElement("h2", { className: "st-thanks-name" }, t),
      React.createElement("p", { className: "st-thanks-text" }, d)))),
    React.createElement("p", { className: "st-thanks-mail" }, "In the meantime you can always reach us at ", React.createElement("a", { href: "mailto:" + EMAIL }, EMAIL), ".")));
}

function ContactChannels({ onNav }) {
  return React.createElement("section", { className: "st-contact" }, React.createElement("div", { className: "st-wrap st-contact-grid" },
    React.createElement("div", { className: "st-contact-block" },
      React.createElement(Eyebrow, null, "Planning a journey?"),
      React.createElement("p", { className: "st-contact-text" }, "Start with a few details and we\u2019ll take it from there. We reply within 24 hours, Monday to Friday."),
      React.createElement(Button, { variant: "primary", onClick: () => onNav("plan") }, "Plan a journey \u2192")),
    React.createElement("div", { className: "st-contact-block" },
      React.createElement(Eyebrow, null, "WhatsApp"),
      React.createElement("p", { className: "st-contact-text" }, "Message us directly. A call can be arranged after your first enquiry."),
      React.createElement("a", { className: "st-contact-link", href: waLink(), target: "_blank", rel: "noopener" }, WHATSAPP.display)),
    React.createElement("div", { className: "st-contact-block" },
      React.createElement(Eyebrow, null, "Other enquiries"),
      React.createElement("p", { className: "st-contact-text" }, "For partnerships, collaborations or anything else:"),
      React.createElement("a", { className: "st-contact-link", href: "mailto:" + EMAIL }, EMAIL))));
}
Object.assign(window, { Hero, MeaningBand, WhyStimulus, Spotlight, CTABand, JourneyGrid, JourneyOverview, JourneyFit, FlexLine, FlexBand, EscapeBand, JourneyChapter, PlanSteps, PlanForm, PlanThanks, ContactChannels, PREVIEW_THANKS, lines });
