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

const currentPageFile = window.location.pathname.split("/").pop() || "";
const isGeneratedCoursePage =
  /^course-.*\.html$/.test(currentPageFile) &&
  currentPageFile !== "course-application.html" &&
  currentPageFile !== "course-strategy.html";

if (isGeneratedCoursePage) {
  document.querySelectorAll('a[href="contact.html"]').forEach((link) => {
    if (link.textContent.trim().toLowerCase().includes("apply")) {
      link.href = `course-application.html?course=${encodeURIComponent(currentPageFile)}`;
    }
  });
}

if (currentPageFile === "programmes.html") {
  document.querySelectorAll('a[href="contact.html"]').forEach((link) => {
    const label = link.textContent.trim().toLowerCase();
    if (label.includes("apply") || label.includes("register interest")) {
      link.href = "course-application.html";
    }
  });
}

document.querySelectorAll(".course-catalogue-card").forEach((card) => {
  if (card.querySelector('a[href^="course-application.html"]')) return;

  const viewCourseLink = card.querySelector('a.btn[href^="course-"][href$=".html"]');
  if (!viewCourseLink) return;

  const courseSlug = viewCourseLink.getAttribute("href");
  const applyLink = document.createElement("a");
  applyLink.className = "btn btn-outline";
  applyLink.href = `course-application.html?course=${encodeURIComponent(courseSlug)}`;
  applyLink.innerHTML = '<i data-lucide="send"></i> Apply';

  const buttonStack = viewCourseLink.closest(".button-stack");
  if (buttonStack) {
    buttonStack.appendChild(applyLink);
  } else {
    const wrapper = document.createElement("div");
    wrapper.className = "button-stack";
    viewCourseLink.replaceWith(wrapper);
    wrapper.appendChild(viewCourseLink);
    wrapper.appendChild(applyLink);
  }
});

const courseApplicationSelect = document.querySelector("[data-course-application-select]");

if (courseApplicationSelect) {
  const selectedCourseFields = {
    title: document.querySelector("[data-selected-course-title]"),
    category: document.querySelector("[data-selected-course-category]"),
    type: document.querySelector("[data-selected-course-type]"),
    delivery: document.querySelector("[data-selected-course-delivery]"),
    duration: document.querySelector("[data-selected-course-duration]"),
    deadline: document.querySelector("[data-selected-course-deadline]"),
    applicationFee: document.querySelector("[data-selected-application-fee]"),
    memberTotal: document.querySelector("[data-selected-member-total]"),
    nonMemberTotal: document.querySelector("[data-selected-non-member-total]")
  };

  const updateCourseApplicationSummary = () => {
    const option = courseApplicationSelect.selectedOptions[0];
    if (!option || !option.value) return;

    selectedCourseFields.title.textContent = option.dataset.title || option.textContent;
    selectedCourseFields.category.textContent = option.dataset.category || "Course category";
    selectedCourseFields.type.textContent = option.dataset.type || "To be advised";
    selectedCourseFields.delivery.textContent = option.dataset.delivery || "To be advised";
    selectedCourseFields.duration.textContent = option.dataset.duration || "To be advised";
    selectedCourseFields.deadline.textContent = option.dataset.deadline || "To be advised";
    selectedCourseFields.applicationFee.textContent = option.dataset.applicationFee || "To be advised";
    selectedCourseFields.memberTotal.textContent = option.dataset.memberTotal || "Fee on request";
    selectedCourseFields.nonMemberTotal.textContent = option.dataset.nonMemberTotal || "Fee on request";
  };

  const selectedCourse = new URLSearchParams(window.location.search).get("course");
  if (selectedCourse) {
    const matchingOption = courseApplicationSelect.querySelector(`option[value="${CSS.escape(selectedCourse)}"]`);
    if (matchingOption) courseApplicationSelect.value = selectedCourse;
  }

  courseApplicationSelect.addEventListener("change", updateCourseApplicationSummary);
  updateCourseApplicationSummary();
}

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
