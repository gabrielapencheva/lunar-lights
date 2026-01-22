const menu = document.getElementById("mobileMenu");
const burger = document.querySelector(".nav__burger");
const closeBtn = document.querySelector(".menu__close");
const backdrop = document.querySelector(".menu__backdrop");

// Safety checks (prevents errors if something is missing)
if (menu && burger && closeBtn && backdrop) {
  function openMenu() {
    menu.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  }

  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  // IMPORTANT: make links work + close menu after click
  document.querySelectorAll(".menu__links a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
