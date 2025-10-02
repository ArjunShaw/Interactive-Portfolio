// Mobile menu toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize feather icons
feather.replace();

// NOTE: The complex animation code (AOS, GSAP, ScrollMagic)
// has been removed as it requires external libraries and complex
// JavaScript logic for a vanilla implementation.
