// While Loop Javascript - https://www.w3schools.com/js/js_loop_while.asp

// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.


// WHILE LOOPS

let text = "";
let text2 = "";
let text3 = "";
let i = 0;
let y = 0;
let z = 0

while (i < 10) {
    text += "The number is " + i + "\n";
    i++; // must increment the counter to avoid endless repeat of execution
}

console.log(text);

// DO WHILE LOOPS: The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

do { // will trigger for the first time no matter what.
    text2 += "The number is " + y + "\n";
    y++;
}
while (y < 10);

console.log(text2);

do { // will trigger for the first time no matter what.
    text3 += "The number is " + z + "\n";
    z++;
}
while (z < 0); // will not execute after the first execution of the code block within do.

console.log(text3);

// If you use a variable in the condition, you must initialize it before the loop, and increment it within the loop. Otherwise the loop will never end. This will crash your browser.

// If the condition is always true, the loop will never end. This will also crash your browser.

