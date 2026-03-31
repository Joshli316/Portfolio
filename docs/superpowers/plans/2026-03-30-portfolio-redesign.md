# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Z's portfolio into a dark-themed, developer-focused personal brand site for job search, featuring a bridge narrative (educator → AI developer), typing animation, and 4 featured case studies.

**Architecture:** Single-page site with 3 files: `index.html` (structure/content), `styles.css` (all styling), `script.js` (typing animation, smooth scroll, sticky nav). No framework, no build step. Deploys to Cloudflare Pages.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Inter font (Google Fonts)

**Design spec:** `docs/superpowers/specs/2026-03-30-portfolio-redesign-design.md`

---

## Prerequisites (before build session)

1. **Update resume PDF** — Add AI Application Developer skills and Claude Code experience from the last month. Save updated PDF to `assets/resume.pdf`.
2. **Professional headshot** — Save to `assets/photo.jpg`.
3. **Project screenshots** — Capture screenshots of Career Ready, CareNavigatorCA, QiMa, and LuoJiao. Save to `assets/screenshots/`.

---

## File Structure

```
Portfolio/
├── index.html           # All page content and structure
├── styles.css           # All styling (dark theme, responsive)
├── script.js            # Typing animation, smooth scroll, sticky nav
└── assets/
    ├── photo.jpg         # Professional headshot
    ├── resume.pdf        # Updated resume
    └── screenshots/
        ├── career-ready.png
        ├── care-navigator.png
        ├── qima.png
        └── luojiao.png
```

---

### Task 0: Prepare assets directory

- [ ] **Step 1: Create assets directories**

```bash
mkdir -p assets/screenshots
```

- [ ] **Step 2: Add placeholder files for assets that need manual preparation**

Create `assets/README.md`:

```markdown
# Assets Needed

Before deploying, add these files:

1. `photo.jpg` — Professional headshot
2. `resume.pdf` — Updated resume with AI/Claude Code skills
3. `screenshots/career-ready.png` — Career Ready app screenshot
4. `screenshots/care-navigator.png` — CareNavigatorCA app screenshot
5. `screenshots/qima.png` — QiMa app screenshot
6. `screenshots/luojiao.png` — LuoJiao app screenshot
```

- [ ] **Step 3: Commit**

```bash
git add assets/
git commit -m "chore: set up assets directory structure"
```

---

### Task 1: CSS foundation — dark theme, typography, layout primitives

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Write the full CSS file with reset, variables, typography, and layout primitives**

```css
/* ── RESET & VARIABLES ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0a0a;
  --bg-card: #111111;
  --border: #222222;
  --text: #ffffff;
  --text-muted: #888888;
  --text-secondary: #cccccc;
  --accent: #a3e635;
  --accent-bg: rgba(163, 230, 53, 0.12);
  --accent-border: rgba(163, 230, 53, 0.3);
  --radius: 12px;
  --radius-lg: 16px;
  --max-width: 1080px;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

/* ── SECTION COMMON ── */
.section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 80px 40px;
}

.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

.section-title p {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 8px;
}

.section-divider {
  width: 40px;
  height: 3px;
  background: var(--accent);
  margin: 0 auto;
}

/* ── BUTTONS ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  border: none;
}

.btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--accent);
  color: #000;
}

.btn-outline {
  background: transparent;
  border: 1px solid #333;
  color: var(--text);
}

/* ── TAGS ── */
.tag {
  display: inline-block;
  background: var(--accent-bg);
  color: var(--accent);
  font-size: 10px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  letter-spacing: 0.03em;
}

/* ── CARD ── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s;
}

.card:hover {
  border-color: #333;
}
```

- [ ] **Step 2: Verify file renders correctly**

Open `index.html` in browser (it will reference `styles.css`). Page should show a pure black background. No errors in console.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add CSS foundation with dark theme variables and primitives"
```

---

### Task 2: HTML structure — navigation + hero section

**Files:**
- Modify: `index.html` (full rewrite)

- [ ] **Step 1: Write the full index.html with nav and hero**

Replace the entire contents of `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zhi M. Huang — AI Application Developer</title>
  <meta name="description" content="AI Application Developer portfolio. Educator turned developer — 21 shipped apps built with Claude Code.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<!-- ── NAV ── -->
