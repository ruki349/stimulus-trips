const {
  useState: useS,
  useEffect: useE,
  useRef: useR
} = React;

const muteRef = el => {
  if (el) el.muted = true;
};
function lines(arr) {
  return arr.map((l, i) => React.createElement(React.Fragment, {
    key: i
  }, l, i < arr.length - 1 ? React.createElement("br", null) : null));
}

function HeroMedia({
  src,
  poster,
  fit
}) {
  const realSrc = typeof window !== "undefined" && window.__ST_VIDEO || src;
  const realPoster = typeof window !== "undefined" && window.__ST_POSTER || poster;
  const [blobUrl, setBlobUrl] = useS(null);
  const [playing, setPlaying] = useS(false);
  const playSrc = blobUrl || realSrc;

  const onMediaError = () => {
    if (blobUrl) return;
    fetch(realSrc).then(r => r.ok ? r.blob() : Promise.reject()).then(b => {
      setBlobUrl(URL.createObjectURL(b));
    }).catch(() => {});
  };

  useE(() => {
    const play = () => document.querySelectorAll(".st-hero-video, .st-hero-video-blur").forEach(v => {
      v.muted = true;
      const p = v.play();
      if (p) p.catch(() => {});
    });
    play();
    const evs = ["pointerdown", "touchstart", "keydown", "scroll"];
    const once = () => {
      play();
      evs.forEach(e => window.removeEventListener(e, once));
    };
    evs.forEach(e => window.addEventListener(e, once, {
      passive: true,
      once: true
    }));
    return () => evs.forEach(e => window.removeEventListener(e, once));
  }, [playSrc]);
  return React.createElement("div", {
    className: "st-hero-video-wrap",
    "data-fit": fit,
    "data-playing": playing ? "1" : "0"
  }, fit === "fit" && React.createElement("video", {
    className: "st-hero-video-blur",
    ref: muteRef,
    src: playSrc,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    "aria-hidden": "true"
  }), React.createElement("video", {
    className: "st-hero-video",
    ref: muteRef,
    src: playSrc,
    onPlaying: () => setPlaying(true),
    onTimeUpdate: e => {
      if (e.target.currentTime > 0) setPlaying(true);
    },
    onError: onMediaError,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto"
  }));
}

function Hero({
  layout,
  c,
  onNav,
  img,
  video,
  videoFit
}) {
  const isSplit = layout === "split";
  const media = video ? React.createElement(HeroMedia, {
    src: video,
    poster: img,
    fit: videoFit
  }) : React.createElement("div", {
    className: "st-hero-photo",
    style: {
      backgroundImage: `url(${img})`
    }
  });
  return React.createElement("section", {
    className: "st-hero"
  }, !isSplit && React.createElement(React.Fragment, null, media, React.createElement("div", {
    className: "st-hero-scrim"
  })), React.createElement("div", {
    className: "st-hero-inner"
  }, React.createElement(Eyebrow, {
    className: "st-hero-eyebrow"
  }, c.heroEyebrow), React.createElement("h1", {
    className: "st-hero-title"
  }, lines(c.heroTitle)), React.createElement("p", {
    className: "st-hero-lead"
  }, c.heroLead), React.createElement("div", {
    className: "st-hero-cta"
  }, React.createElement(Button, {
    variant: "lime",
    onClick: () => onNav("journeys"),
    arrow: true
  }, "Explore journeys"), React.createElement(Button, {
    variant: isSplit ? "ghost" : "ghost-light",
    onClick: () => onNav("ways")
  }, "How we travel"))), isSplit && React.createElement("div", {
    className: "st-hero-visual"
  }, media));
}

function MeaningBand({
  c
}) {
  const [pre, em, post] = c.meaningQuote;
  return React.createElement("section", {
    className: "st-meaning"
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement(Reveal, {
    className: "st-meaning-grid"
  }, React.createElement("blockquote", {
    className: "st-meaning-quote"
  }, pre, React.createElement("em", null, em), post), React.createElement("div", {
    className: "st-meaning-body"
  }, React.createElement(Eyebrow, null, c.meaningEyebrow), c.meaningBody.map((p, i) => React.createElement("p", {
    key: i
  }, p))))));
}

function ThreeWays({
  c,
  onNav,
  detailed = false
}) {
  return React.createElement("section", {
    className: "st-ways"
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement("div", {
    className: "st-section-head"
  }, React.createElement(Eyebrow, null, c.waysEyebrow), React.createElement("h2", {
    className: "st-section-title"
  }, lines(c.waysTitle))), React.createElement("div", {
    className: "st-ways-grid"
  }, WAYS.map((w, i) => React.createElement(Reveal, {
    as: "div",
    key: w.icon,
    className: "st-way",
    delay: i * 90
  }, React.createElement("div", {
    className: "st-way-icon"
  }, React.createElement(Icon, {
    name: w.icon,
    size: 28
  })), React.createElement("span", {
    className: "st-way-num"
  }, w.num), React.createElement("h3", {
    className: "st-way-name"
  }, w.name), React.createElement("p", {
    className: "st-way-text"
  }, detailed ? w.long : w.text))))));
}

