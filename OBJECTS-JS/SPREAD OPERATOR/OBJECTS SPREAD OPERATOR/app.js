
// ALLOWS AN ITERABLE TO SPREAD / EXPAND INDIVIDUALLY INSIDE RECIEVER
// SPLIT INTO SINGLE ITEMS AND COPY THEM 


/* const person = {name: 'john', job: 'developer'};
const newPerson = {...person, city: 'chicago' };
console.log (person);
console.log(newPerson)
*/ 

/* const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');
const text = [...headings].map(item => `<span>${item.textContent}</span>`)
.join('');

result.innerHTML = text
*/ 

/* const numbers = [23, 45, 66 , 88 , 2345]

console.log(Math.max(...numbers));

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
    console.log (`Hello ${name} ${lastName}`);
};

sayHello(...john); */ 

// REST OPERATOR
// gathers/collects the items

// Arrays
const fruit = ['apple', 'orange', 'lemon'];
const [first, second, ...fruits] = fruit;
//console.log(first, rest);

//objects
const person = {name: 'john', lastName: 'smith', job: 'developer'};
//const {job, ...rest} = person;
// console.log(job, rest)

const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    let total = 0;
    for (const score of scores){
        total += score
    }
    console.log(`${name}'s average score is ${total / scores.length}`);
};
getAverage(person.name, 79, 90, 56, 43, 99, 99, 99)
getAverage(person.name, ...testScores)