<nav id="nav">
  <div class="nav-inner">
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<!-- ── HERO ── -->
<section id="hero" class="hero">
  <div class="hero-inner">
    <!-- Left column -->
    <div class="hero-text">
      <div class="hero-badge">⚡ OPEN TO OPPORTUNITIES</div>
      <p class="hero-comment">// Hello, I'm</p>
      <p class="hero-const">const developer = "AI Application Developer";</p>
      <h1 class="hero-name">Zhi M. Huang</h1>
      <div class="hero-tagline">
        <span class="hero-dash"></span>
        <span class="hero-tagline-text">Educator → AI Developer</span>
      </div>
      <p class="hero-subtitle">Bilingual · 21 Shipped Apps · Claude Code</p>

      <!-- Code snippet -->
      <div class="code-block">
        <div class="code-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <pre class="code-content" id="typed-code"></pre>
      </div>

      <!-- CTAs -->
      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">View Projects ↓</a>
        <a href="assets/resume.pdf" target="_blank" class="btn btn-outline">📄 Resume</a>
        <a href="https://www.linkedin.com/in/zhi-huang-013a6170" target="_blank" rel="noopener" class="btn btn-outline">in LinkedIn</a>
      </div>
    </div>

    <!-- Right column -->
    <div class="hero-right">
      <div class="hero-photo-frame">
        <img src="assets/photo.jpg" alt="Zhi M. Huang" class="hero-photo">
        <div class="hero-photo-badge">● Open to Work</div>
      </div>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="hero-stat-num">21</span>
          <span class="hero-stat-label">Projects</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-num">13</span>
          <span class="hero-stat-label">Deployed</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-num">3</span>
          <span class="hero-stat-label">Languages</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Remaining sections added in subsequent tasks -->

<script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Add nav and hero CSS to styles.css**

Append to `styles.css`:

```css
/* ── NAV ── */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 40px;
  transition: background 0.3s, backdrop-filter 0.3s;
}

nav.scrolled {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent);
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 40px 80px;
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;
  width: 100%;
}

.hero-badge {
  display: inline-block;
  background: var(--accent-bg);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid var(--accent-border);
  margin-bottom: 24px;
  letter-spacing: 0.05em;
}

.hero-comment {
  color: #555;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  margin-bottom: 4px;
}

.hero-const {
  color: var(--accent);
  font-size: 14px;
  font-family: 'Courier New', monospace;
  margin-bottom: 12px;
}

.hero-name {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}

.hero-tagline {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.hero-dash {
  width: 32px;
  height: 2px;
  background: var(--accent);
}

.hero-tagline-text {
  color: var(--accent);
  font-weight: 600;
  font-size: 15px;
}

.hero-subtitle {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 28px;
}

/* Code block */
.code-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 28px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
}

.code-dots {
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.code-content {
  white-space: pre;
  margin: 0;
}

/* Hero CTAs */
.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Hero Right */
.hero-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-photo-frame {
  position: relative;
  margin-bottom: 28px;
}

.hero-photo {
  width: 260px;
  height: 320px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.hero-photo-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent-bg);
  color: var(--accent);
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid var(--accent-border);
}

.hero-stats {
  display: flex;
  gap: 32px;
  text-align: center;
}

.hero-stat-num {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.hero-stat-label {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

- [ ] **Step 3: Create script.js with typing animation and sticky nav**

```javascript
// ── TYPING ANIMATION ──
const codeLines = [
  { text: 'const profile = {', color: '#fff' },
  { text: '  name: "Zhi M. Huang",', key: 'name', valColor: '#98c379' },
  { text: '  role: "AI Application Developer",', key: 'role', valColor: '#98c379' },
  { text: '  location: "Monterey Park, CA",', key: 'location', valColor: '#98c379' },
  { text: '  languages: ["English", "Mandarin", "Cantonese"],', key: 'languages', valColor: '#98c379' },
  { text: '  status: "Open to opportunities",', key: 'status', valColor: '#98c379' },
  { text: '};', color: '#fff' },
];

