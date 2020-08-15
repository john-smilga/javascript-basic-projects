/* 
    hsl(hue,saturation,light,alpha)
    hsl(0 - 360, 0 -100%,0 - 100%,0 - 1)

*/

// get value for saturation and light (0-100)
function getValues() {
  let value = [];
  for (let i = 0; i <= 100; i++) {
    value.push(i);
  }
  return value;
}

//get values for hue (0 - 360)
function getHueValues() {
  let value = [];
  for (let i = 0; i <= 360; i++) {
    value.push(i);
  }
  return value;
}

// get values for alpha
function getAlphaValues() {
  return Math.random().toFixed(2);
}

// get all values in one array of color
const hsl = [getHueValues(), getValues(), getValues()];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // hslColor = hsl(222, 50%, 70%, 0.24);
  let hslColor =
    "hsl(" +
    hsl[0][getRandomNumberHue()] +
    "," +
    hsl[1][getRandomNumberSat()] +
    "%," +
    hsl[2][getRandomNumberLight()] +
    "%," +
    getAlphaValues() +
    ")";

  color.textContent = hslColor;
  document.body.style.backgroundColor = hslColor;
});

function getRandomNumberHue() {
  return Math.floor(Math.random() * hsl[0].length);
}

function getRandomNumberSat() {
  return Math.floor(Math.random() * hsl[1].length);
}

function getRandomNumberLight() {
  return Math.floor(Math.random() * hsl[2].length);
}
