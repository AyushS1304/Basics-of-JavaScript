/*
=================================================
Topic: Debounce and Throttle

Definition:
Debounce delays a function until a quiet period ends, while throttle limits how often it runs.

Why it matters:
Both are common in performance-sensitive UI code.

Interview Points:
- Debounce waits for inactivity
- Throttle caps execution frequency
- Useful for scroll, resize, and input events
=================================================
*/

//// Example 1

const debounce = (fn, delay) => { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; };
const log = debounce(() => console.log('done'), 50);
log();

//// Output

done

//// Explanation

The function runs only after the delay period has passed without more calls.

//// Common Interview Questions

1. What is debounce?
2. What is throttle?
