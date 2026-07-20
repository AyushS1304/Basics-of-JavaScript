/*
=================================================
Topic: Closures

Definition:
A closure occurs when a function remembers variables from its outer scope.

Why it matters:
Closures are fundamental in callbacks, modules, and data privacy.

Interview Points:
- Functions keep access to outer scope
- Useful for private state
- Common in async and event code
=================================================
*/

//// Example 1

function makeCounter() {
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();
console.log(counter());

//// Output

1

//// Explanation

The returned function retains access to `count` even after `makeCounter` returns.

//// Common Interview Questions

1. What is a closure?
2. Why are closures useful?
