/*
=================================================
Topic: Callback Functions

Definition:
A callback is a function passed into another function.

Why it matters:
Callbacks are central to asynchronous JavaScript and event handling.

Interview Points:
- They allow delayed execution
- Common in array methods and events
- Can be synchronous or asynchronous
=================================================
*/

//// Example 1

function greet(name, callback) {
  callback(name);
}

greet('Mina', value => console.log(`Hello, ${value}`));

//// Output

Hello, Mina

//// Explanation

The callback receives the value and runs at the appropriate time.

//// Common Interview Questions

1. What is a callback?
2. Why are callbacks used?
