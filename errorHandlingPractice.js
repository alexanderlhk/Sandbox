// Error Handling in JS - https://www.w3schools.com/js/js_errors.asp

// TRY... CATCH STATEMENT

/*
try {
    Block of code to try
  }
  catch(err) {
    Block of code to handle errors
  }
  */

  try {
    adddalert("Welcome Alex");
  }
  catch(err) {
    console.log(err.message); // adddalert is not defined
  }

  // JavaScript catches adddlert as an error, and executes the catch code to handle it.

  // THROW STATEMENT: The throw statement allows you to create a custom error.
// Stops Execution: When the throw statement is encountered, the JavaScript engine stops executing the code following the throw statement in the current function.

// throw "too large";
// throw 500;

// TRY... CATCH + THROW STATEMENT
// If you use throw together with try and catch, you can control program flow and generate custom error messages.
// Passes Control to a Catch Block: If the throw statement is inside a try block, control is passed to the nearest catch block in the call stack. The catch block can then handle the exception
let x = Math.floor(Math.random() * (10 - 1 + 1) + 1);

//Math.random() * (max - min + 1) + min

const checker = () => {
    try {
        if (x < 5) {
            console.log(x);
            throw "too low";
        } else if (x == 5) {
            console.log(x);
            throw "just right";
        } else {
            console.log(x);
            throw "too high";
        };
    }
    catch (err) {
        console.log(err);
    }
}

checker();
