# Llandaff House Design System

A small, warm, trustworthy design system for **Llandaff House Care Home** — a 21-bed residential and dementia care home in Llangennech, near Llanelli, Carmarthenshire. Operated by **Cathedral Care Limited** (Company No. 02600036, incorporated 1991). CIW Ref: **SIN-00009093-CGLK**.

This system exists to power a single-page MVP marketing site for the home. The audience is almost always a worried family member — most often a 50–70-year-old researching care for a parent on a phone, late at night. Every visual decision should make that person feel safe within three seconds.

---

## Sources

- **Brief**: in-conversation build prompt from the operator (pasted into the project on creation). Stored verbatim in `/docs/brief.md` if needed in future iterations.
- **Photography**: 6 real phone-taken photos of the home, supplied by the operator. Stored in `assets/photos/`.
- **Sign / wordmark**: there is no formal logo file. The brand teal/mint is sampled from the existing acrylic sign on the front of the building (see `assets/photos/exterior.jpeg`). A simple wordmark has been re-built in HTML/CSS using that colour — see `preview/brand-wordmark.html`.
- **CIW report**: https://www.careinspectorate.wales/service/SIN-00009093-CGLK (referenced, not bundled).

No Figma, no codebase, no prior site — this is greenfield. The "design system" here is the smallest set of decisions that lets us produce a coherent site and, later, leaflets, posters and email comms without losing the warmth.

---

## Index

| File | What it is |
| --- | --- |
| `README.md` | This file — context, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | All tokens (color, type, spacing, radii, shadows) plus semantic element defaults. Import this in everything. |
| `SKILL.md` | Agent-skill entrypoint for re-using this system in Claude Code or future Claude conversations. |
| `assets/photos/` | The six real photos of the home, renamed by content (`exterior`, `patio`, `garden`, `conservatory`, `lounge`, `bedroom`). |
| `preview/` | Small HTML cards that populate the Design System tab — colours, type, components, brand. |
| `ui_kits/website/` | The Llandaff House single-page website, built from the system. This is the production-ready MVP. |

---

## Content fundamentals

The voice of Llandaff House is **a Welsh village neighbour, not a brochure**. It's the way the manager would describe her home to a friend, not the way a national care chain would describe a "facility". It's warm without being sentimental, plain without being cold, and proud without being boastful.

### Voice principles

1. **"We" and "you", never "the resident" or "the family".** The reader is a person; so are the people who work here.
2. **Specific over generic.** Name the village. Name Mwrwg Road. Name the rugby club. Name Tuesday spa day. Generic claims ("excellent care", "state of the art") are forbidden — they make a worried person *more* nervous, not less.
3. **Short sentences. Real verbs.** "Our hairdresser visits every Tuesday." Not "Hairdressing services are provided on a weekly basis."
4. **British English, plain English.** No Americanisms (no "facility", "amenities", "elderly seniors"). No jargon (no "person-centred care pathways"). If a 75-year-old wouldn't say it at a bus stop, don't say it on the site.
5. **Welsh place names spelled correctly, always.** Llangennech, Llanelli, Carmarthenshire, Mwrwg Road.
6. **No emoji. Ever.** Icons are line-drawn (see Iconography).
7. **Casing is sentence case** for headings ("Life with us"), title case only for proper nouns ("Care Inspectorate Wales").
8. **Numbers as digits** when factual ("21 single rooms", "since 1991"), spelled out when conversational ("over thirty years of care").
9. **Currency**: `£688.51` — no rounding, no "from" weasel words unless the operator confirms.

### Words we use

> home · resident · family · kindness · dignity · respect · village · garden · welcome · visit · arrange · ring us

### Words we don't

> facility · unit · clientele · cutting-edge · world-class · solutions · synergy · journey (as a metaphor) · loved ones (cliché) · passed away (when "died" is what we mean)

### Tone examples (real copy from the site)

> "We would like every resident to truly think of Llandaff House as their home."

> "Our hairdresser visits every Tuesday as part of our weekly spa day."

> "We welcome visits — give us a ring to arrange a time that suits you."

