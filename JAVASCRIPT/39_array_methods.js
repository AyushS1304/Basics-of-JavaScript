/*
=================================================
Topic: Array Methods

Definition:
Array methods make collection processing concise and expressive.

Why it matters:
They are heavily used in interviews and real-world code.

Interview Points:
- Use methods for iteration and transformation
- Many methods return new arrays
- Prefer immutability when possible
=================================================
*/

//// Example 1

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);

//// Output

[2, 4, 6]

//// Explanation

Array helpers keep code declarative and easier to read than manual loops.

//// Common Interview Questions

1. Why are array methods popular?
2. What is the benefit of map?
