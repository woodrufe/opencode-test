# WSL File Finder

A one-page helping Windows users locate Linux subsystem (WSL) files.

**Constraints (AGENTS.md)**
- No build steps, no npm install, no CDN dependencies.
- Only three files: index.html, style.css, script.js.
- Semantic HTML, readable CSS, small focused script.
- Works at narrow and wide browser widths.
- Keyboard accessible (Tab order, focus-visible outlines).
- Dark theme with light-mode toggle; respects prefers-reduced-motion.
- All work stays inside the project folder; serve only on localhost.
- .gitignore excludes .env, node_modules/, .DS_Store.

**Interaction**
- The "Dark mode / Light mode" button toggles a `light` class on `<body>`,
  swapping CSS variables for a light-theme contrast.
  - Button text changes accordingly.
  - Preference is saved to `localStorage` so it persists across visits
    (best‑effort; falls back silently if unavailable).
- Focus-visible outlines appear when pressing Tab, using the accent color.
- Layout stacks single‑column below 600px, switches to two-column above.

**Files**
- index.html — page skeleton, two content sections, theme button, footer.
- style.css — CSS variables, responsive grid, focus-visible, reduced-motion.
- script.js — theme toggle with localStorage persistence.
- .gitignore — excludes .env, node_modules/, .DS_Store.
- README.md — these run instructions.