/*
=================================================
Topic: fetch()

Definition:
fetch() requests data from a server using Promises.

Why it matters:
It is the modern way to work with HTTP in the browser.

Interview Points:
- Returns a Promise
- Needs response handling
- Use .then or async/await
=================================================
*/

//// Example 1

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data.id));

//// Output

1

//// Explanation

The response is parsed as JSON before the data is logged.

//// Common Interview Questions

1. What does fetch return?
2. Why do we call response.json()?
