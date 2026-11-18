/* Day Experiences — /experiences, /experiences/swiss-wine-cheese, home Chef Series section, floating Chef Series notice.
   No prices, no partner names, no booking: every action is a request form (Netlify Forms). */
const EXPERIENCES = [
  { id: "swiss-wine-cheese", label: "Zurich · 3 hours", name: "Swiss Wine & Cheese",
    line: "Five Swiss wines, chosen by a sommelier, between the lanes of the old town.",
    meta: "Small group or private · All year",
    photo: "Photograph to come: a glass poured at a wine-bar counter, old town, evening light.", detail: true },
  { id: "chef-series", label: "Zurich · Evening", name: "The Chef Series",
    line: "Every edition, one chef opens their city. Then we sit down at their table.",
    meta: "By edition · First edition spring 2027",
    photo: "Photograph to come: a chef at work, kitchen seen from within." },
  { id: "lucerne-rigi", label: "From Zurich · Full day", name: "Lucerne & Rigi",
    line: "Arrive by water, leave by rail. A day on the lake that ends above it.",
    meta: "Private · April to October",
    photo: "Photograph to come: a lake boat arriving at Vitznau, travellers on deck." },
  { id: "appenzell", label: "From Zurich · Full day", name: "Appenzell",
    line: "Painted houses, green hills and a corner of Switzerland that kept its own rhythm.",
    meta: "Private · May to October",
    photo: "Photograph to come: walkers small on an Alpstein ridge." },
  { id: "wine-villages", label: "Lake Zurich · Half day", name: "The Wine Villages",
    line: "Half an hour from the city, the shore turns to vineyards. You reach them by boat.",
    meta: "Small group or private · April to October",
    photo: "Photograph to come: vines above the lake, a boat passing below." },
  { id: "rhine", label: "From Zurich · Full day", name: "The Rhine",
    line: "From the falls to a painted medieval town, ending among Pinot Noir vines.",
    meta: "Private · April to October",
    photo: "Photograph to come: the Rhine at Stein am Rhein, early morning." },
  { id: "neutral-ground", label: "Zurich · 2.5 hours", name: "Neutral Ground",
    line: "Zurich, money and the war. Walk the streets and hear what neutrality really meant.",
    meta: "Small group or private · All year",
    photo: "Photograph to come: Paradeplatz in winter light, people crossing." }
];
const EXP_NOT_SURE = "Not sure yet";

const WINE_CHEESE = {
  crumb: "Experiences / Zurich · 3 hours",
  title: "Swiss Wine & Cheese",
  lead: "Switzerland drinks almost all the wine it makes. Few visitors ever taste it. Walk the old town with a sommelier, stop where the locals buy, and taste five Swiss wines beside the cheeses they belong with.",
  photo: "Photograph to come (landscape and portrait crop): the sommelier pouring at a wine-bar counter in the old town, guests mid-conversation, natural evening light.",
  steps: [
    "Meet in the old town. A first glass, and the map of a wine country most people never hear about.",
    "Through the lanes to a cheese counter. Alpine cheeses, aged and young, and why they matter to the glass.",
    "A wine bar for the rest of the flight: Chasselas, Pinot Noir and one grape you will not find outside Switzerland."
  ],
  voice: "You will taste a country, one glass at a time.",
  facts: [
    ["Format", "Small group, up to 8, or private"],
    ["Duration", "About 3 hours"],
    ["Season", "All year"],
    ["Languages", "English, German, Spanish"],
    ["Included", "Five Swiss wines, the cheese pairing, a sommelier with you throughout"]
  ],
  others: ["wine-villages", "chef-series", "neutral-ground"]
};

const CHEF_SERIES = {
  label: "New · Zurich · By edition",
  title: "The Chef Series",
  lead: "Every edition, one chef opens their Zurich: the market stall, the producer, the bar they trust. Then we sit down at their table, with Swiss wines chosen by our sommelier.",
  voice: "One chef. One city. One table.",
  meta: "Up to 12 guests · About 4 hours · First edition spring 2027",
  photo: "Photograph to come (portrait crop): the chef of the first edition at work, kitchen seen from within. Real chef, with consent."
};

function expById(id) { return EXPERIENCES.find(e => e.id === id); }