function Spotlight({
  c,
  flip = false,
  onNav
}) {
  return React.createElement("section", {
    className: `st-spot ${flip ? "flip" : ""}`
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement(Reveal, {
    className: "st-spot-grid"
  }, React.createElement("div", {
    className: "st-spot-body"
  }, React.createElement(Eyebrow, null, c.spotEyebrow), React.createElement("h2", {
    className: "st-section-title"
  }, lines(c.spotTitle)), c.spotBody.map((p, i) => React.createElement("p", {
    key: i
  }, p)), React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, React.createElement(TextLink, {
    onClick: () => onNav("journeys")
  }, "See our journeys"))), React.createElement("div", {
    className: "st-spot-visual"
  }, React.createElement("img", {
    src: PH + "photo-glacier-walker.png",
    alt: "A walker below a glacier near Zermatt"
  }), React.createElement("span", {
    className: "st-spot-tag"
  }, "The Swiss Alps")))));
}

function QuoteBand({
  c
}) {
  const [a, b, pre, ac, post] = c.quoteBand;
  return React.createElement("section", {
    className: "st-quoteband"
  }, React.createElement("div", {
    className: "st-quoteband-photo",
    style: {
      backgroundImage: `url(${PH}photo-hero-skiers.png)`
    }
  }), React.createElement("div", {
    className: "st-quoteband-scrim"
  }), React.createElement("div", {
    className: "st-quoteband-inner"
  }, React.createElement(Reveal, null, React.createElement("p", {
    className: "st-quoteband-q"
  }, a, React.createElement("br", null), b, React.createElement("br", null), pre, React.createElement("span", {
    className: "ac"
  }, ac), post), React.createElement("p", {
    className: "st-quoteband-sub"
  }, c.quoteSub))));
}

function JourneyGrid({
  c,
  onOpen,
  withFilter = false
}) {
  const [f, setF] = useS("all");
  const tabs = [["all", "All"], ["rail", "Rail"], ["lake", "Lake"], ["cycling", "Cycling"]];
  const list = f === "all" ? JOURNEYS : JOURNEYS.filter(j => j.modes.includes(f));
  return React.createElement("section", {
    className: "st-journeys"
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement("div", {
    className: "st-section-head"
  }, React.createElement(Eyebrow, null, c.journeysEyebrow), React.createElement("h2", {
    className: "st-section-title"
  }, lines(c.journeysTitle))), withFilter && React.createElement("div", {
    className: "st-filter"
  }, tabs.map(([id, label]) => React.createElement("button", {
    key: id,
    className: f === id ? "on" : "",
    onClick: () => setF(id)
  }, label))), React.createElement("div", {
    className: "st-jgrid"
  }, (withFilter ? list : JOURNEYS.slice(0, 3)).map((j, i) => React.createElement(Reveal, {
    as: "article",
    key: j.id,
    className: "st-jcard",
    delay: i % 3 * 80
  }, React.createElement("div", {
    onClick: () => onOpen(j)
  }, React.createElement("div", {
    className: "st-jcard-ph"
  }, React.createElement("img", {
    src: j.img,
    alt: j.title
  }), React.createElement("div", {
    className: "st-jcard-scrim"
  }), React.createElement("span", {
    className: "st-jcard-eb"
  }, j.mode)), React.createElement("div", {
    className: "st-jcard-body"
  }, React.createElement("h3", {
    className: "st-jcard-title"
  }, j.title), React.createElement("p", {
    className: "st-jcard-meta"
  }, j.days, " \u00B7 ", j.price)))))), !withFilter && React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, React.createElement(Button, {
    variant: "ghost",
    onClick: () => onOpen(null, "journeys"),
    arrow: true
  }, "View all journeys"))));
}

