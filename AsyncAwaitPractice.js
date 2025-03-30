// Async/Await (syntax sugar) - https://www.perplexity.ai/search/i-want-to-learn-about-async-aw-lmrsCdnBSkqTmlZgFHjtFA

/*
Async: Declare a function that returns a promise explicitly or implicitly
Await: used inside the Async function to pause execution of the function until a promise is resolved or rejected.
i.e. Await is part of Async.

When you declare a function with async, it automatically returns a promise. If the function doesn't explicitly return a promise, it will implicitly return one resolved with the return value.
Await Keyword: Inside an async function, await pauses the execution until the promise it's waiting for is resolved or rejected. If the promise resolves, it returns the resolved value; if it rejects, it throws an error.
Error Handling: Use try/catch blocks to handle errors. If an awaited promise rejects, it throws an error that can be caught by the catch block.
Thenable Objects: await can also be used with thenable objects, which are objects that have a then() method.

*/

async function myFunction1() {
    let result = await new Promise((resolve) => {
        setTimeout(() => resolve("done!"), 1000);
    });
    console.log(result);
    return;
}

myFunction1(); // done!

// Including Error Handling

async function withErrorHandling() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Something went wrong");
            }, 1000);
            });
            console.log(result);
        } catch (err) {
            console.log(err);
        }
}

withErrorHandling(); // Something went wrong

// using fetch() as a use case

async function fetchData3() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

fetchData3(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

/*
When to use Async/Await and when to use Promises:
- Use promises with methods like Promise.all() or Promise.race() when you need to handle multiple asynchronous operations concurrently (Example: Fetching data from multiple APIs simultaneously.)
- If your asynchronous operation is straightforward (e.g., a single API call), .then() chaining can suffice without adding complexity.
- Promises are necessary in the outermost scope, where you cannot use await directly (e.g., outside an async function)
*/

// Examples with and without Async/Await

// Without Async/Await - Using a Promise chaining
function fetchData1() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchData1(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// With Async/Await

async function fetchData2() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData2(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }