/*
=================================================
Topic: Hoisting

Definition:
Hoisting moves declarations to the top of their scope during execution.

Why it matters:
It is often misunderstood in interviews because behavior differs for var, let, and const.

Interview Points:
- var declarations are hoisted and initialized as undefined
- let and const are hoisted but remain in the TDZ
- Function declarations are hoisted fully
=================================================
*/

//// Example 1

console.log(x);
var x = 5;

//// Output

undefined

//// Explanation

The variable exists but has not been assigned yet when the log runs.

//// Common Interview Questions

1. What is hoisting?
2. Why does var behave differently from let?
