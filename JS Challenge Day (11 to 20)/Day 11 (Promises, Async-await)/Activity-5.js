/**
Activity 5: Concurrent Promises
Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. */


// Task-8

const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC])
  .then(values => {
    console.log(values); // ["Promise A resolved", "Promise B resolved", "Promise C resolved"]
  })
  .catch(error => {
    console.error(error);
  });


// Task-9


const promiseX = new Promise((resolve) => setTimeout(() => resolve("Promise X resolved"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Promise Y resolved"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Promise Z resolved"), 3000));

Promise.race([promiseX, promiseY, promiseZ])
  .then(value => {
    console.log(value); // "Promise X resolved"
  })
  .catch(error => {
    console.error(error);
  });
