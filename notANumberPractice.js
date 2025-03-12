// Not a Number (NaN): https://www.w3schools.com/js/js_best_practices.asp

let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number
"Hello" - "Dolly"    // returns NaN

// NaN = Not A Number
// JavaScript is loosely typed. A variable can change its data type. Beware that numbers can accidentally be converted to strings or NaN (Not a Number).