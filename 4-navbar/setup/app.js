// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
//icon item
const awesome = document.getElementById("awesome");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
  awesome.className === "fas fa-bars"
    ? (awesome.className = "fas fa-times")
    : (awesome.className = "fas fa-bars");
});

// outside click
/* window.addEventListener("click", (e) => {
  e.target.classList !== "links"
    ? links.classList.remove("show-links")
    : false; /* == links ? links.classList.remove("show-links") : false; */

/* navToggle.addEventListener("click", () => {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
    navToggle.innerHTML = <i class="fas fa-bars"></i>;
  } else {
    links.classList.add("show-links");
    navToggle.innerHTML = <i class="fas fa-times"></i>;
  }
}); */
