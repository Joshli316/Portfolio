# Portfolio — CLAUDE.md

## What This Is
Personal portfolio site for job search. Positions Z as "AI Application Developer" with "Educator → AI Developer" bridge narrative.

## Architecture
- Multi-file vanilla HTML/CSS/JS (no framework, no build step)
- `index.html`, `styles.css`, `script.js`, `assets/`
- Dark theme (#0a0a0a bg, #a3e635 accent)

## Key Decisions (2026-03-31)
- No logo in nav — just About/Projects/Contact links with active state on scroll
- 4 featured case studies: Career Ready, CareNavigatorCA, QiMa, LuoJiao
- Remaining 15 projects in compact 2-column grid with "View All on GitHub" CTA
- Hero has typing animation for code snippet (respects prefers-reduced-motion)
- English only (no bilingual toggle) — optimized for job search audience
- Contact section: email (with subject pre-fill) + LinkedIn + GitHub cards
- Case study layout uses CSS `order` for alternating image/content (not direction:rtl)
- LuoJiao shows GitHub-only link (not deployed yet)

## Additional Files
- `404.html` — styled 404 page (standalone, no CSS import)
- `_headers` — Cloudflare Pages security headers
- `robots.txt`, `sitemap.xml` — SEO
- JSON-LD Person schema in `<head>`

## Specs & Plans
- Design spec: `docs/superpowers/specs/2026-03-30-portfolio-redesign-design.md`
- Implementation plan: `docs/superpowers/plans/2026-03-30-portfolio-redesign.md`

## Assets (Complete)
- Resume PDF: `assets/resume.pdf` (AI developer + educator, 1-page)
- Resume source: `resume.html` (editable, also deployed as web page)
- Headshot: `assets/photo.jpg` (compressed to 48KB)
- OG image: `assets/og-image.png` (1200x630)
- Screenshots: `assets/screenshots/` (4 featured projects)
