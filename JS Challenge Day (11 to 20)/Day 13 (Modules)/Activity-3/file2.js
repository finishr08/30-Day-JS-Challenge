// app.js
const utilities = require('./file1');

const radius = 5;

console.log(`The area of a circle with radius ${radius} is ${utilities.circleArea(radius)}`);
console.log(`The circumference of a circle with radius ${radius} is ${utilities.circleCircumference(radius)}`);
console.log(`The value of PI is ${utilities.PI}`);
console.log(`The value of E is ${utilities.E}`);
console.log(`The natural logarithm of 10 is ${utilities.naturalLogarithm(10)}`);
