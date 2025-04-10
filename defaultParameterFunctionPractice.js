// Default Parameters in Javascript - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters


// In the past, the general strategy for setting defaults was to test parameter values in the function body and assign a value if they are undefined. In the following example, b is set to 1 if multiply is called with only one argument:

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  console.log(a * b);
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5

// Using Default Parameters in Javascript (e.g. "a = 1" in the argument)

const defaultParams = (a = 2, b) => {
  console.log(a * b);  
  return a * b;
}

defaultParams(2); // NaN (a = 2, b = undefined)
defaultParams(5, 3); // 15
defaultParams(undefined, 3); // 6