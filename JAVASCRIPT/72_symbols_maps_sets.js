/*
=================================================
Topic: Symbols, Map, and Set

Definition:
Symbols create unique identifiers, while Map and Set provide specialized collections.

Why it matters:
These are useful when you need identity-based keys or unique values.

Interview Points:
- Symbol creates a unique primitive
- Map stores key-value pairs with any key type
- Set stores unique values
=================================================
*/

//// Example 1

const id = Symbol('id');
const map = new Map([[id, 'value']]);
const set = new Set([1, 1, 2]);
console.log(map.get(id), set.size);

//// Output

value 2

//// Explanation

The Map uses the Symbol key and the Set removes duplicates.

//// Common Interview Questions

1. What is a Symbol?
2. What is the difference between Map and Set?
