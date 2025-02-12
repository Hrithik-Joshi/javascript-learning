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
