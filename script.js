// ====== Mobile Menu Toggle ======
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ====== Smooth Scroll for Internal Links ======
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ====== Back to Top Button (optional functionality) ======
const topBtn = document.querySelector(".back-to-top");

if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
