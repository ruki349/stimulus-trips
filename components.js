const {
  useState,
  useEffect,
  useRef
} = React;
function Icon({
  name,
  size = 20,
  stroke = 1.6,
  style,
  className
}) {
  const p = {
    arrow: React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    arrowL: React.createElement("path", {
      d: "M19 12H5M11 6l-6 6 6 6"
    }),
    menu: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 6h18"
    }), React.createElement("path", {
      d: "M3 12h18"
    }), React.createElement("path", {
      d: "M3 18h18"
    })),
    close: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M6 6l12 12"
    }), React.createElement("path", {
      d: "M18 6 6 18"
    })),
    pin: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    mail: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2.5"
    }), React.createElement("path", {
      d: "m4 7 8 6 8-6"
    })),
    phone: React.createElement("path", {
      d: "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L17 17l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z"
    }),
    train: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "5",
      y: "3",
      width: "14",
      height: "14",
      rx: "3"
    }), React.createElement("path", {
      d: "M9 17l-2 4M15 17l2 4M5 11h14"
    }), React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "0.6"
    }), React.createElement("circle", {
      cx: "15",
      cy: "8",
      r: "0.6"
    })),
    boat: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 14h18l-2 5H5l-2-5Z"
    }), React.createElement("path", {
      d: "M12 3v7M7 10l5-3 5 3"
    })),
    bike: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "6",
      cy: "17",
      r: "3"
    }), React.createElement("circle", {
      cx: "18",
      cy: "17",
      r: "3"
    }), React.createElement("path", {
      d: "M6 17l4-8h5l3 8M9 9h5"
    })),
    star: React.createElement("path", {
      d: "M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3Z"
    }),
    quote: React.createElement("path", {
      d: "M7 7h4v6a4 4 0 0 1-4 4M13 7h4v6a4 4 0 0 1-4 4"
    }),
    check: React.createElement("path", {
      d: "M5 12.5 10 17.5 19.5 7"
    }),
    leaf: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 20c8 1 15-4 15-14 0 0-13-2-14 8"
    }), React.createElement("path", {
      d: "M4 20c2-7 7-10 11-11"
    })),
    play: React.createElement("path", {
      d: "M8 5.5v13l11-6.5-11-6.5Z"
    }),
    whatsapp: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3.5 20.5l1.4-4.9A8.4 8.4 0 1 1 8.4 18.9L3.5 20.5Z"
    }), React.createElement("path", {
      d: "M8.7 8.3c.2-.5 1-.4 1.2.1l.5 1.2c.1.3 0 .6-.2.8l-.4.4c.5 1 1.2 1.7 2.2 2.2l.4-.5c.2-.3.5-.3.8-.2l1.2.5c.5.2.7.8.4 1.2-.5.8-1.5 1.1-2.4.8a6.6 6.6 0 0 1-4.2-4.2c-.2-.7-.1-1.4.1-1.6Z"
    }))
  }[name];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className,
    "aria-hidden": "true"
  }, p);
}
function Eyebrow({
  children,
  color,
  className = "",
  style
}) {
  return React.createElement("p", {
    className: `st-eyebrow ${className}`,
    style: {
      color,
      ...style
    }
  }, children);
}
function Button({
  children,
  variant = "primary",
  onClick,
  style,
  arrow
}) {
  return React.createElement("button", {
    className: `st-btn st-btn-${variant}`,
    onClick: onClick,
    style: style
  }, children, arrow && React.createElement(Icon, {
    name: "arrow",
    size: 18
  }));
}
function TextLink({
  children,
  onClick,
  style
}) {
  return React.createElement("a", {
    className: "st-tlink",
    onClick: onClick,
    style: style
  }, children, React.createElement(Icon, {
    name: "arrow",
    size: 16
  }));
}

function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  style
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return React.createElement(Tag, {
    ref: ref,
    className: `st-reveal ${shown ? "in" : ""} ${className}`,
    style: {
      transitionDelay: shown ? `${delay}ms` : "0ms",
      ...style
    }
  }, children);
}

