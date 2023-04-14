// default parameters, arrow function gotchas

/* const john = 'John';
const peter = 'Peter'

function sayHi(person = 'Susan') {
    console.log (`Hi ${person}`);
}

const sayHello = (person = 'BOB') => console.log (`hello ${person}`);

sayHi();
sayHello(peter); */

// DESTRUCTURING
// fastest/easier way to access/unpack values from arrays
// objects into variables
//arrays

/* const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits [0];
const banana = fruits [1];
const lemon = fruits [2];
console.log(orange, banana, lemon);

const [enemy,, bob, , kelly] = friends;
console.log(enemy, bob, kelly); */

// destructuring swap variables
// faster / easier way to access/unpack values form arrays
//objects into variables
// arrays

/* let first = 'bob';
let second = 'john';

//let temp = second;
//second = first;
//first = temp 

[second, first] = [first, second]

console.log(first, second); */ 

/* const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

const {first, last,city} = bob;
console.log(first, last, city); */





