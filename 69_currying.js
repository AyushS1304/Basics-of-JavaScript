/*
=================================================
Topic: Currying

Definition:
Currying transforms a function with multiple arguments into a chain of single-argument functions.

Why it matters:
It is useful in functional programming and reusable function composition.

Interview Points:
- Each call takes one argument
- Returns another function until all arguments are provided
- Useful for partial application
=================================================
*/

//// Example 1

const add = a => b => a + b;
console.log(add(2)(3));

//// Output

5

//// Explanation

The function returns a new function after receiving the first argument.

//// Common Interview Questions

1. What is currying?
2. Why is it used?
