const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');
const span = document.querySelector('.color');

function randomHex(colorHex) {
    //const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = '#';
    
    while(color.length <= 6) {
        let random = Math.floor(Math.random()*16); 
        color += colorHex[random]; 
    }

    return color;
}
function backgroundChangeColor() {
    let color = randomHex(hex);
    span.textContent = color;
    document.body.style.backgroundColor = color;
}

btn.addEventListener('click', backgroundChangeColor);
