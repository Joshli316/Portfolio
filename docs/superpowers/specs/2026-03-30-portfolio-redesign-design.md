# Portfolio Redesign — Design Spec

## Overview

Redesign Z's portfolio from a light-themed project directory into a dark, developer-focused personal brand site optimized for job search and interviews. The site positions Z as an **AI Application Developer** with a compelling **"Educator → AI Developer"** career transition narrative.

## Prerequisites

- **Update resume PDF** — Add Claude Code / AI development skills and experience gained in the last month of building and shipping products. Update the PDF before linking it from the portfolio.
- **Professional photo** — Have a headshot ready for the hero section.
- **Project screenshots** — Capture screenshots of the 4 featured projects for case study cards.

## Architecture

**Approach:** Multi-file vanilla HTML/CSS/JS (no framework, no build step)

```
Portfolio/
├── index.html        # Page structure and content
├── styles.css        # All styling
├── script.js         # Typing animation, smooth scroll, nav behavior
└── assets/
    ├── photo.jpg     # Professional headshot
    ├── resume.pdf    # Updated resume
    └── screenshots/  # Project screenshots for case studies
```

Deploys directly to Cloudflare Pages via `wrangler pages deploy .`

## Visual Design

- **Theme:** Dark background (#0a0a0a), light text (#fff / #ccc)
- **Accent color:** Lime green (#a3e635) — used for badges, tags, links, highlights
- **Font:** Inter (Google Fonts) — same as current site
- **Cards/containers:** #111 background with #222 borders, rounded corners
- **Hover effects:** Border glow or subtle lift on interactive elements
- **Responsive breakpoints:** 375px (phone), 768px (tablet), 1024px+ (desktop)

## Sections

### 1. Navigation (sticky)

- No logo — just nav links on the right
- Links: About / Projects / Contact
- Sticky on scroll with subtle background blur
- Smooth scroll to sections on click

### 2. Hero Section

Two-column layout (text left, photo right):

**Left column:**
- Green "Open to Opportunities" badge (pill-shaped)
- Code-style intro lines:
  - `// Hello, I'm` (gray, monospace)
  - `const developer = "AI Application Developer";` (green, monospace)
- Large name: **Zhi M. Huang** (42px+, bold)
- Green dash + "Educator → AI Developer" tagline
- Subtitle: "Bilingual · 21 Shipped Apps · Claude Code"
- **Code snippet** (terminal-style card with traffic light dots):
  - `const profile = { name, role, location, languages, status }`
  - **Typing animation** — lines type in one by one, then stay displayed
- 3 CTA buttons:
  - "View Projects ↓" (green filled, scrolls to projects)
  - "Resume" (outlined, opens/downloads resume PDF)
  - "LinkedIn" (outlined, opens LinkedIn profile)

**Right column:**
- Professional photo in rounded card frame
- "Open to Work" badge on corner
- Stats row below photo: 21 Projects / 13 Deployed / 3 Languages

**Mobile:** Stacks vertically — photo on top, text below.

### 3. About Me

Two-column layout (balanced width, not 60/40 — fix the empty space issue from mockup):

**Left column:**
- Section title: "About Me" (centered above both columns)
- Subtitle: "Educator turned AI developer"
- Green divider line
- Bio paragraphs (bridge narrative):
  - Para 1: 17 years teaching → discovered AI → shipped 21 apps in 12 months with Claude Code
  - Para 2: Unique combination — cross-cultural fluency, teacher's UX instinct, AI-assisted shipping speed
- Skill tags (green pills): AI-assisted development, Bilingual EN/中文 apps, Rapid prototyping & shipping, UX-driven design, Cross-cultural communication

**Right column:**
- Education section:
  - M.S. in Multidisciplinary Studies — SUNY College at Buffalo, 2014
  - B.A. in English Literature — University of California, Irvine, 2000
- Languages section:
  - English, Mandarin 普通话, Cantonese 粤语

**Bottom (full width):**
- Tech stack row: Claude Code / Claude API, HTML / CSS / TypeScript, Cloudflare Pages, Leaflet / OSM, Git / GitHub

**Mobile:** Stacks vertically — bio first, then education/languages.

### 4. Projects — Featured Case Studies

Section title: "Projects" with subtitle "Selected case studies with measurable outcomes"

4 featured projects as large cards with **alternating image/text layout** (left-right, right-left):

Each case study card contains:
- Screenshot/preview placeholder on one side
- Details on the other side: tags, title, description, impact line, Live/GitHub buttons

**Project 1 — Career Ready** (image left, text right)
- Tags: Web App, Claude API
- Description: 8 interactive job prep tools with Claude API integration for college graduates
- Impact: 8 tools · Claude API · Bilingual EN/中文

**Project 2 — CareNavigatorCA** (text left, image right)
- Tags: Web App, Eligibility Engine
- Description: Intelligent benefits eligibility platform. 5-step quiz matching users with 100+ programs
- Impact: 100+ programs · 5-step matching · Accessible design

**Project 3 — QiMa (起码)** (image left, text right)
- Tags: Web App, Education
- Description: Bilingual tutorial from zero coding to shipping with Claude Code in 14 days
- Impact: 14-day curriculum · 45+ commands · Bilingual EN/中文

**Project 4 — LuoJiao (落脚)** (text left, image right)
- Tags: Web App, Leaflet / Maps
- Description: Interactive cultural map for Chinese students in LA
- Impact: Interactive map · Curated LA locations · Leaflet + OSM

**Mobile:** All cards stack vertically — image on top, text below.

### 5. More Projects (compact grid)

Below the case studies, separated by a divider line.

2-column grid of compact rows, each showing:
- Project name (bold) + one-line description (muted) + link (Live → or GitHub →)

Projects in this section:
- CodeFu (码功) — Gamified Claude Code mastery
- CodePlay (码玩) — Gamified learning, 12 game types
- AiQi (AI起) — Claude Code tutorial for grads
- AgentPath (智路) — 12-week AI learning companion
- Prayer Journal — Daily prayer journal PWA
- Home Ready (归途) — Return-journey journal
- Plus remaining projects from current site (Missionary Launchpad, RPG, DW Comic, Welcome Hub, ISM In A Box, Ministry Starter Pack, Get It Done, Pearl of Great Price, Uncover)

Grid should have **complete rows** — no trailing empty slots.

**Mobile:** Single column list.

### 6. Contact

- Section title: "Get In Touch" with subtitle "Let's build something together"
- Green divider
- Two card-style links side by side:
  - Email card: icon + label + zhiminghuang317@gmail.com
  - LinkedIn card: icon + label + "Zhi Huang"

**Mobile:** Cards stack vertically.

### 7. Footer

- Left: © 2026 Zhi M. Huang. All rights reserved.
- Right: Built with Claude Code · Deployed on Cloudflare Pages

## Interactions & Animations

- **Typing animation** on the hero code snippet — lines type in sequentially on page load
- **Smooth scroll** when clicking nav links or "View Projects" CTA
- **Sticky nav** — becomes visible with background blur on scroll
- **Hover effects** on cards, buttons, and links (subtle border glow or lift)
- **Fade-in on scroll** (optional) — sections fade in as they enter viewport

## Links & Contact Info

- **Email:** zhiminghuang317@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/zhi-huang-013a6170
- **GitHub:** https://github.com/Joshli316
- **Location:** Monterey Park, CA

## Content to Prepare

1. Updated resume PDF (add AI/Claude Code skills and shipped projects from the last month)
2. Professional headshot photo
3. Screenshots of 4 featured projects (Career Ready, CareNavigatorCA, QiMa, LuoJiao)
4. Verify all project live links and GitHub URLs still work

## Out of Scope

- Dark/light mode toggle (dark only)
- Blog or writing section
- Contact form (no backend)
- OAuth or API integrations
- Payment or pricing
- Bilingual toggle (English only for job search audience)
