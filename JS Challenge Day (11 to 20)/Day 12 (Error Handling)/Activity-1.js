/*
Activity 1: Basic Error Handling with Try-Catch
Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
*/

// Task-1

function throwError() {
    throw new Error("This is an intentional error.");
  }
  
  try {
    throwError();
  } catch (error) {
    console.error("Caught an error: ", error.message);
  }
  

// Task-2

function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 2));
    console.log(divide(10, 0)); 
  } catch (error) {
    console.error("Caught an error: ", error.message);
  }
  