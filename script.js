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

  // Respect reduced motion preference — show all code instantly
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    el.innerHTML = codeLines.map(line => colorize(line.text, line)).join('\n');
    return;
  }

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

// ── STICKY NAV + ACTIVE SECTION ──
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const navLinks = nav.querySelectorAll('.nav-links a');
  const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 50);

    const navHeight = nav.offsetHeight;
    let current = '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= navHeight + 40) {
        current = '#' + section.id;
      }
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === current);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// ── SMOOTH SCROLL ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const navHeight = document.getElementById('nav')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: motionOk ? 'smooth' : 'auto' });
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
