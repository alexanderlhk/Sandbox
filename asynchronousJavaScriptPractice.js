// Asynchronous JavaScript Practice - https://www.perplexity.ai/search/does-promises-in-javascript-on-T7fwFSJyR8utDyxzF_Lb6g

// Promise

Promise.resolve().then(() => {console.log(2)}); // console log in the function processed second.
console.log(1); // will be processed first synchronously

// 1
// 2

// setTimeout function

console.log("First message");

setTimeout(() => {
    console.log("Second message");

}, 2000);

console.log("Third message");

// First message
// Third message
// Second message

// setInterval function

let count = 0;
const intervalId = setInterval(() => {
    count += 1;
    console.log(`Count: ${count}`);
    if (count === 5) clearInterval(intervalId); // Stop after 5 iterations
}, 1000);

console.log(intervalId);

// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// Fetch API 
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].commit.message))
  .catch(error => console.error('Error:', error));
// Output: Logs the latest commit message from the GitHub repository

// Promises

const aSyncTask =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task completed'), 1000);
});

aSyncTask.then(result => console.log(result));

// Task completed

// Async/Await functions

async function fetchData() {
    console.log("Fetching data...");
    const response = await fetch('https://api.github.com');
    const data = await response.json();
    console.log("Data fetched:", data);
  }
  
  fetchData();
  console.log("This runs before data is fetched");
  // Output:
  // Fetching data...
  // This runs before data is fetched
  // Data fetched: [API response]

  // Event Listeners

  document.querySelector('button').addEventListener('click', () => {
    console.log("Button clicked!");
  });
  // Output: Logs "Button clicked!" whenever the button is clicked

