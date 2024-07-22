/*
Feature Request:
2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
*/

// Map

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);


// Filter

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = number.filter(number => number % 2 === 0);
console.log(evenNumber);


// Reduce

const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((total, number) => total + number, 0);
console.log(sum);
