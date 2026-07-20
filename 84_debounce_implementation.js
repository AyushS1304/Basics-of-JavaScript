/*
=================================================
Topic: Debounce Implementation

Definition:
A debounce implementation delays a function until the user pauses calling it.

Why it matters:
It is often asked in interviews because it shows control over timing and state.

Interview Points:
- Use a timer stored in closure
- Clear the prior timer on each call
- Invoke the function after a quiet period
=================================================
*/

//// Example 1

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(() => console.log('debounced'), 50);
log();

//// Output

debounced

//// Explanation

The timer is reset on each call, so execution waits until the last invocation has settled.

//// Common Interview Questions

1. What problem does debounce solve?
2. How is the timer reused?
