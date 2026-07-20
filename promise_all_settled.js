/*
=================================================
Topic: Promise.allSettled

Definition:
Promise.allSettled waits for all promises to settle, even if some reject.

Why it matters:
It is useful when you want results from all operations without failing fast.

Interview Points:
- Never rejects because of one failure
- Returns an array of outcome objects
- Good for batch operations
=================================================
*/

//// Example 1

Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail')
]).then(results => console.log(results));

//// Output

[{ status: 'fulfilled', value: 'ok' }, { status: 'rejected', reason: 'fail' }]

//// Explanation

Each promise settles, and the result contains the status and outcome.

//// Common Interview Questions

// How is allSettled different from all?
// When would you use it?