function typeCode() {
  const el = document.getElementById('typed-code');
  if (!el) return;

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex >= codeLines.length) return;

    const line = codeLines[lineIndex];
    const text = line.text;

    if (charIndex === 0 && lineIndex > 0) {
      el.innerHTML += '\n';
    }

    if (charIndex < text.length) {
      // Build the line with syntax highlighting
      const partial = text.substring(0, charIndex + 1);
      const lines = el.innerHTML.split('\n');
      lines[lines.length - 1] = colorize(partial, line);
      el.innerHTML = lines.join('\n');
      charIndex++;
      setTimeout(typeLine, 25 + Math.random() * 15);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 200);
    }
  }

  setTimeout(typeLine, 800);
}

function colorize(text, line) {
  if (line.key) {
    // Color the key and string value
    const colonIdx = text.indexOf(':');
    if (colonIdx === -1) return text;
    const key = text.substring(0, colonIdx);
    const rest = text.substring(colonIdx);
    return `<span style="color:#e06c75">${key}</span>${rest.replace(/"[^"]*"/g, m => `<span style="color:${line.valColor}">${m}</span>`).replace(/\[/g, '<span style="color:#e5c07b">[</span>').replace(/\]/g, '<span style="color:#e5c07b">]</span>')}`;
  }
  if (line.text.includes('const')) {
    return text.replace('const', '<span style="color:#c678dd">const</span>').replace('profile', '<span style="color:#e5c07b">profile</span>');
  }
  return text;
}

// ── STICKY NAV ──
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── SMOOTH SCROLL ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  typeCode();
  initNav();
  initSmoothScroll();
});
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in browser. Check:
- Dark background renders
- Nav links visible at top right
- Hero layout: text left, photo placeholder right
- Code snippet types in with animation
- Nav gets backdrop blur on scroll
- CTA buttons visible and styled

- [ ] **Step 5: Commit**

```bash
git add index.html script.js styles.css
git commit -m "feat: add nav + hero section with typing animation"
```

---

### Task 3: About Me section

**Files:**
- Modify: `index.html` (add section after hero)
- Modify: `styles.css` (add about styles)

- [ ] **Step 1: Add About Me HTML to index.html**

Insert after the closing `</section>` of the hero, before the "Remaining sections" comment:

```html
<!-- ── ABOUT ── -->
<section id="about" class="section">
  <div class="section-title">
    <h2>About Me</h2>
    <p>Educator turned AI developer</p>
    <div class="section-divider"></div>
  </div>

  <div class="about-grid">
    <!-- Bio -->
    <div class="about-bio">
      <p>After 17 years teaching in multilingual classrooms across the US and China, I discovered a new way to build — with AI. In 12 months, I shipped 21 web applications using Claude Code, solving real problems for international students, churches, and communities.</p>
      <p>I bring a rare combination: deep cross-cultural fluency (English, Mandarin, Cantonese), a teacher's instinct for clear UX, and the ability to ship production apps fast with AI-assisted development. I'm looking for roles where I can build tools that matter.</p>

      <div class="skill-tags">
        <span class="skill-tag">⚡ AI-assisted development</span>
        <span class="skill-tag">⚡ Bilingual EN/中文 apps</span>
        <span class="skill-tag">⚡ Rapid prototyping & shipping</span>
        <span class="skill-tag">⚡ UX-driven design</span>
        <span class="skill-tag">⚡ Cross-cultural communication</span>
      </div>
    </div>

    <!-- Education + Languages -->
    <div class="about-sidebar">
      <div class="about-section-label">🎓 <span>Education</span></div>
      <div class="edu-card card">
        <h4>M.S. in Multidisciplinary Studies</h4>
        <p class="edu-school">SUNY College at Buffalo</p>
        <p class="edu-year">2014</p>
      </div>
      <div class="edu-card card">
        <h4>B.A. in English Literature</h4>
        <p class="edu-school">University of California, Irvine</p>
        <p class="edu-year">2000</p>
      </div>

      <div class="about-section-label" style="margin-top: 24px;">🌐 <span>Languages</span></div>
      <div class="lang-row">
        <span class="lang-badge">English</span>
        <span class="lang-badge">Mandarin 普通话</span>
        <span class="lang-badge">Cantonese 粤语</span>
      </div>
    </div>
  </div>

  <!-- Tech Stack -->
  <div class="tech-stack">
    <span class="tech-item">🤖 Claude Code / API</span>
    <span class="tech-item">📝 HTML / CSS / TS</span>
    <span class="tech-item">☁️ Cloudflare Pages</span>
    <span class="tech-item">🗺️ Leaflet / OSM</span>
    <span class="tech-item">🔀 Git / GitHub</span>
  </div>
</section>
```

