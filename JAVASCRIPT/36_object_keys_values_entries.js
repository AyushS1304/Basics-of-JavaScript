/*
=================================================
Topic: Object.keys(), Object.values(), Object.entries()

Definition:
These methods help inspect object properties programmatically.

Why it matters:
They are useful in interviews because they show familiarity with modern object utilities.

Interview Points:
- Object.keys returns property names
- Object.values returns property values
- Object.entries returns key-value pairs
=================================================
*/

//// Example 1

const user = { name: 'Kia', age: 22 };
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//// Output

['name', 'age']
['Kia', 22]
[['name', 'Kia'], ['age', 22]]

//// Explanation

Each method gives a different view of the object for iteration or transformation.

//// Common Interview Questions

1. What does Object.keys return?
2. What is the difference between values and entries?
