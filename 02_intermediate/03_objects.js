const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(Object.keys(person)); //Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(person)); //Returns an array of values of the enumerable own properties of an object
console.log(Object.entries(person)); //Returns an array of key/values of the enumerable own properties of an object

// Destructure the 'age' property from the 'person' object
const {age} = person
// Destructure 'age' and assign it to a new variable 'personAge'
const { age: personAge } = person;
console.log(personAge)