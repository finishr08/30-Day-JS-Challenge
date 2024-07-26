/*
Activity 4: Getters and Setters
Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 
Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
*/

// Task-7

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}

const person3 = new Person('Grace', 'Hopper', 85);
console.log(person3.fullName);

// Task-8

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    getGreeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}

const person4 = new Person('Isaac', 'Newton', 84);
console.log(person4.fullName); 
person4.fullName = 'Albert Einstein';
console.log(person4.fullName); 
