(() => {
  const container = document.getElementById('swup');
  if (!container) {
    return;
  }

  const navRootSelector = '.navbar-nav.navbar-right';
  const navLinkSelector = '.navbar-nav.navbar-right a, .navbar-brand, .navbar-social a, .navbar-location-home, .avatar-home-link';

  const normalizePath = (url) => {
    const parsed = new URL(url, window.location.origin);
    const path = parsed.pathname.replace(/\/$/, '');
    return path.length ? path : '/';
  };

  const indexNavLinks = () => {
    const topItems = Array.from(document.querySelectorAll(`${navRootSelector} > li`));
    topItems.forEach((li, idx) => {
      li.querySelectorAll('a').forEach((a) => {
        a.dataset.navIndex = String(idx);
      });
    });
    const brand = document.querySelector('.navbar-brand');
    if (brand) {
      brand.dataset.navIndex = brand.dataset.navIndex || '-1';
    }
    const homeBadge = document.querySelector('.navbar-location-home');
    if (homeBadge) {
      homeBadge.dataset.navIndex = homeBadge.dataset.navIndex || '-1';
    }
    const avatarHomeLinks = Array.from(document.querySelectorAll('.avatar-home-link'));
    avatarHomeLinks.forEach((a) => {
      a.dataset.navIndex = a.dataset.navIndex || '-1';
    });
  };

  const getNavIndexForUrl = (url) => {
    const target = normalizePath(url);
    const links = Array.from(document.querySelectorAll(navLinkSelector));
    for (const link of links) {
      if (normalizePath(link.href) === target) {
        const idx = parseInt(link.dataset.navIndex || '0', 10);
        return Number.isNaN(idx) ? 0 : idx;
      }
    }
    return 0;
  };

  const shouldHandleClick = (event, link) => {
    if (event.defaultPrevented) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (link.target && link.target !== '_self') return false;
    const url = new URL(link.href, window.location.origin);
    if (url.origin !== window.location.origin) return false;
    if (url.pathname === window.location.pathname && url.hash) return false;
    return true;
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let currentIndex = getNavIndexForUrl(window.location.href);
  let isTransitioning = false;

  const setDirectionClass = (targetIndex) => {
    document.body.classList.remove('nav-left', 'nav-right');
    if (targetIndex > currentIndex) {
      document.body.classList.add('nav-right');
    } else if (targetIndex < currentIndex) {
      document.body.classList.add('nav-left');
    }
  };

  const runPostReplaceHooks = () => {
    if (window.main && typeof window.main.syncPageState === 'function') {
      window.main.syncPageState();
    }
    if (window.main && typeof window.main.initImgs === 'function') {
      window.main.initImgs();
    }
    if (window.MathJax && window.MathJax.Hub && window.MathJax.Hub.Queue) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, container]);
    }
  };

  const transitionTo = async (url, targetIndex, pushState) => {
    if (isTransitioning) return;
    isTransitioning = true;

    if (window.main && typeof window.main.syncPageState === 'function') {
      const homeLink = document.querySelector('.navbar-brand');
      const homePath = normalizePath(homeLink ? homeLink.href : '/');
      const targetPath = normalizePath(url);
      if (targetPath !== homePath) {
        window.main.syncPageState(url);
      }
    }

    setDirectionClass(targetIndex);
    document.body.classList.add('is-transitioning');
    container.classList.add('is-leaving');

    await wait(220);

    try {
      const response = await fetch(url, { headers: { 'X-Requested-With': 'pjax' } });
      if (!response.ok) {
        window.location.href = url;
        return;
      }

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const newContainer = doc.getElementById('swup');
      if (!newContainer) {
        window.location.href = url;
        return;
      }

      const newTitle = doc.querySelector('title');
      if (newTitle) {
        document.title = newTitle.textContent;
      }

      container.innerHTML = newContainer.innerHTML;
      if (pushState) {
        window.history.pushState({}, '', url);
      }

      currentIndex = getNavIndexForUrl(url);
      window.scrollTo(0, 0);
      indexNavLinks();

      container.classList.remove('is-leaving');
      container.classList.add('is-entering');
      requestAnimationFrame(() => {
        container.classList.add('is-entering-active');
      });

      await wait(320);
      container.classList.remove('is-entering', 'is-entering-active');
      document.body.classList.remove('is-transitioning', 'nav-left', 'nav-right');

      runPostReplaceHooks();
    } catch (err) {
      window.location.href = url;
    } finally {
      isTransitioning = false;
    }
  };

  indexNavLinks();

  document.addEventListener('click', (event) => {
    const link = event.target.closest(navLinkSelector);
    if (!link) return;
    if (!shouldHandleClick(event, link)) return;
    event.preventDefault();

    const targetIndex = parseInt(link.dataset.navIndex || String(currentIndex), 10);
    const resolvedIndex = Number.isNaN(targetIndex) ? currentIndex : targetIndex;
    transitionTo(link.href, resolvedIndex, true);
  });

  window.addEventListener('popstate', () => {
    const url = window.location.href;
    const targetIndex = getNavIndexForUrl(url);
    transitionTo(url, targetIndex, false);
  });
})();
