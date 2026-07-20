/*
=================================================
Topic: Pass by Value vs Reference

Definition:
Primitive values are passed by value, while objects are passed by reference.

Why it matters:
This distinction matters for mutation and copying behavior.

Interview Points:
- Primitives are copied
- Objects share references
- Changes to objects affect all references
=================================================
*/

//// Example 1

let a = 1;
let b = a;
b = 2;
console.log(a);

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
console.log(obj1.x);

//// Output

1
2

//// Explanation

Changing `b` does not change `a`, while changing `obj2.x` changes `obj1.x` because they reference the same object.

//// Common Interview Questions

1. What is passed by value?
2. What is passed by reference?
