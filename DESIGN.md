# Design System

<!-- impeccable:design-schema 1 -->

## Direction

Volunteer bulletin board. The visual world of animal rescue as it actually happens: community corkboards, pinned flyers, Polaroid photos, rubber stamps, washi tape, and torn paper edges. The site should feel like walking into a shelter volunteer room, not a marketing agency pitch.

## Color

Strategy: Restrained warm neutrals with one functional accent and one emotional accent.

- **Cork** `#C7A77B` — primary ground, used for hero and major sections; represents the board itself.
- **Kraft** `#E8DCC4` — secondary ground, pinned-card backs, section alternation.
- **Paper** `#FAF6F0` — content card surface, readable body ground.
- **Ink** `#2A1F16` — primary text, stamp ink, strong outlines.
- **Stamp red** `#B5422A` — eligibility stamps, urgent CTAs, error states, tear-off tabs.
- **Forest green** `#4F6B3A` — secondary accent, success, checkmarks, links.
- **Shadow** `rgba(42,31,22,0.12)` — pinned-card drop shadows, depth without blur decoration.

Dark text on light paper must meet WCAG 2.1 AA. Stamp red on paper ≥ 4.5:1.

## Typography

- **Display / headlines:** *Lora* (Google Fonts), a warm humanist serif with enough character to carry poster headlines. Use weights 500–700, tight tracking (-0.02em), large scale.
- **Body / UI:** *Inter*, clean and legible, 400/500/600.
- **Labels / stamps / data:** *IBM Plex Mono*, used for stamps, tags, eligibility labels, pricing figures, and small caps labels. Never as body text.

Scale: hero headline `clamp(2.5rem, 7vw, 5.5rem)`; section headline `clamp(2rem, 5vw, 3.5rem)`; body `1rem/1.65`; small/stamp `0.75rem/1.4`.

## Materials & Components

- **Pinned card.** White or kraft rectangle, subtle rounded corners (8–12px), torn-paper edge via SVG mask or CSS clip-path on one side, soft offset shadow `0 6px 0 rgba(42,31,22,0.08)`, pushed-pin SVG at top center.
- **Polaroid.** White border (10–16px), subtle rotation (-2deg to +2deg), real animal photo inside, handwritten caption below in body italic.
- **Stamp.** Rectangular or circular border in stamp red or forest green, dashed or solid, uppercase IBM Plex Mono label, slight rotation (-3deg to +3deg).
- **Washi tape.** Horizontal strip of translucent color (kraft or muted green), used to attach cards to the board; 20–32px tall, slight opacity.
- **Tear-off strip.** Horizontal row of cut-lines at the bottom of a flyer, each tab a CTA link.
- **Button.** Flat color or kraft fill, 1px ink border, slight offset shadow, active state pressed-in (shadow removed, translate 1–2px).
- **Navigation.** Horizontal strip of pinned tabs across the top of the board; active tab has a push pin above it.

## Composition

- Sections read as rows of pinned material on a corkboard wall.
- Asymmetric layouts: large central poster flanked by smaller cards; dense clusters alternating with breathing room.
- More space above section headings than below.
- Content measure max ~70ch; display type max 6rem.
- Mobile: cards stack vertically, shadows simplify, rotations reduce.

## Motion

- One authored entrance per section: cards “pinned” to the board with a small translate-y + opacity ease-out.
- Hover on a card lifts it slightly (translate-y -3px) and increases shadow.
- No generic fade-in on every element; motion is material, like a card being tacked up.
- Respect `prefers-reduced-motion`.

## Iconography

- Continue using `lucide-react` for functional icons in the UI font weight.
- Animal icons remain drawn in a consistent 1.5px stroke inside stamps or small cards.
- Push pin, thumbtack, and tape shapes are authored SVG components.

## Photography

- Use real animal photos where available; frame as Polaroids or tape-edged prints.
- Avoid stock-posed studio shots. Prefer the existing candid home-style photos.
- No gradients or blur-as-decoration behind photos.

## Voice in Copy

- Headlines can be poster-direct: “MISSING: Your $10,000/month grant.”
- Body stays plain-English, founder-led, honest.
- Labels and stamps are short and factual: “ELIGIBLE,” “501(c)(3) ONLY,” “FREE CHECK.”

## Responsive

- Desktop: full corkboard compositions with rotation and overlap.
- Tablet: cards still overlap in two-column clusters.
- Mobile: single-column pinned stack, minimal rotation, larger touch targets.
