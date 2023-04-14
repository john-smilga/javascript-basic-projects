//// IIFE immedatley/invoked function expresison 
//older aproach - new modules 
// simple approach to avoid general global scoppe solution



/* const num1 = 30;
const num2 = 50;

function add () {
    console.log(`the result is : ${num1 + num2}`);
}
add();

(function() {
    const num3 = 30;
    const num4 = 50;
})();

// return /assing to vriable 

const result = (function (num3, num4) {
}) */ 

//// HOISTING
//function and var declarations are hoisted
// safer to access only after initialized



/* const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
    console.log('hello world');
}

function moreComplex(){
    console.log(`${firstName}, ${lastName}`);
} */

//// CLOSURE 
// gives you an access to an outer functions scope from
// an inner function 
// make private variable with closures 

/* function outer(){
    let privateVar = 'secret';
    function inner(){
        console.log(`hello there secret is : ${privateVar} `)
    }
    return inner;
    inner();
}
outer();

const value = outer();
console.log(value);
value(); */ 

/* function newAccount (name,initialBalance){
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    function deposit (amount){
        balance += amount;
        showBalance()  
    }
    function withdraw (amount){
        if (amount > balance){
            console.log(`Hey, ${name}, sorry not enough funds`);
            return;
        }
        balance -= amount;
        showBalance();
    }
    return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('john', 300);
const bob = newAccount('bob', 23300);

john.showBalance();
john.deposit(400) */ 

//// ES6