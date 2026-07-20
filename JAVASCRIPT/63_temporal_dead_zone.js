/*
=================================================
Topic: Temporal Dead Zone

Definition:
The temporal dead zone is the period before a let or const binding is initialized.

Why it matters:
It is a common interview topic because it explains access errors.

Interview Points:
- let and const are in TDZ until initialization
- Access before initialization throws ReferenceError
- var does not have this behavior
=================================================
*/

//// Example 1

console.log(value);
let value = 1;

//// Output

ReferenceError

//// Explanation

The variable is in the TDZ until the declaration line is executed.

//// Common Interview Questions

1. What is the TDZ?
2. Which declarations are affected?
