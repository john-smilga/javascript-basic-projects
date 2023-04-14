// arrow functions or fat arrow functions 
// no name, alwats a expression, assign to variable 
// no function keyboard 
// 'this'

/* function sayHi() {
    console.log("hello");
}
sayHi();

const hello = function(name){
    console.log(`Hello ${name}`);
};
hello("bob");

function triple(value1, value2) {
    return value1 * value2 * 3;
} */ 

/* const sayHi = () => console.log('hello');
sayHi();
const double = value  => value * 2;
const num = double (4);
console.log (num);

//two parameters and more than one line 
const multiply = (num1,num2) => {
    const result = num1 * num2;
    //more code here
return result 
}

const sum = multiply(4,6);
console.log(sum)

//return object
const object = () => ({name: "john", age: 25});
const person = object();
console.log(person);

// arrow functions as callback functions
const numbers = [1,2,3,4,5,6];
const big = numbers.filter(number => number >2);
console.log(big)

const button = document.querySelector('.btn')

button.addEventListener('click', (e) => {
    console.log(e)
}) */ 

/* const bob = {
    firstName: "bob",
    lastName: "smith",
    sayName: function (){
        console.log(this);
        setTimeout(() => {
            console.log (`hello my name is ${this.firstName} 
            ${this.lastName}`);
        }, 2000)
        
    },
};

/* const anna = {
    firstName: "anna",
    lastName: "sanders",
    sayName: () => {
        console.log(this);
        console.log (`hello my name is ${this.firstName} ${this.lastName}`);
    },
}; */ 
bob.sayName();
anna.sayName(); */

// arrow functions or fat functions
// reg function; this refers parend, lef of the dot
// arrow function ; refers to its current surrounding scope
 
const btn = document.querySelector('.btn');
btn.addEventListener('click')( => {
    console.log(this);
    this.style.color = 'black';
})