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
