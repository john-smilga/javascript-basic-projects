const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("button");
const color = document.querySelector(".color");

window.onload = () => {
  document.body.style.backgroundColor = color.textContent;
};

const getRandomHex = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

btn.addEventListener("click", getRandomHex);

//highlight nav link for current page
const navLink = document.querySelectorAll("nav a");
const activePage = window.location.pathname;
navLink.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
