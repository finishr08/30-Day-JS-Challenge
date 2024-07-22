/*
Feature Request:
2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
*/

let name = "Mustafa";
name ="Ahmed"; // Reassign data should overwrite the Exsisting and print on Screen by using let
console.log(`Succesfully Print using let =>${name}`);

const name1 = "Rozi";
name1 = "Mustafa"; // Reassign data should not overwrite the Exsisting and print the error on screen 
console.log(name1);