function Nav({
  onNav,
  current
}) {
  const [open, setOpen] = useState(false);
  const links = [["journeys", "Journeys"], ["ways", "How we travel"], ["about", "About"], ["contact", "Contact"]];
  return React.createElement("header", {
    className: "st-nav"
  }, React.createElement("a", {
    className: "st-nav-brand",
    onClick: () => onNav("home")
  }, React.createElement("img", {
    src: "assets/logo-mark.png",
    alt: "",
    className: "st-nav-mark"
  }), React.createElement("span", {
    className: "st-nav-word"
  }, "Stimulus\u00A0Trips")), React.createElement("nav", {
    className: `st-nav-links ${open ? "open" : ""}`
  }, links.map(([id, label]) => React.createElement("a", {
    key: id,
    className: current === id ? "active" : "",
    onClick: () => {
      onNav(id);
      setOpen(false);
    }
  }, label)), React.createElement(Button, {
    variant: "lime",
    onClick: () => {
      onNav("contact");
      setOpen(false);
    }
  }, "Plan a journey")), React.createElement("button", {
    className: "st-nav-toggle",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu"
  }, React.createElement(Icon, {
    name: open ? "close" : "menu"
  })));
}

function Footer({
  onNav
}) {
  return React.createElement("footer", {
    className: "st-footer"
  }, React.createElement("div", {
    className: "st-footer-top"
  }, React.createElement("div", {
    className: "st-footer-lockup"
  }, React.createElement("img", {
    src: "assets/logo-mark-white.png",
    alt: "Stimulus Trips"
  }), React.createElement("span", {
    className: "st-nav-word"
  }, "Stimulus\u00A0Trips"), React.createElement("p", {
    className: "st-footer-tag"
  }, "Travel that awakens the senses.")), React.createElement("div", {
    className: "st-footer-cols"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--lime)"
  }, "Journeys"), React.createElement("a", {
    onClick: () => onNav("journeys")
  }, "Scenic Rail"), React.createElement("a", {
    onClick: () => onNav("journeys")
  }, "Lake Crossings"), React.createElement("a", {
    onClick: () => onNav("journeys")
  }, "Alpine Cycling"), React.createElement("a", {
    onClick: () => onNav("journeys")
  }, "Signature Pack")), React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--lime)"
  }, "Studio"), React.createElement("a", {
    onClick: () => onNav("about")
  }, "About"), React.createElement("a", {
    onClick: () => onNav("ways")
  }, "How we travel"), React.createElement("a", {
    onClick: () => onNav("contact")
  }, "Contact")), React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--lime)"
  }, "Find us"), React.createElement("a", null, "Bahnhofstrasse, Z\u00FCrich"), React.createElement("a", {
    href: waLink(),
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp \u00B7 ", WHATSAPP.display), React.createElement("a", null, "Switzerland")))), React.createElement("div", {
    className: "st-footer-base"
  }, React.createElement("span", null, "\u00A9 2026 Stimulus Trips \u00B7 Swiss Alpine Travel Designer"), React.createElement("span", null, "Z\u00FCrich \u00B7 Switzerland")));
}

const WHATSAPP = {
  number: "41762373374",
  display: "+41 76 237 33 74",
  message: "Hi Stimulus Trips, I'd like to plan a journey."
};
function waLink() {
  return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;
}
function WhatsAppFab() {
  return React.createElement("a", {
    className: "st-wa-fab",
    href: waLink(),
    target: "_blank",
    rel: "noopener",
    "aria-label": "Chat on WhatsApp"
  }, React.createElement(Icon, {
    name: "whatsapp",
    size: 26,
    stroke: 1.7
  }), React.createElement("span", {
    className: "st-wa-fab-label"
  }, "WhatsApp"));
}
Object.assign(window, {
  Icon,
  Eyebrow,
  Button,
  TextLink,
  Reveal,
  Nav,
  Footer,
  WhatsAppFab,
  WHATSAPP,
  waLink
});
