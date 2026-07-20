/*
=================================================
Topic: Spread Operator

Definition:
The spread operator expands iterable values into individual elements.

Why it matters:
It is widely used with arrays and objects.

Interview Points:
- Use ... to expand elements
- Copies arrays without mutating the original
- Works in object literals in modern JavaScript
=================================================
*/

//// Example 1

const arr1 = [1, 2];
const arr2 = [...arr1, 3];
console.log(arr2);

//// Output

[1, 2, 3]

//// Explanation

Spread copies the values into a new array, which is useful for immutability.

//// Common Interview Questions

1. What is the spread operator?
2. Why is it useful with arrays?
