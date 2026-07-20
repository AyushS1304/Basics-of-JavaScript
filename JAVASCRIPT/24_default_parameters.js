/*
=================================================
Topic: Default Parameters

Definition:
Default parameters provide fallback values when arguments are missing.

Why it matters:
They make functions easier to use and safer.

Interview Points:
- Assign defaults directly in the parameter list
- Useful for optional arguments
- Work well with undefined values
=================================================
*/

//// Example 1

function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet();

//// Output

Hello, Guest

//// Explanation

When no argument is passed, the default value is used.

//// Common Interview Questions

1. What are default parameters?
2. When are they useful?
