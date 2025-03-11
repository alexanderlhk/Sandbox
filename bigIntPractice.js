// JavaScript Fundamentals: The Whys and Hows of BigInt - https://www.youtube.com/watch?v=6I650PQfhMg

"use strict";

let largeNum = Number.MAX_SAFE_INTEGER;
let smallNum = Number.MIN_SAFE_INTEGER;

console.log(largeNum);
console.log(smallNum);
console.log(Number.isSafeInteger(largeNum));

largeNum++;

console.log(largeNum);
console.log(smallNum);
console.log(Number.isSafeInteger(largeNum));

largeNum++;

console.log(largeNum);
console.log(smallNum);
console.log(Number.isSafeInteger(largeNum));

// Added bigInt function, an "n" will appear at the end of the result.
let largerNum = BigInt(Number.MAX_SAFE_INTEGER);
let smallerNum = BigInt(Number.MIN_SAFE_INTEGER);

console.log(largerNum);
console.log(smallerNum);
console.log(Number.isSafeInteger(largerNum)); // displays false because it's no longer an integer. It's now a BigInt value. e.g. '9007199254740991n'

largerNum++;
largerNum++;

console.log(largerNum); //9007199254740993n
console.log(smallerNum);
console.log(Number.isSafeInteger(largerNum)); //false

// Manually create a BigInt

let ownBigInteger = 90071992n //can be any number, large or small.
console.log(ownBigInteger); 
console.log(Number.isSafeInteger(ownBigInteger)); //false, as it's no loner an integer but a BigInt
console.log(typeof(ownBigInteger)); //bigint