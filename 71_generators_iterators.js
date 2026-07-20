/*
=================================================
Topic: Generators and Iterators

Definition:
Generators produce values lazily, while iterators provide a protocol for stepping through data.

Why it matters:
They are useful for custom iteration and async control flow.

Interview Points:
- Generators use function*
- yield pauses execution
- Iterators follow next() semantics
=================================================
*/

//// Example 1

function* numbers() { yield 1; yield 2; }
const gen = numbers();
console.log(gen.next().value);

//// Output

1

//// Explanation

The generator pauses after each yield and resumes later.

//// Common Interview Questions

1. What is a generator?
2. How does yield work?
