# AgentCory Design System

The brand + UI system for **Agent Cory** — an AI-powered admissions assistant
that engages prospective students in under 60 seconds across call, text, chat,
and email, qualifies them, books appointments, and hands off to human
counselors. Agent Cory is a product of **Colaberry**, a 25-year AI / data
transformation company.

> Cory is a *persona*, not just a product — the brand speaks in Cory's own
> first-person voice ("Hi, I'm Cory 👋").

## Sources
- **Live website:** https://agentcory.ai (content + structure extracted from the
  homepage; design language inferred from the site and brand assets).
- **Brand asset provided:** `uploads/Logo_Cory-BpxDw6Ld.svg` (primary wordmark).
- No codebase or Figma file was provided. UI kits are recreations of surfaces
  that are publicly visible on the live site (marketing homepage, ROI
  calculator, chat widget). The internal admissions dashboard is **not** publicly
  shown and was intentionally **not** invented.

---

## CONTENT FUNDAMENTALS

**Voice — Cory speaks in first person.** The defining trait. Cory addresses the
reader directly as "I" and "me": *"Ready to see what I can do for your admissions
team?"*, *"Let me call you"*, *"Chat with me"*, *"I'm ready to help your team…"*.
Marketing chrome around Cory uses third person ("How Cory Works", "Why teams
choose Cory"). When in doubt: section labels are about Cory; CTAs and
conversational copy are *from* Cory.

**Tone.** Confident, benefit-led, and warm — never stiff or jargon-heavy.
Outcome-first sentences: *"Strike while the iron is hot."*, *"Turn prospects into
enrolled students."* Short, punchy, active voice.

**Audience.** Higher-ed admissions & enrollment leaders (Directors of Admissions,
VPs of Enrollment). Copy respects their world: "inquiries", "yield", "Slate",
"Banner", "counselors", "show rate".

**Casing.** Headlines are sentence case or Title Case used consistently within a
section ("Boost Admissions with AI Precision"). Overlines/eyebrows are UPPERCASE
with wide tracking. Avoid ALL-CAPS body copy.

**Numbers do the talking.** Nearly every claim is quantified and leads with the
figure: `<60s`, `94%`, `10x`, `847%`, `$2.4M`, `2,100 hours`. Stats are the hero,
labels are the footnote. Use comparison framing ("from 40% to 94% overnight").

**"You / your", not "we".** Copy centers the customer's team and outcomes —
"*your* admissions team", "*your* counselors", "save *your* team time".

**Emoji & symbols.** Used *sparingly* as accents, never decoration: the waving
hand 👋 next to Cory's greeting, and a ⚡ before speed claims ("⚡ < 60s Response
Time"). One emoji per moment, max. No emoji in headings or body paragraphs.

**Examples to emulate**
- Greeting: *"Hi, I'm Cory 👋 Ready to see what I can do for your admissions team?"*
- Benefit: *"Meet prospects where they are with seamless coordination across voice, SMS, email, and chat."*
- Proof: *"We went from 40% contact rates to 94% overnight."*
- CTA: *"Book My Demo"*, *"Try Cory Now"*, *"Get Called by Cory"*.

---

## VISUAL FOUNDATIONS

**Color.** A two-part identity: deep **navy `#0B1F36`** (the Cory mascot's ink —
used for primary text, dark sections, the mascot body) paired with a bright
**blue→cyan gradient `#258AFD → #29BEDD`** that is the brand's signature "signal."
Surfaces are a cool off-white **`#F4F5FA`**. Neutrals are cool-toned slate.
Semantic green `#1FB877` marks positive metrics. The gradient appears on primary
CTAs, headline stat numbers, key words in headlines (gradient text-clip), and as
soft radial glows behind hero/CTA art. Dark sections use a navy `--gradient-ink`.

**Typography.** Friendly geometric humanist sans — **Plus Jakarta Sans**
(substitute, see *Caveats*) — across the whole brand, with **JetBrains Mono** for
data/code readouts. Display/headlines are Extrabold (800) with tight tracking
(`-0.03em`) and snug leading; body is 16–18px at 1.5–1.65 leading. Big stat
numbers are the largest type on most screens.

**Spacing & layout.** 8px base grid. Centered max-width containers (~1200px) with
generous vertical rhythm (76–80px section padding). Marketing is single-column
stacked sections; tools use 2–3 column grids. A sticky, blurred translucent
header.

**Corners.** Soft and generous everywhere — the brand signature. The mascot tile
rounds at ~22.7% of its size. Cards use 18–24px radius, buttons and chips are
fully pill-shaped (`999px`), inputs ~14px.

**Shadows.** Soft, cool, low-spread, navy-tinted (`rgba(11,31,54,…)`) — never
harsh or black. Elevation is subtle; cards sit on `--shadow-sm` and lift to
`--shadow-lg` on hover. Primary buttons carry a colored `--shadow-brand` (blue
glow).

**Borders.** Hairline 1px in cool slate (`--border-subtle` / `--border-default`).
Cards = soft border + subtle shadow + white fill. No heavy outlines, no
colored-left-border accent cards.

**Backgrounds.** Mostly flat cool off-white or white. No photographic hero, no
repeating texture, no busy patterns. Visual interest comes from: the gradient,
radial gradient *glows* (low-opacity cyan/blue circles bleeding off-edge), and
dark navy "spotlight" panels for CTAs. The mascot tile is the recurring motif.

**Motion.** Restrained and smooth. `--ease-out` (cubic-bezier(.22,1,.36,1)) for
most transitions, 140–380ms. Buttons scale down slightly on press
(`scale(0.97)`); cards translate up `-3px` and deepen their shadow on hover.
Fades over flashy movement; no bounce, no infinite decorative loops.

**Hover / press states.** Hover = lift + deeper shadow (cards), darker gradient/
fill (buttons), color shift (links to `--blue-600`). Press = brief `scale` down.
Inputs focus to a blue border + soft `--shadow-focus` ring.

**Transparency & blur.** Used deliberately: the sticky header is
`rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`; modal scrims are navy
at ~55% with a light blur. Otherwise surfaces are opaque.

**Imagery vibe.** Cool, clean, bright — product-forward (chat previews, dashboards,
stat cards) rather than stock photography. When people appear, they're avatars/
headshots in rounded tiles. No grain, no heavy filters.

---

## ICONOGRAPHY

- **Mascot first.** The strongest "icon" in the system is the **Cory glyph** — a
  rounded-square tile (light `#F4F5FA`, dark navy, or transparent) holding a navy
  headset/agent silhouette under a blue→cyan brim. It serves as app icon,
  favicon, chat avatar, and assistant marker. Assets:
  `assets/cory-tile.svg`, `assets/cory-tile-dark.svg`, `assets/cory-icon.svg`.
  The `Avatar` component renders it inline (no asset path needed).
- **UI icons.** The production site's exact icon set could not be extracted from
  source. The system standardizes on **Lucide** (https://lucide.dev) — clean,
  modern, ~1.75px stroke outline icons that match the brand's light, friendly,
  professional feel. Loaded via CDN
  (`https://unpkg.com/lucide`); render `<i data-lucide="name"></i>` then call
  `lucide.createIcons()`. *This is a substitute — flagged in Caveats.*
- **No emoji-as-icon** in UI. Emoji (👋, ⚡) are reserved for conversational/
  marketing accents only.
- Feature icons sit in a tinted tile (blue-100 bg, blue-600 glyph) or, on dark
  workflow rows, a navy gradient tile with a white glyph.

---

## VISUAL FORMATS / INDEX

Root manifest:

- `styles.css` — global entry point (import this one file). `@import`s the token
  closure below.
- `tokens/` — `colors.css`, `typography.css`, `layout.css` (spacing/radius/
  shadow/motion), `fonts.css` (webfont loading), `base.css` (resets + brand
  helpers: `.cory-gradient-text`, `.cory-eyebrow-pill`, `.cory-overline`).
- `assets/` — `logo-agentcory.svg`, `logo-agentcory-darkmode.svg`,
  `cory-tile.svg`, `cory-tile-dark.svg`, `cory-icon.svg`.
- `guidelines/cards/` — foundation specimen cards (Colors, Type, Spacing, Brand)
  for the Design System tab.

**Components** (`window.DesignSystem_ebeb85.*`):
- `components/core/` — `Button`, `Badge`, `Avatar`.
- `components/content/` — `StatCard`, `FeatureCard`, `Testimonial`, `ChatBubble`.
- `components/forms/` — `Input`.

**UI kits:**
- `ui_kits/website/` — marketing homepage (header, hero, workflows, features,
  testimonials, CTA, footer, live chat widget + demo modal).
- `ui_kits/roi-calculator/` — the interactive ROI calculator tool.

**Templates** (`templates/` — copy-ready starting points for consuming projects):
- `landing-page/` — full marketing homepage (hero, how-it-works, features, proof, CTA, footer; chat launcher toggleable via Tweaks).
- `pitch-deck/` — 6-slide 16:9 sales deck.
- `one-pager/` — printable Letter-size product overview sheet.
- `outreach-email/` — 600px marketing email from Cory.

- `thumbnail.html` — design-system homepage tile.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

---

## CAVEATS / SUBSTITUTIONS
- **Typeface is a substitute.** AgentCory's production font could not be read from
  the live site; **Plus Jakarta Sans** is used as a close match. Swap the
  `@font-face`/import in `tokens/fonts.css` when the real font is available.
- **Icon set is a substitute.** **Lucide** stands in for the site's UI icons.
- **Dashboard omitted by design.** Only publicly-visible surfaces were recreated;
  the internal admissions dashboard was not invented.
- Brand colors, the mascot, and copy voice are taken **directly** from the live
  site and brand asset, and are accurate.
