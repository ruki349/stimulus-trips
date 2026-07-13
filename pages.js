function PageIntro({
  eyebrow,
  title,
  lead
}) {
  return React.createElement("section", {
    style: {
      padding: "clamp(56px,8vw,104px) 0 8px"
    }
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement(Reveal, {
    className: "st-section-head",
    style: {
      maxWidth: 880
    }
  }, React.createElement(Eyebrow, null, eyebrow), React.createElement("h1", {
    className: "st-section-title",
    style: {
      fontSize: "calc(clamp(2.4rem, 5.5vw, 4rem) * var(--scale))"
    }
  }, lines(title)), lead && React.createElement("p", {
    className: "st-lead",
    style: {
      marginTop: 8,
      maxWidth: 720
    }
  }, lead))));
}

function HomePage({
  c,
  heroLayout,
  heroVideo,
  heroVideoFit,
  onNav,
  onOpen
}) {
  return React.createElement(React.Fragment, null, React.createElement(Hero, {
    layout: heroLayout,
    c: c,
    onNav: onNav,
    img: PH + "photo-hero-valley.png",
    video: heroVideo ? PH + "hero-video.mp4" : null,
    videoFit: heroVideoFit
  }), React.createElement(MeaningBand, {
    c: c
  }), React.createElement(ThreeWays, {
    c: c,
    onNav: onNav
  }), React.createElement(Spotlight, {
    c: c,
    onNav: onNav
  }), React.createElement(VideoShowcase, {
    c: c
  }), React.createElement(QuoteBand, {
    c: c
  }), React.createElement(JourneyGrid, {
    c: c,
    onOpen: (j, v) => v ? onNav(v) : onOpen(j)
  }), React.createElement(Inquiry, {
    c: c
  }));
}

function JourneysPage({
  c,
  onOpen
}) {
  return React.createElement(React.Fragment, null, React.createElement(PageIntro, {
    eyebrow: c.journeysEyebrow,
    title: c.journeysTitle,
    lead: "Six signature journeys, each a starting point \u2014 we reshape every one around how you want to travel, where, and at what pace."
  }), React.createElement(JourneyGrid, {
    c: c,
    onOpen: onOpen,
    withFilter: true
  }), React.createElement(Inquiry, {
    c: c
  }));
}

function JourneyDetail({
  journey,
  c,
  onBack,
  onNav
}) {
  return React.createElement("section", null, React.createElement("div", {
    className: "st-detail-hero"
  }, React.createElement("div", {
    className: "st-hero-photo",
    style: {
      backgroundImage: `url(${journey.img})`
    }
  }), React.createElement("div", {
    className: "st-detail-hero-scrim"
  }), React.createElement("div", {
    className: "st-detail-hero-in"
  }, React.createElement("a", {
    className: "st-back",
    onClick: onBack
  }, React.createElement(Icon, {
    name: "arrowL",
    size: 17
  }), " All journeys"), React.createElement(Eyebrow, {
    style: {
      color: "var(--lime)"
    }
  }, journey.mode), React.createElement("h1", {
    className: "st-detail-title"
  }, journey.title))), React.createElement("div", {
    className: "st-detail-body"
  }, React.createElement("div", {
    className: "st-detail-cols"
  }, React.createElement("div", null, React.createElement("p", {
    className: "st-detail-lead"
  }, journey.lead), React.createElement(Eyebrow, {
    style: {
      marginBottom: 4
    }
  }, "Day by day"), React.createElement("div", {
    className: "st-itin"
  }, journey.itin.map(([n, h, t]) => React.createElement("div", {
    className: "st-itin-day",
    key: n
  }, React.createElement("div", {
    className: "st-itin-num"
  }, n), React.createElement("div", null, React.createElement("h4", {
    className: "st-itin-h"
  }, h), React.createElement("p", {
    className: "st-itin-t"
  }, t))))), React.createElement("div", {
    className: "st-detail-gallery"
  }, journey.gallery.map((g, i) => React.createElement("img", {
    key: i,
    src: g,
    alt: ""
  })))), React.createElement("aside", {
    className: "st-detail-aside"
  }, React.createElement("div", {
    className: "st-meta-row"
  }, React.createElement("span", null, "Duration"), React.createElement("b", null, journey.days)), React.createElement("div", {
    className: "st-meta-row"
  }, React.createElement("span", null, "Travels by"), React.createElement("b", null, journey.mode)), React.createElement("div", {
    className: "st-meta-row"
  }, React.createElement("span", null, "From"), React.createElement("b", null, journey.price)), React.createElement("div", {
    className: "st-chips"
  }, ["Private guide", "Luggage transfer", "Boutique stays", "Half-board"].map(ch => React.createElement("span", {
    className: "st-chip",
    key: ch
  }, ch))), React.createElement(Button, {
    variant: "lime",
    onClick: () => onNav("contact"),
    arrow: true,
    style: {
      marginTop: 12
    }
  }, "Enquire about this journey")))));
}

