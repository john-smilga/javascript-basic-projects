const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const colorText = document.querySelector(".color")

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
});

const getRandomNumber = ()  => {
    return Math.floor(Math.random()*colors.length)
}