/*
=================================================
Topic: IIFE

Definition:
An IIFE runs immediately after it is defined.

Why it matters:
It is used to create a private scope and avoid global pollution.

Interview Points:
- Syntax wraps a function in parentheses
- Runs once
- Useful for module-like patterns
=================================================
*/

//// Example 1

(function () {
  const secret = 'hidden';
  console.log(secret);
})();

//// Output

hidden

//// Explanation

The function executes immediately and its local variables do not leak globally.

//// Common Interview Questions

1. What does IIFE stand for?
2. Why use an IIFE?
