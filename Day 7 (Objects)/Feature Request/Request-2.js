/*
Feature Request:
2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
*/

// Define book objects
let book1 = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} was published in ${this.year}`;
    }
};


let book2 = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2012,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} was published in ${this.year}`;
    }
};

let book3 = {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    year: 2015,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} was published in ${this.year}`;
    }
};

// Define the library object
let library = {
    name: "City Library",
    location: "Downtown",
    books: [book1, book2, book3],

    // Method to get library details
    getLibraryDetails: function() {
        return `${this.name} located at ${this.location} has ${this.books.length} books.`;
    },

    // Method to log details of all books in the library
    logBooksDetails: function() {
        this.books.forEach(book => {
            console.log(book.getDetails());
            console.log(book.getTitleAndYear());
        });
    }
};

// Log the library details
console.log(library.getLibraryDetails());

// Log the details of all books in the library
library.logBooksDetails();
