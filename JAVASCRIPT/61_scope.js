/*
=================================================
Topic: Scope

Definition:
Scope defines where variables are accessible.

Why it matters:
Understanding scope is crucial for debugging and writing clean code.

Interview Points:
- Global scope is accessible everywhere
- Function scope is local to a function
- Block scope is local to braces
=================================================
*/

//// Example 1

let value = 1;
function test() { let value = 2; console.log(value); }
test();

//// Output

2

//// Explanation

The inner function variable shadows the outer one within the function.

//// Common Interview Questions

1. What is scope?
2. What is shadowing?
