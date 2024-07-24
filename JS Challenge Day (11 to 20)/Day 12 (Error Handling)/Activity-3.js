/*
Activity 3: Custom Error Objects
Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

*/

// Task-4

class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwCustomError() {
    throw new CustomError("This is a custom error.");
  }
  
  try {
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error: ", error.message);
    } else {
      console.error("Caught an error: ", error.message);
    }
  }
  

// Task-5

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  function validateInput(input) {
    if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty.");
    }
    return true;
  }
  
  try {
    validateInput(""); // This will throw a ValidationError
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error: ", error.message);
    } else {
      console.error("Caught an error: ", error.message);
    }
  }
  