function Inquiry({
  c
}) {
  const [sent, setSent] = useS(false);
  const onSubmit = e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = k => (fd.get(k) || "").toString().trim() || "—";
    const txt = "Hi Stimulus Trips! I'd like to plan a journey.\n\n" + "Name: " + v("name") + "\n" + "Travellers: " + v("travellers") + "\n" + "Where to: " + v("where") + "\n" + "When: " + v("when") + "\n" + "What awakens me: " + v("about");
    window.open("https://wa.me/" + WHATSAPP.number + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
    setSent(true);
  };
  return React.createElement("section", {
    className: "st-inquiry"
  }, React.createElement("div", {
    className: "st-inquiry-grid"
  }, React.createElement("div", {
    className: "st-inquiry-left"
  }, React.createElement(Eyebrow, null, c.inquiryEyebrow), React.createElement("h2", {
    className: "st-section-title"
  }, lines(c.inquiryTitle)), React.createElement("p", {
    className: "st-inquiry-lead"
  }, c.inquiryLead), React.createElement("div", {
    className: "st-inquiry-detail"
  }, React.createElement("div", null, React.createElement(Icon, {
    name: "whatsapp",
    size: 17,
    style: {
      color: "var(--lime)"
    }
  }), React.createElement("b", null, WHATSAPP.display)), React.createElement("div", null, React.createElement(Icon, {
    name: "pin",
    size: 17,
    style: {
      color: "var(--lime)"
    }
  }), React.createElement("span", null, "Bahnhofstrasse \u00B7 8001 Z\u00FCrich \u00B7 Switzerland"))), React.createElement("a", {
    className: "st-wa-inline",
    href: waLink(),
    target: "_blank",
    rel: "noopener"
  }, React.createElement(Icon, {
    name: "whatsapp",
    size: 19
  }), " Chat with us on WhatsApp")), React.createElement("form", {
    className: "st-form",
    onSubmit: onSubmit
  }, sent ? React.createElement("div", {
    className: "st-form-done"
  }, React.createElement(Icon, {
    name: "whatsapp",
    size: 34,
    style: {
      color: "var(--lime)"
    }
  }), React.createElement("h3", null, "Opening WhatsApp\u2026"), React.createElement("p", null, "We'll continue the conversation there. If it didn't open, message us directly at ", WHATSAPP.display, "."), React.createElement("a", {
    className: "st-wa-inline",
    href: waLink(),
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--ink)",
      boxShadow: "none",
      background: "var(--lime)",
      marginTop: 4
    }
  }, React.createElement(Icon, {
    name: "whatsapp",
    size: 18
  }), " Open WhatsApp")) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "st-form-row"
  }, React.createElement("label", null, "Name", React.createElement("input", {
    name: "name",
    placeholder: "Your name"
  })), React.createElement("label", null, "Travellers", React.createElement("input", {
    name: "travellers",
    placeholder: "2 guests"
  }))), React.createElement("label", null, "Where to", React.createElement("input", {
    name: "where",
    placeholder: "Zermatt, Lake Lucerne, Engadin\u2026"
  })), React.createElement("label", null, "When", React.createElement("input", {
    name: "when",
    placeholder: "Roughly which month?"
  })), React.createElement("label", null, "What awakens you", React.createElement("textarea", {
    name: "about",
    rows: "3",
    placeholder: "Movement, quiet, food, views\u2026"
  })), React.createElement(Button, {
    variant: "lime"
  }, React.createElement(Icon, {
    name: "whatsapp",
    size: 18
  }), " Send via WhatsApp")))));
}

function VideoShowcase({
  c
}) {
  const films = [{
    poster: PH + "photo-hero-skiers.png",
    label: "Coming soon · your film",
    title: "A season in the Alps",
    big: true
  }, {
    poster: PH + "photo-rest-meadow.png",
    label: "Coming soon",
    title: "Meadow mornings"
  }, {
    poster: PH + "photo-cows-train.png",
    label: "Coming soon",
    title: "The slow line"
  }];
  return React.createElement("section", {
    className: "st-films"
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement("div", {
    className: "st-section-head"
  }, React.createElement(Eyebrow, null, "In motion"), React.createElement("h2", {
    className: "st-section-title"
  }, "Switzerland,", React.createElement("br", null), "felt \u2014 not just seen")), React.createElement("div", {
    className: "st-films-grid"
  }, films.map((f, i) => React.createElement(Reveal, {
    as: "figure",
    key: i,
    className: `st-film ${f.big ? "big" : ""}`,
    delay: i * 90
  }, React.createElement("div", {
    className: "st-film-media",
    style: {
      backgroundImage: `url(${f.poster})`
    }
  }, React.createElement("button", {
    className: "st-film-play",
    "aria-label": `Play ${f.title}`
  }, React.createElement(Icon, {
    name: "play",
    size: f.big ? 30 : 24
  })), React.createElement("span", {
    className: "st-film-flag"
  }, f.label)), React.createElement("figcaption", {
    className: "st-film-cap"
  }, f.title)))), React.createElement("p", {
    className: "st-films-note"
  }, "video \u00B7 drop your own films here when ready")));
}
Object.assign(window, {
  Hero,
  HeroMedia,
  MeaningBand,
  ThreeWays,
  Spotlight,
  QuoteBand,
  JourneyGrid,
  Inquiry,
  VideoShowcase,
  lines
});
