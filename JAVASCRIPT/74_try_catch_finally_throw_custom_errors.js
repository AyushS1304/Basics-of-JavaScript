/*
=================================================
Topic: try, catch, finally, throw, and Custom Errors

Definition:
These constructs support robust error handling and custom failure cases.

Why it matters:
They are important for defensive programming in interviews and production code.

Interview Points:
- try wraps risky code
- catch handles errors
- finally runs regardless of outcome
- throw creates custom errors
=================================================
*/

//// Example 1

class MyError extends Error { constructor(message) { super(message); this.name = 'MyError'; } }
try { throw new MyError('boom'); } catch (error) { console.log(error.name); }

//// Output

MyError

//// Explanation

A custom error class makes failure cases more expressive.

//// Common Interview Questions

1. What does finally do?
2. Why use a custom error?
