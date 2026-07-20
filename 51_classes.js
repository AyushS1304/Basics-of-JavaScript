/*
=================================================
Topic: Classes

Definition:
Classes provide a cleaner syntax for creating objects with shared behavior.

Why it matters:
They are a common interview topic because they simplify OOP patterns.

Interview Points:
- Use class keyword
- Define constructor for setup
- Use methods inside the class
=================================================
*/

//// Example 1

class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(`Hi, ${this.name}`); }
}
new Person('Maya').greet();

//// Output

Hi, Maya

//// Explanation

A class defines a blueprint, and instances are created with `new`.

//// Common Interview Questions

1. What is a class?
2. What is a constructor?
