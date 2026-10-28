(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  var navLinks = nav ? nav.querySelectorAll("a[href^='#']") : [];
  var yearEl = document.getElementById("copyright-year");
  var sections = document.querySelectorAll("main section[id]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setMenu(open) {
    if (!toggle || !nav) {
      return;
    }
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });

  document.addEventListener("click", function (event) {
    if (!nav || !toggle) {
      return;
    }
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      setMenu(false);
    }
  });

  function headerOffset() {
    return header ? header.offsetHeight : 0;
  }

  function scrollToHash(hash) {
    var target = document.querySelector(hash);
    if (!target) {
      return;
    }
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset() - 8;
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: reduceMotion ? "auto" : "smooth"
    });
  }

  document.querySelectorAll("a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }
      if (!document.querySelector(hash)) {
        return;
      }
      event.preventDefault();
      setMenu(false);
      scrollToHash(hash);
      if (history.replaceState) {
        history.replaceState(null, "", hash);
      }
    });
  });

  function updateActiveNav() {
    var current = "";
    var offset = headerOffset() + 24;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top - offset <= 0) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      link.classList.toggle("active", href === "#" + current);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
})();
