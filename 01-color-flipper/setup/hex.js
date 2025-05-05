const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn = document.querySelector(".btn");
color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
