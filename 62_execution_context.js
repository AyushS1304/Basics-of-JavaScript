/*
=================================================
Topic: Execution Context

Definition:
Execution context is the environment in which JavaScript code runs.

Why it matters:
It stores variables, scope, and the this binding.

Interview Points:
- Global execution context runs top-level code
- Function execution context is created for each invocation
- Each context has its own scope chain
=================================================
*/

//// Example 1

function greet() { console.log('hi'); }
greet();

//// Output

hi

//// Explanation

Calling the function creates a new execution context for that invocation.

//// Common Interview Questions

1. What is execution context?
2. What is created when a function is called?
