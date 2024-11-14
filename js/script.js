// Language Switcher Script
document.addEventListener("DOMContentLoaded", () => {
  const languageDropdown = document.getElementById("languageDropdown");
  const languageItems = document.querySelectorAll(".dropdown-item");

  languageItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      languageDropdown.textContent = item.textContent;
    });
  });
});

// Hamburger Menu Script
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", () => {
    // Toggle the 'show' class on the navbarNav to show/hide it
    navbarNav.classList.toggle("show");

    // Toggle aria-expanded attribute to reflect the open/close state
    const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    navbarToggler.setAttribute("aria-expanded", !isExpanded);
  });
});
