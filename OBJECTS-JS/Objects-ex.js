//objects basics

/* 
Objects are collections of key (property) value pars
Property values can be strings, numbers, booleans, arrays and functions
however if the property value is a functions its called a method

//objects literal syntax */

/* const age = 60;


const person = {
    name: 'Pepe',
    age:age,
    married:true,
    siblings: ['anna', 'lupe'],
    greet: function (name){ 
        console.log(`hello, my name is ${name}`)
    },
    sayHello(name) {
        console.log(`hello, ny name is ${name}`)
    },
    job:{
        title: 'developer',
        company: {
            name: 'coding addict',
            adress: '123 main street',
        },
    },
    'randome-value': 'random',
};

console.log(person.job.title)
console.log(person.job.company.adress)
console.log(person);
console.log(person['name']);

console.log(person['random value'])

console.log(Object.keys(person))

let keys = Object.keys(person)


console.log(keys[3])
console.log('KEYS FOR EACH')

keys.forEach( function(propiedad) {
    console.log(propiedad)
    console.log(person[propiedad])
})

function iterar(obj){
    Object.keys(obj).forEach(function(key) {
        console.log(key)
        console.log(obj[key])

        if(typeof obj[key] === 'object') {
            iterar(obj[key])
        }
    })
    
}


/* 
console.log(person.name);

const name = person.name
console.log(name);
person.age = 60;
person.city = 'chicago'

//delete propery
const siblings = delete person.siblings;
console.log(person) 
*/ 

//nested objects
//set variable as propert value
// dot dotation vs bracket rotation 

//THIS
//POINTS TO THE LEFT OF THE DOT 

/* 
const john = {
    firstName: 'john',
    lastName: 'anderson',
    fullName: function (name) {
        //console.log(this);
        //console.log(`My full name is ${this.firstName} ${this.lastName}`)
    },
};

const bob = {
    firstName: 'peter',
    lastName: 'sanders',
    fullName: function (name) {
        //console.log(this);
        //console.log(`My full name is ${this.firstName} ${this.lastName}`)
    },
};

john.fullName();
bob.fullname();



/* IN REG FUNCTIONS (NOT ARROW) "THIS"
DETERMINED BY "HOW" A FUNCTION IS INVOKED (LEFT OF . )

DEFAULTS TO GLOBAL - WINDOW 
ARROW FUNCTIONS - PUMP THE BREAKS 
*/ 

//console.log(this)

function showThis() {
    //console.log(this);
}

//const john = {
    //name: 'john',
    //showThis: showThis
//}
//const bob = {
    //name: 'bob',
    //showThis: showThis
//}

/* john.showThis();
bob.showThis();

showThis();
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);

/*

/* BLUE PRINT
FACTORY FUNCTION AND CONSTRUCTION FUNCTIONS 
FACTORY FUNCTIONS
CONSTRUCTOR FUNCTIONS
NEW - CREATES NEW OBJECTO, POINTS TO IT, OMIT RETURN
*/

/*
function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(`hello, my name is ${this.firstName} ${this.lastName} and i love REACT`)
        }
}

const john = new Person ('john', 'anderson');
john.fullName();
const bob = new Person ('bob', 'jordan');
bob.fullName();


function createPerson (firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(`hello, my name is ${this.firstName} ${this.lastName} and i love JS`)
            }
    }
} 

const Daniel = createPerson('Daniel', 'Garza')
Daniel.fullName()
const Pepe = createPerson('Pepe', 'Gomez')
Pepe.fullName()

*/

/*
ALL OBJECTS IN JAVASCRIPT HACE ACESS TO CONSTRUCTOR
PROPERTY THAT RETURN A CONSTRUCTOR FUNCTION THAT CREATED IT
BUILT IN CONSTRUCTOR FUNCTIONS
ARRAYS AND FUNCTIONS ARE OBJETS
*/ 

/* 
function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(`hello, my name is ${this.firstName} ${this.lastName} and i love REACT`)
        }
}

const john = new Person('john', 'sanders')

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function() {};
console.log(sayHi.constructor)
*/

 /*
 Prototypal inheritance model
javascript uses prototypal in heritance model. that means that
every constructor function/class has a prototype property that is
shared by every instance of the constructor/class. So any properties
and methods or prototype can be accese by every instance. prototype
property returns object 
*/

function Account(name, initialBalance){
    this.name= name;
    this.balance = initialBalance;
    }

const john = new Account ('john', 200);
const bob = new Account('bob', 0);

Account.prototype.bank = 'SANTANDER';
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`)
}

console.log(john.bank);
console.log(bob);

john.deposit(300);
bob.deposit(1000);