- [ ] **Step 2: Add About Me CSS to styles.css**

Append to `styles.css`:

```css
/* ── ABOUT ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.about-bio p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.skill-tag {
  background: var(--accent-bg);
  color: var(--accent);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
}

.about-section-label {
  color: var(--text-muted);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.edu-card {
  padding: 20px;
  margin-bottom: 12px;
}

.edu-card h4 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
}

.edu-school {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.edu-year {
  font-size: 12px;
  color: var(--accent);
  font-family: 'Courier New', monospace;
}

.lang-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.lang-badge {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 13px;
  padding: 7px 16px;
  border-radius: 8px;
}

/* Tech Stack */
.tech-stack {
  border-top: 1px solid var(--border);
  padding-top: 28px;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.tech-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 13px;
  padding: 8px 18px;
  border-radius: 8px;
}
```

- [ ] **Step 3: Verify in browser**

Check: About section visible below hero. Two balanced columns. Skill tags green. Education cards visible. Tech stack row at bottom.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add About Me section with bio, education, and tech stack"
```

---

### Task 4: Featured Projects (4 case studies)

**Files:**
- Modify: `index.html` (add section after about)
- Modify: `styles.css` (add project styles)

- [ ] **Step 1: Add Projects HTML to index.html**

Insert after the closing `</section>` of the about section:

```html
<!-- ── PROJECTS ── -->
<section id="projects" class="section">
  <div class="section-title">
    <h2>Projects</h2>
    <p>Selected case studies with measurable outcomes</p>
    <div class="section-divider"></div>
  </div>

  <!-- Case Study 1: Career Ready -->
  <div class="case-study">
    <div class="case-study-image">
      <img src="assets/screenshots/career-ready.png" alt="Career Ready app screenshot">
    </div>
    <div class="case-study-content">
      <div class="case-study-tags">
        <span class="tag">Web App</span>
        <span class="tag">Claude API</span>
      </div>
      <h3>Career Ready</h3>
      <p>8 interactive job prep tools with Claude API integration for college graduates. Resume builder, interview simulator, cover letter generator, and more.</p>
      <div class="case-study-impact">
        <span class="impact-label">Impact:</span>
        <span>8 tools · Claude API · Bilingual EN/中文</span>
      </div>
      <div class="case-study-links">
        <a href="#" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live →</a>
        <a href="#" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub →</a>
      </div>
    </div>
  </div>

  <!-- Case Study 2: CareNavigatorCA (reversed) -->
  <div class="case-study case-study-reverse">
    <div class="case-study-image">
      <img src="assets/screenshots/care-navigator.png" alt="CareNavigatorCA app screenshot">
    </div>
    <div class="case-study-content">
      <div class="case-study-tags">
        <span class="tag">Web App</span>
        <span class="tag">Eligibility Engine</span>
      </div>
      <h3>CareNavigatorCA</h3>
      <p>Intelligent benefits eligibility platform. 5-step quiz matching users with 100+ government programs for individuals with disabilities.</p>
      <div class="case-study-impact">
        <span class="impact-label">Impact:</span>
        <span>100+ programs · 5-step matching · Accessible design</span>
      </div>
      <div class="case-study-links">
        <a href="https://care-navigator.pages.dev" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live →</a>
        <a href="https://github.com/Joshli316/CareNavigatorCA" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub →</a>
      </div>
    </div>
  </div>

  <!-- Case Study 3: QiMa -->
  <div class="case-study">
    <div class="case-study-image">
      <img src="assets/screenshots/qima.png" alt="QiMa app screenshot">
    </div>
    <div class="case-study-content">
      <div class="case-study-tags">
        <span class="tag">Web App</span>
        <span class="tag">Education</span>
      </div>
      <h3>QiMa (起码)</h3>
      <p>Bilingual tutorial taking users from zero coding knowledge to shipping prototypes with Claude Code in 14 days. 45+ command glossary.</p>
      <div class="case-study-impact">
        <span class="impact-label">Impact:</span>
        <span>14-day curriculum · 45+ commands · Bilingual EN/中文</span>
      </div>
      <div class="case-study-links">
        <a href="https://claude-code-launch.pages.dev" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live →</a>
        <a href="https://github.com/Joshli316/claude-code-launch" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub →</a>
      </div>
    </div>
  </div>

  <!-- Case Study 4: LuoJiao (reversed) -->
  <div class="case-study case-study-reverse">
    <div class="case-study-image">
      <img src="assets/screenshots/luojiao.png" alt="LuoJiao app screenshot">
    </div>
    <div class="case-study-content">
      <div class="case-study-tags">
        <span class="tag">Web App</span>
        <span class="tag">Leaflet / Maps</span>
      </div>
      <h3>LuoJiao (落脚)</h3>
      <p>Interactive cultural map for Chinese students in LA. Leaflet + OpenStreetMap with curated locations, categories, and bilingual content.</p>
      <div class="case-study-impact">
        <span class="impact-label">Impact:</span>
        <span>Interactive map · Curated LA locations · Leaflet + OSM</span>
      </div>
      <div class="case-study-links">
        <a href="#" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live →</a>
        <a href="#" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub →</a>
      </div>
    </div>
  </div>
