/*
Activity 1: Class Definition
Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. Task 2: Add a method to the Person class that updates the age property and logs the updated age.
*/

// Task-1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person('Alice', 30);
console.log(person1.getGreeting());

// Task-2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person2 = new Person('Bob', 25);
person2.updateAge(26);
console.log(person2.getGreeting());