Notice: contractions are fine ("don't", "we're") in body copy, avoided in headings. The phone number is written `01554 821689` — never `+44 1554...` (that's how locals dial it).

---

## Visual foundations

### Colour

The single ownable mark is the **teal/mint** on the front-of-building sign. We've built a full scale around it (`--teal-50` → `--teal-800`) but `--teal-300` is *the* brand colour and `--teal-600` is its hover/strong partner.

Supporting the teal are colours **sampled from the building itself**:
- **Sage green** from the lounge wingback chairs and the bedroom walls.
- **Dusky pink** from the other lounge chairs.

These sit on the page only as captioned reference — they are NEVER used as UI fills, section tints, or CTAs. The working palette is **white + brand teal** with cool grey ink. The earlier warm-cream direction was rejected by the operator (didn't sit well with the teal).

The neutral is **clean white** (`--cream-50` = `#FFFFFF`) with a very subtle cool-grey tint (`--cream-100` = `#F4F7F6`) for alternating sections. Body text is a soft cool charcoal (`--ink-900` = `#1F2A28`), never pure black. The slight teal cast in the greys keeps everything in the same colour family so nothing fights the brand.

### Type

- **Headings**: Lora (serif, weight 400–500, slight negative tracking). Lora was chosen for a humanist warmth that reads as "trusted local business" rather than "luxury hotel" or "law firm".
- **Body**: Inter (sans, weight 400 base, 500/600 for UI labels). Chosen for raw legibility at small sizes on phone screens.
- Both are loaded from Google Fonts at the top of `colors_and_type.css`. *Substitution flag*: no licensed font files were provided by the operator — Lora + Inter were chosen as a safe, free, broadly-installed pairing. If the operator wants a paid pairing (e.g. **Söhne + GT Sectra**, **Tiempos + National**) please supply the files and we'll swap them.

**Body never goes below 17px.** That is non-negotiable for this audience.

### Spacing & rhythm

4px base unit. Sections breathe — `--space-9` (96px) and `--space-10` (128px) between major page sections on desktop. On mobile, drop to `--space-7` / `--space-8`. Generous whitespace is part of the trustworthiness signal.

### Corner radii

- `--radius-sm` (8px) for inputs, small chips.
- `--radius-md` (12px) for buttons and cards.
- `--radius-lg` (18px) for hero photo frames and big feature cards.
- `--radius-pill` for tags and the phone-number button in the header.

We avoid sharp 0px corners (feels institutional) and avoid huge 24px+ rounded "app card" radii (feels SaaS-y, not domestic).

### Cards

A standard card is:
- Background `--bg-elevated` (`#FFFCF5`).
- 1px border in `--ink-100`.
- `--radius-md` corners.
- `--shadow-sm` — barely perceptible, just enough to lift it off the cream page.
- 24–32px internal padding.
- A small top accent only when grouping (no left-border-accent treatment — feels too SaaS).

### Shadows

Three levels — **xs / sm / md / lg** — all warm-tinted (rgba of `--ink-900`, not pure black). Soft, low-contrast, calm. No harsh drop shadows. No neon glow.

### Imagery treatment

The six photos are authentic, taken on a phone in natural light. **They are a strength.** They tell the truth about this home in a way stock photography can't. Treatment rules:

- Never crop into the building so tight that you lose context.
- Never over-saturate. A very subtle ink overlay (`linear-gradient(180deg, transparent, rgba(31,42,40,0.55))`) is fine on the hero for text legibility — nothing more.
- Never apply a duotone or hard filter.
- Always include a `border-radius` of `--radius-lg` on photo frames (warmer than hard corners).
- Always alt text in the operator's own voice ("The conservatory in afternoon sun"), not generic ("Care home interior").

### Backgrounds

- Hero: full-bleed photo with a warm protection gradient at the bottom for headline contrast.
- Section backgrounds alternate `--cream-50` and `--cream-100` for gentle rhythm. Never a hard colour block.
- No patterns, no textures, no SVG decoration, no gradients other than the photo protection gradient.

### Borders & dividers

Hairline `1px solid --border` (`--ink-100`). Stronger `1px solid --border-strong` only for input outlines. Section dividers are *whitespace*, not lines.

### Motion

- Page is essentially static. **No parallax, no hero video, no scroll-triggered animations.**
- Allowed: 120–180ms ease colour transitions on buttons/links. A `prefers-reduced-motion` respect.
- Hover state on buttons = colour darken (teal-300 → teal-600), no scale, no shadow lift.
- Press state = 1px translateY, no shrink.
- Focus state = 2px solid `--focus-ring` (teal-600), 3px offset. Visible. Always.

### Transparency & blur

Avoided. The site should feel printable. A backdrop-blur sticky header is a SaaS tic we don't want.

### Layout rules

- Max container width **1200px** for general sections, **800px** for prose blocks (we don't want lines wider than 65ch).
- Sticky header at 84px tall on desktop, 64px on mobile. Solid `--bg` background — no blur, no transparency.
- Mobile-first. Everything stacks at <720px. Phone number and "Arrange a visit" CTA stay visible at the top on every breakpoint.

---

## Iconography

There is no in-house icon system or icon font. To keep the warmth, we use **[Lucide](https://lucide.dev/)** — a clean, line-based, open-source icon set — at **1.5px stroke**. Lucide pairs well with Lora's warm humanism without feeling cold or "techy".

**Flagged substitution**: Lucide is the closest free CDN match to the visual register we want. If the operator later commissions a hand-drawn icon set (recommended for the long term — line drawings of the wingback chair, the tea cup, the bistro table — to make the brand truly unique) those should drop straight in without other system changes.

Usage rules:

- **Stroke weight**: 1.5px. Never 2px+ (feels heavy, hospital-y).
- **Size**: 18px inline with text, 22px in nav, 28–32px in feature cards.
- **Colour**: inherits `currentColor`. Brand teal (`--brand-deep`) for primary, `--fg-3` for secondary.
- **Never use emoji.** The audience may not have them rendering correctly, and they feel flippant for the subject matter.
- **Unicode symbols** allowed for utility only: `→`, `·`, `—`, `£`. Not as decoration.
- **SVG line drawings of objects** (e.g. a small wingback chair illustration as a section opener) are welcomed — but commission these properly, do not auto-generate them.

Lucide is loaded via CDN in the UI kit:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Icons used in the MVP site:
- `phone` — header CTA, contact section
- `map-pin` — address
- `mail` — contact form
- `clock` — visiting hours / activities
- `heart-handshake` — care values
- `home` — accommodation
- `tree-pine` / `flower-2` — garden / outdoors
- `file-text` — annual return / documents
- `check` — feature lists
- `arrow-right` — CTAs
- `star` — food hygiene rating
- `shield-check` — CIW inspection
