const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const span = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', function() {
    let randomColor = colors[Math.floor(Math.random()*(colors.length))]; 
    span.textContent = randomColor;
    body.style.backgroundColor = randomColor;
});
