const TWEAK_DEFAULTS = { "scale": "Editorial" };
const MAP = { scale: { "Compact": "compact", "Editorial": "editorial", "Grand": "grand" } };
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = React.useState("home");
  const nav = v => { setView(v); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return React.createElement("div", { className: "st-app", "data-scale": MAP.scale[t.scale] || "editorial" },
    React.createElement(Nav, { onNav: nav, current: view }),
    React.createElement("main", null,
      view === "home" && React.createElement(HomePage, { c: COPY, onNav: nav }),
      view === "journeys" && React.createElement(JourneysPage, { c: COPY, onNav: nav }),
      view === "about" && React.createElement(AboutPage, { c: COPY, onNav: nav }),
      view === "contact" && React.createElement(ContactPage, { c: COPY })),
    React.createElement(Footer, { onNav: nav }),
    React.createElement(WhatsAppFab, null),
    React.createElement(TweaksPanel, { title: "Tweaks" },
      React.createElement(TweakSection, { label: "Typography" }),
      React.createElement(TweakRadio, { label: "Display scale", value: t.scale, options: ["Compact", "Editorial", "Grand"], onChange: v => setTweak("scale", v) })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
