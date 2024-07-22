/*
Activity 4: The this Keyword
Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
*/

// task-7

let bookDetail1 = {
    title: "Nextjs",
    author: "Mustafa",
    year: 2023,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
   
    getTitleAndYear: function() {
        return `${this.title} was published in ${this.year}`;
    }
}

console.log([bookDetail1.getDetails(), bookDetail1.getTitleAndYear()]);