const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.getElementById("btn");
var textColor = document.querySelector(".container .color");
var prevNumber = randomNumber = -1;

btn.addEventListener("click", function() {
    randomNumber = getRandomColor();
    document.body.style.backgroundColor = colors[randomNumber];
    textColor.textContent = colors[randomNumber];
    prevNumber = randomNumber;
});

function getRandomColor() {
    randomNumber = Math.floor(Math.random() * colors.length);
    return randomNumber == prevNumber ? randomNumber == colors.length - 1 ? --randomNumber : ++randomNumber : randomNumber;
}