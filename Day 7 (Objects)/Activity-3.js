/*
Activity 3: Nested Objects
Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
Task 6: Access and log the name of the library and the titles of all the books in the library.
*/

// task-5

let library = {
    libraryName : "PUT Library",
    Address: "Mandi Bahauddin",
    detail: {
        name : "Nextjs",
        books : 8
    }
}
console.log(library);
console.log(library.detail);

// task-6

console.log(library.libraryName);
console.log(library.detail.name);