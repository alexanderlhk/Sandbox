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


/*
Dissecting outerFunction

function outerFunction(outerVariable) { ... }:

This defines a function named outerFunction.
It takes one argument, outerVariable.
return function innerFunction(innerVariable) { ... }:

This is the core of the closure concept.
outerFunction returns another function, which we've named innerFunction.
innerFunction takes one argument, innerVariable.
Crucially: innerFunction has access to outerVariable, even though outerVariable is defined in the scope of outerFunction. This is the essence of a closure.
console.log(Outer Variable: ${outerVariable});:

Inside innerFunction, this line logs the value of outerVariable to the console.
Even though innerFunction is defined inside outerFunction, it can still "remember" and access outerVariable.
console.log(Inner Variable: ${innerVariable});:

This line logs the value of innerVariable to the console.
innerVariable is a parameter of the inner function.
How Closures Work in This Example

Closure: A closure is a combination of a function (in this case, innerFunction) and the lexical environment (the variables within the scope) within which that function was declared (in this case, outerFunction).
Remembering the Environment: When outerFunction is called, a new execution context is created. This context contains the outerVariable. When innerFunction is returned, it doesn't just carry its own code; it also carries a "backpack" containing the variables from the context where it was created, in this case, the variables in outerFunction.
Persistence: Even after outerFunction has finished executing, innerFunction still has access to outerVariable. This is because innerFunction has "closed over" (or captured) the outerFunction's environment.
Usage Pattern

const testFunction = outerFunction('Hello from outside');:

We call outerFunction with the string "Hello from outside" as outerVariable.
outerFunction executes, creates innerFunction, and returns innerFunction.
The returned innerFunction is stored in the testFunction variable.
Important: At this point, testFunction (which is the innerFunction) has captured the value "Hello from outside" as its outerVariable.
testFunction('Hello from inside');:

We call testFunction (which is innerFunction) with the string "Hello from inside" as innerVariable.
innerFunction executes:
console.log(Outer Variable: ${outerVariable}); prints "Outer Variable: Hello from outside" (it remembers the value from when it was created).
console.log(Inner Variable: ${innerVariable}); prints "Inner Variable: Hello from inside".
console.log('Second test:');

Prints the string "Second test:"
testFunction();
Calls testFunction, which is innerFunction.
innerFunction executes: - console.log(Outer Variable: ${outerVariable}); prints "Outer Variable: Hello from outside" (it remembers the value from when it was created). - console.log(Inner Variable: ${innerVariable}); prints "Inner Variable: undefined". Since nothing is passed as parameter, innerVariable is undefined.
*/

/*
You're spot on with your intuition! You've correctly identified the meaning of testFunction('Hello from inside'); and its equivalence to outerFunction('Hello from outside')('Hello from inside').

Let's break down why this is the case, referencing the closurePractice.js code:

Understanding testFunction('Hello from inside');

const testFunction = outerFunction('Hello from outside');

This line is the key. Here, you're calling outerFunction and passing it the argument "Hello from outside".
As we know from the previous explanations, outerFunction does not directly log anything to the console. Instead, it returns the innerFunction.
Crucially: The returned innerFunction forms a closure over the outerVariable (which is "Hello from outside" in this case). innerFunction "remembers" the value of outerVariable even after outerFunction has finished executing.
The returned innerFunction is assigned to the variable testFunction.
This line means that testFunction = function innerFunction(innerVariable) { console.log(Outer Variable: Hello from outside); console.log(Inner Variable: ${innerVariable}); }
testFunction('Hello from inside');

Now that testFunction holds the returned innerFunction, this line is essentially the same as calling innerFunction('Hello from inside').
You're passing "Hello from inside" as the innerVariable to innerFunction.
innerFunction then executes its code:
console.log(Outer Variable: ${outerVariable}); prints "Outer Variable: Hello from outside" (because innerFunction closed over and remembered that value).
console.log(Inner Variable: ${innerVariable}); prints "Inner Variable: Hello from inside" (because you're passing "Hello from inside" as the argument now).
Equivalence to outerFunction('Hello from outside')('Hello from inside')

You're absolutely correct that testFunction('Hello from inside') is the same as outerFunction('Hello from outside')('Hello from inside'). Let's dissect why:

outerFunction('Hello from outside')

This part is a function call that returns innerFunction (with outerVariable closed over).
('Hello from inside')

The result of the previous call (which is innerFunction) is immediately called with this argument, "Hello from inside".
Because the function call outerFunction('Hello from outside') returns the inner function. This is the same as calling the inner function directly. That is why the code after the parentheses is executed.

In essence:

outerFunction('Hello from outside') returns a function.
('Hello from inside') calls that returned function with a parameter.
It is like writing the inner function inline, right after the call to the outer function.

Analogy

Think of outerFunction as a factory that creates customized stampers.

outerFunction('Hello from outside')

You tell the factory to create a stamper that remembers the phrase "Hello from outside".
The factory makes that stamper and gives it to you.
('Hello from inside')

You immediately use the stamper you received, and also give it some ink. The ink will be used to print with the previously set phrase.
The stamper prints "Outer Variable: Hello from outside" and "Inner Variable: Hello from inside."
const testFunction = outerFunction('Hello from outside');

The factory makes a stamper and give it to you. You save it for later in testFunction.
testFunction('Hello from inside');
You use the stamper and also give it some ink.
Key Takeaway

The outerFunction('Hello from outside')('Hello from inside') syntax is a direct way of demonstrating how closures work:

The outer function sets up the enclosed environment.
The inner function, returned by the outer function, remembers that environment.
You immediately invoke the returned function.
You were spot on in recognizing this equivalence. It's a great indication that you're understanding closures very well!
*/