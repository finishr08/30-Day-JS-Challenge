/*
2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
*/


// Task-1

let arrayList = ['Mustafa', 'PUT Rasul', 'Malakwal'];

let [first, second, third] = arrayList;

console.log(first);
console.log(third); 


// Task-2

let book ={
    title: 'JS',
    author : 'Brandon Eich'
}

let {title, author} = book
console.log([title, author]);
