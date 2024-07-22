/*
Feature Request:
3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
*/

// for loop

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// for each

const number = [1, 2, 3, 4, 5];
const iterate = number.forEach(element => {
    console.log(element);
});