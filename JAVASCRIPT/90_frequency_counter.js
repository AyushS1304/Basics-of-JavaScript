/*
=================================================
Topic: Frequency Counter

Definition:
A frequency counter stores counts of values to compare collections efficiently.

Why it matters:
It is common in interview problems like anagrams and duplicates.

Interview Points:
- Use an object or Map
- Count occurrences of each item
- Compare counts between datasets
=================================================
*/

//// Example 1

const count = {};
['a', 'b', 'a'].forEach(char => count[char] = (count[char] || 0) + 1);
console.log(count);

//// Output

{ a: 2, b: 1 }

//// Explanation

The object stores the frequency of each character.

//// Common Interview Questions

1. What is a frequency counter?
2. Why is it efficient?
