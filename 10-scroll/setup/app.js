// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    /* navToggle.firstElementChild.className = "fas fa-times"; */
  } else {
    linksContainer.style.height = 0;
    /* navToggle.firstElementChild.className = "fas fa-bars"; */
  }

  /* linksContainer.classList.toggle("show-links"); */
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ********** fixed navbar ************
document.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // fixed nav reveal
  scrollHeight > navHeight
    ? navbar.classList.add("fixed-nav")
    : navbar.classList.remove("fixed-nav");
  // Scroll button reveal
  scrollHeight > 500
    ? topLink.classList.add("show-link")
    : topLink.classList.remove("show-link");
});
// tee väiksemateks functioniteks

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calulcate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    !fixedNav ? (position -= navHeight) : false;
    navHeight > 82 ? (position += containerHeight) : false;

    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});
