const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    let hexColor = '#'; // # comes before hex numbers/letters
    // loop to generate 6 values 
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; //# + ranNum + ranNum.....
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length); // values from index 0 - last of hex array
}