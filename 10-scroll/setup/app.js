// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

function toggleLinks() {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  containerHeight === 0
    ? (linksContainer.style.height = `${linksHeight}px`)
    : (linksContainer.style.height = 0);
}
navToggle.addEventListener("click", toggleLinks);

// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

function fixedNav() {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  scrollHeight > navHeight
    ? nav.classList.add("fixed-nav") || topLink.classList.add("show-link")
    : nav.classList.remove("fixed-nav") ||
      topLink.classList.remove("show-link");
}
window.addEventListener("scroll", fixedNav);

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link ");

const smoothScroll = (e) => {
  // prevent the default scroll setting
  e.preventDefault();
  //navigate to specific spot
  const targetID = e.currentTarget.getAttribute("href").slice(1);
  const targetElement = document.getElementById(targetID);

  //calculate heights
  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  fixedNav = navbar.classList.contains("fixed-nav");

  let position = targetElement.offsetTop - navHeight;
  if (!fixedNav) position = position - navHeight;
  if (navHeight > 82) position = position + containerHeight;

  window.scrollTo({ left: 0, top: position, behavior: "smooth" });
  linksContainer.style.height = 0;
};
scrollLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});
