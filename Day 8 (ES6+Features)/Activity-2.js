/*
Activity 2: Destructuring
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
*/

// Task-3

let arrayList = ['Mustafa', 'PUT Rasul', 'Malakwal'];

let [first, second, third] = arrayList;

console.log(first);
console.log(third); 


// Task-4

let book ={
    title: 'JS',
    author : 'Brandon Eich'
}

let {title, author} = book
console.log([title, author]);
