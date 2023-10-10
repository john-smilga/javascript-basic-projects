const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("button");
const color = document.querySelector(".color");
const navLink = document.querySelectorAll("nav a");

// document bg color matches color on page load
window.onload = () => {
  document.body.style.backgroundColor = color.textContent;
};

const getRandomNumber = () => {
  const randomNumber = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
};

btn.addEventListener("click", getRandomNumber);

// highlight nav-link for current page
const activePage = window.location.pathname;
navLink.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
