/*
Activity 2: Object Methods
Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
*/

// task-3

let bookDetail1 = {
    title: "Nextjs",
    author: "Mustafa",
    year: 2023
}
console.log(bookDetail1);
bookDetail1.title = "reactjs"
bookDetail1.author = "Facebook"
console.log(bookDetail1);

// Task-4

bookDetail1.year = 2024;

console.log(bookDetail1);