// For In and For Of Loops - https://www.perplexity.ai/search/what-is-the-difference-between-OLxVD1T9RLOzwJuRk6MWJA

/*
Think of it like a library:

Use for...of when working with iterable objects like arrays, strings, sets, or maps to access their values.

Use for...in when working with objects to access their keys or property names.

This analogy helps you remember that for...of is for accessing the content (values), while for...in is for accessing the labels (keys).
*/

// For In for arrays

const forInArr = ["JavaScript", "PHP", "Python", "Java"];
for (let key in forInArr) {
    console.log(key + ": " + forInArr[key]); // key is the index of the value of the array
}
// Output:
// "0: JavaScript"
// "1: PHP"
// "2: Python"
// "3: Java"

// for...of is like reading the books (values) on the shelves.

const forOfArr = ["JavaScript", "PHP", "Python", "Java"];
for (let key of forOfArr) {
    console.log(key + ": " + forOfArr[key]); // key is the value of the array
}

// Output:
// JavaScript: undefined
// PHP: undefined
// Python: undefined
// Java: undefined

// for...in is like reading the titles (keys) on the spines of the books.

