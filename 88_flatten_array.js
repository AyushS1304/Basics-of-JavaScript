/*
=================================================
Topic: Flatten Array

Definition:
Flattening converts nested arrays into a single-level array.

Why it matters:
It is a common coding challenge in interviews.

Interview Points:
- Use recursion or flat()
- Handle nested arrays of varying depth
- Preserve order
=================================================
*/

//// Example 1

const nested = [1, [2, [3]]];
console.log(nested.flat(2));

//// Output

[1, 2, 3]

//// Explanation

The nested arrays are expanded into a single level.

//// Common Interview Questions

1. What does flattening mean?
2. What is a common approach?
