// ===============================
//  MOBILE NAV MENU
// ===============================
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
  mainNav.classList.toggle("open");
});

// ===============================
//  SMOOTH SCROLL
// ===============================
const links = document.querySelectorAll("a[href^='#']");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", false);
    }
  });
});

// ===============================
//  FORM VALIDATION (Hero Form)
// ===============================
const leadForm = document.getElementById("lead-form");
const formStatus = document.getElementById("form-status");

leadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = leadForm.name.value.trim();
  const email = leadForm.email.value.trim();
  const message = leadForm.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "#ff2bf1";
    return;
  }

  formStatus.textContent = "Sending...";
  formStatus.style.color = "var(--neon)";

  setTimeout(() => {
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "var(--neon)";
    leadForm.reset();
  }, 1200);
});

// ===============================
//  CONTACT FORM VALIDATION
// ===============================
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const project = contactForm.project.value.trim();

  if (!name || !email || !project) {
    contactStatus.textContent = "All fields are required.";
    contactStatus.style.color = "#ff2bf1";
    return;
  }

  contactStatus.textContent = "Sending...";
  contactStatus.style.color = "var(--neon)";

  setTimeout(() => {
    contactStatus.textContent = "Your request was sent! We'll reply soon.";
    contactStatus.style.color = "var(--neon)";
    contactForm.reset();
  }, 1500);
});

// ===============================
//  AUTO YEAR
// ===============================
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
