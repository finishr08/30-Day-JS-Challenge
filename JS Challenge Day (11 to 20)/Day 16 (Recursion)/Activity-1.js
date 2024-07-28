/*
Activity 1: Basic Recursion
Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
*/

// Task-1

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));

// Task-2

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));
