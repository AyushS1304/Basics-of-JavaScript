/*
=================================================
Topic: let vs const vs var

Definition:
These keywords declare variables with different scoping and mutability rules.

Why it matters:
Interviewers often ask this because it shows command of modern JavaScript.

Interview Points:
- var is function-scoped
- let is block-scoped and mutable
- const is block-scoped and immutable by binding
=================================================
*/

//// Example 1

if (true) {
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x);

//// Output

1

//// Explanation

var leaks out of the block, while let and const stay scoped to the block.

//// Common Interview Questions

1. What is the difference between var and let?
2. Why is const preferred for constants?
