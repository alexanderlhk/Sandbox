// Block Scopes in Javascript - https://www.w3schools.com/js/js_scope.asp

//Variables declared inside a { } block cannot be accessed from outside the block

{
    let x = 1;
}

console.log(x); //x is not defined

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

console.log(myVar); // myVar is not defined

// var, let and const when used in a Function Scope are not accessible/visible from outside the function.

function thisFunction() {
    var a = 1;
    let b = 2;
    const c = 3;
}

console.log(a); // a is not defined
console.log(b); // b is not defined
console.log(c); // c is not defined


// Global JavaScript Variables: A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}