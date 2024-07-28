/*
Activity 4: Recursive Search
Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
*/

// Task-7

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
console.log(binarySearch([1, 3, 5, 7, 9, 11], 3));

// Task-8

function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2));
console.log(countOccurrences([1, 1, 1, 1, 1], 1));
console.log(countOccurrences([1, 2, 3, 4, 5], 6));
