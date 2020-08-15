/* 
   rgb(red,green,blue,alpha)
    rgb(0 - 255, 0 -255,0 - 255,0 - 1)

*/

// get values for red, green and blue (0-255)
function getValues() {
  let value = [];
  for (let i = 0; i <= 255; i++) {
    value.push(i);
  }
  return value;
}

// get value for alpha
function getAlphaValues() {
  return Math.random().toFixed(2);
}

// get all values in one array of color
const rgb = [getValues()];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgbColor =
    "rgba(" +
    rgb[0][getRandomNumber()] +
    "," +
    rgb[0][getRandomNumber()] +
    "," +
    rgb[0][getRandomNumber()] +
    "," +
    getAlphaValues() +
    ")";
});

function getRandomNumber() {
  return Math.floor(Math.random() * rgb[0].length);
}
