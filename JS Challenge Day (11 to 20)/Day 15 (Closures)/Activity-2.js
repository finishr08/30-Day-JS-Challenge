/*
Activity 2: Practical Closures
Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
*/

// Task-3

function createUniqueIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = createUniqueIdGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task-4

function createGreeter(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}

const greetJohn = createGreeter("John");
console.log(greetJohn());

const greetJane = createGreeter("Jane");
console.log(greetJane());
