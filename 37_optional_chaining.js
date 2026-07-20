/*
=================================================
Topic: Optional Chaining

Definition:
Optional chaining safely accesses nested properties without throwing errors.

Why it matters:
It helps avoid crashes when data may be missing.

Interview Points:
- Use ?. to access nested properties safely
- Returns undefined instead of throwing
- Helpful with API responses
=================================================
*/

//// Example 1

const user = {};
console.log(user.profile?.name);

//// Output

undefined

//// Explanation

The chain stops safely when a property is missing.

//// Common Interview Questions

1. What is optional chaining?
2. Why is it helpful?
