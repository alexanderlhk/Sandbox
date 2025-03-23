// Promise Practice - https://www.perplexity.ai/search/what-are-promise-objects-in-ja-CN0.CtTHRX6hQGMVpIpzFQ

// CHAINING WITH CALCULATIONS

const add = (x, y) => {
    return new Promise ((resolve, reject) => {
        const sum = x + y;
        if (sum) resolve (sum);
        else reject("Addition has failed");
    });
};

const subtract = (x, y) => {
    return new Promise ((resolve, reject) => {
        const difference = x - y;
        if (difference) resolve (difference);
        else reject ("Subtraction has failed");
    });
};

const addValue = Math.floor(Math.random() * (10 - 1 + 1) + 1); // generates a random value from 1 to 10
const subtractValue = Math.floor(Math.random() * (10 - 1 + 1) + 1); // generates a random value from 1 to 10

add (addValue, subtractValue)
    .then((sum) => {
        console.log(`Sum: ${sum}`);
        return subtract (sum, 2);
    })
    .then((difference) => {
        console.log(`Difference: ${difference}`);
    })
    .catch((error) => {
        console.log(error); 
    });

// Functions that are built into Promise Constructors

// resolve(): Marks the promise as fulfilled and provides a value.
// reject(): Marks the promise as rejected and provides an error reason
// Note: the resolve and reject functions in a JavaScript Promise do not have to be named specifically as resolve and reject. These are simply parameter names passed to the executor function of a promise. You can rename them to any valid variable names, but their functionality remains the same. What matters is the order of the parameters, not their names.
// Yes, the value and error parameters in the .then() and .catch() methods can be renamed. These are simply variable names used to represent the resolved value or the rejection reason, respectively. You can choose any valid JavaScript variable name for them.

// .then() is used to handle the resolved value of a promise.
// .catch() is used to handle errors or rejections.
// No, .then() and .catch() do not "call" or "evoke" the promise itself. Instead, they are used to attach callback functions to handle the resolved or rejected state of a promise. When a promise transitions from its pending state to either fulfilled (resolved) or rejected, the corresponding callback attached via .then() or .catch() is executed.

/*
 const promise = new Promise((resolve, reject) => {
    <logic to resolve or reject the promise></logic>
    });
*/


    // PROMISE.ALL() - Promise.all() takes an array of promises and returns a single promise that resolves when all the promises are fulfilled or rejects if any promise is rejected. It is useful when you want to wait for all promises to resolve successfully.

const promise1 = Promise.resolve("First Promise");
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second Promise"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Third Promise"));

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(`All Promises Resolved: ${values}`); // All Promises Resolved: First Promise,Second Promise,Third Promise
    })
    .catch((error) => {
        console.log(`One of the Promises was Rejected: ${error}`);
    });

//PROMISE.ALLSETTLED() - Promise.allSettled() returns a single promise that resolves after all input promises settle (either resolved or rejected). It provides the status and result of each promise.

const promise4 = Promise.resolve("First Promise");
const promise5 = new Promise((reject) => setTimeout(reject, 1000, "Second Promise Rejected"));
const promise6 = new Promise((resolve) => setTimeout(resolve, 2000, "Third Promiose"));

Promise.allSettled([promise4, promise5, promise6])
    .then((results) => {
        console.log(`All Promises Settled: ${results}`)
    });

    // How to print the value of a promise
promise4.then((value) => {
    console.log(`The value is: ${value}`)
}); // The value is: First Promise

// PASSING MULTIPLE ARGUMENTS TO RESOLVE AND REJECTED


// Only the First Argument Matters: When calling resolve or reject, only the first argument is used by default in .then() or .catch(). If you need to pass multiple values, consider using an object or array as the first argument.
const myPromise1 = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
        resolve("Success!", "Additional Information");
    } else {
        reject(new Error("Operation Failed"), "Extra Error Information");
    }
});

myPromise1
    .then((value, extraInfo) => {
        console.log(value); // Success!
        console.log(extraInfo); // undefined
    })
    .catch((error, extraInfo) => {
        console.log(error);
        console.log(extraInfo);
    });

    // Passing Multiple Values: To pass multiple values, you can wrap them in an object or array and pass that as the first argument.

    const myPromise2 = new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve({message: "Success always", data: "Additional Info"});
        } else {
            reject({error: new Error("Operation Always fails"), info: "Extra Error Info"});
        }
    });

    myPromise2
        .then((result) => {
            console.log((result.message)); // Success always
            console.log((result.data)); // Additional Info
        })
        .catch((error) => {
            console.log(error.error);
            console.log(error.info);
        });