/*
=================================================
Topic: Arrow Functions

Definition:
Arrow functions provide a shorter syntax for function expressions.

Why it matters:
They are common in modern React and functional patterns.

Interview Points:
- Use => syntax
- Do not have their own this
- Best for short callbacks
=================================================
*/

//// Example 1

const square = x => x * x;
console.log(square(4));

//// Output

16

//// Explanation

Arrow functions are concise, but their binding of this is different from regular functions.

//// Common Interview Questions

1. What is the syntax of an arrow function?
2. What is the main difference with this?
