const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const span = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  span.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
const randomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
