/*
=================================================
Topic: Callback Queue

Definition:
The callback queue stores tasks that are ready to run after the call stack is empty.

Why it matters:
It is key to understanding asynchronous execution order.

Interview Points:
- Timers and events are placed in the queue
- The event loop moves them to the stack when possible
- Order depends on timing and readiness
=================================================
*/

//// Example 1

setTimeout(() => console.log('queued task'), 0);
console.log('sync task');

//// Output

sync task
queued task

//// Explanation

The synchronous log runs first. The timer callback is queued for later.

//// Common Interview Questions

// What is the callback queue?
// How is it different from the call stack?
