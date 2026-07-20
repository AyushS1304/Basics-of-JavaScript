/*
=================================================
Topic: filter

Definition:
filter selects elements that satisfy a condition.

Why it matters:
It is excellent for narrowing arrays without mutating the original.

Interview Points:
- Returns a new array
- Keeps items where the predicate is true
- Useful for search and validation
=================================================
*/

//// Example 1

const nums = [1, 2, 3, 4];
console.log(nums.filter(n => n > 2));

//// Output

[3, 4]

//// Explanation

The callback returns true for the values that should remain.

//// Common Interview Questions

1. What does filter return?
2. What is a predicate?
