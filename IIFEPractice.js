// Immediately-Invoked Function Expression (IIFE) Practice - https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// Cannot use const to define arrow function when using IIFE - Will get Syntax Error.
/*
(const iifeFunction = (a = 2, b = 3) => {
  console.log(a * b);
  return a* b;
})(); 
*/

// Standard function
(function(a = 2, b = 3) {
  console.log(a * b);
  return a* b;
})(); // Output: 6

// Arrow Function
// When using arrow function, it must be un named in order to use IIFE
((a = 2, b = 3) => {
  console.log(a * b);
  return a* b;
})(); // Output: 6

// Async Function
(async function(a = 2, b = 3) {
  console.log(a * b);
  return a* b;
})(); // Output: 6