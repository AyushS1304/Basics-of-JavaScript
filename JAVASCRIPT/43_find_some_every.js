/*
=================================================
Topic: find, some, every

Definition:
These methods check collection contents using predicates.

Why it matters:
They are common in interviews for quick validation logic.

Interview Points:
- find returns the first matching element
- some returns true if any match
- every returns true if all match
=================================================
*/

//// Example 1

const nums = [1, 2, 3];
console.log(nums.find(n => n > 1));
console.log(nums.some(n => n > 3));
console.log(nums.every(n => n > 0));

//// Output

2
false
true

//// Explanation

Each method stops as soon as the result is clear, which makes them efficient for early exits.

//// Common Interview Questions

1. What is the difference between find and filter?
2. What does every check?
