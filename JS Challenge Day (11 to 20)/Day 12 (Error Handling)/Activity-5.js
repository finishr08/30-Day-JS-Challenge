/*
Activity 5: Graceful Error Handling in Fetch
Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
*/


// Task-8

fetch("https://invalid-url")
  .then(response => response.json())
  .catch(error => console.error("Caught an error: ", error));


// Task-9

async function fetchData() {
    try {
      let response = await fetch("https://invalid-url");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Caught an error: ", error);
    }
  }
  
  fetchData();
  