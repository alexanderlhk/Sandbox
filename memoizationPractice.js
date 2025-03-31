// Memoization - https://www.perplexity.ai/search/what-is-memoizing-in-javascrip-cpY06Yy4RLq1yJht7aE9Ow

function factorial(n, memo = {}) {
    if (n === 0 || n === 1) {
      return 1;
    }
    if (n in memo) {
      console.log(`Result for ${n} is cached: ${memo[n]}`); // See what is cached in the memo
      return memo[n]; // Return cached result
    }
    console.log(`Result for ${n} is not cached yet.`); // See what is not cached in Memo
    const result = n * factorial(n - 1, memo);
    memo[n] = result; // Cache the result
    console.log(`Result for ${n} is now cached: ${memo[n]}`); // Check if its cached in memo
    return result;
  }
  
  // Example usage:
console.log(factorial(5)); // Computes and caches factorial(5) - The first call to factorial(5) computes the factorial and caches the intermediate results.
console.log(factorial(4)); // Returns cached result - The second call to factorial(5) returns the cached result directly, avoiding redundant computation.

// Improved example demonstrating memoization
 function factorial2(n, memo = {}) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n in memo) {
    console.log(`Result for ${n} is cached: ${memo[n]}`);
    return memo[n]; // Return cached result
  }
  
  console.log(`Computing result for ${n}...`);
  const result = n * factorial(n - 1, memo);
  memo[n] = result; // Cache the result
  console.log(`Result for ${n} is now cached: ${memo[n]}`);
  
  return result;
}

// Example usage:
console.log(factorial2(5)); // Computes and caches factorial(5)
console.log(factorial2(5)); // Returns cached result
console.log(factorial2(4)); // Should return cached result for 4 without recomputing
console.log(factorial2(3)); // Should return cached result for 3 without recomputing

/*

The first call to factorial(5) will compute and cache results for all values down to 1.

The second call to factorial(5) will return the cached result directly.

The call to factorial(4) should now return a cached result without recomputing anything.

The call to factorial(3) should also return a cached result.


Computing result for 5...
Result for 4 is not cached yet.
Result for 3 is not cached yet.
Result for 2 is not cached yet.
Result for 2 is now cached: 2
Result for 3 is now cached: 6
Result for 4 is now cached: 24
Result for 5 is now cached: 120
120
Computing result for 5...
Result for 4 is not cached yet.
Result for 3 is not cached yet.
Result for 2 is not cached yet.
Result for 2 is now cached: 2
Result for 3 is now cached: 6
Result for 4 is now cached: 24
Result for 5 is now cached: 120
120
Computing result for 4...
Result for 3 is not cached yet.
Result for 2 is not cached yet.
Result for 2 is now cached: 2
Result for 3 is now cached: 6
Result for 4 is now cached: 24
24
Computing result for 3...
Result for 2 is not cached yet.
Result for 2 is now cached: 2
Result for 3 is now cached: 6
6
*/