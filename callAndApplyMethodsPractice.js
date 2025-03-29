// call() and apply() methods practice with .this - https://www.perplexity.ai/search/how-does-call-and-apply-method-DB5Y3Zr0QUKNJ8kay4oGxw

const obj1 = { value: 42};
const getValue1 = () => { // arrow function does not support "this" keyword.
    return this.value;
}

function getValue2() {
    return this.value;
}

console.log(getValue1()); // undefined
console.log(getValue1.call(obj1)); /* undefined - Note that arrow functions does not have their own "this". 
Unlike regular functions, arrow functions do not create their own this context. Instead, they inherit 
the value of this from their surrounding (lexical) scope at the time they are defined. In this case, 
the surrounding scope is the global context (e.g., window in browsers or global in Node.js).

The arrow function inherits its this from its surrounding scope. If defined in the global scope, 
it inherits the global context (window). Since there is no value property on the global object, it returns undefined.
 */
console.log(getValue2.call(obj1)); // 42

// Passing an Object as this

const human1 = { firstName: "Alex", lastName: "Lim", age: 28 };
function greet1() {
    console.log (`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
}

greet1.call(human1); // Hello, my name is Alex Lim and I am 28 years old

// Constructor Chaining

class Animal {
    constructor(name, age) {
        if (typeof name !== 'string' || typeof age !== 'number') {
            throw new Error('Invalid input type');
        }
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Horse extends Animal {
    constructor(name, age) {
        super(name, age);
        this.sound = "Neigh";
    }

    speak() {
        super.speak();
    }
}
const horse1 = new Horse("Thunder", 5);
console.log(horse1); // Horse { name: 'Thunder', age: 5, sound: 'Neigh' }
horse1.speak(); // Thunder says Neigh

// apply() - The apply() method is similar to call(), but it accepts arguments as an array instead of individual values.

const personName1 = { firstName: "Alex", lastName: "Lim" };

function greet2(wish, message) {
    return `${this.firstName}, ${wish}. ${message}`;
}

let finalMessage = greet2.apply(personName1, ["Greetings", "How are you?"]);
console.log(finalMessage); // Alex, Greetings. How are you?

// Array Manipulation

let colour1 = ["Green", "Blue", "Yellow"];
let colour2 = ["Red", "Orange", "Green"];

colour1.push.apply(colour1, colour2);
console.log(colour1); // [ 'Green', 'Blue', 'Yellow', 'Red', 'Orange', 'Green' ] - you're logging the modified array (colour1).

colourA = colour1.push.apply(colour1, colour2);
console.log(colourA); // 9 - you're logging the return value of .push(), which is an integer representing the new length of the array.