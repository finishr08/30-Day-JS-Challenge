/*
Activity 4: Fetching Data from an API
Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
*/

// Task-6

fetch('https://api.publicapis.org/entries')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


// Task-7

async function fetchData() {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  