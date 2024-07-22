/*
3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
*/

// Task-1

const existingArray = [1, 2, 3];
const additionalElements = [4, 5, 6];
const newArray = [...existingArray, ...additionalElements];

console.log(newArray); 


// Task-2

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7)); 
console.log(sum(8, 9)); 
  