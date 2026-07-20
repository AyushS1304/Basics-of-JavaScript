/*
=================================================
Topic: Remove Duplicates

Definition:
Removing duplicates keeps a collection unique.

Why it matters:
This is a common interview exercise.

Interview Points:
- Use a Set for simple deduplication
- Preserve order when possible
- Works well for arrays of primitives
=================================================
*/

//// Example 1

const values = [1, 2, 2, 3];
console.log([...new Set(values)]);

//// Output

[1, 2, 3]

//// Explanation

A Set stores unique values, and the spread operator converts it back to an array.

//// Common Interview Questions

1. Why is Set useful for duplicates?
2. Does Set preserve order?
