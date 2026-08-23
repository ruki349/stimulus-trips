/* Stimulus Trips — analytics. Plausible (manual pageviews, SPA-aware).
   Needs: a Plausible account with site domain stimulustrips.com.
   Until the account exists the calls no-op silently; nothing breaks. */
(function () {
  var SCRIPT = "https://plausible.io/js/script.manual.js";
  var DOMAIN = "stimulustrips.com";
  window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
  if (location.hostname === DOMAIN || location.hostname === "www." + DOMAIN) {
    var s = document.createElement("script");
    s.defer = true; s.src = SCRIPT; s.setAttribute("data-domain", DOMAIN);
    document.head.appendChild(s);
  }
  function track(name, props) { try { window.plausible(name, props ? { props: props } : undefined); } catch (e) {} }
  function pageview() { try { window.plausible("pageview", { u: location.href }); } catch (e) {} }
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (h.indexOf("mailto:") === 0) track("Email click", { page: location.pathname });
    else if (h.indexOf("wa.me") > -1) track("WhatsApp click", { page: location.pathname });
  }, true);
  Object.assign(window, { track: track, pageview: pageview });
})();
