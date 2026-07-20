/*
=================================================
Topic: Query Selectors and Event Listeners

Definition:
Query selectors find DOM elements, and event listeners react to user interactions.

Why it matters:
They are the starting point for interactive web pages.

Interview Points:
- querySelector selects the first matching element
- addEventListener attaches callbacks
- Events are triggered by user or browser actions
=================================================
*/

//// Example 1

const button = document.querySelector('button');
button?.addEventListener('click', () => console.log('clicked'));

//// Output

clicked

//// Explanation

The event listener runs when the button is clicked.

//// Common Interview Questions

1. What does querySelector do?
2. Why use addEventListener?
