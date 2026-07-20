/*
=================================================
Topic: Recursion

Definition:
Recursion is when a function calls itself to solve a smaller version of the same problem.

Why it matters:
It is common in interviews for tree, factorial, and Fibonacci-style problems.

Interview Points:
- Needs a base case
- Can lead to stack overflow if not controlled
- Useful for divide-and-conquer problems
=================================================
*/

//// Example 1

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//// Output

120

//// Explanation

The function reduces the problem until it reaches the base case.

//// Common Interview Questions

1. What is a base case?
2. Why can recursion cause stack overflow?
