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