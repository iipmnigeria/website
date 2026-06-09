const navToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) link.classList.add("active");
  });
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll("[data-programme-card]").forEach((card) => {
      const category = card.dataset.programmeCard;
      card.style.display = value === "all" || category === value ? "" : "none";
    });
  });
});

document.querySelectorAll("[data-course-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.courseFilter;

    document.querySelectorAll("[data-course-filter]").forEach((item) => {
      const isActive = item.dataset.courseFilter === value;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-course-card]").forEach((card) => {
      card.hidden = value !== "all" && card.dataset.courseCard !== value;
    });
  });
});

const verifyForm = document.querySelector("[data-verify-form]");
const verifyResult = document.querySelector("[data-verify-result]");

if (verifyForm && verifyResult) {
  verifyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new FormData(verifyForm).get("verification_id");
    verifyResult.classList.add("show");
    verifyResult.querySelector("[data-result-id]").textContent = query || "IIPM-2026-0000";
  });
}

const loginForm = document.querySelector("[data-login-form]");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const accessType = new FormData(loginForm).get("portal_type");
    window.location.href = accessType === "learner" ? "learner-portal.html" : "member-portal.html";
  });
}

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 2
    }
  });
}

