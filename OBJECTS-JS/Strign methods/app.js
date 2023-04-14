// new string methods
// startswith (), endswith(), includes

const person = 'peter smith';
const employee = '23456-EMP-PETER-SMITH';
const  manager = '23456-MAN-JOHN-DOE';

// START WITH 
console.log();

//ENDS WITH
//console.log(manager.startsWith('DOE'))
//console.log(manager, endsWith)

// includes
console.log(employee.includes('peter'));

const multiplyPeople = (person, amount = 5) => person.repeat(amount)

// repeat
const people = multiplyPeople(person,10);
console.log(people);