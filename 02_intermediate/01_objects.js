//Objects are mutable: They are addressed by reference, not by value.
// Object literals
const user = {
  fname: "Hrithik",
  "last name": "Joshi",
  age: 25,
  lastLoginDays: ["Monday", " Tuesday"],
};

console.log(user.fname);
// we can also access like this this is used as key are also kind of string
console.log(user["fname"]);
// console.log(user.last name) => Error
console.log(user["last name"]);

// interview question how to add symbol as a key in the object?

const mySym = Symbol("key1");

const user1 = {
  [mySym]: "myKey1",
};
console.log(user1);
console.log(user1[mySym]);

/*
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
*/


const x = user; //The object x is not a copy of person. The object x is user.
// The object x and the object user share the same memory address.
// Any changes to x will also change user: