// Learn Closures In 7 Minutes - https://www.youtube.com/watch?v=3a0I8ICR1Vg

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }
}

const testFunction = outerFunction('Hello from outside');
testFunction('Hello from inside');

console.log('Second test:');

testFunction();
