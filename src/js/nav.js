// Toggle menu mobile (hamburger) di navbar
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    iconMenu.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  });

  // Tutup menu otomatis saat salah satu link diklik
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      iconMenu.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });
}
