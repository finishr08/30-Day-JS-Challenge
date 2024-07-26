/*
Activity 5: Private Fields (Optional)
Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. 
Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation
*/

// Task-9-10

class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Invalid withdraw amount.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new Account(100);
account1.deposit(50); 
account1.withdraw(30); 
console.log(`Final balance: $${account1.getBalance()}`); 



