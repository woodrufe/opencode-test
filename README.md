# opencode-test

## WSL File Finder

A one-page helper for Windows users working with a Linux subsystem (WSL) to find their distro files.

### Quick local run

1. Save the three files (`index.html`, `style.css`, `script.js`) in the same folder.
2. Open a terminal at that folder.
3. Run one of the following to serve locally:
   - Python: `python -m http.server 8000`
   - Node (if `npx serve` available): `npx serve`
4. Open http://localhost:8000 (or the port shown) in your browser.

No build, no install, no dependencies. Just double‑click or drag the `index.html`
into a browser works too, but local serve avoids `file://` security limits on
certain features.

### Files

- `index.html` – semantic markup, two sections, theme switcher
- `style.css` – dark theme via CSS variables, responsive grid, focus-visible
- `script.js` – theme toggle with `localStorage` persistence
- `.gitignore` – excludes `.env`, `node_modules/`, `.DS_Store`
- `AGENTS.md` – project constraints and interaction notes

### Interaction

The "Dark mode / Light mode" button toggles a `light` class on `<body>`,
swapping CSS variables for light‑theme contrast. Button text changes
accordingly. Preference is saved to `localStorage` for the session. Focus‑visible
outlines appear when navigating with Tab, using the accent color. Layout
stacks single‑column below 600 px and switches to two‑column above.

### Constraints (from AGENTS.md)

No build steps, no npm install, no CDN dependencies. Only three files plus
`.gitignore` and `AGENTS.md`. Work stays inside the project folder; serve only
on localhost.