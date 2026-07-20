/*
=================================================
Topic: Deep Copy and Shallow Copy

Definition:
A shallow copy copies the top level, while a deep copy copies nested values too.

Why it matters:
This distinction is important for preventing accidental shared mutations.

Interview Points:
- Shallow copy copies references for nested objects
- Deep copy duplicates nested structures
- Useful for immutable updates
=================================================
*/

//// Example 1

const original = { a: { b: 1 } };
const shallow = { ...original };
shallow.a.b = 2;
console.log(original.a.b);

//// Output

2

//// Explanation

The nested object is shared, so changing it affects the original.

//// Common Interview Questions

1. What is a shallow copy?
2. Why is a deep copy different?
