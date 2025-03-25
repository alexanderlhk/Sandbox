// https://www.perplexity.ai/search/37863cb8-19ba-4d00-b49f-3da361f7fc4c

const mainFunction = () => {
    console.log("This is the main function starting");

// Simulating some work
    for (let i = 0; i < 10; i++) {
        console.log(`Doing work: ${i}`);
    };

// Queue a microtask to perform a cleanup after the main execution
// Microtask queue will execute before the task queue
queueMicrotask(() => { // Microtask queue
    console.log("Cleanup is performed as a microtask");
});

console.log("Main function is completed");

};

mainFunction();


// Include a scheduled timeout (Task queue)

setTimeout(() => {
    console.log("This is the scheduled timeout");
}, 0);

// Results

/*
This is the main function starting
Doing work: 0
Doing work: 1
Doing work: 2
Doing work: 3
Doing work: 4
Doing work: 5
Doing work: 6
Doing work: 7
Doing work: 8
Doing work: 9
Main function is completed
Cleanup is performed as a microtask
This is the scheduled timeout
*/