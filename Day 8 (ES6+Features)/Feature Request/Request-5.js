/*
5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
*/

const propName1 = "firstName";
const propName2 = "lastName";

const data = {
  [propName1]: "John",
  [propName2]: "Doe",
  age: 25
};

console.log(data);