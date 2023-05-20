const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const getRandomColor = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
console.log(color);

btn.addEventListener('click', () => {
    let randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

