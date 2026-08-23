const TWEAK_DEFAULTS = { "scale": "Editorial" };
const MAP = { scale: { "Compact": "compact", "Editorial": "editorial", "Grand": "grand" } };
const JOURNEY_IDS = ["explorer", "boutique", "signature"];
const SITE = "https://stimulustrips.com";
function pathFor(view, id) {
  if (view === "journeys") return "/journeys";
  if (view === "chapter") return "/" + id;
  if (view === "about") return "/about";
  if (view === "contact") return "/contact";
  if (view === "plan") return "/plan-a-journey" + (id ? "?journey=" + id : "");
  return "/";
}
function parsePath(pathname, search) {
  const path = pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
  if (path === "/journeys") return { view: "journeys" };
  const m = path.match(/^\/(?:journeys\/)?(explorer|boutique|signature)$/);
  if (m) return { view: "chapter", id: m[1] };
  if (path === "/about") return { view: "about" };
  if (path === "/contact") return { view: "contact" };
  if (path === "/plan-a-journey") {
    const j = (new URLSearchParams(search || "").get("journey") || "").toLowerCase();
    return { view: "plan", id: JOURNEY_IDS.indexOf(j) > -1 ? j : "" };
  }
  return { view: "home" };
}
const META = {
  home: ["Stimulus Trips — Journeys through Switzerland", "Stimulus is a network of people creating extraordinary journeys through Switzerland. Curated by us. Shaped around you.", "assets/signature-hero.jpg"],
  journeys: ["Journeys — Explorer, Boutique, Signature | Stimulus Trips", "Three ways to experience Switzerland: Explorer, Boutique and Signature. Every journey is shaped around you.", "assets/chapter-explorer.jpg"],
  explorer: ["Explorer — Switzerland by rail, e-bike and ferry | Stimulus Trips", "An eight-day journey across Switzerland by panoramic rail, e-bike, ferry and mountain railway. From CHF 3,690 per person.", "assets/chapter-explorer.jpg"],
  boutique: ["Boutique — Culture, food and craft in Switzerland | Stimulus Trips", "Seven days in four Swiss places, looking closer at architecture, gastronomy and craftsmanship. From CHF 4,480 per person.", "assets/jov-boutique.jpg"],
  signature: ["Signature — A journey written with you | Stimulus Trips", "A Swiss journey designed entirely around your interests, your people and your reason for travelling. From CHF 6,200 per person.", "assets/journeys-signature.jpg"],
  about: ["About Stimulus — A network of people | Stimulus Trips", "We connect remarkable people to create remarkable journeys through Switzerland.", "assets/moment-oberalp.jpg"],
  contact: ["Contact | Stimulus Trips", "Talk to Stimulus Trips: hi@stimulustrips.com or WhatsApp +41 76 237 33 74.", "assets/signature-hero.jpg"],
  plan: ["Plan a journey | Stimulus Trips", "Tell us about the journey you have in mind and we'll start the conversation.", "assets/signature-hero.jpg"]
};
function setMeta(sel, attr, value) {
  let el = document.head.querySelector(sel);
  if (!el) return;
  el.setAttribute(attr, value);
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState(() => window.__previewRoute || parsePath(window.location.pathname, window.location.search));
  const first = React.useRef(true);
  const nav = (view, id) => {
    if (view === "plan") window.track && window.track("CTA: Plan a journey", { from: route.view === "chapter" ? route.id : route.view });
    setRoute({ view, id });
    window.history.pushState({ view, id }, "", pathFor(view, id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  React.useEffect(() => {
    const onPop = () => setRoute(parsePath(window.location.pathname, window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const view = route.view;
  React.useEffect(() => {
    const key = view === "chapter" ? route.id : view;
    const m = META[key] || META.home;
    document.title = m[0];
    setMeta('meta[name="description"]', "content", m[1]);
    setMeta('meta[property="og:title"]', "content", m[0]);
    setMeta('meta[property="og:description"]', "content", m[1]);
    setMeta('meta[property="og:image"]', "content", SITE + "/" + m[2]);
    const canonicalPath = pathFor(view, route.id).split("?")[0];
    setMeta('link[rel="canonical"]', "href", SITE + canonicalPath);
    setMeta('meta[property="og:url"]', "content", SITE + canonicalPath);
    if (first.current) { first.current = false; window.pageview && window.pageview(); return; }
    window.pageview && window.pageview();
  }, [view, route.id]);
  const current = view === "chapter" ? "journeys" : view;
  return React.createElement("div", { className: "st-app", "data-scale": MAP.scale[t.scale] || "editorial" },
    React.createElement(Nav, { onNav: nav, current }),
    React.createElement("main", null,
      view === "home" && React.createElement(HomePage, { c: COPY, onNav: nav }),
      view === "journeys" && React.createElement(JourneysPage, { c: COPY, onNav: nav }),
      view === "chapter" && React.createElement(ChapterPage, { id: route.id, onNav: nav }),
      view === "about" && React.createElement(AboutPage, { c: COPY, onNav: nav }),
      view === "contact" && React.createElement(ContactPage, { c: COPY, onNav: nav }),
      view === "plan" && React.createElement(PlanPage, { c: COPY, journey: route.id })),
    React.createElement(Footer, { onNav: nav }),
    React.createElement(WhatsAppFab, null),
    React.createElement(TweaksPanel, { title: "Tweaks" },
      React.createElement(TweakSection, { label: "Typography" }),
      React.createElement(TweakRadio, { label: "Display scale", value: t.scale, options: ["Compact", "Editorial", "Grand"], onChange: v => setTweak("scale", v) })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
