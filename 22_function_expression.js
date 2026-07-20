/*
=================================================
Topic: Function Expression

Definition:
A function expression assigns a function to a variable.

Why it matters:
It is not hoisted in the same way as a function declaration.

Interview Points:
- Assigned to a variable
- Often anonymous or named
- Useful for callbacks
=================================================
*/

//// Example 1

const add = function (a, b) { return a + b; };
console.log(add(2, 3));

//// Output

5

//// Explanation

The function is created at runtime and stored in the variable.

//// Common Interview Questions

1. What is a function expression?
2. How is it different from a declaration?
