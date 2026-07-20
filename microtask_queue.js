/*
=================================================
Topic: Microtask Queue

Definition:
The microtask queue holds tasks like Promise callbacks that run before the next macrotask.

Why it matters:
It affects ordering in async code and is often tested in interviews.

Interview Points:
- Promise callbacks go to the microtask queue
- Microtasks run before timers and other macrotasks
- They are processed after the current stack completes
=================================================
*/

//// Example 1

Promise.resolve().then(() => console.log('microtask'));
setTimeout(() => console.log('timer'), 0);
console.log('sync');

//// Output

sync
microtask
timer

//// Explanation

Promise callbacks are microtasks and run before the timer callback.

//// Common Interview Questions

// What is a microtask?
// Why do promises run before timers?
