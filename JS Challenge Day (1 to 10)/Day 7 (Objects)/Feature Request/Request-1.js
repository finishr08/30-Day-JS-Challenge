/*
Feature Request:
1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
*/

// Creating the book object
let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    
    // Method to return a string with the book's title and author
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },

    // Method to update the book's year
    updateYear: function(newYear) {
        this.year = newYear;
    },

    // Method to return a string with the book's title and year
    getTitleAndYear: function() {
        return `${this.title} was published in ${this.year}`;
    }
};

// Logging the initial state of the book object
console.log("Initial book object:", book);

// Logging the result of calling getDetails method
console.log("Details:", book.getDetails());

// Updating the book's year using the updateYear method
book.updateYear(2020);

// Logging the updated state of the book object
console.log("Updated book object:", book);

// Logging the result of calling getTitleAndYear method
console.log("Title and Year:", book.getTitleAndYear());

// Logging all keys and values of the book object
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
