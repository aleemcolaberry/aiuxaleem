# State coverage audit · aiuxaleem.com

Reviewed every page and component: Home, Work, Case Study (×3), Services, About, Content, Guides, Guide, Site Header, Site Footer, Case Card, Reel Card, Video Facade, Post Card, Bento Tile, Metric Tile, Section Nav, Step Row, Pull Quote, Service Link Card, plus site.js, i18n.js, cases.js, image-slot.js, site.css. Claims were re-verified against the live DOM and the design-system bundle before fixing.

Lens: a hiring manager in Riyadh or Dubai, or a founder, opening the link from LinkedIn or WhatsApp on a phone, then again on a locked-down office laptop.

Legend: 🔴 blocks the goal · 🟠 visible to every visitor · 🟡 edge case · ✅ already handled
Status: **FIXED** · **NEEDS YOU** (real material only you have) · **OPEN**

---

## 1. Critical: the first-visit path

🔴 **Resume PDF does not exist.** Linked from every page. Path was root-absolute, so it also broke on sub-path deploys.
**FIXED** every resume link now opens the Google Drive copy in a new tab.

🔴 **No link preview.** No description, Open Graph, Twitter card, OG image or favicon on any page.
**FIXED** every page has description + OG + Twitter card + theme-color + `assets/favicon.svg`; `assets/og-home.png` (1200×630) generated from `OG Card.dc.html` in the brand. OG image URL assumes the site lives at `https://aiuxaleem.com/`; change it if the domain differs.

🔴 **Dead video.** `YOUR_VIDEO_ID` placeholders on Home and Content; play loaded YouTube's error.
**FIXED** Video Facade now detects a placeholder id and shows a quiet "Recording coming soon" badge with no play button; with a real id it shows a loading state until the iframe paints and a "Watch on YouTube" fallback link for networks that block embeds. **NEEDS YOU** real video ids.

🔴 **Image placeholders were developer chrome.** 15 slots rendered the drop-zone scaffold (dashed ring, icon, caption).
**FIXED** outside the editor, empty slots are transparent and a designed fallback shows behind them: ink panel, glow, case index, title or caption. Inside the editor the drop zone still works. **NEEDS YOU** covers, gallery images, reel and video stills.

