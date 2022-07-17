const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");
var textColor = document.querySelector(".container .color");

btn.addEventListener("click", function() {
    var colors = "#";
    for(let i = 0; i < 6; i++) {
        colors += hex[getRandomColor()];
    }
    document.body.style.backgroundColor = colors;
    textColor.textContent = colors;
});

function getRandomColor() {
    return Math.floor(Math.random() * hex.length);
}