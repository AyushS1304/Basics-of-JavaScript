/*
=================================================
Topic: if else

Definition:
Conditionals let code make decisions.

Why it matters:
They are one of the most common interview topics because they show program flow.

Interview Points:
- Use if for a single condition
- Use else if for multiple branches
- Use else for fallback logic
=================================================
*/

//// Example 1

const age = 20;
if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}

//// Output

adult

//// Explanation

The condition is evaluated, and the matching branch runs. This is the core of branching logic.

//// Common Interview Questions

1. What is the difference between if and else?
2. Can an if statement have multiple conditions?
