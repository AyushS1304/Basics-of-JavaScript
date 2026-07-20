/*
=================================================
Topic: sort, splice, slice

Definition:
These methods change or copy arrays in different ways.

Why it matters:
They are commonly tested because they mutate or return new arrays.

Interview Points:
- sort arranges items in place
- splice inserts or removes elements
- slice copies a range without mutating
=================================================
*/

//// Example 1

const nums = [3, 1, 2];
console.log(nums.slice(0, 2));
nums.splice(1, 1);
console.log(nums);

//// Output

[3, 1]
[3, 2]

//// Explanation

slice creates a shallow copy of the selected range, while splice mutates the original array.

//// Common Interview Questions

1. Which methods mutate the original array?
2. What is the difference between slice and splice?
