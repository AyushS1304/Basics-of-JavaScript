/*
=================================================
Topic: Promise.race

Definition:
Promise.race resolves or rejects as soon as the first input promise settles.

Why it matters:
It is useful for timeout-style logic.

Interview Points:
- Settles on the first winner
- Useful for fallback logic
- Can resolve or reject quickly
=================================================
*/

//// Example 1

const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 100));
const fast = Promise.resolve('fast');

Promise.race([slow, fast]).then(value => console.log(value));

//// Output

fast

//// Explanation

The fastest settling promise wins immediately.

//// Common Interview Questions

// What does Promise.race return?
// When is it useful?
