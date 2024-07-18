/*
Activity 3: Array Methods (Intermediate)
Task 7: Use the map method to create a new array where each number is doubled and log the new array.
Task 8: Use the filter method to create a new array with only even numbers and log the new array.
Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
*/

// Task-7

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);


// Task-8

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = number.filter(number => number % 2 === 0);
console.log(evenNumber);


// Task-9

const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((total, number) => total + number, 0);
console.log(sum);
