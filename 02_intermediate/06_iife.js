/*
IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined
and executed immediately after its creation. It is commonly used to create a local scope
and avoid polluting the global namespace.
*/
(function() {
    console.log("This is an IIFE!");
})();

//or using arrow function syntax:
((name)=>{
    console.log(`${name} is using iife syntax`)
})("Hrithik");