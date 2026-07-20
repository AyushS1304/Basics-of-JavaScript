/*
=================================================
Topic: Web APIs

Definition:
Web APIs are browser-provided features that JavaScript can use for async work.

Why it matters:
They enable timers, DOM events, and network requests without blocking the main thread.

Interview Points:
- Browser provides APIs like setTimeout and fetch
- They run outside the main call stack
- Results are sent back through queues
=================================================
*/

//// Example 1

console.log('start');
setTimeout(() => console.log('timer'), 0);
console.log('end');

//// Output

start
end
timer

//// Explanation

The timer callback is handed to the browser API and runs later.

//// Common Interview Questions

// What are Web APIs?
// Why do they help avoid blocking?
