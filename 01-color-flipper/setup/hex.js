const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  let color_hash = '#';
  for ( let i = 0; i < 6; i++ ) {
    color_hash += hex[getRandomNumber];
  }

  color.textContent = color_hash;
  document.body.style.backgroundColor = color_hash;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
