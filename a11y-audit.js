// AIUXAleem a11y + visual-integrity audit. Classic script: window.AIUXAudit(doc, win, opts) -> [{ rule, level, el, msg }]
// Rules map to WCAG 2.2 AA plus the project rules in CLAUDE.md. Run it on any page from devtools:
//   var s = document.createElement('script'); s.src = 'a11y-audit.js'; s.onload = () => console.table(AIUXAudit(document, window)); document.head.appendChild(s);
(function () {
  var cv = document.createElement('canvas'); cv.width = cv.height = 1;
  var cx = cv.getContext('2d', { willReadFrequently: true }); var cache = {};
  function rgba(str) {
    if (!str) return [0, 0, 0, 0]; if (cache[str]) return cache[str]; var v;
    var m = str.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/);
    if (m) v = [+m[1], +m[2], +m[3], m[4] == null ? 1 : (/%$/.test(m[4]) ? parseFloat(m[4]) / 100 : +m[4])];
    else if (str === 'transparent') v = [0, 0, 0, 0];
    else { cx.clearRect(0, 0, 1, 1); cx.fillStyle = '#000'; cx.fillStyle = str; cx.fillRect(0, 0, 1, 1); var d = cx.getImageData(0, 0, 1, 1).data; v = [d[0], d[1], d[2], d[3] / 255]; }
    return (cache[str] = v);
  }
  function lum(c) { var f = function (x) { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); }
  function ratio(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function over(top, base) { var a = top[3]; return [top[0] * a + base[0] * (1 - a), top[1] * a + base[1] * (1 - a), top[2] * a + base[2] * (1 - a), 1]; }
  function stopsOf(img) { return (img.match(/rgba?\([^)]*\)|color\([^)]*\)|#[0-9a-f]{3,8}\b/gi) || []).map(rgba); }
  function extremes(list) { if (list.length <= 2) return list; var s = list.slice().sort(function (a, b) { return lum(a) - lum(b); }); return [s[0], s[s.length - 1]]; }

  window.AIUXAudit = function (doc, win, opts) {
    opts = opts || {}; var out = [];
    var cs = function (el) { return win.getComputedStyle(el); };
    var desc = function (el) {
      var t = (el.getAttribute('aria-label') || el.textContent || el.getAttribute('alt') || '').replace(/\s+/g, ' ').trim().slice(0, 34);
      var hint = el.id ? '#' + el.id : (['data-site-header', 'data-site-footer', 'data-hero', 'data-demo', 'data-work-card', 'data-tile'].filter(function (a) { var p = el.closest('[' + a + ']'); return p; })[0] || '');
      var sec = el.closest('section[id], header[id], footer, [data-site-header]'); var where = sec ? (sec.id ? '#' + sec.id : sec.hasAttribute('data-site-header') ? 'header' : 'footer') : '';
      return el.tagName.toLowerCase() + (hint && hint[0] === '#' ? hint : '') + (where ? ' @' + where : '') + ' "' + t + '"';
    };
    var push = function (rule, level, el, msg) { out.push({ rule: rule, level: level, el: el ? desc(el) : '', msg: msg || '' }); };
    var hidden = function (el) {
      if (el.closest('.cory-visually-hidden, .sr-only, [aria-hidden="true"], [hidden], template, script, style, noscript, canvas, svg [aria-hidden], details:not([open]) > :not(summary)')) return true;
      var r = el.getBoundingClientRect(); if (r.width < 1 || r.height < 1) return true;
      var c = cs(el); if (c.visibility === 'hidden' || c.display === 'none') return true;
      if (c.clip === 'rect(0px, 0px, 0px, 0px)' || (c.position === 'absolute' && r.width <= 1 && r.height <= 1)) return true;
      return false;
    };
    var name = function (el) {
      var n = el.getAttribute('aria-label');
      if (!n && el.getAttribute('aria-labelledby')) n = el.getAttribute('aria-labelledby').split(/\s+/).map(function (id) { var t = doc.getElementById(id); return t ? t.textContent : ''; }).join(' ');
      if (!n && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) { if (el.id) { var l = doc.querySelector('label[for="' + el.id + '"]'); if (l) n = l.textContent; } if (!n) { var w = el.closest('label'); if (w) n = w.textContent; } if (!n) n = el.getAttribute('title') || ''; }
      if (!n) { n = el.textContent || ''; el.querySelectorAll('img[alt]').forEach(function (i) { n += ' ' + i.getAttribute('alt'); }); el.querySelectorAll('svg title').forEach(function (i) { n += ' ' + i.textContent; }); }
      if (!n) n = el.getAttribute('title') || '';
      return n.replace(/\s+/g, ' ').trim();
    };

    // ---- Document ----
    var html = doc.documentElement;
    if (!html.lang) push('lang', 'fail', null, 'html has no lang (3.1.1)');
    if (!(doc.title || '').trim()) push('title', 'fail', null, 'Empty <title> (2.4.2)');
    var mains = doc.querySelectorAll('main, [role="main"]'); if (mains.length !== 1) push('landmark', 'fail', null, mains.length + ' main landmarks (1.3.1)');
    if (!doc.querySelector('a[href="#main"], a[href^="#"][data-skip]')) push('skip-link', 'fail', null, 'No skip link (2.4.1)');
    var navs = [].slice.call(doc.querySelectorAll('nav')).filter(function (n) { return !hidden(n); }); var labels = {};
    navs.forEach(function (n) { var l = n.getAttribute('aria-label') || (n.getAttribute('aria-labelledby') ? (doc.getElementById(n.getAttribute('aria-labelledby')) || {}).textContent || '' : ''); if (navs.length > 1 && !l) push('landmark', 'fail', n, 'Unlabelled nav when several exist'); if (labels[l]) push('landmark', 'warn', n, 'Two visible navs share the label "' + l + '"'); labels[l] = 1; });
    var ids = {}; doc.querySelectorAll('[id]').forEach(function (e) { if (e.closest('svg')) return; if (ids[e.id]) push('dup-id', 'fail', e, 'Duplicate id "' + e.id + '" (4.1.1/1.3.1)'); ids[e.id] = 1; });

    // ---- Headings ----
    var hs = [].slice.call(doc.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]')).filter(function (h) { return !hidden(h); });
    var h1 = hs.filter(function (h) { return h.tagName === 'H1' || h.getAttribute('aria-level') === '1'; });
    if (h1.length !== 1) push('headings', 'fail', null, h1.length + ' visible h1 elements (expect 1)');
    var prev = 0; hs.forEach(function (h) { var lv = +(h.getAttribute('aria-level') || h.tagName.slice(1)); if (!name(h)) push('headings', 'fail', h, 'Empty heading'); if (prev && lv > prev + 1) push('headings', 'fail', h, 'Skips from h' + prev + ' to h' + lv + ' (1.3.1)'); prev = lv; });

    // ---- Interactive: names, label-in-name, targets, hidden-focusable ----
    var inter = doc.querySelectorAll('a[href], button, input:not([type="hidden"]), select, textarea, summary, [role="button"], [role="link"], [role="switch"], [role="tab"], [role="checkbox"], [tabindex]:not([tabindex="-1"])');
    inter.forEach(function (el) {
      var ah = el.closest('[aria-hidden="true"]');
      if (ah && !el.closest('[inert]') && el.tabIndex >= 0) { push('aria-hidden-focus', 'fail', el, 'Focusable inside aria-hidden (4.1.2)'); return; }
      if (hidden(el)) return;
      if (el.tabIndex > 0) push('tabindex', 'fail', el, 'Positive tabindex (2.4.3)');
      var n = name(el); if (!n) push('name', 'fail', el, 'No accessible name (4.1.2)');
      var vis = (el.innerText || '').replace(/\s+/g, ' ').trim(), al = el.getAttribute('aria-label');
      var widget = el.matches('a[href], button, summary, input, select, [role="button"], [role="link"], [role="switch"], [role="tab"], [role="checkbox"]');
      if (widget && al && vis && vis.length > 1 && al.toLowerCase().indexOf(vis.toLowerCase()) < 0) push('label-in-name', 'fail', el, 'aria-label "' + al.slice(0, 40) + '" does not contain visible text "' + vis.slice(0, 30) + '" (2.5.3)');
      var c = cs(el), r = el.getBoundingClientRect();
      var inlineText = c.display === 'inline' && el.parentElement && /^(P|LI|DD|SPAN|BLOCKQUOTE|FIGCAPTION|LABEL)$/.test(el.parentElement.tagName);
      if (!inlineText && el.tagName !== 'INPUT') { if (r.width < 24 || r.height < 24) push('target-size', 'fail', el, Math.round(r.width) + 'x' + Math.round(r.height) + ' under 24x24 (2.5.8)'); else if (r.width < 44 || r.height < 44) push('target-size', 'warn', el, Math.round(r.width) + 'x' + Math.round(r.height) + ' under the project 44px target'); }
      if (el.tagName === 'A' && el.target === '_blank' && !/noopener|noreferrer/.test(el.rel)) push('rel', 'warn', el, 'target=_blank without rel=noopener');
      if (/^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName) && !/checkbox|radio|range|color|file|submit|button/.test(el.type)) {
        var bw = parseFloat(c.borderBottomWidth) || 0, bc = rgba(c.borderBottomColor), bgBehind = bgOf(el.parentElement)[0];
        if (bw && bc[3] > 0 && ratio(over(bc, bgBehind), bgBehind) < 3 && ratio(over(rgba(c.backgroundColor), bgBehind), bgBehind) < 3) push('non-text-contrast', 'fail', el, 'Field boundary ' + ratio(over(bc, bgBehind), bgBehind).toFixed(2) + ':1 (1.4.11)');
      }
    });
    doc.querySelectorAll('img').forEach(function (i) { if (!i.hasAttribute('alt') && !hidden(i)) push('img-alt', 'fail', i, 'img without alt (1.1.1)'); });
    doc.querySelectorAll('iframe').forEach(function (i) { if (!i.title && !hidden(i)) push('iframe-title', 'fail', i, 'iframe without title (4.1.2)'); });
    doc.querySelectorAll('[aria-current]').forEach(function (el) {
      if (hidden(el) || el.getAttribute('aria-current') === 'false') return; var sib = [].slice.call((el.closest('ul, ol, nav') || el.parentElement).querySelectorAll(el.tagName)).filter(function (s) { return s !== el && !s.hasAttribute('aria-current'); })[0]; if (!sib) return;
      var a = cs(el), b = cs(sib), same = function (k) { return a[k] === b[k]; };
      if (same('fontWeight') && same('textDecorationLine') && same('backgroundColor') && same('borderBottomWidth') && same('boxShadow') && same('backgroundImage') && !el.querySelector('[data-current-mark]') && !win.getComputedStyle(el, '::after').content.replace(/none|normal/, '')) push('color-only', 'fail', el, 'Current page shown by colour alone (1.4.1)');
    });

    // ---- Text: contrast, size, invisible text, inline links ----
    function bgOf(node) {
      var layers = [], n = node, unknown = false;
      for (; n && n.nodeType === 1; n = n.parentElement) {
        var c = cs(n), img = c.backgroundImage, clipText = /text/.test(c.backgroundClip + ' ' + (c.webkitBackgroundClip || ''));
        var bc = rgba(c.backgroundColor);
        var bar = (c.backgroundSize || '').split(' ').pop(); var thin = /^\d+(\.\d+)?px$/.test(bar) && parseFloat(bar) < n.getBoundingClientRect().height * 0.5;   // underline bars and dividers are not the text's background
        if (img && img !== 'none' && !clipText && !thin) { if (/url\(/.test(img)) { unknown = true; break; } var st = stopsOf(img).filter(function (s) { return s[3] > 0.02; }); if (st.length) { layers.push(extremes(st)); if (bc[3] === 0 && st.every(function (s) { return s[3] > 0.98; })) break; } }
        if (bc[3] > 0 && !clipText) { layers.push([bc]); if (bc[3] > 0.98) break; }
      }
      var base = [[255, 255, 255, 1]];
      if (!n) { var bb = rgba(cs(doc.body).backgroundColor); if (bb[3] > 0) base = [over(bb, [255, 255, 255, 1])]; }
      for (var i = layers.length - 1; i >= 0; i--) { var nb = []; base.forEach(function (b) { layers[i].forEach(function (s) { nb.push(over(s, b)); }); }); base = extremes(nb); }
      base.unknown = unknown; return base;
    }
    var mediaUnder = function (el) { var r = el.getBoundingClientRect(); for (var a = el.parentElement, k = 0; a && k < 6; a = a.parentElement, k++) { var m = [].slice.call(a.querySelectorAll('img, video, iframe, image-slot[data-filled]')).filter(function (x) { if (x.contains(el)) return false; var q = x.getBoundingClientRect(); return q.width > 2 && Math.min(q.right, r.right) - Math.max(q.left, r.left) > 4 && Math.min(q.bottom, r.bottom) - Math.max(q.top, r.top) > 4; }); if (m.length) return true; } return false; };
    var seen = 0;
    doc.querySelectorAll('body *').forEach(function (el) {
      var own = [].some.call(el.childNodes, function (t) { return t.nodeType === 3 && t.textContent.trim().length > 0; }); if (!own) return;
      if (/^(SCRIPT|STYLE|OPTION|TITLE|NOSCRIPT)$/.test(el.tagName) || hidden(el)) return;
      var c = cs(el), fs = parseFloat(c.fontSize), fw = +c.fontWeight || 400;
      var op = 1; for (var a = el; a && a !== doc.body; a = a.parentElement) op *= +cs(a).opacity;
      if (op < 0.05) { if (el.closest('main') && el.getBoundingClientRect().top < win.innerHeight) push('invisible-text', 'warn', el, 'Text rendered at opacity ' + op.toFixed(2) + ' (stuck animation start state?)'); return; }
      if (fs < 11) push('font-size', 'fail', el, fs + 'px under the 11px system minimum'); else if (fs < 12 && !el.closest('[data-badge], .cory-badge')) push('font-size', 'warn', el, fs + 'px (12px is the comfortable minimum)');
      if (el.closest(':disabled, [aria-disabled="true"]')) return;
      var large = fs >= 24 || (fs >= 18.66 && fw >= 700), need = large ? 3 : 4.5;
      var clip = null; for (var b = el; b && b !== doc.body; b = b.parentElement) { var bcs = cs(b); if (/text/.test(bcs.backgroundClip + ' ' + (bcs.webkitBackgroundClip || '')) && bcs.backgroundImage !== 'none') { clip = b; break; } if (bcs.display !== 'inline') break; }
      var fgs = clip ? stopsOf(cs(clip).backgroundImage) : [rgba(c.color)];
      if (!clip && fgs[0][3] === 0) return;
      if (mediaUnder(el)) return;
      var bgs = bgOf(clip ? clip.parentElement : el); if (bgs.unknown) return;
      var worst = 99; fgs.forEach(function (f) { f = f.slice(); f[3] *= op; bgs.forEach(function (bg) { worst = Math.min(worst, ratio(over(f, bg), bg)); }); });
      if (worst < need - 0.005) push('contrast', 'fail', el, worst.toFixed(2) + ':1 < ' + need + ' (' + Math.round(fs) + 'px/' + fw + (clip ? ', gradient text' : '') + ') (1.4.3)');
      // Inline links inside running text need a non-colour cue or 3:1 against the surrounding text (1.4.1)
      if (el.tagName === 'A' && c.display === 'inline' && el.parentElement && /^(P|LI|DD|BLOCKQUOTE|FIGCAPTION)$/.test(el.parentElement.tagName)) {
        var pt = [].some.call(el.parentElement.childNodes, function (t) { return t.nodeType === 3 && t.textContent.trim().length > 2; });
        if (pt && c.textDecorationLine.indexOf('underline') < 0 && !(parseFloat(c.borderBottomWidth) > 0)) { var pc = rgba(cs(el.parentElement).color); if (ratio(over(rgba(c.color), bgs[0]), over(pc, bgs[0])) < 3) push('link-in-text', 'fail', el, 'Inline link not underlined and under 3:1 against body text (1.4.1)'); }
      }
      seen++;
    });

    // ---- Visual consistency: one type scale, one container, one overline (CLAUDE.md "Consistency") ----
    var probe = doc.createElement('div'); probe.style.cssText = 'position:absolute; visibility:hidden; inline-size:0;'; doc.body.appendChild(probe);
    var px = function (v) { probe.style.fontSize = v; return Math.round(parseFloat(cs(probe).fontSize)); };
    var cmax = (function () { probe.style.maxInlineSize = 'var(--container-max)'; var v = cs(probe).maxWidth; probe.style.maxInlineSize = ''; return v; })();
    var H1 = [px('var(--text-fluid-display)'), px('var(--text-fluid-title)')];
    var H2 = [px('var(--text-fluid-display)'), px('var(--text-fluid-title)'), px('var(--text-fluid-h2)'), px('var(--text-h2)'), px('var(--text-h3)')];
    probe.style.background = 'var(--surface-card)'; var cardBg = cs(probe).backgroundColor;
    probe.remove();
    // Design quality: one primary action in the first view; card-coloured sections never touch
    var prim = [].slice.call(doc.querySelectorAll('main a[href], main button')).filter(function (b) { if (hidden(b) || b.closest('[data-demo], [data-sample-ui]')) return false; var r = b.getBoundingClientRect(); return r.top < win.innerHeight && r.bottom > 0 && /21, 104, 212/.test(cs(b).backgroundImage); });
    if (prim.length > 1) push('design', 'fail', prim[1], prim.length + ' primary buttons in the first view (one per view)');
    var secs = [].slice.call(doc.querySelectorAll('main > section')).filter(function (s) { return !hidden(s); });
    for (var si = 1; si < secs.length; si++) { if (cs(secs[si]).backgroundColor === cardBg && cs(secs[si - 1]).backgroundColor === cardBg) push('design', 'fail', secs[si], 'Two card-background sections touch (alternate page / card)'); }
    doc.querySelectorAll('main h1, main h2').forEach(function (h) { if (hidden(h)) return; var f = Math.round(parseFloat(cs(h).fontSize)), ok = h.tagName === 'H1' ? H1 : H2; if (ok.indexOf(f) < 0) push('consistency', 'fail', h, h.tagName + ' at ' + f + 'px is off the type scale (allowed ' + ok.join('/') + 'px)'); });
    doc.querySelectorAll('main *').forEach(function (el) { var c = cs(el); if (c.maxWidth === cmax && !el.classList.contains('cory-container') && !el.closest('[data-qa-cell]')) push('consistency', 'fail', el, 'Hand-built container: use .cory-container so edges align with the header'); });
    doc.querySelectorAll('main p, main span').forEach(function (el) { if (hidden(el) || el.closest('.cory-overline, [data-badge], button, a') || (el.parentElement && cs(el.parentElement).textTransform === 'uppercase')) return; var c = cs(el); if (c.textTransform === 'uppercase' && parseFloat(c.letterSpacing) > parseFloat(c.fontSize) * 0.1 && !el.classList.contains('cory-overline')) push('consistency', 'warn', el, 'Hand-copied overline: use class="cory-overline"'); });

    // ---- Hover and card layout (CLAUDE.md "Motion, hover and cards") ----
    doc.querySelectorAll('main a[href]').forEach(function (l) {
      if (hidden(l) || l.hasAttribute('data-link') || l.closest('[data-section-nav]')) return;
      var c = cs(l); if (c.textDecorationLine.indexOf('underline') >= 0) return;
      var plain = c.backgroundColor === 'rgba(0, 0, 0, 0)' && c.backgroundImage === 'none' && !(parseFloat(c.borderTopWidth) > 0) && !(parseFloat(c.borderBottomWidth) > 0) && parseFloat(c.borderTopLeftRadius) < 10 && !l.querySelector('img, image-slot, video');
      if (plain) push('hover', 'fail', l, 'Text link with no hover or focus treatment: add data-link');
    });
    var cardOf = function (el, depth) { var c = cs(el), rad = parseFloat(c.borderTopLeftRadius); if (rad >= 16 && rad < 100 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || c.backgroundImage !== 'none' || parseFloat(c.borderTopWidth) > 0)) return el; if (depth <= 0) return null; for (var k = 0; k < el.children.length; k++) { var r = cardOf(el.children[k], depth - 1); if (r) return r; } return null; };
    doc.querySelectorAll('main *').forEach(function (g) {
      var c = cs(g); if (c.display !== 'grid' || hidden(g) || g.closest('[data-masonry]')) return;
      if (c.gridTemplateColumns.split(' ').filter(Boolean).length < 2) return;
      var rows = {}; [].forEach.call(g.children, function (k) { if (hidden(k)) return; var card = cardOf(k, 4); if (!card) return; var t = Math.round(k.getBoundingClientRect().top / 3); (rows[t] = rows[t] || []).push(card); });
      Object.keys(rows).forEach(function (t) { var cs2 = rows[t]; if (cs2.length < 2) return; var hs = cs2.map(function (x) { return x.getBoundingClientRect().height; }); if (Math.max.apply(null, hs) - Math.min.apply(null, hs) > 2) push('card-layout', 'fail', cs2[0], 'Cards in one row differ in height (' + hs.map(Math.round).join('/') + 'px): let them stretch, pin the action with margin-block-start:auto'); });
    });

    // ---- Token contrast matrix: every approved pair, resolved in this page's theme. Covers hover, focus and state colours a live scan can't trigger.
    (function () {
      var p = doc.createElement('div'); p.style.cssText = 'position:absolute; visibility:hidden;'; doc.body.appendChild(p);
      var col = function (v) { p.style.color = 'var(' + v + ')'; return rgba(cs(p).color); };
      var bgc = function (v) { p.style.backgroundColor = 'var(' + v + ')'; var c = rgba(cs(p).backgroundColor); p.style.backgroundColor = ''; return c; };
      var img = function (v) { p.style.backgroundImage = 'var(' + v + ')'; var st = stopsOf(cs(p).backgroundImage); p.style.backgroundImage = ''; return st; };
      var theme = doc.documentElement.getAttribute('data-theme') || 'light', W1 = [255, 255, 255, 1];
      var surf = ['--surface-page', '--surface-card', '--surface-raised', '--surface-sunken'].map(function (s) { return [s, over(bgc(s), W1)]; });
      var chk = function (fg, fgc, bgName, bgcol, need) { var f = fgc[3] < 1 ? over(fgc, bgcol) : fgc, r = ratio(f, bgcol); if (r < need - 0.005) push('contrast-token', 'fail', null, theme + ': ' + fg + ' on ' + bgName + ' = ' + r.toFixed(2) + ':1, needs ' + need + ':1'); };
      ['--text-strong', '--text-body', '--text-muted', '--text-subtle', '--text-link', '--text-link-hover', '--text-success', '--text-warning', '--text-danger'].forEach(function (t) { var c = col(t); surf.forEach(function (s) { chk(t, c, s[0], s[1], 4.5); }); });
      chk('--text-link-hover', col('--text-link-hover'), '--action-ghost-hover', over(bgc('--action-ghost-hover'), surf[1][1]), 4.5);
      chk('--text-strong', col('--text-strong'), '--action-secondary-hover', over(bgc('--action-secondary-hover'), surf[1][1]), 4.5);
      ['--border-interactive', '--border-focus'].forEach(function (t) { var c = col(t); surf.forEach(function (s) { chk(t, c, s[0], s[1], 3); }); });
      img('--gradient-ink').concat([over(bgc('--surface-ink'), W1)]).forEach(function (ink, k) { ['--on-ink-strong', '--on-ink-body', '--on-ink-muted', '--on-ink-link'].forEach(function (t) { chk(t, col(t), 'ink surface ' + k, ink, 4.5); }); chk('--border-focus', col('--border-focus'), 'ink surface ' + k, ink, 3); });
      img('--gradient-brand-deep').forEach(function (g, k) { chk('--text-on-brand', col('--text-on-brand'), 'gradient-brand-deep stop ' + k, g, 4.5); });
      img('--gradient-text').forEach(function (g, k) { surf.slice(0, 2).forEach(function (s) { chk('--gradient-text stop ' + k + ' (large text only)', g, s[0], s[1], 3); }); });
      p.remove();
    })();

    // ---- Overflow / clipping (also run under WCAG text-spacing override) ----
    var W = doc.documentElement.clientWidth;
    if (doc.documentElement.scrollWidth > W + 1) push('reflow', 'fail', null, 'Horizontal scroll ' + (doc.documentElement.scrollWidth - W) + 'px (1.4.10)');
    doc.querySelectorAll('body *').forEach(function (el) {
      var own = [].some.call(el.childNodes, function (t) { return t.nodeType === 3 && t.textContent.trim(); }); if (!own || hidden(el)) return;
      if (el.closest('[data-work-track], [data-work-viewport]') && opts.pinned) return;
      var c = cs(el);
      if (/hidden|clip/.test(c.overflowX + c.overflowY) && (el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2)) push('clipped-text', 'fail', el, 'Text clipped by its own box (1.4.12)');
      for (var a = el.parentElement, k = 0; a && k < 4; a = a.parentElement, k++) { var ac = cs(a); if (/hidden|clip/.test(ac.overflowX + ac.overflowY) && !a.matches('[data-work-viewport], [data-cq], [data-hero], section') ) { var r = el.getBoundingClientRect(), q = a.getBoundingClientRect(); if (r.bottom > q.bottom + 2 || r.right > q.right + 2 || r.left < q.left - 2) { push('clipped-text', 'fail', el, 'Text cut off by an ancestor with overflow:' + ac.overflowY + ' (1.4.12)'); } break; } }
    });
    out.textCount = seen; return out;
  };
  window.AIUX_TEXT_SPACING_CSS = '* { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; } p, li, dd { margin-block-end: 2em !important; }';
})();
