# Portfolio — CLAUDE.md

## What This Is
Personal portfolio site for job search. Positions Z as "AI Application Developer" with "Educator → AI Developer" bridge narrative.

## Architecture
- Multi-file vanilla HTML/CSS/JS (no framework, no build step)
- `index.html`, `styles.css`, `script.js`, `assets/`
- Dark theme (#0a0a0a bg, #a3e635 accent)

## Key Decisions (2026-03-30)
- No logo in nav — just About/Projects/Contact links
- 4 featured case studies: Career Ready, CareNavigatorCA, QiMa, LuoJiao
- Remaining projects in compact 2-column grid
- Hero has typing animation for code snippet (not rotating billboard)
- English only (no bilingual toggle) — optimized for job search audience
- Contact section: email + LinkedIn cards only

## Specs & Plans
- Design spec: `docs/superpowers/specs/2026-03-30-portfolio-redesign-design.md`
- Implementation plan: `docs/superpowers/plans/2026-03-30-portfolio-redesign.md`

## Prerequisites Before Build
- Update resume PDF with AI/Claude Code skills
- Add professional headshot to `assets/photo.jpg`
- Capture screenshots of 4 featured projects
