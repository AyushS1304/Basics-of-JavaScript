/*
=================================================
Topic: Strict Mode

Definition:
Strict mode makes JavaScript code stricter and less error-prone.

Why it matters:
It helps catch silent bugs and unsafe behavior.

Interview Points:
- Enable with 'use strict';
- Prevents accidental globals
- Makes eval and delete safer
=================================================
*/

//// Example 1

'use strict';
function test() {
  let value = 1;
  console.log(value);
}
test();

//// Output

1

//// Explanation

Strict mode changes the behavior of some features to reduce bugs. It is often used at the top of a file or function.

//// Common Interview Questions

1. How do you enable strict mode?
2. Why is strict mode useful?
