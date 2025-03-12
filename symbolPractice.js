// Symbols -  https://www.youtube.com/watch?v=E5Bblr-SFbA&t=89s

// Introduction to how symbols work
const mySymbol = Symbol();
const myNamedSymbol = Symbol("Alex"); // gives this symbol a description of "Alex"

console.log(mySymbol);
console.log(myNamedSymbol);
console.log(mySymbol === myNamedSymbol); //false
console.log(mySymbol === Symbol()); // false - they are two separate symbols
console.log(Symbol("Alex") === Symbol("Alex")); //false
console.log(mySymbol === mySymbol); //true
console.log(typeof(myNamedSymbol)); //symbol - primitive type to Javascript
console.log(myNamedSymbol.description); // Alex
console.log(mySymbol.description); // Undefined

// The use case of Symbols are to use them as hidden keys in objects.

const character = {
    name: "Rick Axley",
    class: "Axe Wielder",
    quote: "I'll never let you down",
    _admin_: false
}

// all the keys in this objects are strings, and the '__admin__' is also a string, and is not hidden.

for (keys in character) {
    console.log(keys);
}
/*
name
class
quote
__admin__ 
*/

// If we want to store an '__admin__' key, but make it hidden when looping, we can use symbols.

const characterWithSymbols = {
    name: "Rick Axley",
    class: "Axe Wielder",
    quote: "I'll never let you down",
    [Symbol("admin")]: false
}

for (keys in characterWithSymbols) {
    console.log(keys);
}
/*
name
class
quote
*/

// If you want to get all the symbols in an object,

console.log(Object.getOwnPropertySymbols(characterWithSymbols)); // [Symbol(admin)]

/*
Well known symbol properties
- Symbol.asynclterator
- Symbol.iterator // iterator 'for... of'
- Symbol.toString Tag // gives a string representation of the object
*/

// Symbol.iterator property

const characterWithSymbolIterator = {
    name: "Rick Axley",
    class: "Axe Wielder",
    quote: "I'll never let you down",
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield "Hello";
    },
}

for (const value of characterWithSymbolIterator) { // use 'of' instead of 'in'
    console.log(value);
}

/*
1
2
Hello
*/

console.log(Object.getOwnPropertySymbols(characterWithSymbolIterator)); // [ Symbol(Symbol.iterator) ]