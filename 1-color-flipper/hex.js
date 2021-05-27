const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getRandomColor() {
  let color = '#';
  let number;
  
  for (let i = 0; i < 6; i++) {
    number = getRandomNumber();
    color += `${hex[number]}`;
  }
  
  return color;
}