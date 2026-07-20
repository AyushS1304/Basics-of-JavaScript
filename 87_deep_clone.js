/*
=================================================
Topic: Deep Clone

Definition:
A deep clone creates a fully independent copy of nested data.

Why it matters:
It avoids accidental mutations between related objects.

Interview Points:
- Use structuredClone when available
- JSON approach works for plain objects
- Be careful with functions and Dates
=================================================
*/

//// Example 1

const original = { user: { name: 'Pia' } };
const clone = structuredClone(original);
clone.user.name = 'Ria';
console.log(original.user.name);

//// Output

Pia

//// Explanation

The clone is independent, so changing the nested value does not affect the original.

//// Common Interview Questions

1. What is a deep clone?
2. Why might structuredClone be preferred?
