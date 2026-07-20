/*
=================================================
Topic: Ternary Operator

Definition:
The ternary operator is a compact if/else expression.

Why it matters:
It is useful for short conditional assignments.

Interview Points:
- Syntax is condition ? trueValue : falseValue
- Good for concise code
- Avoid nesting for readability
=================================================
*/

//// Example 1

const age = 18;
const status = age >= 18 ? 'adult' : 'minor';
console.log(status);

//// Output

adult

//// Explanation

The condition is evaluated, and one of the two values is selected.

//// Common Interview Questions

1. What is the syntax of the ternary operator?
2. When should you avoid using it?
