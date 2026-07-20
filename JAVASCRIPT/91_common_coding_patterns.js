/*
=================================================
Topic: Common Coding Patterns

Definition:
Common coding patterns help solve repeated interview problems cleanly and quickly.

Why it matters:
Recognizing them improves performance and clarity.

Interview Points:
- Two pointers are useful for sorted arrays
- Sliding window handles subarrays
- Hash maps optimize lookups
=================================================
*/

//// Example 1

const seen = new Set();
seen.add(1);
console.log(seen.has(1));

//// Output

true

//// Explanation

The pattern uses a hash-based structure to check membership quickly.

//// Common Interview Questions

1. What is a common pattern in interviews?
2. Why do patterns matter?
