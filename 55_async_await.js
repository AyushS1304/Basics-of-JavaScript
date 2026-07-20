/*
=================================================
Topic: async/await

Definition:
async/await makes asynchronous code look synchronous.

Why it matters:
It is easier to read than nested promise chains.

Interview Points:
- async makes a function return a Promise
- await pauses execution until a Promise settles
- Use try/catch with await
=================================================
*/

//// Example 1

async function load() {
  return 'loaded';
}
load().then(console.log);

//// Output

loaded

//// Explanation

The async function wraps the returned value in a Promise.

//// Common Interview Questions

1. What does async do?
2. What does await do?
