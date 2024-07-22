/*
Activity 3: Spread and Rest Operators
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
*/

// Task-5

const existingArray = [1, 2, 3];
const additionalElements = [4, 5, 6];
const newArray = [...existingArray, ...additionalElements];

console.log(newArray); 


// Task-6

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7)); 
console.log(sum(8, 9)); 
  