/*
=================================================
Topic: Data Types

Definition:
JavaScript has primitive and reference data types.

Why it matters:
Interviewers often test your understanding of type behavior and memory.

Interview Points:
- String, Number, Boolean, Null, Undefined, Symbol, BigInt are primitives
- Objects, arrays, and functions are reference types
- Primitive values are copied by value
=================================================
*/

//// Example 1

const text = 'hello';
const num = 10;
const flag = true;
const person = { name: 'Ria' };
console.log(typeof text, typeof num, typeof flag, typeof person);

//// Output

string number boolean object

//// Explanation

typeof helps identify the runtime type. Reference types share the same object identity.

//// Common Interview Questions

1. What are primitive data types?
2. What is the difference between primitive and reference types?
