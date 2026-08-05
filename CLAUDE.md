# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A single marketing deliverable: `index.html` is the Ad Grant Experts landing page for addiction &
recovery nonprofits — a division of Click2 — deployed to Vercel as a zero-config static site. The
repo root *is* the document root, so `index.html` is served at `/`.

No build step, no package.json, no dependencies to install, no framework, no tests, no CI. The whole
artifact is one ~770-line HTML file carrying its own `<style>` and `<script>` blocks.

## Commands

Nothing to build, lint, or test. The useful operations are:

```bash
# Preview locally — or just open index.html directly; it needs no server
python3 -m http.server 8000

# Deploy: push to the branch Vercel watches; Vercel serves the root as-is
git push -u origin main
```

## Before this page goes live

Two blocks are unverified placeholder content and are marked inline with `⚠️` comments. Both are
public performance claims for a real business — do not treat them as data:

- **The four hero medallions** (`.chipwall`, ~line 319): `500+`, `8.4%`, `$120K`, `0`.
- **Every row of the results table** (~line 455): the entire before/after comparison.

Conversion tracking is also inert: `send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXXX'` is a placeholder, and
a `TODO` marks where the CRM POST belongs. The form currently shows its success state without
sending the submission anywhere.

## Architecture of `index.html`

Order top to bottom: `<style>` (lines ~11–273) → `header.hdr` (sticky) → `main#top` → hero →
alternating full-bleed sections → `footer.ftr` → inline `<script>`. Every section is
`section.section > div.wrap`, so `--wrap` and `--pad` control page rhythm globally.

Four things carry the design:

**Tokens are centralized, and the palette is a contract.** All color, type, and spacing live in
`:root` (`--ink`, `--chalk`, `--paper`, `--brass`, `--brass-lt`, `--spruce`, `--dim`, `--line`,
`--wrap`, `--pad`, `--sect`). The CSS header asserts *"Palette verified WCAG 2.1 AA (all text pairs
>= 4.5:1)"* — treat that as a constraint, not a comment. `--brass` is the accent for light bands and
`--brass-lt` for dark ones precisely because contrast flips; never swap one for the other, and never
hardcode a hex in new markup.

**`.on-dark` is the band system.** Sections alternate light and dark, and `.on-dark` restyles its
whole subtree — `h2`/`h3`, `.lede`, `.card`, `.eyebrow`, `.chip__label`, `.btn--ghost`. Any new
component placed inside a dark band needs a matching `.on-dark <component>` rule or it will render
low-contrast. There are four `.section.on-dark` bands plus the footer.

**The signature element is `.chipwall`.** Four sobriety-medallion SVGs, drawn inline — concentric
circles with a `<textPath>` running the rim (each needs its own `<defs><path id="rimA…D">`, since
`textPath` references an id). Keep them inline SVG; the design has no raster images anywhere.

**Motion is opt-out, not opt-in.** `.rv` (14 uses) and `.chip-anim` (11) start at `opacity:0` and
are revealed when an `IntersectionObserver` adds `.in`. There's a fallback that reveals everything
if `IntersectionObserver` is missing, and `prefers-reduced-motion` forces everything visible — but
**with JavaScript disabled entirely, all `.rv` content stays invisible.** Adding `.rv` to a section
puts that content behind JS; don't put anything legally or structurally essential behind it.

## Conventions to maintain

- **Narrative structure is deliberate and marked in the comments**: `STORY (the 80%)` →
  `RISK (the 15%)` → `CLOSING + FORM (the 5%)`. Most of the page earns trust before it asks for
  anything. Preserve that ratio when adding content — new sales copy belongs in the 5%, not the 80%.
- **Every section opens with `p.eyebrow`**, which names the section's job ("The honest part",
  "Before we go further"). It's a labeling device, not decoration.
- **Breakpoints are mobile-first `min-width`**, and there are five: 680 (form grid), 760
  (`.cards`/`.kw`/`.eco`/`.elig`/`.ftr`), 820 (`.mel`), 900 (header nav), 940 (hero grid). New
  multi-column layouts pick the existing breakpoint closest in intent rather than adding a sixth.
- **One conversion event, on purpose.** The form pushes a single `grant_audit_request` to
  `dataLayer`. Keep it to one so the Ads conversion stays unambiguous.
- **Anchors must resolve.** Header nav and footer both link `#risk`, `#results`, `#services`,
  `#faq`, `#audit`, `#top`; all currently resolve. A new linked section needs its `id` plus entries
  in both lists.
- **Google Fonts is the only external dependency** (Newsreader for display, Archivo for body, via
  `<link>` + preconnect). Everything else is self-contained. Both faces have real fallbacks
  (`Georgia, serif` / `system-ui, sans-serif`), so the page degrades cleanly offline — but it is
  *not* a fully offline-capable artifact.

## Content conventions

This page sells a regulated service to nonprofits, and the compliance claims are load-bearing:

- **Keep policy claims hedged the way they already are.** The copy says LegitScript certification is
  *"generally"* required and that requirements *"change and vary by country"*, and it commits to
  confirming specifics during the audit. Don't tighten that into a flat assertion.
- **The Google non-affiliation disclaimer in the footer is required** — "Not affiliated with or
  endorsed by Google. Google Ad Grants is a trademark of Google LLC." Never drop it.
- **The eligibility section says no on purpose.** `.elig--no` lists organizations Google generally
  excludes. Disqualifying readers early is the section's job; don't soften it into a maybe.
- Voice is first-person from Melanie Deck, plain-language, teacher-not-vendor. Specific concrete
  detail ("7:40 in the morning", "bed 4 — open") does the persuading, not adjectives.
