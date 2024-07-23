/**Activity 2: Chaining Promises
Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
 */

// Task-3

const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
  
  const fetchData2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 1000);
  });
  
  fetchData1
    .then((data1) => {
      console.log(data1);
      return fetchData2;
    })
    .then((data2) => {
      console.log(data2);
    });
  