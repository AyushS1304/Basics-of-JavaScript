/*
=================================================
Topic: Call Stack

Definition:
The call stack is the mechanism that tracks function execution order.

Why it matters:
It explains how JavaScript executes synchronous code and why stack overflow can happen.

Interview Points:
- Functions are pushed onto the stack when called
- The stack is LIFO
- Synchronous work runs until the stack is empty
=================================================
*/

//// Example 1

function first() {
  console.log('first');
}

function second() {
  first();
  console.log('second');
}

second();

//// Output

first
second

//// Explanation

The call stack executes `second`, which calls `first`, and then returns.

//// Common Interview Questions

// What is the call stack?
// Why is it LIFO?