/* Same submission mechanism as Plan a Journey: urlencoded POST to "/" with form-name (Netlify Forms). */
async function postNetlifyForm(form) {
  const fd = new FormData(form);
  const body = new URLSearchParams();
  fd.forEach((v, k) => body.append(k, v.toString()));
  const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return fd;
}

function ExpPhoto({ text, className = "", style }) {
  return React.createElement("div", { className: "ex-ph " + className, style, role: "img", "aria-label": text }, text);
}

function ExperienceCard({ e, onNav }) {
  const go = ev => { ev.preventDefault(); e.detail ? onNav("experience", e.id) : onNav("experiences", e.id); };
  const href = e.detail ? "/experiences/" + e.id : "/experiences?experience=" + e.id + "#plan";
  return React.createElement("article", { className: "ex-card" },
    React.createElement(ExpPhoto, { text: e.photo, className: "ex-card-ph" }),
    React.createElement("div", { className: "ex-card-body" },
      React.createElement("p", { className: "ex-lbl" }, e.label),
      React.createElement("h3", { className: "ex-d4" }, e.name),
      e.line && React.createElement("p", { className: "ex-card-line" }, e.line),
      e.meta && React.createElement("p", { className: "ex-card-meta" }, e.meta),
      React.createElement("a", { className: "st-tlink ex-card-link", href, onClick: go }, "Discover →")));
}

function ExperienceForm({ preset }) {
  const [status, setStatus] = React.useState("idle");
  const [errors, setErrors] = React.useState({});
  const started = React.useRef(false);
  const initial = (expById(preset) || {}).name || EXP_NOT_SURE;
  const [exp, setExp] = React.useState(initial);
  React.useEffect(() => setExp(initial), [initial]);
  const onSubmit = async ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const val = k => ((form.elements[k] && form.elements[k].value) || "").trim();
    const errs = {};
    if (!val("name")) errs.name = "Please tell us your name.";
    const email = val("email");
    if (!email) errs.email = "Please add an email so we can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs.email = "Please check this email address.";
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) { form.elements[first].focus(); return; }
    setStatus("sending");
    try {
      await postNetlifyForm(form);
      setStatus("sent");
      window.track && window.track("Experience Request Submit", { experience: val("experience") });
    } catch (err) { setStatus("error"); }
  };
  const onFocus = () => { if (!started.current) { started.current = true; window.track && window.track("Experience Request Start", { experience: exp }); } };
  const field = (name, label, input, wide) => React.createElement("div", { className: "ex-fld" + (wide ? " is-wide" : "") },
    React.createElement("label", { htmlFor: "xf-" + name }, label), input,
    errors[name] && React.createElement("p", { className: "ex-err", role: "alert", id: "xf-" + name + "-err" }, errors[name]));
  const ip = name => ({ id: "xf-" + name, name, "aria-invalid": errors[name] ? "true" : undefined, "aria-describedby": errors[name] ? "xf-" + name + "-err" : undefined });
  return React.createElement("section", { id: "plan", className: "ex-plan" }, React.createElement("div", { className: "st-wrap ex-plan-in" },
    React.createElement("div", { className: "ex-plan-side" },
      React.createElement("p", { className: "ex-lbl ex-on-dark-65" }, "Plan your day"),
      React.createElement("h2", { className: "ex-d2" }, "Start with a few lines"),
      React.createElement("p", { className: "ex-plan-note" }, "Every day is confirmed personally. We'll come back to you within 24 hours, Monday to Friday."),
      React.createElement("p", { className: "ex-plan-note" }, "Price and availability on request. Enquiring is free and commits you to nothing."),
      React.createElement("a", { className: "ex-plan-mail", href: "mailto:" + EMAIL }, EMAIL)),
    status === "sent"
      ? React.createElement("div", { className: "ex-sent", role: "status" },
          React.createElement("h3", { className: "ex-d3" }, "Thank you. We have your request."),
          React.createElement("p", null, "We read every request ourselves and come back to you personally within 24 hours, Monday to Friday."))
      : React.createElement("form", { className: "ex-form", name: "plan-a-day", onSubmit, onFocus, noValidate: true },
          React.createElement("input", { type: "hidden", name: "form-name", value: "plan-a-day" }),
          React.createElement("input", { type: "hidden", name: "type", value: "experience" }),
          React.createElement("p", { className: "st-form-hp" }, React.createElement("label", null, "Don’t fill this out if you’re human: ", React.createElement("input", { name: "bot-field", tabIndex: -1, autoComplete: "off" }))),
          field("experience", "Experience", React.createElement("select", Object.assign({ value: exp, onChange: e => setExp(e.target.value) }, ip("experience")),
            EXPERIENCES.map(e => React.createElement("option", { key: e.id, value: e.name }, e.name)),
            React.createElement("option", { value: EXP_NOT_SURE }, EXP_NOT_SURE))),
          field("date", "Preferred date", React.createElement("input", Object.assign({ type: "text", placeholder: "e.g. 14 May 2027" }, ip("date")))),
          field("guests", "Guests", React.createElement("input", Object.assign({ type: "number", min: "1", inputMode: "numeric", placeholder: "2" }, ip("guests")))),
          field("language", "Language", React.createElement("select", ip("language"), ["English", "Deutsch", "Español"].map(l => React.createElement("option", { key: l, value: l }, l)))),
          field("staying", "Where are you staying? (optional)", React.createElement("input", Object.assign({ type: "text" }, ip("staying")))),
          field("name", "Your name *", React.createElement("input", Object.assign({ type: "text", autoComplete: "name" }, ip("name")))),
          field("email", "Email *", React.createElement("input", Object.assign({ type: "email", autoComplete: "email", inputMode: "email" }, ip("email")))),
          field("notes", "Anything we should know?", React.createElement("textarea", Object.assign({ rows: "3", placeholder: "Allergies, mobility, a special occasion" }, ip("notes"))), true),
          status === "error" && React.createElement("p", { className: "ex-err is-wide", role: "alert" }, "We couldn’t send that from here. Please try again, or write to us at ", React.createElement("a", { href: "mailto:" + EMAIL }, EMAIL), "."),
          React.createElement("div", { className: "ex-form-foot" },
            React.createElement("button", { type: "submit", className: "st-btn st-btn-lime" }, status === "sending" ? "Sending…" : "Send request →"),
            React.createElement("p", { className: "ex-consent" }, "By sending this form, you agree that we use your details to reply to your request. See our ", React.createElement("a", { href: "/privacy" }, "Privacy policy"), ".")))));
}

