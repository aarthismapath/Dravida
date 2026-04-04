/* ============================================
   Dravida NYC — Premium Interactions
   Scroll reveals, nav state, parallax, smooth UX
   ============================================ */

(function () {
  "use strict";

  // ── Scroll Reveal (IntersectionObserver) ──
  function initScrollReveal() {
    var prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
            setTimeout(function () {
              el.classList.add("visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── Hero Ken Burns trigger ──
  function initHero() {
    var hero = document.querySelector(".hero");
    if (hero) {
      // Small delay so the CSS transition plays visibly
      setTimeout(function () {
        hero.classList.add("loaded");
      }, 100);
    }
  }

  // ── Navbar — scroll state & active section ──
  function initNavbar() {
    var navbar = document.getElementById("navbar");
    var sections = document.querySelectorAll("main section[id]");
    var navLinks = document.querySelectorAll(".nav-link[href^='#']");

    if (!navbar) return;

    // Background on scroll
    function updateNavbar() {
      if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();

    // Active section highlighting
    if (sections.length > 0 && navLinks.length > 0) {
      var sectionObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var id = entry.target.getAttribute("id");
              navLinks.forEach(function (link) {
                link.classList.toggle(
                  "active",
                  link.getAttribute("href") === "#" + id
                );
              });
            }
          });
        },
        {
          rootMargin: "-30% 0px -70% 0px",
        }
      );

      sections.forEach(function (section) {
        sectionObserver.observe(section);
      });
    }
  }

  // ── Mobile Nav Toggle ──
  function initMobileNav() {
    var navToggle = document.querySelector(".nav-toggle");
    var navMenu = document.querySelector(".nav-menu");
    var navbar = document.getElementById("navbar");

    if (!navToggle || !navMenu || !navbar) return;

    function openMenu() {
      navMenu.classList.add("open");
      navToggle.classList.add("open");
      navbar.classList.add("menu-open");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navbar.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    navToggle.addEventListener("click", function () {
      if (navMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navMenu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  // ── Image Band Scroll Animation ──
  function initImageBand() {
    var track = document.querySelector(".image-band-track");
    if (!track) return;

    var prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Gentle horizontal scroll linked to page scroll
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            var rect = track.parentElement.getBoundingClientRect();
            var viewportHeight = window.innerHeight;
            // Only animate when in view
            if (rect.top < viewportHeight && rect.bottom > 0) {
              var progress =
                (viewportHeight - rect.top) / (viewportHeight + rect.height);
              var maxShift = track.scrollWidth - track.parentElement.clientWidth;
              var shift = Math.min(progress * maxShift * 0.5, maxShift);
              track.style.transform = "translateX(-" + shift + "px)";
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ── Init All ──
  document.addEventListener("DOMContentLoaded", function () {
    initHero();
    initScrollReveal();
    initNavbar();
    initMobileNav();
    initImageBand();
  });
})();
