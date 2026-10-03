# AgentCory — System Brief

Read in full: `tokens/colors.css`, `typography.css`, `layout.css`, `base.css`, `fonts.css`, `styles.css`, `readme.md`, `_ds_manifest.json`, all 8 component sources, guideline cards, `ui_kits/website/*`, templates index. Contrast ratios below are computed from the hex values (WCAG 2.2 relative luminance).

---

## 1. Color tokens

### Light theme (the only defined theme)

**Background**
- `--surface-page` → `--slate-50` #F4F5FA
- `--surface-sunken` → `--slate-100` #ECEEF4

**Surface**
- `--surface-card` → `--white` #FFFFFF
- `--surface-tile` → `--slate-50` #F4F5FA (mascot tile fill)
- `--surface-ink` → `--navy-800` #0B1F36 (dark spotlight panels)
- `--gradient-ink` linear-gradient(160deg, #12304F → #0B1F36)

**Text**
- `--text-strong` → `--navy-800` #0B1F36
- `--text-body` → `--slate-700` #3B4253
- `--text-on-brand` → `--white`
- `--text-link` → `--blue-600` #1B79EC

**Muted text**
- `--text-muted` → `--slate-500` #6E7689
- `--text-subtle` → `--slate-400` #939BAE

**Border**
- `--border-subtle` → `--slate-150` #E2E5EE
- `--border-default` → `--slate-200` #D5D9E4
- `--border-strong` → `--slate-300` #B9BFCF
- `--border-focus` → `--blue-500` #258AFD

**Accent**
- `--gradient-brand` linear-gradient(90deg, #258AFD → #29BEDD) · `--gradient-brand-135`
- `--action-primary` → `--blue-500` #258AFD
- `--action-ink` → `--navy-800`
- `--accent-mint` → `--green-500` #1FB877
- Raw scales available: `--navy-100…900`, `--blue-100…700`, `--cyan-100…600`, `--slate-50…900`

**Focus**
- `--focus-ring` rgba(37,138,253,0.35) · `--shadow-focus` 0 0 0 4px var(--focus-ring) · `--border-focus`

**States**
- Hover: `--action-primary-hover` → `--blue-600`; `--action-ink-hover` → `--navy-700`
- Active: `--action-primary-active` → `--blue-700`
- Success: `--green-500` #1FB877 / `--green-100` #DCF6EC
- Warning: `--amber-500` #F5A524 / `--amber-100` #FDF0D9
- Error: `--red-500` #E5484D / `--red-100` #FBE3E4
- Disabled: none defined (Button uses opacity 0.5 inline)
- Selection: `::selection` → `--cyan-200` on `--navy-800`

### Dark theme
**None defined.** No `prefers-color-scheme`, `[data-theme]`, or dark alias set exists. Dark surfaces are ad hoc:
- `--surface-ink` / `--gradient-ink` panels, footer on `--navy-800`
- On-dark text uses raw `#fff`, `rgba(255,255,255,0.78)`, `rgba(255,255,255,0.7)`; borders `rgba(255,255,255,0.1)`; fills `rgba(255,255,255,0.08)`
- Dark-ready assets: `logo-agentcory-darkmode.svg`, `cory-tile.svg` (light tile for dark bg), `Badge tone="ink"`, `Avatar kind="cory"`

### WCAG 2.2 AA audit

**Pass 4.5:1 (body text)**
- `--text-strong` on `--surface-card` 16.6 · on `--surface-page` 15.3
- `--text-body` on `--surface-card` 10.0 · on `--surface-page` 9.2
- `--text-muted` on `--surface-card` 4.55 (marginal)
- `--blue-700` on `--blue-100` 4.6 (eyebrow pill, Badge brand) · `--blue-700` on white 5.3
- `--slate-600` on `--slate-100` 6.0 (Badge neutral)
- #0E7A4E on `--green-100` 4.7 (Badge success) · #B42318 on `--red-100` 5.4 (Badge danger)
- `--navy-700` on `--navy-100` 10.5 (initials Avatar)
- On `--navy-800`: white 16.6 · rgba(255,255,255,.78) 10.5 · rgba(255,255,255,.7) 8.7 · `--navy-200` 9.7 · `--navy-300` 5.5 · `--cyan-400` 9.2 · `--cyan-500` 7.5 · `--blue-400` 6.6 · `--blue-500` 4.9 · `--green-500` 6.5

**Pass 3:1 only (large text ≥24px / 19px bold, or UI)**
- `--text-muted` on `--surface-page` 4.2 ← body-size muted copy on the page bg fails
- `--text-link` (`--blue-600`) on white 4.2 · on `--surface-page` 3.9
- White on `--blue-500` 3.4 · white on `--blue-600` 4.2
- `--red-500` on white 3.9 (Input error text at 12.5px fails)
- #9A6400 on `--amber-100` 4.4 (Badge warning, borderline)
- `--border-focus` vs white 3.4 (UI pass)

**Fail both**
- `--text-subtle` on white 2.8 / on page 2.6 — decorative only
- White on `--cyan-500` 2.2 — the gradient's cyan end; primary Button label and white-on-gradient fail
- `--cyan-600` on `--cyan-100` 2.8 (Badge cyan)
- `--green-500` as text on white 2.6 ("● Online now")
- `--border-default` vs white 1.4 · `--border-strong` 1.8 — no border token reaches the 3:1 non-text minimum, so a border can never be the sole affordance

---

## 2. Type

**Families**
- `--font-sans` 'Plus Jakarta Sans' (substitute for the unknown production face)
- `--font-display` 'Plus Jakarta Sans' (same family, separate token)
- `--font-mono` 'JetBrains Mono'
- Loaded weights: sans 400/500/600/700/800 + italic 400/500; mono 400/500/600

**Weights** `--weight-regular` 400 · `--weight-medium` 500 · `--weight-semibold` 600 · `--weight-bold` 700 · `--weight-extrabold` 800

**Scale and roles**

Display — 800, `--leading-tight` 1.05, `--tracking-tighter` -0.03em
- `--text-display-2xl` 72px (defined, unused in kits)
- `--text-display-xl` 60px
- `--text-display-lg` 48px
- `--text-display-md` 40px

Heading — 700 (h4 600), `--leading-heading` 1.25, `--tracking-tight` -0.018em
- `--text-h1` 34px · `--text-h2` 28px · `--text-h3` 22px · `--text-h4` 18px

Body — 400/500, `--text-body` colour
- `--text-body-lg` 18px / `--leading-relaxed` 1.65 (lead)
- `--text-body` 16px / `--leading-normal` 1.5
- `--text-body-sm` 14px

Label
- `--text-caption` 13px, `--text-muted`
- `--text-overline` 12px, 700, uppercase, `--tracking-overline` 0.14em, `--text-link` colour (`.cory-overline`)

Mono — `--font-mono`, no scale step; used at 13px / 1.7 for data readouts

Metric (implicit, not tokenized) — 800, line-height 1, -0.03em, often `.cory-gradient-text`: StatCard clamp(40px, 6vw, 56px); specimen 52px; Testimonial 36px

Other: `--leading-snug` 1.18 · `--tracking-normal` 0 · `--tracking-wide` 0.02em

**Observation:** kits and components use many off-scale sizes (56, 38, 19, 17, 15, 14.5, 13.5, 12.5, 11.5, 11px). No fluid `clamp()` scale beyond the StatCard.

---

## 3. Spacing, radii, borders, elevation

**Spacing (8px base)** `--space-0` 0 · `-1` 4 · `-2` 8 · `-3` 12 · `-4` 16 · `-5` 20 · `-6` 24 · `-8` 32 · `-10` 40 · `-12` 48 · `-16` 64 · `-20` 80 · `-24` 96 · `-32` 128. Section padding in practice 72–80px vertical, 28px horizontal (hard-coded, not tokens).

**Radii** `--radius-xs` 6 · `--radius-sm` 10 · `--radius-md` 14 (inputs, icon tiles) · `--radius-lg` 18 (rows) · `--radius-xl` 24 (cards) · `--radius-2xl` 32 (hero panels, CTA) · `--radius-pill` 999 (buttons, badges) · `--radius-tile` 22.7% (mascot/avatar)

**Borders** Always 1px hairline; colour tokens only (`--border-subtle` / `--border-default` / `--border-strong` / `--border-focus`). No width tokens.

**Elevation / shadows** (navy-tinted rgba(11,31,54,…))
- `--shadow-xs` 0 1px 2px .06 · `--shadow-sm` 0 2px 8px .06 (card rest) · `--shadow-md` 0 8px 24px .08 · `--shadow-lg` 0 18px 48px .10 (card hover) · `--shadow-xl` 0 32px 72px .14 (hero product visual)
- `--shadow-brand` 0 12px 32px rgba(37,138,253,.28) (primary button glow)
- `--shadow-focus` 0 0 0 4px var(--focus-ring)

**Dark mode behaviour:** none defined. Navy-tinted shadows are invisible on navy surfaces; dark panels in the kits rely on `rgba(255,255,255,0.1)` borders and radial cyan glows instead of elevation.

---

## 4. Motion

- `--ease-out` cubic-bezier(0.22, 1, 0.36, 1) — default
- `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1)
- `--duration-fast` 140ms (press) · `--duration-base` 220ms (hover, focus) · `--duration-slow` 380ms
- Behaviours (hard-coded, not tokens): press `scale(0.97)`; card hover `translateY(-3px)` + `--shadow-sm → --shadow-lg`
- `@keyframes`: none defined · enter/exit/reveal: none · stagger/delay: none · spring: none · `prefers-reduced-motion`: none · scroll-driven: none

---

## 5. Grid, breakpoints, containers

- `--container-max` 1200px · `--container-narrow` 760px · `--header-height` 72px
- Base grid 8px; gutters hard-coded (20px card grids, 28px page padding)
- Breakpoints: **none defined** — zero `@media` rules in tokens, components, or kits
- Column system: none; kits use fixed `grid-template-columns` (`1.05fr 0.95fr`, `repeat(3,1fr)`, `1.4fr 1fr 1fr 1fr`) that do not reflow
- Header: sticky, `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)` (hard-coded)

---

## 6. Components (`DesignSystem_ebeb85.*`)

**Button** — variants `primary` (gradient + `--shadow-brand`), `ink`, `secondary` (outline), `ghost`; sizes `sm` 14px / `md` 15px / `lg` 17px; props `iconLeft`, `iconRight`, `fullWidth`, `disabled`. States: press scale(0.97); disabled opacity .5. Hover darkening is described in the guide but **not implemented**; no `:focus-visible` style; no loading or link variant.

**Badge** — tones `brand`, `cyan`, `success`, `warning`, `danger`, `neutral`, `ink`; sizes `sm` 11.5px / `md` 13px; optional `dot`. Static, no interactive states.

**Avatar** — kinds `cory` (navy tile), `cory-light`, image (`src`), initials (`name`); `size`; `ring`. No status/presence variant.

**StatCard** — `value`, `label`, `sub`; `gradient`; `align` left/center. Static.

**FeatureCard** — `icon` (48px `--blue-100` tile), `title`, body, `tags[]` (cyan-dot inline tags). State: hover lift + `--shadow-lg`. No link/selected/pressed state.

**Testimonial** — `metric` (36px gradient), `metricLabel`, `quote`, `name`, `role`, `photo`. Static.

**ChatBubble** — `from` cory/user, `time`, `showAvatar`. Static.

**Input** — `label`, `hint`, `error`, `required`, `multiline`. States: default, focus (`--border-focus` + `--shadow-focus`), error. No disabled, success, or icon slot; no select, checkbox, toggle, textarea-only sibling.

**CSS helpers** (`base.css`): `.cory-gradient-text`, `.cory-overline`, `.cory-eyebrow-pill`; `::selection`.

**Assets**: `logo-agentcory.svg`, `logo-agentcory-darkmode.svg`, `cory-tile.svg`, `cory-tile-dark.svg`, `cory-icon.svg`, `author-avatar.png`. Icons: Lucide via CDN (substitute; no size tokens).

**Patterns in kits, not components**: sticky blur header; hero radial glow; numbered workflow rows (`--gradient-ink` icon tile + counter dot); 3-up testimonial grid; `--gradient-ink` CTA spotlight panel with off-edge cyan glow; navy footer; chat widget; demo modal; ROI calculator. 19 templates (bento social posts, carousels, pitch deck, one-pager, email, landing page) — the bento grid lives there as hard-coded layout only.

---

## 7. Visual personality

AgentCory is recognisable by one gesture: deep navy ink `#0B1F36` set against a single blue→cyan signal gradient `#258AFD → #29BEDD`, with everything else kept to cool, quiet off-white and slate. Shapes are soft and generous — pill buttons, 24–32px card corners, the 22.7% mascot tile — and type is an extrabold, tightly tracked sans where the biggest thing on screen is usually a number, not a headline. Depth comes from navy-tinted, low-spread shadows and off-edge radial glows rather than borders or texture, and motion stays restrained: short ease-out fades, a 3px lift, a 0.97 press.

---

## 8. Gaps for a premium animated portfolio

**Theme**
- No dark theme: no semantic dark aliases for background/surface/text/muted/border; raw `--navy-900/800/700` exist but no surface hierarchy; on-dark text is untokenized rgba.
- No shadow or elevation strategy for dark surfaces (navy shadows vanish); no glow or overlay/scrim tokens (guide mentions a 55% navy scrim; none defined).

**Motion**
- Only 3 durations (max 380ms) and 2 easings; nothing for cinematic reveals (600–1200ms), enter/exit, stagger/delay scale, spring, hover-lift distance, or scroll-driven/parallax.
- No `@keyframes` library, no `prefers-reduced-motion` handling.

**Layout**
- No breakpoints, no responsive column system, no gutter tokens; fixed grids.
- No bento tile/grid component (span rules, tile sizes, hover treatment) — exists only hard-coded in social templates.
- No aspect-ratio, z-index, blur, or opacity tokens (header blur 12px and z 50 are inline).

**Components missing**
- Chip (interactive/selectable; Badge is static, FeatureCard tags are inline text)
- Video card / media frame (poster, play affordance, aspect ratio, mute state)
- Image frame / device mock / case-study cover card
- Generic Card primitive (FeatureCard is opinionated)
- Nav with active indicator, mobile menu, theme toggle
- Tabs / segmented control / filter bar
- Link component with hover/underline motion; icon button
- Tooltip, marquee/ticker, section divider, project metadata list, footer for a person
- Button: hover state, `:focus-visible`, loading, anchor variant

**Type**
- No fluid `clamp()` scale; metric/stat size untokenized; no mono scale step; components use off-scale sizes (14.5, 12.5, 11.5px) that need normalising.

**Accessibility**
- `--text-muted` on `--surface-page` (4.2), `--text-link` on white (4.2), white on `--blue-500`/`--cyan-500` (3.4 / 2.2), `--green-500` text (2.6), `--text-subtle` (2.8) all miss AA for body text; no border reaches 3:1; no focus-visible outline on buttons.

**Voice**
- Brand copy is Cory's first person and higher-ed metrics; a portfolio needs the author's voice (Md Abdul Aleem, per project memory) and a case-study content model the system does not cover.
