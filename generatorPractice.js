function* countToThree() {
    yield 'one';
    yield 'two';
    yield 'three';
}

const generate = countToThree();
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());

function* counter(init) {
    let count = init;
    while (true) {
        const shouldIncrement = yield `Current value: ${count}, increment?`;
        if (shouldIncrement) count++;
    }
}

const generate2 = counter(3);
console.log(generate2.next());
console.log(generate2.next(true));
console.log(generate2.next(true));
console.log(generate2.next(true));
console.log(generate2.next(false));


function* generatorTest() {
    console.log("This is before the first yield");
    yield 1;
    console.log("This is before the second yield");
    yield 2;
    console.log("This is before the third yield");
    yield 3;
}

const testGenerator = generatorTest();
// console.log(generatorTest().next());
// console.log(generatorTest().next());
// console.log(generatorTest().next());
// console.log(generatorTest().next());

console.log(testGenerator.next());
console.log(testGenerator.next());
console.log(testGenerator.next());
console.log(testGenerator.next());


/*

The Key Difference: Generator Object Creation

The core of the issue lies in when and how the generator object is created.

generatorTest().next() (Creating a New Generator Each Time)

generatorTest(): When you call generatorTest(), you are invoking the generator function. This creates a brand-new generator object every single time you call it.
.next(): When you then immediately call .next() on that freshly created generator object, it starts the generator's execution from the beginning.
Isolation: Each call generatorTest().next() is independent of the other calls.

*/