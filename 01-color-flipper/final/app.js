const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function getRandomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const colorSpan = document.querySelector(".color");
const main = document.querySelector("main");

document.querySelector("#btn").addEventListener("click", () => {
  const newColor = getRandomValueFromArray(colors);
  colorSpan.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});
