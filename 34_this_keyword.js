/*
=================================================
Topic: this keyword

Definition:
this refers to the object or context from which a function is called.

Why it matters:
It is one of the most misunderstood JavaScript concepts in interviews.

Interview Points:
- In strict mode, this is undefined in plain functions
- In object methods, this points to the object
- Arrow functions inherit this from the surrounding scope
=================================================
*/

//// Example 1

const person = {
  name: 'Nina',
  show() { console.log(this.name); }
};
person.show();

//// Output

Nina

//// Explanation

The method call binds `this` to the object that owns the method.

//// Common Interview Questions

1. What does this refer to?
2. How does an arrow function change this behavior?
