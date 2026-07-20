/*
=================================================
Topic: WeakMap and WeakSet

Definition:
WeakMap and WeakSet hold weak references to objects.

Why it matters:
They are useful when you want to avoid preventing garbage collection.

Interview Points:
- WeakMap keys must be objects
- WeakSet stores only objects
- Neither is iterable
=================================================
*/

//// Example 1

const wm = new WeakMap();
const obj = {};
wm.set(obj, 'value');
console.log(wm.get(obj));

//// Output

value

//// Explanation

The WeakMap uses the object as a key and does not prevent it from being collected while referenced weakly.

//// Common Interview Questions

1. What is the difference between WeakMap and Map?
2. Why are Weak collections useful?
