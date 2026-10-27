// ==== Theme switcher: dark < -> light ====
// Pure JavaScript, no dependencies, no CDN.

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-btn');
  const body = document.body;
  let isLight = false;

  function toggleTheme() {
    isLight = !isLight;
    if (isLight) {
      body.classList.add('light');
      btn.textContent = 'Dark mode';
    } else {
      body.classList.remove('light');
      btn.textContent = 'Light mode';
    }
    // Persist preference for this session
    try {
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    } catch (e) {
      // localStorage may be unavailable in some incognito/private modes — ignore
    }
  }

  // Check for a saved preference
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      body.classList.add('light');
      isLight = true;
      btn.textContent = 'Dark mode';
    }
  } catch (e) {
    // swallow
  }

  btn.addEventListener('click', toggleTheme);
});