/*
=================================================
Topic: String Methods

Definition:
String methods help inspect and transform text.

Why it matters:
They are often used in interviews for parsing and validation.

Interview Points:
- trim removes whitespace
- toUpperCase and toLowerCase change case
- includes checks substring presence
=================================================
*/

//// Example 1

const text = '  Hello  ';
console.log(text.trim());
console.log(text.toUpperCase());

//// Output

Hello
HELLO

//// Explanation

String methods return new strings and leave the original unchanged.

//// Common Interview Questions

1. What does trim do?
2. Why are string methods useful?
