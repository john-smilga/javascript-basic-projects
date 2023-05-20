// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.getElementById("nav-toggle");
navToggle.style.transform = 'rotate(0deg)';

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }

  if (navToggle.style.transform == 'rotate(0deg)') {
    navToggle.style.transform = 'rotate(90deg)';
  } else if (navToggle.style.transform == 'rotate(90deg)') {
    navToggle.style.transform = 'rotate(0deg)';
  }

  links.classList.toggle("show-links");
});
