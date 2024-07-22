/*
Activity 5: Enhanced Object Literals
Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
Task 9: Create an object with computed property names based on variables and log the object to the console.
*/


// Task-8

const name = "Alice";
const age = 30;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);
person.greet();


// Task-9

const propName1 = "firstName";
const propName2 = "lastName";

const data = {
  [propName1]: "John",
  [propName2]: "Doe",
  age: 25
};

console.log(data);
