/*
=================================================
Topic: Type Conversion

Definition:
Type conversion changes a value from one type to another.

Why it matters:
It is common in interviews because coercion can produce surprising results.

Interview Points:
- String conversion is common with template literals
- Number conversion is used for arithmetic
- Boolean conversion is used in conditionals
=================================================
*/

//// Example 1

const value = '5';
console.log(Number(value));
console.log(String(5));
console.log(Boolean(''));

//// Output

5
5
false

//// Explanation

JavaScript converts values implicitly in some cases, so explicit conversion is often safer and clearer.

//// Common Interview Questions

1. What is implicit conversion?
2. Why is explicit conversion preferred?
