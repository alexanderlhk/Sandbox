// Misunderstanding Floats: https://www.w3schools.com/js/js_mistakes.asp
// All numbers in JavaScript are stored as 64-bits Floating point numbers (Floats).
// All programming languages, including JavaScript, have difficulties with precise floating point values:

const noScopeFunction = () => {
    let x = 0.1;
    let y = 0.2;
    let z = x + y;
    return z;
}   
console.log(noScopeFunction()); // 0.30000000000000004 instead of "0.3";

// To fix this, it always helps to multiply and then divide to get decimal point numbers.

const scopeFunction = () => {
    let x = 0.1;
    let y = 0.2;
    let z = (x * 10 + y * 10) / 10; 
    return z;
}
console.log(scopeFunction()); // 0.3
