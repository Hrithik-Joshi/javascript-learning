const person = { fname: "John", lname: "Doe", age: 25 };

/*
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

const arr = ["x", "y", "z"];
arr[5] = "w"; // Creates a sparse array

for (const index in arr) {
    console.log(index, arr[index]); 
}
/* o/p: 
0 x
1 y
2 z
5 w
*/

//Do not use for in over an Array if the index order is important.
//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

//forEach
arr.forEach((value, index) => console.log(index, value)); // only executes the callback for indices that have defined value but donot  include prototype properties

//forOf
const arr = ["a", "b", "c"];

for (const value of arr) {
    console.log(value);
}
const str = "ABC";
for (const char of str) {
    console.log(char);
}

/*Important*/
// for...in (Used for Objects)
// Iterates over keys (property names or indices) of an object or an array.
// Used mainly for objects, but can be used on arrays (not recommended).
// Includes inherited properties, which may cause unintended behavior.

// for...of (Used for Arrays, Strings, Iterables)
// Iterates over values of an iterable (like an array, string, Map, Set, etc.).
// Does not iterate over objects (throws an error if used on a plain object).
// Preserves order.