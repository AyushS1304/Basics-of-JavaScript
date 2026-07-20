/*
=================================================
Topic: Prototype Chain

Definition:
Objects inherit properties and methods from their prototype chain.

Why it matters:
Prototype-based inheritance is central to JavaScript.

Interview Points:
- Every object has a prototype
- The chain ends at Object.prototype
- Property lookup walks up the chain
=================================================
*/

//// Example 1

const dog = { bark() { console.log('woof'); } };
dog.bark();

//// Output

woof

//// Explanation

The method is found by walking up the prototype chain.

//// Common Interview Questions

1. What is a prototype chain?
2. What is the end of the chain?
