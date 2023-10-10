const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("button");
const color = document.querySelector(".color");
const navLink = document.querySelectorAll("nav a");
const activePage = window.location.pathname;

navLink.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

// document bg color matches color on page load
window.onload = () => {
  document.body.style.backgroundColor = color.textContent;
};

btn.addEventListener("click", () => {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});

const getRandomNumber = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
