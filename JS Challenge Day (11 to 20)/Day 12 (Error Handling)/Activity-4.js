/*
Activity 4: Error Handling in Promises
Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. 
Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

*/


// Task-6

let randomPromise = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved successfully.");
    } else {
      reject("Promise rejected.");
    }
  });
  
  randomPromise
    .then((message) => console.log(message))
    .catch((error) => console.error("Caught an error: ", error));
  

// Task-7

async function asyncRandomPromise() {
    let randomPromise = new Promise((resolve, reject) => {
      let random = Math.random();
      if (random > 0.5) {
        resolve("Promise resolved successfully.");
      } else {
        reject("Promise rejected.");
      }
    });
  
    try {
      let result = await randomPromise;
      console.log(result);
    } catch (error) {
      console.error("Caught an error: ", error);
    }
  }
  
  asyncRandomPromise();
  