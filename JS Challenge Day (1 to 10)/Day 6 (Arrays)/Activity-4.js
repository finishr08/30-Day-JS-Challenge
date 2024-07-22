/*
Activity 4: Array Iteration
Task 10: Use a for loop to iterate over the array and log each element to the console.
Task 11: Use the forEach method to iterate over the array and log each element to the console.
*/

// Task-10

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// Task-11

const number = [1, 2, 3, 4, 5];
const iterate = number.forEach(element => {
    console.log(element);
});