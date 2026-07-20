/*
=================================================
Topic: Object Methods

Definition:
Object methods are functions stored as object properties.

Why it matters:
They let objects encapsulate behavior.

Interview Points:
- Methods are functions inside objects
- Use this inside methods
- Useful for stateful objects
=================================================
*/

//// Example 1

const student = {
  name: 'Aru',
  greet() { console.log(`Hi, ${this.name}`); }
};
student.greet();

//// Output

Hi, Aru

//// Explanation

The method uses `this` to access the object instance.

//// Common Interview Questions

1. What is an object method?
2. Why is this important inside methods?
