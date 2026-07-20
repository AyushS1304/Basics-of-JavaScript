/*
=================================================
Topic: for...in

Definition:
for...in iterates over enumerable property names of an object.

Why it matters:
It is mainly used for object properties, not arrays.

Interview Points:
- Used with objects
- Returns keys, not values
- Can include inherited enumerable properties
=================================================
*/

//// Example 1

const user = { name: 'Ira', age: 25 };
for (const key in user) {
  console.log(key, user[key]);
}

//// Output

name Ira
age 25

//// Explanation

The loop accesses each property name and then its value using bracket notation.

//// Common Interview Questions

1. What does for...in return?
2. When should you avoid for...in with arrays?
