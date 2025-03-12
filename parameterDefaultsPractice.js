// Parameter Defaults: https://www.w3schools.com/js/js_best_practices.asp

// If a function is called with a missing argument, the value of the missing argument is set to undefined.
// Undefined values can break your code. It is a good habit to assign default values to arguments.

function myFunction(x, y) {
    if (y === undefined) {
      y = 0; // defaults y to 0 if parameter is undefined.
    }
  }

  // ECMAScript 2015 allows default parameters in the function definition:
  function test(a=1, b=1) { /*function code*/ }

