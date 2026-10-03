// Web Vitals recorder for QA (loaded only when ?perf=1). Buffers FCP, LCP, CLS and long tasks on window.__vitals.
(function () {
  var v = window.__vitals = { fcp: null, lcp: null, cls: 0, long: [] };
  try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { if (e.name === 'first-contentful-paint') v.fcp = Math.round(e.startTime); }); }).observe({ type: 'paint', buffered: true }); } catch (e) {}
  try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { v.lcp = Math.round(e.startTime); }); }).observe({ type: 'largest-contentful-paint', buffered: true }); } catch (e) {}
  try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { if (!e.hadRecentInput) v.cls += e.value; }); }).observe({ type: 'layout-shift', buffered: true }); } catch (e) {}
  try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { v.long.push(Math.round(e.duration)); }); }).observe({ type: 'longtask', buffered: true }); } catch (e) {}
})();
