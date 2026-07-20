/*
=================================================
Topic: call, apply, bind

Definition:
These methods control the this binding of a function.

Why it matters:
They are often asked in interviews because they show deep understanding of JavaScript.

Interview Points:
- call invokes a function with an explicit this
- apply accepts arguments as an array
- bind returns a new function with a fixed this
=================================================
*/

//// Example 1

function greet(city) { console.log(`${this.name} lives in ${city}`); }
const person = { name: 'Ria' };
greet.call(person, 'Delhi');

//// Output

Ria lives in Delhi

//// Explanation

call sets the `this` value explicitly for the function call.

//// Common Interview Questions

1. What does call do?
2. What is the difference between call and apply?
