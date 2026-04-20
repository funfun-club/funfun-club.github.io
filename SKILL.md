---
name: omoshiroi-katsudou-design
description: Use this skill to generate well-branded interfaces and assets for 面白い活動 (Omoshiroi Katsudou) — a Japanese 2-person YouTube/SNS creator duo with a Heisei-retro × cyber-gradient aesthetic. Contains design tokens, type system, logos, placeholder marks, and a website UI kit. Good for mocks, throwaway prototypes, and production-adjacent work.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files — `colors_and_type.css` is the single source of truth for tokens; `ui_kits/website/` has a working hi-fi recreation of the homepage; `preview/` has small spec cards for each design concept.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files that import `colors_and_type.css`. If working on production code, copy the token file and read the rules in README to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (ask a few focused questions about audience, screens, tone), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Key things to remember about this brand:**
- **Voice is タメ口 humor** — two-beat rhythm, short + ツッコミ落ち. Never overly polite (ですます). Bilingual JP-first with English テロップ accents in ALL CAPS.
- **Visuals are Heisei-retro × cyber** — ink + paper grounds, saturated テロップ accents (magenta/cyan/yellow), hard-offset drop shadows (not Material soft shadows), gradients used as ribbons/heroes only.
- **Type pairs Reggae One (display) + Yuji Mai (brush) + Zen Kaku Gothic (body) + DotGothic16 (pixel captions).**
- **Icons are minimal** — SNS brand marks, Lucide for utility, unicode (▶ ● → ✴) encouraged. No emoji in chrome.
- **Components are sticker-like** — 2–3px ink borders, 4-14px radii, hard offset shadows that shift on hover (nudge up-left, shadow grows).
