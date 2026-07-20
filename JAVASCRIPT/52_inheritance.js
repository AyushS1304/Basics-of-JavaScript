/*
=================================================
Topic: Inheritance

Definition:
Inheritance lets one class reuse behavior from another.

Why it matters:
It is important for understanding object-oriented design.

Interview Points:
- Use extends to inherit
- Call super() in the constructor
- Child classes can override methods
=================================================
*/

//// Example 1

class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log('sound'); }
}
class Dog extends Animal {
  speak() { console.log('bark'); }
}
new Dog('Buddy').speak();

//// Output

bark

//// Explanation

The Dog class inherits common behavior from Animal and overrides it for its own behavior.

//// Common Interview Questions

1. What does extends do?
2. Why is super() used?
