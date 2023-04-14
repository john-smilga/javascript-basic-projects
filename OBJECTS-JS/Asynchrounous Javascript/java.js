// callbacks, promises, async/await

/* const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        heading1.style.color = 'red';
    }, 1000);
    setTimeout(() => {
        heading2.style.color = 'white'
    }, 2000);
    setTimeout(() => {
        heading3.style.color = 'blue'
    }, 3000);
});
*/ 

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {});

const promise = new Promise((resolve, reject) => {
    let value = true;
    if(value){
        resolve('hey value is true')
    } else {
        reject(`there was an error,value is false`);
    }
});
promise.then((taco) => {
    console.log(taco);
}).catch((err) => {
    console.log(err);
});
