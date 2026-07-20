/*
=================================================
Topic: forEach and Chaining Methods

Definition:
forEach executes a callback for each element, while chaining combines multiple operations.

Why it matters:
Understanding chaining helps write cleaner functional code.

Interview Points:
- forEach does not return a new array
- Chaining keeps code concise
- Each step returns a new array or value
=================================================
*/

//// Example 1

const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2));
const result = nums.map(n => n + 1).filter(n => n > 2);
console.log(result);

//// Output

2
4
6
[3, 4]

//// Explanation

forEach performs side effects, whereas chaining composes transformations in a readable pipeline.

//// Common Interview Questions

1. Does forEach return a new array?
2. What is method chaining?
