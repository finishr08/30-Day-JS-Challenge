/*
Activity 3: Closures in Loops
Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
*/

// Task-5

function createFunctionArray() {
    let functions = [];
    
    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }
    
    return functions;
}

const functionArray = createFunctionArray();
functionArray[0]();  
functionArray[1]();  
functionArray[2]();  
functionArray[3]();  
functionArray[4]();  
