/**
Activity 1: Understanding Promises
Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
 */

// Task-1

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
  
  promise1.then((message) => {
    console.log(message);
  });

  
// Task-2

const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise rejected after 2 seconds");
    }, 2000);
  });
  
  promise2.catch((error) => {
    console.error(error);
  });
  