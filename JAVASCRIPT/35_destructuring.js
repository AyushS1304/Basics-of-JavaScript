/*
=================================================
Topic: Destructuring

Definition:
Destructuring extracts values from arrays and objects concisely.

Why it matters:
It is often used in modern code to simplify access.

Interview Points:
- Array destructuring uses []
- Object destructuring uses {}
- Great for function parameters
=================================================
*/

//// Example 1

const [first, second] = [10, 20];
const { name } = { name: 'Jaya' };
console.log(first, second, name);

//// Output

10 20 Jaya

//// Explanation

The values are unpacked directly into variables.

//// Common Interview Questions

1. What is destructuring?
2. How does object destructuring work?
