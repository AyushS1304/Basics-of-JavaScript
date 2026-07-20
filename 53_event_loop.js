/*
=================================================
Topic: Event Loop

Definition:
The event loop coordinates asynchronous work in JavaScript.

Why it matters:
It is a core concept for understanding non-blocking behavior.

Interview Points:
- Runs continuously
- Coordinates the call stack and queues
- Allows async code without blocking
=================================================
*/

//// Example 1

console.log('start');
setTimeout(() => console.log('later'), 0);
console.log('end');

//// Output

start
end
later

//// Explanation

The synchronous logs run first; the timer callback is deferred until the call stack is clear.

//// Common Interview Questions

1. What does the event loop do?
2. Why does the timer log last?