```

Note: Career Ready and LuoJiao links are placeholder `#` — update with real URLs when available.

- [ ] **Step 2: Add case study CSS to styles.css**

Append to `styles.css`:

```css
/* ── CASE STUDIES ── */
.case-study {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 24px;
  min-height: 280px;
  transition: border-color 0.2s;
}

.case-study:hover {
  border-color: #333;
}

.case-study-reverse {
  direction: rtl;
}

.case-study-reverse > * {
  direction: ltr;
}

.case-study-image {
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.case-study-content {
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.case-study-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.case-study-content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.case-study-content p {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 16px;
}

.case-study-impact {
  margin-bottom: 20px;
  font-size: 13px;
}

.impact-label {
  color: var(--accent);
  font-weight: 600;
  margin-right: 4px;
}

.case-study-impact span:last-child {
  color: var(--text-secondary);
}

.case-study-links {
  display: flex;
  gap: 10px;
}

.btn-sm {
  font-size: 12px;
  padding: 7px 16px;
}
```

- [ ] **Step 3: Verify in browser**

Check: 4 case study cards with alternating layout. Tags, descriptions, impact lines visible. Hover border effect works.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add 4 featured project case studies with alternating layout"
```

---

### Task 5: More Projects compact grid

**Files:**
- Modify: `index.html` (add within projects section)
- Modify: `styles.css` (add compact grid styles)

- [ ] **Step 1: Add More Projects HTML to index.html**

Insert after the last case study div, but still inside the `<section id="projects">`:

```html
  <!-- More Projects -->
  <div class="more-projects">
    <div class="more-projects-header">
      <h3>More Projects</h3>
      <p>Additional apps and tools I've shipped</p>
    </div>

    <div class="more-grid">
      <a href="https://github.com/Joshli316/CodeLaunch-Play" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">CodeFu (码功)</span>
          <span class="more-desc">Gamified Claude Code mastery</span>
        </div>
        <span class="more-link">GitHub →</span>
      </a>
      <a href="https://github.com/Joshli316/codequest" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">CodePlay (码玩)</span>
          <span class="more-desc">Gamified learning, 12 game types</span>
        </div>
        <span class="more-link">GitHub →</span>
      </a>
      <a href="https://github.com/Joshli316/AiQi" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">AiQi (AI起)</span>
          <span class="more-desc">Claude Code tutorial for grads</span>
        </div>
        <span class="more-link">GitHub →</span>
      </a>
      <a href="https://agentpath.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">AgentPath (智路)</span>
          <span class="more-desc">12-week AI learning companion</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://prayer-journal.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Prayer Journal</span>
          <span class="more-desc">Daily prayer journal PWA</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://homeready.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Home Ready (归途)</span>
          <span class="more-desc">Return-journey journal</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://missionary-launchpad.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Missionary Launchpad</span>
          <span class="more-desc">30-day setup for new missionaries</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://github.com/Joshli316/rpg" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">RPG (Revival Prayer Group)</span>
          <span class="more-desc">Prayer triad matching app</span>
        </div>
        <span class="more-link">GitHub →</span>
      </a>
      <a href="https://daniel-wei-comic.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">DW Comic (建造者)</span>
          <span class="more-desc">Bilingual Marvel-style comic</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://welcome-hub.yellow-longitudinal.workers.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Welcome Hub</span>
          <span class="more-desc">Community platform for intl students</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://fc-ism-in-a-box.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">ISM In A Box</span>
          <span class="more-desc">Church ministry starter toolkit</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://fc-starter-pack.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Ministry Starter Pack</span>
          <span class="more-desc">12 tools for campus missionaries</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://get-it-done-a5x.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Get It Done</span>
          <span class="more-desc">Daily planner with drag-and-drop</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://pearl-of-great-price-ministries.pages.dev" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Pearl of Great Price</span>
          <span class="more-desc">Ministry site with AI image gallery</span>
        </div>
        <span class="more-link live">Live →</span>
      </a>
      <a href="https://github.com/fc-us/uncover" target="_blank" rel="noopener" class="more-item">
        <div class="more-item-info">
          <span class="more-name">Uncover</span>
          <span class="more-desc">Visual self-discovery conversation tool</span>
        </div>
        <span class="more-link">GitHub →</span>
      </a>
      <a href="#" class="more-item" style="visibility: hidden;">
        <div class="more-item-info"><span class="more-name"></span></div>
      </a>
    </div>
  </div>

