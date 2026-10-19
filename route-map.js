/* Reusable route map — real Switzerland geometry (Natural Earth 1:50m, clipped + simplified into
   assets/switzerland-map.json, ~9 KB, no CDN), copper route arcs. */
(function () {
  const PLACES = {
    "Z\u00FCrich":    { c: [8.5417, 47.3769], anchor: "start", dy: -14 },
    "Basel":         { c: [7.5886, 47.5596], anchor: "end",   dy: -14 },
    "Lucerne":       { c: [8.3093, 47.0502], anchor: "end",   dy: 22 },
    "Zug":           { c: [8.5150, 47.1662], anchor: "start", dy: -12 },
    "St. Moritz":    { c: [9.8383, 46.4983], anchor: "start", dy: 20 },
    "Chur":          { c: [9.5330, 46.8508], anchor: "start", dy: -12 },
    "Disentis":      { c: [8.8500, 46.7050], anchor: "start", dy: -12 },
    "Andermatt":     { c: [8.5940, 46.6350], anchor: "end",   dy: 22 },
    "Fl\u00FCelen":  { c: [8.6270, 46.9040], anchor: "start", dy: -12 },
    "Interlaken":    { c: [7.8632, 46.6863], anchor: "end",   dy: -12 },
    "Zermatt":       { c: [7.7491, 46.0207], anchor: "end",   dy: 20 },
    "Bern":          { c: [7.4474, 46.9480], anchor: "end",   dy: -12 },
    "Lugano":        { c: [8.9511, 46.0037], anchor: "start", dy: 20 },
    "Geneva":        { c: [6.1432, 46.2044], anchor: "end",   dy: 20 },
    "Lausanne":      { c: [6.6323, 46.5197], anchor: "end",   dy: 20 },
    "Montreux":      { c: [6.9107, 46.4312], anchor: "end",   dy: 20 },
    "Appenzell":     { c: [9.4096, 47.3310], anchor: "start", dy: -12 },
    "Lungern":       { c: [8.1603, 46.7858], anchor: "start", dy: 5 },
    "Brienz":        { c: [8.0386, 46.7541], anchor: "end",   dy: -10 },
    "Lauterbrunnen": { c: [7.9091, 46.5935], anchor: "end",   dy: 20 },
    "Lake Lucerne":  { c: [8.4850, 47.0090], anchor: "start", dy: 20 }
  };
  const NEIGHBOURS = [
    { name: "France",  at: [6.15, 46.75] },
    { name: "Germany", at: [8.30, 47.95] },
    { name: "Austria", at: [10.55, 47.20] },
    { name: "Italy",   at: [8.55, 45.70] }
  ];
  const MODE_LABEL = { rail: "Rail", water: "Lake crossing", bike: "E-bike", road: "Private transfer",
    move: "Rail \u00B7 Boat \u00B7 E-bike \u00B7 On foot", travel: "Rail \u00B7 Road \u00B7 Lake" };
  const GEO_URL = "assets/switzerland-map.json";
  let topoPromise = null;
  function loadTopo() {
    if (!topoPromise) topoPromise = d3.json(GEO_URL);
    return topoPromise;
  }
  function arcPath(a, b, bow) {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1;
    const cx = (a[0] + b[0]) / 2 - (dy / len) * len * bow;
    const cy = (a[1] + b[1]) / 2 + (dx / len) * len * bow;
    return "M" + a[0] + "," + a[1] + " Q" + cx + "," + cy + " " + b[0] + "," + b[1];
  }

  function RouteMap({ stops, legs }) {
    const W = 840, H = 620;
    const [geo, setGeo] = React.useState(null);
    const [failed, setFailed] = React.useState(false);
    React.useEffect(() => {
      let alive = true;
      if (!window.d3) { setFailed(true); return; }
      loadTopo().then(fc => { if (alive) setGeo(fc); }).catch(() => { if (alive) setFailed(true); });
      return () => { alive = false; };
    }, []);

    const known = (stops || []).filter(s => PLACES[s]);
    if (failed || known.length < 2) return React.createElement("div", { className: "st-rmap-fallback" }, (stops || []).join(" \u00B7 "));
    if (!geo) return React.createElement("div", { className: "st-rmap-fallback" }, "\u00A0");

    const swiss = geo.features.find(f => f.properties && f.properties.name === "Switzerland");
    if (!swiss) return React.createElement("div", { className: "st-rmap-fallback" }, known.join(" \u00B7 "));
    /* Compact routes (e.g. Summer Explorer) zoom in around the stops; wide routes show all of Switzerland. */
    const lons = known.map(s => PLACES[s].c[0]), lats = known.map(s => PLACES[s].c[1]);
    const span = Math.max(Math.max(...lons) - Math.min(...lons), Math.max(...lats) - Math.min(...lats));
    let frame = swiss;
    if (span < 1.5) {
      const pad = Math.max(0.6, span * 0.65);
      const x0 = Math.min(...lons) - pad, x1 = Math.max(...lons) + pad, y0 = Math.min(...lats) - pad * 0.6, y1 = Math.max(...lats) + pad * 0.6;
      frame = { type: "Feature", geometry: { type: "Polygon", coordinates: [[[x0, y0], [x0, y1], [x1, y1], [x1, y0], [x0, y0]]] } };
    }
    const proj = d3.geoMercator().fitExtent([[62, 58], [W - 62, H - 58]], frame);
    const geoPath = d3.geoPath(proj);
    const around = geo.features.filter(f => f.properties && ["France", "Germany", "Italy", "Austria", "Liechtenstein"].indexOf(f.properties.name) >= 0);
    const pts = known.map(s => ({ name: s, xy: proj(PLACES[s].c), meta: PLACES[s] }));
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const mode = (legs && legs[i]) || "rail";
      /* The closing leg back to the start bows wider so it doesn't run through the stops. */
      const closing = i === pts.length - 2 && pts.length > 3 && pts[i + 1].name === pts[0].name;
      segs.push({ mode, d: arcPath(pts[i].xy, pts[i + 1].xy, closing ? 0.24 : 0.13) });
    }
    const uniq = [];
    pts.forEach(p => { if (!uniq.some(u => u.name === p.name)) uniq.push(p); });
    const usedModes = [];
    segs.forEach(s => { if (usedModes.indexOf(s.mode) < 0) usedModes.push(s.mode); });
    const dash = { rail: null, water: "5 7", bike: "1.5 6", road: "9 6", move: "1.5 6", travel: null };

    return React.createElement("svg", { className: "st-rmap", viewBox: "0 0 " + W + " " + H, overflow: "hidden", role: "img", "aria-label": "Route map: " + known.join(", ") },
      React.createElement("g", { className: "st-rmap-around" },
        around.map(f => React.createElement("path", { key: f.properties.name, d: geoPath(f) })),
        NEIGHBOURS.map(n => {
          const p = proj(n.at);
          return React.createElement("text", { key: n.name, x: p[0], y: p[1], textAnchor: "middle", className: "st-rmap-country" }, n.name.toUpperCase());
        })),
      React.createElement("path", { className: "st-rmap-swiss", d: geoPath(swiss) }),
      React.createElement("g", { className: "st-rmap-legs" },
        segs.map((s, i) => React.createElement("path", { key: i, d: s.d, className: "st-rmap-leg " + s.mode, strokeDasharray: dash[s.mode] || undefined }))),
      React.createElement("g", { className: "st-rmap-stops" },
        uniq.map(p => React.createElement(React.Fragment, { key: p.name },
          React.createElement("circle", { cx: p.xy[0], cy: p.xy[1], r: 5.5, className: "st-rmap-dot" }),
          React.createElement("text", { x: p.xy[0] + (p.meta.anchor === "end" ? -12 : 12), y: p.xy[1] + p.meta.dy, textAnchor: p.meta.anchor, className: "st-rmap-label" }, p.name.toUpperCase())))),
      React.createElement("g", { className: "st-rmap-legend", transform: "translate(28," + (H - 26 - (usedModes.length - 1) * 30) + ")" },
        usedModes.map((m, i) => React.createElement(React.Fragment, { key: m },
          React.createElement("line", { x1: 0, y1: i * 30, x2: 34, y2: i * 30, className: "st-rmap-leg " + m, strokeDasharray: dash[m] || undefined }),
          React.createElement("text", { x: 46, y: i * 30 + 5, className: "st-rmap-legend-label" }, (MODE_LABEL[m] || m).toUpperCase())))));
  }

  window.RouteMap = RouteMap;
  window.ROUTE_PLACES = PLACES;
})();
