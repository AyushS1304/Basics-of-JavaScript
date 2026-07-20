/*
=================================================
Topic: delete, in operator, Truthy/Falsy

Definition:
These concepts help reason about values and object properties.

Why it matters:
They are common in interview questions about conditionals and object manipulation.

Interview Points:
- delete removes object properties
- in checks property existence
- Truthy and falsy values affect conditionals
=================================================
*/

//// Example 1

const obj = { a: 1 };
delete obj.a;
console.log('a' in obj);
console.log(Boolean(''));

//// Output

false
false

//// Explanation

The property was removed, so `in` returns false, and the empty string is falsy.

//// Common Interview Questions

1. What does delete do?
2. What values are falsy in JavaScript?
