/*
=================================================
Topic: JSON.parse and JSON.stringify

Definition:
These methods convert between JavaScript values and JSON text.

Why it matters:
They are essential for APIs and storage.

Interview Points:
- JSON.parse converts JSON text to a value
- JSON.stringify converts a value to JSON text
- Useful for client-server communication
=================================================
*/

//// Example 1

const obj = { name: 'Mina' };
const json = JSON.stringify(obj);
console.log(JSON.parse(json).name);

//// Output

Mina

//// Explanation

The object is first serialized into JSON text and then parsed back into an object.

//// Common Interview Questions

1. What does JSON.stringify do?
2. What does JSON.parse do?
