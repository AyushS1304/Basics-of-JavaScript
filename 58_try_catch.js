/*
=================================================
Topic: try/catch

Definition:
try/catch handles runtime errors gracefully.

Why it matters:
It is essential for robust production code.

Interview Points:
- Wrap risky code in try
- Handle errors in catch
- Use finally for cleanup
=================================================
*/

//// Example 1

try {
  console.log(value);
} catch (error) {
  console.log('error');
}

//// Output

error

//// Explanation

The error is caught and handled instead of crashing the program.

//// Common Interview Questions

1. What does catch do?
2. Why is error handling important?
