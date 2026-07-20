/*
=================================================
Topic: reduce

Definition:
reduce folds an array into one value using an accumulator.

Why it matters:
It is powerful but often misunderstood in interviews.

Interview Points:
- Requires an accumulator
- Can sum, count, or build objects
- Works well for aggregation
=================================================
*/

//// Example 1

const nums = [1, 2, 3];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

//// Output

6

//// Explanation

The accumulator holds the running result across iterations.

//// Common Interview Questions

1. What does reduce do?
2. What is the accumulator?
