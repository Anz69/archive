// Analytics stub (offline mode)
// fbq (Meta Pixel) safe stub
(function() {
  if (window.fbq) return;
  function fbq(){ fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments); }
  fbq.queue = [];
  fbq.callMethod = function(){ fbq.queue.push(arguments); };
  fbq.loaded = true;
  fbq.version = '2.0';
  window.fbq = fbq;
  window._fbq = fbq;
})();

// google_tag_manager safe stub (avoid undefined access)
try {
  var gtmBase = window.google_tag_manager || {};
  window.google_tag_manager = new Proxy(gtmBase, { get: function(t, p){ return t[p] || (t[p] = {}); } });
} catch (e) {
  window.google_tag_manager = window.google_tag_manager || {};
}

// transifex_manifest jsonp callback stub
window.transifex_manifest = window.transifex_manifest || function(payload) {
  window.__transifex_manifest__ = payload;
};

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function() { dataLayer.push(arguments); };
console.log('[Analytics Stub] Loaded offline stubs for analytics services');
