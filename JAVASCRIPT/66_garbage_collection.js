/*
=================================================
Topic: Garbage Collection

Definition:
Garbage collection frees memory that is no longer reachable.

Why it matters:
It helps prevent memory leaks in long-running apps.

Interview Points:
- The engine reclaims unreachable objects
- Developers should avoid keeping unnecessary references
- Memory leaks happen when references are retained
=================================================
*/

//// Example 1

let value = { name: 'temp' };
value = null;
console.log('done');

//// Output

done

//// Explanation

Once the object is no longer referenced, the runtime may reclaim its memory.

//// Common Interview Questions

1. What is garbage collection?
2. Why can memory leaks still happen?
