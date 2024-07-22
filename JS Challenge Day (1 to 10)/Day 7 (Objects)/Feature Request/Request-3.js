/*
Feature Request:
3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and object.keys/object.values.
*/

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