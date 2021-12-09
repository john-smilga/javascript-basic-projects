const btnDecrease= document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
let value = 0;

btnIncrease.addEventListener('click', function() {
    value+=1;
    document.querySelector('#value').textContent = value;
    if(value>0) document.querySelector('#value').style.color = 'green';
});
btnDecrease.addEventListener('click', function() {
    value-=1;
    document.querySelector('#value').textContent = value;
    if(value<0) document.querySelector('#value').style.color = 'red';
});
btnReset.addEventListener('click', function() {
    value = 0;
    document.querySelector('#value').textContent = value;
    if(value===0) document.querySelector('#value').style.color = 'black';
});

