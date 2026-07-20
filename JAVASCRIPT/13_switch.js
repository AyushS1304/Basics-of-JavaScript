/*
=================================================
Topic: switch

Definition:
switch handles multiple value-based branches clearly.

Why it matters:
It is useful when many fixed cases exist.

Interview Points:
- Use strict equality in switch cases
- Use break to prevent fall-through
- Use default for fallback
=================================================
*/

//// Example 1

const day = 2;
switch (day) {
  case 1: console.log('Mon'); break;
  case 2: console.log('Tue'); break;
  default: console.log('Other');
}

//// Output

Tue

//// Explanation

switch compares the expression to each case using strict equality. Missing break can cause unintended execution.

//// Common Interview Questions

1. What is fall-through in switch?
2. Why is break important?
