/*
=================================================
Topic: preventDefault and stopPropagation

Definition:
preventDefault stops the browser's default action, while stopPropagation stops event propagation.

Why it matters:
They are common in form and UI interaction handling.

Interview Points:
- preventDefault cancels default behavior
- stopPropagation stops bubbling or capturing
- Use them carefully to avoid blocking needed behavior
=================================================
*/

//// Example 1

const link = document.createElement('a');
link.addEventListener('click', event => { event.preventDefault(); console.log('stopped'); });

//// Output

stopped

//// Explanation

The default navigation action is prevented, so the click does not follow the link.

//// Common Interview Questions

1. What does preventDefault do?
2. What does stopPropagation do?
