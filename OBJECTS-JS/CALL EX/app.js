// CALL  - RUNS INTANTLY, ARGUMENTS - LIST OF ITEMS
// APPLY - RUNS INSTANTLE, ARGUMENTS - ARRAY OF ITEMS
// BIND - ASSIGN, USE LATER, ARGUMENT - LIST OF ITEMS

/*


const john = {
    name:'john',
    age: 24,   
}
const Anna = {
    name:'Anna',
    age: 21,
}

function greet (city, country) {
    console.log(this);
    console.log(`Hello, im ${this.name} and 
    im ${this.age} years old and I live in ${city}, ${country}` )
}

//CALL EX
//greet.call(john, 'San diego', 'us')
//greet.call(Anna, 'san diego', 'us')
//greet.call({ name: 'Peter', age: 30 })


//APPLY EX
//greet.apply(john, ['san diego', 'us'])
//greet.apply(Anna, ['san diego', 'us'])
//greet.apply({ name: 'Peter', age: 30 })

// ASSIGN, CALL IT LATER
const annaGreet = greet.bind(Anna, 'toronto', 'ca')
annaGreet();


*/

const counter = {
    count: 0,
    increment() {
        console.log(this);
        this.count++;
        console.log(this.count)
    }
}


const btn = document.querySelector('.increment'); 

// fail 
//btn.addEventListener('click', counter.increment);

// some edge cases 
//btn.addEventListener('click', counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
btn.removeEventListener('click', increment);
