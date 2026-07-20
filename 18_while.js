/*
=================================================
Topic: while

Definition:
while loops repeat while a condition is true.

Why it matters:
They are useful when the number of iterations is not known upfront.

Interview Points:
- Checks condition before each iteration
- Can run zero times
- Needs a mutation step to avoid infinite loops
=================================================
*/

//// Example 1

let count = 0;
while (count < 2) {
  console.log(count);
  count++;
}

//// Output

0
1

//// Explanation

The loop checks the condition before running. If the condition is false initially, the block does not run.

//// Common Interview Questions

1. What happens if the condition is false on the first check?
2. Why must the loop variable change?
