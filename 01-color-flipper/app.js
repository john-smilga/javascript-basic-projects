const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  const randomIndex = randomNumber();
  span.textContent = colors[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
});

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
