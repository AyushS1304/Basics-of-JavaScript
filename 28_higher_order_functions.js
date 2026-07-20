/*
=================================================
Topic: Higher Order Functions

Definition:
A higher-order function takes or returns another function.

Why it matters:
They are foundational in functional programming.

Interview Points:
- Accept callbacks
- Return functions
- Common in array helpers
=================================================
*/

//// Example 1

const double = n => n * 2;
const applyTwice = fn => x => fn(fn(x));
console.log(applyTwice(double)(3));

//// Output

12

//// Explanation

The function `applyTwice` returns a new function, making it a higher-order function.

//// Common Interview Questions

1. What is a higher-order function?
2. What is the difference from a callback?
