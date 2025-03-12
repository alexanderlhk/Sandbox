// Set Objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4} - combination of Set Values + Map Keys
console.log(a.difference(b)); // Set(1) { 3 } - What a has that b doesnt have / what is unique to a
console.log(a.intersection(b)); // Set(2) { 1, 2 } - commonality between Set Values + Map Keys
console.log(a.isSubsetOf(b)); // false - a is not part of b
console.log(a.isSupersetOf(b)); // false - b is not part of a
console.log(a); // Set(3) { 1, 2, 3 } - Set a
console.log(b); // Map(3) { 1 => 'one', 2 => 'two', 4 => 'four' } - Map b
console.log(a.symmetricDifference(b)); // Set(2) { 3, 4 } - What a has that b doesnt, an what b has that a doesnt.
console.log(a.isDisjointFrom(b)); //false - a and b are not mutually exclusive.

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }