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