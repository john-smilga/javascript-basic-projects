const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// const body = document.getElementsByTagName("body");
const body = document.querySelector("body");

btn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  console.log(randomNumber);

  body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
