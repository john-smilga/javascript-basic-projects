const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  //click button and create a random hex number.
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[hexRandom()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function hexRandom() {
  return Math.floor(Math.random() * hex.length);
}

console.log(hexRandom);
