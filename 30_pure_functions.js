/*
=================================================
Topic: Pure Functions

Definition:
A pure function always returns the same output for the same input and has no side effects.

Why it matters:
Pure functions are easier to test, reason about, and memoize.

Interview Points:
- No mutation of external state
- No dependency on external variables
- Deterministic output
=================================================
*/

//// Example 1

const add = (a, b) => a + b;
console.log(add(2, 3));

//// Output

5

//// Explanation

The result depends only on the inputs, making the function predictable.

//// Common Interview Questions

1. What makes a function pure?
2. Why are pure functions useful?
