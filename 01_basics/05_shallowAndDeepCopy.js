class Car {
  constructor(name, colors) {
    this.name = name;
    this.colors = colors; // Array reference (shallow copy by default)
  }
}

// Create a Honda car object
let hondaColors = ["Red", "Blue"];
let honda = new Car("Honda", hondaColors);

/*
A deep copy creates an entirely independent object, including all nested objects.
Any modifications to the copy do not affect the original.
*/

let deepcopyHonda = new Car(honda.name, [...honda.colors]); // Creates a new array
deepcopyHonda.colors.push("Green");

console.log("Deep Copy:", deepcopyHonda.colors.join(" "));
console.log("Original: ", honda.colors.join(" "));

/*
A shallow copy creates a new object, but nested objects (references) inside it remain the same.
That means if you modify a nested object in the copied version, 
it will also affect the original.
*/

let shallowCopyHonda = honda; // Assigns reference
shallowCopyHonda.colors.push("Green");

console.log("Shallow Copy:", shallowCopyHonda.colors.join(" "));
console.log("Original: ", honda.colors.join(" "));

// The join() method also joins all array elements into a string.

/*The spread operator (...) is a powerful feature in JavaScript 
that allows you to expand elements of an array or properties of an object. 
It is commonly used for copying, merging, and expanding data structures.
*/
