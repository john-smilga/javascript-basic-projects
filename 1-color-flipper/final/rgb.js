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
const rgb = [getValues(), getAlphaValues()];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgbColor = "rgb(" + 122 + "," + 124 + "," + 10 + "," + 0.89 + ")";

  console.log(rgbColor);
});
