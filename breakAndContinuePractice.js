// Break and Continue JavaScript Practice - https://www.w3schools.com/js/js_break.asp

// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.

const myFunction = () => {
    let text = "";
    let i = 0;
    for (let i = 0; i < 10; i++) {
        if (i === 3) {break; } // stops at "3"
        text += `The number is ${i} \n`;
        
    }
    console.log(text);
    return;
}

myFunction();

// The continue statement: The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

const myFunction2 = () => {
    let text = "";
    let i = 0;
    for (let i = 0; i < 10; i++) {
        if (i === 3) {continue; } // skips the value of "3"
        text += `The number is ${i} \n`;
    }
    console.log(text);
    return;
}

myFunction2();

// JavaScript label break: With a label reference, the break statement can be used to jump out of any code block:
// break labelname;
// continue labelname;

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
list: {
  text += cars[0] + "\n";
  text += cars[1] + "\n";
  break list; // Stops at Volvo
  text += cars[2] + "\n";
  text += cars[3] + "\n";
}
console.log(text);
return;