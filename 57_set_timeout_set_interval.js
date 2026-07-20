/*
=================================================
Topic: setTimeout and setInterval

Definition:
These APIs schedule code to run later.

Why it matters:
They are common in timers, animations, and polling.

Interview Points:
- setTimeout runs once after a delay
- setInterval runs repeatedly
- Both return a timer ID
=================================================
*/

//// Example 1

setTimeout(() => console.log('later'), 0);
console.log('now');

//// Output

now
later

//// Explanation

The timer callback waits until the current stack finishes.

//// Common Interview Questions

1. What is the difference between setTimeout and setInterval?
2. Why might the timer run later than expected?