function ExperiencesPage({ onNav, preset }) {
  React.useEffect(() => {
    if (!preset) return;
    const t = setTimeout(() => { const el = document.getElementById("plan"); el && el.scrollIntoView({ behavior: "smooth" }); }, 60);
    return () => clearTimeout(t);
  }, [preset]);
  const toPlan = () => { const el = document.getElementById("plan"); el && el.scrollIntoView({ behavior: "smooth" }); };
  const steps = [
    ["01", "Tell us your day", "The experience, the date, who is coming. A few lines are enough."],
    ["02", "We come back personally", "Within 24 hours, with availability and the details of your day."],
    ["03", "You live it", "We meet you where the day begins. We take care of the rest."]
  ];
  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "ex-hero" }, React.createElement("div", { className: "st-wrap ex-hero-in" },
      React.createElement("p", { className: "ex-lbl ex-on-dark-65" }, "Day experiences · Zurich and beyond"),
      React.createElement("h1", { className: "ex-d1" }, "One day. Curated."),
      React.createElement("p", { className: "ex-hero-lead" }, "A few hours or a full day, shaped by the people who know Switzerland from within. A sommelier, a chef, a host on the mountain. We plan the day. You live it."),
      React.createElement("p", { className: "ex-voice" }, "Some days are worth more than a week."),
      React.createElement("div", null, React.createElement(Button, { variant: "lime", onClick: toPlan }, "Plan your day →")))),
    React.createElement("section", { className: "ex-grid-sec" }, React.createElement("div", { className: "st-wrap" },
      React.createElement("div", { className: "ex-grid-head" },
        React.createElement("div", null,
          React.createElement("p", { className: "ex-lbl ex-fg2" }, "Seven ways to spend a day"),
          React.createElement("h2", { className: "ex-d2" }, "In the city. From the city.")),
        React.createElement("p", { className: "ex-grid-intro" }, "Every experience runs privately, and some in small groups. Tell us the day and who is coming. We shape the rest.")),
      React.createElement("div", { className: "ex-grid" }, EXPERIENCES.map(e => React.createElement(ExperienceCard, { key: e.id, e, onNav }))))),
    React.createElement("section", { className: "ex-how" }, React.createElement("div", { className: "st-wrap" },
      React.createElement("p", { className: "ex-lbl ex-fg2" }, "How it works"),
      React.createElement("h2", { className: "ex-d2" }, "A conversation, not a checkout"),
      React.createElement("ol", { className: "ex-how-list" }, steps.map(([n, t, d]) => React.createElement("li", { key: n },
        React.createElement("span", { className: "ex-num" }, n),
        React.createElement("h3", { className: "ex-d4" }, t),
        React.createElement("p", null, d)))))),
    React.createElement(ExperienceForm, { preset }));
}

