/*
Activity 2: Recursion with Arrays
Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
*/

// Task-3

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, -2, 3, 5]));
console.log(sumArray([]));

// Task-4

function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], maxArray(arr.slice(1)));
}

console.log(maxArray([1, 5, 3, 9, 2]));
console.log(maxArray([10, -2, 3, 5]));
console.log(maxArray([-1, -5, -3, -9, -2]));
