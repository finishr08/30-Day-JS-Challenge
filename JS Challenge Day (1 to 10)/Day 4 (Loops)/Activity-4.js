/*
Activity 4: Nested Loops
• Task 7: Write a program to print a pattern using nested for loops:
*/

// Task-7
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

