// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {
  if (!links.classList.contains("show-links")) {
    links.classList.add("show-links");
  } else {
    links.classList.remove("show-links");
  }
});
