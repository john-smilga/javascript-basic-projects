// let declare the hexdecimal array
let hex =[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];

// declation of variables*

const btn = document.querySelector('.click-button');
const color = document.querySelector('.colorHex');
const body = document.querySelector('body');


btn.addEventListener("click", () =>{

    let colorNumbers = '#';

    for(let i=0; i<6 ;i++){

        colorNumbers += hex[getRandomElement()];
    }

   body.style.backgroundColor = colorNumbers;
   color.textContent = colorNumbers;

});

function getRandomElement(){

    return Math.floor( Math.random() * hex.length);
}





