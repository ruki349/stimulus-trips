/* Reusable route map — real Switzerland geometry (Natural Earth via world-atlas), copper route arcs. */
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
    "Appenzell":     { c: [9.4100, 47.3300], anchor: "start", dy: -12 }
  };
  const NEIGHBOURS = [
    { name: "France",  at: [6.15, 46.75] },
    { name: "Germany", at: [8.30, 47.95] },
    { name: "Austria", at: [10.20, 47.35] },
    { name: "Italy",   at: [8.55, 45.70] }
  ];
  const MODE_LABEL = { rail: "Scenic rail", water: "Lake crossing", bike: "E-bike", road: "Private transfer" };
  const TOPO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";
  let topoPromise = null;
  function loadTopo() {
    if (!topoPromise) topoPromise = d3.json(TOPO_URL).then(t => topojson.feature(t, t.objects.countries));
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
      if (!window.d3 || !window.topojson) { setFailed(true); return; }
      loadTopo().then(fc => { if (alive) setGeo(fc); }).catch(() => { if (alive) setFailed(true); });
      return () => { alive = false; };
    }, []);

    const known = (stops || []).filter(s => PLACES[s]);
    if (failed || known.length < 2) return React.createElement("div", { className: "st-rmap-fallback" }, (stops || []).join(" \u00B7 "));
    if (!geo) return React.createElement("div", { className: "st-rmap-fallback" }, "\u00A0");

    const swiss = geo.features.find(f => f.properties && f.properties.name === "Switzerland");
    if (!swiss) return React.createElement("div", { className: "st-rmap-fallback" }, known.join(" \u00B7 "));
    const proj = d3.geoMercator().fitExtent([[62, 58], [W - 62, H - 58]], swiss);
    const geoPath = d3.geoPath(proj);
    const around = geo.features.filter(f => f.properties && ["France", "Germany", "Italy", "Austria"].indexOf(f.properties.name) >= 0);
    const pts = known.map(s => ({ name: s, xy: proj(PLACES[s].c), meta: PLACES[s] }));
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const mode = (legs && legs[i]) || "rail";
      segs.push({ mode, d: arcPath(pts[i].xy, pts[i + 1].xy, 0.13) });
    }
    const uniq = [];
    pts.forEach(p => { if (!uniq.some(u => u.name === p.name)) uniq.push(p); });
    const usedModes = [];
    segs.forEach(s => { if (usedModes.indexOf(s.mode) < 0) usedModes.push(s.mode); });
    const dash = { rail: null, water: "5 7", bike: "1.5 6", road: "9 6" };

    return React.createElement("svg", { className: "st-rmap", viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Route map: " + known.join(", ") },
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
      React.createElement("g", { className: "st-rmap-legend", transform: "translate(28," + (H - 26 - (usedModes.length - 1) * 24) + ")" },
        usedModes.map((m, i) => React.createElement(React.Fragment, { key: m },
          React.createElement("line", { x1: 0, y1: i * 24, x2: 34, y2: i * 24, className: "st-rmap-leg " + m, strokeDasharray: dash[m] || undefined }),
          React.createElement("text", { x: 46, y: i * 24 + 4, className: "st-rmap-legend-label" }, (MODE_LABEL[m] || m).toUpperCase())))));
  }

  window.RouteMap = RouteMap;
  window.ROUTE_PLACES = PLACES;
})();
