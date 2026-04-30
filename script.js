(() => {
  const prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const CONTACT_TO = "nocodedx.ai@gmail.com";

  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function initThemeToggle() {
    const body = document.body;
    const btn = document.querySelector("[data-theme-toggle]");
    if (!body || !btn) return;

    const saved = localStorage.getItem("theme");
    const initial = saved || body.dataset.theme || "light";
    applyTheme(initial);

    btn.addEventListener("click", () => {
      const current = body.dataset.theme || "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }

  function applyTheme(theme) {
    const body = document.body;
    if (!body) return;
    body.dataset.theme = theme;
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function initSmoothScroll() {
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const links = document.querySelectorAll('a[data-scroll][href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const rect = target.getBoundingClientRect();
        const y = window.scrollY + rect.top - headerHeight - 12;

        window.scrollTo({
          top: Math.max(0, y),
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });

        // 모바일 메뉴가 열려 있으면 닫기
        const menu = document.getElementById("mobileMenu");
        const toggle = document.querySelector("[data-mobile-nav-toggle]");
        if (menu && toggle && !menu.hidden) {
          menu.hidden = true;
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });
  }

  function initRevealOnScroll() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealEls.forEach((el) => io.observe(el));

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }

  function initMobileNav() {
    const toggle = document.querySelector("[data-mobile-nav-toggle]");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    function setOpen(nextOpen) {
      menu.hidden = !nextOpen;
      toggle.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      document.body.style.overflow = nextOpen ? "hidden" : "";
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    // ESC로 닫기
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (!isOpen) return;
      setOpen(false);
    });
  }

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      document.body.removeChild(ta);
      return false;
    }
  }

  function initContactEmailActions() {
    const copyBtn = document.querySelector("[data-copy-email]");
    const emailEl = document.getElementById("contactEmail");
    if (!copyBtn || !emailEl) return;

    copyBtn.addEventListener("click", async () => {
      const email = (emailEl.textContent || "").trim();
      if (!email) return;

      const ok = await copyText(email);
      const original = copyBtn.dataset.originalText || copyBtn.textContent;
      copyBtn.textContent = ok ? "복사 완료" : "복사 실패";
      setTimeout(() => {
        copyBtn.textContent = original;
      }, 1200);
    });
  }

  function initContactFormMailto() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const situation = form.elements.situation?.value || "";
      const name = form.elements.name?.value || "";
      const fromEmail = form.elements.email?.value || "";
      const message = form.elements.message?.value || "";

      const subject = "NoCodeDXConsulting 문의";

      const bodyLines = [
        `이름: ${name || "-"}`,
        `이메일: ${fromEmail || "-"}`,
        "",
        "문의 사항:",
        message || "-",
        "",
        `현재 상황(한 줄): ${situation || "-"}`,
      ];
      const body = bodyLines.join("\n");

      const mailto =
        "mailto:" +
        CONTACT_TO +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  function init() {
    setYear();
    initSmoothScroll();
    initRevealOnScroll();
    initMobileNav();
    initThemeToggle();
    initContactEmailActions();
    initContactFormMailto();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

