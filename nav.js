function injectNav() {
  const nav = document.createElement('nav');
  nav.className = 'top-nav';
  nav.innerHTML = `
    <a class="nav-logo" href="/index.html">Solo Central | Static</a>
    <div class="nav-icons">
      <a class="nav-icon" href="home.html" data-tip="Home">
        <svg viewBox="0 0 24 24">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"/>
        </svg>
      </a>
      <a class="nav-icon" href="g.html" data-tip="Games">
        <svg viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="5"/>
          <path d="M7 12h4M9 10v4"/>
          <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none"/>
          <circle cx="18.5" cy="13" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <a class="nav-icon" href="a.html" data-tip="Apps">
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      </a>
    </div>
  `;
  document.body.prepend(nav);

  const tooltip = document.getElementById('nav-tooltip');
  if (tooltip) {
    let hideTimer;
    nav.querySelectorAll('.nav-icon[data-tip]').forEach(el => {
      el.addEventListener('mouseenter', () => { clearTimeout(hideTimer); tooltip.textContent = el.dataset.tip; tooltip.style.opacity = '1'; });
      el.addEventListener('mouseleave', () => { hideTimer = setTimeout(() => tooltip.style.opacity = '0', 80); });
    });
    document.addEventListener('mousemove', e => { tooltip.style.left = e.clientX+'px'; tooltip.style.top = e.clientY+'px'; });
  }

  return nav;
}
