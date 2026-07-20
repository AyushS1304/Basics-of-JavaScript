/*
=================================================
Topic: Local Storage and Session Storage

Definition:
Web storage APIs persist data in the browser.

Why it matters:
They are useful for simple client-side persistence.

Interview Points:
- localStorage persists across sessions
- sessionStorage is scoped to the tab
- Values are stored as strings
=================================================
*/

//// Example 1

localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme'));

//// Output

dark

//// Explanation

The value is stored in the browser and can be read later.

//// Common Interview Questions

1. What is the difference between localStorage and sessionStorage?
2. Why must values be strings?
