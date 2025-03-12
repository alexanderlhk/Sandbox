// Map Object practice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map\

const myMap = new Map(); //construct a new Map when it's called.

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

console.log(myMap.get("a"));
console.log(myMap.get("b"));
console.log(myMap.get("c"));

console.log(myMap.get(1)); // Undefined

myMap.set("a", 97);

console.log(myMap.get("a")); //97
console.log(myMap.size); //3

myMap.delete("a"); // delete a key-value pair
console.log(myMap.size); //2

myMap.clear(); // clears entire Map object
console.log(myMap.size); //0


