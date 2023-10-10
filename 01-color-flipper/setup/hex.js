const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const navLink = document.querySelectorAll("nav a");
const activePage = window.location.pathname;

navLink.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
