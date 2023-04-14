// var, let, const
// define, update, redifine
//const cannot mutate primmityv type

// define
/* var number = 100;
////console.log(number);
//update
number = 200
//console.log(number);
//redifine
var number = 'orange'

let amount = 100;
//console.log(amount)
amount = 200;
//console.log(amount);

const total = 100;
//console.log(total);
const person = {name: 'bob'};
person.name = 'john'
console.log(person.name); */

////LET CONST - BLOCKED SCOPED {} - ANYTHING WITHIN {}
//global scope

var amount = 100;
function greet () {
    var random = 'some randome value'
    console.log(`hello there ${amount} ${random}`);
}

//greet();

var total = 1000;
var test = true;

if (test){
    //local scope 
    var total = 'oranges and onions'
    let value = 'some randome value'
    console.log('hello there');
}

console.log(value)
console.log(total);