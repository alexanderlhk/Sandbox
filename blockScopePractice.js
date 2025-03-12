// Block Scopes in Javascript - https://www.w3schools.com/js/js_scope.asp

//Variables declared inside a { } block cannot be accessed from outside the block

{
    let x = 1;
}

//console.log(x); //x is not defined

// Variables declared with the var keyword can NOT have block scope. Variables declared inside a { } block can be accessed from outside the block.

{
    var y = 1;
}

console.log(y); // 1

// Local scope: Variables declared within a JavaScript function, are LOCAL to the function:

function myFunction() {
    let myVar = 1;
    // code here can use myVar
}

// code outside cannot use myVar

// console.log(myVar); // myVar is not defined

// var, let and const when used in a Function Scope are not accessible/visible from outside the function.

function thisFunction() {
    var a = 1;
    let b = 2;
    const c = 3;
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // c is not defined


// Global JavaScript Variables: A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

// Automatically Global: If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

myFunction2();

// code here can use carName

function myFunction2() {
  carName2 = "Volvo";
}

console.log(carName2); // Volvo

// Global Variables in HTML

// With JavaScript, the global scope is the JavaScript environment. In HTML, the global scope is the window object. Global variables defined with the var keyword belong to the window object:

var truckName = "Volvo";
// code here can use window.truckName
console.log(window.truckName); // Volvo)

// Global variables defined with the let keyword do not belong to the window object:

let truckName2 = "Mazda";
// code here cannot use window.truckName2
// console.log(window.truckName2); // undefined


/*
Do NOT create global variables unless you intend to.

Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.

*/

