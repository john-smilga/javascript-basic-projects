const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // console.log(document.body); //Targets the body (shows in dev tools)
    // get random number between 0 - 3 (index from colors) 
    const randomNumber = getRandomNumber(); // invokes our getRandomNumber function
    // console.log(randomNumber); - shows in our console the value returned from random number function
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

}) //When button is clicked we change color

function getRandomNumber() {
    //return Math.random(); // generates random num (0 - 1) excluding 1
    return Math.floor(Math.random() * colors.length); // Math.floor - returns integer instead of float 
}