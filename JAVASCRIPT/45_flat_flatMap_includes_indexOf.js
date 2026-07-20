/*
=================================================
Topic: flat, flatMap, includes, indexOf

Definition:
These helpers deal with nested arrays and membership checks.

Why it matters:
They are useful for simplifying data handling in interview solutions.

Interview Points:
- flat flattens one level by default
- flatMap maps and flattens
- includes and indexOf check membership
=================================================
*/

//// Example 1

const arr = [1, [2, [3]]];
console.log(arr.flat(2));
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].indexOf(4));

//// Output

[1, 2, 3]
true
-1

//// Explanation

These methods provide concise operations for nested arrays and membership checks.

//// Common Interview Questions

1. What does flat do?
2. What is the difference between includes and indexOf?
