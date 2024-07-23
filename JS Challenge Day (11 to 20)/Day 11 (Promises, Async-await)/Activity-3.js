/**Activity 3: Using Async/Await
Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.*/

// Task-4

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value after 2 seconds");
    }, 2000);
  });
  
  async function asyncFunction1() {
    const result = await promise3;
    console.log(result);
  }
  
  asyncFunction1();

  
// Task-5

const promise4 = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Rejected value after 2 seconds"));
    }, 2000);
  });
  
  async function asyncFunction2() {
    try {
      const result = await promise4;
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  asyncFunction2();
  