/*
=================================================
Topic: for...of

Definition:
for...of iterates over iterable values such as arrays and strings.

Why it matters:
It is simpler than a traditional index loop for collections.

Interview Points:
- Works with arrays, strings, and sets
- Gives values directly
- Useful for readable iteration
=================================================
*/

//// Example 1

const nums = [1, 2, 3];
for (const num of nums) {
  console.log(num);
}

//// Output

1
2
3

//// Explanation

Each iteration receives the next value from the iterable.

//// Common Interview Questions

1. What does for...of iterate over?
2. How is it different from for...in?