function ExperienceDetailPage({ onNav }) {
  const d = WINE_CHEESE;
  return React.createElement(React.Fragment, null,
    React.createElement(ExpPhoto, { text: d.photo, className: "ex-detail-ph" }),
    React.createElement("section", { className: "ex-detail" }, React.createElement("div", { className: "st-wrap ex-detail-in" },
      React.createElement("div", { className: "ex-detail-main" },
        React.createElement("a", { className: "ex-lbl ex-fg2 ex-crumb", href: "/experiences", onClick: e => { e.preventDefault(); onNav("experiences"); } }, d.crumb),
        React.createElement("h1", { className: "ex-d1 ex-detail-title" }, d.title),
        React.createElement("p", { className: "ex-detail-lead" }, d.lead),
        React.createElement("h2", { className: "ex-lbl ex-fg2 ex-day-h" }, "The day"),
        React.createElement("ol", { className: "ex-day" }, d.steps.map((s, i) => React.createElement("li", { key: i },
          React.createElement("span", { className: "ex-num" }, "0" + (i + 1)), React.createElement("p", null, s)))),
        React.createElement("p", { className: "ex-voice ex-voice-lg" }, d.voice)),
      React.createElement("aside", { className: "ex-facts" },
        React.createElement("p", { className: "ex-lbl ex-fg2" }, "The facts"),
        React.createElement("dl", null, d.facts.map(([k, v]) => React.createElement("div", { key: k, className: "ex-fact" },
          React.createElement("dt", null, k), React.createElement("dd", null, v)))),
        React.createElement("p", { className: "ex-facts-note" }, "Price and availability on request. We come back to you personally within 24 hours."),
        React.createElement("div", null, React.createElement(Button, { variant: "lime", onClick: () => onNav("experiences", "swiss-wine-cheese") }, "Plan this day →"))))),
    React.createElement("section", { className: "ex-others" }, React.createElement("div", { className: "st-wrap" },
      React.createElement("h2", { className: "ex-d3" }, "Other days in Zurich"),
      React.createElement("div", { className: "ex-grid ex-grid-3" }, d.others.map(id => { const e = expById(id); return React.createElement(ExperienceCard, { key: id, e: Object.assign({}, e, { line: null, meta: null }), onNav }); })))));
}

