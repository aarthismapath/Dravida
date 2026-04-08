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

  // ── Logo Sparkle Animation ──
  function initSparkle() {
    var canvas = document.querySelector(".sparkle-canvas");
    if (!canvas) return;

    var prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    var ctx = canvas.getContext("2d");
    var particles = [];
    var maxParticles = 18;
    var dpr = window.devicePixelRatio || 1;

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * 1.8 * dpr;
      canvas.height = rect.height * 1.8 * dpr;
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    function createParticle() {
      var cx = canvas.width / dpr / 2;
      var cy = canvas.height / dpr / 2;
      var angle = Math.random() * Math.PI * 2;
      var radiusX = (canvas.width / dpr / 2) * (0.35 + Math.random() * 0.55);
      var radiusY = (canvas.height / dpr / 2) * (0.3 + Math.random() * 0.5);

      return {
        x: cx + Math.cos(angle) * radiusX,
        y: cy + Math.sin(angle) * radiusY,
        size: Math.random() * 2.5 + 0.8,
        opacity: 0,
        maxOpacity: Math.random() * 0.7 + 0.3,
        fadeIn: true,
        speed: Math.random() * 0.008 + 0.004,
        life: 0,
        maxLife: Math.random() * 180 + 80,
        twinkleSpeed: Math.random() * 0.06 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        isStar: Math.random() > 0.5,
      };
    }

    function drawStar(x, y, size, opacity) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#C27832";
      ctx.shadowColor = "#C27832";
      ctx.shadowBlur = size * 3;

      // 4-point star
      ctx.beginPath();
      for (var i = 0; i < 4; i++) {
        var a = (i * Math.PI) / 2;
        ctx.moveTo(x, y);
        ctx.lineTo(
          x + Math.cos(a - 0.15) * size * 0.4,
          y + Math.sin(a - 0.15) * size * 0.4
        );
        ctx.lineTo(x + Math.cos(a) * size, y + Math.sin(a) * size);
        ctx.lineTo(
          x + Math.cos(a + 0.15) * size * 0.4,
          y + Math.sin(a + 0.15) * size * 0.4
        );
      }
      ctx.fill();
      ctx.restore();
    }

    function drawDot(x, y, size, opacity) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#F7F3EE";
      ctx.shadowColor = "#F7F3EE";
      ctx.shadowBlur = size * 4;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Spawn particles
      if (particles.length < maxParticles && Math.random() > 0.88) {
        particles.push(createParticle());
      }

      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.life++;

        // Fade in/out
        if (p.life < 30) {
          p.opacity = (p.life / 30) * p.maxOpacity;
        } else if (p.life > p.maxLife - 30) {
          p.opacity = ((p.maxLife - p.life) / 30) * p.maxOpacity;
        }

        // Twinkle
        var twinkle =
          Math.sin(p.life * p.twinkleSpeed + p.twinklePhase) * 0.3 + 0.7;
        var finalOpacity = p.opacity * twinkle;

        if (p.isStar) {
          drawStar(p.x, p.y, p.size, finalOpacity);
        } else {
          drawDot(p.x, p.y, p.size, finalOpacity);
        }

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    // Delay start slightly so it feels organic
    setTimeout(function () {
      animate();
    }, 600);
  }

  // ── Mobile Reserve Bar — show after scrolling past hero ──
  function initMobileReserve() {
    var hero = document.getElementById("hero");
    var reserveBar = document.querySelector(".mobile-reserve");

    if (!hero || !reserveBar) return;

    // Show bar as soon as user scrolls even slightly
    var shown = false;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10 && !shown) {
        shown = true;
        reserveBar.classList.add("visible");
      } else if (window.scrollY <= 10 && shown) {
        shown = false;
        reserveBar.classList.remove("visible");
      }
    }, { passive: true });
  }

  // ── Init All ──
  // ── Mobile Video Autoplay ──
  function initMobileVideo() {
    var video = document.querySelector(".hero-video--mobile");
    if (!video) return;
    if (window.innerWidth > 640) return;

    // Force play — some mobile browsers need a programmatic call
    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        // Autoplay blocked — try again on first user interaction
        document.addEventListener("touchstart", function onTouch() {
          video.play();
          document.removeEventListener("touchstart", onTouch);
        }, { once: true });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHero();
    initScrollReveal();
    initNavbar();
    initMobileNav();
    initImageBand();
    initSparkle();
    initMobileReserve();
    initMobileVideo();
  });
})();
