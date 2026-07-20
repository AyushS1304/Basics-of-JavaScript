/*
=================================================
Topic: Equality, typeof, and instanceof

Definition:
These operators help compare values and inspect types.

Why it matters:
They are often used in interview questions about type safety.

Interview Points:
- == performs type coercion
- === checks both value and type
- typeof returns a string type tag
- instanceof checks prototype chain
=================================================
*/

//// Example 1

console.log(1 == '1');
console.log(1 === '1');
console.log(typeof 42);

//// Output

true
false
number

//// Explanation

Strict equality avoids coercion surprises, which is why it is preferred in modern code.

//// Common Interview Questions

1. Why is === preferred over ==?
2. What does instanceof check?
