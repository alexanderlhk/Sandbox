// Objects and Primitives: https://www.w3schools.com/js/js_best_practices.asp

// Always treat numbers, strings, or booleans as primitive values. Not as objects.
// Declaring these types as objects, slows down execution speed, and produces nasty side effects:

let x = "John";             
let y = new String("John");
console.log(x === y) // is false because x is a string and y is an object.

// This is worse 

let z = new String("John");             
let v = new String("John");
console.log(z == v) // is false because you cannot compare objects.
