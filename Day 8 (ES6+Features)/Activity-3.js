/*
Activity 3: Spread and Rest Operators
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
*/

// Task-5

function array(...a) {
    return a;
}

let output = array(2,3,4,5,6,7);
console.log(output);