🟠 **Hero hidden up to 3.5 s waiting for GSAP.** Blank first screen on slow connections, double flash if the library landed after the timeout.
**FIXED** cap is now 1 s; if the timeout reveals the hero first, the intro animation is skipped instead of re-hiding visible text (all pages + Home's line reveal).

---

## 2. Contact

🟠 **mailto was the only path and failed silently without a mail client.** The footer did show the address, but as another mailto link.
**FIXED** new `Email Copy` component: address + one-tap copy + "Copied" confirmation (clipboard API, execCommand fallback, then text selection with a hint). Placed in the footer (every page), Home closing, and the ink CTA panels on Work, Case Study, Services, About, Guide, and the 404 page. Arabic labels included.

🟠 **Services, About, Guides, Guide CTAs were JS-only buttons.**
**FIXED** all are real links now: Cal.com opens in a new tab, mail links carry a subject, the spec template is a proper `download`.

🟠 **"I'm hiring" removed "Book a call" from the hero and closing.**
**FIXED** both actions always show; intent only decides which is primary.

🟡 **Carousel arrows had no end state.** **FIXED** disabled at first and last card.

🟡 **Cal.com handle unverified.** **FIXED** `cal.com/md-abdul-aleem-gilsy7/15min`; all copy now says 15-minute call (EN + AR).

🟡 **No WhatsApp.** The default channel for this audience. **NEEDS YOU** a number, then one line in footer and closing.

---

## 3. Content that reads as placeholder

🟠 **Fabricated engagement stats.** **FIXED** removed; Post Card hides the stat line when none is given. Add real numbers later if you want them.

🟠 **Content links go to the profile, not the post.** **NEEDS YOU** per-post and per-reel URLs. Reel thumb now shows an external-link glyph instead of a play icon, so the affordance is honest.

🟠 **Weak AIXFreight metrics** (1 / 3 / 0, the 0 counts up to 0). **NEEDS YOU** outcome numbers, or I switch that case to a non-numeric result layout.

🟡 **Unknown case slug falls back silently.** **FIXED** a mistyped `?case=` now shows "I couldn't find that case study. Here's {case 01} instead." with a See all work link (EN + AR).

---

## 4. Error pages and robustness

🟠 **No 404 page.** **FIXED** `404.dc.html`: Work, Resume, Home, copyable email. Map it as the host's not-found page at deploy.

🟡 **Template download opened raw Markdown.** **FIXED** (`download` attribute).

🟡 **If i18n.js or cases.js fail to load, pages render chrome with blank copy and no message.** **FIXED** Site Header (on every page) waits up to 15 s, then shows a bilingual alert with Reload. The message is hard-coded because the copy file is what is missing.

🟡 **Image slot `alt=""` always.** **OPEN** (starter component; gallery has visible captions, hero cover has none).

🟡 **WebGL context loss not handled.** **FIXED** on `webglcontextlost` the loop stops and the canvas hides; the always-on CSS atmosphere (glows + dot grid) remains.

🟡 **No print styles.** **OPEN**.

🟡 **QA pages and OG Card ship with the site.** `QA.dc.html`, `QA Sweep.dc.html`, `OG Card.dc.html` are noindex but deployable. **OPEN** exclude at publish.

---

## 5. For Saudi and Dubai decision makers

🟠 **Location signal was India-only.**
**FIXED** hero badge "Open to senior roles and client work · KSA, UAE, remote"; hero meta "Hyderabad, IN · GCC working hours · 13+ yrs"; About shows "1.5 h ahead of Dubai, 2.5 h ahead of Riyadh" and "Senior roles in KSA / UAE, on-site or remote"; footer bio updated; Arabic copy mirrors all of it; OG image carries "Hyderabad · GCC hours · KSA / UAE / remote". **NEEDS YOU** confirm relocation wording is what you want to claim.

🟠 **Arabic covers Home and Case Studies only.** Services and About are the deal and hire pages. **OPEN** next step: move their copy into i18n.js and translate.

🟡 **"Two working days" across a Sun–Thu week.** **FIXED** "within 48 hours" everywhere (EN + AR).

🟡 **Home `<title>` was not translated.** **FIXED**.

---

## 6. Already handled well (unchanged)

✅ Theme set before first paint, persisted, OS-change aware, view-transition reveal.
✅ Language in URL, scroll position preserved across rebuild, honest "English only" labels and redirect notice.
✅ localStorage wrapped in try/catch everywhere.
✅ GSAP / Three.js absent → page stays fully usable; low-power and reduced-motion detection; poster fallback.
✅ Hero reserves min-block-size so late copy does not shift layout.
✅ Skip link, focus restore on menu close, Escape closes menu, 44 px targets, focus-visible ring.
✅ Mobile Work carousel degrades to a stacked list.
✅ RTL icons mirror; numbers isolated with `<bdi>`.
✅ Guides has an honest "Being written now" state.

---

## 7. Responsive sweep (Oct 2026)

Ran `QA Sweep.dc.html` over Home (EN/AR × light/dark), Case Study (EN/AR × light/dark), Work, Services, About, Content, Guides, Guide at 320 · 375 · 414 · 768 · 1024 · 1280 and 740×360 landscape. The sweep now also flags overlapping text, squeezed columns (<72px, 3+ lines), hit targets under 40px, type under 12px and collapsed media boxes.

**FIXED**
- Home work cards collapsed to 0 width on short viewports (`100svh - 380px` went negative); width is now clamped to 300–680px.
- Hit targets under 44px: header "Let's talk", Section Nav and Guide download buttons (36px → 44px); demo-tile Apply / Why / Undo (36 → 44); proof-card GitHub / Live links and open-source tile links (24–32 → 44); footer logo and nav links.
- Case Card role label could be squeezed to a 70px column beside the year; it now claims its own line when tight.
- Demo-tile metrics grid reflows 3 → 2 columns under ~375px instead of breaking "Confidence" mid-word.
- "AI suggestion" badge raised from 11px to the caption size.
- Sweep harness: landscape column (`L740`) parsed correctly from the URL; closed accordions and wrapped inline runs no longer count as overlaps.

Result: every page × state × width passes with no warnings.

## 8. State pass (Oct 2026, after the home revamp)

Every interactive surface checked against the six states (default, loading, empty, error, partial, success).

**FIXED**
- 🟠 **Hero demo "Why this?" was a dead button.** Now discloses two reasons inline (`aria-expanded`, `aria-controls`), label flips to "Hide reasons".
- 🟠 **Demo promised a 30 s undo with no timer.** Real state machine now: Apply shows a loading button (700 ms) → "Reroute applied" with a live `Ns to undo` countdown and Undo → after 30 s "undo window has closed" + Reset demo. Undo returns to idle with "Reroute undone" in a `role="status"` line. Countdown is `aria-hidden` so screen readers are not spammed every second. EN + AR.
- 🟡 **Video embed could spin forever** on networks that hang YouTube. After 12 s it becomes an error panel (`role="alert"`) with Try again (cache-busted reload) and Watch on YouTube.
- 🟡 Copy-load failure, unknown case slug, WebGL context loss: see section 4.

**Per surface (verified)**
- Hero demo: default · loading · success · undo · expired · undone ✅
- Video Facade: no-id "coming soon" · loading · error + retry · playing ✅
- Image slots (covers, gallery, portrait, reel, video): designed fallback under every empty slot ✅
- Email Copy: idle · copied · clipboard-blocked fallback ✅
- Work carousel: pinned · native scroll (reduced motion / no GSAP) · stacked mobile; arrows disable at ends ✅
- Guides: "Being written now" empty state ✅
- Language: Arabic-not-available notice on English-only pages ✅
- Motion/WebGL absent, reduced motion, low power: static but complete ✅
- 404 page ✅

**Still OPEN (low)**
- Image slot `alt=""` (decorative today; needs real alt text once real images land).
- No print styles.
- No `<noscript>` message (pages are JS-rendered).

## What I need from you

1. ~~Resume~~ done (Google Drive)
2. Cover + gallery images for the three cases; reel and video stills (drop them onto the slots in the editor)
3. YouTube video ids (or say "remove the video tiles")
4. LinkedIn post and reel URLs
5. ~~Cal.com link~~ done; WhatsApp number if you want that channel
6. AIXFreight outcome numbers, or a go-ahead for a non-numeric layout
7. Confirm the relocation / GCC wording
8. Go-ahead to translate Services and About
