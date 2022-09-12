const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const value = document.getElementById('value');

function checkSigns(){
    const number = parseInt(value.textContent);
    if (number < 0) {
        value.textContent = '-' + value.textContent;
        value.style.color = 'red';
    }
    else if (number > 0) {
        value.style.color = 'green';
    }
}

checkSigns();

resetButton.onclick = function(){
    value.textContent = '0';
}

increaseButton.onclick = function(){
    let number = parseInt(value.textContent);
    number++;
    value.textContent = number.toString();
}

decreaseButton.onclick = function(){
    let number = parseInt(value.textContent);
    number--;
    value.textContent = number.toString();
}

