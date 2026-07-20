/*
=================================================
Topic: Promise Chaining

Definition:
Promise chaining lets you sequence async operations clearly.

Why it matters:
It avoids deeply nested callbacks and improves readability.

Interview Points:
- Each then returns a new promise
- Errors can be handled in catch
- Chaining keeps async flow linear
=================================================
*/

//// Example 1

Promise.resolve(2)
  .then(value => value * 2)
  .then(value => console.log(value));

//// Output

4

//// Explanation

Each `.then()` receives the previous result and returns another promise.

//// Common Interview Questions

// What is promise chaining?
// How do you handle errors in a chain?
