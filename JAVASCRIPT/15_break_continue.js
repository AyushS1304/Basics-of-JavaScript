/*
=================================================
Topic: break and continue

Definition:
break exits a loop entirely, while continue skips the current iteration.

Why it matters:
They help control flow in loops with minimal branching.

Interview Points:
- break exits the innermost loop
- continue skips the rest of the current iteration
- Use them carefully to keep code readable
=================================================
*/

//// Example 1

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}

//// Output

0
1
3

//// Explanation

The loop skips `2` and stops when it reaches `4`.

//// Common Interview Questions

1. What does continue do?
2. What does break do?
