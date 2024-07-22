/*
4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
*/

function multiply(a, b = 1) {
  return a * b;
}

// Calling the function with both parameters
console.log(multiply(5, 3)); 

// Calling the function with only the first parameter
console.log(multiply(7));