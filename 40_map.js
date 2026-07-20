/*
=================================================
Topic: map

Definition:
map transforms each element and returns a new array.

Why it matters:
It is one of the most important array methods in interviews.

Interview Points:
- Returns a new array
- Preserves order
- Applies a callback to each element
=================================================
*/

//// Example 1

const nums = [1, 2, 3];
console.log(nums.map(n => n * 2));

//// Output

[2, 4, 6]

//// Explanation

Each element is transformed independently and collected in a new array.

//// Common Interview Questions

1. What does map return?
2. When should you use map?
