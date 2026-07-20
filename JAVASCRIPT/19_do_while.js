/*
=================================================
Topic: do while

Definition:
do...while runs the body at least once before checking the condition.

Why it matters:
It is useful when you need guaranteed first execution.

Interview Points:
- Body runs once before condition check
- Good for input validation
- Still needs a termination condition
=================================================
*/

//// Example 1

let value = 0;
do {
  console.log(value);
  value++;
} while (value < 2);

//// Output

0
1

//// Explanation

The body executes once even if the condition is false initially.

//// Common Interview Questions

1. How is do...while different from while?
2. When would you use it?
