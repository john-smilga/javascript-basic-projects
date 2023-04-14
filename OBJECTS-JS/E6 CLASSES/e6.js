/*
ES6 CLASSES
*/


class Account {
    constructor(name, initialBalance){
    this.name= name;
    this.balance = initialBalance;
    }
    bank = 'SANTANDER'    
    deposit(amount) {
        this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`)
    }
}
const john = new Account('john', 0)
console.log(john);
console.log(john.name);
console.log(john.bank)
john.deposit(500);

const bob = new Account('Bob', 0)
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
console.log(bob.bank)
