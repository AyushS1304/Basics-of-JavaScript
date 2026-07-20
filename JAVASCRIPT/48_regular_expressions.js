/*
=================================================
Topic: Regular Expressions

Definition:
Regular expressions match patterns in strings.

Why it matters:
They are common in validation, parsing, and interview puzzles.

Interview Points:
- Use /pattern/ syntax
- Use test() to check matches
- Use flags like i and g
=================================================
*/

//// Example 1

const pattern = /java/i;
console.log(pattern.test('JavaScript'));

//// Output

true

//// Explanation

The regex matches the word regardless of case because of the `i` flag.

//// Common Interview Questions

1. What is a regex?
2. What does the i flag do?
