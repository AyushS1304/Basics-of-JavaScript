/*
=================================================
Topic: Rest Parameters

Definition:
Rest parameters collect multiple arguments into an array.

Why it matters:
They are helpful for functions with variable arity.

Interview Points:
- Use ...args in the last parameter
- Collects remaining arguments
- Great for wrappers and utility functions
=================================================
*/

//// Example 1

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

//// Output

10

//// Explanation

The rest parameter stores all incoming arguments in an array and allows uniform processing.

//// Common Interview Questions

1. What does the rest parameter do?
2. How is it different from spread?
