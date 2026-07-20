/*
=================================================
Topic: Promises

Definition:
Promises represent asynchronous operations that eventually resolve or reject.

Why it matters:
They are the foundation of modern async programming in JavaScript.

Interview Points:
- Use new Promise
- Resolve or reject once
- Use then and catch for handling
=================================================
*/

//// Example 1

const promise = new Promise(resolve => resolve('done'));
promise.then(value => console.log(value));

//// Output

done

//// Explanation

The promise resolves asynchronously, and the handler runs when it settles.

//// Common Interview Questions

1. What is a Promise?
2. What is the difference between resolve and reject?