</section>
```

Note: 15 projects + 1 hidden placeholder = 16 items = 8 complete rows of 2. Ensures no trailing empty slots.

- [ ] **Step 2: Add compact grid CSS to styles.css**

Append to `styles.css`:

```css
/* ── MORE PROJECTS ── */
.more-projects {
  border-top: 1px solid var(--border);
  padding-top: 40px;
  margin-top: 16px;
}

.more-projects-header {
  text-align: center;
  margin-bottom: 24px;
}

.more-projects-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
}

.more-projects-header p {
  color: var(--text-muted);
  font-size: 13px;
}

.more-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.more-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.2s;
}

.more-item:hover {
  border-color: #333;
}

.more-item-info {
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
}

.more-name {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.more-desc {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.more-link {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

.more-link.live {
  color: var(--accent);
}
```

- [ ] **Step 3: Verify in browser**

Check: Compact grid visible below case studies. 2-column layout. All rows complete (no empty trailing slots). Links are clickable. Live links show green.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add More Projects compact grid with all remaining projects"
```

---

### Task 6: Contact section + Footer

**Files:**
- Modify: `index.html` (add after projects section)
- Modify: `styles.css` (add contact/footer styles)

- [ ] **Step 1: Add Contact and Footer HTML to index.html**

Insert after `</section>` of projects, before `<script src="script.js">`:

```html
<!-- ── CONTACT ── -->
<section id="contact" class="section">
  <div class="section-title">
    <h2>Get In Touch</h2>
    <p>Let's build something together</p>
    <div class="section-divider"></div>
  </div>

  <div class="contact-cards">
    <a href="mailto:zhiminghuang317@gmail.com" class="contact-card card">
      <span class="contact-icon">✉️</span>
      <div>
        <div class="contact-label">Email</div>
        <div class="contact-value">zhiminghuang317@gmail.com</div>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/zhi-huang-013a6170" target="_blank" rel="noopener" class="contact-card card">
      <span class="contact-icon">💼</span>
      <div>
        <div class="contact-label">LinkedIn</div>
        <div class="contact-value">Zhi Huang</div>
      </div>
    </a>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer>
  <div class="footer-inner">
    <span>© 2026 Zhi M. Huang. All rights reserved.</span>
    <span>Built with Claude Code · Deployed on Cloudflare Pages</span>
  </div>
</footer>
```

- [ ] **Step 2: Add Contact and Footer CSS to styles.css**

Append to `styles.css`:

```css
/* ── CONTACT ── */
.contact-cards {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 32px;
  border-radius: var(--radius);
  transition: border-color 0.2s;
}

.contact-card:hover {
  border-color: var(--accent-border);
}

.contact-icon {
  font-size: 22px;
}

.contact-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
}

.contact-value {
  font-size: 15px;
  font-weight: 500;
}

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 28px 40px;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 12px;
}
```

- [ ] **Step 3: Verify in browser**

Check: Contact section centered with two cards. Footer shows copyright and build credit. Email link opens mail client. LinkedIn opens in new tab.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add Contact section and Footer"
```

---

### Task 7: Responsive design (mobile + tablet)

**Files:**
- Modify: `styles.css` (add media queries)

- [ ] **Step 1: Add responsive CSS to styles.css**

Append to `styles.css`:

```css
/* ── RESPONSIVE: TABLET (768px) ── */
@media (max-width: 768px) {
  .hero {
    padding: 100px 24px 60px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-right {
    order: -1;
  }

  .hero-tagline {
    justify-content: center;
  }

  .hero-ctas {
    justify-content: center;
  }

  .hero-badge {
    margin-left: auto;
    margin-right: auto;
  }

  .section {
    padding: 60px 24px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .case-study {
    grid-template-columns: 1fr;
  }

  .case-study-reverse {
    direction: ltr;
  }

  .case-study-image {
    min-height: 200px;
  }

  .more-grid {
    grid-template-columns: 1fr;
  }

  .contact-cards {
    flex-direction: column;
    align-items: center;
  }

  .footer-inner {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}

/* ── RESPONSIVE: PHONE (375px) ── */
@media (max-width: 480px) {
  nav {
    padding: 12px 16px;
  }

  .nav-links {
    gap: 20px;
  }

  .nav-links a {
    font-size: 13px;
  }

  .hero {
    padding: 80px 16px 40px;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-const {
    font-size: 12px;
  }

  .code-block {
    font-size: 11px;
    padding: 14px;
  }

  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }

  .hero-photo {
    width: 200px;
    height: 260px;
  }

  .section {
    padding: 48px 16px;
  }

  .tech-stack {
    gap: 10px;
  }

  .tech-item {
    font-size: 11px;
    padding: 6px 12px;
  }

  .case-study-content {
    padding: 24px;
  }

  .more-desc {
    display: none;
  }

  .contact-card {
    padding: 14px 20px;
    width: 100%;
  }

  footer {
    padding: 20px 16px;
  }
}
```

- [ ] **Step 2: Verify at 3 breakpoints**

Test in browser DevTools responsive mode:
- **375px (phone):** Single column, photo above text, compact spacing
- **768px (tablet):** Single column, readable, cards stacked
- **1024px+ (desktop):** Full two-column layout

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add responsive design for tablet and phone breakpoints"
```

---

### Task 8: Final verification and cleanup

**Files:**
- All files

- [ ] **Step 1: Remove the "Remaining sections" comment from index.html**

Delete the comment `<!-- Remaining sections added in subsequent tasks -->` if it still exists.

- [ ] **Step 2: Full verification checklist**

Open in browser and verify:
- [ ] App loads correctly (no blank page)
- [ ] No console errors
- [ ] Typing animation plays on page load
- [ ] Nav becomes sticky with blur on scroll
- [ ] Smooth scroll works for nav links and "View Projects" button
- [ ] All external links open in new tab
- [ ] Resume PDF link works (if file exists)
- [ ] All project Live/GitHub links point to correct URLs
- [ ] Responsive at 375px — single column, no horizontal scroll
- [ ] Responsive at 768px — tablet layout, readable
- [ ] Responsive at 1024px — full desktop layout
- [ ] Photo displays correctly (if file exists)

- [ ] **Step 3: Commit any final cleanup**

```bash
git add -A
git commit -m "chore: final cleanup and verification"
```

---

### Task 9: Deploy

Only run when user explicitly says "deploy."

- [ ] **Step 1: Deploy to Cloudflare Pages**

```bash
wrangler pages deploy .
```

- [ ] **Step 2: Verify live site loads at the deployed URL**

Open the Cloudflare Pages URL and run through the same verification checklist from Task 8.

- [ ] **Step 3: Commit any deploy config if needed**

```bash
git add -A && git commit -m "chore: deploy config" || echo "nothing to commit"
git push
```
