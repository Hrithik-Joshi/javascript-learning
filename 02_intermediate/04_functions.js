// Function parameters are listed inside the parentheses () in the function definition.
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
// Function arguments are the values received by the function when it is invoked.

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}

/*
Since local variables are only recognized inside their functions,
variables with the same name can be used in different functions.
*/
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

//we dont know how many parameter will be passed we use rest operator it is same as spread but naming is different based on use case
function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

//Pasing object as an argument into functions

const person = {
  firstName: "Hrithik",
  lastName: "Joshi",
  age: 25,
  eyeColor: "blue",
};

handleObject(person)

function handleObject(person) {
  console.log(
    `Firstname is ${person.firstName} and Lastname is ${person.lastName}`
  );
}


// passing array as an argument into functions
const marvel_heroes = ["IronMan", "Thor", "Hulk"];

function handleArray(anyArray){
    return anyArray[1]
}

console.log(handleArray(marvel_heroes));
