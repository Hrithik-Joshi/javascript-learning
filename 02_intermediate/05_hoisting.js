console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10
//Here, JavaScript moves var a to the top, but it remains undefined until it is assigned a value.
//BTS
// var a;
// console.log(a); // undefined
// a = 10;
// console.log(a); // 10


//Variables declared with let and const are also hoisted, but not initialized.
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
//let and const variables exist in a Temporal Dead Zone (TDZ) from the start of execution until the variable’s declaration is encountered.

//Function declarations are fully hoisted, meaning you can call the function before it is declared.
greet(); // Output: Hello, World!

function greet() {
  console.log("Hello, World!");
}
//If a function is assigned to a variable (using var, let, or const), only the variable declaration is hoisted, not the function definition.
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello!");
};

//Avoid relying on hoisting; declare variables and functions at the beginning of their scope for better readability and maintainability.