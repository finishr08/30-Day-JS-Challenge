
const { add, subtract, multiply, divide } = require('./file1');

const num1 = 20;
const num2 = 4;

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`The difference between ${num1} and ${num2} is ${subtract(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}`);
console.log(`The quotient of ${num1} and ${num2} is ${divide(num1, num2)}`);
