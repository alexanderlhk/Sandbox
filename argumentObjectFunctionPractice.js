// Argument Object for Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// Use case: Iterate over arguments in a function
// Use "arguments[]" to access this array-like object inside functions.
// However, rest parameters are preferred as to using this.
// Only non-arrow functions can be used

function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return;
}

func1(1, 2, 3);
// 1
// 2
// 3

// Arrow Functions cannot be used.

const func2 = (a, b, c) => {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return;
}

func2(1, 2, 3);
// Error