// Rest Parameter Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// Allows a function to accept an indefinite number of arguments as an array

function sumOf(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  console.log(total);
  return total;
}

sumOf(1, 2, 3, 4, 5); // 15
sumOf(10, 20, 30); // 60   

// With multiple Parameters

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

myFun(1, 2);
// a 1
// b 2
// manyMoreArgs [] - Empty array given



function ignoreFirst(...[, b, c]) {
  console.log(b + c);
  return b + c;
}

ignoreFirst(1, 2, 3); // 5
ignoreFirst(4, 5, 6, 7, 8); // 11 - Ignores 4, 7 and 8