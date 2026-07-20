/*
=================================================
Topic: Operators

Definition:
Operators perform actions on values and variables.

Why it matters:
They are used in expressions, comparisons, and control flow.

Interview Points:
- Arithmetic operators do math
- Comparison operators test values
- Logical operators combine conditions
=================================================
*/

//// Example 1

const a = 10;
const b = 3;
console.log(a + b);
console.log(a > b);
console.log(a && b);

//// Output

13
true
3

//// Explanation

The logical AND operator returns the second operand if the first is truthy, which is a common interview point.

//// Common Interview Questions

1. What is the difference between && and ||?
2. What does a % b return?
