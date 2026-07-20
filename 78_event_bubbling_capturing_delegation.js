/*
=================================================
Topic: Event Bubbling, Capturing, and Delegation

Definition:
Events travel through the DOM in phases and can be delegated to a parent element.

Why it matters:
These concepts are common in UI interviews and debugging.

Interview Points:
- Bubbling goes from child to parent
- Capturing goes from parent to child
- Delegation handles events at a common ancestor
=================================================
*/

//// Example 1

document.body.addEventListener('click', () => console.log('body'));

//// Output

body

//// Explanation

The listener on the parent handles the event after it bubbles up.

//// Common Interview Questions

1. What is event bubbling?
2. What is event delegation?
