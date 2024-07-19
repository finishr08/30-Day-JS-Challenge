/*
Activity 5: Object Iteration
Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
Task 9: Use object.keys and object.values methods to log all the keys and values of the book object.
*/

// Task-8

let objectData = {
    name : "Mustafa",
    skills : ["reactjs", "nextjs", "shadcn"]
}

for (const key in objectData) {
    if (Object.hasOwnProperty.call(objectData, key)) {
        const element = objectData[key];
        console.log(element);
    }
}


// task-9


let objectData1 = {
    name: "Mustafa",
    age: 20,
    skills: ["reactjs", "nextjs", "shadcn"]
};

// Logging keys
Object.keys(objectData1).forEach(key => {
    console.log(key);
});

// Logging values
Object.values(objectData1).forEach(value => {
    console.log(value);
});
