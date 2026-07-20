/*
=================================================
Topic: Short Circuiting

Definition:
Short circuiting stops evaluation early when the result is already known.

Why it matters:
It is useful for default values and guard clauses.

Interview Points:
- && returns the first falsy value or the last value
- || returns the first truthy value or the last value
- Useful for concise checks
=================================================
*/

//// Example 1

const value = 0;
console.log(value || 5);
console.log(value && 5);

//// Output

5
0

//// Explanation

The logical operators stop early, so the second operand may not be evaluated.

//// Common Interview Questions

1. What is short-circuiting?
2. How does && differ from ||?
