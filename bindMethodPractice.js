// bind() method - https://www.perplexity.ai/search/how-does-call-and-apply-method-DB5Y3Zr0QUKNJ8kay4oGxw

/* 
The bind() method in JavaScript is a powerful tool used to create a new function with a specified this value and optional 
initial arguments. It allows an object to borrow a method from another object without copying it, 
ensuring that the this keyword inside the function refers to the specified object when invoked.
*/


// Syntax: func.bind(thisArg, arg1, arg2, ...argN)

const author = {
    name: "Alex",
    topics: ["Entrepreneurship", "Finance", "Economics"]
};

function authorIntro(location) {
    return `I'm ${this.name} and I write about ${this.topics.join(", ")} based in ${location}.`;
}

const singaporeAuthor = authorIntro.bind(author);
console.log(singaporeAuthor("Singapore")); // I'm Alex and I write about Entrepreneurship, Finance, Economics based in Singapore.

// Function Borrowing

const student1 = {
    name: "Alex",
    grade: 5,
    introduction: function() {
        console.log(`${this.name} studies in grade ${this.grade}.`);
    }
};

const student2 = {
    name: "Jim",
    grade: 6
};

let ulitmateStudent = student1.introduction.bind(student2); // ultimateStudent is a function as bind() method creates a new bound function.
ulitmateStudent(); // Jim studies in grade 6.

// Accepting additional arguments at runtime

function greet(greeting) {
return `${greeting}, ${this.name}`;
}

let person = { name: "Alex" };
let greetNow = greet.bind(person);
console.log(greetNow("Hello")); // Hello, Alex