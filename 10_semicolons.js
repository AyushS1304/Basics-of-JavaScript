/*
=================================================
Topic: Semicolons

Definition:
Semicolons terminate statements.

Why it matters:
They are optional in JavaScript but recommended for clarity.

Interview Points:
- Semicolons prevent ambiguous parsing
- Many style guides recommend them
- Automatic semicolon insertion can surprise you
=================================================
*/

//// Example 1

const a = 1
const b = 2
console.log(a + b)

//// Output

3

//// Explanation

Although JavaScript can often infer statement boundaries, explicit semicolons reduce confusion and bugs.

//// Common Interview Questions

1. Are semicolons required in JavaScript?
2. What is automatic semicolon insertion?
