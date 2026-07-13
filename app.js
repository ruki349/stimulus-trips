const {
  useState: useState_,
  useEffect: useEffect_
} = React;
const TWEAK_DEFAULTS = {
  "heroLayout": "Low-left",
  "heroBg": "Video",
  "heroFit": "Fill (crop)",
  "lime": "Signature",
  "scale": "Editorial",
  "photo": "Full-bleed",
  "tone": "Poetic"
};
const MAP = {
  heroLayout: {
    "Low-left": "lowleft",
    "Centered": "centered",
    "Editorial split": "split"
  },
  heroBg: {
    "Video": "video",
    "Photo": "photo"
  },
  heroFit: {
    "Fit (sides)": "fit",
    "Fill (crop)": "fill"
  },
  lime: {
    "Whisper": "whisper",
    "Signature": "signature",
    "Loud": "loud"
  },
  scale: {
    "Compact": "compact",
    "Editorial": "editorial",
    "Grand": "grand"
  },
  photo: {
    "Full-bleed": "fullbleed",
    "Editorial": "editorial"
  },
  tone: {
    "Poetic": "poetic",
    "Direct": "direct"
  }
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = useState_("home");
  const [journey, setJourney] = useState_(null);
  const nav = v => {
    setJourney(null);
    setView(v);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const open = (j, v) => {
    if (v) return nav(v);
    setJourney(j);
    setView("detail");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const tone = MAP.tone[t.tone] || "poetic";
  const c = COPY[tone];
  const heroLayout = MAP.heroLayout[t.heroLayout] || "lowleft";
  const heroVideo = (MAP.heroBg[t.heroBg] || "video") === "video";
  const heroVideoFit = MAP.heroFit[t.heroFit] || "fit";
  return React.createElement("div", {
    className: "st-app",
    "data-hero": heroLayout,
    "data-lime": MAP.lime[t.lime] || "signature",
    "data-scale": MAP.scale[t.scale] || "editorial",
    "data-photo": MAP.photo[t.photo] || "fullbleed"
  }, React.createElement(Nav, {
    onNav: nav,
    current: view
  }), React.createElement("main", null, view === "home" && React.createElement(HomePage, {
    c: c,
    heroLayout: heroLayout,
    heroVideo: heroVideo,
    heroVideoFit: heroVideoFit,
    onNav: nav,
    onOpen: open
  }), view === "journeys" && React.createElement(JourneysPage, {
    c: c,
    onOpen: open
  }), view === "ways" && React.createElement(WaysPage, {
    c: c,
    onNav: nav,
    onOpen: open
  }), view === "about" && React.createElement(AboutPage, {
    c: c,
    onNav: nav
  }), view === "contact" && React.createElement(ContactPage, {
    c: c
  }), view === "detail" && journey && React.createElement(JourneyDetail, {
    journey: journey,
    c: c,
    onBack: () => nav("journeys"),
    onNav: nav
  })), React.createElement(Footer, {
    onNav: nav
  }), React.createElement(WhatsAppFab, null), React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, React.createElement(TweakSection, {
    label: "Hero"
  }), React.createElement(TweakRadio, {
    label: "Layout",
    value: t.heroLayout,
    options: ["Low-left", "Centered", "Editorial split"],
    onChange: v => setTweak("heroLayout", v)
  }), React.createElement(TweakRadio, {
    label: "Background",
    value: t.heroBg,
    options: ["Video", "Photo"],
    onChange: v => setTweak("heroBg", v)
  }), React.createElement(TweakRadio, {
    label: "Video fit",
    value: t.heroFit,
    options: ["Fit (sides)", "Fill (crop)"],
    onChange: v => setTweak("heroFit", v)
  }), React.createElement(TweakSection, {
    label: "Accent \u2014 acid lime"
  }), React.createElement(TweakRadio, {
    label: "Intensity",
    value: t.lime,
    options: ["Whisper", "Signature", "Loud"],
    onChange: v => setTweak("lime", v)
  }), React.createElement(TweakSection, {
    label: "Typography"
  }), React.createElement(TweakRadio, {
    label: "Display scale",
    value: t.scale,
    options: ["Compact", "Editorial", "Grand"],
    onChange: v => setTweak("scale", v)
  }), React.createElement(TweakSection, {
    label: "Photography"
  }), React.createElement(TweakRadio, {
    label: "Register",
    value: t.photo,
    options: ["Full-bleed", "Editorial"],
    onChange: v => setTweak("photo", v)
  }), React.createElement(TweakSection, {
    label: "Copy"
  }), React.createElement(TweakRadio, {
    label: "Tone of voice",
    value: t.tone,
    options: ["Poetic", "Direct"],
    onChange: v => setTweak("tone", v)
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
