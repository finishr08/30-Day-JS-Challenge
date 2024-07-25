// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties

// utilities.js
const PI = 3.14159;
const E = 2.71828;

function circleArea(radius) {
  return PI * radius * radius;
}

function circleCircumference(radius) {
  return 2 * PI * radius;
}

function naturalLogarithm(x) {
  return Math.log(x) / Math.log(E);
}

module.exports = {
  PI,
  E,
  circleArea,
  circleCircumference,
  naturalLogarithm
};
