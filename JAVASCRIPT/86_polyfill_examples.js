/*
=================================================
Topic: Polyfill Examples

Definition:
A polyfill adds missing functionality to older environments.

Why it matters:
Interviewers may ask this when discussing compatibility.

Interview Points:
- Polyfills mimic modern APIs
- Common examples include Array.prototype.map or Promise
- They patch missing features
=================================================
*/

//// Example 1

if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}
console.log([1, 2, 3].includes(2));

//// Output

true

//// Explanation

The polyfill supplies the missing method so older environments can use it.

//// Common Interview Questions

1. What is a polyfill?
2. Why are polyfills useful?
