/*
=================================================
Topic: Throttle Implementation

Definition:
A throttle implementation limits how often a function can run.

Why it matters:
It is useful for scroll and resize handlers.

Interview Points:
- Track the last execution time
- Skip calls until the interval has passed
- Executes at most once per window
=================================================
*/

//// Example 1

function throttle(fn, delay) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
}
const log = throttle(() => console.log('throttled'), 50);
log();

//// Output

throttled

//// Explanation

Calls that happen too soon are skipped until the throttle interval expires.

//// Common Interview Questions

1. What problem does throttle solve?
2. How does the timing guard work?
