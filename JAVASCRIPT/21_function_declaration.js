/*
=================================================
Topic: Function Declaration

Definition:
A function declaration defines a reusable block of code.

Why it matters:
It is hoisted, so it can be called before its definition.

Interview Points:
- Declared with function name()
- Hoisted in execution context
- Can be used before definition
=================================================
*/

//// Example 1

function greet() {
  console.log('Hello');
}

greet();

//// Output

Hello

//// Explanation

Function declarations are hoisted, which is why they can be called before they appear in the code.

//// Common Interview Questions

1. What is a function declaration?
2. Why is hoisting relevant here?
