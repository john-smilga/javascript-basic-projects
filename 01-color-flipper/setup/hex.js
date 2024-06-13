const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// testing

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
console.log(color);

function getRandomColor(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
}

btn.addEventListener('click', function() {
    const hexColor = getRandomColor();

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
 })