/*
=================================================
Topic: Nullish Coalescing

Definition:
Nullish coalescing uses a fallback only when the value is null or undefined.

Why it matters:
It differs from logical OR because it preserves falsey-but-valid values like 0.

Interview Points:
- Use ??
- Covers null and undefined only
- Useful for defaults from user input
=================================================
*/

//// Example 1

const count = 0;
console.log(count ?? 5);

//// Output

0

//// Explanation

The value 0 is not replaced because it is not nullish.

//// Common Interview Questions

1. What does ?? do?
2. How is it different from ||?
