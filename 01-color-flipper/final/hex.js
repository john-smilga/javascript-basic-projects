const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function computeNewColor() {
  let resultString = "#";
  for (let i = 0; i < 6; i++) {
    resultString += getRandomValueFromArray(hex);
  }
  return resultString;
}

const colorSpan = document.querySelector("#color-span");
const main = document.querySelector("main");

document.querySelector("#btn").addEventListener("click", () => {
  const newColor = computeNewColor();
  colorSpan.innerHTML = newColor;
  document.body.style.backgroundColor = newColor;
});
