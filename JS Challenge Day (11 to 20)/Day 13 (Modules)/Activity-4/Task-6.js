/*
Activity 4: Using Third-Party Modules
Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
*/

// npm i lodash


const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(array, 2);

console.log(chunkedArray);
