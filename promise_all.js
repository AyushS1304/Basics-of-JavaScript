/*
=================================================
Topic: Promise.all

Definition:
Promise.all waits for all promises to resolve and returns their results in order.

Why it matters:
It is useful when multiple async tasks must complete together.

Interview Points:
- Rejects immediately if any promise rejects
- Preserves input order in the result array
- Good for parallel work
=================================================
*/

//// Example 1

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(results => console.log(results));

//// Output

[1, 2]

//// Explanation

The returned promise resolves only after all input promises resolve.

//// Common Interview Questions

// What happens if one promise rejects?
// What does Promise.all return?