function ChefSeriesSection() {
  const [status, setStatus] = React.useState("idle");
  const [err, setErr] = React.useState("");
  const onSubmit = async ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const email = (form.elements.email.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setErr("Please check this email address."); form.elements.email.focus(); return; }
    setErr(""); setStatus("sending");
    try { await postNetlifyForm(form); setStatus("sent"); window.track && window.track("Chef Series Waitlist"); }
    catch (e) { setStatus("error"); }
  };
  const c = CHEF_SERIES;
  return React.createElement("section", { id: "chef-series", className: "ex-chef", "data-screen-label": "Home · Chef Series" },
    React.createElement("div", { className: "st-wrap ex-chef-in" },
      React.createElement(ExpPhoto, { text: c.photo, className: "ex-chef-ph" }),
      React.createElement("div", { className: "ex-chef-body" },
        React.createElement("p", { className: "ex-lbl ex-on-dark-65" }, c.label),
        React.createElement("h2", { className: "ex-d2 ex-lime" }, c.title),
        React.createElement("p", { className: "ex-chef-lead" }, c.lead),
        React.createElement("p", { className: "ex-voice" }, c.voice),
        React.createElement("p", { className: "ex-chef-meta" }, c.meta),
        status === "sent"
          ? React.createElement("p", { className: "ex-chef-meta", role: "status" }, "Thank you. You're on the list for the first edition.")
          : React.createElement("form", { className: "ex-chef-form", name: "chef-series-waitlist", onSubmit, noValidate: true },
              React.createElement("input", { type: "hidden", name: "form-name", value: "chef-series-waitlist" }),
              React.createElement("input", { type: "hidden", name: "type", value: "chef-series-waitlist" }),
              React.createElement("p", { className: "st-form-hp" }, React.createElement("label", null, "Don’t fill this out if you’re human: ", React.createElement("input", { name: "bot-field", tabIndex: -1, autoComplete: "off" }))),
              React.createElement("label", { htmlFor: "cs-mail", className: "ex-lbl ex-on-dark-65 ex-chef-label" }, "Hear about the first edition"),
              React.createElement("input", { id: "cs-mail", name: "email", type: "email", autoComplete: "email", placeholder: "Your email", "aria-invalid": err ? "true" : undefined }),
              React.createElement("button", { type: "submit", className: "ex-btn-outline" }, status === "sending" ? "Sending…" : "Join the list →"),
              err && React.createElement("p", { className: "ex-err is-wide", role: "alert" }, err),
              status === "error" && React.createElement("p", { className: "ex-err is-wide", role: "alert" }, "We couldn’t send that from here. Please try again."),
              React.createElement("p", { className: "ex-consent is-wide" }, "We use your email only to tell you about the Chef Series. See our ", React.createElement("a", { href: "/privacy" }, "Privacy policy"), ".")))));
}

/* Floating notice: after the hero, not on /experiences or form pages, never over the home waitlist form; closed = gone for this visitor. */
const CHEF_NOTICE_KEY = "st-chef-notice-closed";
function ChefNotice({ view, onNav }) {
  const readClosed = () => { try { return window.localStorage.getItem(CHEF_NOTICE_KEY) === "1"; } catch (e) { return false; } };
  const [closed, setClosed] = React.useState(readClosed);
  const [past, setPast] = React.useState(false);
  const [formVisible, setFormVisible] = React.useState(false);
  const hiddenHere = ["experiences", "experience", "plan", "legal", "privacy"].indexOf(view) > -1;
  React.useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [view]);
  React.useEffect(() => {
    const el = document.getElementById("chef-series");
    if (!el || !("IntersectionObserver" in window)) { setFormVisible(false); return; }
    const io = new IntersectionObserver(es => es.forEach(e => setFormVisible(e.isIntersecting)), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, [view]);
  if (closed || hiddenHere || !past || formVisible) return null;
  const close = () => {
    try { window.localStorage.setItem(CHEF_NOTICE_KEY, "1"); } catch (e) {}
    setClosed(true);
    window.track && window.track("Chef Notice Close");
  };
  const join = ev => {
    ev.preventDefault();
    if (view !== "home") onNav("home");
    setTimeout(() => { const el = document.getElementById("chef-series"); el && el.scrollIntoView({ behavior: "smooth" }); }, view === "home" ? 0 : 400);
  };
  return React.createElement("aside", { className: "ex-notice", "aria-label": "The Chef Series" },
    React.createElement("div", { className: "ex-notice-top" },
      React.createElement("p", { className: "ex-lbl ex-on-dark-65" }, "New in Zurich"),
      React.createElement("button", { type: "button", className: "ex-notice-close", "aria-label": "Close", onClick: close },
        React.createElement("svg", { "aria-hidden": "true", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" }, React.createElement("path", { d: "M3 3l10 10M13 3L3 13" })))),
    React.createElement("p", { className: "ex-notice-title" }, "The Chef Series"),
    React.createElement("p", { className: "ex-notice-text" }, "One chef opens their city. First edition spring 2027."),
    React.createElement("a", { href: "/#chef-series", className: "ex-notice-link", onClick: join }, "Join the list →"));
}

Object.assign(window, { EXPERIENCES, ExperiencesPage, ExperienceDetailPage, ChefSeriesSection, ChefNotice });
