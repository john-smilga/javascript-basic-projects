// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const mediaQuery = window.matchMedia("min-width: 800px");

function toggleMenu() {
  toggleBtn.classList.toggle("nav-toggle-rotate");
  toggleBtn.classList.toggle("nav-toggle-color");
  links.classList.toggle("show-links");
}

function resetToggleBtn() {
  if (window.innerWidth >= 800) {
    links.classList.remove("show-links");
    toggleBtn.classList.remove("nav-toggle-rotate");
    toggleBtn.classList.remove("nav-toggle-color");
    
  }
}

toggleBtn.addEventListener("click", toggleMenu);
window.addEventListener("resize", resetToggleBtn);