function WaysPage({
  c,
  onNav,
  onOpen
}) {
  return React.createElement(React.Fragment, null, React.createElement(PageIntro, {
    eyebrow: c.waysEyebrow,
    title: ["Train + Lake +", "Mountain + Bike"],
    lead: "We don't sell hotels or fixed packages. We connect Switzerland's slow, scenic ways of moving into one journey \u2014 and design it around you."
  }), React.createElement(ThreeWays, {
    c: c,
    onNav: onNav,
    detailed: true
  }), React.createElement(QuoteBand, {
    c: c
  }), React.createElement(Spotlight, {
    c: c,
    onNav: onNav,
    flip: true
  }), React.createElement(JourneyGrid, {
    c: c,
    onOpen: (j, v) => v ? onNav(v) : onOpen(j)
  }));
}

function AboutPage({
  c,
  onNav
}) {
  return React.createElement(React.Fragment, null, React.createElement(PageIntro, {
    eyebrow: c.aboutEyebrow,
    title: c.aboutTitle,
    lead: c.aboutLead
  }), React.createElement(Spotlight, {
    c: c,
    onNav: onNav,
    flip: true
  }), React.createElement("section", {
    style: {
      padding: "clamp(48px,7vw,96px) 0",
      background: "var(--paper-cool)"
    }
  }, React.createElement("div", {
    className: "st-wrap"
  }, React.createElement(Reveal, {
    className: "st-section-head",
    style: {
      marginBottom: 48
    }
  }, React.createElement(Eyebrow, null, "What we value"), React.createElement("h2", {
    className: "st-section-title"
  }, "Not faster. Not more.", React.createElement("br", null), "Just better.")), React.createElement("div", {
    className: "st-ways-grid"
  }, VALUES.map(([t, d], i) => React.createElement(Reveal, {
    key: t,
    className: "st-way",
    delay: i * 90
  }, React.createElement("div", {
    className: "st-way-icon"
  }, React.createElement(Icon, {
    name: ["leaf", "star", "check"][i],
    size: 26
  })), React.createElement("h3", {
    className: "st-way-name"
  }, t), React.createElement("p", {
    className: "st-way-text"
  }, d)))))), React.createElement(MeaningBand, {
    c: c
  }), React.createElement(Inquiry, {
    c: c
  }));
}

function ContactPage({
  c
}) {
  return React.createElement(React.Fragment, null, React.createElement(PageIntro, {
    eyebrow: c.inquiryEyebrow,
    title: c.inquiryTitle,
    lead: "Tell us a little about the journey you have in mind. We'll reply within two days with first thoughts \u2014 never an off-the-shelf package."
  }), React.createElement(Inquiry, {
    c: c
  }));
}
Object.assign(window, {
  HomePage,
  JourneysPage,
  JourneyDetail,
  WaysPage,
  AboutPage,
  ContactPage,
  PageIntro
});
