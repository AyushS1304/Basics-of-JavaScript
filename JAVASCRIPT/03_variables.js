/*
=================================================
Topic: Variables

Definition:
Variables store data values in memory.

Why it matters:
They are the foundation of any JavaScript program.

Interview Points:
- Use let for mutable values
- Use const for constants
- Avoid var in modern code
=================================================
*/

//// Example 1

let count = 1;
const name = 'Asha';
count += 1;
console.log(count, name);

//// Output

2 Asha

//// Explanation

let allows reassignment, while const prevents it. var has function scope and can cause confusion.

//// Common Interview Questions

1. What is the difference between let and const?
2. Why is var discouraged today?
