// JS Iterables: https://www.w3schools.com/js/js_iterables.asp

// An object becomes an iterator when it implements a next() method.

/*
The next() method must return an object with two properties:

1. value (the next value)
2. done (true or false)
*/

// Technically, iterables must implement the Symbol.iterator method. String, Array, TypedArray, Map and Set are all iterables, because their prototype objects have a Symbol.iterator method.

function myNumbers() {
    let x = 0;
    return {
        next: function() { // next() method created
            x += 10;
            return { // returns an object result.
                value: x,
                done: false
            };
        }
    };
}

const x = myNumbers();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

// The problem with a home made iterable is that it does not support "for...of" statement.

// Symbol.Iterator property: function that returns a next() function.

// An iterable can be iterated over with the code: for (const x of iterable) { }

const myNumbers2 = {};

console.log(myNumbers2);

myNumbers2[Symbol.iterator] = function() {
    let y = 0;
    done = false;
    return {
        next() {
            y += 10;
            if ( y == 100) {done = true}
            return {
                value: y,
                done: done
            };
        }
    };              
}

// To iterate through using FOR...OF STATEMENT 
for (const x of myNumbers2) {
    console.log(x);
}

// Using Symbol.iterator property, you can use a for...of statement. Without it, cant use for...of statement.

// MANUAL ITERATION (instead of using a FOR.OF STATEMENT)

let iterator = myNumbers2[Symbol.iterator]();

let text = "";
while (true) {
    const result = iterator.next();
    if (result.done) break;
    text += `${result.value} \n`
}

console.log(text);